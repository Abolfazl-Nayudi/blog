import { Button, Card } from 'react-bootstrap';
import { deleteBlog } from '../../API/blogApi';
export default function BlogShow({ post }) {
  const { description, title, date, _id } = post;

  const handleDeleteClick = async (e) => {
    await deleteBlog(_id);
  };

  return (
    <Card className="w-75">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Button variant="danger" onClick={handleDeleteClick}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
