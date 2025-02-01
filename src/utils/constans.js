export const images = [
  "src/assets/image/SneakersBlue.png",
  "src/assets/image/SneakersGreen.png",
  "src/assets/image/SneakersRed.png",
  "src/assets/image/SneakersWhite.png",
];
const generateRandomItem = (id) => {
  const names = [
    "Ergonomic Gaming Mouse",
    "Mechanical Keyboard",
    "Wireless Gaming Headset",
    "High-Performance CPU Cooler",
    "RGB Gaming Mouse Pad",
    "Curved Gaming Monitor",
    "Gaming Chair",
    "VR Headset",
    "External SSD",
    "Portable Bluetooth Speaker",
    "Gaming Mouse Bungee",
    "Laptop Cooling Pad",
    "Graphics Card",
    "RAM Module",
    "Motherboard",
    "Power Supply Unit",
    "Webcam",
    "Microphone",
    "Desk Lamp",
    "Office Chair",
  ];

  const imagePaths = [
    "src/assets/image/SneakersWhite.png",
    "src/assets/image/SneakersRed.png",
    "src/assets/image/SneakersBlue.png",
    "src/assets/image/SneakersGreen.png",
  ];
  const randomNameIndex = Math.floor(Math.random() * names.length);
  const randomImageIndex = Math.floor(Math.random() * imagePaths.length);
  const randomPrice = Math.floor(Math.random() * 400) + 20;
  const oldPrice = Math.random() > 0.7 ? Math.floor(randomPrice * 1.2) : null;
  const randomRating =
    Math.random() > 0.5
      ? "src/assets/icons/FourStars.svg"
      : "src/assets/icons/FiveStars.svg";
  const randomReviews = Math.floor(Math.random() * 300) + 20;
  return {
    id: id,
    name: names[randomNameIndex],
    price: randomPrice,
    oldPrice: oldPrice,
    rating: randomRating,
    reviews: randomReviews,
    image: imagePaths[randomImageIndex],
  };
};

export const imageKrossMap = Array.from({ length: 8 }, (_, i) =>
  generateRandomItem(i + 1)
);
