import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import express from "express";
import "dotenv/config.js";

function useExpressInVite(entry, isRouter = false) {
  return {
    name: "expressAppMiddleware",
    configureServer: async (server) => {
      async function expressAppMiddleware(req, res, next) {
        const app = await server.ssrLoadModule(entry);
        (isRouter ? express().use(app.default) : app.default)(req, res, next);
      }

      server.middlewares.use(expressAppMiddleware);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  server: { port: process.env.PORT },
  plugins: [useExpressInVite("/src/server/app.js", true), react()],
});
