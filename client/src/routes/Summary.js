import React, { useEffect, useContext } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import { StateContext } from '../context';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

export default function Summary() {
  const {
    currentGuest,
    bnb,
    setBnb,
    setReservation,
    setReview,
    bnbReviews,
    setBnbReviews,
    getStars,
    averageStars,
    search,
    setSearch,
  } = useContext(StateContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setSearch('');
    Number(id) * 1 === id * 1
      ? fetch(`/bnbs/${id}`)
          .then((r) => r.json())
          .then((d) => {
            setBnb(d);
          })
          .then(() => {
            fetch(`/bnb_reviews/${id}`)
              .then((r) => r.json())
              .then((d) => {
                setBnbReviews(d);
              });
          })
      : bnb !== null
      ? navigate(`/routes/Summary/${bnb.id}`)
      : setBnb(null);
  }, [navigate]);

  return bnb === null ? (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        color: 'gray',
      }}
    >
      <br />
      <h2>
        Select a Haunted BNB from the
        <NavLink
          to="/routes/Home"
          style={{
            color: 'rgba(0,255,0,0.75)',
            cursor: 'pointer',
            margin: '10px',
            textDecoration: 'none',
          }}
        >
          Home
        </NavLink>
        page!
      </h2>
    </Container>
  ) : (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <h1
        style={{
          color: 'white',
          margin: 'auto',
          padding: '20px',
        }}
      >
        {bnb.name}
      </h1>
      <Row className="d-flex flex-row align-items-center justify-content-center">
        <Col
          className="bg-none text-white"
          style={{
            border: '1px solid rgb(50, 50, 50)',
            borderRadius: '1em',
            boxShadow: '0px 0px 25px 0px black',
          }}
          xs={10}
          sm={10}
          md={8}
          lg={6}
        >
          <Row>
            <Card
              className="bg-dark"
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
            >
              <Card.Img
                src={bnb.image_url}
                style={{
                  borderTopLeftRadius: '1em',
                  borderTopRightRadius: '1em',
                  borderBottomLeftRadius: '0em',
                  borderBottomRightRadius: '0em',
                  borderBottom: '2px solid black',
                }}
              />
              <Card.Body
                style={{
                  padding: '10px',
                }}
              >
                <Card.Text>
                  {bnb.street + ', ' + bnb.city + ', ' + bnb.state}
                </Card.Text>
                <Card.Text style={{ textAlign: 'left' }}>
                  {bnb.summary}
                </Card.Text>
                <Row>
                  <Col>${bnb.price}</Col>
                  <Col>
                    {bnb.reviews.length > 0 ? (
                      getStars(averageStars(bnb.reviews))
                    ) : (
                      <>
                        <Card.Text>No reviews yet...</Card.Text>
                      </>
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
          {currentGuest ? (
            <Row>
              {bnb.reservations.filter(
                (reservation) => reservation.guest_id === currentGuest.id
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
                  <small>Book a Reservation</small>
                </Button>
              )}
            </Row>
          ) : null}
        </Col>
      </Row>
      <br />
      <Container fluid style={{ width: '90%' }}>
        <Row className="d-flex align-items-center justify-content-center">
          {bnbReviews.length > 0
            ? bnbReviews
                .filter((review) =>
                  review.text.toLowerCase().includes(search.toLowerCase())
                )
                .map((review) => (
                  <Col key={review.id} xs={6} sm={6} md={4} lg={3}>
                    <Card
                      className="bg-dark text-white "
                      style={{
                        border: '1px solid rgba(0,0,0,0.5)',
                        borderRadius: '10px',
                        boxShadow: '0px 0px 25px 0px black',
                        margin: 'auto',
                        padding: '0px',
                        textAlign: 'center',
                        width: '100%',
                      }}
                    >
                      <Card.Body>
                        <Card.Text>{getStars(review.rating)}</Card.Text>
                        <Card.Text>{review.text}</Card.Text>
                        <small>
                          {review.guest.first_name +
                            ' ' +
                            review.guest.last_name}
                        </small>
                        <br />
                        <small>
                          {review.reservation.check_in
                            .replace(/-/g, '/')
                            .slice(5) +
                            '/' +
                            review.reservation.check_in.slice(2, -6) +
                            ' — ' +
                            review.reservation.check_out
                              .replace(/-/g, '/')
                              .slice(5) +
                            '/' +
                            review.reservation.check_out.slice(2, -6)}
                        </small>
                      </Card.Body>
                    </Card>
                    <br />
                  </Col>
                ))
                .reverse()
            : null}
        </Row>
      </Container>
    </Container>
  );
}
