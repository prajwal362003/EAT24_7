import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div className="about_page">
      <h1>About Us Page</h1>
      <p>
        Welcome to EAT247, your go-to destination for delicious meals delivered
        right to your doorstep, any time, day or night. At EAT247, we're
        passionate about connecting you with a diverse selection of cuisines,
        from local favorites to global delights, curated to satisfy your
        cravings around the clock. Our mission is simple: to make food ordering
        convenient, reliable, and enjoyable for everyone, ensuring that every
        bite brings joy to your table. Join us on our culinary journey as we
        strive to redefine the way you experience food delivery, one delightful
        meal at a time.
      </p>
      <Profile name={"Prajwal"} />
      <ProfileClass name={"PrajwalClass"} />
      <Outlet />
    </div>
  );
};

export default About;
