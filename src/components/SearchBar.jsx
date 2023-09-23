import { Form } from 'react-bootstrap';
import { useProjectsContext } from '../context/ProjectContext';
import { memo, useEffect, useState } from 'react';

const SearchBar = () => {
  const {
    keyword,
    handleSearchProject,
    handleClearSearch
  } = useProjectsContext();

  const [hasKeyword, setHasKeyword] = useState(false);

  useEffect(() => {
    if (keyword.trim() !== '') {
      setHasKeyword(true);
      return;
    }

    setHasKeyword(false);
  }, [keyword]);
  
  const DeleteBtn = memo(({ hasKeyword }) => {
    if (!hasKeyword) {
      return null;
    }
    return (
      <div 
        className='search-delete-btn'
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
      <DeleteBtn hasKeyword={hasKeyword} />
    </Form.Group>

  )
}

export { SearchBar };