import throttle from 'lodash.throttle';
import vimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);
const KEY_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    localStorage.setItem(KEY_TIME, currentTime.seconds);
  }, 500)
);
const savedTime = localStorage.getItem(KEY_TIME);
if (savedTime) {
  player.setCurrentTime(savedTime);
}
