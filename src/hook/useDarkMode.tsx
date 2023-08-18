import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../store/isDarkModeState';

const useDarkMode = () => {
  const [isDark, setIsDark] = useRecoilState(darkModeState);

  // 다크 모드 설정 시스템 설정 값에 의관한 결과 반환
  useEffect(() => {
    const setDarkModeFromSystemPreferences = () => {
      if (
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setIsDark(true);
      } else {
        setIsDark(localStorage.theme === 'dark');
      }
    };

    setDarkModeFromSystemPreferences();
  }, []);

  // 다크 모드 상태가 변경되면 localStorage와 HTML 요소에서도 반영
  useEffect(() => {
    if (isDark || !('theme' in localStorage)) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark-mode');
    } else {
      localStorage.removeItem('theme');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDark]);

  const darkModeToggleHandler = () => {
    setIsDark(!isDark);
  };

  return { isDark: isDark, toggleDarkMode: darkModeToggleHandler };
};

export default useDarkMode;
