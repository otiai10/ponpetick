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
// 処理対象のtitleオブジェクトと、置換対象のaオブジェクトをなにするか決める
__pt.getDecorator = function(cb) {
  __pt.config.get('useDemado', function(useDemado) {
    if (!useDemado) return cb(function(title, anchor) {
        title.innerHTML = '';
        title.appendChild(anchor);
    });
    cb(function(title, anchor) {
      title.addEventListener('click', function() {
        chrome.runtime.sendMessage(__pt.consts.demado, {
          path:   '/mado/launch/external',
          action: '/mado/launch/external',
          url: anchor.getAttribute('href')
        }, function(res) {
          console.log(res);
          if (res.status == 'error') return window.alert(JSON.stringify(res));
        });
      });
      title.setAttribute('style', 'text-decoration: none;color: rgba(255,80,20,1)');
    });
  });
};
__pt.Anchor = function(title, cb) {
  var url = __pt.getSourceURL(title, function(url) {
    var a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');
    a.setAttribute('style', 'text-decoration: none;color: rgba(255,80,20,1)');
    a.innerText = title;
    cb(a);
  });
};
(function(){
  var _s = document.getElementsByClassName('anime-info-bottom');
  if (!_s.length) return;
  var title = _s[0].getElementsByTagName('h2')[0];
  __pt.Anchor(title.innerText, function(anchor) {
    __pt.getDecorator(function(decorator) {
      decorator(title, anchor);
    });
  });
})();
