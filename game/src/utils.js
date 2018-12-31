// eslint-disable-next-line
export const pause = time => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});

export const loadImage = (nameImages) => {
  const images = {};
  nameImages.forEach((element) => {
    images[element] = new Image();
    images[element].onload = () => resourseLoad();
    images[element].src = `./img/${element}.png`;
  });
  return nameImages;
};
