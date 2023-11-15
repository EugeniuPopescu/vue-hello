const { createApp } = Vue

const options = {
    data: function() {
        return {
            message: 'Hello VUEer',
            name: 'Eugen',
            mySrc: './hq720.jpg'
        }
    }
};

// il metodo mount() seve per connettere l'istanza al tag HTML con id #app e renderizzare l'app
createApp(options).mount('#app')