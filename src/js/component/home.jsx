import React, { useState } from "react";

//include images into your bundle
//create your first component
const Home = () => {
	const [selectedLight, setLight] = useState("");

	function glow() {
		setLight((selectedLight) => "0 0 20px #FAF1F0");
	}

	return (
		<>
			<div
				className="trafficBar bg-dark container"
				style={{
					width: "30px",
					height: "80px",
					marginTop: "10px",
				}}>
				.
			</div>

			<div
				className="lights container bg-dark rounded"
				style={{ width: "120px", height: "230px" }}>
				.
				<div
					className="green bg-success rounded-circle"
					onClick={glow}
					style={{
						width: "60px",
						height: "60px",
						boxShadow: selectedLight,
						margin: "auto",
						marginBottom: "5px",
					}}>
					.
				</div>
				<div
					className="yellow bg-warning rounded-circle"
					onClick={glow}
					style={{
						width: "60px",
						height: "60px",
						boxShadow: selectedLight,
						margin: "auto",
						marginBottom: "5px",
					}}>
					.
				</div>
				<div
					className="red bg-danger rounded-circle"
					onClick={glow}
					style={{
						width: "60px",
						height: "60px",
						boxShadow: selectedLight,
						margin: "auto",
						marginBottom: "5px",
					}}>
					.
				</div>
			</div>
		</>
	);
};

export default Home;
