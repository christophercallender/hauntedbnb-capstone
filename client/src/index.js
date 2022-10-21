import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StateProvider } from './context';
import App from './App';
import Home from './routes/Home';
import Map from './routes/Map';
import Summary from './routes/Summary';
import Reservations from './routes/Reservations';
import Reviews from './routes/Reviews';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/routes/Home" element={<Home />} />
          <Route path="/routes/Map" element={<Map />} />
          <Route path="/routes/Summary/" element={<Summary />} />
          <Route path="/routes/Summary/:id" element={<Summary />} />
          <Route path="/routes/Reservations/" element={<Reservations />} />
          <Route path="/routes/Reservations/:id" element={<Reservations />} />
          <Route path="/routes/Reviews" element={<Reviews />} />
          <Route path="/routes/Reviews/:id" element={<Reviews />} />
          <Route path="/routes/SignUp" element={<SignUp />} />
          <Route path="/routes/SignIn" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StateProvider>
);
