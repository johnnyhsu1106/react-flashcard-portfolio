import { Form } from 'react-bootstrap';
import { useProjectsContext } from '../context/ProjectContext';

const SearchBar = () => {
  const {
    query,
    handleSearchProject
  } = useProjectsContext();

  return (
    <Form.Control
      className='w-50 mt-5 mb-5 mx-auto'
      type='text'
      placeholder='Search by keyword'
      value={query}
      onChange={(e) => { handleSearchProject(e.target.value) }}
    >
    </Form.Control>
  )
}

export { SearchBar };