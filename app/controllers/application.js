import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: '',
  actions: {
    registerUser: function() {
      var self = this;
      console.log('registering user');
      Ember.$.ajax({
        headers: {
          'X-Transaction': 'POST Example',
          'X-CSRF-Token': Ember.$('meta[name="csrf-token"]').attr('content')
        },
        url: 'http://localhost:5000/add',
        type: 'POST',
        dataType: 'json',
        data: {          
          "age": this.get('age'),
          "sex": this.get('sex'),
          "name": this.get('name')
        },
        success: function(msg) {
          console.log('success!');
        },
        error: function(msg) {
          console.log('failure');
        }        
      });
    }
  }
});
