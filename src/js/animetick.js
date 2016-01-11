var __pt = __pt || {};
__pt.FormatSourceURL = function(cb){
  __pt.config.get("sourceURL0", cb);
};
__pt.getSourceURL = function(title, cb) {
  __pt.FormatSourceURL(function(format) {
    if (!format) return;
    cb(format.replace(/#{title}/g, title));
  });
};
__pt.Anchor = function(title, cb) {
  var url = __pt.getSourceURL(title, function(url) {
    var a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('style', 'text-decoration: none;color: rgba(255,80,20,1)');
    a.setAttribute('target', '_blank');
    a.innerText = title;
    cb(a);
  });
};
(function(){
  var _s = document.getElementsByClassName('anime-info-bottom');
  if (!_s.length) return;
  var title = _s[0].getElementsByTagName('h2')[0];
  __pt.Anchor(title.innerText, function(anchor) {
    title.innerHTML = '';
    title.appendChild(anchor);
  });
})();
