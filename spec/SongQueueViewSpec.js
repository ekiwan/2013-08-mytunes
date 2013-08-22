describe('SongQueueView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new SongQueue([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title:'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title:'test song 2'
      }
    ]);
  });

  it('creates SongQueueEntryViews for each queued song & renders them', function(){
    spyOn(SongQueueEntryView.prototype, 'render').andCallThrough();
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    expect(SongQueueEntryView.prototype.render).toHaveBeenCalled();
  });

  it('renders when add or remove event fires from the song queue collection', function(){
    spyOn(SongQueueView.prototype, 'render').andCallThrough();
    view = new SongQueueView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title:'test song 3'
    });
    view.collection.pop();
    expect(view.render.callCount).toEqual(2);
  });


});

describe('SongQueueEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new Song({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url'
    });
    spyOn(Song.prototype, 'dequeue');
    view = new SongQueueEntryView({model: model});
    view.render();
  });

  it('dequeues clicked songs', function(){
    view.$el.children().first().click();
    expect(model.dequeue).toHaveBeenCalled();
  });
});

