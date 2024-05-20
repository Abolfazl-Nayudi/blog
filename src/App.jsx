import './App.css';
import BlogForm from './components/BlogForm/BlogForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogList from './components/BlogList/BlogList';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Container>
      <BlogForm />
      <section className="mt-3">
        <BlogList />
      </section>
    </Container>
  );
}

export default App;
