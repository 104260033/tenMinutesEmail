window.$ = window.jQuery = require('jquery');
window.Laravel = { csrfToken: $('meta[name=csrf-token]').attr("content") };
require('../bootstrap');
const app = new Vue({
    el:'#app',
    data : {

    },
    methods:{

    }
});
