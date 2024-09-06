function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value 

    if(campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma série.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa)

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = ''; // Inicializa resultados como uma string vazia
    let titulo = '';
    let sinopse = '';

    // Itera sobre cada elemento do array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        sinopse = dado.sinopse.toLocaleLowerCase()

        // Constrói o HTML para cada resultado, inserindo os dados da série
        if (titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) || sinopse.toLowerCase().includes(campoPesquisa.toLowerCase())) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank">${dado.titulo}</a> 
                </h2>
                <p class="descricao-meta">${dado.sinopse}</p> 
                <a href="${dado.link}" target="_blank">Para assistir</a>
            </div>
            `;
        }

        if (!resultados) {
            resultados = "<p>Nada foi encontrado</p>"
        }
    }
    
    // Atribui o HTML gerado para o conteúdo da seção
    section.innerHTML = resultados;
  }



