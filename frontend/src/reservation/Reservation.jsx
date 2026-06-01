import React, { useState } from "react";

export default function Reservation() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitReservation = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://localhost:3001/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          time,
          people
        })
      });

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setResult({ error: "API Error" });
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>Reservation</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Time (20:00)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />

      <br /><br />

      <button onClick={submitReservation} disabled={loading}>
        {loading ? "Sending..." : "Create Reservation"}
      </button>

      <br /><br />

      {result && (
        <pre style={{ background: "#eee", padding: 10 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
