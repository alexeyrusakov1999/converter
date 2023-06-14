import { CurrencyTypes } from "./currency-types";
import { useSelector, useDispatch } from "react-redux";
import { setCurrency } from "../redux-toolkit/toolkit-slice";

export const InputField = () => {
  const dispatch = useDispatch();
  const filteredDirections = useSelector(
    (state) => state.toolkit.filteredDirections
  );

  const selectedCurrency = useSelector((state) => state.toolkit.currency);

  const handleCurrencyChange = (currency) => {
    dispatch(setCurrency(currency));
  };

  console.log(selectedCurrency);

  return (
    <div className="input-field">
      <h3 className="input-title">Отдаете</h3>
      <CurrencyTypes />
      <div className="input-elements">
        <input className="input" type="text" />
        <select
          className="select"
          name=""
          id=""
          onChange={(e) => handleCurrencyChange(e.target.value)}
        >
          {filteredDirections.map((currency, index) => (
            <option value={currency.code} key={currency.code + index}>
              {currency.code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
