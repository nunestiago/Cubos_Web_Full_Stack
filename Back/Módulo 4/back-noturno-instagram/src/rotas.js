const express = require("express");
const usuarios = require("./controladores/usuarios");
const postagens = require("./controladores/postagens");
const login = require("./controladores/login");
const verificaLogin = require("./filtros/verificaLogin");

const rotas = express();

rotas.post("/cadastro", usuarios.cadastrarUsuario);

rotas.post("/login", login.login);

rotas.use(verificaLogin);

rotas.get("/perfil", usuarios.obterPeril);
rotas.put("/perfil", usuarios.atualizarPeril);

rotas.post('/postagens'. postagens.novaPostagem)

module.exports = rotas;
