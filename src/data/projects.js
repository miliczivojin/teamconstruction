import momcilaSlika1 from '../assets/projekat1/slika1.jpg';
import momcilaSlika2 from '../assets/projekat1/slika2.jpg';
import momcilaStan1 from '../assets/projekat1/stan1.jpg';
import momcilaStan2 from '../assets/projekat1/stan2.jpg';
import momcilaStan3 from '../assets/projekat1/stan3.jpg';
import momcilaStan4 from '../assets/projekat1/stan4.jpg';
import momcilaStan5 from '../assets/projekat1/stan5.jpg';
import momcilaStan6 from '../assets/projekat1/stan6.jpg';
import momcilaStan7 from '../assets/projekat1/stan7.jpg';
import momcilaStan8 from '../assets/projekat1/stan8.jpg';

import dejanSlika1 from '../assets/projekat2/slika1.jpg';
import dejanStan1 from '../assets/projekat2/stan1.jpg';
import dejanStan2 from '../assets/projekat2/stan2.jpg';
import dejanStan3 from '../assets/projekat2/stan3.jpg';
import dejanStan4 from '../assets/projekat2/stan4.jpg';

import ivanGoranSlika1 from '../assets/projekat3/slika1.jpg';
import ivanGoranSlika2 from '../assets/projekat3/slika2.jpg';
import ivanGoranSlika3 from '../assets/projekat3/slika3.jpg';
import ivanGoranStan1 from '../assets/projekat3/stan1.jpg';

import alaskaSlika1 from '../assets/projekat4/slika1.jpg';
import alaskaSlika2 from '../assets/projekat4/slika2.jpg';
import alaskaSlika3 from '../assets/projekat4/slika3.jpg';
import alaskaStan1 from '../assets/projekat4/stan1.jpg';
import alaskaStan2 from '../assets/projekat4/stan2.jpg';
import alaskaStan3 from '../assets/projekat4/stan3.jpg';
import alaskaStan4 from '../assets/projekat4/stan4.jpg';
import alaskaStan5 from '../assets/projekat4/stan5.jpg';

import zetskaSlika1 from '../assets/projekat5/slika1.jpg';
import zetskaSlika2 from '../assets/projekat5/slika2.jpg';
import zetskaSlika3 from '../assets/projekat5/slika3.jpg';
import zetskaStan1 from '../assets/projekat5/stan1.jpg';
import zetskaStan2 from '../assets/projekat5/stan2.jpg';
import zetskaStan3 from '../assets/projekat5/stan3.jpg';
import zetskaStan4 from '../assets/projekat5/stan4.jpg';
import zetskaStan5 from '../assets/projekat5/stan5.jpg';
import zetskaStan6 from '../assets/projekat5/stan6.jpg';
import zetskaStan7 from '../assets/projekat5/stan7.jpg';

/* 
  PDF fajlovi: dodaj u public/pdf/ (npr. momcila-milovanovica-14.pdf)
  Slike tipova stanova: dodaj u assets (npr. projekat1-tip1.jpg) i uvezi ih ovde
*/

export const COMPLETED_PROJECTS = [
  {
    id: 1,
    slug: 'momcila-milovanovica-14',
    title: 'Momčila Milovanovića 14',
    location: 'Niš, Pantalej',
    description:
      'Stambeni objekat spratnosti Po+P+4. Moderna novogradnja u Nišu.',
    image: momcilaSlika1,
    exteriorImages: [momcilaSlika1, momcilaSlika2],
    comingSoon: false,
    sold: true,
    pdf: '/pdf/momcila_milovanovica_14.pdf',
    apartmentImages: [momcilaStan1, momcilaStan2, momcilaStan3, momcilaStan4, momcilaStan5, momcilaStan6, momcilaStan7, momcilaStan8],
  },
  {
    id: 2,
    slug: 'dejana-dinica-bb',
    title: 'Dejana Dinića bb',
    location: 'Niš, Pantalej',
    description:
      'Stambeni objekat spratnosti Po+P+4. Moderna novogradnja u Nišu.',
    image: dejanSlika1,
    exteriorImages: [dejanSlika1],
    comingSoon: false,
    sold: true,
    pdf: '/pdf/dejan_dinic_bb.pdf',
    apartmentImages: [dejanStan1, dejanStan2, dejanStan3, dejanStan4],
  },
  {
    id: 3,
    slug: 'ivana-gorana-kovacica-13',
    title: 'Ivana Gorana Kovačića 13',
    location: 'Niš, Pantalej',
    description:
      'Stambeni objekat spratnosti Po+P+4. Realizovan projekat u Nišu.',
    image: ivanGoranSlika1,
    exteriorImages: [ivanGoranSlika1, ivanGoranSlika2, ivanGoranSlika3],
    comingSoon: false,
    sold: true,
    pdf: '/pdf/ivan_goran_kovacic_13.pdf',
    apartmentImages: [ivanGoranStan1],
  },
];

export const PROJECTS_UNDER_CONSTRUCTION = [
  {
    id: 4,
    slug: 'alaska-3',
    title: 'Alaska 3',
    location: 'Niš, Pantalej',
    description:
      'Stambeni objekat spratnosti Po+P+4 u izgradnji. Moderna novogradnja u Nišu.',
    image: alaskaSlika1,
    exteriorImages: [alaskaSlika1, alaskaSlika2, alaskaSlika3],
    comingSoon: true,
    pdf: '/pdf/alaska_3.pdf',
    apartmentImages: [alaskaStan1, alaskaStan2, alaskaStan3, alaskaStan4, alaskaStan5],
  },
  {
    id: 5,
    slug: 'zetska',
    title: 'Zetska bb',
    location: 'Niš, Ćele Kula',
    description:
      'Višeporodični stambeni objekat spratnosti Po+P+6. Moderna novogradnja u Nišu.',
    image: zetskaSlika1,
    exteriorImages: [zetskaSlika1, zetskaSlika2, zetskaSlika3],
    comingSoon: true,
    pdf: '/pdf/zetska.pdf',
    apartmentImages: [zetskaStan1, zetskaStan2, zetskaStan3, zetskaStan4, zetskaStan5, zetskaStan6, zetskaStan7],
  },
];

const ALL_PROJECTS = [...COMPLETED_PROJECTS, ...PROJECTS_UNDER_CONSTRUCTION];

export function getProjectBySlug(slug) {
  return ALL_PROJECTS.find((p) => p.slug === slug) ?? null;
}
