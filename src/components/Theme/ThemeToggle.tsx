import { useTheme } from '../../context/ThemeContext.';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 p-2 rounded-full bg-light-muted dark:bg-dark-muted text-light-text dark:text-dark-text"
    >
      {theme === 'light' ? '🌞' : '🌜'}
    </button>
  );
}
