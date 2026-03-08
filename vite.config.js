import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set base to "/" for custom domain, or "/<repo-name>/" for github.io subdirectory
// e.g. if your repo is github.com/guilopeszw/portfolio, set base: "/portfolio/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});
