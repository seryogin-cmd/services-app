import { Service } from "../../types/service.types";
import "./ServiceCard.style.scss";

interface ServiceCardProps {
  service: Service;
  onAdd: (service: Service) => void;
  isAdded: boolean;
}

export function ServiceCard({
  service,
  onAdd,
  isAdded,
}: ServiceCardProps) {
  const handleAddClick = () => {
    onAdd(service);
  };

  return (
    <div className="service-card">
      <div className="service-card__content">
        <h3 className="service-card__title">{service.name}</h3>
        {service.description && (
          <p className="service-card__description">{service.description}</p>
        )}
        <div className="service-card__footer">
          <span className="service-card__price">
            {service.price.toLocaleString("ru-RU")} ₽
          </span>
          <button
            className={`service-card__button ${
              isAdded ? "service-card__button--added" : ""
            }`}
            onClick={handleAddClick}
            disabled={isAdded}
            type="button"
          >
            {isAdded ? "Добавлено" : "Добавить"}
          </button>
        </div>
      </div>
    </div>
  );
}
