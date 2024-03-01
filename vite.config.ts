import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), /* reactRefresh() */],
  server: {
    port: 3001,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      "@/Components": "/src/Components/index.d.ts",
      "@/types": "/src/types/index.ts",
    }
  },
  
})
