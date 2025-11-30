import React from "react";
import { type ButtonProps } from "../../interfaces";

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const shapeClasses = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  className = "",
  disabled = false,
  size = "medium",
  shape = "rounded-md",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
