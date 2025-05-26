# 📄 Calculator API Documentation

## General Description
The Calculator API was developed to perform basic mathematical operations in a simple and efficient way through HTTP requests. It's ideal for systems that need to execute basic calculations.

## Objectives
Provide a RESTful interface to perform operations like addition, subtraction, multiplication, and division with two numbers.

## Features
- ✅ Addition: `/add`
- ✅ Subtraction: `/subtract`
- ✅ Multiplication: `/multiply`
- ✅ Division: `/divide`

## Technologies Used
- Node.js  
- Express.js  
- Insomnia (for testing)

## Request and Response Examples

### ➕ Addition
### Request (POST):

```
{
  "tipo": "soma",
  "valor1": 10,
  "valor2": 5
}

```
### Response:

```
{
  "id": 1,
  "tipo": "soma",
  "valor1": 10,
  "valor2": 5,
  "resultado": 15
}

```
### ➖ Subtraction
### Request (POST):

```
{
  "tipo": "subtração",
  "valor1": 9,
  "valor2": 1
}

```
### Response:

```
{
  "id": 2,
  "tipo": "subtração",
  "valor1": 9,
  "valor2": 1,
  "resultado": 8
}
```

### ➗ Division
### Request (POST):

```
{
  "tipo": "divisão",
  "valor1": 20,
  "valor2": 15
}

```

### Response:

```
{
  "id": 3,
  "tipo": "divisão",
  "valor1": 20,
  "valor2": 15,
  "resultado": 1.3333333
}

```

### Division by zero example:

```
{
  "tipo": "divisão",
  "valor1": 10,
  "valor2": 0
}

```

### Response:

```
{
  "erro": "Divisão por zero não é permitida"
}

```

### ✖️ Multiplication
### Request (POST):

```
{
  "tipo": "multiplicação",
  "valor1": 3,
  "valor2": 7
}

```

### Response:

```
{
  "id": 4,
  "tipo": "multiplicação",
  "valor1": 3,
  "valor2": 7,
  "resultado": 21
}

```

## Installation Instructions

1. Clone the repository:

```
git clone https://github.com/Duda-Dz/api-calculadora.git

```

2. Enter the project folder:

```
cd api-calculadora

```

3. Install dependencies:

```
npm install

```

4. Start the API:

```
npm start

```
