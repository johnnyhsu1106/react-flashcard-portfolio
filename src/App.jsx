import { Container } from 'react-bootstrap';
import { SearchBar } from './components/SearchBar';
import ProjectCards from './components/ProjectCards';
import { ProjectCardsProvider } from './context/ProjectContext';
import './App.css'

const App = () => {
  return (
    <ProjectCardsProvider>
      <Container>
        <h1>Portfolio </h1>
        <p>flip the card to see the thumbnail</p>
        <SearchBar />
        <ProjectCards />
      </Container>
    </ProjectCardsProvider>
  )
}

export default App
