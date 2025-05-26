const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());


let operacoes = [];
let id = 1;


const operacaoSchema = Joi.object({
    tipo: Joi.string().valid('soma', 'subtração', 'multiplicação', 'divisão').required(),
    valor1: Joi.number().required(),
    valor2: Joi.number().required()
});


function calcular(tipo, valor1, valor2) {
switch (tipo) {
    case 'soma': return valor1 + valor2;
    case 'subtração': return valor1 - valor2;
    case "multiplicação": return valor1 * valor2;
    case 'divisão':
        if (valor2 === 0) return null;
        return valor1 / valor2;
        default: return null;
}

}


app.get('/operacoes', (req, res) => {
    res.json(operacoes);
});


app.post('/operacoes', (req, res) => {
    const { error } = operacaoSchema.validate(req.body);
    if (error) return res.status(400).json({ erro: error.details[0].message });

    const { tipo, valor1, valor2 } = req.body;
    if (tipo === 'divisão' && valor2 === 0) {
        return res.status(400).json({ erro: 'Divisão por zero não é permitida'});

    }

    const resultado = calcular(tipo, valor1, valor2);
    const novaOperacao = { id: id++, tipo, valor1, valor2, resultado };
    operacoes.push(novaOperacao);
    res.status(201).json(novaOperacao);
});


app.put('/operacoes/:id', (req, res) => {
    const { error } = operacaoSchema.validate(req.body);
    if (error) return res.status(400).json({ erro: error.details[0].message });

    const operacao = operacoes.find(op => op.id === parseInt(req.params.id));
    if (!operacao) return res.status(404).json({ erro: 'Operação não encontrada.' });

    const { tipo, valor1, valor2 } = req.body;
    if (tipo === 'divisão' && valor2 === 0) {
        return res.status(400).json({ erro: 'Divisão por zero não é permitida.' });
    }

    operacao.tipo = tipo;
    operacao.valor1 = valor1;
    operacao.valor2 = valor2;
    operacao.resultado = calcular(tipo, valor1, valor2);

    res.json(operacao);
     });


     const PORT = 3001;
     app.listen(PORT, () => {
        console.log(`API de Calculadora rodando na porta ${PORT}`);
     });