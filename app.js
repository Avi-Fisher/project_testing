import express from "express"
import authRoute from "./routes/auth_route.js"
import noteRoute from "./routes/note_route.js"


const app = express()
app.use(express.json())
app.use("/auth",authRoute)
app.use("/notes",noteRoute)




app.listen(8080, () => {
    console.log("aerver run..");
})