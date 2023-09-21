import { DeliveryPlatform } from './deliveryPlatform';

/**
 * A restaurant or a food stall
 */
export type Eatery = {
  id: string;
  name: string;
  country: string;
  city: string;
  locationDetails: string;
  comments: string[];
  canDineIn: boolean;
  supportedDeliveryPlatforms: DeliveryPlatform[];
  meals: Meal[];
  tags: string[];
};

export type Meal = {
  id: string;
  name: string;
  comments: string[];
  price: number;
  pictureUrl: string;
  tags: string[];
};
