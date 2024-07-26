import APP_IMAGES from "@/constants/images";
import React from "react";

interface Props {}

const AuthImageSection: React.FC<Props> = () => {
  return (
    <div className="hidden bg-muted lg:block">
      <img
        src={APP_IMAGES.PLACEHOLDER}
        alt="Image"
        width="1920"
        height="1080"
        className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  );
};

export default AuthImageSection;
