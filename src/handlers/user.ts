import prisma from '../db'
import { hashPassword, comparePasswords } from '../modules/auth'
import { createJWT } from '../modules/auth'

export const createNewUser = async (req, res) => {
  console.log('createNewUser', req.body)
  try {
    var user = await prisma.user.findUnique({
      where: {
        username: req.body.username
      }
    })

    if (user) {
      res.status(401).json({ message: 'username exists' })
      return
    }

    user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password)
      }
    })
    const token = createJWT(user)
    res.json({ token })
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: error.message })
  }
}

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username
    }
  })

  if (!user) {
    res.status(401).json({ message: 'Invalid credentials' })
    return
  }

  const valid = await comparePasswords(req.body.password, user.password)

  if (!valid) {
    res.status(401).json({ message: 'Invalid credentials' })
    return
  }

  const token = createJWT(user)
  res.json({ token })
}