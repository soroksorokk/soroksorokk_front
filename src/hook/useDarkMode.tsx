import { useRecoilState } from 'recoil';
import { darkModeState } from '../store/isDarkModeState';

const useDarkMode = () => {
  const [isDark, setIsDark] = useRecoilState(darkModeState);

  const handleToggleDarkMode = () => {
    setIsDark((prevState: boolean) => {
      const prevDarkModeState = !prevState;

      if (prevDarkModeState) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.removeItem('theme');
      }
      return prevDarkModeState;
    });
  };

  return { isDark, setIsDark, handleToggleDarkMode };
};
export default useDarkMode;
