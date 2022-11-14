import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1 className="title">Smart Street Lighting System</h1>
				<div className="frameContainer">
					<iframe
						width="450"
						height="260"
						style={{ border: "1px solid #cccccc" }}
						src="https://thingspeak.com/channels/1914520/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
					></iframe>
					<iframe
						width="450"
						height="260"
						style={{ border: "1px solid #cccccc" }}
						src="https://thingspeak.com/channels/1914520/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
					></iframe>
					<iframe
						width="450"
						height="260"
						style={{ border: "1px solid #cccccc" }}
						src="https://thingspeak.com/channels/1914520/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
					></iframe>
					<iframe
						width="450"
						height="260"
						style={{ border: "1px solid #cccccc" }}
						src="https://thingspeak.com/channels/1914520/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
					></iframe>
					<iframe
						width="450"
						height="260"
						style={{ border: "1px solid #cccccc" }}
						src="https://thingspeak.com/channels/1914520/charts/6?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default App;
