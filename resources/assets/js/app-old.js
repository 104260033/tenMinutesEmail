
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

Vue.component('example', require('./components/Example.vue'));
Vue.component('task',{
	 template: '<li><slot></slot></li>'
});
Vue.component('task-list',{
	template: `
		<div>
			<task v-for='task in tasks' v-text='task.task'></task>
		</div>
	`,

	data() {
			return {
				tasks : [
					 { task : 'Go to the email', complete:true},
					 { task : 'Go to the work', complete:true},
					 { task : 'Go to the store', complete:true},
					 { task : 'Go to the efarm', complete:true},
				]
			}
	}
});

Vue.component('message',{
	data(){
			return {
				isVisible:true
			}
	},
	props:{
		title:'',
		content:''
	},
	template:`
		<article class="message" v-show='isVisible'>
		  <div class="message-header">
		    <p>{{ title }}</p>
		    <button class="delete" v-on:click='isVisible = false'></button>
		  </div>
		  <div class="message-body">
		    {{ content }}
		  </div>
		</article>
	`,
	methods:{
		hideModal(){
				this.isVisible = false;
		}
	}
});

Vue.component('modal',{
	template:`
			<div class="modal is-active">
			  <div class="modal-background"></div>
				  <div class="modal-content">
				  			<div class="box">
										<slot></slot>
							 </div>
				   </div>
			  <button class="modal-close" @click="$emit('close')"></button>
			 </div>
	`
});
Vue.component('tabs',{
		template:`

		<div>
				<div class="tabs">
					  <ul>
						    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActivity }">
									<a @click="selectTab(tab)" :href1="tab.href">{{ tab.name }}</a>
						    </li>
					  </ul>
				</div>

				<div class='tabs-details'>
					<slot></slot>
				</div>
			</div>
		`,
		data(){
			return {
					tabs: []
			}
		},
		created(){
			   this.tabs = this.$children;
		},
		methods:{
			selectTab(selectedTab){
				  this.tabs.forEach(tab => {

				  	tab.isActivity = (tab.name == selectedTab.name);
				  });
			}
		}


});
Vue.component('tab',{
	template:`
		<div v-show='isActivity'> <slot></slot> </div>
	`,
	props:{
		name:''
	},
	data (){
		return {
				isActivity : false,
		}
	},
	computed : {
		href(){
			  return 'www.google.com'.split('').reverse().join('');
		}
	}
});

Vue.component('coupon',{
	template:`
					<input type="text" placeholder='Enter your coupon code' v-on:blur="$emit('applid')">
	`,
			methods:{
		onCouponApplied(){
			alert('component');
		}
	}
});

Vue.component('modal2',{
	template:`
			<div class="modal is-active">
			  <div class="modal-background"></div>
			  <div class="modal-card">
				    <header class="modal-card-head">
					      <p class="modal-card-title">
									<slot name='title'></slot>
					      </p>
					      <button class="delete"></button>
				    </header>
				    <section class="modal-card-body">
				   	   		<slot name='content'>
										Default content
				   	   		</slot>
				    </section>
				    <footer class="modal-card-foot">
					      <a class="button is-success">Save changes</a>
					      <a class="button">Cancel</a>
				    </footer>
				  </div>
			</div>
	`,
});
Vue.component('progress-view',{
  props: ['vueCompletionRate'],

		data(){
			 return {
			 		completionRate : 100
			 }
		}
});
// window.Event = new class {
// 	contructor(){
// 		this.vue =	new Vue({
// 				el: '#app',
// 				data : {
// 							isShow:false,
// 							couponApplied:false
// 				},
// 					methods:{
// 					onCouponApplied(){
// 						this.couponApplied = true;
// 					}
// 				}
// 			});
// 	}

// 	fire(event,data = null ){
// 			this.vue.$emit(event,data);
// 	}

// 	listen(event,callback){
// 		this.vue.$on(event,callback);
// 	}

// }


// const app = new Vue({
// 	el: '#app',
// 		data : {
// 				isShow:false,
// 				couponApplied:false,
// 				vueCompletionRate:100,
// 	},
// 		methods:{
// 		onCouponApplied(){
// 			this.couponApplied = true;
// 		}
// 	}
// });

const app = new Vue({
	el:'#app',
	data : {

	},
	methods:{

	}
});
