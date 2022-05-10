import { Router } from "express";

export const router = Router();

export function attachAPI(filename: string, api: Router) {
  const path = filename
    .split("/src/routes")[1]
    .replace("/index.ts", "")
    .replace(".ts", "");
  router.use(path, api);
}

import "./api/index";
