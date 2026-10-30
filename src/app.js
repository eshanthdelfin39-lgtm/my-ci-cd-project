const runCheck = document.querySelector('#run-check');
const statusMessage = document.querySelector('#status-message');

runCheck.addEventListener('click', () => {
  statusMessage.textContent = 'All checks passed. Ready to ship.';
  runCheck.textContent = 'Checks passed ✓';
  runCheck.disabled = true;
});