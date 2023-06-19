// 따로 빼놓을 함수들 보관하는 곳~
// 쿼리 함수도 여기 넣을 수 있을듯?

export const getTodayDate = (): string => {
  const today = new Date();
  const todayStrArray = today.toDateString().split(' ').splice(1);
  const [month, day, year] = todayStrArray;
  return `${month}, ${day} ${year}`;
};
