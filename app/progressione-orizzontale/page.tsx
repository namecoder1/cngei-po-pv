'use client';
import { useEffect, useState } from "react";
import Card from "@/components/blocks/card";
import { borderDescriptions, colorDescriptions } from "@/lib/maps";

export type HorizontalType = {
  id: number;
  name: string;
  description: string;
  tasks: string[];
  image: string;
  color: string;
  border: "green" | "red" | "yellow" | "blue";
};

const HorizontalProgressionPage = () => {
  const [data, setData] = useState<HorizontalType[]>([]);
  const [filterByColor, setFilterByColor] = useState<string | null>(null);
  const [filterByBorder, setFilterByBorder] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    fetch("/data/po.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleFilter = (filterType: string, value: string) => {
    if (filterType === "color") {
      setFilterByColor(filterByColor === value ? null : value);
    } else if (filterType === "border") {
      setFilterByBorder(filterByBorder === value ? null : value);
    }
  };

  const filteredData = data.filter((item) => {
    const matchesSearch =
      searchTerm === "" ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tasks.some((task) =>
        task.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesColor = !filterByColor || item.color === filterByColor;
    const matchesBorder = !filterByBorder || item.border === filterByBorder;

    return matchesSearch && matchesColor && matchesBorder;
  });

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-semibold">Specialità Orizzontali</h1>
      <div className="my-4">
        <input
          type="text"
          placeholder="Cerca..."
          className="w-full p-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <section className="flex flex-col md:flex-row gap-4">
        <div className="flex items-center gap-2">
          <div className="gap-3 grid grid-cols-2 w-full sm:flex items-center justify-center">
            <button onClick={() => handleFilter("color", 'yellow')} className={`border border-yellow-300 rounded-lg duration-200 px-3 py-1 hover:border-yellow-400 hover:bg-yellow-200 ${filterByColor == 'yellow' && (`bg-yellow-200 border-yellow-400`)}`}>Personali {filterByColor === 'yellow' && "✕"}</button>
            <button onClick={() => handleFilter("color", 'green')} className={`border border-green-300 rounded-lg duration-200 px-3 py-1 hover:border-green-400 hover:bg-green-200 ${filterByColor == 'green' && (`bg-green-200 border-green-400`)}`}>Scout {filterByColor === 'green' && "✕"}</button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="gap-3 grid grid-cols-2 grid-rows-2 w-full sm:flex items-center justify-start">
            <button onClick={() => handleFilter("border", 'green')} className={`border border-green-300 rounded-lg duration-200 px-3 py-1 hover:border-green-400 hover:bg-green-200 ${filterByBorder == 'green' && ('bg-green-200 border-r-green-400')}`}>Corporeità {filterByBorder === 'green' && '✕'}</button>
            <button onClick={() => handleFilter("border", 'red')} className={`border border-red-300 rounded-lg duration-200 px-3 py-1 hover:border-red-400 hover:bg-red-200 ${filterByBorder == 'red' && ('bg-red-200 border-r-red-400')}`}>Impegno Civile {filterByBorder === 'red' && '✕'}</button>
            <button onClick={() => handleFilter("border", 'yellow')} className={`border border-yellow-300 rounded-lg duration-200 px-3 py-1 hover:border-yellow-400 hover:bg-yellow-200 ${filterByBorder == 'yellow' && ('bg-yellow-200 border-r-yellow-400')}`}>Creatività {filterByBorder === 'yellow' && '✕'}</button>
            <button onClick={() => handleFilter("border", 'blue')} className={`border border-blue-300 rounded-lg duration-200 px-3 py-1 hover:border-blue-400 hover:bg-blue-200 ${filterByBorder == 'blue' && ('bg-blue-200 border-r-blue-400')}`}>Carattere {filterByBorder === 'blue' && '✕'}</button>
          </div>
        </div>
      </section>
      <div className="mt-4 text-lg font-medium text-gray-700">
        {filterByColor || filterByBorder ? (
          <p>
            Filtri:{" "}
            <span className="font-bold">
              {[
                filterByColor && colorDescriptions[filterByColor],
                filterByBorder && borderDescriptions[filterByBorder],
              ]
                .filter(Boolean)
                .join(", ")}
            </span>
          </p>
        ) : (
          <p>Nessun filtro selezionato</p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
        {filteredData.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-4">Nessun risultato trovato.</p>
      )}
    </div>
  );
};

export default HorizontalProgressionPage;