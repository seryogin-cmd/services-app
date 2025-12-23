import { SelectedService } from "../../types/service.types";
import "./TotalSummary.style.scss";

interface TotalSummaryProps {
  services: SelectedService[];
  onCheckout: () => void;
}

export function TotalSummary({
  services,
  onCheckout,
}: TotalSummaryProps) {
  const totalAmount = services.reduce((sum, service) => {
    return sum + service.price * service.quantity;
  }, 0);

  const totalServices = services.reduce((sum, service) => {
    return sum + service.quantity;
  }, 0);

  return (
    <div className="total-summary">
      <div className="total-summary__info">
        <div className="total-summary__row">
          <span>Количество услуг:</span>
          <span className="total-summary__value">{totalServices}</span>
        </div>
        <div className="total-summary__row total-summary__row--total">
          <span>Общая сумма:</span>
          <span className="total-summary__amount">
            {totalAmount.toLocaleString("ru-RU")} ₽
          </span>
        </div>
      </div>
      <button
        className="total-summary__checkout-button"
        onClick={onCheckout}
        disabled={services.length === 0}
        type="button"
      >
        Оформить заказ
      </button>
    </div>
  );
}
