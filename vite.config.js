import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import generouted from "@generouted/react-router/plugin";
import svgr from "vite-plugin-svgr";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), generouted(), svgr()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
