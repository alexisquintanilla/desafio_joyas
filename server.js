import express from 'express'
import dotenv from 'dotenv/config'

import router from './router/joyas.router.js'

const app = express()

const __dirname = import.meta.dirname
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api', router)

const PORT = process.env.PORT

app.listen(PORT, () => console.log('EL SERVIDOR ESTA CORRIENDO EN EL PUERTO :' + PORT))


