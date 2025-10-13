export function getRandomColor(): string {
  let color: string;
  do {
    color =
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");
  } while (
    color.toLowerCase() === "#ffffff" || // white
    color.toLowerCase() === "#808080" // gray
  );
  return color;
}
