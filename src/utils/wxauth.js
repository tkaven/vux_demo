module.exports = {
  goAuth: function (callback) {
    var _localpage = encodeURIComponent(location.href);
    var _pageurl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx00a9833748f6acef&redirect_uri=' + _localpage + '?corpId=wx00a9833748f6acef&response_type=code&scope=snsapi_base&state=#wechat_redirect';
    var code = this.getSingleQueryString('code');
    var corpId = this.getSingleQueryString('corpId');
    if (!code) {
      location.href = _pageurl;
    } else {
      window.localStorage.code = code;
      window.localStorage.corpId = corpId;
      callback();
    }
  },
  getSingleQueryString: function (name) {
    var s = location.hash.split('?');
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    if (s[1]) {
      var r = s[1].match(reg);
    }
    if (r != null) return unescape(decodeURI(r[2])); return null;
  }
};
