(async (scope) => {
  chrome.runtime.sendMessage(null, { action: "/config:get" }, ({ server }) => {
    const url = new URL(server);
    const target = scope.document.querySelector("div.anime-info-bottom>h2");
    const link = scope.document.createElement("span");
    const title = target.innerText;
    link.classList.add("ponpeable");
    link.innerText = `${url.hostname}で開く`;
    link.addEventListener("click", () => {
      chrome.runtime.sendMessage(null, {action: "/open", title});
    });
    target.parentNode.insertBefore(link, target.nextSibling);
  });
})(window);
