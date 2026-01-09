export const Header = () => (
	<div>
		<div className="w-79.25 h-79.25 overflow-hidden">
			<img className="object-cover" src="avatar.png" />
		</div>
		<div className="flex flex-col items-center px-8 mt-4">
			<h1 className="name">Kisaragi Yuzuki</h1>
			<h2 className="job">Fullstack Developer</h2>
			<a className="weblink">kisaragiyuzuki.website</a>
			<div className="flex items-center justify-between mt-4 w-full">
				<a className="profile-btn bg-white text-gray-700 border border-gray-300">
					<i class="fa-solid fa-envelope text-[0.9em]"></i>
					Email
				</a>
				<a className="profile-btn bg-linkedin text-white">
					<i class="fa-brands fa-linkedin text-[0.9em]"></i>
					LinkedIn
				</a>
			</div>
		</div>
	</div>
);
