const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;


const BETA_PASSWORD = "123@";
app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "style.css"));
});
app.get("/script.js", (req, res) => {
    res.sendFile(path.join(__dirname, "script.js"));
});


app.use("/apk", express.static("apk"));

app.post("/beta-download", (req, res) => {
    const { password } = req.body;

    if (password !== BETA_PASSWORD) {
        return res.status(403).json({ error: "Unauthorized" });
    }

    res.download(
        path.join(__dirname, "beta", "MonkeyChaserVR-BETA.apk")
    );
});

app.listen(PORT, () => {
    console.log(`MonkeyChaser VR running at http://localhost:${PORT}`);
});
