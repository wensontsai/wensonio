var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	// if any actions get called, and you have method of same name, invoke it
	// subscribed to Actions
	listenables: [
		Actions
	],
	getTopics: function(){
		// AJAX request thru Fetch
		return Api.get('topics/defaults')
				.then(function(json){
					this.topics = json.data;
					this.triggerChange();
				}.bind(this) );
	},
	triggerChange: function(){
		// Reflux emits 'change' : Reflux.trigger(event, emitObj)
		this.trigger('change', this.topics);
	}
});