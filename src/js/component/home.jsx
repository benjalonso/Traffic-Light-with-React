import React, { useState } from "react";

//"0 0 20px #FAF1F0"
//create your first component
const Home = () => {
	const [selectedLight, setLight] = useState("");

	return (
		<>
			<div
				className="trafficBar container"
				style={{
					width: "30px",
					height: "80px",
					marginTop: "10px",
					background: "black",
				}}>
				.
			</div>

			<div
				className="lights container"
				style={{
					width: "120px",
					height: "230px",
					background: "black",
					borderRadius: "10px",
				}}>
				.
				<div
					onClick={() => setLight("green")}
					className={
						"green" +
						(selectedLight === "green"
							? "shadow-sm p-3 mb-5 bg-white rounded"
							: " ")
					}
					style={{
						width: "60px",
						height: "60px",
						margin: "auto",
						marginBottom: "5px",
						background: "green",
						borderRadius: "50%",
					}}>
					.
				</div>
				<div
					onClick={() => setLight("yellow")}
					className={
						"yellow" +
						(selectedLight === "yellow"
							? "shadow-sm p-3 mb-5 bg-white rounded"
							: " ")
					}
					style={{
						width: "60px",
						height: "60px",
						margin: "auto",
						marginBottom: "5px",
						background: "yellow",
						borderRadius: "50%",
					}}>
					.
				</div>
				<div
					onClick={() => setLight("red")}
					className={
						"red" +
						(selectedLight === "red"
							? "shadow-sm p-3 mb-5 bg-white rounded"
							: " ")
					}
					style={{
						width: "60px",
						height: "60px",
						margin: "auto",
						marginBottom: "5px",
						background: "red",
						borderRadius: "50%",
					}}>
					.
				</div>
			</div>
		</>
	);
};

export default Home;
