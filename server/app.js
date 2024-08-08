var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import cors from "cors";
import { join } from "path";
import logger from "./utils/logger";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { google } from "googleapis";
import "dotenv/config";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
const parseJson = (stringJson) => {
    if (stringJson) {
        try {
            return JSON.parse(stringJson);
        }
        catch (error) {
            logger.error(error);
        }
    }
};
const auth = new google.auth.GoogleAuth({
    credentials: parseJson(process.env.GOOGLE_APPLICATION_CREDENTIALS),
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});
let authClientObject;
(() => __awaiter(void 0, void 0, void 0, function* () {
    authClientObject = yield auth.getClient();
}))();
const googleSheetsInstance = google.sheets({
    version: "v4",
    auth: authClientObject,
});
app.get("/ping", (request, response) => {
    logger.info("-------------------------------------------------------------------------------------");
    logger.info(request.method, request.body, JSON.stringify(request.headers));
    response.send("pong");
});
app.get("/resume", (request, response) => {
    const filename = request.query.lang === "ru"
        ? "/files/Таалайбек уулу Бакай - JavaScript разработчик.pdf"
        : "/files/Bakai Taalaibek uulu - JavaScript Developer.pdf";
    response.sendFile(join(__dirname, filename), (error) => {
        if (error) {
            response.status(500).send(error);
        }
    });
});
app.post("/api/review", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const currentDataAndTime = new Date();
    const result = yield googleSheetsInstance.spreadsheets.values.append({
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
    });
    const updatedRaw = (_c = (_b = (_a = result.data.updates) === null || _a === void 0 ? void 0 : _a.updatedRange) === null || _b === void 0 ? void 0 : _b.match(/(\d+):/)) === null || _c === void 0 ? void 0 : _c[1];
    if (updatedRaw) {
        response.send({ rowNumber: 100 + Number(updatedRaw) });
    }
    else {
        response.status(500).send("Something went wrong");
    }
}));
app.get("/*", (_, response) => {
    response.sendFile(join(__dirname, "/../dist/index.html"), (error) => {
        if (error) {
            response.status(500).send(error);
        }
    });
});
export default app;
