 var elemento

   elemento = document.getElementById("titulo")
   alert(elemento)


   function mudartitulo(){
         var titulo
         titulo = document.getElementById("titulo")
         titulo.innerHTML = "Alterando o título via JS"
   }

   function mudarestilo(){
        var titulo
        titulo = document.getElementById("titulo")
        titulo.style.color = "pink"
        titulo.style.backgroundColor = "black"
        titulo.style.fontSize = "68px"
   }

  function destacar(){
        var titulo = document.getElementById("titulo")
        titulo.classList.add("destacado")
   }

   function remover(){
        var titulo = document.getElementById("titulo")
        titulo.classList.remove("destacado")
   }

   function alternar(){
        var titulo = document.getElementById("titulo")
        titulo.classList.toggle("destacado")
   }

   function adicionartexto(){
         var novo, div
         novo = document.createElement("p")
         novo.id = "paragrafo"
         novo.innerText = "Novo parágrafo criado via JS"

         div = document.getElementById("container")
         div.appendChild(novo)

   }