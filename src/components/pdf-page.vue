<style>
.container{ height:100%; display:-webkit-flex; -webkit-flex-direction:column;}
.pdf-page{
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
<template>
  <p class="container">
    <embed :src="list.file_path" class="pdf-page">
  </p>
</template>
<script>
import $ from 'jquery';
import config from '../utils/config.js';
export default {
  ready: function () {
    let _self = this;
    this.setLocal();
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
  methods: {
    setLocal () {
      this.setHistory(window.localStorage.userid);
    },
    setHistory (uid) {
      this.$http.get(config.SERVER_URL + 'mine/history?training_id=' + this.$route.params.courseid + '&section_id=' + this.$route.params.sectionid + '&userId=' + uid, {}, {
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        },
        emulateJSON: true
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
