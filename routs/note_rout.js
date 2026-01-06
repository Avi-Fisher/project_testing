import express from "express"


const app = express()
app.use(express.json())


app.post("/register", (req, res) => {

    try {
        const { username, password } = req.body

    } catch (error) {
        console.error(error.message)
        return res.status(500).send({ msg: "Internal server error" })
    }
})


app.post("/login", (req, res) => {

     try {
    const { username, password } = req.body

    } catch (error) {
        console.error(error.message)
        return res.status(500).send({ msg: "Internal server error" })
    }
})


app.listen(8080, () => {
    console.log("aerver run..");
})