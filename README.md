ember-simple-pager
==================

##Simple emberjs pager mixin

###Example

```javascript
App.Route = Ember.Route.extend({
    model: function(params){
        return this.store.find('model', { page: params.page, per_page: 40});
    }
});
```
```javascript
App.Controller = Ember.Controller.extend(SimplePager.ControllerMixin);
```
```html
//template.hbs
<ul class="pagination">
    <li {{bind-attr class="hasPrevPage::disabled"}}>
        {{#link-to 'route' prevPage}}&laquo;{{/link-to}}
    </li>
    <li>
        <span>{{currentPage}}/{{pages}}</span>
    </li>
    <li {{bind-attr class="hasNextPage::disabled"}}>
        {{#link-to 'route' nextPage}}&raquo;{{/link-to}}
    </li>
</ul>
```
