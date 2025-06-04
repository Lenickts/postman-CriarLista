// Seleciona a nossa ul com a lista de tarefas no HTML
const tarefas = document.getElementById("listaTarefas");

// Faz uma requisição GET para a API externa para buscar todas as tarefas
fetch("https://crudcrud.com/api/8fd8d8ccc4e34ff28bf6cf4429b075f3/tarefas")
    .then(resposta => resposta.json()) // Converte o corpo da resposta em JSON

    .then((listaDeTarefas) => {
    
        // Itera sobre cada tarefa do array
        listaDeTarefas.forEach(tarefa => {
            // Cria um novo elemento de lista <li>
            const item = document.createElement("li");
            //Define o conteúdo HTML do item, incluindo descrição e botão
            item.innerHTML = `${tarefa.descricao} <button class="excluir" data-id="${tarefa._id}">X</button>`;

            //Adiciona o novo item à lista de tarefas no HTML
            tarefas.appendChild(item);
        });
    })

//Adiciona um ouvinte de evento no click do botao
document.getElementById("add").addEventListener("click", () => {
    //Pega a descricao que o usuario digitou
    const descricao = document.getElementById("tarefa").value;

    //Requisição POST para a API externa para criar a tarefa
    fetch("https://crudcrud.com/api/8fd8d8ccc4e34ff28bf6cf4429b075f3/tarefas", {
        
        //Definido como POST, mas podemos usar GET, POST, PUT, DEL
        method: "POST",
        //Definido os cabeçalhos da requisição, com tipo json
        headers: {
            "Content-Type": "application/json"
        },
        //Convertemos um objeto JS para uma string json e passamos para o corpo
        body: JSON.stringify({ descricao: descricao })
    })
        .then(resposta => resposta.json())
        .then((tarefa) => {
            // Cria um novo elemento de lista <li>
            const item = document.createElement("li");
            //Define o conteúdo HTML do item, incluindo descrição e botão
            item.innerHTML = `${tarefa.descricao} <button class="excluir" data-id="${tarefa._id}">X</button>`;

            //Adiciona o novo item à lista de tarefas no HTML
            tarefas.appendChild(item);
        }) 
})

//Declarando os eventos para lidar com o click em excluir
tarefas.addEventListener("click", function (event) {
    //Se for detectado click em botao com a classe excluir class="excluir":
    if (event.target.classList.contains("excluir")) {
        
        //Atribuindo o id das tarefas criadas na API a uma variavel:
        const id = event.target.dataset.id;

        //Pegar o link da API passando a variavel com o id
        fetch(`https://crudcrud.com/api/8fd8d8ccc4e34ff28bf6cf4429b075f3/tarefas/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            //Remove o <li> do DOM
            event.target.parentElement.remove();
        })
        .catch(err => console.error("Erro ao excluir tarefa:", err));
    }
})
