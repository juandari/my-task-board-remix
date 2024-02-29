export function generateRandomPandaCSSColor() {
  const colors = [
    'red',
    'rose',
    'fuchsia',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'indigo',
    'purple',
    'pink',
    'lime',
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex] + '.300';
}
