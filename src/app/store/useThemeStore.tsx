import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
    darkMode: boolean;
    toggleDarkMode: () => void;
    initializeTheme: () => void;
}

const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => ({
            darkMode: true,
            toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
            initializeTheme: () => {
                const persistedState = get().darkMode;
                if (persistedState !== undefined) {
                    return;
                }
                const hours = new Date().getHours();
                const isDarkMode = hours >= 18 && hours < 8
                set({ darkMode: isDarkMode });
            },
        }),
        {
            name: "theme-preference",
        }
    )
);

export default useThemeStore;
