// var HomeView = function(store) {

// 	this.render = function() {
// 		//     $('body').html(this.homeTpl());
   
// 	    this.el.html(HomeView.template());
// 	    $('.search-key').on('keyup', $.proxy(this.findByName, this));
// 	    return this;
// 	};
// 	this.findByName = function() {
// 	    store.findByName($('.search-key').val(), function(employees) {
// 	        $('.employee-list').html(HomeView.liTemplate(employees));
// 	    });
// 	};
// 	initialize: function() {
// 	    var self = this;
// 	    this.store = new MemoryStore(function() {
// 	        $('body').html(new HomeView(self.store).render().el);
// 	    });
// 	};

// 	 this.initialize();
 
// 	HomeView.template = Handlebars.compile($("#home-tpl").html());
// 	HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());
// }