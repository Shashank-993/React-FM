import { WeatherContext } from '@/context/WeatherContext';
import React from 'react'
import { useContext } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import loading from "../assets/images/icon-loading.svg";
import { useRef } from 'react';
import { useEffect } from 'react';
const SearchBar = () => {
    const { query, setQuery, isFetching, results, setShow, showDropDown, selectLocation } = useContext(WeatherContext);
    const dropdownRef = useRef(null)
    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShow(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  return (
    <div className="flex flex-col gap-(--space-2xs) md:flex-row w-full md:w-[70%]">
      <div className="flex flex-col gap-(--space-2xs) w-full">
        <Input
          className="bg-(--neutral-700) p-(--space-s) lg:p-6 text-white placeholder:text-(--neutral-300) placeholder:text-(length:--fs--1) border-none outline-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:border-none"
          value={query}
          onChange={(e) => {
            const value = e.target.value;
            setQuery(value);
            setShow(value.trim().length > 0);
          }}
          placeholder="Search for a place..."
        />
        {/* Search results dropdown */}
        {showDropDown && (
          <div ref={dropdownRef} className="bg-(--neutral-700) text-white p-(--space-3xs) rounded-xl max-h-40 overflow-y-scroll scrollbar scrollbar-thumb-(--neutral-600) scrollbar-track-transparent">
            {isFetching ? (
              <div className="flex items-center justify-start gap-(--space-xs) p-(--space-2xs)">
                <img
                  src={loading}
                  alt="Loading"
                  className="h-5 w-5 animate-spin"
                />
                <span>Search in progress</span>
              </div>
            ) : results.length > 0 ? (
              results.map((item) => (
                <span
                  key={item.id}
                  onClick={() => selectLocation(item)}
                  className="block hover:bg-(--neutral-600) p-(--space-2xs) rounded-md hover:cursor-pointer"
                >
                  {item.name}, {item.admin1}, {item.country}
                </span>
              ))
            ) : (
              <p className="p-(--space-2xs) text-(--neutral-300)">
                No places found
              </p>
            )}
          </div>
        )}
      </div>
      <Button className="text-(--neutral-0) text-(length:--fs-0)  p-(--space-s) lg:p-6 outline-none border-none ring-0 active:border-0 active:outline-0 active:ring-0 bg-(--blue-500) hover:opacity-75 cursor-pointer">
        Search
      </Button>
    </div>
  );
}

export default SearchBar