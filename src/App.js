import { useEffect, useState } from "react";

function App() {
    const [amountToConvert, setAmountToConvert] = useState("");
    const [fromCurrency, setFromCurrency] = useState(
        "Please select a currency"
    );
    const [toCurrency, setToCurrency] = useState("Please select a currency");
    const [conversionResult, setConversionResult] = useState("");

    const hostApi = "api.frankfurter.app";

    function handleAmountChange(event) {
        if (isNaN(event.target.value) || event.target.value < 0) {
            setAmountToConvert(0);
        } else {
            setAmountToConvert(event.target.value);
        }
    }

    function handleFromCurrencyChange(event) {
        setFromCurrency(event.target.value);
    }

    function handleToCurrencyChange(event) {
        setToCurrency(event.target.value);
    }

    useEffect(() => {
        async function fetchConversionRates() {
            if (
                amountToConvert === "" ||
                fromCurrency === "Please select a currency" ||
                toCurrency === "Please select a currency"
            ) {
                return;
            }
            try {
                const response = await fetch(
                    `https://${hostApi}/latest?amount=${amountToConvert}&from=${fromCurrency}&to=${toCurrency}`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                if (data && data.rates && data.rates[toCurrency]) {
                    setConversionResult(data.rates[toCurrency]);
                } else {
                    throw new Error("Currency not found in conversion rates");
                }
            } catch (error) {
                console.error("Error fetching conversion rates", error);
            }
        }

        fetchConversionRates();
    }, [amountToConvert, fromCurrency, toCurrency]);

    return (
        <div className="App">
            <h1>Currency Converter</h1>
            <p>
                <span>
                    <label>Amount</label>
                    <input
                        type="text"
                        placeholder="Enter amount to convert"
                        value={amountToConvert}
                        onChange={handleAmountChange}
                    />
                </span>
                <span>
                    <label>From</label>
                    <select
                        value={fromCurrency}
                        onChange={handleFromCurrencyChange}
                    >
                        <option value={"Please select a currency"}>
                            Please select a currency
                        </option>
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
                    <select
                        value={toCurrency}
                        onChange={handleToCurrencyChange}
                    >
                        <option value={"Please select a currency"}>
                            Please select a currency
                        </option>
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
            <p className="ConversionResults">
                <span>
                    Conversion Result in {toCurrency}: {conversionResult}
                </span>
            </p>
        </div>
    );
}

export default App;
