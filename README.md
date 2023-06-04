Desafio Full Stack - Cadastro de Clientes
Este é um projeto desenvolvido como parte de um desafio full stack durante o curso da Kenzie Academy Brasil, envolvendo o cadastro de clientes e contatos desse cliente, servindo como uma "agenda".
O objetivo é criar um aplicativo web que permita o cadastro, visualização e exclusão de clientes.
Este, é apenas o MVP desse projeto, podendo ser escalado e melhorado ainda mais.

Tecnologias Utilizadas
Neste projeto, foram utilizadas as seguintes tecnologias:

Linguagem de programação: No Backend foram utilizados o NodeJs utilizando o express. No Frontend foi utilizado o NextJs. Todos com typescript.
Frameworks e bibliotecas: Backend foram utilizados cors, bcrypts, TypeORM, zod. No Frontend foram o hookform, axios, nookies, react-icons, react-modal, react-toastify, tailwind e zod.
Banco de dados: Utilizei o Postgres

Estrutura do Projeto
O projeto está organizado da seguinte forma:

/backend: Este diretório contém os arquivos relacionados ao servidor e à lógica do back-end.

/src: Contém o código-fonte do back-end.
/controllers: Aqui estão os controladores que lidam com as requisições HTTP e a lógica de negócio.
/models: Contém os modelos de dados que representam os clientes e suas propriedades.
/routes: Contém as rotas da API que definem os endpoints e as ações correspondentes.
server.js: O arquivo principal que inicia o servidor e configura as dependências.

/frontend/contact-list: Este diretório contém os arquivos relacionados à interface do usuário e à lógica do front-end.

/public: Contém os arquivos estáticos, imagens, etc.
/src: Contém o código-fonte do front-end.
/components: Aqui estão os componentes reutilizáveis da interface do usuário.
/pages: Contém as páginas principais do aplicativo, como a página de cadastro, a lista de clientes, etc.
/services: Contém os serviços que se comunicam com o back-end para realizar as requisições HTTP.

Instalação e Configuração
Para executar este projeto localmente, siga as etapas abaixo:

Clone este repositório: git clone https://github.com/LucasWFragoso/desafio-fullStack-m6-cadastro-clientes.git
Acesse o diretório do projeto: cd desafio-fullStack-m6-cadastro-clientes
Configure o ambiente de desenvolvimento: na pasta /backend crie o arquivo .env e configure com o seu postgres, atente-se para a port não ser a mesma do frontend, recomendo colocar o 3001
Instale as dependências: yarn init dentro do /backend e dentro do /frontend/contact-list  
Inicie o servidor: para isso é necessario iniciar o servidor do /backend em um terminal com o comando yarn dev, e em outro terminal iniciar o servidor /frontend/contact-list com o yarn dev.
Acesse o aplicativo no navegador: http://localhost:3000

API Endpoints
Aqui estão os principais endpoints da API:

Rotas com livre acesso:
POST /api/clients: Cria um novo cliente com base nos dados fornecidos.

Rotas protegidas:
GET /api/clients: Retorna um cliente específico com base no token fornecido.
PATCH /api/clients: Atualiza os dados de um cliente específico com base no token fornecido.
DELETE /api/clients: Exclui um cliente específico com base no token fornecido.
POST /api/contacts: Cria um novo contato com base nos dados fornecidos.
GET /api/contacts/:id: Retorna um contato específico com base no ID fornecido.
PATCH /api/contacts/:id: Atualiza os dados de um contato específico com base no ID fornecido.
DELETE /api/contacts/:id: Exclui um contato específico com base no ID fornecido.

Contribuição
Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga estas etapas:

Faça um fork deste repositório.
Crie um branch para a sua feature: git checkout -b minha-feature
Faça as alterações necessárias e adicione os commits: git commit -m 'Minha nova feature'
Envie para o branch principal: git push origin minha-feature
Abra um Pull Request.
