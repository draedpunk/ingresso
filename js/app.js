let pista = 100;
let cadSuperior = 200;
let cadInferior = 400;

function comprar() {
    let ingressoSelecionado = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    console.log(ingressoSelecionado);
    console.log(quantidade);

    if (ingressoSelecionado == 'pista' && pista != 0){ // para a PISTA
        pista -= quantidade;
        let campoPista = document.getElementById('qtd-pista');
        campoPista.textContent = `${pista}`;
    } 
    else if (ingressoSelecionado == 'superior' && cadSuperior != 0){ // para cadeira SUPERIOR
        cadSuperior -= quantidade;
        let campoCadSuperior = document.getElementById('qtd-superior');
        campoCadSuperior.textContent = `${cadSuperior}`;
    } 
    else if (ingressoSelecionado == 'inferior' && cadInferior != 0){ // para cadeira INFERIOR
        cadInferior -= quantidade;
        let campoInferior = document.getElementById('qtd-inferior');
        campoInferior.textContent = `${cadInferior}`;
    } else {
        alert(`Quantidade indisponível para o tipo ${ingressoSelecionado}`);
    }
    
} // OK!!