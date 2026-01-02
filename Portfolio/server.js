import express from "express";
import cors from "cors";
import { projectsRouter } from "./routes/projectsRouter.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.static("frontend/dist"));
app.use("/api/projects", projectsRouter);

app.listen(PORT, () => {
	console.log(`Server live at port: ${PORT}`);
});
