import bcrypt from 'bcrypt';

import connect from '../database';

export const Login = async (req, res) => {
  try {
    const { rows: teste } = await connect.query('select * from users');
    return res.status(200).json(teste);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const Register = async (req, res) => {
  const { username, storename, email, password } = req.body;

  const hash = bcrypt.hashSync(password, 10);
  try {
    const { rows: register } = await connect.query(
      'insert into users (username, storename, email, password_hash) values ($1,$2,$3,$4) ',
      [username, storename, email, hash]
    );
    return res.status(200).json([
      {
        message: `Usuário ${username} registrado com a loja ${storename} e o ${email}`,
      },
      { register },
    ]);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
