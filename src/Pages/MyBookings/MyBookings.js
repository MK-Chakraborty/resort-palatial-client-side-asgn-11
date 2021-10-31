import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import MyBooking from './MyBooking/MyBooking';

const MyBookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const [offer, setOffer] = useState([]);

    useEffect(() => {
        fetch('https://young-everglades-55667.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])

    const myBookings = bookings.filter(booking => booking.email === user.email);

    return (
        <Container>
            <h2 className="fs-2 fw-bold py-5"><span className="border-0 border-bottom border-3 border-danger">MY BOOKINGS</span></h2>
            <div className="d-flex justify-content-between flex-wrap">
                {
                    myBookings.map(myBooking => <MyBooking key={myBooking._id} myBooking={myBooking}></MyBooking>)
                }
            </div>
        </Container>
    );
};

export default MyBookings;