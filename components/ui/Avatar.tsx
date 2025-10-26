import React from "react";

interface AvatarProps {
  text?: string;
  alt: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ text, alt, size = "medium", className = "" }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gray-300 text-black font-bold ${sizeClasses[size]} ${className}`}
      aria-label={alt}
    >
      {text ? text.charAt(0).toUpperCase() : ""}
    </div>
  );
};

export default Avatar;
