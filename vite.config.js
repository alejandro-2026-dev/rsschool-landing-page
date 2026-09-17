import { defineConfig } from "vite";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const SRC = resolve(__dirname, "src");
const PARTIALS = resolve(SRC, "partials");

export default defineConfig({
  root: SRC,
  publicDir: resolve(__dirname, "public"),
  server: { port: 4000, open: true },
  base: "./",
  build: {
    sourcemap: true,
    minify: false,
    cssMinify: false,
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(SRC, "index.html"),
        catalog: resolve(SRC, "catalog.html"),
      },
    },
  },
  plugins: [
    {
      name: "html-partials",
      transformIndexHtml(html) {
        return html
          .split("\n")
          .map((line) => {
            const text = line.trim();
            if (!text.startsWith("<!-- @include ")) return line;
            const name = text.slice("<!-- @include ".length, -4).trim();
            return readFileSync(resolve(PARTIALS, `${name}.html`), "utf-8");
          })
          .join("\n");
      },
      configureServer(server) {
        server.watcher.add(PARTIALS);
        server.watcher.on("change", (file) => {
          if (file.startsWith(PARTIALS)) {
            server.ws.send({ type: "full-reload" });
          }
        });
      },
    },
  ],
});
