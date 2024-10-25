import React from 'react'
import project from './data/projects.json'

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1 style={{ color: "rgb(103, 235, 252)" }}>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
              >
                <div className="card bg-dark text-light" 
                style={{ 
                width: '18rem', 
                border: '1px solid rgb(99, 231, 248)', 
                boxShadow:  "0px 0px 15px rgb(99, 231, 248)" 
                }}
                data-aos="flip-right" data-aos-duration="1000"
                >
                <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        boxShadow:  "0px 0px 10px rgba(0,0,0,0.9)",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.description}</p>
                      <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
                      <a href={data.source} className="btn btn-primary">Source Code</a>
                    </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects