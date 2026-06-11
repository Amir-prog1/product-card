// Массив объектов, которые представляют собой продуктовые карточки.

export const products = [
  {
    id: 1,
    image: "./images/moisturizing_mousse.png",
    category: "Для нормальной кожи",
    title: "Увлажняющий мусс",
    description: "Глубоко увлажняет кожу лица, оставляя её мягкой и гладкой.",
    compound: [
      "активные натуральные комплексы",
      "витамины C, A, PP, B, E",
      "солнцезащитные компоненты"
    ],
    price: 2750,
    currency: "₽",
  },
  {
    id: 2,
    image: "./images/moisturizing_mask.png",
    category: "Для нормальной кожи",
    title: "Увлажняющая маска",
    description: "Способствует удерживанию влаги в верхних слоях кожи.",
    compound: [
      "воски",
      "минералы",
      "масла"
    ],
    price: 3500,
    currency: "₽",
  },
  {
    id: 3,
    image: "./images/cleansing_gel.png",
    category: "Для нормальной кожи",
    title: "Гель для умывания",
    description: "Интенсивно очищает, не повреждает защитный барьер кожи.",
    compound: [
      "минералы",
      "витамины С, А, РР, В И Е",
      "солнцезащитные компоненты"
    ],
    price: 1650,
    currency: "₽",
  },
  {
    id: 4,
    image: "./images/small_gift_set.png",
    category: "Для нормальной кожи",
    title: "Подарочный набор №1",
    description: "Набор, состоящий из увлажняющего крема и маски.",
    compound: [
      "воски",
      "минералы",
      "масла"
    ],
    price: 4750,
    currency: "₽",
  },
  {
    id: 5,
    image: "./images/large_gift_set.png",
    category: "Для нормальной кожи",
    title: "Подарочный набор №5",
    description: "Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.",
    compound: [
      "воски",
      "минералы",
      "масла"
    ],
    price: 7520,
    currency: "₽",
  }
]