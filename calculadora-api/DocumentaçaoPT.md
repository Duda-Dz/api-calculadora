# 📄 Documentação da API de Calculadora

## Descrição Geral
### A API de Calculadora foi desenvolvida para realizar operações matemáticas básicas de forma simples e eficiente através de requisições HTTP. Ideal para o uso em sistemas que necessitam realizar cálculos básicos.

## Objetivos
### Fornecer uma interface RESTful para realizar operações como soma, subtração, multiplicação e divisão com dois números.

## Funcionalidades
- ✅ Soma: `/add`

- ✅ Subtração: `/subtract`

- ✅ Multiplicação: `/multiply`

- ✅ Divisão `/divide`

## Tecnologias Utilizadas
- Node.js
- Express.js
- Insomnia

## Exemplo de Requisição e Resposta
### ➕ Soma
### Requisição (POST):


`POST: http://localhost:3001/operacoes`


`Body: JSON`

```

{
   "tipo": "soma",
   "valor1": 10,
   "valor2": 5
}

```
### Resposta

```
{
"id": 1,
"tipo": "soma",
"valor1": 10,
"valor2": 5,
"resultado": 15
}

```

### ➖ Subtração
### Requisição (POST)

````
{
    "tipo": "subtração",
    "valor1": 9,
    "valor2": 1
}

````

### Resposta

```
{
    "id": 2,
    "tipo": "subtração",
    "valor1": 9,
    "valor2": 1,
    "resultado": 8
}

```

### ➗ Divisão
### Requisição (POST)

```
{
    "tipo": "divisão",
    "valor1": 20,
    "valor2": 15
}

```

### Resposta

```
{
    "id": 3,
    "tipo": "divisão",
    "valor1": 20,
    "valor2": 15,
    "resultado": 1.3333333
}

```
### Requisição (POST)

```
{
"tipo": "divisão",
"valor1": 10,
"valor2": 0
}

```

### Resultado

```
{
    "erro": "Divisão por zero não é permitida"
}

```
### ✖️ Multiplicação
### Requisição (POST)

```
{
    "tipo": "multiplicação",
    "valor1": 3,
    "valor2": 7
}

```

### Resposta

```
{
    "id": 4,
    "tipo": "multiplicação",
    "valor1": 3,
    "valor2": 7,
    "resultado": 21
}

```
## Instruções de Instalação
1. Clone o Repositório

```
git clone https://github.com/Duda-Dz/api-calculadora.git

```

2. Entrar no Repositorio:

```
cd api-calculadora

```

3. Instale as Dependências

```
npm install

```

4. Inicie a API

```
npm start

```






