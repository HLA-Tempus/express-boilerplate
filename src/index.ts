import "~/database/config";
import express from "express";
import { router } from "~/routes/config";

const app = express();
app.use(express.json());
app.use("/", router);

app.listen(3000, () => {
  console.log("Server has been started...");
});
