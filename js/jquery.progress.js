//You need an anonymous function to wrap around your function to avoid conflict
(function($){
 
    //Attach this new method to jQuery
    $.fn.extend({ 
         
        //This is where you write your plugin's name
        progress: function( options ) {

            options = options || {};
            options.value = options.value || 0;
            options.legend = options.legend || true;
 
            // Iterate over the current set of matched elements
            return this.each(function() {
                var progress = $(this);
                if (!progress.hasClass('percentgraph')) {
                    progress.addClass('percentgraph');
                }
                var greenbars = progress.find('.greenbar');
                var greenbar;
                if ( greenbars.length == 0 ) {
                    greenbar = $('<div class="greenbar"></div>');
                    progress.append(greenbar);
                } else {
                    greenbar = $(greenbars.get(0));
                }

                // Set label
                var texts = greenbar.find('.text');
                if ( texts.length == 0 ) {
                    text = $('<span class="text"></span>');
                    greenbar.append(text);
                } else {
                    text = $(texts.get(0));
                }
                text.text( options.value + '%' );

                // Show label
                if ( options.legend ) {
                    text.show();
                } else {
                    text.hide();
                }

                // Update bar value
                greenbar.css('width', options.value + 'px');

            });
        }
    });
     
})(jQuery);
