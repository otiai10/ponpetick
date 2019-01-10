(async (scope) => {
  const target = scope.document.querySelector("div.anime-info-bottom>h2");
  const title = target.innerText;
  target.addEventListener("click", () => {
    chrome.runtime.sendMessage(null, {action: "/open", title});
  });
  target.classList.add("ponpeable");
})(window);
