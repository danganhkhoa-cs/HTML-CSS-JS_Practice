import { useState } from "react";
import Card from "./index";

function CardSection() {
	const [title, setTitle] = useState("Easy Deployment");
	const [desc, setDesc] = useState(
		"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
	);

	return (
		<section>
			<h2 className="section-heading">Card</h2>

			<label className="block">
				{"Title: "}
				<input
					type="text"
					className="outline-none border-b"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</label>
			<label className="block">
				{"Description: "}
				<input
					type="text"
					className="outline-none border-b"
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
				/>
			</label>

			<div className="component-field bg-[#e5e7eb]">
				<Card>
					<Card.Title>{title}</Card.Title>
					<Card.Desc>{desc}</Card.Desc>
				</Card>
			</div>
		</section>
	);
}

export default CardSection;
