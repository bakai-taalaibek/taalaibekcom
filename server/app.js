import express from "express";
import cors from "cors";
import { join } from "path";
import logger from "./utils/logger";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.get("/ping", (request, response) => {
    logger.info("-------------------------------------------------------------------------------------");
    logger.info(request.method, request.body, JSON.stringify(request.headers));
    response.send("pong-4");
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
app.get("/*", (_, response) => {
    response.sendFile(join(__dirname, "/../dist/index.html"), (error) => {
        if (error) {
            response.status(500).send(error);
        }
    });
});
export default app;
