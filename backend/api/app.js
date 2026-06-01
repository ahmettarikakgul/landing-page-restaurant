const express = require("express");
const app = express();

app.use(express.json());

// 🧠 Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "restorax-api",
    timestamp: new Date().toISOString()
  });
});

// 🪑 Reservation endpoint (real signal)
app.post("/api/reservations", (req, res) => {
  const { name, time, people } = req.body;

  if (!name || !time || !people) {
    return res.status(400).json({
      error: "missing_fields"
    });
  }

  res.json({
    success: true,
    reservationId: "res_" + Date.now(),
    data: {
      name,
      time,
      people
    }
  });
});

app.listen(3001, () => {
  console.log("API running on port 3001");
});
