# Executando o Projeto frota

    - Pelo terminal, acessa a pasta frota
    - Roda npm install ou yarn install
    - npm start ou ng serve --open

# Executando o Projeto nodejs

    - Pelo terminal, acessa a pasta frota
    - Rodar npm install ou yarn install
    - Iniciar MAMP/XAMPP/LARAGON
    - criar banco de dados com o nome apollo
      - importar banco de dados
        - local do arquivo: nodejs/db/apollo.sql
    - Dentro do arquivo src/database/index.ts, colocar as configurações do seu banco local
    - Rodar npm run dev:server ou yarn dev:server para iniciar o servidor nodejs
    - Para testar, importar arquivo de teste no postman (file -> import)
      - local do arquivo: nodejs/postman/import_me.json
