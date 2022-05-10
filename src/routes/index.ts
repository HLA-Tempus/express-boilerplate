import { Router } from "express";

export const router = Router();

export function getURL(filename: string) {
  return filename
    .split("/src/routes")[1]
    .replace("/index.ts", "")
    .replace(".ts", "");
}

export function attachAPI(url: string, api: Router) {
  router.use(url, api);
}

import "./api/index";
