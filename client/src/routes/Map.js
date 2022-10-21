import React, { useEffect, useContext } from 'react';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import { StateContext } from '../context';
import { useNavigate } from 'react-router-dom';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

export default function Map() {
  const { bnbs, setBnbs, map, setMap, mapBnb, setMapBnb, search, setSearch } =
    useContext(StateContext);
  const navigate = useNavigate();

  useEffect(() => {
    setMap(null);
    setMapBnb(null);
    setSearch('');
    fetch('/bnbs')
      .then((r) => r.json())
      .then((d) => {
        setBnbs(d);
      });
  }, [setMap, setMapBnb, setSearch, setBnbs]);

  return (
    map && (
      <LoadScript googleMapsApiKey={map}>
        <Container
          fluid
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <br />
          {mapBnb ? (
            <Button
              variant="dark"
              style={{
                border: '1px solid rgba(0,0,0,0.5)',
                borderRadius: '10px',
                boxShadow: '0px 0px 25px 0px black',
                paddingBottom: '0px',
                paddingTop: '0px',
                width: '66%',
              }}
              onClick={() => navigate(`/routes/Summary/${mapBnb.id}`)}
            >
              <Row className="d-flex flex-row align-items-center justify-content-center">
                <Image
                  src={mapBnb.image_url}
                  alt={mapBnb.name}
                  style={{
                    borderRight: '1px solid rgba(0,0,0,0.5)',
                    height: '150px',
                    padding: '0px',
                    width: 'auto',
                  }}
                />
                <Col>
                  <Row>
                    <h1
                      style={{
                        color: 'white',
                        margin: 'auto',
                        padding: '20px',
                      }}
                    >
                      {mapBnb.name}
                    </h1>
                  </Row>
                </Col>
              </Row>
            </Button>
          ) : (
            <Button
              className="bg-dark"
              style={{
                border: '1px solid rgba(0,0,0,0.5)',
                borderRadius: '10px',
                boxShadow: '0px 0px 25px 0px black',
                cursor: 'default',
                paddingBottom: '0px',
                paddingTop: '0px',
                height: '150px',
                width: '66%',
              }}
            >
              <h1
                style={{
                  color: 'white',
                  margin: 'auto',
                  padding: '20px',
                }}
              >
                Hover over a ghost to see its BNB!
              </h1>
            </Button>
          )}
          <br />
        </Container>
        <Container
          fluid
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            borderTop: '1px solid rgb(50, 50, 50)',
            borderBottom: '1px solid rgb(50, 50, 50)',
          }}
        >
          <GoogleMap
            mapContainerStyle={{
              height: 'calc(100vh - 260px)',
              width: '100%',
            }}
            options={{
              mapId: 'b6321eeaaa1a573a',
            }}
            center={mapBnb === null ? { lat: 39, lng: -96 } : {}}
            zoom={4}
          >
            {bnbs.length > 0 &&
              bnbs
                .filter((bnb) =>
                  bnb.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((bnb) => (
                  <Marker
                    key={bnb.id}
                    position={{
                      lat: Number(bnb.coordinates.split(', ')[0]),
                      lng: Number(bnb.coordinates.split(', ')[1]),
                    }}
                    style={{ height: '50px', width: '50px' }}
                    icon={{
                      url: '../media/mapghost.png',
                    }}
                    animation={1}
                    onMouseOver={() => {
                      setMapBnb(bnb);
                    }}
                    onClick={() => navigate(`/routes/Summary/${bnb.id}`)}
                  />
                ))}
          </GoogleMap>
        </Container>
      </LoadScript>
    )
  );
}
