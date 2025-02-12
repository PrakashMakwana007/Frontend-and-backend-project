import { Client, Account, ID } from "appwrite";
import conf from '../config/conf'
export class AppwriteService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  
  async createAccount({ email, password, name }) {
    try {
      const userId = ID.unique();
      return await this.account.create(userId, email, password, name);
    } catch (error) {
      throw new Error(error?.message || "Failed to create account.");
    }
  }

  
  async login({ email, password }) {
    try {
        // Ensure no active session before logging in
        try {
            await this.account.deleteSession("current");
            console.log("Existing session cleared.");
        } catch (logoutError) {
            console.log("No existing session to clear or error occurred:", logoutError);
        }

        // Create a new session
        const response = await this.account.createEmailPasswordSession(email, password);
        console.log("Login successful:", response);

        // Fetch user data after successful login
        const currentUser = await this.account.get();
        console.log("User:", currentUser);

        return currentUser;
    } catch (error) {
        console.error("Login failed:", error);
        throw new Error(error?.message || "Invalid email or password.");
    }
}


  
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      return null; 
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions(); 
    } catch (error) {
      console.error("Logout failed:", error);
      throw new Error("Failed to log out.");
    }
  }
}
 
const appwriteService = new AppwriteService();
export default appwriteService;