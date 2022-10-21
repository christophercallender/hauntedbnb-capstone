import React, { useEffect, useContext } from 'react';
import { StateContext } from './context';
import { Navbar, Container, Image } from 'react-bootstrap';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import hauntedbnb from './media/hauntedbnb.png';

export default function App() {
  const { currentGuest, setCurrentGuest, search, setSearch } =
    useContext(StateContext);
  const navigate = useNavigate();

  const navStyle = ({ isActive }) =>
    isActive
      ? { color: 'white', textDecoration: 'none', margin: '10px' }
      : { color: 'gray', textDecoration: 'none', margin: '10px' };

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/routes/Home');
    }
  }, [navigate]);

  function handleSignOut() {
    fetch('/sessions', {
      method: 'DELETE',
    }).then(() => {
      fetch('/sessions').then(() => {
        setCurrentGuest(null);
        navigate('/routes/Home');
      });
    });
  }

  return (
    <div>
      {/* {currentGuest === null ? null : (
        <div
          style={{
            color: 'gray',
            textAlign: 'right',
            marginRight: '10px',
          }}
        >
          Signed in as: {currentGuest.username}
        </div>
      )} */}
      <Navbar
        bg="dark"
        expand="sm-md-lg"
        className="sticky-top"
        style={{
          borderTop: '1px solid rgb(255, 255, 255, 0.05)',
          borderBottom: '1px solid rgb(255, 255, 255, 0.05)',
          boxShadow: '0px 0px 25px 0px black',
        }}
      >
        <Container
          fluid
          style={{ color: 'white', marginRight: '10px', marginLeft: '10px' }}
        >
          <NavLink style={navStyle} to="/routes/Home">
            Home
          </NavLink>
          <NavLink style={navStyle} to={'/routes/Summary/'}>
            Summary
          </NavLink>
          <NavLink style={navStyle} to="/routes/Map">
            Map
          </NavLink>
          {currentGuest === null ? (
            <>
              <NavLink style={navStyle} to="/routes/SignUp">
                Sign Up
              </NavLink>
              <NavLink style={navStyle} to="/routes/SignIn">
                Sign In
              </NavLink>
            </>
          ) : (
            <>
              <NavLink style={navStyle} to="/routes/Reservations">
                Reservations
              </NavLink>
              <NavLink style={navStyle} to="/routes/Reviews">
                Reviews
              </NavLink>
              <NavLink
                style={{
                  color: 'gray',
                  textDecoration: 'none',
                  margin: '10px',
                }}
                onClick={() => {
                  handleSignOut();
                }}
              >
                Sign Out
              </NavLink>
            </>
          )}
          <form
            style={{
              width: '20%',
            }}
          >
            <input
              variant="dark"
              className="form-control bg-dark text-light"
              style={{
                borderColor: 'rgb(255, 255, 255, 0.05)',
              }}
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </Container>
      </Navbar>
      <Outlet />
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
        <small
          style={{
            color: 'rgba(125, 125, 125, 1)',
          }}
        >
          Copyright © 2022 Haunted BNB Inc. All rights reserved.
        </small>
        <br />
        <br />
      </Container>
    </div>
  );
}
