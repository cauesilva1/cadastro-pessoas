/* eslint-disable prettier/prettier */
import { createInterface } from "readline"

import { qualOSeuNome } from "./seu-nome.js"
import { qualASuaIdade } from "./sua-idade.js"

const EVENTO = {
	dataDoEvento: new Date("july, 30, 2022"),
	idadeMinima: 18,
	listaDeCandidatos: "teste1.json",
    numeroMaximoDeCandidatos: 100
};

const DATA_ATUAL = new Date();

console.log("A data do cadastro é: ", DATA_ATUAL.toISOString());
if (DATA_ATUAL < EVENTO.dataDoEvento) {
	console.log("voçe será direcionado para proxima fase");
} else {
	console.log("data invalida");
}

const readline = createInterface({
	input: process.stdin,

	output: process.stdout,
});

readline.question("qual sua idade?: ", idadeCandidato => {
    qualASuaIdade(EVENTO, idadeCandidato)

	readline.question("qual o seu nome?: ", nomeDoCandidato => {
        qualOSeuNome(EVENTO, nomeDoCandidato)
	});
});
