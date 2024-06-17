function fetchPlayerCount() {
    fetch('https://mcapi.us/server/status?ip=mc.crowned.ro')
        .then(response => response.json())
        .then(data => {
            if (data.online) {
                document.getElementById('server-players').textContent = data.players.now;
            } else {
                document.getElementById('server-players').textContent = 'N/A';
            }
        })
        .catch(error => {
            console.error('Failed to fetch player count:', error);
            document.getElementById('server-players').textContent = 'Error';
        });
}

fetchPlayerCount();
setInterval(fetchPlayerCount, 30000);
