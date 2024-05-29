import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Testing"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
                    <span>{description}</span>
                    <p>
                        <a href={linkUrl} className="btn btn-outline-light">View on Github</a>
                    </p>
        </div>
      </div>
    </Col>
  )
}
