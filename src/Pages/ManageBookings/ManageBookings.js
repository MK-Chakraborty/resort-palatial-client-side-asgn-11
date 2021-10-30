import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Booking from './Booking/Booking';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://young-everglades-55667.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setBookings(data));
    },[])
    return (
        <Container>
            <h2 className="fs-2 fw-bold py-5"><span className="border-0 border-bottom border-3 border-danger">ALL BOOKINGS</span></h2>
            <Row>
                <Col>
                    {
                        bookings.map(booking => <Booking key={booking._id} booking={booking}></Booking>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default ManageBookings;