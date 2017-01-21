function PopupHandler(options) {
	var template = $("#messageAlertScript");
	var self = this;

    self.options = {
        'parentClass': 'select-service',
        'container': (options.container) ? options.container : 'message-alert',
        'text': options.text,
        'onClose': options.onClose || function(){},
        'onOpen': options.onOpen || function(){},
        'closeClass': options.closeClass || 'close'
    };

    self.close = function(e) {
        $('#' + self.options.container).fadeOut();
        $('#' + self.options.container).remove();
        $('.pageOverlay').fadeOut();
        self.options.onClose.call(this, e);
    }
    // bind listner on elements
    if(self.options.closeClass){
    	$(document).on('click', "." + self.options.closeClass, function(e){
	    	self.closePopup(e);
	    });
	}

    self.open = function() {
        $('.' + self.options.parentClass).append(template.html());
        $('#' + self.options.container).fadeIn('slow');
        $('#message-text').html(self.options.text);
        $('.' + self.options.parentClass).append('<div class="pageOverlay"></div>');
        self.options.onOpen.call(this);
    };
   
}