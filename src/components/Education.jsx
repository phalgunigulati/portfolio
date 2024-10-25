import React from 'react'
import education from './data/education.json'

const Education = () => {
  return (
    <>
    <div className="container ex" id="education">
        <h1 style={{ color: "rgb(103, 235, 252)" }}>EDUCATION</h1>
        {education.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in" data-aos-duration="1000"
              >
                <div className="right">
                  <h2>{data.university}</h2>
                  <h3>{data.college}</h3>
                  <h4>{data.specialization}</h4>
                  <h5>Start Date: {data.startDate}</h5>
                  <h5>End Date: {data.endDate}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default Education