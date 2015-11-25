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
    $(document).on("click", "#botao-prox", function(evt)
    {
         /*global activate_page */
         activate_page("#identificacao-dor"); 
    });
    
        /* button  #prox-pg2 */
    $(document).on("click", "#prox-pg2", function(evt)
    {
         /*global activate_page */
         activate_page("#informacoes-pessoais"); 
    });
    
        /* button  #prox-pg3 */
    $(document).on("click", "#prox-pg3", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#popup").modal("toggle");  
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
