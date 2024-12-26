import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            darkMode: false,
            toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
        }),
        { name: "theme-preference" }
    )
);

export default useThemeStore;
