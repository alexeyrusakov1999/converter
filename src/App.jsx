import "./App.css";
import { InputField } from "./components/input-field";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setConversionCategory,
  filterCurrencyOptions,
} from "./redux-toolkit/toolkit-slice";

function App() {
  const categories = [
    "Все",
    "Криптовалюты",
    "Наличные",
    "Банки RUB",
    "Банки UAH",
  ];

  const filter = {
    Все: ["USD", "EUR", "BTC", "ETH"],
    Криптовалюты: ["BTC", "ETH", "USDTTRC"],
    Наличные: ["CASHUSD", "CASHRUB"],
    "Банки RUB": ["ACRUB", "SBERRUB", "TCSBRUB"],
    "Банки UAH": ["ACUAH", "MONOBANKUAH", "P24UAH", "CARDUAH"],
  };

  const filteredConversionCurrencies = useSelector(
    (state) => state.toolkit.currencyOptions
  );

  const filteredConversionCurrenciesByCategory = useSelector(
    (state) => state.toolkit.filteredCurrencyOptions
  );

  console.log(filteredConversionCurrencies);

  const selectedCategory = useSelector(
    (state) => state.toolkit.conversionCategory
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCurrencyOptions({ filter, selectedCategory }));
  }, [dispatch, selectedCategory]);

  console.log(filteredConversionCurrenciesByCategory);

  const handleCategoryChange = (category) => {
    dispatch(setConversionCategory(category));
  };

  return (
    <div className="container">
      <div className="content">
        <InputField />
        <div className="input-field">
          <h3 className="input-title">Получаете</h3>
          <div className="currency-types">
            {categories.map((type) => (
              <span
                className={
                  type !== selectedCategory
                    ? "currency-type"
                    : "currency-type active"
                }
                key={type}
                onClick={() => handleCategoryChange(type)}
              >
                {type}
              </span>
            ))}
          </div>
          <div className="input-elements">
            <input className="input" type="text" />
            <select className="select" name="" id="">
              {filteredConversionCurrenciesByCategory.length > 0 ? (
                filteredConversionCurrenciesByCategory.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))
              ) : (
                <option> Нет вариантов</option>
              )}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
