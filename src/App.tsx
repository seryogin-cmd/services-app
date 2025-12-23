import { useState, useCallback } from "react";
import { Service, SelectedService } from "./types/service.types";
import { AVAILABLE_SERVICES } from "./services/service.data";
import { ServiceCard } from "./components/ServiceCard";
import { SelectedServices } from "./components/SelectedServices";
import { TotalSummary } from "./components/TotalSummary";
import "./styles/global.scss";

export default function App() {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>(
    []
  );

  const handleAddService = (service: Service) => {
    setSelectedServices((prevSelected) => {
      const existingService = prevSelected.find((s) => s.id === service.id);

      if (existingService) {
        return prevSelected.map((s) =>
          s.id === service.id ? { ...s, quantity: s.quantity + 1 } : s
        );
      }

      return [...prevSelected, { ...service, quantity: 1 }];
    });
  };

  const handleRemoveService = (id: number) => {
    setSelectedServices((prevSelected) => {
      return prevSelected.filter((service) => service.id !== id);
    });
  };

  const handleCheckout = useCallback(() => {
    alert(
      "Заказ оформлен! Общая сумма: " +
        selectedServices
          .reduce((sum, service) => sum + service.price * service.quantity, 0)
          .toLocaleString("ru-RU") +
        " ₽"
    );
  }, [selectedServices]);

  const isServiceAdded = useCallback(
    (id: number) => {
      return selectedServices.some((service) => service.id === id);
    },
    [selectedServices]
  );

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Дополнительные услуги для авиапассажиров</h1>
        <p className="app__subtitle">
          Выберите дополнительные услуги для вашего путешествия
        </p>
      </header>

      <main className="app__content">
        <div className="app__services-grid">
          {AVAILABLE_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onAdd={handleAddService}
              isAdded={isServiceAdded(service.id)}
            />
          ))}
        </div>

        <div className="app__sidebar">
          <SelectedServices
            services={selectedServices}
            onRemove={handleRemoveService}
          />

          <TotalSummary
            services={selectedServices}
            onCheckout={handleCheckout}
          />
        </div>
      </main>

      <footer className="app__footer">
        <p>Авиауслуги</p>
      </footer>
    </div>
  );
}
