import { serve } from "bun";
import { existsSync } from "fs";
import { join } from "path";

const port = parseInt(process.env.PORT || "3000", 10);
const publicDir = join(process.cwd(), "out");

serve({
  port,
  async fetch(req) {
    const url = new URL(req.url);
    let pathname = url.pathname;

    if (pathname === "/") {
      pathname = "/index.html";
    } else if (!pathname.includes(".")) {
      if (!pathname.endsWith("/")) {
        pathname = `${pathname}/index.html`;
      } else {
        pathname = `${pathname}index.html`;
      }
    }

    const filePath = join(publicDir, pathname);

    if (existsSync(filePath)) {
      const file = Bun.file(filePath);
      const contentType = getContentType(filePath);
      return new Response(file, {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }

    const indexPath = join(publicDir, "index.html");
    if (existsSync(indexPath)) {
      const file = Bun.file(indexPath);
      return new Response(file, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

function getContentType(filePath: string): string {
  const ext = filePath.split(".").pop()?.toLowerCase();
  const types: Record<string, string> = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    svg: "image/svg+xml",
    ico: "image/x-icon",
    woff: "font/woff",
    woff2: "font/woff2",
    ttf: "font/ttf",
    eot: "application/vnd.ms-fontobject",
    webp: "image/webp",
    xml: "application/xml",
    txt: "text/plain",
  };
  return types[ext || ""] || "application/octet-stream";
}

console.log(`Server running on http://localhost:${port}`);
