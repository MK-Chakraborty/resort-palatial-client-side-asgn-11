import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

const Booking = ({ booking }) => {
    const id = booking.serviceId;

    const [offer, setOffer] = useState([]);
    useEffect(() => {
        fetch(`https://young-everglades-55667.herokuapp.com/offers/${id}`)
            .then(res => res.json())
            .then(data => setOffer(data));
    }, [id])

    const handleClick = (id) => {
        fetch(`https://young-everglades-55667.herokuapp.com/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    alert('One Booking Deleted');
                    window.location.reload()
                }
            });
    }

    return (
        <Container className="w-100 border border-5 rounded-3 my-3 py-3" style={{ backgroundColor: "ghostwhite" }}>
            <h3 className="text-danger">{offer?.title}</h3>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6} className="text-start">
                    <h5>Name: {booking.fullName}</h5>
                    <h6>E-Mail: {booking.email}</h6>
                    <p>Booking Date: {booking.date}</p>
                    <p>Spacial Requirement: {booking?.message ? booking.message : "No Requirement"}</p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} className="text-start pt-4">
                    <h6>Check In Date: {booking.check_in}</h6>
                    <h6>Check Out Date: {booking.check_out}</h6>
                    <p>Transaction ID: {booking.transactionID}</p>
                    <Button onClick={() => handleClick(booking._id)} variant="danger">Delete Booking</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;