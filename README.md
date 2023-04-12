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

3. Configure o `.env` usando o arquivo `.env.example`

## Opção: criação do banco automático

4. Se vc desejar a criação do banco automático e a população de alguns registros nas tabelas de gêneros(genres) e plataformas(plataforms) rode o comando abaixo

```bash
  npx prisma migrate dev
```
## Opção: criação do banco manualmente

5. Crie um banco de dados no PostgreSQL, como sugestão, pode ser o nome de "movielist"

6. Restaure o arquivo dump.sql que segue no projeto.
   Este arquivo criará as entidades e todos os recursos necessários para o funcionamento do banco


## Última etapa

7. Para rodar o projeto em typescript

```bash
  npm run dev
```



## Observações

8. Seed db

```bash
npm run dev:seed
```


