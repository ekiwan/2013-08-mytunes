var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
    var that = this;
    this.$el.on('ended', function(){
      that.model.ended();
    });
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }

});
