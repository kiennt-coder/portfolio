"use client";

import { useEffect } from 'react';
import { THEME } from '@enums/common';
import { useTheme as useNextTheme } from 'next-themes';

export const useTheme = () => {
  const { theme, setTheme } = useNextTheme();

  const toggleTheme = () => {
    if (theme === THEME.DARK) {
      setTheme(THEME.LIGHT);
    } else {
      setTheme(THEME.DARK);
    }
  };

  const setSystemTheme = () => {
    setTheme(THEME.SYSTEM);
  };

  const systemTheme = typeof window !== 'undefined' ? window.matchMedia(`(prefers-color-scheme: ${THEME.DARK})`) : null;
  
  useEffect(() => {

    const currentTheme = systemTheme?.matches ? THEME.DARK : THEME.LIGHT

      setTheme(currentTheme);
      localStorage.setItem('theme', currentTheme);
    

    // eslint-disable-next-line
  }, [systemTheme?.matches])

  return {
    theme,
    toggleTheme,
    setSystemTheme,
  };
};
