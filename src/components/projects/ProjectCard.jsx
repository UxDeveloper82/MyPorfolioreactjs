import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard= ({title, description,link, imgUrl}) => (
    <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx">
      <a href={link}>
      <img src={imgUrl} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div> 
      </a>
    </div>
  </Col>
  )


export default ProjectCard