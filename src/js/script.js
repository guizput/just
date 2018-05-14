import 'babel-polyfill';
import HeroVideo from './HeroVideo';
jQuery(document).ready(function() {
    let heroVideo = new HeroVideo({
      play: '.app__hero-video__play',
      stop: '.app__hero-video__stop',
      target: '.app__hero-video',
      iFrameId: 'js__app__hero-video__iframe',
      iFrameClass: 'app__hero-video__iframe',
    });
});