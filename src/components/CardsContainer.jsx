import React from "react";
import SingleCard from "./Card";
import { Container } from "react-bootstrap";
const players = [
  {
  name: "Joueur1",
	team: "team1",
	nationality:"tunisia",
	Number: "10",
	age:"26",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
  name: "Joueur2",
	team: "team2",
	nationality:"tunisia",
	Number: "10",
	age:"26",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  }, 
  {
  name: "Joueur3",
	team: "team3",
	nationality:"tunisia",
	Number: "10",
	age:"26",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  }, 
  {
  name: "Joueur4",
	team: "team4",
	nationality:"tunisia",
	Number: "10",
	age:"26",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },  
  {
  name: "Joueur5",
	team: "team5",
	nationality:"tunisia",
	Number: "10",
	age:"26",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
    {
  name: "Joueur6",
	team: "team5",
	nationality:"tunisia",
	Number: "10",
	age:"26",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },

];

const CardsContainer = () => {
  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {players.map((v, i) => (
        <SingleCard key={i} player={v} />
      ))}
    </Container>
  );
};

export default CardsContainer;
