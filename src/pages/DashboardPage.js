import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";
import data from "../assets/jsonData";
import Search from "../components/Dashboard/Search";
import PaginationComponent from "../components/Dashboard/Pagination";
import Loader from "../components/Common/Loader";
import BackToTopButton from "../components/Common/BackToTop";
import Footer from "../components/Common/Footer";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    let startingIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
  };

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCoins(res.data);
        setPaginatedCoins(res.data.slice(0, 10));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    // setCoins(data)
    // setPaginatedCoins(data.slice(0, 10))
  }, []);


  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BackToTopButton />
          <Header />
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
          {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleChange={handlePageChange}
            />
          )}
        </>
      )}
      <Footer/>
    </div>
  );
};

export default DashboardPage;
