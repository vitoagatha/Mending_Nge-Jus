import React from 'react'
import Fruit1 from '../../assets/fruits/avocado.png';

const MenuData = [
    {
        id: 1,
        title: 'Alpukat',
        link: '/',
        price: 'Rp10.000',
        img: Fruit1,
    },
    {
        id: 2,
        title: 'Mangga',
        link: '/',
        price: 'Rp10.000',
        img: Fruit1,
    },
    {
        id: 3,
        title: 'Strawberry',
        link: '/',
        price: 'Rp10.000',
        img: Fruit1,
    },
    {
        id: 4,
        title: 'Jambu Merah',
        link: '/',
        price: 'Rp10.000',
        img: Fruit1,
    },
]

const Menu = () => {
  return (
    <section>
        <div className='container pt-12 mb-20'>
            <h1 className='text-2xl font-bold text-left pb-10 uppercase'>
                Menu Kami
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {MenuData.map((menu) => (
                    <div className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3'>
                        <img src={menu.img} className='w-[60px] mb-4 scale-125 transform-translate-y-6' />
                        <div>
                            <h1 className='text-lg font-semibold'>{menu.title}</h1>
                            <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Menu