import { Button, Container, Form } from 'react-bootstrap';
import './BlogForm.css';
import { useState } from 'react';
import { createBlog } from '../../API/blogApi';
export default function BlogForm() {
  const initialValues = { title: '', date: '', description: '' };
  const [formData, setFormData] = useState(initialValues);
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createBlog(formData);
    setFormData(initialValues);
  };

  return (
    <Container fluid className="d-flex py-5 justify-content-center form-box">
      <div className="w-75">
        <Form className="d-flex flex-column " onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </Form.Group>

          <Button
            type="submit"
            variant="outline-primary align-self-center py-2 px-5"
          >
            Add Blog
          </Button>
        </Form>
      </div>
    </Container>
  );
}
