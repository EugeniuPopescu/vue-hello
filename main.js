const { createApp } = Vue

const options = {
    data: function() {
        return {
            message: 'Hello VUE!',
        }
    }
};

createApp(options).mount('#app')