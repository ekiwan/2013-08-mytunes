var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song){
      this.add(song);
      if (this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('ended', function(){
      this.shift();
      if(this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    },this);
  },

  playFirst: function(){
    this.at(0).play();
  }

});
