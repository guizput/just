/* eslint-disable */
export default class {
  constructor(options) {
    this.options = options;
    this.DOM = {
      play: document.querySelectorAll(this.options.play)[0],
      stop: document.querySelectorAll(this.options.stop)[0],
      target: document.querySelectorAll(this.options.target)[0],
      iFrameId: this.options.iFrameId,
      iFrameClass: this.options.iFrameClass,
      iFrameElement: undefined,
      player: undefined
    };
    this.VAL = {
      played: false
    };
    this.DOM.play.addEventListener('click', function(e) {
      this.appendFrame(e, this.DOM.target);
    }.bind(this));
    this.DOM.stop.addEventListener('click', function(e) {
      this.DOM.player.stopVideo();
      this.DOM.iFrameElement.style.display = 'none';
      e.target.style.display = 'none';
    }.bind(this));
  }
  YoutubeAPI() {
    function checkScript() {
      let scripts = document.querySelectorAll('script');
      for (let script of scripts) {
        if (script.getAttribute('src') === 'https://www.youtube.com/iframe_api') {
          return false;
        }
      }
      return true;
    }
    if (checkScript()) {
      let tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }
  appendFrame(e, target) {
    e.preventDefault();
    if (this.VAL.played === false) {
      let player;
      let id = e.target.getAttribute('href');
      window.onYouTubePlayerAPIReady = function() {
        player = new YT.Player(this.DOM.iFrameId, {
          width: '100%',
          height: '100%',
          videoId: id,
          playerVars: {
            rel: 0,
            autoplay: 1
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        });
        this.DOM.iFrameElement = document.querySelector(`#${this.DOM.iFrameId}`);
        this.DOM.iFrameElement.classList.add(this.DOM.iFrameClass);
        this.DOM.player = player;
      }.bind(this)
    } else if (this.VAL.played === true) {
      this.DOM.iFrameElement.style.display = 'block';
      this.DOM.player.seekTo(0);
      this.DOM.stop.style.display = 'flex';
    }
    window.onPlayerReady = function(event) {
      this.DOM.iFrameElement.style.display = 'block';
      event.target.playVideo();
      this.VAL.played = true;
      this.DOM.stop.style.display = 'flex';
    }.bind(this)
    window.onPlayerStateChange = function(event) {
      if (event.data == 0 || event.target === 'stop') {
        this.DOM.iFrameElement.style.display = 'none';
        this.DOM.stop.style.display = 'none';
        event.target.seekTo(0);
        this.DOM.player.stopVideo();
      }
    }.bind(this)
    this.YoutubeAPI(target);
  }
}
