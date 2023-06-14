import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, filterDirections } from "../redux-toolkit/toolkit-slice";

export const CurrencyTypes = () => {
  const currencyTypes = [
    "Все",
    "Криптовалюты",
    "Наличные",
    "Банки RUB",
    "Банки UAH",
  ];
  const directions = [
    {
      code: "BTC",
      name: "Bitcoin BTC ",
    },
    {
      code: "ETH",
      name: "Ethereum ETH ",
    },
    {
      code: "CASHUSD",
      name: "Наличные USD ",
    },
    {
      code: "CASHRUB",
      name: "Наличные RUB ",
    },
    {
      code: "ACRUB",
      name: "Альфа-банк RUB ",
    },
    {
      code: "SBERRUB",
      name: "Сбербанк RUB ",
    },
    {
      code: "TCSBRUB",
      name: "Тинькофф RUB ",
    },
    {
      code: "USDTTRC",
      name: "Tether TRC20 USDT ",
    },
  ];

  const selectedCategory = useSelector((state) => state.toolkit.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterDirections({ directions, selectedCategory }));
  }, [dispatch, selectedCategory]);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="currency-types">
      {currencyTypes.map((type) => (
        <span
          className={
            type !== selectedCategory ? "currency-type" : "currency-type active"
          }
          onClick={() => handleCategoryChange(type)}
          key={type}
        >
          {type}
        </span>
      ))}
    </div>
  );
};
