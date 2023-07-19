import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt="" />
                    <img src={parts} className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" alt="" />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl font-bold text-orange-600'>About us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br />
                        & of experience <br />
                        in this field</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-secondary">Get more info</button>
                </div>
            </div>
        </div>
    );
};

export default About;