import SearchBar from "@/components/SearchBar";
const Search = () => {
  
  return (
    <section className="container mx-auto border-white h-auto w-[90%] flex flex-col gap-(--space-l) md:gap-(--space-m) items-center">
      <h1 className="text-center text-white text-(length:--fs-4) font-bold tracking-tight leading-11 md:tracking-wide">
        How's the sky looking today?
      </h1>
      <SearchBar />
    </section>
  );
};

export default Search;
