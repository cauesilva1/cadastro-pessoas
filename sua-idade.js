/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
export const qualASuaIdade = (evento, idadeCandidato) => {
	console.log(`sua idade é ${idadeCandidato}!`);

	if (idadeCandidato < evento.idadeMinima) {
		console.log("voçe não tem idade necesaria para o evento");
		process.exit(0);
	} else {
		console.log("voce esta cadastrado para o evento");
	}
};
