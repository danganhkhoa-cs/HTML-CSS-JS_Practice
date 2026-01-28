import { useState } from "react";

import Badge from "./Badge";

function BadgeSection() {
	const [type, setType] = useState("square");
	const [color, setColor] = useState("gray");

	return (
		<section>
			<h2 className="section-heading">Badge</h2>

			<label htmlFor="badge-type">Type: </label>
			<select
				id="badge-type"
				value={type}
				onChange={(e) => setType(e.target.value)}
			>
				<option>square</option>
				<option>spill</option>
			</select>
			<label htmlFor="badge-color" className="ml-5">
				Color:{" "}
			</label>
			<select
				id="badge-color"
				value={color}
				onChange={(e) => {
					setColor(e.target.value);
				}}
			>
				<option>gray</option>
				<option>red</option>
				<option>yellow</option>
				<option>green</option>
				<option>blue</option>
				<option>indigo</option>
				<option>purple</option>
				<option>pink</option>
			</select>

			<div className="component-field">
				<Badge type={type} color={color}>
					Badge
				</Badge>
			</div>
		</section>
	);
}

export default BadgeSection;
