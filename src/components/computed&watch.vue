<template>
    <div>
        message: {{message}}
        reverseMessage: {{reverseMessage}}
    </div>
</template>

<script>
export default {
    data(){
        return {
            message: 'hello'
        }
    },
    mounted(){
        console.log(this.$route);
        setTimeout(() => {
            this.message = '123'
        }, 2000);

        // setTimeout(() => {
        //     this.reverseMessage = 'ok'
        // }, 3000);
    },
    computed:{
        reverseMessage:{
            get(){
                console.log('computed enter');
                return this.message.split('').reverse().join('');
            }
        }
    },
    watch: {
        reverseMessage:function(newVal){
            console.log('watch fn', newVal);
        }
    }
}
</script>
