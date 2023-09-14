import { DeliveryPlatform } from './deliveryPlatform';
import { Eatery } from './eatery';

export const mockEateries: Eatery[] = [
  {
    id: 'E001',
    name: 'Keisuke Four Seasons',
    country: 'Singapore',
    city: 'Singapore',
    locationDetails: 'Bugis/North Bridge Road',
    comments: ['Favourite ramen in town'],
    rating: 5,
    canDineIn: true,
    supportedDeliveryPlatforms: [DeliveryPlatform.FOODPANDA],
    meals: [
      {
        id: 'M001',
        name: 'Summer Ramen',
        comments: ['With flavored egg', 'Complimentary bean sprouts are delicious', 'Wasabi ginger ale'],
        price: 25,
        rating: 5,
        pictureUrl: 'https://danielfooddiary.com/wp-content/uploads/2013/05/tonkotsufourseasons4.jpg',
        tags: ['japanese', 'noodles', 'spicy'],
      },
    ],
    tags: [],
  },
  {
    id: 'E002',
    name: 'Wang Dae Bak Pocha',
    country: 'Singapore',
    city: 'Singapore',
    locationDetails: 'Telok Ayer',
    comments: ['Favourite Korean in town', 'Order with Korean pancake'],
    rating: 5,
    canDineIn: true,
    supportedDeliveryPlatforms: [DeliveryPlatform.FOODPANDA],
    meals: [
      {
        id: 'M002',
        name: 'Chicken Bibimbap',
        comments: [],
        price: 15,
        rating: 5,
        pictureUrl:
          'https://scontent.fsin4-1.fna.fbcdn.net/v/t1.6435-9/138447384_1591463081039650_2875860389290655356_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=WxMHxRMwQz0AX-nekYY&_nc_ht=scontent.fsin4-1.fna&oh=00_AfAdrBNrBMLqoQQXl2fYnT1MiRlJgmZAX1gIBDa-neRcfg&oe=65295842',
        tags: ['korean'],
      },
    ],
    tags: [],
  },
  {
    id: 'E003',
    name: 'VIOS by Blu Kouzina',
    country: 'Singapore',
    city: 'Singapore',
    locationDetails: 'HongKong St',
    comments: [],
    rating: 5,
    canDineIn: false,
    supportedDeliveryPlatforms: [DeliveryPlatform.DELIVEROO],
    meals: [
      {
        id: 'M003',
        name: 'The Guardian Bowl',
        comments: [],
        price: 18,
        rating: 5,
        pictureUrl:
          'https://d3486jq6shjn6l.cloudfront.net/uploads/menu_items/d75ed088-b347-11e7-8211-06344bebedf3/medium_Vios-web-Gardian.jpg',
        tags: ['healthy'],
      },
    ],
    tags: ['healthy'],
  },
];
