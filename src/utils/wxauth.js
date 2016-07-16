module.exports = {
  goAuth: function () {
    var _pageurl = window.location.href;
    window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx00a9833748f6acef&redirect_uri=' + _pageurl + '?corpId=wx00a9833748f6acef&response_type=code&scope=snsapi_base&state=#wechat_redirect';
  },
  GetQueryString: function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var context = "";
    if (r != null) {
      context = r[2];
    }
    reg = null;
    r = null;
    return context == null || context === "" || context === "undefined" ? "" : context;
  }
};
