import { writeFileSync, readFileSync, existsSync } from "fs";

export const qualOSeuNome = (evento, nomeDoCandidato) => {
	const caminhoDoArquivoDoEvento = evento.listaDeCandidatos;
	const arquivoDoEventoExiste = existsSync(caminhoDoArquivoDoEvento);

	let listaDeCandidatos = [];

	if (arquivoDoEventoExiste) {
		const dadosBrutos = readFileSync(caminhoDoArquivoDoEvento);
		listaDeCandidatos = JSON.parse(dadosBrutos);
	}

	if (listaDeCandidatos.length >= evento.numeroMaximoDeCandidatos) {
		console.log("numero de candidados acima de 100!");
		process.exit(1);
	}

	listaDeCandidatos.push(nomeDoCandidato);
	console.log(JSON.stringify(listaDeCandidatos, null, 2));

	console.log(`prazer sr(a): ${nomeDoCandidato} o seu cadastro esta completo`);
	writeFileSync(caminhoDoArquivoDoEvento, JSON.stringify(listaDeCandidatos));
};
