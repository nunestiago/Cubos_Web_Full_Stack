import connect from '../database';

export const myProducts = async (req, res) => {
  const { id } = req.body;
  try {
    const query = 'select * from products where usuario_id = $1';
    const products = await connect.query(query, [id]);

    res.status(200).json(products);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  res.status(200).json('ok');
};

export const addProduct = async (req, res) => {
  const { user_id: userId, name, price, stock, description, image } = req.body;
  try {
    const query =
      'insert into products (user_id, name, price, stock, description, image) values ($1,$2,$3,$4,$5,$6)';
    const { roeCount: newProduct } = await connect.query(query, [
      userId,
      name,
      price,
      stock,
      description,
      image,
    ]);
    if (!newProduct) {
      return res
        .status(400)
        .json({ error: 'Não foi possível registrar o produto' });
    }
    return res.status(200).json('Bora vender!');
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
