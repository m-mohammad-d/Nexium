import React, { useState } from "react";
import { getDaysInMonth, getFirstDayOfMonth } from "../utils/CalendarUtils";
import DraggableWindow from "./DraggableWindow";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const today = new Date();

  const year: number = currentDate.getFullYear();
  const month: number = currentDate.getMonth();

  const daysInMonth: number = getDaysInMonth(year, month);
  const firstDayOfMonth: number = getFirstDayOfMonth(year, month);

  const handlePrevMonth = (): void => {
    const newDate = new Date(year, month - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = (): void => {
    const newDate = new Date(year, month + 1);
    setCurrentDate(newDate);
  };

  const generateDays = (): JSX.Element[] => {
    const days: JSX.Element[] = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="flex justify-center items-center h-10 w-10"
        ></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        today.getDate() === day &&
        today.getMonth() === month &&
        today.getFullYear() === year;
      days.push(
        <div
          key={day}
          className={`flex justify-center items-center h-10 w-10 rounded-full ${
            isToday ? "bg-blue-600 text-white" : "hover:bg-red-500"
          } cursor-pointer`}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  return (
    <DraggableWindow title="Calendar">
      <div className="w-full h-full mx-auto p-4 bg-gray-800 text-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevMonth}
            className="text-gray-400 hover:text-white"
          >
            &lt;
          </button>
          <div className="text-lg font-bold">
            {currentDate.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </div>
          <button
            onClick={handleNextMonth}
            className="text-gray-400 hover:text-white"
          >
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="flex justify-center items-center font-bold text-gray-400"
            >
              {day}
            </div>
          ))}
          {generateDays()}
        </div>
      </div>
    </DraggableWindow>
  );
};

export default Calendar;
