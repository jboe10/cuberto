import React, { useState, useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './scss/main.sass';
import Hero from './js/Hero';
import Banner from './js/Banner';
import Sidebar from './js/sidebar/Sidebar';
import ImgScroll from './js/ImgScroll';
import ScrollBar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import LatestNews from './js/LatestNews';
import BannerSection from './js/BannerSection';
import Footer from './js/Footer';
import FeaturedProjects from './js/FeaturedProjects';

function App() {
	const hamburgerElement = useRef(null);
	const appRef = useRef(null);
	const [footerElement, setFooterElement] = useState(null);
	const [showSidebar, setShowSidebar] = useState(false);
	let sideModal;
	let statementEle = useRef(null);

	useEffect(() => {
		TweenMax.fromTo(statementEle, 1.2, { y: 30 }, { y: 0, delay: 0.75 });
	}, []);

	// set hamburger to white when in footer, black when not
	useEffect(() => {
		const setHamburgerMenuColor = () => {
			if (footerElement !== null) {
				if (
					footerElement.getBoundingClientRect().top >
					hamburgerElement.current.offsetTop
				) {
					hamburgerElement.current.className = `holder color-black`;
				} else {
					hamburgerElement.current.className = `holder color-white`;
				}
			}
		};

		if (
			hamburgerElement &&
			hamburgerElement.current &&
			footerElement !== null
		) {
			window.addEventListener('scroll', setHamburgerMenuColor);
		}

		return () => {
			window.addEventListener('scroll', setHamburgerMenuColor);
		};
	}, [hamburgerElement, footerElement]);

	if (showSidebar) {
		sideModal = <Sidebar setBar={setShowSidebar} />;
	} else {
		sideModal = null;
	}

	return (
		<div className="background-trans" ref={appRef}>
			<ScrollBar
				options={{
					scrollSpeed: 10,
					swipeEasing: true,
				}}
				component="div"
			>
				<div className="App background-trans">
					<div className="head-wrap">
						<div className="logo-navbar">cuberto</div>
						<div className="navbar">
							{/* <div className="showreel-navbar">
                our showreel
              </div>
              <div className="menu-navbar">
                menu
              </div> */}
							<div className="holder" ref={hamburgerElement}>
								<div
									className="bar-navbar"
									onClick={() => setShowSidebar(prevShow => !prevShow)}
								>
									<FontAwesomeIcon icon={faBars} />
								</div>
							</div>
						</div>
					</div>
					<div className="body-wrap">
						<div className="hero-wrap">
							<Hero />
						</div>
						<div
							ref={statement => {
								statementEle = statement;
							}}
							className="hero-msg-wrap"
						>
							<p>
								Leading digital agency with solid design and developemnt
								<br />
								expertise. We build readymade websites, mobile
								<br />
								application, and elaborate online buisnesses services.
							</p>
						</div>
					</div>
					<ImgScroll ref={appRef} />
					<FeaturedProjects />
					<BannerSection />
					<LatestNews />
				</div>
				{sideModal}
			</ScrollBar>
			<Footer inputRef={el => setFooterElement(el)} />
		</div>
	);
}

export default App;
