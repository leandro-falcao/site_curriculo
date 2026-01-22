//inserir tag link de css importante
let headInserirLink = document.querySelector("head").insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/leandro-falcao/site_curriculo/x-style.css">`);
// inserido

// pesquisar a tag link dentro de head(todas as tags)
let heads = document.querySelectorAll("head > link")
// contador de itens buscados de head> filho <link>
let qtdLinks = heads.length;

let penultimoTagLink = heads[(qtdLinks-2)]
