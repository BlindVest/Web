import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const giveData = async (req: Request, res: Response) => {
  const data = await prisma.data.findFirst({
    orderBy: {
      id: 'desc'
    }
  })

  res.json(data)
}

export default giveData