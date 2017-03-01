
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
window.$ = window.jQuery = require('jquery');
window.Laravel = { csrfToken: $('meta[name=csrf-token]').attr("content") };
require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
class Errors {
	construct(){
		this.errors = {};
	}
	get(field){
		if(this.errors[field]){
			return this.errors[field];
		}
	}
	record(errors){
		this.errors = errors;
	}
}
const app = new Vue({
	el:'#app',
	data : {
		name: '',
		description: '',
		errors: new Errors,
	},
	methods:{
		onSubmit(){
			axios.post('/user/login',this.data)
				.then(response => alert('Success'))
				.catch(error => {
					this.errors.record(error.response);
				})
		}
	}
});
