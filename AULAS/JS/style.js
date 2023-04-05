function ProdutoVer(produto) {
    return `<div class="box">
    <img src=${produto.imagem} width="200px">
    <h6>${produto.nome}</p>
    <h4>R$ ${produto.preço}</p>
    </div>`;
}

const response = await fetch('../JSON/coisas.json');
const data = await response.json();

let produto_html = '';

for (const produto of data.produtos) {
    produto_html = ProdutoVer(produto);
    console.log(produto_html)
    document.getElementById('test').innerHTML += produto_html;
}


//console.log(ProdutoVer);