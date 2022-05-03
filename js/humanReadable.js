const humanReadable = (sec) => {
  const hourse = sec / 3600;
  const minute = (hourse % 1) * 60;
  const second = (minute % 1) * 60;
  return `${hourse < 10 ? `0${Math.floor(hourse)}` : Math.floor(hourse)}:${
    minute < 10 ? `0${Math.floor(minute)}` : Math.floor(minute)
  }:${second < 10 ? `0${Math.round(second)}` : Math.round(second)}`;
};

console.dir(humanReadable(86399));
