let wrapper = document.getElementById('wrapper');
wrapper.addEventListener('mousemove', (event) => {
    let moveX = ((window.screen.width / 2) - event.pageX) * 0.02;
    let moveY = ((window.screen.height / 2) - event.pageY) * 0.02;
    let background = document.getElementById('background');
    background.style.marginLeft = moveX + 'px';
    background.style.marginTop = moveY + 'px';
});
particlesJS.load('particles', 'assets/particles.json');
MinecraftAPI.getServerStatus(document.getElementById('server-ip').innerHTML, { port: 25565 }, (error, status) => {
    if (error) {
        return console.log('vezi frt ca na mers');
    }
    document.getElementById('server-players').innerHTML = status.players.now;
});

// https://youtu.be/rHpV5mYFyp0
