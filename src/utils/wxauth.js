module.exports = {
  goAuth: function () {
    // var _localpage = encodeURIComponent(location.href);
    var _pageurl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx00a9833748f6acef&redirect_uri=http%3a%2f%2fmscrm.huntor.cn%3a10116?corpId=wx00a9833748f6acef&response_type=code&scope=snsapi_base&state=#wechat_redirect';
    return _pageurl;
  },
  getSingleQueryString: function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|#)", "i");
    var s = location.href.split('?');
    if (s.length > 1) {
      var r = s[1].match(reg);
      if (r) {
        return unescape(decodeURI(r[2]));
      }
    } else {
      return null;
    }
  }
};
