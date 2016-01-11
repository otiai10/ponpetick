var __pt = __pt || {};
window.onload = function(){
    var inputs = {};
    inputs.sourceURL = document.getElementById("source-url");
    inputs.useDemado = document.getElementById("use-demado");
    __pt.config.get("sourceURL0", function(url) {
        inputs.sourceURL.value = url;
    });
    __pt.config.get("useDemado", function(use) {
        inputs.useDemado.checked = use;
    });
    inputs.sourceURL.addEventListener("keydown", function(){
        __pt.config.set("sourceURL0", this.value);
    });
    inputs.useDemado.addEventListener("change", function() {
        __pt.config.set("useDemado", this.checked);
    });
};
