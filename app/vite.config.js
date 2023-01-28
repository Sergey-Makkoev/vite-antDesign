import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import dns from 'dns'
import react from '@vitejs/plugin-react'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      filename: "remoteEntry.js",
      remotes: {
        app: 'http://localhost:5001/assets/remoteEntry.js',
        shared: 'http://localhost:5000/assets/shared.js',
      },
      exposes: {
        "./store": "./src/store",
      },
      shared: ['react', 'antd']
    })
  ],
  preview: {
    host: 'localhost',
    port: 5001,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        'app/store',
        './app/store',
      ]
    }
  }
})
