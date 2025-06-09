import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
  FaUniversalAccess,
  FaWordpress,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiPhp, SiTypescript } from 'react-icons/si';
import calculateYears from '../utils/calcYears';

const experienceData = [
  {
    title: 'html',
    years: calculateYears('08/2022'),
    icon: FaHtml5,
  },
  {
    title: 'css',
    years: calculateYears('08/2022'),
    icon: FaCss3Alt,
  },
  {
    title: 'javascript',
    years: calculateYears('08/2022'),
    icon: IoLogoJavascript,
  },
  {
    title: 'node.js',
    years: calculateYears('08/2022'),
    icon: FaNodeJs,
  },
  {
    title: 'react',
    years: calculateYears('08/2022'),
    icon: FaReact,
  },
  {
    title: 'nextjs',
    years: calculateYears('10/2024'),
    icon: RiNextjsFill,
  },
  {
    title: 'git',
    years: calculateYears('08/2022'),
    icon: FaGitAlt,
  },
  {
    title: 'tailwindcss',
    years: calculateYears('08/2022'),
    icon: RiTailwindCssFill,
  },
  {
    title: 'bootstrap',
    years: calculateYears('08/2022'),
    icon: FaBootstrap,
  },
  {
    title: 'sass',
    years: calculateYears('10/2023'),
    icon: FaSass,
  },
  {
    title: 'accessibility',
    years: calculateYears('10/2023'),
    icon: FaUniversalAccess,
  },
  {
    title: 'typescript',
    years: calculateYears('02/2025'),
    icon: SiTypescript,
  },
  {
    title: 'wordpress',
    years: calculateYears('04/2025'),
    icon: FaWordpress,
  },
  {
    title: 'php',
    years: calculateYears('04/2025'),
    icon: SiPhp,
  },
];
export default experienceData;
