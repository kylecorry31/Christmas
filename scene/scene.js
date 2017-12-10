var Scene = function() {
    this.song = undefined;
    this._loadSong();
    this.field = new Field();
};

Scene.prototype._loadSong = function(){
  var songs = GAME_MASTER.songs;
  var songIndex = Math.floor(Math.random() * songs.length);
  var context = this;
  if(this.song != undefined){
    console.log("HERE");
    new NetworkManager().loadAudio(this.song.audio, songs[songIndex].url, function(buffer){
      var source = context.song.audio.createBufferSource();
      source.buffer = buffer;
      source.loop = false;
      context.song.source.disconnect();
      context.song.source = null;
      context.song.source = source;
      context.song.source.connect(context.song.analyser);
      context.song.source.start(0);
    });
  } else {
    this.song = new Audio(songs[songIndex].url, new NetworkManager());
  }
  var album = songs[songIndex].album ? " from " + songs[songIndex].album: "";
  createNotification(songs[songIndex].name, songs[songIndex].artist + album, 6);
  setTimeout(function(){context._loadSong();}, songs[songIndex].length * 1000);
};

Scene.prototype._reactToSong = function() {
    if (this.song.analyser !== undefined) {
        this.song.analyser.getByteTimeDomainData(this.song.dataArray);
        var songBins = [];
        var inputChannelsPerBin = this.song.dataArray.length / GAME_MASTER.song_analysis.output_bins;
        for(var i = 0; i < GAME_MASTER.song_analysis.output_bins; i++){
            songBins.push(0.0);
            for(var channel = i * inputChannelsPerBin; channel < (i+1) * inputChannelsPerBin && channel < this.song.dataArray.length; channel++){
                songBins[i] += this.song.dataArray[i];
            }
            songBins[i] /= inputChannelsPerBin;
            songBins[i] /= 256.0;
        }

        for (var i = 0; i < this.field.entities.length; i++) {
            for (var j = 0; j < this.field.entities[i].length; j++) {
                var binIndex = Math.floor(Math.random() * songBins.length);
                // var v = this.song.dataArray[i + j] / 256.0;
                if (this.field.entities[i][j] != undefined)
                    this.field.entities[i][j].setSpecialActivation(songBins[binIndex]);
            }
        }
    }
};

Scene.prototype.draw = function(ctx) {
    this._reactToSong();
    this.field.draw(ctx);
};
