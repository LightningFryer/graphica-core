import { gsap } from 'gsap';
import SplitType from 'split-type';

export const gts2Bob = (p2: HTMLElement) => {
	return gsap.fromTo(p2,
		{
			yPercent: 0,
			duration: 2,
		},

		{
			yPercent: -3,
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: "power1.inOut"
		},
	);
};

export const sec1Bob = (sec1: SVGElement) => {
	return gsap.fromTo(sec1,
		{
			yPercent: 0,
			duration: 2,
		},

		{
			yPercent: -5,
			duration: 3,
			repeat: -1,
			yoyo: true,
			ease: "power1.inOut"
		},
	);
};

export const gts1 = (p1: HTMLElement) => {
	return gsap.from(p1, {
		xPercent: -200,
		// opacity: 25,
		duration: 2,
		ease: 'power1.Out'
	});
};

export const gts2 = (p2: HTMLElement) => {
	const gts2Chars = SplitType.create(p2);
	return gsap.from(gts2Chars.chars, {
		opacity: 0,
		yPercent: 20,
		duration: 2,
		stagger: 0.1,
		// scale: 0,
		ease: 'elastic.out'
	});
};

export const gts3 = (p3: HTMLElement) => {
	return gsap.from(p3, {
		xPercent: 200,
		// opacity: 0,
		duration: 2,
		ease: 'power1.Out'
	});
};

export const navBarEnter = (navbar: HTMLElement) => {
	return gsap.from(navbar, {
		yPercent: -100,
		duration: 1,
		ease: 'power2.inOut'
	});
};

export const sec1MarqueeEnter = (sec1Marquee: HTMLDivElement) => {
	return gsap.from(sec1Marquee, {
		yPercent: 100,
		duration: 1.5,
		ease: 'power2.inOut',
		opacity: 0,
	});
};
