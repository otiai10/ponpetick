var __pt = __pt || {
    __key: {}, config: {}
};
__pt.__key.config = "pt.config";
__pt.config.set = function(key, value) {
    var obj = {}; obj[key] = value;
    chrome.storage.local.set(obj);
};
__pt.config.get = function(key, cb) {
    chrome.storage.local.get(key, function(res) {
        cb(res[key]);
    });
};
