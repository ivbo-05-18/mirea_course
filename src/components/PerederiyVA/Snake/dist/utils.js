
const attachEvent = function attachEvent(element, event, callback) {
  if (element.addEventListener) {
    element.addEventListener(event, callback, false);
    return true;
  } if (element.attachEvent) {
    return element.attachEvent(`on${event}`, callback);
  }
};

const detachEvent = function detachEvent(element, event, callback) {
  if (element.removeEventListener) {
    element.removeEventListener(event, callback, false);
    return true;
  } if (element.attachEvent) {
    return element.attachEvent(`on${event}`, callback);
  }
};

const addCommas = function addCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const isSamePosition = function isSamePosition(a, b) {
  return a.x === b.x && a.y === b.y;
};

const getRandomColor = function getRandomColor(a, b) {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const getRandomNumber = function getRandomNumber(max) {
  return Math.round(Math.random() * (max - 1));
};

const getRandomCoordinates = function getRandomCoordinates(numColumns, numRows) {
  return {
    x: getRandomNumber(numColumns),
    y: getRandomNumber(numRows),
  };
};

const getDirectionFromKeyCode = function getDirectionFromKeyCode(currentDirection, keyCode) {
  switch (keyCode) {
    case 65:
      if (currentDirection === 'right') { break; }
      if (currentDirection === 'left') { break; }
      return 'left';
    case 87:
      if (currentDirection === 'down') { break; }
      if (currentDirection === 'up') { break; }
      return 'up';
    case 68:
      if (currentDirection === 'left') { break; }
      if (currentDirection === 'right') { break; }
      return 'right';
    case 83:
      if (currentDirection === 'up') { break; }
      if (currentDirection === 'down') { break; }
      return 'down';
    default:
      break;
  }
  return currentDirection;
};

const isInverseDirection = function isInverseDirection(dir1, dir2) {
  switch (dir1) {
    case 'left':
      return dir2 === 'right';
    case 'right':
      return dir2 === 'left';
    case 'up':
      return dir2 === 'down';
    case 'down':
      return dir2 === 'up';
    default:
      return false;
  }
};

const buildAudioClip = function buildAudioClip(name) {
  const audio = new Audio(`https://djorg83.github.io/react-snake-app/${name}.mp3`);
  audio.preload = 'auto';

  return {
    play: function play() {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    },
  };
};

const SOUND_NAMES = ['eat-food', 'die', 'tick', 'woosh'];

const audioClips = SOUND_NAMES.reduce((clips, name) => {
  clips[name] = buildAudioClip(name);
  return clips;
}, {});

const playAudioClip = function playAudioClip(name) {
  if (audioClips[name]) {
    audioClips[name].play();
  }
};

module.exports = {
  attachEvent,
  detachEvent,
  addCommas,
  isSamePosition,
  getRandomColor,
  getRandomNumber,
  getRandomCoordinates,
  getDirectionFromKeyCode,
  isInverseDirection,
  playAudioClip,
};
