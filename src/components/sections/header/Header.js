import React from 'react'
import TopMenu from './TopMenu';
import Hero from './Hero';

export default function Header({ toggleMenu, handleDrop, loading } = {}) {
    return <div className='app-header-triangle'>
        <section className="app-header">
            <TopMenu toggleMenu={toggleMenu}/>
            <div className='container app-header-container'>
                <Hero handleDrop={handleDrop}  loading={loading}/>
            </div>
        </section>
    </div>
}
