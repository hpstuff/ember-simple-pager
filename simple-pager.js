(function(Ember){

    var SimplePager = {};

    SimplePager.ControllerMixin = Ember.Mixin.create({
        currentPage: 1,
        pages: 1,
        totalResults: 1, 
        nextPage: function(){
            var page = this.get('currentPage')+1;
            if(page > this.get('pages')) page = this.get('pages');
            return page;
        }.property('currentPage'),
        prevPage: function(){
            var page = this.get('currentPage')-1;
            if(page < 1) page = 1;
            return page;
        }.property('currentPage'),
        initCurrentPage: function(){
            this.set('currentPage', Number(this.get('content.meta.page')));
            this.set('pages', Number(this.get('content.meta.pages')));
            this.set('totalResults', Number(this.get('content.meta.total')));
        }.observes('content'),
        hasPrevPage: function(){
            return this.get('prevPage') > 1;
        }.property('nextPage'),
        hasNextPage: function(){
            return this.get('nextPage') < this.get('pages');
        }.property('nextPage')
    });

    window.SimplePager = SimplePager;

})(Ember);
