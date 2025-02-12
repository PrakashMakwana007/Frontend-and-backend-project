const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};

// console.log(" Appwrite URL:", conf.appwriteUrl);
// console.log("Project ID:", conf.projectId);
// console.log(" Database ID:", conf.databaseId);
// console.log(" Collection ID:", conf.collectionId);
// console.log(" Bucket ID:", conf.bucketId);

export default conf;
