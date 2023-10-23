import { Form } from 'react-bootstrap';
import { useProjectsContext } from '../context/ProjectContext';
import { memo, useEffect, useState } from 'react';

const SearchBar = () => {
  const {
    keyword,
    handleProjectSearch,
    handleSearchClear
  } = useProjectsContext();

  const hasKeyword = keyword !== '';
  
  const DeleteBtn = memo(({ 
    hasKeyword,
    onClickDeleteBtn
  }) => {
    if (!hasKeyword) {
      return null;
    }
    return (
      <div 
        className='search-delete-btn'
        onClick={onClickDeleteBtn}
      >
        &times;
      </div> 
    )
  });

  return (
    <Form.Group className="position-relative">
      <Form.Control
        className='w-50 mt-3 mb-5 mx-auto'
        type='text'
        placeholder='Search by keyword'
        value={keyword}
        onChange={(e) => { handleProjectSearch(e.target.value) }}
      />
      <DeleteBtn hasKeyword={hasKeyword} onClickDeleteBtn={handleSearchClear} />
    </Form.Group>

  )
}

export { SearchBar };