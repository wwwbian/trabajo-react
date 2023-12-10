import { useState } from "react";
import Card from "./componentes/Cards";
import Home from "./componentes/Home";
import "./App.css";
import ContextProvider from "./context/ContextProvider";
function App() {


	return (
		<>
			<ContextProvider>				
				<Home/>
			</ContextProvider>
		</>	
	);
}

export default App;