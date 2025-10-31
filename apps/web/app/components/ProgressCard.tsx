"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ProgressCard = ({
  title,
  percentage,
  sl_no,
}: {
  title: string;
  percentage: number;
  sl_no: number;
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Animate progress bar on mount
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  // Determine color scheme based on percentage
  const getColorScheme = () => {
    if (percentage >= 80) {
      return {
        gradient: "from-emerald-500 via-teal-500 to-cyan-500",
        bgGradient: "from-emerald-50 to-cyan-50",
        darkBgGradient: "from-emerald-950/30 to-cyan-950/30",
        ring: "ring-emerald-500/20",
        glow: "shadow-emerald-500/50",
        textColor: "text-emerald-700 dark:text-emerald-400",
        badge: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
        icon: "🚀",
      };
    } else if (percentage >= 60) {
      return {
        gradient: "from-blue-500 via-indigo-500 to-purple-500",
        bgGradient: "from-blue-50 to-purple-50",
        darkBgGradient: "from-blue-950/30 to-purple-950/30",
        ring: "ring-blue-500/20",
        glow: "shadow-blue-500/50",
        textColor: "text-blue-700 dark:text-blue-400",
        badge: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
        icon: "⚡",
      };
    } else if (percentage >= 40) {
      return {
        gradient: "from-amber-500 via-orange-500 to-yellow-500",
        bgGradient: "from-amber-50 to-yellow-50",
        darkBgGradient: "from-amber-950/30 to-yellow-950/30",
        ring: "ring-amber-500/20",
        glow: "shadow-amber-500/50",
        textColor: "text-amber-700 dark:text-amber-400",
        badge: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
        icon: "📈",
      };
    } else {
      return {
        gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
        bgGradient: "from-rose-50 to-fuchsia-50",
        darkBgGradient: "from-rose-950/30 to-fuchsia-950/30",
        ring: "ring-rose-500/20",
        glow: "shadow-rose-500/50",
        textColor: "text-rose-700 dark:text-rose-400",
        badge: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300",
        icon: "💪",
      };
    }
  };

  const colorScheme = getColorScheme();

  return (
    <Link href={`/progress/${sl_no}`}>
      <div
        className={`
          group relative overflow-hidden
          bg-gradient-to-br ${colorScheme.bgGradient} dark:${colorScheme.darkBgGradient}
          backdrop-blur-sm
          rounded-2xl shadow-lg hover:shadow-2xl
          border border-white/20 dark:border-gray-700/50
          p-6 mb-4
          transition-all duration-500 ease-out
          hover:scale-[1.02] hover:-translate-y-1
          ${isHovered ? colorScheme.glow : ""}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl" role="img" aria-label="status">
                  {colorScheme.icon}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorScheme.badge}`}>
                  Level {sl_no}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-gray-100 dark:group-hover:to-gray-400 transition-all duration-300">
                {title}
              </h3>
            </div>
            
            {/* Percentage Display */}
            <div className="ml-4 flex flex-col items-end">
              <div className={`text-3xl font-black ${colorScheme.textColor} tabular-nums`}>
                {animatedPercentage.toFixed(0)}%
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Complete
              </div>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="relative">
            {/* Background track */}
            <div className="w-full bg-gray-200/80 dark:bg-gray-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
              {/* Animated progress fill */}
              <div
                className={`
                  h-3 rounded-full
                  bg-gradient-to-r ${colorScheme.gradient}
                  transition-all duration-1000 ease-out
                  relative overflow-hidden
                  shadow-lg
                `}
                style={{ width: `${animatedPercentage}%` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>

            {/* Progress milestones */}
            <div className="flex justify-between mt-2">
              {[25, 50, 75, 100].map((milestone) => (
                <div
                  key={milestone}
                  className={`text-xs font-medium transition-colors duration-300 ${
                    percentage >= milestone
                      ? colorScheme.textColor
                      : "text-gray-400 dark:text-gray-600"
                  }`}
                >
                  {milestone}%
                </div>
              ))}
            </div>
          </div>

          {/* Footer Stats */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="font-medium">Progress Tracking</span>
            </div>
            
            <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
              <span>View Details</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Corner decoration */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colorScheme.gradient} opacity-10 blur-2xl rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500`}></div>
        <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${colorScheme.gradient} opacity-10 blur-2xl rounded-full translate-y-10 -translate-x-10 group-hover:scale-150 transition-transform duration-500`}></div>
      </div>
    </Link>
  );
};

export default ProgressCard;

