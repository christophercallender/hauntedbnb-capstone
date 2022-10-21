import React, { useEffect, useContext } from 'react';
import { Container, Card, Col, Row, Image, Button } from 'react-bootstrap';
import { StateContext } from '../context';
import { useNavigate } from 'react-router-dom';
import hauntedbnb from '../media/hauntedbnb.png';

export default function Home() {
  const {
    currentGuest,
    setBnb,
    bnbs,
    setBnbs,
    setReservation,
    setReview,
    getStars,
    averageStars,
    search,
    setSearch,
  } = useContext(StateContext);
  const navigate = useNavigate();

  useEffect(() => {
    setSearch('');
    fetch('/bnbs')
      .then((r) => r.json())
      .then((d) => {
        setBnbs(d);
      });
  }, [setSearch, setBnbs]);

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <Image
        src={hauntedbnb}
        style={{
          width: '33em',
        }}
      />
      <Container fluid>
        <Row className="d-flex align-items-center justify-content-center">
          {bnbs
            .filter((bnb) =>
              bnb.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((bnb) => (
              <Col key={bnb.id} xs={12} sm={6} md={4} lg={3}>
                <Container
                  key={bnb.id}
                  style={{
                    border: '1px solid rgb(50, 50, 50)',
                    borderRadius: '1em',
                    boxShadow: '0px 0px 25px 0px black',
                    width: '100%',
                  }}
                >
                  <Row>
                    <Button
                      key={bnb.id}
                      variant="dark"
                      style={{
                        border: '1px solid rgba(0,0,0,0.5)',
                        borderTopLeftRadius: '1em',
                        borderTopRightRadius: '1em',
                        borderBottomLeftRadius: currentGuest ? '0em' : '1em',
                        borderBottomRightRadius: currentGuest ? '0em' : '1em',
                        margin: '0px',
                        padding: '0px',
                        textAlign: 'center',
                      }}
                      onClick={() => {
                        setBnb(bnb);
                        navigate(`/routes/Summary/${bnb.id}`);
                      }}
                    >
                      <Card.Img
                        src={bnb.image_url}
                        style={{
                          borderTopLeftRadius: '1em',
                          borderTopRightRadius: '1em',
                          borderBottom: '2px solid black',
                        }}
                      />
                      <Card.Body
                        style={{
                          padding: '10px',
                        }}
                      >
                        <Card.Text>{bnb.name}</Card.Text>
                        <small>
                          {bnb.street + ', ' + bnb.city + ', ' + bnb.state}
                        </small>
                        <Row>
                          <Col>
                            <small>${bnb.price}</small>
                          </Col>
                          <Col>
                            {bnb.reviews.length > 0 ? (
                              getStars(averageStars(bnb.reviews))
                            ) : (
                              <>
                                <small>No reviews yet...</small>
                              </>
                            )}
                          </Col>
                        </Row>
                      </Card.Body>
                    </Button>
                  </Row>
                  {currentGuest ? (
                    <Row>
                      {bnb.reservations.filter(
                        (reservation) =>
                          reservation.guest_id === currentGuest.id
                      ).length > 0 ? (
                        <>
                          <Button
                            style={{
                              border: '1px solid rgba(0,0,0,0.5)',
                              borderTopLeftRadius: '0em',
                              borderTopRightRadius: '0em',
                              borderBottomLeftRadius: '1em',
                              borderBottomRightRadius: '0em',
                              height: '4em',
                              margin: '0px',
                              padding: '0px',
                              width: '50%',
                            }}
                            variant="dark"
                            onClick={() => {
                              setBnb(bnb);
                              setReservation(bnb);
                              navigate(`/routes/Reservations/${bnb.id}`);
                            }}
                          >
                            <small>Book a</small>
                            <br />
                            <small>Reservation</small>
                          </Button>
                          <Button
                            style={{
                              border: '1px solid rgba(0,0,0,0.5)',
                              borderTopLeftRadius: '0em',
                              borderTopRightRadius: '0em',
                              borderBottomLeftRadius: '0em',
                              borderBottomRightRadius: '1em',
                              height: '4em',
                              margin: '0px',
                              padding: '0px',
                              width: '50%',
                            }}
                            variant="dark"
                            onClick={() => {
                              setBnb(bnb);
                              setReview(bnb);
                              navigate(`/routes/Reviews/${bnb.id}`);
                            }}
                          >
                            <small>Write a</small>
                            <br />
                            <small>Review</small>
                          </Button>
                        </>
                      ) : (
                        <Button
                          style={{
                            border: '1px solid rgba(0,0,0,0.5)',
                            borderTopLeftRadius: '0em',
                            borderTopRightRadius: '0em',
                            borderBottomLeftRadius: '1em',
                            borderBottomRightRadius: '1em',
                            height: '4em',
                            margin: '0px',
                            padding: '0px',
                            width: '100%',
                          }}
                          variant="dark"
                          onClick={() => {
                            setBnb(bnb);
                            setReservation(bnb);
                            navigate(`/routes/Reservations/${bnb.id}`);
                          }}
                        >
                          <small>Book a</small>
                          <br />
                          <small>Reservation</small>
                        </Button>
                      )}
                    </Row>
                  ) : null}
                </Container>
                <br />
              </Col>
            ))}
        </Row>
      </Container>
    </Container>
  );
}
