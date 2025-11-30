import React from "react";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home Page.</p>

      <Card
        title="Latest Updates"
        content="Check out the latest news, updates, and improvements made this week."
      />

      <Card
        title="User Tips"
        content="Discover useful tips that help you get the most out of your experience."
      />
    </div>
  );
};


export default HomePage;
