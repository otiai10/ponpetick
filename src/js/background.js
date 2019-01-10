chrome.runtime.onMessage.addListener((message, sender, respond) => {
  let config = {};
  switch(message.action) {
  case "/config:get":
    config = JSON.parse(localStorage.getItem("config") || "{}");
    respond(config);
    return true;
  case "/config:set":
    config = JSON.parse(localStorage.getItem("config") || "{}");
    const {key, value} = message;
    config[key] = value;
    localStorage.setItem("config", JSON.stringify(config));
    respond(config);
    return true;
  case "/open":
    config = JSON.parse(localStorage.getItem("config") || "{}");
    const title = message.title;
    const url = config.server.replace(/\/+$/, '') + "/search?q=%s".replace("%s", encodeURIComponent(title));
    chrome.windows.create({
      url,
      type: "popup",
      width: 450,
      height: 1200,
    });
    return true;
  }
  return true;
});

chrome.runtime.onInstalled.addListener(install => {
  console.log("REASON", install.reason);
  const config = JSON.parse(localStorage.getItem("config") || "{}");
  if (!config.server) {
    window.open(chrome.extension.getURL("src/html/config.html"));
  }
});