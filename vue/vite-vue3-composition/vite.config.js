import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// named import is different from destructure
// import { resolve } from 'path';
import path from 'path';

const { resolve } = path;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {find:"@",replacement:resolve(__dirname,"src")}
    ]
  },
  server: {
    // 配置本地服务器跨域代理
    "/login":{
      target: "http://myapi.com",
      changeOrigin: true // 设置请求头的origin属性使其与target一致
    }
  }
})
