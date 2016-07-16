<template>
  <x-header :left-options="{showBack: true, backText: ''}">{{list.section_name}}</x-header>
  <article class="weui_article">
    <h1>汉拓培训</h1>
    <section>
      <h2 class="title">{{list.section_name}}</h2>
      <section>
        <h3>章节内容：</h3>
        <p>{{list.section_desc}}</p>
      </section>
      <video id="vid" width="400" controls="controls"  :src="list.file_path">
      </video>
    </section>
  </article>
</template>
<script>
import config from '../utils/config.js';
import XHeader from 'vux/src/components/x-header';
export default {
  components: {
    XHeader
  },
  ready: function () {
    let _self = this;
    this.$http.get(config.SERVER_URL + 'section?training_id=' + _self.$route.params.courseid, {}, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      emulateJSON: true
    }).then(function (response) {
      let data = response.data.TrainingSections;
      for (let i = 0; i < data.length; i++) {
        if (data[i].section_id === Number(_self.$route.params.sectionid)) {
          this.list = data[i];
        }
      }
    }, function (response) {
            // handle error
    });
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
