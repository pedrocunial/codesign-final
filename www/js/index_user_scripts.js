/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #botao-prox */
    
    
        /* button  #prox-pg2 */
    $(document).on("click", "#prox-pg2", function(evt)
    {
         /*global activate_page */
         activate_page("#informacoes-pessoais"); 
    });
    
        /* button  #prox-pg3 */
    
    
        /* button  #prox-pg3 */
    $(document).on("click", "#prox-pg3", function(evt)
    {
         /*global activate_page */
         activate_page("#pergunta1"); 
    });
    
        /* button  #prox-perg1 */
    $(document).on("click", "#prox-perg1", function(evt)
    {
         /*global activate_page */
         activate_page("#pergunta2"); 
    });
    
        /* button  #btn-finalizar */
    
    
        /* button  #btn-finalizar */
    
    
        /* button  #btn-finalizar */
    $(document).on("click", "#btn-finalizar", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#pop-final").modal("toggle");  
    });
     
    $(document).on("click", "#pop-final .modal-footer button", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  #botao-prox */
    $(document).on("click", "#botao-prox", function(evt)
    {
         /*global activate_page */
         activate_page("#identificacao-dor"); 
    });
    
        /* button  #btn-sim */
    $(document).on("click", "#btn-sim", function(evt)
    {
        $("#btn-group1").replaceWith('<div class="row" id="limpa1"> <div class="col-xs-11"> <input class="wide-control form-control default" type="text" placeholder="Qual(is)?"></input> </div> <div class="col-xs-1"><button id="clear1">x</button> </div> </div>');
    });
     
    $(document).on("click", "#clear1", function(evt)
    {
        $("#limpa1").replaceWith('<div class="btn-group uib-bs-flex widget uib_w_39 d-margins" data-uib="twitter%20bootstrap/button_group" data-ver="1" id="btn-group1"> <button class="btn widget uib_w_40 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" id="btn-sim">Sim</button> <button class="btn widget uib_w_41 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" id="btn-nao">Não</button> </div>');   
    });
     
    $(document).on("click", "#btn-sim2", function(evt)
    {
        $("#btn-group2").replaceWith('<div class="row" id="limpa2"> <div class="col-xs-11"> <input class="wide-control form-control default" type="text" placeholder="Qual(is)?"></input> </div> <div class="col-xs-1"> <button id="clear2">x</button> </div> </div>');
    });
     
    $(document).on("click", "#clear2", function(evt)
    {
        $("#limpa2").replaceWith('<div class="btn-group uib-bs-flex widget uib_w_39 d-margins" data-uib="twitter%20bootstrap/button_group" data-ver="1" id="btn-group2"> <button class="btn widget uib_w_40 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" id="btn-sim2">Sim</button> <button class="btn widget uib_w_41 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" id="btn-nao2">Não</button> </div>');   
    });
     
    $(document).on("click", "#btn-sim3", function(evt)
    {
        $("#btn-group3").replaceWith('<div class="row" id="limpa3"> <div class="col-xs-11"><input class="wide-control form-control default" type="text" placeholder="Qual(is)?"></input> </div> <div class="col-xs-1"> <button id="clear3">x</button> </div> </div>');
    });
     
    $(document).on("click", "#clear3", function(evt)
    {
        $("#limpa3").replaceWith('<div class="btn-group uib-bs-flex widget uib_w_39 d-margins" data-uib="twitter%20bootstrap/button_group" data-ver="1" id="btn-group3"> <button class="btn widget uib_w_40 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" id="btn-sim3">Sim</button> <button class="btn widget uib_w_41 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" id="btn-nao3">Não</button> </div>');   
    });
     
    $(document).on("click", "#btn-sim4", function(evt)
    {
        $("#btn-group4").replaceWith('<div class="row" id="limpa4"> <div class="col-xs-11"> <input class="wide-control form-control default" type="text" placeholder="Qual(is)?"></input> </div> <div class="col-xs-1"> <button id="clear4">x</button> </div> </div>');
    });
     
    $(document).on("click", "#clear4", function(evt)
    {
        $("#limpa4").replaceWith('<div class="btn-group uib-bs-flex widget uib_w_39 d-margins" data-uib="twitter%20bootstrap/button_group" data-ver="1" id="btn-group4"> <button class="btn widget uib_w_40 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" id="btn-sim4">Sim</button> <button class="btn widget uib_w_41 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" id="btn-nao4">Não</button> </div>');   
    });
     
    $(document).on("click", "#btn-sim5", function(evt)
    {
        $("#btn-group5").replaceWith('<div class="row" id="limpa5"> <div class="col-xs-11"> <input class="wide-control form-control default" type="text" placeholder="Qual(is)?"></input> </div> <div clas="col-xs-1"> <button id="clear5">x</button> </div> </div>');
    });
     
    $(document).on("click", "#clear5", function(evt)
    {
        $("#limpa5").replaceWith('<div class="btn-group uib-bs-flex widget uib_w_39 d-margins" data-uib="twitter%20bootstrap/button_group" data-ver="1" id="btn-group5"> <button class="btn widget uib_w_40 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" id="btn-sim5">Sim</button> <button class="btn widget uib_w_41 btn-default" data-uib="twitter%20bootstrap/button" data-ver="1" id="btn-nao5">Não</button> </div>');   
    });
     
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
