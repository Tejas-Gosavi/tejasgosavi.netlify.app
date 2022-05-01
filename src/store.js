import { defineStore } from 'pinia'

export const store = defineStore('main', {
	state: () => {
		return {
			isLight: true,
		}
	},
	actions: {
		toogleTheme() {
			this.$state.isLight = !this.$state.isLight;
		},
	},
	getters: {
		isThemeLight: (state) => {
			return state.isLight;
		},
	},
})