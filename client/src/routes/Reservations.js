import React, { useEffect, useContext } from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import { StateContext } from '../context';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import angrypumpkin from '../media/angrypumpkin.jpeg';
import happypumpkin from '../media/happypumpkin.png';

export default function Reservations() {
  const {
    currentGuest,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    reservation,
    setReservation,
    reservations,
    setReservations,
    setForReview,
    getStars,
    averageStars,
    errors,
    setErrors,
    search,
    setSearch,
  } = useContext(StateContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setCheckIn('');
    setCheckOut('');
    setErrors([]);
    setSearch('');
    currentGuest === null && navigate('/');
    Number(id) * 1 === id * 1
      ? fetch(`/bnbs/${id}`)
          .then((r) => r.json())
          .then((d) => {
            setReservation(d);
          })
      : reservation !== null
      ? navigate(`/routes/Reservations/${reservation.id}`)
      : setReservation(null);
    fetch('/reservations')
      .then((r) => r.json())
      .then((d) => {
        setReservations(d);
      });
  }, [
    setCheckIn,
    setCheckOut,
    setErrors,
    setSearch,
    setReservation,
    setReservations,
    navigate,
  ]);

  function createReservation(e) {
    e.preventDefault();
    setErrors([]);
    checkIn > checkOut
      ? setErrors([...errors, "Can't check-out before check-in"])
      : checkIn === '' || checkOut === ''
      ? setErrors([...errors, "Check-in and check-out can't be blank"])
      : fetch('/reservations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            guest_id: currentGuest.id,
            bnb_id: reservation.id,
            check_in: checkIn,
            check_out: checkOut,
          }),
        })
          .then((r) => r.json())
          .then((d) => {
            d.errors ? setErrors(d.errors) : setErrors([]);
            setReservations([...reservations, d]);
            setReservation(null);
          });
  }

  function updateReservation(id, attr, value, other) {
    setErrors([]);
    (attr === 'check_in' && value <= other) ||
    (attr === 'check_out' && other <= value)
      ? fetch(`/reservations/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            [attr]: value,
          }),
        })
          .then((r) => r.json())
          .then((d) => {
            d.errors ? setErrors(d.errors) : setErrors([]);
            setReservations(reservations.map((r) => (r.id === d.id ? d : r)));
            setReservation(null);
          })
      : setErrors("Can't check-out before check-in");
  }

  function deleteReservation(id) {
    setErrors([]);
    fetch(`/reservations/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setReservations(reservations.filter((r) => r.id !== id));
      setReservation(null);
    });
  }

  return (
    <div>
      {reservation !== null ? (
        <>
          <br />
          <Container
            fluid
            className="d-flex flex-row align-items-center justify-content-center"
          >
            <Col xs={11} sm={10} md={9} lg={8}>
              <Button
                variant="dark"
                style={{
                  border: '1px solid rgba(0,0,0,0.5)',
                  borderRadius: '10px',
                  boxShadow: '0px 0px 25px 0px black',
                  paddingBottom: '0px',
                  paddingTop: '0px',
                  width: '100%',
                }}
                onClick={() => navigate(`/routes/Summary/${reservation.id}`)}
              >
                <Row className="d-flex flex-row align-items-center justify-content-center">
                  <Image
                    src={reservation.image_url}
                    alt={reservation.name}
                    style={{
                      borderRight: '1px solid rgba(0,0,0,0.5)',
                      borderTopLeftRadius: '10px',
                      borderBottomLeftRadius: '10px',
                      height: '150px',
                      padding: '0px',
                      width: 'auto',
                    }}
                  />
                  <Col>
                    <Row>
                      <small>{reservation.name}</small>
                    </Row>
                    <Row>
                      <small>
                        {reservation.street +
                          ', ' +
                          reservation.city +
                          ', ' +
                          reservation.state}
                      </small>
                    </Row>
                    <Row>
                      <Col>
                        <small>${reservation.price}</small>
                      </Col>
                      <Col>
                        {reservation.reviews.length > 0 ? (
                          getStars(averageStars(reservation.reviews))
                        ) : (
                          <>
                            <small>No reviews yet...</small>
                          </>
                        )}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Button>
            </Col>
          </Container>
          <p></p>
          <Container
            fluid
            className="d-flex flex-row align-items-center justify-content-center bg-none text-light"
          >
            <form
              className="row justify-content-center align-items-center"
              onSubmit={(e) => createReservation(e)}
            >
              <div
                style={{
                  textAlign: 'center',
                  width: 'auto',
                }}
              >
                <label>Check In</label>
                <p></p>
                <input
                  className="form-control bg-dark text-light"
                  style={{
                    border: 'none',
                    boxShadow: '0px 0px 25px 0px black',
                    cursor: 'pointer',
                    height: '40px',
                  }}
                  type="date"
                  id="checkin"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div
                style={{
                  textAlign: 'center',
                  width: 'auto',
                }}
              >
                <label>Check Out</label>
                <p></p>
                <input
                  className="form-control bg-dark text-light"
                  style={{
                    border: 'none',
                    boxShadow: '0px 0px 25px 0px black',
                    cursor: 'pointer',
                    height: '40px',
                  }}
                  type="date"
                  id="checkout"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <div
                style={{
                  textAlign: 'center',
                  width: 'auto',
                }}
              >
                <br />
                <p></p>
                <Button
                  className="btn-dark"
                  style={{ boxShadow: '0px 0px 25px 0px black' }}
                  type="submit"
                >
                  Book
                </Button>
              </div>
            </form>
          </Container>
        </>
      ) : (
        <Container
          fluid
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ color: 'gray' }}
        >
          <br />
          {reservations.length > 0 ? (
            <Image
              src={happypumpkin}
              alt="happy pumpkin"
              style={{ height: '200px', width: 'auto' }}
            />
          ) : (
            <>
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
            </>
          )}
        </Container>
      )}
      <br />
      {errors.length > 0 ? (
        <Container
          fluid
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <div
            className="alert alert-danger w-50"
            role="alert"
            style={{
              boxShadow: '0px 0px 25px 0px black',
              marginBottom: '25px',
              textAlign: 'center',
            }}
          >
            {errors}
          </div>
        </Container>
      ) : null}
      <Container
        fluid
        className="d-flex flex-row align-items-center justify-content-center"
      >
        <Col xs={11} sm={10} md={9} lg={8}>
          <div
            style={{
              borderTop: '1px solid gray',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <p></p>
            <h1
              style={{
                color: 'white',
              }}
            >
              Your Reservations
            </h1>
          </div>
        </Col>
      </Container>
      <p></p>
      {reservations.length > 0 ? (
        reservations
          .filter((reservation) =>
            reservation.bnb.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((reservation) => (
            <>
              <Container
                key={reservation.id}
                fluid
                className="d-flex flex-row align-items-center justify-content-center"
              >
                <Col xs={11} sm={10} md={9} lg={8}>
                  <Button
                    variant="dark"
                    style={{
                      border: '1px solid rgba(0,0,0,0.5)',
                      borderRadius: '10px',
                      boxShadow: '0px 0px 25px 0px black',
                      cursor: 'default',
                      paddingBottom: '0px',
                      paddingTop: '0px',
                      width: '100%',
                    }}
                  >
                    <Row className="d-flex flex-row align-items-center justify-content-center">
                      <Image
                        src={reservation.bnb.image_url}
                        alt={reservation.bnb.name}
                        style={{
                          borderRight: '1px solid rgba(0,0,0,0.5)',
                          borderTopLeftRadius: '10px',
                          borderBottomLeftRadius: '10px',
                          cursor: 'pointer',
                          height: '150px',
                          padding: '0px',
                          width: 'auto',
                        }}
                        onClick={() =>
                          navigate(`/routes/Summary/${reservation.bnb.id}`)
                        }
                      />
                      <Col>
                        <Row>
                          <small>{reservation.bnb.name}</small>
                        </Row>
                        <Row>
                          <small>
                            {reservation.bnb.street +
                              ', ' +
                              reservation.bnb.city +
                              ', ' +
                              reservation.bnb.state}
                          </small>
                        </Row>
                        <Row
                          className="flex-row align-items-center justify-content-center"
                          style={{
                            marginTop: '5px',
                          }}
                        >
                          <Col>
                            {/* //=== removes date selector if date is past ===//
                        {reservation.check_in >= todaysDate ? ( */}
                            <input
                              className="form-control bg-dark text-light"
                              style={{
                                borderColor: 'rgb(255, 255, 255, 0.25)',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                height: '23px',
                                margin: 'auto',
                                marginBottom: '5px',
                                padding: '0px',
                                width: 'auto',
                              }}
                              type="date"
                              id="checkin"
                              defaultValue={reservation.check_in}
                              onBlur={(e) =>
                                updateReservation(
                                  reservation.id,
                                  'check_in',
                                  e.target.value,
                                  reservation.check_out
                                )
                              }
                            />
                            {/* ) : (
                          <small>
                            {reservation.check_in.replace(/-/g, '/').slice(5) +
                              '/' +
                              reservation.check_in.slice(0, -6)}
                          </small>
                        )} */}

                            {/* //=== removes date selector if date is past ===//
                        {reservation.check_out >= todaysDate ? ( */}
                            <Col>
                              <input
                                className="form-control bg-dark btn-outline-secondary text-light"
                                style={{
                                  borderColor: 'rgb(255, 255, 255, 0.25)',
                                  cursor: 'pointer',
                                  fontSize: '0.8rem',
                                  height: '23px',
                                  margin: 'auto',
                                  padding: '0px',
                                  width: 'auto',
                                }}
                                type="date"
                                id="checkout"
                                defaultValue={reservation.check_out}
                                onBlur={(e) =>
                                  updateReservation(
                                    reservation.id,
                                    'check_out',
                                    e.target.value,
                                    reservation.check_in
                                  )
                                }
                              />
                            </Col>
                            {/* ) : (
                          <Col>
                            <small>
                              {reservation.check_out
                                .replace(/-/g, '/')
                                .slice(5) +
                                '/' +
                                reservation.check_out.slice(0, -6)}
                            </small>
                          </Col>
                        )} */}
                          </Col>
                          <Col>
                            <NavLink
                              to={`/routes/Reviews/${reservation.bnb.id}`}
                              style={{
                                textDecoration: 'none',
                              }}
                              onClick={() => {
                                setForReview(reservation);
                              }}
                            >
                              📝
                            </NavLink>
                          </Col>
                          <Col>
                            <NavLink
                              style={{
                                textDecoration: 'none',
                              }}
                              onClick={() => deleteReservation(reservation.id)}
                            >
                              🗑️
                            </NavLink>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Button>
                </Col>
              </Container>
              <br />
            </>
          ))
          .reverse()
      ) : (
        <Container
          fluid
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ color: 'gray' }}
        >
          <Image
            src={angrypumpkin}
            alt="angry pumpkin"
            style={{ height: '200px', width: 'auto' }}
          />
          <p></p>
          <h2>You don't have any reservations.</h2>
          <br />
        </Container>
      )}
    </div>
  );
}
