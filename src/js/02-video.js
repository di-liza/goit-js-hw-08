import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframeEl = document.querySelector('#vimeo-player');

const player = new Player(iframeEl);

let currentTime = null;
loadSavedVideoTime();

player.on('timeupdate', throttle(saveVideoTime, 1000));

function saveVideoTime(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

function loadSavedVideoTime() {
  currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  if (currentTime !== null) {
    player.setCurrentTime(parseInt(currentTime));
  }
}
