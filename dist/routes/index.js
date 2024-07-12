"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const router = (0, express_1.Router)();
// Rotas dos usuários
router.use("/user", user_1.default);
// Rota para listar todas as rotas disponíveis
router.get("/", (req, res) => {
    const routes = [
        { path: "/", method: "GET", description: "Hello World!" },
        { path: "/user", method: "GET", description: "List all users" },
        { path: "/user/:id", method: "GET", description: "Get user by ID" },
        { path: "/user", method: "POST", description: "Create a new user" },
        { path: "/user/:id", method: "PUT", description: "Update user by ID" },
        { path: "/user/:id", method: "DELETE", description: "Delete user by ID" },
    ];
    // Construir uma resposta HTML formatada
    const htmlResponse = `
    <h1>Rotas Disponíveis</h1>
    <ul>
      ${routes.map(route => `
        <li>
          <strong>${route.method}</strong> ${route.path} - ${route.description}
        </li>
      `).join('')}
    </ul>
  `;
    res.send(htmlResponse);
});
exports.default = router;
