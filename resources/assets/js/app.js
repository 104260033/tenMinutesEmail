
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
	constructor(){
		this.errors = {};
	}
	get(field){
		if(this.errors[field]){
			return this.errors[field][0];
		}
	}
	clear(field){
		delete this.errors[field];
	}
	record(errors){
		this.errors = errors;
	}
}
class Form {
	constructor(data){
		this.data = data;

		for (let field in data ){
			this[field] = data[field];
		}
	}

}
const app = new Vue({
	el:'#app',
	data : {
		form: new Form({
			email: '',
			password: '',
		}),
		errors: new Errors()
	},
	methods:{
		onSubmit(){
			axios.post('/user/login',this.data)
				.then(response => onSuccess())
				.catch(error => {
					this.errors.record(error.response.data);
				})
		},
		onSuccess(){

		}
	}
});
