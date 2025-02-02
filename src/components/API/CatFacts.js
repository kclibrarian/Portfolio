import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import Particle from "../Particle";
const CatFactComponent = () => {
  const [catFact, setCatFact] = useState("Loading fact...");
  const [key, setKey] = useState(0); // Forces a component refresh

  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      if (data && data.fact) {
        setCatFact(data.fact);
        setKey((prevKey) => prevKey + 1); // Force React to reattach events
      }
    } catch (error) {
      console.error("Error fetching cat fact:", error);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Card className="quote-card-view">
          <Card.Body>
            <div key={key}>
              <h2>Random Cat Fact</h2>
              <p>{catFact}</p>
              <button onClick={fetchCatFact}>Get New Fact</button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default CatFactComponent;
