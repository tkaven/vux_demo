<template>
  <x-header :left-options="{showBack: true, backText: ''}">{{training_name}}</x-header>
  <div>
    <group title="课程列表">
      <cell v-for="item in items" :title="item.section_name" is-link :link="item.link"></cell>
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
    let self = this;
    let _routeId = this.$route.params.courseid;
    $.ajax({
      type: 'GET',
      url: config.SERVER_URL + 'section',
      data: {training_id: _routeId},
      success: function (data) {
        var res = data;
        self.training_name = res.training_name;
        self.items = res.TrainingSections;
      }
    });
    // this.$http.get(config.SERVER_URL + 'section?training_id=' + _routeId, {}, {
    //   headers: {
    //     "X-Requested-With": "XMLHttpRequest"
    //   },
    //   emulateJSON: true
    // }).then(function (response) {
    //   let res = response.data;
    //   data.training_name = res.training_name;
    //   data.items = res.TrainingSections;
    // }, function (response) {
    //         // handle error
    // });
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
