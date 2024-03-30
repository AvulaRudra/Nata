import React from 'react';
import student1 from '../../src/images/student1.jpeg';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            photo: student1,
            name: 'John Doe',
            statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4,
        },
        {
            id: 2,
            photo: student1,
            name: 'Jane Smith',
            statement: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            rating: 5,
        },
        {
            id: 3,
            photo: student1,
            name: 'John Doe',
            statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4,
        },
        {
            id: 4,
            photo: student1,
            name: 'Jane Smith',
            statement: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            rating: 5,
        },
        {
            id: 5,
            photo: student1,
            name: 'John Doe',
            statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4,
        },
        {
            id: 6,
            photo: student1,
            name: 'Jane Smith',
            statement: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            rating: 5,
        },
        // Add more testimonials here
    ];

    return (
        <div className="bg-blue-900 overflow-x-scroll overflow-y-hidden whitespace-nowrap" style={{ backgroundColor: '#171B41' }}>
            <div className="flex flex-nowrap">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-72 h-72 m-4 bg-white rounded-lg flex flex-col justify-between">
                        <div className="relative">
                            <img src={testimonial.photo} alt={testimonial.name} className="w-20 h-20 object-cover rounded-full" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{testimonial.name}</h3>
                            <p className="text-gray-700 overflow-hidden h-16 break-words">{testimonial.statement}</p> {/* Updated CSS class */}
                            <div>
                                {Array.from({ length: testimonial.rating }, (_, index) => (
                                    <span key={index} className="text-yellow-500">★</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
