import './topCompanies.css'

const logos = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
]

const TopCompanies = () => {
  return (
    <div className='top-companies-cont'>
        <div className='top-companies-heading'>Top Companies Hiring <span>Data Scientist</span></div>
        <div className='logos-cont'>
            {
                logos.map((logo)=>{
                    return (
                        <div key={logo.id}>Logo</div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TopCompanies