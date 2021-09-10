const knex = require("knex");

const novaPostagem = (req, res) => {
  const { id } = req.usuario;
  const { texto, fotos } = req.body;

  if (!fotos || fotos.length === 0) {
    return res.status(404).json("É preciso adicionar ao menos uma foto");
  }
  try {
    const postagem = await knex("postagens")
      .insert({ texto, usuario_id: id })
      .returning("*");

    if (!postagem) {
      return res.status(404).json("Não foi possível concluir a postagem");
    }

    for (const foto of fotos) {
      foto.postagem_id = postagem.id;
    }

    const fotosCadastradas = await knex("postagem_fotos").insert(fotos);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = { novaPostagem };
