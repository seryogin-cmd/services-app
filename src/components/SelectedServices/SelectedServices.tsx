import { SelectedService } from "../../types/service.types";
import "./SelectedServices.style.scss";

interface SelectedServicesProps {
  services: SelectedService[];
  onRemove: (id: number) => void;
}

export function SelectedServices({
  services,
  onRemove,
}: SelectedServicesProps) {
  if (services.length === 0) {
    return (
      <div className="selected-services selected-services--empty">
        <p className="selected-services__empty-text">
          Вы пока не выбрали услуги
        </p>
      </div>
    );
  }

  return (
    <div className="selected-services">
      <h3 className="selected-services__title">Выбранные услуги</h3>
      <div className="selected-services__list">
        {services.map((service) => (
          <div key={service.id} className="selected-services__item">
            <div className="selected-services__item-info">
              <span className="selected-services__item-name">
                {service.name}
              </span>
              <span className="selected-services__item-quantity">
                ×{service.quantity}
              </span>
            </div>
            <div className="selected-services__item-actions">
              <span className="selected-services__item-price">
                {service.price.toLocaleString("ru-RU")} ₽
              </span>
              <button
                className="selected-services__remove-button"
                onClick={() => onRemove(service.id)}
                type="button"
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
