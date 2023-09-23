import { createContext, useContext, useState, useMemo, useRef } from 'react'
import COMPLETED_PROJECTS from '../projects.json';

const ProjectCardsContext = createContext();

const useProjectsContext = () => {
  return useContext(ProjectCardsContext);
}

const ProjectCardsProvider = ({children}) => {
  const [keyword, setKeyword] = useState('');
  const [projects, setProjects] = useState(COMPLETED_PROJECTS);

  const filteredProjects = useMemo(() => {
    if (keyword.trim() === '') {
      return projects;
    }

    return projects.filter((project) => {
      return project.name.toLowerCase().includes(keyword.toLowerCase());
    })  
  }, [keyword, projects])
  
  
  const handleSearchProject = (keyword) => {
    setKeyword(keyword);
  };

  const handleClearSearch = () => {
    setKeyword('');
  }
  
  const context = {
    keyword,
    filteredProjects,
    handleSearchProject,
    handleClearSearch
  };

  return (
    <ProjectCardsContext.Provider value={context}>
      {children}
    </ProjectCardsContext.Provider>
  )
}

export { useProjectsContext, ProjectCardsProvider};
