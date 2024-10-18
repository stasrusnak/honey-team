import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc';


export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.VITE_BASE_URL,
    plugins: [react()],
  }
})
