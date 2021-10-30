import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Offer = ({offer}) => {
    const btnColor = offer.btnClr;
    return (
        <Card style={{ width: '24rem', borderRadius:"12px" , backgroundColor:btnColor }} className="my-3">
            <Card.Img variant="top" src={offer.img} style={{borderTopRightRadius:'12px', borderTopLeftRadius:'12px'}} />
            <Card.Body className="bg-light" style={{color:btnColor}}>
                <h5 className="fs-5 fw-bold lh-lg">{offer.title}</h5>
                <h6>{offer.desp.slice(0,150)} ... </h6>
            </Card.Body>
            <Card.Footer>
                <NavLink to={`/register/${offer._id}`} className="text-decoration-none"><Card.Title className="text-white"><span className="border-0 border-bottom border-secondery border-3">Book Now</span></Card.Title></NavLink>
            </Card.Footer>
        </Card>
    );
};

export default Offer;