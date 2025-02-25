import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { CalendarDays } from "lucide-react";

const TimelineItem = ({ title, date, description, imageUrl, index }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const colors = {
    bg: isDark ? "bg-gray-800" : "bg-white",
    title: isDark ? "text-white" : "text-gray-800",
    date: isDark ? "text-gray-400" : "text-gray-500",
    description: isDark ? "text-gray-300" : "text-gray-600",
    circle: isDark ? "bg-gray-700" : "bg-gray-100",
  };

  return (
    <div className="mb-8 flex w-full items-center">
      {/* Circle and Image */}
      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 relative z-10">
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${colors.circle} shadow-xl w-12 h-12 md:w-16 md:h-16 rounded-full`}>
          <img
            src={imageUrl || "/placeholder.svg"}
            alt=""
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className={`ml-4 flex-grow max-w-md ${colors.bg} rounded-lg shadow-xl px-4 py-3 md:px-6 md:py-4`}>
        <h3 className={`mb-1 font-bold ${colors.title} text-lg md:text-xl`}>{title}</h3>
        <p className={`text-xs md:text-sm ${colors.date} mb-2 flex items-center`}>
          <CalendarDays className="mr-2 h-3 w-3 md:h-4 md:w-4" />
          {date}
        </p>
        <p className={`${colors.description} text-xs md:text-sm`}>{description}</p>
      </div>
    </div>
  );
};

const TimelineCore = ({ items }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const lineColor = !isDark ? "bg-gray-700" : "bg-gray-200";

  return (
    <div className={`min-h-screen p-4 md:p-8`}>
      <div className="container mx-auto md:px-60 py-8 max-w-5xl">
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-6 md:left-8 top-0 bottom-0 w-0.5 ${lineColor}`}></div>

          {items.map((item, index) => (
            <TimelineItem key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineCore;
