import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async (req: Request, res: Response) => {
  const { distance, latitude, longitude } = req.body

  const result = await prisma.data.create({
    data: {
      id: 1,
      distance: distance,
      latitude: latitude,
      longitude: longitude
    }
  })

  console.log(result)

  res.sendStatus(200)
}

export default main
