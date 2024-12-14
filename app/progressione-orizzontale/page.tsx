'use client';
import { useEffect, useState } from "react";
import Card from "@/components/blocks/card";
import { borderDescriptions, colorDescriptions, tailwindColors, selectedBgColors } from "@/lib/maps";

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

      {/* Barra di Ricerca */}
      <div className="my-4">
        <input
          type="text"
          placeholder="Cerca..."
          className="w-full p-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filtri */}
      <section className="flex flex-col md:flex-row gap-4">
        <div className="flex items-center gap-2">
          <div className="gap-3 grid grid-cols-2 w-full sm:flex items-center justify-center">
            {Object.keys(colorDescriptions).map((color) => (
              <button
                key={color}
                onClick={() => handleFilter("color", color)}
                className={`border rounded-lg duration-200 ${
                  filterByColor === color
                    ? `${tailwindColors[color]} ${selectedBgColors[color]}`
                    : tailwindColors[color]
                } px-3 py-1`}
              >
                {colorDescriptions[color]} {filterByColor === color && "✕"}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="gap-3 grid grid-cols-2 grid-rows-2 w-full sm:flex items-center justify-start">
            {Object.keys(borderDescriptions).map((color) => (
              <button
                key={color}
                onClick={() => handleFilter("border", color)}
                className={`border rounded-lg duration-200 ${
                  filterByBorder === color
                    ? `${tailwindColors[color]} ${selectedBgColors[color]}`
                    : tailwindColors[color]} px-3 py-1`}>
                {borderDescriptions[color]} {filterByBorder === color && "✕"}
              </button>
            ))}
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

      {/* Risultati filtrati */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {filteredData.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>

      {/* Nessun risultato */}
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-4">Nessun risultato trovato.</p>
      )}
    </div>
  );
};

export default HorizontalProgressionPage;