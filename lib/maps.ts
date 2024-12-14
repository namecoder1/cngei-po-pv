	// Mappa per i bordi e le descrizioni
	export const borderDescriptions: Record<string, string> = {
		green: "Corporeità",
		yellow: "Creatività",
		red: "Impegno Civile",
		blue: "Carattere",
	};

	// Mappa per i colori e le descrizioni
	export const colorDescriptions: Record<string, string> = {
		green: "Scout",
		yellow: "Personali",
	};

	// Mappa delle classi di Tailwind per colori e bordi
	export const tailwindColors: Record<string, string> = {
		yellow: "border-yellow-200 hover:bg-yellow-100 hover:border-yellow-300",
		green: "border-green-200 hover:bg-green-100 hover:border-green-300",
		blue: "border-blue-200 hover:bg-blue-100 hover:border-blue-300",
		red: "border-red-200 hover:bg-red-100 hover:border-red-300",
	};

	// Mappa per sfondi selezionati
	export const selectedBgColors: Record<string, string> = {
		yellow: "bg-yellow-200",
		green: "bg-green-200",
		blue: "bg-blue-200",
		red: "bg-red-200",
	};