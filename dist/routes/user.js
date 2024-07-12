"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zodValidateMiddleware_1 = __importDefault(require("../helpers/zodValidateMiddleware"));
const database_1 = __importDefault(require("../database"));
const zod_1 = __importDefault(require("zod"));
const router = (0, express_1.Router)();
const validate = (0, zodValidateMiddleware_1.default)(zod_1.default.object({
    body: zod_1.default
        .object({
        username: zod_1.default.string(),
        password: zod_1.default.string(),
    })
        .strict(),
}));
const validatePagination = (0, zodValidateMiddleware_1.default)(zod_1.default.object({
    query: zod_1.default.object({
        page: zod_1.default.string().optional(),
        rowsPerPage: zod_1.default.string().optional(),
    }),
}));
router.get("/", validatePagination, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const database = yield database_1.default;
    if ("page" in req.query) {
        const page = parseInt(req.query.page);
        const rowsPerPage = ((_a = parseInt(req.query.rowsPerPage)) !== null && _a !== void 0 ? _a : 50) % 51;
        const users = yield database.all("SELECT * FROM users LIMIT ? OFFSET ?", [
            rowsPerPage,
            (page - 1) * rowsPerPage,
        ]);
        return res.json(users);
    }
    const users = yield database.all("SELECT * FROM users");
    return res.json(users);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = yield database_1.default;
    const user = yield database.get("SELECT * FROM users WHERE id = ?", [
        req.params.id,
    ]);
    return res.json(user);
}));
router.post("/", validate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const database = yield database_1.default;
        yield database.run("INSERT INTO users (username, password) VALUES (?, ?)", [
            req.body.username,
            req.body.password,
        ]);
        return res.json({ message: "User created" });
    }
    catch (error) {
        if (error.code === "SQLITE_CONSTRAINT") {
            return res.status(400).json({ message: "User already exists" });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
}));
router.put("/:id", validate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const database = yield database_1.default;
        yield database.run("UPDATE users SET username=:username, password=:password WHERE id=:id ", {
            ":username": req.body.username,
            ":password": req.body.password,
            ":id": req.params.id,
        });
        return res.json({ message: "User updated" });
    }
    catch (error) {
        console.log(error);
        if (error.code === "SQLITE_CONSTRAINT")
            return res.status(400).json({ message: "User already exists" });
        return res.status(500).json({ message: "Internal server error" });
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = yield database_1.default;
    yield database.run("DELETE FROM users WHERE id = ?", [req.params.id]);
    return res.json({ message: "User deleted" });
}));
exports.default = router;
