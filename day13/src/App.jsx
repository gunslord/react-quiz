import { useState } from "react";
import "./App.css";

const CurrenyInput = ({ name, value, onChange }) => {
  return (
    <div>
      <div>
        {name.toUpperCase()} :{" "}
        <input type="number" value={value} name={name} onChange={onChange} />
      </div>
    </div>
  );
};

function App() {
  const [currencyState, setCurrencyState] = useState({
    krw: 0,
    usd: 0,
  });

  const exchangeRate = 1300;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (!isNaN(value)) {
      if (name === "krw") {
        setCurrencyState({
          krw: value,
          usd: value / exchangeRate,
        });
      } else if (name === "usd") {
        setCurrencyState({
          krw: value * exchangeRate,
          usd: value,
        });
      }
    }
  };

  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
      <CurrenyInput
        name="krw"
        value={currencyState.krw}
        onChange={handleOnChange}
      />
      <CurrenyInput
        name="usd"
        value={currencyState.usd}
        onChange={handleOnChange}
      />
    </>
  );
}

export default App;
