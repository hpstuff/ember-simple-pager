Simple emberjs pager mixin
==================

###Computed properties

This mixin will add properties to your controller

* `pages` `{number}` - all available pages
* `totalResults` `{number}` - total results count  
* `currenPage` `{number}` - page index that is loaded
* `prevPage` `{number}` - index of prev page if is available 
* `hasPrevPage` `{boolean}` - true/false based on current page index
* `hasNextPage` `{boolean}` - true/false based on current page index

###Prepare 

For this mixin your server has to return [meta](http://emberjs.com/guides/models/handling-metadata/) for collection formated like:
```javascript
{
    pages: 10,
    page: 2,
    total: 100,
    pre_page: 10
}
```
and the call that ember will make will be like:
```
http://<address>?page=2&per_page=40
```


###Example 

```javascript
App.Router.map(function() {
    this.resource('posts', { path: "posts/:page" });
});
```

```javascript
App.PostsRote = Ember.Route.extend({
    model: function(params){
        //this will make request like 'http://localhost/posts?page=1&per_page=40'
        return this.store.find('post', { page: params.page, per_page: 40});
    }
});
```

```javascript
App.PostsController = Ember.Controller.extend(SimplePager.ControllerMixin);
```

```html
//template.hbs
{{#each }}
<!-- this will each your models -->
{{/each}}
<ul class="pagination">
    <li {{bind-attr class="hasPrevPage::disabled"}}>
        <!-- replace 'route' with name of your route -->
        {{#link-to 'route' prevPage}}&laquo;{{/link-to}}
    </li>
    <li>
        <span>{{currentPage}}/{{pages}}</span>
    </li>
    <li {{bind-attr class="hasNextPage::disabled"}}>
        <!-- replace 'route' with name of your route -->
        {{#link-to 'route' nextPage}}&raquo;{{/link-to}}
    </li>
</ul>
```
