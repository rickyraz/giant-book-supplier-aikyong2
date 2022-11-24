import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

// ... REST API routes will go here
app.get('/publisher', async (req, res) => {
    const publisher = await prisma.publisher.findMany()
    res.json(publisher)
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
