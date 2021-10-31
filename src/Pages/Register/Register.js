import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Register.css'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { id } = useParams();
    const { user } = useAuth();

    // get current date
    const today = new Date().toLocaleDateString();

    const { register, handleSubmit, reset } = useForm();

    const [offer, setOffer] = useState([]);
    useEffect(() => {
        fetch(`https://young-everglades-55667.herokuapp.com/offers/${id}`)
            .then(res => res.json())
            .then(data => setOffer(data));
    }, [])

    const onSubmit = data => {
        fetch('https://young-everglades-55667.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId) {
                    alert('Congratulation!!! Your Payment Is Complete. Please provide your ID at reception while check in. Thank You!');
                    reset();
                }
            });
    };

    const btnColor = offer.btnClr;
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <Card style={{ width: '100%', borderRadius: "12px", backgroundColor: btnColor }} className="my-3">
                        <Card.Img variant="top" src={offer.img} style={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px' }} />
                        <Card.Body className="bg-light" style={{ color: btnColor }}>
                            <h3 className="fs-3 fw-bold lh-lg">{offer.title}</h3>
                            <h5>{offer.desp}</h5>
                        </Card.Body>
                        <Card.Footer>
                            <p className="text-decoration-none"><Card.Title className="text-white">Per Day: {offer.cost} $</Card.Title></p>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} className="d-flex align-items-center">
                    <div className="w-100 border border-3 rounded-3 px-5 pb-5 registerForm" style={{ backgroundColor: "ghostwhite" }}>
                        <h3 className="fs-3 fw-bold my-3 text-start">Book {offer.title}</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                            <input {...register("fullName", { required: true, maxLength: 100 })} value={user.displayName} placeholder="Full Name" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                            <input type="email" {...register("email", { required: true })} value={user.email} placeholder="Email" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                            <input type="text" {...register("date")} value={today} placeholder="Date" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                            <label htmlFor="checkInDate" className="text-start ps-3 fw-bold text-secondary">Check In Date</label>
                            <input type="date" {...register("check_in", { required: true})} id="checkInDate" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                            <label htmlFor="checkOutDate" className="text-start ps-3 fw-bold text-secondary">Check Out Date</label>
                            <input type="date" {...register("check_out", { required: true})} id="checkOutDate" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                            <input {...register("message", { maxLength: 300 })} placeholder="Special Requirements" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                            <input {...register("transactionID", { required: true, maxLength: 100 })} placeholder="Transaction ID" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                            <input {...register("serviceId", { maxLength: 300 })} value={id} placeholder="Service Id" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                            <input type="submit" value="Book Now" className="bg-danger bg-gradient text-white fs-5 fw-bold rounded mt-3" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;

