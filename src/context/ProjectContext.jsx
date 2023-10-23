import { createContext, useContext, useState, useMemo, useRef, useEffect } from 'react'
import COMPLETED_PROJECTS from '../projects.json';

const ProjectCardsContext = createContext();

const useProjectsContext = () => {
  return useContext(ProjectCardsContext);
}

const ProjectCardsProvider = ({children}) => {
  const [keyword, setKeyword] = useState('');
  const [projects, setProjects] = useState(COMPLETED_PROJECTS);

  // Handle ESC key is pressed
  useEffect(() => {
    const handler = (e) => {
      if (e.keyCode !== 27) {
        return;
      };
      setKeyword('');
    }

    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    }
  }, []);

  const filteredProjects = useMemo(() => {
    if (keyword.trim() === '') {
      return projects;
    }

    return projects.filter((project) => {
      return project.name.toLowerCase().includes(keyword.toLowerCase());
    })  
  }, [keyword, projects])
  
  
  const handleProjectSearch = (keyword) => {
    setKeyword(keyword);
  };

  const handleSearchClear = () => {
    setKeyword('');
  }
  
  const context = {
    keyword,
    filteredProjects,
    handleProjectSearch,
    handleSearchClear
  };

  return (
    <ProjectCardsContext.Provider value={context}>
      {children}
    </ProjectCardsContext.Provider>
  )
}

export { useProjectsContext, ProjectCardsProvider};
