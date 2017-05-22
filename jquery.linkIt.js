/*
*   Name: LinkIt
*   Author: Victor Muñoz
*   Version: 0.1.0
*   License: MIT
*
*/

(function($){
    $.fn.linkIt= function(options){
        //alert(this.html()); de esta manera llamamos al texto al que asignamos el script 
        //recojiendo el texto que tenga ese selector
        
        
        var settings = $.extend({
            href:   null,
            text:   null,
            target: '_self'
        },options);
        
        //Validation 
        if(settings.href == null){
            console.log('you need an href option Linkit to work');
            return this;
        }
        
        return this.each(function(){
           var object = $(this);
            
            if(settings.text == null){
                settings.text= object.text();
            }
            
            object.wrap('<a target ="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
        });
        

        
    }
 }(jQuery));
