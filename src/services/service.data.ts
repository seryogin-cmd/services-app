import { Service } from "../types/service.types";

export const AVAILABLE_SERVICES: Service[] = [
  {
    id: 1,
    name: "Приоритетная посадка",
    price: 1500,
    description: "Выходите из самолета первыми",
    category: "boarding",
  },
  {
    id: 2,
    name: "Дополнительный багаж (+10 кг)",
    price: 2500,
    description: "Увеличьте вес багажа на 10 килограмм",
    category: "luggage",
  },
  {
    id: 3,
    name: "Страхование путешествия",
    price: 1800,
    description: "Полное страхование на время поездки",
    category: "insurance",
  },
  {
    id: 4,
    name: "Бизнес-ланч",
    price: 1200,
    description: "Питание на борту премиум-класса",
    category: "food",
  },
  {
    id: 5,
    name: "Премиум Wi-Fi",
    price: 800,
    description: "Высокоскоростной интернет на борту",
    category: "entertainment",
  },
  {
    id: 6,
    name: "Доступ в бизнес-зал",
    price: 3500,
    description: "Комфортный отдых в аэропорту",
    category: "lounge",
  },
];
