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
    
        /* button  #botao-prox */
    $(document).on("click", "#botao-prox", function(evt)
    {
         /*global activate_page */
         activate_page("#identificacao-dor"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
