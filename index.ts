import { log } from 'console';
import dotenv from 'dotenv'
import express from 'express'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ msg: 'Hello from express' })
})
const port = 3000;
app.listen(port, () => {
    log(`APP run in port ${port}`)
})