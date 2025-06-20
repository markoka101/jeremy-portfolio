// Home Page Images
import markCloseupGuitar from '../assets/mark-closeup-guitar.JPG';
import lounginComp from '../assets/loungin.webp';
import aylinSun from '../assets/aylin-sunset.webp';
import car from '../assets/car-80-comp.webp';

// Portfolio Images
import img1 from '../assets/1.JPEG';
import img2 from '../assets/2.JPEG';
import img3 from '../assets/3.JPEG';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.JPEG';
import img9 from '../assets/9.JPEG';
import img10 from '../assets/10-light-compression.jpg';
import img11 from '../assets/11.JPEG';
import img12 from '../assets/12.JPG';
import img13 from '../assets/13.JPG';

import type { PictureProp } from '../types/picture';

export const HomePagePictures: ReadonlyArray<PictureProp> = [
	{
		path: aylinSun,
		alt: 'Portrait in front of sunset',
		ratio: 'aspect-[1067/1600]'
	},
	{
		path: markCloseupGuitar,
		alt: 'Picture of guitarist',
		ratio: 'aspect-[4/5]'
	},
	{
		path: lounginComp,
		alt: 'Man lounging in chair',
		ratio: 'aspect-[1051/1600]'
	},
	{
		path: car,
		alt: 'Picture of car at an event',
		ratio: 'aspect-[111/128]'
	}
];

export const PortfolioPagePictures: ReadonlyArray<PictureProp> = [
	{ path: img1, alt: 'Shoot in studio leaning on wall', ratio: 'aspect-[2/3]' },
	{ path: img2, alt: 'Outdoor sunset photo shoot', ratio: 'aspect-[1067/1600]' },
	{ path: img3, alt: 'Honda car meetup even photo shoot', ratio: 'aspect-[111/128]' },
	{ path: img4, alt: 'Wedding Photo Shoot', ratio: 'aspect-[2249/3200]' },
	{ path: img5, alt: 'Bride and groom wedding photos', ratio: 'aspect-[1067/1600]' },
	{ path: img6, alt: 'Bride and groom wedding kiss', ratio: 'aspect-[1600/1067]' },
	{ path: img7, alt: 'Indoor photo shoot', ratio: 'aspect-[1067/1600]' },
	{ path: img8, alt: 'Picture of car from fron in car meet', ratio: 'aspect-[2717/3200]' },
	{ path: img9, alt: 'Outdoor photo session', ratio: 'aspect-[1067/1600]' },
	{ path: img10, alt: 'Session musician playing guitar', ratio: 'aspect-[663/994]' },
	{ path: img11, alt: 'Studio session pointing at camera', ratio: 'aspect-[663/994]' },
	{ path: img12, alt: 'Photo shoot with pet', ratio: 'aspect-[663/994]' },
	{ path: img13, alt: 'Outdoor city photo shoot', ratio: 'aspect-[4/5]' }
];
