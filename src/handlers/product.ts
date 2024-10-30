import prisma from '../db'

export const getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany()
  res.json(products)
}

export const getAllProductsForUser = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      userId: req.user.id
    },
    include: {
      products: true
    }
  })
  res.json({ data: user.products })
}

export const createOrUpdate = async (req, res) => {
  try {
    const product = await prisma.product.upsert({
      where: {
        name_belongsStoID: {
          name: req.body.name,
          belongsStoID: req.user.id
        }
      },
      update: {
        name: req.body.name
      },
      create: {
        name: req.body.name,
        belongsStoID: req.user.id
      }
    })
    res.json({ data: product })
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: error.message })
  }
}

export const updateProduct = async (req, res) => {
  const product = await prisma.product.update({
    where: {
      id_belongsStoID: {
        id: req.params.id,
        belongsStoID: req.user.id
      }
    },
    data: {
      name: req.body.name
    }
  })
  res.json({ data: product })
}

export const deleteProduct = async (req, res) => {
  console.log('deleteProduct', req.params.id, req.user.id)
  const product = await prisma.product.delete({
    where: {
      id_belongsStoID: {
        id: req.params.id,
        belongsStoID: req.user.id
      }
    }
  })
  res.json({ data: product })
}