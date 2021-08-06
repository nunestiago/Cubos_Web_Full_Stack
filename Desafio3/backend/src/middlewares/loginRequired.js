import jwt from 'jsonwebtoken';

import connect from '../database';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ errors: ['Login required'] });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email, storename } = data;

    const query = 'select * from users where id = $1';
    const { rowCount } = await connect.query(query, [id]);

    if (rowCount === 0) {
      return res.status(400).json({ errors: ['Usuário não encontrado'] });
    }

    res.json(id, email, storename);
    return next();
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
