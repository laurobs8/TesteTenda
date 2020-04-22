## TesteTenda Backend node developer

#### Na pasta do projeto, execute no terminal:
- npm i
- npm start

#### Para as requisições, utilizei a extensão RestClient do VS Code
`
POST http://localhost:5000/api/url/shorten
Content-Type: application/json

{
    "longUrl" : "url longa aqui"
}`

#### Após envio da requisição, clique no item do json "shortUrl" e será redirecionado
