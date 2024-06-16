import { Col } from "react-bootstrap";
export const ProjectCard=({title,description,imgUrl, Sourse , output})=>{
return(
    <Col sm ={6} md={4}>
        <div className="proj-imgbx">
            <img src = {imgUrl}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
                <br></br>
                <br></br>
                <span>click here for source code:</span>
                <a href={Sourse}>Link</a>
                {/* <a href={output}>link</a> */}
                
            </div>

        </div>

    </Col>
)
}