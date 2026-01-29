import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

import Testimonial from "./index";
import { useState } from "react";

function TestimonialSection() {
	const [isHaveImage, setIsHaveImage] = useState(false);
	const [desc, setDesc] = useState(
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. ",
	);
	const [name, setName] = useState("May Andersons");
	const [role, setRole] = useState("Workcation, CTO");

	const imgSrc = "/public/avatar.jpg";

	return (
		<section>
			<h2 className="section-heading">Testimonial</h2>

			<label>
				<input
					type="checkbox"
					checked={isHaveImage}
					onChange={(e) => setIsHaveImage(e.target.checked)}
				/>
				{" With image"}
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
			<label>
				{"Name: "}
				<input
					type="text"
					className="outline-none border-b"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</label>
			<label className="ml-10">
				{"Role: "}
				<input
					type="text"
					className="outline-none border-b"
					value={role}
					onChange={(e) => setRole(e.target.value)}
				/>
			</label>

			<div className="component-field bg-[#e5e7eb]">
				<ResizableBox
					width={800}
					maxConstraints={[800, 900]}
					minConstraints={[188, 900]}
					resizeHandles={["e"]}
					handle={
						<span
							style={{
								position: "absolute",
								right: -16,
								top: 0,
								width: 32,
								height: "100%",
								cursor: "ew-resize",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<span
								style={{
									width: 5,
									height: 50,
									background: "#f59e0b",
									borderRadius: 4,
								}}
							/>
						</span>
					}
					className="bg-[#2c2c2c] rounded-md flex items-center justify-center my-10 @container"
				>
					<Testimonial imgSrc={isHaveImage ? imgSrc : null}>
						<Testimonial.Desc>{desc}</Testimonial.Desc>
						<Testimonial.Name>{name}</Testimonial.Name>
						<Testimonial.Role>{role}</Testimonial.Role>
					</Testimonial>
				</ResizableBox>
			</div>
		</section>
	);
}

export default TestimonialSection;
