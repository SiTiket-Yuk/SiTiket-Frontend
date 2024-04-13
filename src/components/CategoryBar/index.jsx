import React from 'react';
const EventCategory = ({ link1, link2, link3, category1, category2, category3 }) => {
    return (
        <div className='flex flex-nowrap mt-8 text-base category '>
            <p className="font-bold pr-4">Kategori: </p>
            <div className=' text-sky-500 underline'>
                <a className='mr-3' href={link1}>{category1}</a>
                <a className='mr-3' href={link2}>{category2}</a>
                <a className='mr-3' href={link3}>{category3}</a>
            </div>

        </div>
    );
};

export default EventCategory;
