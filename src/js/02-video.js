import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on('timeupdate', throttle(onIframePlay, 1000));

let currentTime = null;
onPageReboot();

function onIframePlay(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

function onPageReboot() {
  currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

  if (currentTime !== 0) {
    player.setCurrentTime(currentTime);
  }
}
