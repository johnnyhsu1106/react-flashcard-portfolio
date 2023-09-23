import { Container } from 'react-bootstrap';
import { SearchBar } from './components/SearchBar';
import ProjectCards from './components/ProjectCards';
import { ProjectCardsProvider } from './context/ProjectContext';
import './App.css'

const App = () => {
  return (
    <ProjectCardsProvider>
      <Container>
        <h1 className='mt-4 text-center'>Portfolio </h1>
        <p className='text-center'>flip the card and see how it looks like</p>
        <SearchBar />
        <ProjectCards />
      </Container>
    </ProjectCardsProvider>
  )
}

export default App
