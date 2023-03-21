import { defineStore } from 'pinia'
import userStore from '@/store/userStore'

export const useUserStore = defineStore('userStore', userStore)
