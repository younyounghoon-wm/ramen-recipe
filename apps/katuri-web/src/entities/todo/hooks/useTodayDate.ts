const DAY_MAP = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
} as const;

const useTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const date = today.getDate().toString().padStart(2, "0");
  const day = today.getDay() as keyof typeof DAY_MAP;

  return {
    year,
    month,
    date,
    day: DAY_MAP[day],
  };
};

export default useTodayDate;
