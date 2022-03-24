import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { LayoutsMain } from '../layouts/layouts-main';
import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => setOffset(window.pageYOffset);
  
  if(typeof window !== "undefined") {
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <LayoutsMain
      title="Home"
    >
      <div className='relative w-full min-h-screen flex justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.249)' }}>
        <section>
          <img
            src='/img/home/bird1.png'
            alt="ss"
            style={{
              top: (offset * -1.5) + 'px',
              left: (offset * 2) + 'px'
            }}
          />
          <img
            src='/img/home/bird2.png'
            alt="ss"
            style={{
              top: (offset * -1.5) + 'px',
              left: (offset * -5) + 'px'
            }}
          />
          <img
            src='/img/home/forest.png'
            alt="ss"
            style={{
              top: (offset * 0.25) + 'px'
            }}
          />
          <h2>
            <div style={{ top: (50 + offset + -0.5) + '%' }}>
              <div className='text-center text-md font-normal bg-emerald-400'>HollowUI The best Of UI Framerwork`s</div>
              <div className='italic rancho-text text-7xl text-center tracking-wide font-bold py-2 px-4 text-white rounded-full'>HollowUI</div>
            </div>
            <div className='text-center mt-6'>
              <a href='#' className='px-10 py-3 text-white border-emerald-400 border-2 font-bold rounded-full hover:bg-emerald-400 hover:text-white'>
                Go
              </a>
            </div>
            <img
              src='/img/home/rocks.png'
              alt="ss"
              style={{
                top: (offset * -0.12) + 'px'
              }}
            />
            <img
              src='/img/home/water.png'
              alt="ss"
            />
          </h2>
        </section>
      </div>
      <div className='relative p-9 bg-gray-200'>
        <h2>test</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur placeat, alias eligendi ducimus deleniti odio odit quae, laboriosam nobis eum, labore sed sequi asperiores aut tenetur? Ab vel eos laboriosam.</p>
      </div>
    </LayoutsMain>
  )
}

export default Home
