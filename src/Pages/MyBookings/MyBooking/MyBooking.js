import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import bookingImg from '../../../images/download.png'


const MyBooking = ({ myBooking }) => {
    const id = myBooking.serviceId;
    const [offer, setOffer] = useState([]);
    useEffect(() => {
        fetch(`https://young-everglades-55667.herokuapp.com/offers/${id}`)
            .then(res => res.json())
            .then(data => setOffer(data));
    }, [])

    const handleClick = (id) => {
        const proceed = window.confirm('Are you sure, You wnat to cancel your booking?');
        if (proceed) {
            fetch(`https://young-everglades-55667.herokuapp.com/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        alert('Your Booking Cancelled. You will get your refaund within 3 days. Thank You!');
                        window.location.reload()
                    }
                });
        }
    }


    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={bookingImg} className="img-fluid rounded-start pt-3" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-start">
                        <h4 className="card-title" style={{ color: "violet" }}>{offer.title}</h4>
                        <h6 className="card-title">{myBooking.fullName}</h6>
                        <h6>{myBooking.email}</h6>
                        <h6>Booking Date: {myBooking.date}</h6>
                        <h6>Check In Date: {myBooking.check_in}</h6>
                        <h6>Check Out Date: {myBooking.check_out}</h6>
                        <Button onClick={() => handleClick(myBooking._id)} style={{ backgroundColor: "violet" }} className="fw-bold border-0">Cancel Booking!</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;