<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <Message>测试Message</Message>
                      <Message>测试Message2</Message>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Message from './Message.vue';
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components:{
            Message
        }
    }
</script>
