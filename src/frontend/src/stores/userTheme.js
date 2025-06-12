// stores/useThemeStore.js
import { defineStore } from 'pinia';
import { i18n } from '@/main'

export const useThemeStore = defineStore('settings', {
	state: () => ({
		accentColor: localStorage.getItem('accentColor') || 'green',
		appTheme: localStorage.getItem('appTheme') || 'light',
		language: localStorage.getItem('language') || 'de',
	}),
	actions: {
		setAccentColor(color) {
			this.accentColor = color;
			localStorage.setItem('accentColor', color);
			document.documentElement.style.setProperty(
				'--color-accent',
				getComputedStyle(document.documentElement).getPropertyValue(`--color-${color}`)
			);
		},
		toggleAppTheme() {
			if (this.appTheme == "light") {
				this.setAppTheme("dark");
			} else {
				this.setAppTheme("light");
			}
		},
		setAppTheme(theme) {
			this.appTheme = theme;
			localStorage.setItem('appTheme', theme);

			document.documentElement.style.setProperty(
				'--color-background',
				getComputedStyle(document.documentElement).getPropertyValue(`--background-${theme}`)
			);

			document.documentElement.style.setProperty(
				'--color-element',
				getComputedStyle(document.documentElement).getPropertyValue(`--element-${theme}`)
			);

			document.documentElement.style.setProperty(
				'--color-sub-element',
				getComputedStyle(document.documentElement).getPropertyValue(`--sub-element-${theme}`)
			);

			document.documentElement.style.setProperty(
				'--color-text',
				getComputedStyle(document.documentElement).getPropertyValue(`--text-color-${theme == "light" ? "light" : "dark"}`)
			);

			document.documentElement.style.setProperty(
				'--color-text-alt',
				getComputedStyle(document.documentElement).getPropertyValue(`--text-color-alt-${theme == "light" ? "dark" : "light"}`)
			);
		},
		setLanguage(language) {
			this.language = language;
			localStorage.setItem('language', language);
			i18n.global.locale.value = language;
		},
		applyAccentColor() {
			this.setAccentColor(this.accentColor);
		},
		applyAppTheme() {
			this.setAppTheme(this.appTheme);
		},
		applyLanguage() {
			this.setLanguage(this.language);
		},
	},
});