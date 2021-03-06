var app = {

    // findByName: function() {
    //     console.log('findByName');
    //     this.store.findByName($('.search-key').val(), function(employees) {
    //         var l = employees.length;
    //         var e;
    //         $('.employee-list').empty();
    //         for (var i=0; i<l; i++) {
    //             e = employees[i];
    //             $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
    //         }
    //     });
    // },
    registerEvents: function() {
        var self = this;
        // Check of browser supports touch events...
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
            // ... if yes: register touch event listener to change the "selected" state of the item
            $('body').on('touchstart', 'a', function(event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('touchend', 'a', function(event) {
                $(event.target).removeClass('tappable-active');
            });
        } else {
            // ... if not: register mouse events instead
            $('body').on('mousedown', 'a', function(event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('mouseup', 'a', function(event) {
                $(event.target).removeClass('tappable-active');
            });
        }
    },

    findByName: function() {
        var self = this;
        this.store.findByName($('.search-key').val(), function(employees) {
            $('.employee-list').html(self.employeeLiTpl(employees));
            if (self.iscroll) {                
                console.log('Refresh iScroll');
                self.iscroll.refresh();
            } else {
                console.log('New iScroll');
                self.iscroll = new iScroll($('.scroll', self.el)[0], {hScrollbar: false, vScrollbar: false });
            }
        });
    },

    showAlert: function(message, title){
        if(navigator.notification){
            navigator.notification.alert(message, null, title, 'OK');
        }else{
            alert(title ? (title + ":" + message): message);
        }
    },

    renderHomeView: function() {

        $('body').html(this.homeTpl());        
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },

    // initialize: function() {
    //     this.store = new MemoryStore();
    //     $('.search-key').on('keyup', $.proxy(this.findByName, this));
    // }
    initialize: function() {

        this.homeTpl = Handlebars.compile($("#home-tpl").html());
        this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
        var self = this;
        this.store = new MemoryStore(function() {
            self.renderHomeView();
        });
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    }

};

app.initialize();