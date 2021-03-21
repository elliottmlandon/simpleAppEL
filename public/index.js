var app = new Vue({
  el: '#app',
  data: {
    count: 0,
    message: 'Text'
  },
  methods: {
    changeText: function () {
      this.count += 1;
      this.message = this.message.substring(0,4) + this.count.toString();
    }
  }
})
