const express = require("express");
const app = express();

app.use(express.json());

// ROOT
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "API is running"
  });
});

// HEALTH (STRICT)
app.get("/health", (req, res) => {
  return res.status(200).json({
    message: "healthy"
  });
});

// ME (STRICT SPEC)
app.get("/me", (req, res) => {
  return res.status(200).json({
    name: "brownshalom",
    email: "brown.shalom90@gmail.com",
    github: "https://github.com/brownshalom"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
