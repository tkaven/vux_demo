module.exports = {
  goAuth: function () {
    var _pageurl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx00a9833748f6acef&redirect_uri=http://mscrm.huntor.cn:10116/?corpId=wx00a9833748f6acef&response_type=code&scope=snsapi_base&state=#wechat_redirect';
    location.href = _pageurl;
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
