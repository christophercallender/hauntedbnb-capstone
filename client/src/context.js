import { useState, createContext } from 'react';
// import { Container, Card, Col, Row, Button } from 'react-bootstrap';
// import { v4 as uuid } from 'uuid';

const StateContext = createContext();

function StateProvider({ children }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [currentGuest, setCurrentGuest] = useState(null);
  const [bnb, setBnb] = useState(null);
  const [bnbs, setBnbs] = useState([]);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [reservation, setReservation] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [forReview, setForReview] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [review, setReview] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [bnbReviews, setBnbReviews] = useState([]);
  const [map, setMap] = useState(null);
  const [mapBnb, setMapBnb] = useState(null);
  const [mapImage, setMapImage] = useState(null);
  const [errors, setErrors] = useState([]);
  const [rerender, setRerender] = useState(false);
  const [search, setSearch] = useState('');

  function getStars(rating) {
    return rating === 0 ? (
      <span>☆ ☆ ☆ ☆ ☆</span>
    ) : rating === 1 ? (
      <span>★ ☆ ☆ ☆ ☆</span>
    ) : rating === 2 ? (
      <span>★ ★ ☆ ☆ ☆</span>
    ) : rating === 3 ? (
      <span>★ ★ ★ ☆ ☆</span>
    ) : rating === 4 ? (
      <span>★ ★ ★ ★ ☆</span>
    ) : rating === 5 ? (
      <span>★ ★ ★ ★ ★</span>
    ) : null;
  }

  function averageStars(reviews) {
    return (
      (
        reviews.map((review) => review.rating).reduce((a, b) => a + b, 0) /
        reviews.map((review) => review.rating).length
      ).toFixed(0) * 1
    );
  }

  return (
    <StateContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        username,
        setUsername,
        password,
        setPassword,
        confirmation,
        setConfirmation,
        currentGuest,
        setCurrentGuest,
        bnb,
        setBnb,
        bnbs,
        setBnbs,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        reservation,
        setReservation,
        reservations,
        setReservations,
        review,
        setReview,
        reviews,
        setReviews,
        forReview,
        setForReview,
        reviewText,
        setReviewText,
        reviewRating,
        setReviewRating,
        bnbReviews,
        setBnbReviews,
        getStars,
        averageStars,
        map,
        setMap,
        mapBnb,
        setMapBnb,
        mapImage,
        setMapImage,
        errors,
        setErrors,
        rerender,
        setRerender,
        search,
        setSearch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export { StateContext, StateProvider };
