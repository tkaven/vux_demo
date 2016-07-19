<style scoped>
.spinner-wrap{
  text-align: center;
  padding-top: 2%;
}
.spinner-contianer .vux-spinner svg{
  width: 40px;
  height: 40px;
}
</style>
<template>
    <x-header :left-options="{showBack: true, backText: ''}">培训课程
    <a slot="right" v-link="{ path: '/My' }">我的</a></x-header>
  <div>
    <group>
        <panel header="培训资料列表" @on-click-footer="getDataFromApi" :footer="footer" :list="list" :type="type"></panel>
    </group>
    <div class="spinner-wrap" v-if = "loading">
      <spinner type="lines"></spinner>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import config from '../utils/config.js';
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
    let self = this;
    let code = window.localStorage.code;
    let corpId = window.localStorage.corpId;
    // let ls = window.localStorage.userid;
    // if (!ls || ls === '读取数据有误') {
    $.ajax({
      type: 'GET',
      url: config.AUTH_URL,
      data: {corpId: corpId, code: code},
      success: function (data) {
        if (data.userId !== '读取数据有误') {
          window.localStorage.userid = data.userId;
        }
        self.getDataFromApi();
      }
    });
      // this.$http.get(config.AUTH_URL + '?corpId=' + corpId + '&code=' + code, {}, {
      //   headers: {
      //     "X-Requested-With": "XMLHttpRequest"
      //   },
      //   emulateJSON: true
      // }).then(function (response) {
      //   window.localStorage.userid = response.data.userId;
      //   this.getDataFromApi();
      // });
    // } else {
    //   this.getDataFromApi();
    // }
  },
  computed: {
    footer: function () {
      return this.list.length > 4 ? {
        title: this.foottitle
      } : null;
    }
  },
  methods: {
    getDataFromApi () {
      let pageId = this.pageId;
      let self = this;
      this.loading = true;
      // this.$http.get(config.SERVER_URL + '?page=' + pageId, {}, {
      //   headers: {
      //     "X-Requested-With": "XMLHttpRequest"
      //   },
      //   emulateJSON: true
      // }).then(function (response) {
      //   alert(response.data);
        // let el = document.querySelector('.spinner-contianer');
        // let data = response.data;
        // let jsonArray = [];
        // if (data.length === 0) {
        //   this.footer.title = '没有更多了';
        // }
        // for (let i = 0; i < data.length; i++) {
        //   let row = {};
        //   row.title = data[i].training_name;
        //   row.desc = data[i].training_desc;
        //   row.url = '/Course/' + data[i].training_id;
        //   jsonArray.push(row);
        // }
        // this.list = this.list.concat(jsonArray);
        // el.style.display = 'none';
        // this.pageId++;
      // }, function (response) {
      //         // handle error
      // });
      $.ajax({
        type: 'GET',
        url: config.SERVER_URL,
        data: {page: pageId},
        success: function (data) {
          let jsonArray = [];
          if (data.length === 0) {
            self.foottitle = '没有更多了';
          }
          for (let i = 0; i < data.length; i++) {
            let row = {};
            row.title = data[i].training_name;
            row.desc = data[i].training_desc;
            row.url = '/Course/' + data[i].training_id;
            jsonArray.push(row);
          }
          self.list = self.list.concat(jsonArray);
          self.pageId++;
          self.loading = false;
        }
      });
    }
  },
  data () {
    return {
      loading: true,
      pageId: 0,
      list: [],
      foottitle: '加载更多'
    };
  }
};
</script>
