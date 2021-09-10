const MAX = 255;
const MIN = 0;

export default function shuffle(array) {
  const generateRandomNumber = (min = MIN, max = MAX) => {
    const [maxNum, minNum] = min > max ? [min, max] : [max, min];
    return Math.floor(Math.random() * (maxNum - minNum) + min);
  };

  for (let index = 0; index < 100; index += 1) {
    const from = generateRandomNumber(0, array.length);
    const to = generateRandomNumber(0, array.length);
    array.splice(to, 0, array.splice(from, 1)[0]);
  }
}
