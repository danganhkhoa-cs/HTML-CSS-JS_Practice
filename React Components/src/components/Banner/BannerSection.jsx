import { useState } from "react";

import Banner from "./index";

function BannerSection() {
	const [type, setType] = useState("success");
	const [title, setTitle] = useState("Lorem ipsum");
	const [desc, setDesc] = useState(
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
	);

	return (
		<section>
			<h2 className="section-heading">Banner</h2>

			<label htmlFor="banner-type">Type: </label>
			<select
				id="banner-type"
				value={type}
				onChange={(e) => {
					setType(e.target.value);
				}}
			>
				<option>success</option>
				<option>warning</option>
				<option>error</option>
				<option>neutral</option>
			</select>

			<label htmlFor="banner-title" className="block">
				Title:{" "}
				<input
					type="text"
					id="banner-title"
					className="border-b outline-0"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
			</label>
			<label htmlFor="banner-desc" className="block">
				Description:{" "}
				<input
					type="text"
					id="banner-desc"
					className="border-b outline-0"
					value={desc}
					onChange={(e) => {
						setDesc(e.target.value);
					}}
				/>
			</label>

			<div className="component-field">
				<Banner type={type}>
					<Banner.Title>{title}</Banner.Title>
					{desc && <Banner.Desc>{desc}</Banner.Desc>}
				</Banner>
			</div>
		</section>
	);
}

export default BannerSection;
