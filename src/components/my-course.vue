<style type="text/css">
  .over-read{
    position: absolute;
    right: 30px;
  }
</style>
<template>
  <x-header :left-options="{showBack: true, backText: ''}">{{training_name}}</x-header>
  <div>
    <group title="我的课程列表">
      <cell v-for="item in items" :title="item.section_name" :link="item.newlink" value="">
        <div slot="value" v-if="item.process">
          <span class="over-read">已阅读</span>
        </div>
      </cell>
    </group>
  </div>
</template>
<script>
import $ from 'jquery';
import config from '../utils/config.js';
import Group from 'vux/src/components/group';
import Cell from 'vux/src/components/cell';
import XHeader from 'vux/src/components/x-header';
export default {
  components: {
    Group,
    Cell,
    XHeader
  },
  ready: function () {
    let _routeId = this.$route.params.courseid;
    let _userid = this.$route.params.userid;
    let self = this;
    // this.$http.get(config.SERVER_URL + 'mine/section?training_id=' + _routeId + '&userId=' + _userid, {}, {
    //   headers: {
    //     "X-Requested-With": "XMLHttpRequest"
    //   },
    //   emulateJSON: true
    // }).then(function (response) {
    //   let data = response.data;
    //   this.training_name = data.training_name;
    //   for (let i = 0; i < data.TrainingSections.length; i++) {
    //     data.TrainingSections[i].newlink = '/Course/' + data.TrainingSections[i].link;
    //   }
    //   this.items = data.TrainingSections;
    // }, function (response) {
    //         // handle error
    // });
    $.ajax({
      type: 'GET',
      url: config.SERVER_URL + 'mine/section',
      data: {training_id: _routeId, userId: _userid},
      success: function (data) {
        self.training_name = data.training_name;
        for (let i = 0; i < data.TrainingSections.length; i++) {
          data.TrainingSections[i].newlink = '/Course/' + data.TrainingSections[i].link;
        }
        self.items = data.TrainingSections;
      }
    });
  },
  data () {
    return {
      training_name: '',
      items: []
    };
  }
};
console.log();
</script>
