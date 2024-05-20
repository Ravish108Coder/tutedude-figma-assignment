import Enroll from './components/enroll/Enroll'
import Feature from './components/features/Feature'
import Navbar from './components/navbar/Navbar'
import Section from './components/sections/Section'
import './App.css'
import Curriculum from './components/curriculum/Curriculum'
import Working from './components/working/Working'
import TopCompanies from './components/top-companies/TopCompanies'
import Opportunity from './components/opportunities/Opportunity'
import WorkingChart from './components/working-chart/WorkingChart'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Section />
      <Enroll />
      <Feature />
      <Curriculum />
      <Working />
      <TopCompanies />
      <Opportunity />
      <WorkingChart />
    </div>
  )
}

export default App
