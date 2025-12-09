import React, { useState } from "react";

/**
 * DatePicker props:
 * - onDateSelect(date: Date)
 * - minDate: string | Date (optional)  -> dates before this are disabled
 * - maxDate: string | Date (optional)  -> dates after this are disabled
 */
const DatePicker = ({ onDateSelect, minDate, maxDate }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Helpers to normalize incoming min/max (string or Date)
  const normalize = (d) => {
    if (!d) return null;
    const nd = d instanceof Date ? new Date(d) : new Date(d);
    nd.setHours(0, 0, 0, 0);
    return nd;
  };

  const min = normalize(minDate);
  const max = normalize(maxDate);

  const isDisabledDate = (date) => {
    const d = new Date(currentYear, currentMonth, date);
    d.setHours(0, 0, 0, 0);

    // Disable past (strictly before today)
    if (d < today) return true;

    // Disable before minDate (if provided)
    if (min && d < min) return true;

    // Disable after maxDate (if provided)
    if (max && d > max) return true;

    return false;
  };

  const disablePrevMonth =
    currentYear < today.getFullYear() ||
    (currentYear === today.getFullYear() && currentMonth <= today.getMonth());

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear((y) => y + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const goToPrevMonth = () => {
    if (disablePrevMonth) return;
    if (currentMonth === 0) {
      setCurrentYear((y) => y - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleDateClick = (date) => {
    if (isDisabledDate(date)) return;

    const selectedDate = new Date(`${currentYear}-${currentMonth + 1}-${date}`);

    setSelectedDate(selectedDate);

    if (onDateSelect) {
      onDateSelect(selectedDate);
    }
  };

  return (
    <div className="w-75 bg-white shadow-lg p-4 rounded-xl border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={goToPrevMonth}
          disabled={disablePrevMonth}
          className={`px-3 py-1 rounded ${
            disablePrevMonth
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {"<"}
        </button>

        <h2 className="font-semibold text-gray-700">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentYear}
        </h2>

        <button
          onClick={goToNextMonth}
          className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
        >
          {">"}
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 text-center gap-2 text-sm text-gray-700">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d} className="font-semibold text-gray-500">
            {d}
          </div>
        ))}

        {/* Empty cells before first day */}
        {Array(new Date(currentYear, currentMonth, 1).getDay())
          .fill(null)
          .map((_, i) => (
            <div key={i} />
          ))}

        {/* Dates */}
        {[...Array(daysInMonth)].map((_, i) => {
          const date = i + 1;
          const disabled = isDisabledDate(date);

          return (
            <button
              key={date}
              disabled={disabled}
              onClick={() => handleDateClick(date)}
              className={`py-2 rounded-lg ${
                disabled
                  ? "text-gray-300 cursor-not-allowed bg-gray-100"
                  : "hover:bg-orange-200 bg-orange-50 text-gray-700"
              } ${
                selectedDate &&
                selectedDate.getDate() === date &&
                selectedDate.getMonth() === currentMonth &&
                selectedDate.getFullYear() === currentYear
                  ? "bg-orange-500 text-white"
                  : ""
              }`}
            >
              {date}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DatePicker;
