import React, { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
//import { FaAngleDoubleLeft } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'
function App() {
const [loading, setLoading] = useState(true)
const [jobs,setJobs] = useState([])
const [value, setValue] = useState(0)
  const fetchData=async()=>{
    const response = await fetch(url)
    const data = await response.json()
    setJobs(data)
    setLoading(false)
  }
  useEffect(()=>{
    fetchData()
  },[])
  if(loading){
    return <div className='section loading'>Loading...</div>
  }
  const {company,duties,title,dates}=jobs[value]
  return <section className='section'>
<div className="title">
  <h2>Experience</h2>
  <div className="underline"></div>
</div>
<div className="jobs-center">
  <div className="btn-container">
    {jobs.map((job,index)=>{
       return <button className={`job-btn ${index===value && 'active-btn'}`} onClick={() =>setValue(index)}>     {/* change 'value' which was previously  set 0th index*/}
        {job.company}
       </button>
    })}
  </div>
  {/*jon info*/}
  <article className="job-info">
    <h3>{title}</h3>
    <h4>{company}</h4>
    <p className='job-date'>{dates}</p>
    {duties.map((duty)=>{
      return (
      <p className='job-desc' ><FaAngleDoubleRight/> {duty}</p> 
    )})}
   
  </article>
</div>
<button className="btn">More info</button>
  </section>
}

export default App
