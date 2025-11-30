import React from "react";
import Button from "@/components/common/Button";

const AboutPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">About Page Buttons</h1>
      <div className="space-x-4">
        <Button title="Small Rounded" size="small" shape="rounded-sm" />
        <Button title="Medium Rounded" size="medium" shape="rounded-md" />
        <Button title="Large Rounded Full" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default AboutPage;
