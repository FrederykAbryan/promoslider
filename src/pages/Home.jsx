import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col col-lg-6 d-flex justify-content-center">
          <Card style={{ width: "18rem", alignItems:"center" }}>
            <Card.Img className="img-fluid" variant="top" src="https://www.svgrepo.com/download/92070/discount.svg" />
            <Card.Body>
              {/* <Card.Title>Promo</Card.Title> */}
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text> */}
              <NavLink to={"/promo"}>
                <Button variant="primary" size="lg">Promo</Button>
              </NavLink>
            </Card.Body>
          </Card>
        </div>
        <div className="col col-lg-6 d-flex justify-content-center">
          <Card style={{ width: "18rem", alignItems:"center" }}>
            <Card.Img variant="top" src="https://www.svgrepo.com/download/112870/deal.svg" />
            <Card.Body>
              {/* <Card.Title>Program</Card.Title> */}
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </Card.Text> */}
              <NavLink to={"/program"}>
                <Button variant="primary" size="lg">Program</Button>
              </NavLink>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
