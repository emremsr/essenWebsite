import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateServiceService {

  constructor() { }

  foodDescription = [
    {
      id:1,
      foodName  : 'Vegetable Pho',
      foodAbout : 'Ginza Pho is based on a family recipe that been handed down for generations. Its a spicy, light and aromatic noodle soup. ', 
      foodPrice : 8,
      foodImg  : '../../assets/images/food1.png'
    },
    {
      id:2,
      foodName  : 'Tonkatsu Ramen',
      foodAbout : 'Our bespoke ramen comes with handmade noodles, a wide array of toppings to choose from and homemade broth. ', 
      foodPrice : 13,
      foodImg  : '../../assets/images/food2.png'
    },
    {
      id:3,
      foodName  : 'Philadelphia sushi',
      foodAbout : 'Sushi description s a long established fact that a reader will be distracted by the readable content of a page.  ', 
      foodPrice : 11,
      foodImg  : '../../assets/images/food3.png'
    },
    {
      id:1,
      foodName  : 'Dumplings',
      foodAbout : 'Dumpling established fact that a reader will be distracted by the readable content of a page. It is a long established. ', 
      foodPrice : 22,
      foodImg  : '../../assets/images/food4.png'
    },
  ]


  drinksDescription = [
    {
      id:1,
      drinkName  :'Margarita',
      drinkAbout :'Margarita is a type of fruit drink that is usually made by mixing tequila and lemon juice. It is also served with ice and a fruit slice on the rim of a glass glass.',
      drinkPrice : 8,
      drinkImg  : '../../assets/images/drink1.jpg'

    }, 
    {
      id:2,
      drinkName  :'Martini',
      drinkAbout :'Margarita is a type of fruit drink that is usually made by mixing tequila and lemon juice. It is also served with ice and a fruit slice on the rim of a glass glass.',
      drinkPrice : 8,
      drinkImg  : '../../assets/images/drink2.jpg'

    }, 
    {
      id:3,
      drinkName  :'Mojito',
      drinkAbout :'Mojito is a traditional Cuban alcoholic cocktail. Mohito is traditionally made with five ingredients: rum, sugar (traditionally cane juice), lime, soda and mint. The mojito masks the potential harshness of rum with its combination of sugar and refreshing citrus and green mint.',
      drinkPrice : 7,
      drinkImg  : '../../assets/images/drink3.jpg'

    }, 
    {
      id:4,
      drinkName  :'Sangria',
      drinkAbout :'Sangria is a fruity wine cocktail. It typically contains red wine, fruit chunks, a sweetener such as sugar or honey, and a strong drink such as rum or vodka.',
      drinkPrice : 8,
      drinkImg  : '../../assets/images/drink4.jpg'

    }
  ]


  essenDescription = [
    {
      id:1,
      essenName  : 'Onigiri',
      essenAbout : 'Onigiri, which is very similar to sushi in appearance, is a very popular Japanese food made with sushi rice, covered with dried seaweed. Plum, shrimp, chicken, tuna or salmon can be found in the middle.',
      essenPrice : 12,
      essenImg   : '../../assets/images/japon1.png'
    },
    {
      id:2,
      essenName  : 'Gohan',
      essenAbout : 'Gohan, which is actually a kind of rice pilaf, is a very generic food in Japan that can be eaten at any meal of the day. Even the Japanese eat it with a raw egg for breakfast. It is eaten as a main dish when mixed with soy sauce or other Japanese sauces.',
      essenPrice : 9,
      essenImg   : '../../assets/images/japon2.jpg'
    },
    {
      id:3,
      essenName  : 'Sashimi',
      essenAbout : 'Sashimi, which we can describe as raw fish, is one of the main dishes of Japan. They serve fish cut into thin slices with soy sauce and very thinly sliced wasabi. The important point here is that the fish must be very fresh.',
      essenPrice : 15,
      essenImg   : '../../assets/images/japon3.jpg'
    },
    {
      id:4,
      essenName  : 'Gyoza',
      essenAbout : 'Probably the closest dish to our taste in Japan is gyoza. Because it is very similar to our manti. It is made by frying the dough with lots of garlic, various vegetables and meat mixture on the grill. By the way, Gyoza is a dish from Chinese cuisine.',
      essenPrice : 20,
      essenImg   : '../../assets/images/japon4.jpg'
    },
  ]
}
