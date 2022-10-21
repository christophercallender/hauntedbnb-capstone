import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { StateContext } from '../context';

export default function SignIn() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    currentGuest,
    setCurrentGuest,
    errors,
    setErrors,
  } = useContext(StateContext);
  const navigate = useNavigate();

  useEffect(() => {
    currentGuest !== null && navigate('/routes/Home');
    setUsername('');
    setPassword('');
    setErrors([]);
  }, [currentGuest, navigate]);

  function handleSignIn(e) {
    e.preventDefault();
    fetch('/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.errors) {
          setErrors(d.errors);
          setUsername('');
          setPassword('');
        } else {
          setCurrentGuest(d);
          setErrors([]);
          navigate('/routes/Home');
        }
      });
  }

  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        color: 'gray',
      }}
    >
      <h1
        style={{
          color: 'white',
          margin: 'auto',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        Sign In
      </h1>
      {errors.map((error) => (
        <div
          key={error}
          className="alert alert-danger w-50"
          role="alert"
          style={{
            boxShadow: '0px 0px 25px 0px black',
            marginBottom: '25px',
            textAlign: 'center',
          }}
        >
          {error}
        </div>
      ))}
      <Container>
        <form onSubmit={(e) => handleSignIn(e)}>
          <Row
            fluid
            className="d-flex flex-row align-items-center justify-content-center"
          >
            <Col xs={2} sm={2} md={2} lg={1} xl={1}>
              <label
                className="row row-form-label"
                style={{
                  textAlign: 'right',
                }}
              >
                Username
              </label>
            </Col>
            <Col xs={7} sm={6} md={5} lg={4} xl={3}>
              <input
                className="form-control bg-dark text-light"
                style={{
                  border: 'none',
                  boxShadow: '0px 0px 25px 0px black',
                }}
                type="text"
                id="usernamesignin"
                value={username}
                onFocus={() => setErrors([])}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Col>
            {/* <label className="col col-form-label"></label> */}
          </Row>
          <br />
          <Row
            fluid
            className="d-flex flex-row align-items-center justify-content-center"
          >
            <Col xs={2} sm={2} md={2} lg={1} xl={1}>
              <label
                className="row row-form-label"
                style={{
                  textAlign: 'right',
                }}
              >
                Password
              </label>
            </Col>
            <Col xs={7} sm={6} md={5} lg={4} xl={3}>
              <input
                className="form-control bg-dark text-light"
                style={{
                  border: 'none',
                  boxShadow: '0px 0px 25px 0px black',
                }}
                type="password"
                id="passwordsignin"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col
              style={{
                textAlign: 'center',
              }}
            >
              <Button
                style={{
                  border: 'none',
                  boxShadow: '0px 0px 25px 0px black',
                }}
                variant="dark"
                type="submit"
              >
                Submit
              </Button>
            </Col>
          </Row>
          <br />
        </form>
      </Container>
    </Container>
  );
}
