const express   = require("express")
const app       = express()
const PORT      = 3000
const cors      = require("cors")
const router    = require("./routes/index")

app.use(cors())
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-for

app.use(router)

app.listen(PORT, () => {
    console.log(`i loveu ${PORT}`);
})