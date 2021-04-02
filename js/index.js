$(".agregar").on("click", function(event){
    event.preventDefault();
    if ($("#newText").val() != ""){
        $(".Lista").append(`<div> 
        <li class = "lis"> 
            <p class = "itemShop" style="color:gray">${$("#newText").val()}</p>
            <button id="checkButton"> check </button>
            <button id="deleteButton"> delete </button>
        </li> </div>`);
    }
})

$(document).on("click", "#checkButton", function(event){
    // se llama al documento puesto que el id del boton se creó dinamicamente.
    // si se llama al id no se reconoce puesto que no estaba al principio.
    event.preventDefault();
    $(this).parent().toggleClass("check"); // si esta la clase check, la quita. Si no está, la agrega.
})

$(document).on("click", "#deleteButton", function(event){
    // se llama al documento puesto que el id del boton se creó dinamicamente.
    // si se llama al id no se reconoce puesto que no estaba al principio.
    event.preventDefault();
    $(this).parent().remove();
})
