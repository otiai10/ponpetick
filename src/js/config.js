var __pt = __pt || {};
window.onload = function(){
    var inputs = {};
    inputs.sourceURL = document.getElementById("source-url");
    __pt.config.get("sourceURL0", function(url) {
        inputs.sourceURL.value = url;
    });
    inputs.sourceURL.addEventListener("keydown", function(){
        __pt.config.set("sourceURL0", this.value);
    });
};
