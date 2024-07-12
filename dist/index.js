"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("./database");
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const envsNames = ["JWT_SECRET", "PORT"];
const notFoundEnvs = envsNames.filter((e) => !process.env[e]);
if (notFoundEnvs.length) {
    console.error(`Missing environment variables: ${notFoundEnvs.join(", ")}`);
    process.exit(1);
}
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(routes_1.default);
app.listen(PORT, () => console.log(`⚡ Server is running on port http://localhost:${PORT}`));
