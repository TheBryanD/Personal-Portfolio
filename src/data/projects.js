import PortfolioScreenshot from '../assets/Portfolio-Screenshot.png';
import DatabaseImage from '../assets/Database-image.jpg';
import AJDAutoScreenshot from '../assets/AJDAuto-Screenshot.png';

export const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A React based front-end portfolio website to showcase my projects and skills.',
    tags: ['React', 'Node.js', 'Tailwind', 'Vite', 'JavaScript', 'CSS', 'HTML'],
    image: PortfolioScreenshot,
    link: 'https://thebryand.github.io/Personal-Portfolio/'
  },
  {
    title: 'Inventory Management System',
    description: 'A web-based inventory management system for Aristocrat to track stock levels and orders.',
    tags: ['C#', 'ASP .NET', 'JavaScript', 'Razor', 'HTML', 'PostgreSQL', 'EFCore', 'Okta'],
    image: DatabaseImage,
    link: 'https://thebryand.github.io/Personal-Portfolio/'
  },
  {
    title: 'AJD Laser Cutting Automation',
    description: 'A custom software solution for a small business, AJD Design, to automate creation of designs and laser cutting sheets.',
    tags: ['Python', 'Visual Basic', 'Automation', 'Web Scraping', 'JSON', 'REST APIs', 'OAuth2'],
    image: AJDAutoScreenshot,
    link: 'https://thebryand.github.io/Personal-Portfolio/'
  },
  // ...more projects
];