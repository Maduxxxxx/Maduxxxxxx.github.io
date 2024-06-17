const targetDate = new Date('2024-07-15T19:00:00');
const countdownTimer = document.getElementById('countdown-timer');

function updateCountdown() {
  const now = new Date();
  const diffMs = targetDate.getTime() - now.getTime();

  if (diffMs < 0) {
    countdownTimer.textContent = 'SERVER ON!';
    return;
  }
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const formattedTime = `${days ? days + ' zile ' : ''}${hours.toString().padStart(2, '0')} ore`;
  countdownTimer.textContent = `REVENIM IN ${formattedTime}`;
}

const intervalId = setInterval(updateCountdown, 1000);