import express from "express"
import routes from "./routes"
const app = express()
const PORT: number = parseInt(process.env.PORT as string) || 3000
app.use(routes)
app.listen(PORT, () => console.log(`⚡ Server is running at http://localhost:${PORT}`))