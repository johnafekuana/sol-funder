'use client'
import Link from 'next/link'
import Hero from '../components/hero-section/Hero'
import About from '../components/about-section/About'
import WhyUs from '../components/why-section/WhyUs'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/footer/Footer'


const Home = () => {

return (
	<>
		<Hero />
		<About />
		<WhyUs />
		<FAQ />
		<Footer />
	</>
)
}

export default Home
