;
(function($, window, document, undefined) {

    "use strict";

    var pluginName = "slothLoader",
        defaults = {
            'offset': $(window).height(), //how long before it kicks in
            'elem': '.lazy-loadable', //looks for this class to lazy load
            'dataSrc': 'lazy' //define own data attr
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;

        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function() {
	      $(window).scroll( $.proxy( this._sloth, this ) );
	      $(window).on( 'load', $.proxy( this._sloth, this ) );
			},

			_sloth: function(){
			 var scrollDist = $(window).scrollTop() + this.settings.offset;
			 var el = $(this.settings.elem);
       var self = this;
			 el.each(function(){
				 if( !$(this).hasClass('loaded') ){
					 var scrollTop = $(this).offset().top;
					 var dataImage = $(this).data(self.settings.dataSrc);
					 //look for element type - img, source or everything else
					 var elemType = this.localName;
					 if( scrollDist > scrollTop ){
						switch(elemType){
							case 'img':
								//check to see if image has srcset val & lazyload that instead
	 							if( $(this).attr('srcset') != undefined ){
	 								$(this).attr('srcset', dataImage);
	 								$(this).addClass('loaded');
	 							} else {
	 								$(this).attr('src', dataImage);
	 								$(this).addClass('loaded');
	 							}
								break;
							case 'source':
								$(this).attr('srcset', dataImage);
								$(this).addClass('loaded');
								break;
							default:
								$(this).css('backgroundImage', 'url(' + dataImage + ')');
								$(this).addClass('loaded');
								break;
						}
					 }
				 }
			 });
		 }

		});

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" +
                    pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
