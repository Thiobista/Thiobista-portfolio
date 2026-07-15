"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  { metric: "Projects", value: "20", postfix: "+" },
  { metric: "Users", value: "100", postfix: "+" },
  { metric: "Years of experience", value: "3", postfix: "+" },
];

const AchievementsSection = () => {
  return (
    <div className="section-container">
      <div className="card grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold flex flex-row items-center justify-center">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-muted text-xs sm:text-sm md:text-base mt-1 px-2">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
