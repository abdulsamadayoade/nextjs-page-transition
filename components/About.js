import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import Transition from "./Transition";
import Link from "next/link";

const About = () => {
	const homeTL = gsap.timeline();
	const headingRef = useRef(null);

	useLayoutEffect(() => {
		homeTL.from(
			headingRef.current,
			{
				duration: 0.6,
				skewX: 10,
				z: -100,
				opacity: 0,
			},
			"-=0.3"
		);
	});

	return (
		<div>
			<Transition timeline={homeTL} />
			<div className="home-container">
				<h1 ref={headingRef}>About Page</h1>
				<Link href="/works">
					<a>Works</a>
				</Link>
			</div>
		</div>
	);
};

export default About;
