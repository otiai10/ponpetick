var __pt = __pt || {
    __key: {}, config: {
        defaults: {
            "sourceURL0": "https://www.youtube.com/results?search_query=#{title}",
            "useDemado": false
        }
    },
    consts: {
      // demado: 'cdbfehghpggbjdhgdccjbkdgplgilmjh' // development
      demado: 'dfmhlfpfpbijchleocfbpcdjgnbpdigh' // production
    }
};
__pt.__key.config = "pt.config";
__pt.config.set = function(key, value) {
    var obj = {}; obj[key] = value;
    chrome.storage.local.set(obj);
};
__pt.config.get = function(key, cb) {
    chrome.storage.local.get(key, function(res) {
        cb((res[key] != undefined) ? res[key] : __pt.config.defaults[key]);
    });
};
