import './curriculum.css'

const courses = [
    {
        id: 1,
        name: 'C++',
        content: 'Learn C++ for strong programming fundamentals.',
    },
    {
        id: 2,
        name: 'MERN Stack',
        content: 'Master the MERN stack for high-demand projects.',
    },
    {
        id: 3,
        name: 'Data Structure & Algorithm',
        content: 'Excel in Data Structures and Algorithms for interview success.',
    },
    {
        id: 4,
        name: 'Competitve Programming',
        content: 'Excel in Data Structures and Algorithms for interview success.',
    },
]

const Curriculum = () => {
    return (
        <div className='curriculum-cont'>
            <div className="curriculum-cont-div1">
                DATASCIENCE COURSE LEARNING PATH
            </div>
            <div className="curriculum-cont-div2">
                <span>Data Science</span> Course Curriculum
            </div>
            <div className="curriculum-cont-div3">
                {
                    courses.map((course) => {
                        return (
                            <div key={course.id} className='each-course'>
                                <div className='each-course-left-div'>
                                    <div className='each-course-left-div-name'>{course.name}</div>
                                    <div className='each-course-left-div-content'>{course.content}</div>
                                </div>
                                <div className='each-course-right-div'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_210)">
                                            <path d="M23.0382 8.88408C20.6097 5.13731 16.4637 2.85854 11.999 2.81665C7.53424 2.85854 3.38823 5.13731 0.959808 8.88408C-0.319946 10.7622 -0.319946 13.2322 0.959808 15.1103C3.38686 18.8594 7.53311 21.1405 11.999 21.1838C16.4637 21.1419 20.6097 18.8631 23.0382 15.1164C24.3206 13.2368 24.3206 10.7636 23.0382 8.88408ZM20.5533 13.4075C18.6992 16.3483 15.4753 18.1424 11.999 18.1682C8.52265 18.1425 5.29872 16.3483 3.44463 13.4075C2.86662 12.5583 2.86662 11.4421 3.44463 10.5929C5.29867 7.6522 8.5226 5.85805 11.999 5.83227C15.4753 5.858 18.6992 7.6522 20.5533 10.5929C21.1313 11.4421 21.1313 12.5583 20.5533 13.4075Z" fill="#B73BBE" />
                                            <path d="M11.9989 16.0209C14.2195 16.0209 16.0197 14.2207 16.0197 12.0001C16.0197 9.77943 14.2195 7.97925 11.9989 7.97925C9.77824 7.97925 7.97806 9.77943 7.97806 12.0001C7.97806 14.2207 9.77824 16.0209 11.9989 16.0209Z" fill="#B73BBE" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_210">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>View Curriculum</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Curriculum