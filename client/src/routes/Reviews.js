import React, { useEffect, useContext } from 'react';
import { Container, Col, Row, Image, Dropdown, Button } from 'react-bootstrap';
import { StateContext } from '../context';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import angrypumpkin from '../media/angrypumpkin.jpeg';
import happypumpkin from '../media/happypumpkin.png';

export default function Summary() {
  const {
    currentGuest,
    reviewText,
    setReviewText,
    reviewRating,
    setReviewRating,
    forReview,
    setForReview,
    review,
    setReview,
    reviews,
    setReviews,
    getStars,
    errors,
    setErrors,
    search,
    setSearch,
  } = useContext(StateContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setReviewText('');
    setReviewRating(0);
    setErrors([]);
    setSearch('');
    currentGuest === null && navigate('/');
    Number(id) * 1 === id * 1
      ? fetch(`/bnbs/${id}`)
          .then((r) => r.json())
          .then((d) => {
            setReview(d);
          })
      : review !== null
      ? navigate(`/routes/Reviews/${review.id}`)
      : setReview(null);
    fetch('/reviews')
      .then((r) => r.json())
      .then((d) => {
        setReviews(d);
      });
  }, [
    setReviewText,
    setReviewRating,
    setErrors,
    setSearch,
    setReview,
    setReviews,
    navigate,
  ]);

  function createReview(e) {
    e.preventDefault();
    setErrors([]);
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        guest_id: forReview.guest_id,
        bnb_id: forReview.bnb_id,
        reservation_id: forReview.id,
        text: reviewText,
        rating: reviewRating,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        d.errors ? setErrors(d.errors) : setErrors([]);
        setReviews([...reviews, d]);
        setReview(null);
      });
  }

  function updateReview(id, attr, value) {
    setErrors([]);
    fetch(`/reviews/${id}`, {
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
        setReviews(reviews.map((r) => (r.id === d.id ? d : r)));
        setReview(null);
      });
  }

  function deleteReview(id) {
    setErrors([]);
    fetch(`/reviews/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setReviews(reviews.filter((r) => r.id !== id));
      setReview(null);
    });
  }

  return (
    <div>
      {review !== null && review.reservations.length > 0 ? (
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
                  boxShadow: '0px 0px 25px 0px black',
                  borderRadius: '10px',
                  cursor: 'default',
                  paddingBottom: '0px',
                  paddingTop: '0px',
                  width: '100%',
                }}
              >
                <Row className="d-flex flex-row align-items-center justify-content-center">
                  <Image
                    src={review.image_url}
                    alt={review.name}
                    style={{
                      borderRight: '1px solid rgba(0,0,0,0.5)',
                      borderTopLeftRadius: '10px',
                      borderBottomLeftRadius: '10px',
                      cursor: 'pointer',
                      height: '150px',
                      width: 'auto',
                      padding: '0px',
                    }}
                    onClick={() => navigate(`/routes/Summary/${review.id}`)}
                  />
                  <Col>
                    <Row>
                      <small>{review.name}</small>
                    </Row>
                    <Row className="d-flex flex-row align-items-center justify-content-center">
                      <Col xs={9} sm={9} md={6} lg={5} xl={4}>
                        <Dropdown>
                          <Dropdown.Toggle
                            id="dropdown-basic"
                            variant="dark"
                            className="form-control btn-sm bg-dark text-light"
                            style={{
                              marginTop: '5px',
                              borderColor: 'rgb(255, 255, 255, 0.25)',
                              cursor: 'pointer',
                            }}
                          >
                            {forReview === null
                              ? 'Select a Reservation'
                              : forReview.check_in.replace(/-/g, '/').slice(5) +
                                '/' +
                                forReview.check_in.slice(2, -6) +
                                ' - ' +
                                forReview.check_out
                                  .replace(/-/g, '/')
                                  .slice(5) +
                                '/' +
                                forReview.check_out.slice(2, -6)}
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            variant="dark"
                            className="bg-dark text-light"
                            style={{ borderColor: 'rgb(255, 255, 255, 0.25)' }}
                          >
                            {review.reservations.map((r) => (
                              <Dropdown.Item
                                key={r.id}
                                onClick={() => {
                                  setForReview(r);
                                }}
                              >
                                {r.check_in.replace(/-/g, '/').slice(5) +
                                  '/' +
                                  r.check_in.slice(2, -6) +
                                  ' - ' +
                                  r.check_out.replace(/-/g, '/').slice(5) +
                                  '/' +
                                  r.check_out.slice(2, -6)}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Button>
            </Col>
          </Container>
          <br />
          {forReview !== null &&
          reviews.filter((review) => review.reservation.id === forReview.id)
            .length > 0 ? (
            <Container
              fluid
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <p></p>
              <div
                className="alert alert-danger w-50"
                role="alert"
                style={{
                  boxShadow: '0px 0px 25px 0px black',
                  textAlign: 'center',
                }}
              >
                You have already reviewed this reservation.
                <br />
                You can edit or delete your review below.
              </div>
            </Container>
          ) : (
            <>
              <Container
                fluid
                className="d-flex flex-row align-items-center justify-content-center"
              >
                <Col xs={11} sm={10} md={9} lg={8}>
                  <form
                    className="d-flex flex-row align-items-center justify-content-center"
                    style={{
                      borderRadius: '10px',
                      height: '100%',
                      width: '100%',
                    }}
                    onSubmit={(e) => createReview(e)}
                  >
                    <textarea
                      className="form-control bg-dark text-light"
                      style={{
                        border: '1px solid rgba(0,0,0,0.5)',
                        boxShadow: '0px 0px 25px 0px black',
                        height: '120px',
                        width: 'calc(100% - 120px)',
                      }}
                      placeholder="Write a review (max 500 characters)"
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                    />
                    {
                      <div
                        style={{
                          color: 'gray',
                          cursor: 'pointer',
                          marginLeft: '10px',
                          marginRight: '10px',
                        }}
                      >
                        {[
                          [5, 4],
                          [4, 3],
                          [3, 2],
                          [2, 1],
                          [1, 0],
                        ].map(([a, b]) => (
                          <div
                            key={`star-${a}`}
                            onClick={() =>
                              setReviewRating(reviewRating === a ? b : a)
                            }
                          >
                            {reviewRating < a ? '☆' : '★'}
                          </div>
                        ))}
                      </div>
                    }
                    <Button
                      className="btn-dark"
                      style={{
                        border: '1px solid rgba(0,0,0,0.5)',
                        boxShadow: '0px 0px 25px 0px black',
                        height: '120px',
                        width: '120px',
                      }}
                      type="submit"
                    >
                      Post
                    </Button>
                  </form>
                </Col>
              </Container>
            </>
          )}
        </>
      ) : (
        <Container
          fluid
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ color: 'gray' }}
        >
          <br />
          {reviews.length > 0 ? (
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
                    margin: '10px',
                    cursor: 'pointer',
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
              Your Reviews
            </h1>
          </div>
        </Col>
      </Container>
      <p></p>
      {reviews.length > 0 ? (
        reviews
          .filter(
            (review) =>
              review.bnb.name.toLowerCase().includes(search.toLowerCase()) ||
              review.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((review) => (
            <>
              <Container
                key={review.id}
                fluid
                className="d-flex flex-row align-items-center justify-content-center"
              >
                <Col xs={11} sm={10} md={9} lg={8}>
                  <Row
                    fluid
                    className="d-flex flex-row align-items-center justify-content-center"
                  >
                    <Button
                      variant="dark"
                      style={{
                        border: '1px solid rgba(0,0,0,0.5)',
                        borderRadius: '10px',
                        boxShadow: '0px 0px 25px 0px black',
                        cursor: 'default',
                        paddingBottom: '0px',
                        paddingTop: '0px',
                        width: 'calc(100% - 66px)',
                      }}
                    >
                      <Row className="d-flex flex-row align-items-center justify-content-center">
                        <Image
                          src={review.bnb.image_url}
                          alt={review.bnb.name}
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
                            navigate(`/routes/Summary/${review.bnb.id}`)
                          }
                        />
                        <Col>
                          <Row>
                            <small>{review.bnb.name}</small>
                          </Row>
                          <Row>
                            <small>
                              {review.reservation.check_in
                                .replace(/-/g, '/')
                                .slice(5) +
                                '/' +
                                review.reservation.check_in.slice(2, -6) +
                                ' - ' +
                                review.reservation.check_out
                                  .replace(/-/g, '/')
                                  .slice(5) +
                                '/' +
                                review.reservation.check_out.slice(2, -6)}
                            </small>
                          </Row>
                          <Row>
                            <Container
                              fluid
                              className="d-flex flex-column align-items-center justify-content-center"
                            >
                              <textarea
                                className="form-control bg-dark text-light"
                                style={{
                                  borderColor: 'rgb(255, 255, 255, 0.25)',
                                  fontSize: '0.8rem',
                                  margin: '10px',
                                  padding: '10px',
                                  height: 'auto',
                                  width: '100%',
                                }}
                                defaultValue={review.text}
                                onBlur={(e) =>
                                  updateReview(
                                    review.id,
                                    'text',
                                    e.target.value
                                  )
                                }
                              />
                            </Container>
                          </Row>
                        </Col>
                      </Row>
                    </Button>
                    <Container
                      fluid
                      className="d-flex flex-column align-items-center justify-content-center"
                      style={{
                        color: 'gray',
                        cursor: 'pointer',
                        marginLeft: '10px',
                        marginRight: '10px',
                        width: '20px',
                      }}
                    >
                      {[
                        [5, 4],
                        [4, 3],
                        [3, 2],
                        [2, 1],
                        [1, 0],
                      ].map(([a, b]) => (
                        <div
                          key={`card-star-${a}`}
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            updateReview(
                              review.id,
                              'rating',
                              review.rating === a ? b : a
                            );
                          }}
                        >
                          {getStars(review.rating)
                            .props.children.split(' ')
                            .slice(b, a)}
                        </div>
                      ))}
                      <div
                        style={{
                          marginTop: '10px',
                          textDecoration: 'none',
                        }}
                        onClick={() => deleteReview(review.id)}
                      >
                        🗑️
                      </div>
                    </Container>
                  </Row>
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
          <h2>You don't have any reviews.</h2>
          <br />
        </Container>
      )}
    </div>
  );
}
