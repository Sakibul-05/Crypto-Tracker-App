import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import List from '../components/Dashboard/List';
import { convertObject } from '../functions/convertObject';
import CoinInfo from '../components/Coins/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/Coins/LineChart';
import { settingChartData } from '../functions/settingChartData';
import SelectDays from '../components/Coins/SelectDays';
import PriceToggle from '../components/Coins/PriceToggle';

const CoinPage = () => {
  const {id} = useParams();
  const [coinData, setCoinData] = useState([]) 
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(()=>{
     getData();
  }, [id])

  async function getData (){
    setIsLoading(true);
    const data = await getCoinData(id);
    if (data) {
      convertObject(setCoinData, data); 
      const prices = await getCoinPrices(id, days, priceType);
      if (prices) {
        settingChartData(setChartData, prices, data); 
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      settingChartData(setChartData, prices, coinData);
      setIsLoading(false);
    }
  };

  const handlePriceTypeChange = async (event) => {
    setIsLoading(true);
    setPriceType(event.target.value);
    const prices = await getCoinPrices(id, days, event.target.value);
    if (prices) {
      settingChartData(setChartData, prices, coinData);
    }
    setIsLoading(false);
  };

  return (
    <div style={{ color: "#ffff" }}>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="CoinPage">
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <PriceToggle
              handlePriceTypeChange={handlePriceTypeChange}
              priceType={priceType}
            />
            <LineChart chartData={chartData} priceType={priceType}/>
          </div>
          <div className="grey-wrapper">
            <CoinInfo name={coinData.name} desc={coinData.desc} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CoinPage
