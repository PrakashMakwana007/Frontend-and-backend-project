import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-800" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        id={id} // 
        type={type}
        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2
             focus:ring-yellow-500 focus:border-yellow-500 transition duration-200 
             ease-in-out text-gray-700 bg-white border-gray-300 ${className}`}
        ref={ref} // 
        {...props}
      />
    </div>
  );
});

export default Input;
 