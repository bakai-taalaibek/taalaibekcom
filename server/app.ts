import express from "express"
import cors from "cors"
import { join } from "path"
import logger from "./utils/logger"
import { fileURLToPath } from "url"
import { dirname } from "path"
import { google } from "googleapis"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static("dist"))

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json", //the key file
  //url to spreadsheets API
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
const spreadsheetId = "1mdArEIERdtNwwzImehA7VuPV6iK5olFBvGQmvSLLwKQ"

app.get("/ping", (request, response) => {
  logger.info(
    "-------------------------------------------------------------------------------------"
  )
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

app.get("/review", async (request, response) => {
  console.log("1")
  //write data into the google sheets
  await googleSheetsInstance.spreadsheets.values.append({
    spreadsheetId,
    valueInputOption: "RAW",
    auth,
    range: "Sheet1!A:B", //sheet name and range of cells
    requestBody: {
      values: [["Git followers tutorial", "Mia Roberts"]],
    },
  })
})

app.get("/*", (_, response) => {
  response.sendFile(join(__dirname, "/../dist/index.html"), (error) => {
    if (error) {
      response.status(500).send(error)
    }
  })
})

export default app
