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
    <x-header :left-options="{showBack: true, backText: ''}">培训课程</x-header>
  <div>
    <group>
        <panel header="培训资料列表" @on-click-footer="getDataFromApi" :footer="footer" :list="list" :type="type"></panel>
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
    if (!code) {
      location.href = wxauth.goAuth();
    }
    if (!ls || ls === '读取数据有误') {
      // this.$http.get(config.AUTH_URL + '?corpId=' + corpId + '&code=' + code, {}, {
      //   headers: {
      //     "X-Requested-With": "XMLHttpRequest"
      //   },
      //   emulateJSON: true
      // }).then(function (response) {
      //   window.localStorage.userid = response.data.userId;
      //   this.getDataFromApi();
      // });
      $.ajax({
        type: 'GET',
        url: config.SERVER_URL,
        data: {page: pageId},
        success: function (data) {
          let el = document.querySelector('.spinner-contianer');
          let jsonArray = [];
          if (data.length === 0) {
            this.footer.title = '没有更多了';
          }
          for (let i = 0; i < data.length; i++) {
            let row = {};
            row.title = data[i].training_name;
            row.desc = data[i].training_desc;
            row.url = '/Course/' + data[i].training_id;
            jsonArray.push(row);
          }
          this.list = this.list.concat(jsonArray);
          el.style.display = 'none';
          this.pageId++;
        }
      });
    } else {
      this.getDataFromApi();
    }
  },
  methods: {
    getDataFromApi () {
      let pageId = this.pageId;
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
          let el = document.querySelector('.spinner-contianer');
          let jsonArray = [];
          if (data.length === 0) {
            this.footer.title = '没有更多了';
          }
          for (let i = 0; i < data.length; i++) {
            let row = {};
            row.title = data[i].training_name;
            row.desc = data[i].training_desc;
            row.url = '/Course/' + data[i].training_id;
            jsonArray.push(row);
          }
          this.list = this.list.concat(jsonArray);
          el.style.display = 'none';
          this.pageId++;
        }
      });
    }
  },
  data () {
    return {
      pageId: 0,
      list: [],
      footer: {
        title: '查看更多'
      }
    };
  }
};
</script>
