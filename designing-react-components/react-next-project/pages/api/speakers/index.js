//import { data } from '../../../SpeakerData';
import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default async function handler(req, res) {
  //res.status(200).send(JSON.stringify(data, null, 2));

  const jsonFile = path.resolve("./", "db.json");
  try {
    const readFileData = await readFile(jsonFile);
    await delay(1000);
    const speakers = JSON.parse(readFileData).speakers;
    if (speakers) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(speakers, null, 2));
      console.log("GET /api/speakers status: 200");
    }
  } catch (e) {
    console.log("/api/speakers error", e);
    res.status(404).send("File Not Found on server");
  }
}
