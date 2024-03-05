import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { ReactTyped } from "react-typed";

// Function to calculate the discounted price
const calculateDiscountedPrice = (price) => {
  return Math.round(price * 0.6); // 40% discount
};

export default function Pricing() {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Calculate the time remaining until May 30th
  function calculateTimeRemaining() {
    const now = new Date();
    const endDate = new Date("2024-05-30T00:00:00Z");
    const timeRemaining = endDate - now;
    return Math.max(0, timeRemaining); // Ensure timeRemaining is not negative
  }

  // Update the time remaining every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer render function
  const renderTimer = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="text-4xl font-semibold">Discount expired!</div>;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return (
      <div className="flex">
        <div className="mr-2 animate-tickdown">
          <div className="text-4xl font-semibold">{days}</div>
          <div className="text-xs">Days</div>
        </div>
        <div className="mr-2 animate-tickdown">
          <div className="text-4xl font-semibold">{hours}</div>
          <div className="text-xs">Hours</div>
        </div>
        <div className="mr-2 animate-tickdown">
          <div className="text-4xl font-semibold">{minutes}</div>
          <div className="text-xs">Minutes</div>
        </div>
        <div className="animate-tickdown">
          <div className="text-4xl font-semibold">{seconds}</div>
          <div className="text-xs">Seconds</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <section className="dark:bg-[#000300] bg-[#000300]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#b54b9f]">
              Our Plans
            </h2>
            <p className="mb-5 font-light text-gray-300 sm:text-xl">
              Not sure where your project fits in? Contact us, and we can
              schedule a meeting to discuss further. Prices may be negotiable or
              require additional costs to meet specific demands.
            </p>
            <div className="mb-5 text-2xl font-semibold text-[#A4CE95]">
            <ReactTyped
            className='md:text-3xl sm:text-xl text-lg font-bold md:pl-4 pl-2'
            strings={["START UP DISCOUNT : 40%" ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
            </div>
            <div className="mb-5 text-xl font-semibold text-[#b54b9f]">
              Discount Ends: May 30th
            </div>
            <div className="mb-5 flex justify-center">
              <div className="flex items-center justify-center w-72 h-72 text-[#CCD3CA] rounded-full">
                <CountdownCircleTimer
                  isPlaying
                  duration={timeRemaining}
                  strokeWidth={6}
                  size={300}
                  colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000", 0.33]]}
                >
                  {renderTimer}
                </CountdownCircleTimer>
              </div>
            </div>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Starter Plan */}
            <PlanCard
              title="Starter"
              priceRange={[16665, 40500]}
              description="Best Option For Personal Use"
              features={[
                "Light Scale Configuration",
                "No setup or hidden fees",
                "Free Maintenance: 15 Days",
              ]}
            />

            {/* Medium Scale Plan */}
            <PlanCard
              title="Medium Scale"
              priceRange={[41665, 45000]}
              description="Relevant for Growing Businesses"
              features={[
                "Mid Scale Configuration",
                "No setup or hidden fees",
                "Free Hosting: 30 Days",
                "Free Maintenance: 45 Days",
              ]}
            />

            {/* Large Scale Plan */}
            <PlanCard
              title="Large Scale"
              priceRange={[66666, Infinity]}
              description="Relevant for large scale demands"
              features={[
                "Large Scale Configuration",
                "No setup or hidden fees",
                "Free Hosting: 60 Days",
                "Free Maintenance: 90 Days",
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// PlanCard component to display each plan
const PlanCard = ({ title, priceRange, description, features }) => {
  const discountedPriceRange = calculateDiscountedPrice(priceRange[0]);

  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-[#F2EFE5] rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {description}
      </p>
      <div className="flex justify-center items-baseline my-8 relative">
        <span className="absolute top-0 left-0 right-0 text-center text-gray-500 line-through">
          NPR {priceRange[0]} - {priceRange[1] === Infinity ? "∞" : priceRange[1]}
        </span>
        <span className="mr-2 mt-8 text-3xl font-extrabold relative">
          NPR {discountedPriceRange} - {priceRange[1] === Infinity ? "∞" : discountedPriceRange + 10001}
        </span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};