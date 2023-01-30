import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
	const [linea1, setLinea1] = useState("");
	const [linea2, setLinea2] = useState("");
	const [imagen, setImagen] = useState("");

	const onChangelinea1 = function (evento) {
		setLinea1(evento.target.value);
	};

	const onChangelinea2 = function (evento) {
		setLinea2(evento.target.value);
	};

	const onChangeImagen = function (evento) {
		setImagen(evento.target.value);
	};

	const onClickExport = function (evento) {
		html2canvas(document.querySelector("#meme")).then((canvas) => {
			var img = canvas.toDataURL("image/jpg");
			var link = document.createElement("a");
			link.download = "meme.png";
			link.href = img;
			link.click();
		});
	};

	return (
		<div className="App">
			<select onChange={onChangeImagen}>
				<option value="fire "> Fire </option>
				<option value="locomotora"> Locomotora </option>
				<option value="peladokhe"> Kevin </option>
				<option value="theoffice"> The Office </option>
			</select>
			<br />
			<input onChange={onChangelinea1} type="text" placeholder="linea 1" />
			<br />
			<input onChange={onChangelinea2} type="text" placeholder="linea 2" />
			<br />
			<button onClick={onClickExport}>Exportar</button>
			<br />

			<div className="meme" id="meme">
				<span> {linea1}</span> <br />
				<span> {linea2}</span> <br />
				<img src={"/img/" + imagen + ".jpg"} />
			</div>
		</div>
	);
}

export default App;
