(scope => {
  const input = scope.document.querySelector('input[type=url]');
  const button = scope.document.querySelector('button#save');
  const config = JSON.parse(localStorage.getItem('config') || '{}');
  input.value = config.server || '';
  button.addEventListener('click', () => {
    if (!input.value) return scope.alert('入力して');
    chrome.runtime.sendMessage(null, {action: "/config:set", key: "server", value: input.value}, () => {
      scope.location.reload();
    });
  });
})(window);