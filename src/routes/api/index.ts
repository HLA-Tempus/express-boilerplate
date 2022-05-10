import { Router } from "express";
import { attachAPI, getURL } from "~/routes";

const api = Router();
const url = getURL(__filename);
attachAPI(url, api);

api.get("/", async (req, res) => {
  return res.status(200).json("Hello, world!");
});

export default url;
