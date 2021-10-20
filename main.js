//const product = 'Socks'

const app = Vue.createApp({
    // data: function(){
    //     return{
    //         product: 'Socks'
    //     }
    // }
    data(){
        return{
            product: {
                name: 'Socks',
                description: 'These socks are very nice!'
            }
        }
    }
});