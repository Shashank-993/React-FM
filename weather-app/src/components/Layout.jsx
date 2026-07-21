import React from "react";
import Nav from "./Nav";
import Search from "@/pages/Search";
import Weather from "@/pages/Weather";
import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherContext";
import Error from "./Error";

const Layout = () => {
  const { query, results, location, isError, isFetching, refetch } = useContext(WeatherContext);
  return (
    <div className="min-h-screen bg-(--neutral-900) space-y-m">
      <header>
        <Nav />
      </header>
      <main className="py-(--space-m) space-y-m">
        <Search />
        {isError ? (
          <Error retry={refetch}/>
        ) : location ? (
          <Weather />
        ) : query.trim() && !isFetching && results.length === 0 ? (
          <h1 className="text-center text-white font-bold text-(length:--fs-2)">
            No search results found!
          </h1>
        ) : null}
      </main>
    </div>
  );
};

export default Layout;
