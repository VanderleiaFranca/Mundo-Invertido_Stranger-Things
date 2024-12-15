window.addEventListener('click', function() {
    const audio = document.getElementById('music');
    audio.play();
    audio.volume = 0.2;
  })

function switchTheme() {
    document.body.classList.toggle('mundoInvertidoTema');
    document.body.classList.toggle('mundoNormalTema');

    const theme = document.body.classList[0];
    const music = theme === 'mundoNormalTema' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

    const audio = document.getElementById('music');
    audio.src = `assets/musics/${music}`;
    audio.play();
    audio.volume = 0.2;
}