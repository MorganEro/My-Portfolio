import calculateYears from '../utils/calcYears';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  FaGitAlt,
  FaUniversalAccess,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaSass,
  FaNodeJs,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

const experienceData = [
  {
    title: 'html',
    years: calculateYears(2022),
    icon: FaHtml5,
  },
  {
    title: 'css',
    years: calculateYears(2022),
    icon: FaCss3Alt,
  },
  {
    title: 'javascript',
    years: calculateYears(2022),
    icon: IoLogoJavascript,
  },
  {
    title: 'node.js',
    years: calculateYears(2022),
    icon: FaNodeJs,
  },
  {
    title: 'react',
    years: calculateYears(2022),
    icon: FaReact,
  },
  {
    title: 'nextjs',
    years: calculateYears(2023),
    icon: RiNextjsFill,
  },
  {
    title: 'git',
    years: calculateYears(2022),
    icon: FaGitAlt,
  },
  {
    title: 'tailwindcss',
    years: calculateYears(2022),
    icon: RiTailwindCssFill,
  },
  {
    title: 'bootstrap',
    years: calculateYears(2022),
    icon: FaBootstrap,
  },
  {
    title: 'sass',
    years: calculateYears(2023),
    icon: FaSass,
  },
  {
    title: 'accessibility',
    years: calculateYears(2023),
    icon: FaUniversalAccess,
  },
];
export default experienceData;
