const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const { generateToken } = require('../../auth');

exports.login = async (req, res) => {
  const { usuario, password } = req.body;

  try {
    const teacher = await prisma.teacher.findMany({
      where: {email: usuario  },
    });

    if (!teacher || teacher[0].password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    console.log('ID:', id);
    console.log('Password:', password
    );
  
    const token = generateToken(1);
    console.log(token)
    res.json({ token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: error });
  }
};
