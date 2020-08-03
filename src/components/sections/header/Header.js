import React from 'react'
import TopMenu from './TopMenu';
import Hero from './Hero';
import { ProcessFile } from '../body';

export default function Header({ toggleMenu, handleDrop, loading, fileProcessed,  onAnotherFile } = {}) {
    return <div className='app-header-triangle'>
        <section className="app-header">
            <TopMenu toggleMenu={toggleMenu}/>
            <div className='container app-header-container'>
                <Hero handleDrop={handleDrop}  loading={loading} fileProcessed={fileProcessed} onAnotherFile={onAnotherFile}/>
            </div>
        </section>
    </div>
}
