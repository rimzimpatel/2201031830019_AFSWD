// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // or vue, depending on your project

export default defineConfig({
  base: "/repo-name/", // replace 'repo-name' with your GitHub repo name
  plugins: [react()],
});
