document.addEventListener('DOMContentLoaded', function() {
    const serverIpElement = document.getElementById('server-ip');
    
    serverIpElement.addEventListener('click', function() {
        const serverIp = serverIpElement.textContent.trim();
        navigator.clipboard.writeText(serverIp).then(function() {
            console.log('IP copiat:', serverIp);
            const originalText = serverIpElement.textContent;
            serverIpElement.textContent = 'IP Copiat!';
            setTimeout(function() {
                serverIpElement.textContent = originalText;
            }, 1500);

            const copyMessage = document.createElement('span');
            copyMessage.textContent = 'Copiat!';
            copyMessage.classList.add('copy-message');
            serverIpElement.parentNode.insertBefore(copyMessage, serverIpElement.nextSibling);
            setTimeout(function() {
                copyMessage.style.opacity = '0';
                setTimeout(function() {
                    copyMessage.parentNode.removeChild(copyMessage);
                }, 500);
            }, 1000);

            serverIpElement.style.backgroundColor = 'orange';
            setTimeout(function() {
                serverIpElement.style.backgroundColor = '';
            }, 500);
        }).catch(function(err) {
            console.error('Eroare', err);
        });
    });
});