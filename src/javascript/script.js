async function buscaEndereco(cep) {
  try {
    let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro) {
      throw Error("Esse cep não existe!");
    }
    console.log(consultaCepConvertida);
    return consultaCepConvertida;
  } catch (erro) {
    console.log(erro);
  }
}

// let ceps = [
//   "01001000",
//   "04382050",
//   "04366000",
//   "04382070",
//   "50750500",
//   "55606280",
// ];
// let conjuntoCeps = ceps.map((valores) => buscaEndereco(valores));
// console.log(conjuntoCeps);
// Promise.all(conjuntoCeps).then((respostas) => console.log(respostas));


// let consultaCep = fetch("https://viacep.com.br/ws/01001000/json/")
//   .then((resposta) => resposta.json())
//   .then((r) => {
//     if (r.erro) {
//       throw Error("Esse cep não existe!");
//     } else {
//       console.log(r);
//     }
//   })
//   .catch((erro) => console.log(erro))
//   .finally((mensagem) => console.log("Processamento concluído!"));
// console.log(consultaCep);
