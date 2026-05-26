const { createApp } = Vue;

createApp({
    mounted() {
        document.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => {
            e.preventDefault();
            console.log('form submitted');
        }));
    },
    methods: {
        togglePassword(inputId) {
            const input = document.getElementById(inputId);
            if (!input) return;
            input.type = input.type === 'password' ? 'text' : 'password';
        }
    }
}).mount('#app');
