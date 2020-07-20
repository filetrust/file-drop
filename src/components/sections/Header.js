import React from 'react'
import logo from '../../logo.svg';
import TopMenu from './process-file/TopMenu';

export default function Header({ toggleMenu, toggleModal } = { }) {
    return <section className="app-header">
        <div className='container app-header-container'>
            <TopMenu toggleMenu={toggleMenu}/>

        </div>
    </section>
}
