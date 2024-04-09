// DOM - document object manipulation
console.log(window.innerWidth);
console.log(window.document)
const btn = document.getElementById('btn');
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.addEventListener('click', () => {
    const login = document.getElementById('login');
    const senha = document.getElementById('senha');
    console.log(login.value);
    console.log(senha.value);
    login.value = '';
    senha.value = '';
});
console.log(btn)