import { Form } from 'react-bootstrap';
import { useProjectsContext } from '../context/ProjectContext';
import { memo } from 'react';

const SearchBar = () => {
  const {
    keyword,
    handleSearchProject,
    handleClearSearch
  } = useProjectsContext();
  
  const DeleteBtn = memo(({ keyword }) => {
    if (keyword.trim() === '') {
      return null;
    }
    return (
      <div 
        className='delete-btn'
        onClick={handleClearSearch}
      >
        &times;
      </div> 
    )
  })

  return (
    <Form.Group className='search-bar'>
      <Form.Control
        className='w-50 mt-5 mb-5 mx-auto'
        type='text'
        placeholder='Search by keyword'
        value={keyword}
        onChange={(e) => { handleSearchProject(e.target.value) }}
      />
      <DeleteBtn keyword={keyword}/>
    </Form.Group>

  )
}

export { SearchBar };