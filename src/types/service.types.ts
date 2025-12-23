export interface Service {
  id: number;
  name: string;
  price: number;
  description?: string;
  category: string;
}

export interface SelectedService extends Service {
  quantity: number;
}
