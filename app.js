document.addEventListener('DOMContentLoaded', function() {
  var themeButton = document.getElementById('theme-button');

  // Carregue o tema preferido do localStorage
  var preferredTheme = localStorage.getItem('theme');
  if (preferredTheme !== 'dark') {
      // Sempre defina o tema como "light" no localStorage
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark-mode');
  } else {
      document.body.classList.add('dark-mode');
  }

  themeButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');

      // Sempre atualize o valor no localStorage
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');

      alterarTema(); // Atualize as imagens e o texto no botão
  });

  alterarTema(); // Atualize as imagens e o texto no botão
});

function alterarTema() {
  var button = document.getElementById('theme-button');
  var image = document.getElementById('theme-icon');
  var logo = document.getElementById('topo-logo');
  var text = document.getElementById('theme-text');
  var menu = document.getElementById('header');

  if (document.body.classList.contains('dark-mode')) {
      button.className = 'modo-escuro';
      image.src = 'assets/sun.png';
      logo.src = 'assets/logo-clara-bola-roxa.png';
      text.textContent = 'Light';
      menu.className = 'menu-dark';
  } else {
      button.className = 'modo-claro';
      image.src = 'assets/moon.png';
      logo.src = 'assets/logo-preta-bola-roxa.png';
      text.textContent = 'Dark';
      menu.className = 'menu-light';
  }
}

