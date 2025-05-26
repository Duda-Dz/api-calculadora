# 📐  Projeto API Calculadora

### API feita com Node.js para realizar operações básicas com 2 valores
- Soma ➕
- Subtração ➖
- Multiplicação ✖️
- Divisão ➗

## 🚀 Como rodar

### Clonar Repositorio:
```
git clone https://github.com/seu-usuario/api-calculadora.git
```

### Entrar na Pasta Salva a API:
```
cd api-calculadora
````

### Instalar Dependências:
```
npm install
```

### Rodar API:
```
npm start
```

## Testar código no Insomnia

### Adicione um scratch Pad com nome API Calculadora

### Adicione `POST`

### Adicione no POST a rede:
```
http://localhost:3001/operacoes
```

### Clique em `Body`e adicione `JSON`

### Adicione os seguintes código

### ➕ SOMA
```
{
"tipo": "soma",
"valor1": 7,
"valor2": 3
}
```
`O Insomnia Responde`
```
{
"id": 1,
"tipo": "soma",
"valor1": 7,
"valor2": 3,
"resultado": 10
}
```

### ➖ Subtração
```
{
"tipo": "subtração",
"valor1": 6,
"valor2": 5,
}
```
`O Insomnia Responde`
```
{
"id": 2,
"tipo": "subtração",
"valor1": 6,
"valor2": 5,
"resultado": 1
}
```

### ➗ Divisão
`Irei formar a divisão por sero, pois não é permitida divisão com 0`
```
{
	"tipo": "divisão",
	"valor1": 10,
	"valor2": 0
}
```
`O Insomnia Responde`
```
{
	"erro": "Divisão por zero não é permitida"
}
```

### ✖️ Multiplicação
```
{
	"tipo": "multiplicação",
	"valor1": 84,
	"valor2": 53
}
```
`O Insomnia Responde`
```
{
	"id": 1,
	"tipo": "multiplicação",
	"valor1": 84,
	"valor2": 53,
	"resultado": 4452
}
```

## 📄 Documentações:

### Documentação em Portugues [DocumentaçãoPT](https://github.com/Duda-Dz/api-calculadora/blob/main/calculadora-api/Documenta%C3%A7aoPT.md).

### Documentação em Inglês [DocumentaçãoING](https://github.com/Duda-Dz/api-calculadora/blob/main/calculadora-api/Documenta%C3%A7%C3%A3oING.md).

## 🔧 Ferramentas Utilizadas:
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)











