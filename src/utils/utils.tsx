/* 메인 페이지에서 보여질 오늘 날짜를 리턴하는 함수 */
export const getTodayDate = (): string => {
  const today = new Date();
  const todayStrArray = today.toDateString().split(' ').splice(1);
  const [month, day, year] = todayStrArray;
  return `${month}, ${day} ${year}`;
};
