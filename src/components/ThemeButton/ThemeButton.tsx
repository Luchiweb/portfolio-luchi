export function ButtonDarkMode() {
  function themeHandler() {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  }

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="flex flex-row justify-between toggle">
      <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            name="dark-mode"
            id="dark-toggle"
            className="checkbox hidden"
            onClick={() => themeHandler()}
          />
          <div className="block border dark:border-white border-bg-color w-10 h-6 rounded-full"></div>
          <div className="absolute left-1 top-1 dark:translate-x-full dark:bg-white bg-bg-color w-4 h-4 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
}
