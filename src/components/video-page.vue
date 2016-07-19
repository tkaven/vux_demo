<template>
  <x-header :left-options="{showBack: true, backText: ''}">{{list.section_name}}
  <a slot="right" v-link="{ path: '/My' }">我的</a></x-header>
  <article class="weui_article" style="background:#fff">
    <div class="weui_panel weui_panel_access" style="margin-bottom:15px;">
      <div class="weui_panel_hd">视频培训资料</div>
      <div class="weui_panel_bd">
          <div class="weui_media_box weui_media_text">
              <h4 class="weui_media_title">{{list.section_name}}</h4>
              <p class="weui_media_desc">{{list.section_desc}}</p>
          </div>
      </div>
    </div>
    <video id="vid" width="400" controls="controls"  :src="list.file_path">
    </video>
  </article>
</template>
<script>
import $ from 'jquery';
import config from '../utils/config.js';
import XHeader from 'vux/src/components/x-header';
export default {
  components: {
    XHeader
  },
  ready: function () {
    let self = this;
    this.setLocal();
    // this.$http.get(config.SERVER_URL + 'section?training_id=' + self.$route.params.courseid, {}, {
    //   headers: {
    //     "X-Requested-With": "XMLHttpRequest"
    //   },
    //   emulateJSON: true
    // }).then(function (response) {
    //   let data = response.data.TrainingSections;
    //   for (let i = 0; i < data.length; i++) {
    //     if (data[i].section_id === Number(self.$route.params.sectionid)) {
    //       this.list = data[i];
    //     }
    //   }
    // }, function (response) {
    //         // handle error
    // });
    $.ajax({
      type: 'GET',
      url: config.SERVER_URL + 'section',
      data: {training_id: self.$route.params.courseid},
      success: function (data) {
        let res = data.TrainingSections;
        console.log(res);
        for (let i = 0; i < res.length; i++) {
          if (res[i].section_id === Number(self.$route.params.sectionid)) {
            self.list = res[i];
          }
        }
      }
    });
  },
  methods: {
    setLocal () {
      this.setHistory(window.localStorage.userid);
    },
    setHistory (uid) {
      let self = this;
    //   this.$http.get(config.SERVER_URL + 'mine/history?training_id=' + this.$route.params.courseid + '&section_id=' + this.$route.params.sectionid + '&userId=' + uid, {}, {
    //     headers: {
    //       "X-Requested-With": "XMLHttpRequest"
    //     },
    //     emulateJSON: true
    //   });
      $.ajax({
        type: 'GET',
        url: config.SERVER_URL + 'mine/history',
        data: {training_id: self.$route.params.courseid, section_id: self.$route.params.sectionid, userId: uid},
        success: function (data) {
        }
      });
    }
  },
  data () {
    return {
      list: {}
    };
  }
};
</script>
<style>
@import '../assets/css/weui.css';
</style>
