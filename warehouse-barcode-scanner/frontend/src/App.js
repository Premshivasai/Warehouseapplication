import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function App() {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
    scanner.render(
      (decodedText) => {
        console.log("Scanned code:", decodedText);
        fetch("https://localhost:5001/api/scan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            barcodeValue: decodedText,
            timestamp: new Date().toISOString(),
          }),
        })
          .then((res) => res.json())
          .then((data) => alert(data.message))
          .catch((err) => alert("Failed to send scan!"));
        scanner.clear();
      },
      (error) => console.warn("Scan failed:", error)
    );
  }, []);

  return (
    <div>
      <h1>Warehouse Scanner</h1>
      <div id="reader" style={{ width: "300px" }}></div>
    </div>
  );
}

export default App;
