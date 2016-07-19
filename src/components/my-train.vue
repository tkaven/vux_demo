<style>
.spinner-contianer{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: center;
  padding-top: 45%;
}
.spinner-contianer .vux-spinner svg{
  width: 40px;
  height: 40px;
}
</style>
<template>
    <x-header :left-options="{showBack: true, backText: ''}">我的培训课程
    <a slot="right" v-link="{ path: '/My' }">我的</a></x-header>
  <div>
    <group>
        <panel header="我的培训资料列表" @on-click-footer="getDataFromApi" :footer="footer" :list="list" :type="type"></panel>
    </group>
    <div class="spinner-contianer">
      <spinner type="lines"></spinner>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import config from '../utils/config.js';
import wxauth from '../utils/wxauth.js';
import Group from 'vux/src/components/group';
import Panel from 'vux/src/components/panel';
import XHeader from 'vux/src/components/x-header';
import Spinner from 'vux/src/components/spinner';
export default {
  components: {
    Panel,
    Group,
    XHeader,
    Spinner
  },
  ready: function () {
    let code = wxauth.getSingleQueryString('code');
    let corpId = wxauth.getSingleQueryString('corpId');
    let ls = window.localStorage.userid;
    let self = this;
    if (!ls || ls === '读取数据有误') {
      // this.$http.get(config.AUTH_URL + '?corpId=' + corpId + '&code=' + code, {}, {
      //   headers: {
      //     "X-Requested-With": "XMLHttpRequest"
      //   },
      //   emulateJSON: true
      // }).then(function (response) {
      //   console.log(response.data);
      //   window.localStorage.userid = response.data.userId;
      //   this.getDataFromApi(response.data.userId);
      // });
      $.ajax({
        type: 'GET',
        url: config.AUTH_URL,
        async: false,
        data: {corpId: corpId, code: code},
        success: function (data) {
          if (data.userId !== '读取数据有误') {
            window.localStorage.userid = data.userId;
          }
          self.getDataFromApi(data.userId);
        }
      });
    } else {
      this.getDataFromApi(ls);
    }
  },
  computed: {
    footer: function () {
      return this.list.length > 4 ? {
        title: this.foottitle
      } : null;
    }
  },
  methods: {
    getDataFromApi (uid) {
      let pageId = this.pageId;
      let self = this;
      // this.$http.get(config.SERVER_URL + 'mine?page=' + pageId + '&userId=' + uid, {}, {
      //   headers: {
      //     "X-Requested-With": "XMLHttpRequest"
      //   },
      //   emulateJSON: true
      // }).then(function (response) {
      //   let el = document.querySelector('.spinner-contianer');
      //   let data = response.data;
      //   let jsonArray = [];
      //   if (data.length === 0) {
      //     this.footer.title = '没有更多了';
      //   }
      //   for (let i = 0; i < data.length; i++) {
      //     let row = {};
      //     row.title = data[i].training_name;
      //     row.desc = data[i].training_desc;
      //     row.url = '/MyCourse/' + data[i].training_id + '/' + uid;
      //     jsonArray.push(row);
      //   }
      //   this.list = this.list.concat(jsonArray);
      //   el.style.display = 'none';
      //   this.pageId++;
      // }, function (response) {
      //         // handle error
      // });
      $.ajax({
        type: 'GET',
        url: config.SERVER_URL + 'mine',
        data: {page: pageId, userId: uid},
        success: function (data) {
          let el = document.querySelector('.spinner-contianer');
          let jsonArray = [];
          if (data.length === 0) {
            self.foottitle = '没有更多了';
          }
          for (let i = 0; i < data.length; i++) {
            let row = {};
            row.title = data[i].training_name;
            row.desc = data[i].training_desc;
            row.url = '/MyCourse/' + data[i].training_id + '/' + uid;
            jsonArray.push(row);
          }
          self.list = self.list.concat(jsonArray);
          el.style.display = 'none';
          self.pageId++;
        }
      });
    }
  },
  data () {
    return {
      pageId: 0,
      userid: 0,
      list: [],
      foottitle: '加载更多'
    };
  }
};
</script>
