Desafio Front-end - Módulo 3

VOLTAR PARA SUMÁRIO

A empresa que você está trabalhando recebeu uma demanda de um cliente muito importante, trata-se de um projeto de dashboard para um Market Place, onde o usuário deve se cadastrar e logar na dashboard, após o login ele poderá adicionar, remover, excluir e alterar produtos da sua loja, bem como fazer a edição do seu perfil. Cada usuário irá representar uma loja no Market Place. Lembre-se, esse é um cliente muito importante e você é o responsável por entregar da melhor maneira a solução para o problema dele.

Visualização do Desafio
Front-end

Telas que precisam ser desenvolvidas:
Áreas não protegidas
Cadastro de usuário: /cadastro

    Funcionalidades obrigatórias:
        Validar a igualdade das senhas
        Validar os campos obrigatórios (consultar nos requisitos do back-end)
        Enviar os dados do formulário para a rota POST /usuarios
        Redirecionar para a rota de login (/);
        Inputs:
            nome
            nome_loja
            email
            senha
            senhaConfirmacao
    Funcionalidades extras:
        Controle de estado de requisições (erro e carregamento)

Dicas
Login: /

    Funcionalidades obrigatórias:
        Validar os campos obrigatórios (consultar nos requisitos do back-end)
        Enviar os dados do formulário para a rota POST /login
        Salvar o token em um contexto
        Redirecionar para a rota de produtos (/produtos);
        Inputs:
            email
            senha
    Funcionalidades extras:
        Controle de estado de requisições (erro e carregamento)

Dicas
Áreas protegidas
Produtos: /produtos

    Funcionalidades obrigatórias:
        Carregamento dos produtos da loja (GET /produtos)
        Ao clicar no card do produto, redirecionar para a rota de (/produto/:id/editar)
        Ao clicar no icone de lixo no card do produto, abrir um modal e se o cliente confirmar, deletar o produto (DELETE /produtos/:id)
        Ao clicar no botão de "ADICIONAR PRODUTO", redirecionar para a rota de (/produtos/novo)
    Funcionalidades extras:
        Controle de estado de requisições (erro e carregamento)

Dicas
Editar Produtos: /produtos/:id/editar

    Funcionalidades obrigatórias:
        Como a atualização dos dados do produto pode ser parcial (somente um campo por ex), não é obrigatório carregar os dados do produto nesta tela e nem verificar os dados obrigatórios.
        Enviar os dados do formulário para a rota PUT /produtos/:id
        Redirecionar para a rota de produtos (/produtos);
        Inputs:
            nome
            preco
            estoque
            descricao
            imagem (link para uma imagem)
    Funcionalidades extras:
        Controle de estado de requisições (erro e carregamento)

Dicas
Adicionar Produtos: /produtos/novo

    Funcionalidades obrigatórias:
        Enviar os dados do formulário para a rota POST /produtos
        Redirecionar para a rota de produtos (/produtos);
        Inputs:
            nome
            preco
            estoque
            descricao
            imagem (link para uma imagem)
    Funcionalidades extras:
        Controle de estado de requisições (erro e carregamento)

Dicas
Perfil de usuário: /perfil

    Funcionalidades obrigatórias:
        Visualização dos dados do perfil.
        Redirecionar para a rota de perfil (/perfil/editar);
        Inputs (não precisamos controlá-los):
            nome
            nome_loja
            email
    Funcionalidades extras:
        Controle de estado de requisições (erro e carregamento)

Dicas
Edição de usuário: /perfil/editar

    Funcionalidades obrigatórias:
        Como a atualização dos dados do perfil pode ser parcial (somente um campo por ex), não é obrigatório carregar os dados do usuário nesta tela e nem verificar os dados obrigatórios.
        Se a senha for informada, validar a igualdade das senhas
        Enviar os dados do formulário para a rota PUT /perfil
        Redirecionar para a rota de perfil (/perfil);
        Inputs:
            nome
            nome_loja
            email
            senha
            senhaConfirmacao
    Funcionalidades extras:
        Controle de estado de requisições (erro e carregamento)

Dicas
Componentes
Navbar

    Funcionalidades obrigatórias:
        Redirecionar o usuário para as rotas /produtos e /perfil
        Deslogar (remover o token do contexto)

Dicas
Requisitos obrigatórios

    Sua aplicação deve ser desenvolvida com React;
    Trabalhar com Hooks (useState, useEffect, useRef...)
    Trabalhar com componentização;
    Utilizar context API (Context);
    Utilizar roteamento (react-router-dom);
    Utilizar Material UI para criação das telas;
    As requisições devem ser feitas utilizando fetch;
    Integração ao back-end (sua API ou https://desafio-m03.herokuapp.com);
    Seguir a estrutura de layout do wireframe que está no arquivo .fig que se encontra na pasta raiz do desafio;

Links Úteis

    Documentação do ReactJS: https://reactjs.org/
        Context API: https://reactjs.org/docs/context.html
        Hooks (useState, useEffect, useRef): https://reactjs.org/docs/hooks-intro.html
    Documentação react-router-dom: https://reactrouter.com/web/guides/quick-start
    Documentação react-hook-form: https://react-hook-form.com/
    Documentação Material UI: https://material-ui.com/
    Documentação Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Aulas Úteis

    Context
    Gerenciando o estado de aplicações
    Opções com o Fetch
    Estilizando links ativos
    Rotas protegidas
    Redirecionamento de rotas
    Parametros de rota
    Apresentando o react-hook-form
    Validações com o react-hook-form
    useLocalStorage
    Primeiros componentes do Material UI
    Resumão React
    Continuação Resumão

LEMBRE-SE: Feito é melhor que perfeito!!!
