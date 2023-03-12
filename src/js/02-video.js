import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on('timeupdate', throttle(onIframePlay, 1000));

let saveCurrentTime = null;

onPageReboot();

function onIframePlay(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

function onPageReboot() {
  saveCurrentTime = localStorage.getItem('videoplayer-current-time');
  if (saveCurrentTime) {
    player.setCurrentTime(JSON.parse(saveCurrentTime));
  }
}
