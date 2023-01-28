import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shared',
      filename: 'shared.js',
      remotes: {
        app: 'http://localhost:5001/assets/remoteEntry.js',
      },
      exposes: {
        './Button': './src/components/Button',
        "./Header": "./src/Header",
      },
      shared: ['react', 'antd']
    })
  ],
  preview: {
    host: 'localhost',
    port: 5000,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
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
