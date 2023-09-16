function fuja() {
  const botaoNao = document.getElementById('nao');

  const larguraJanela = window.innerWidth;
  const alturaJanela = window.innerHeight;

  const maxX = larguraJanela - botaoNao.offsetWidth;
  const maxY = alturaJanela - botaoNao.offsetHeight;

  const aleatorioX = Math.floor(Math.random() * maxX);
  const aleatorioY = Math.floor(Math.random() * maxY);

  botaoNao.style.left = aleatorioX + 'px';
  botaoNao.style.top = aleatorioY + 'px';
}

const musica = document.getElementById('background-music');
musica.play();

musica.volume = 0.05;

window.addEventListener('load', () => {
  musica.load();
  musica.play();
});
