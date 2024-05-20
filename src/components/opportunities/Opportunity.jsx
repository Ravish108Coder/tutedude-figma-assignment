import './opportunity.css'

const features = [
  {
    id: 1,
    text: 'Official and Verified'
  },
  {
    id: 2,
    text: 'Enhances Credibility'
  }
]

const Opportunity = () => {
  return (
    <div className='opp-cont'>
      <div className='opp-heading'>Unlock <span>6 Certificates</span> & <span>Internship Opportunities!</span></div>
      <div className='opp-box-cont'>
        <div className='opp-box-1'>
          <p className='opp-box-1-heading'>Get 6 Industry Recognized Certificates!</p>
          <img className='img1' src="./image1.jpg" />
          <div className='opp-box-1-footer'>
            {
              features.map((item) => {
                return (
                  <div className='opp-box-1-footer-item' key={item.id}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_1_375" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                        <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1_375)">
                        <path d="M9.57599 16.2504L12.501 14.4754L15.426 16.2504L14.651 12.9254L17.251 10.6754L13.826 10.4004L12.501 7.25044L11.176 10.4004L7.75099 10.6754L10.351 12.9254L9.57599 16.2504ZM12.501 23.3004L9.15099 20.0004H4.50099V15.3504L1.20099 12.0004L4.50099 8.65044V4.00044H9.15099L12.501 0.700439L15.851 4.00044H20.501V8.65044L23.801 12.0004L20.501 15.3504V20.0004H15.851L12.501 23.3004ZM12.501 20.5004L15.001 18.0004H18.501V14.5004L21.001 12.0004L18.501 9.50044V6.00044H15.001L12.501 3.50044L10.001 6.00044H6.50099V9.50044L4.00099 12.0004L6.50099 14.5004V18.0004H10.001L12.501 20.5004Z" fill="#992E9D" />
                      </g>
                    </svg>
                    <span>{item.text}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='opp-box-2'>
          <p className='opp-box-2-heading'>
          Bag Internship Opportunities!
          </p>
          <p className='opp-box-2-description'>
          With every course, we make you not only industry-ready but also help you crack your first internship.
          </p>
          <img className='img2' src="./image3.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Opportunity