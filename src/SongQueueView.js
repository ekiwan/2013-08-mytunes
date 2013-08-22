var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', function(){
     // debugger;
      this.render();
    }, this);

    this.collection.on('remove', function(){
      this.render();
    }, this);
  },

   render: function(){
    //this.$el.children().detach();

    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
