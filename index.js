import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
	return res.json({ message: "Node server is healthy" });
});

app.listen(PORT, () => {
	console.log(`Sever is listening on port ${PORT}`);
});
