import {Router} from "express"


const authRoute = Router()


authRoute.post("/register", (req, res) => {

    try {
        const { username, password } = req.body

    } catch (error) {
        console.error(error.message)
        return res.status(500).send({ msg: "Internal server error" })
    }
})


authRoute.post("/login", (req, res) => {

     try {
    const { username, password } = req.body

    } catch (error) {
        console.error(error.message)
        return res.status(500).send({ msg: "Internal server error" })
    }
})


export default authRoute
