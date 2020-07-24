import React from 'react'
import TopMenu from './TopMenu';
import Hero from './Hero';

export default function Header({ toggleMenu, handleDrop } = {}) {
    return <div className='app-header-triangle'>
        <section className="app-header">
            <div className='container app-header-container'>
                <TopMenu toggleMenu={toggleMenu}/>
                <Hero handleDrop={handleDrop}/>
            </div>
        </section>
    </div>
}
