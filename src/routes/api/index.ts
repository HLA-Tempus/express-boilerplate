import { Router } from "express";
import { attachAPI } from "~/routes/config";

const router = Router();
attachAPI(__filename, router);

router.get("/", async (req, res) => {
  return res.status(200).json("Hello, world!");
});