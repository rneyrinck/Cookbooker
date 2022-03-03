import { Col, Container, Row } from "react-bootstrap";

const Landing = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          This is a simple app to add and store authors of cookbooks, and then
          display a list of cookbooks that can be added to as well. Built with
          react/react-bootstrap on the front end, express/node on the backend, database managed by mongoDB and hosted on Heroku.
        </Col>
        <Col><img src="https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk=" alt=""/></Col>
        {/* <Col>Quote ffrom famous chef</Col> */}
      </Row>
      
      <Row>
        {/* <Col><div className="block"></div></Col> */}
        <Col><img src="https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?k=20&m=1220017909&s=170667a&w=0&h=4I_l8ZyiZ8sebPsRo6UpFmdrV-MZgEvxb3smE-TbgLE=" alt=""/></Col>
        <Col>
          <em>"The best ingredient is a good recipe"</em>
          <br />- Robert Neyrinck
        </Col>
      </Row>
    </Container>
  );
};
export default Landing;
