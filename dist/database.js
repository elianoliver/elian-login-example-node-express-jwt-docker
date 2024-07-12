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
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = require("sqlite3");
const sqlite_1 = require("sqlite");
const filename = "database.sqlite";
const databaseConnectionPromise = (0, sqlite_1.open)({ driver: sqlite3_1.Database, filename });
void (function () {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield databaseConnectionPromise;
        yield connection.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )
  `);
        yield connection.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      userId INTEGER NOT NULL,
      FOREIGN KEY (userId) REFERENCES users(id)
    )
  `);
        try {
            yield connection.exec(`
    INSERT INTO users (username, password) VALUES ('admin', 'admin')
  `);
        }
        catch (error) {
            console.log("User admin already exists");
        }
    });
})();
exports.default = databaseConnectionPromise;
