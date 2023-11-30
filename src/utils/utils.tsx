/* 메인 페이지에서 보여질 오늘 날짜를 리턴하는 함수 */
export const getTodayDate = (): {
  year: number;
  day: number;
  month: string;
} => {
  const date = new Date();
  const todayDate = {
    year: date.getFullYear(),
    day: date.getDate(),
    month: date.toLocaleString('en-US', { month: 'short' }),
  };

  const { year, day, month } = todayDate;
  return { year, day, month };
};
