import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function card(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
        {props.data.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default card;