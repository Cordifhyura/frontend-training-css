import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 配置本地服务器跨域代理
    "/login":{
      target: "http://myapi.com",
      changeOrigin: true // 设置请求头的origin属性使其与target一致
    }
  }
})
