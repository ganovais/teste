export interface ICar {
    id: number;
    name: string;
    road_sign: string;
    image: string;
    value: number;
    rented: boolean;
}

export const cars: ICar[] = [
    {
        id: 1,
        name: 'Onix',
        road_sign: '12344',
        image: 'https://orca.com.br/glide/products/onix2020-plus-turbo-premiere-blue.png?w=600&h=600',
        value: 114.0,
        rented: false,
    },
    {
        id: 2,
        name: 'Cruze',
        road_sign: '89327',
        image: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-cruze-premier/colorizer/01-images/colorizer-azul-eclipse.jpg?imwidth=960',
        value: 214.0,
        rented: false,
    },
    {
        id: 3,
        name: 'HB20',
        road_sign: '98765',
        image: 'https://www.hyundai.com.br/content/dam/hmb/cars/hb20/20202020/laterais/diamond-plus/HB20_2021_DiamondPlus_CinzaSilk%40Full.png',
        value: 114.0,
        rented: false,
    },
    {
        id: 4,
        name: 'Corolla Cross',
        road_sign: '09273',
        image: 'https://revistacarro.com.br/wp-content/uploads/2021/02/toyota-corolla-cross.jpg',
        value: 253.0,
        rented: false,
    },
    {
        id: 5,
        name: 'Tracker',
        road_sign: '87352',
        image: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/crossovers-and-suvs/2021-tracker/mov/08-images/colorizer-tracker-prata-switchblade.jpg?imwidth=960',
        value: 265.0,
        rented: false,
    },

    {
        id: 6,
        name: 'Rolls-Royce',
        road_sign: '74640',
        image: 'https://s1.1zoom.me/b4454/907/Rolls-Royce_2019_Mansory_Billionaire_White_562506_1920x1080.jpg',
        value: 2784.0,
        rented: false,
    },
];
