async function testReservationFlow() {
  try {
    const response = await fetch("http://localhost:3001/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "GitHub Test User",
        time: "20:30",
        people: 2
      })
    });

    const data = await response.json();

    console.log("✅ Reservation API Response:", data);
  } catch (err) {
    console.error("❌ API Error:", err);
  }
}
