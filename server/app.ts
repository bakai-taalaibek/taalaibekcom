import express from "express"
import cors from "cors"
import { join } from "path"
import logger from "./utils/logger"
import { fileURLToPath } from "url"
import { dirname } from "path"
import { google } from "googleapis"
import "dotenv/config"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static("dist"))

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS || ""),
  scopes: "https://www.googleapis.com/auth/spreadsheets",
})

let authClientObject
;(async () => {
  authClientObject = await auth.getClient()
})()

const googleSheetsInstance = google.sheets({
  version: "v4",
  auth: authClientObject,
})

app.get("/ping", (request, response) => {
  logger.info("---------------------------------------------------------------")
  logger.info(request.method, request.body, JSON.stringify(request.headers))
  response.send("pong")
})

app.get("/resume", (request, response) => {
  const filename =
    request.query.lang === "ru"
      ? "/files/Таалайбек уулу Бакай - JavaScript разработчик.pdf"
      : "/files/Bakai Taalaibek uulu - JavaScript Developer.pdf"

  response.sendFile(join(__dirname, filename), (error) => {
    if (error) {
      response.status(500).send(error)
    }
  })
})

app.post("/api/review", async (request, response) => {
  const currentDataAndTime = new Date()
  const result = await googleSheetsInstance.spreadsheets.values.append({
    spreadsheetId: process.env.SHEET_ID,
    valueInputOption: "RAW",
    auth,
    range: "Sheet1!A:B",
    requestBody: {
      values: [
        [
          request.body.name,
          request.body.comment,
          currentDataAndTime.toLocaleDateString("ru"),
          currentDataAndTime.toLocaleTimeString("ru"),
        ],
      ],
    },
  })
  const updatedRaw = result.data.updates?.updatedRange?.match(/(\d+):/)?.[1]

  if (updatedRaw) {
    response.send({ rowNumber: 100 + Number(updatedRaw) })
  } else {
    response.status(500).send("Something went wrong")
  }
})

app.get("/*", (_, response) => {
  response.sendFile(join(__dirname, "/../dist/index.html"), (error) => {
    if (error) {
      response.status(500).send(error)
    }
  })
})

export default app
