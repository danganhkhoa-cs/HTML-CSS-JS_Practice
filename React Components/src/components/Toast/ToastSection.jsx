import { useState } from "react";
import Toast from "./index";

function ToastSection() {
	const [type, setType] = useState("success");
	const [title, setTitle] = useState("Lorem ipsum");
	const [desc, setDesc] = useState(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
	);

	return (
		<section>
			<h2 className="section-heading">toast popup</h2>

			<label htmlFor="toast-type">Type: </label>
			<select
				id="toast-type"
				value={type}
				onChange={(e) => {
					setType(e.target.value);
				}}
			>
				<option>success</option>
				<option>warning</option>
				<option>error</option>
				<option>information</option>
			</select>
			<label htmlFor="toast-title" className="block">
				Title:{" "}
				<input
					type="text"
					id="toast-title"
					className="border-b outline-0"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
			</label>
			<label htmlFor="toast-desc" className="block">
				Description:{" "}
				<input
					type="text"
					id="toast-desc"
					className="border-b outline-0"
					value={desc}
					onChange={(e) => {
						setDesc(e.target.value);
					}}
				/>
			</label>

			<div className="component-field">
				<Toast type={type}>
					<Toast.Title>{title}</Toast.Title>
					<Toast.Desc>{desc}</Toast.Desc>
				</Toast>
			</div>
		</section>
	);
}

export default ToastSection;
