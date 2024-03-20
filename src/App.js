import { useState } from "react";

function App() {
    const [amountToConvert, setAmountToConvert] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [conversionResult, setConversionResult] = useState(0);

    return (
        <div className="App">
            <h1>Currency Converter</h1>
            <p>
                <span>
                    <label>Amount</label>
                    <input type="text" />
                </span>
                <span>
                    <label>From</label>
                    <select>
                        <option value={"USD"}>USD</option>
                        <option value={"EUR"}>EUR</option>
                        <option value={"CNY"}>CNY</option>
                        <option value={"JPY"}>JPY</option>
                        <option value={"KRW"}>KRW</option>
                        <option value={"INR"}>INR</option>
                        <option value={"GBP"}>GBP</option>
                        <option value={"CHF"}>CHF</option>
                        <option value={"AED"}>AED</option>
                        <option value={"RON"}>RON</option>
                        <option value={"PLN"}>PLN</option>
                    </select>
                </span>
                <span>
                    <label>To</label>
                    <select>
                        <option value={"USD"}>USD</option>
                        <option value={"EUR"}>EUR</option>
                        <option value={"CNY"}>CNY</option>
                        <option value={"JPY"}>JPY</option>
                        <option value={"KRW"}>KRW</option>
                        <option value={"INR"}>INR</option>
                        <option value={"GBP"}>GBP</option>
                        <option value={"CHF"}>CHF</option>
                        <option value={"AED"}>AED</option>
                        <option value={"RON"}>RON</option>
                        <option value={"PLN"}>PLN</option>
                    </select>
                </span>
            </p>
            <p>
                <span>
                    <label>Conversion Result</label>
                    <input type="text" readOnly />
                </span>
            </p>
            <p className="ConvertBtn">
                <button>Convert</button>
            </p>
        </div>
    );
}

export default App;
