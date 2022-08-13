import React, { useState } from "react";

import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategories } from "../../redux/actions/videos.action";
import "./_categoriesBar.scss";

const keywords = [
  "All",
  "react js",
  "valorant",
  "pubg",
  "Angular js",
  
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "Bengali Songs",
  "coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor coder",
  "freelancer",
];
const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch =  useDispatch()

  const handleClick = (value) => {
    setActiveElement(value);  
    if(value === 'All'){
      dispatch(getPopularVideos())
    }else{
    dispatch(getVideosByCategories(value))}
  }
  
  return (
    <div className="CategoriesBar">
      {keywords.map((value, i) => (
        <span onClick={() => handleClick(value)} key={i}  
          className={activeElement === value ? "active" : " "}
          >
          {value}
          
        </span>
        
        
      ))}
    
    </div>
  );
};

export default CategoriesBar;
