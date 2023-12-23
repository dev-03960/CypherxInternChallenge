
import './App.css'
import Navbar from './Components/Navbar'
import GroupingMain from './Components/GroupingMain'
import { useState } from 'react';
import { useEffect } from 'react';
function App() {

  const [groupingOption, setGroupingOption] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  // Function to update the grouping option
  const updateGroupingOption = (newOption) => {
    setGroupingOption(newOption);
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <>
    <div className={`theme-dark ${isDarkMode ? 'dark' : ''}`}>
    <Navbar groupingOption={groupingOption} updateGroupingOption={updateGroupingOption}
     toggleTheme={toggleTheme}/>
<GroupingMain groupingOption={groupingOption}/>
    </div>
    
    </>
  )
}

export default App
