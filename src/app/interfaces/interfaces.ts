export interface FriendDetails {
  id: number;
  name: string;
  email: string;
  email_verified_at?: any;
  created_at: string;
  updated_at: string;
  api_token: string;
}
export interface DishDetails {
  id: number;
  created_at: string;
  updated_at: string;
  restaurent_name: string;
  rating: string;
  description: string;
  name: string;
  image_url: string;
  cost: string;
}

export interface OrderDetail {
  id: number;
  created_at?: any;
  updated_at?: any;
  listing_id: string;
  quantity: string;
  amount: string;
}
