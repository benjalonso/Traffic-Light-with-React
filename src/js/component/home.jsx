import React, { useState } from "react";

const Home = () => {
	const [selectedLight1, setLight1] = useState("");
	const [selectedLight2, setLight2] = useState("");
	const [selectedLight3, setLight3] = useState("");

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
					onClick={() => (selectedLight1 = setLight1("green"))}
					className={
						selectedLight1 +
						(() => {
							selectedLight1 == "green" ? "glow" : "";
						})
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
					onClick={() => (selectedLight2 = setLight2("yellow"))}
					className={
						selectedLight2 +
						(() => {
							selectedLight2 === "yellow" ? "glow" : "";
						})
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
					onClick={() => (selectedLight3 = setLight3("red"))}
					className={
						selectedLight3 +
						(() => {
							selectedLight3 === "red" ? "glow" : "";
						})
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
