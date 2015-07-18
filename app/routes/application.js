import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://localhost:5000/find_user/name/asdf';
    return Ember.$.getJSON(url);
  }
});
