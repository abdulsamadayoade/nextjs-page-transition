import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Expo } from "gsap";

const Transition = ({ timeline }) => {
	const trans = useRef(null);

	useLayoutEffect(() => {
		timeline.to(trans.current, {
			duration: 1.9,
			y: "100vh",
			ease: Expo.easeInOut,
		});

		// return () => {
		// 	to.kill();
		// };
	});

	return <div ref={trans} className="transition"></div>;
};

export default Transition;
