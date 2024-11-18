document.addEventListener("DOMContentLoaded",function(){
    fetch("/CLIENT/Src/Public/Components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});


document.addEventListener("DOMContentLoaded", function(){
    fetch('/CLIENT/Src/Public/Components/footer.html')
        .then(responsive => responsive.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

// inscription
document.getElementById('registerForm').addEventListener('submit', function(event){
    event.preventDefault();
    // Validations supplémentaires
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confPassword = document.getElemmentById('confPassword').value;
    if (name && email && password == confPassword){
        alert('Inscription réussiec!');
        // Rediriger ou traiter les données ici
    }
    else{
        if (password === confPassword){
            alert('Vous avez entrez des mots de passe différents.')
        }
        else{
            alert('Veuillez remplir tous les champs.');
        } 
    } 
});

// Connexion
document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    // Validations supplémentaires
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email && password) {
        alert('Connexion réussie!');
        // Rediriger ou traiter les données ici
    } 
    else{
        alert('Veuillez remplir tous les champs.');
    }
});

// Formations
document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
    el.addEventListener('shown.bs.tab', () => {
      const target = el.getAttribute('data-bs-target');
      const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`);
      bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh();
    });
});
