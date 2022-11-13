import "./styles/App.css";
import { LanguageContext } from "./context/LanguageContext";
import { useMemo, useState } from "react";
import Router from "./routes/index";

function App() {
	const [language, setLanguage] = useState("ES");
	const languageProvider = useMemo(
		() => ({ language, setLanguage }),
		[language, setLanguage]
	);

	return (
		<LanguageContext.Provider value={languageProvider}>
			<Router />
		</LanguageContext.Provider>
	);
}

export default App;
