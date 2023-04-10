# movielist-back

Back-end para organização de filmes em plataformas de streaming.


## Sobre

  movielist é web browser application onde vc poderá organizar seus filmes favoritos em plataformas de streaming.
  Possui recursos de inserção, alteração, deleção, consulta e demais funcionalidades garantindo assim a organização dos seus filmes.


## Como rodar localmente
  1. Clone o repositório

  2. Instale todas as suas dependências
  ```bash
    npm i
  ```  

  3. Criar um banco de dados no PostgreSQL com o nome de "movielist" 

  4. Restaure o arquivo dump.sql que segue no projeto. 
      Este arquivo criará as entidades e todos os recursos necessários para o funcionamento do banco

  5. Configure o `.env` usando o arquivo `.env.example`

  6. Para rodar o projeto em typescript
  ```bash
    npm run dev
  ``` 


