async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  if (!amount || amount <= 0) {
    alert("Enter a valid amount");
    return;
  }

  const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
  const data = await res.json();
  const rate = data.rates[to];
  const converted = (amount * rate).toFixed(2);
  document.getElementById("result").innerText = `${amount} ${from} = ${converted} ${to}`;
}