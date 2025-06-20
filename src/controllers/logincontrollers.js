const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const { generateToken } = require('../../auth');

exports.login = async (req, res) => {
  const { id, password } = req.body;

  try {
    const teacher = await prisma.teacher.findMany({
      where: { id: parseInt(id) },
    });

    if (!teacher || teacher[0].password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
   
    const token = generateToken(1);
    console.log(token)
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};