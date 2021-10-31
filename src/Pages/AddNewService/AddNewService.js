import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://young-everglades-55667.herokuapp.com/offers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId) {
                    alert('Congratulation!!! New service added.');
                    reset();
                }
            });
    };

    return (
        <Container>
            <h2 className="fs-2 fw-bold py-5"><span className="border-0 border-bottom border-3 border-danger">Add a New Service</span></h2>
            <div className="w-100 border border-3 rounded-3 px-5 pb-5 mb-5 registerForm" style={{ backgroundColor: "ghostwhite" }}>
                <h3 className="fs-3 fw-bold my-3 text-start">Fill up the form to add a new service. </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                    <input type='number' {...register("id", { required: true, maxLength: 5 })} placeholder="ID" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                    <input {...register("title", { required: true, maxLength: 200 })} placeholder="Title" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                    <input type="url" {...register("img", { required: true})} placeholder="Image URL" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                    <input {...register("desp", { required: true, maxLength: 1000 })} placeholder="Description" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                    <input {...register("btnClr", { required: true})} placeholder="Background Color" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                    <input type='number' {...register("cost", { required: true})} placeholder="Service Cost" className="border-0 border-bottom border-3 fs-6 fw-bold" />
                    <input type="submit" value="Add" className="bg-danger bg-gradient text-white fs-5 fw-bold rounded mt-3" />
                </form>
            </div>
        </Container>
    );
};

export default AddNewService;