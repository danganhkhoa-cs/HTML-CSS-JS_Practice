import { use, useState } from "react";
import Tooltip from "./index";

function TooltipSection() {
	const [style, setStyle] = useState("bold");
	const [color, setColor] = useState("color1");
	const [title, setTitle] = useState("Lorem ipsum");
	const [desc, setDesc] = useState(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.",
	);
	return (
		<section>
			<h2 className="section-heading">Tooltip</h2>

			<label>
				Style:
				<select value={style} onChange={(e) => setStyle(e.target.value)}>
					<option>bold</option>
					<option>light</option>
				</select>
			</label>
			<label className="ml-5">
				Color:
				<select value={color} onChange={(e) => setColor(e.target.value)}>
					<option>color1</option>
					<option>color2</option>
					<option>color3</option>
					<option>color4</option>
				</select>
			</label>
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
				<Tooltip style={style} color={color}>
					<Tooltip.Title>{title}</Tooltip.Title>
					<Tooltip.Desc>{desc}</Tooltip.Desc>
				</Tooltip>
			</div>
		</section>
	);
}

export default TooltipSection;
