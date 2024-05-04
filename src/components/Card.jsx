import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const SingleCard = ({ player }) => {
  const { name, team, Number, img } = player;
  console.log(player);
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title> {name} </Card.Title>
        <Card.Text>{team}</Card.Text>
        <Card.Text> {Number}</Card.Text>
        <Button variant="accent">more information</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
