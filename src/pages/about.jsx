import React from 'react';
import Header from '../components/header';
import Resume from '../layouts/resume';

export default function About() {
    return (
        <section className='about-page'>
            <Header headerTitle="About"/>
            <Resume />
        </section>
    );
}