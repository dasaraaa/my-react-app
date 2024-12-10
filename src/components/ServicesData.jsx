import perf1 from "../assets/images/perf1.jpg";
import perf2 from "../assets/images/perf2.jpg";
import perf3 from "../assets/images/perf3.jpg";
import perf4 from "../assets/images/perf4.jpg";
import perf5 from "../assets/images/perf5.jpg";
import perf6 from "../assets/images/perf6.jpg";
import perf7 from "../assets/images/perf7.jpg";
import perf8 from "../assets/images/perf8.jpg";
import perf10 from "../assets/images/perf10.jpg";
import perf11 from "../assets/images/perf11 (2).jpg"
import bl1 from "../assets/images/bl1.jpg"
import bl2 from "../assets/images/bl2.jpg"
import bl3 from "../assets/images/bl3.jpg"
import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
export const services = [
  {
    id: 1,
    name: 'Perfumes',
    description: 'Perfumes for every occasion',
    products: [
      { id: 101, name: 'Chanel No. 5', price: '$120', description: 'Classic floral fragrance.', image: perf1 },
      { id: 102, name: 'Dior Sauvage', price: '$95', description: 'A bold and spicy fragrance.', image: perf2 },
      { id: 103, name: 'Tom Ford Black Orchid', price: '$150', description: 'Sophisticated and sensual.', image: perf3 },
      { id: 104, name: 'Tom Ford Black Orchid', price: '$150', description: 'Sophisticated and sensual.', image: perf10 },
      { id: 105, name: 'Body Lotion', price: '$30', description: 'Hydrating body lotion.', image: perf4 },
      { id: 106, name: 'Tom Ford Black Orchid', price: '$150', description: 'Sophisticated and sensual.', image: perf8 },


    ],
  },
  {
    id: 2,
    name: 'Body Care',
    description: 'Products for body care and relaxation',
    products: [
      { id: 201, name: 'Body Lotion', price: '$30', description: 'Hydrating body lotion.', image: bl1 },
      { id: 202, name: 'Body Lotion', price: '$30', description: 'Hydrating body lotion.', image: bl2 },
      { id: 203, name: 'Body Lotion', price: '$30', description: 'Hydrating body lotion.', image: bl3 },
    


    ],
  },
  {
    id: 3,
    name: 'Candles',
    description: 'Aromatherapy candles to set the mood',
    products: [
      { id: 301, name: 'Lavender Candle', price: '$25', description: 'Calming lavender scent.', image: c1 },
      { id: 302, name: 'Vanilla Bean Candle', price: '$22', description: 'Sweet vanilla fragrance.', image: c2 },
      { id: 303, name: 'Vanilla Bean Candle', price: '$22', description: 'Sweet vanilla fragrance.', image: c3 },
     

    ],
  },
];
