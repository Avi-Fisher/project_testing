import { Router } from "express"


const noteRoute = Router()


noteRoute.get("/", (req, res) => {

    try {


    } catch (error) {
        console.error(error.message)
        return res.status(500).send({ msg: "Internal server error" })
    }
})


noteRoute.post("/", (req, res) => {

    try {
        const { username, password } = req.body

    } catch (error) {
        console.error(error.message)
        return res.status(500).send({ msg: "Internal server error" })
    }
})


noteRoute.put("/:id", (req, res) => {

    try {


    } catch (error) {
        console.error(error.message)
        return res.status(500).send({ msg: "Internal server error" })
    }
})



noteRoute.delete("/:id", (req, res) => {

    try {


    } catch (error) {
        console.error(error.message)
        return res.status(500).send({ msg: "Internal server error" })
    }
})


export default noteRoute

