import { useState, useEffect } from "react";
import "./parallax.css";

export const Parallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
       <div className="background"></div>
      <section
        style={{
          backgroundSize: `${(window.outerHeight - scrollPosition) / 3}%`,
        }}
        className="banner container"
      >
        <h2>Car Wash stations</h2>
        <button>Get Started</button>
      </section>
      <section className="container">
        <h2>What is Car Wash stations?</h2>
        <p>
        Welcome to our Car Wash Hub, the ultimate destination for all your car washing needs! Our platform brings together a comprehensive list of car wash stations, making it easy for you to find the nearest one to you. Explore a wide range of services offered by each station, from basic washes to premium detailing
        </p>
        <p>
        With our user-friendly interface, you can quickly select the car wash station that suits your preferences and location. But that's not all – we offer a unique feature that lets you see real-time queues at each station. Find out how many clients are waiting and make an informed decision on where to go based on the queue length.
        </p>
        <p>
        Say goodbye to long waits and hello to a sparkling clean car with our Car Wash Hub. Discover the best car wash stations, choose your service, and keep your ride looking its best, hassle-free
        </p>
      </section>
    </>
  );
};
export default Parallax;