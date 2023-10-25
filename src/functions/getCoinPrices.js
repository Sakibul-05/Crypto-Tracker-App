import axios from "axios";

export const getCoinPrices = (id, days, priceType) => {
  const coinPrices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}&interval=daily`
    )
    .then((response) => {
      if (priceType == "market_caps") {
        return response.data.market_caps;
      } else if (priceType == "total_volumes") {
        return response.data.total_volumes;
      } else {
        return response.data.prices;
      }
    })
    .catch((error) => {
      return error;
    });

  return coinPrices;
};
