import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            {/* <div className="card card-compact w-96 bg-base-100 shadow-xl"> */}
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>price: $ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className='btn btn-primary'>CheckOut</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;