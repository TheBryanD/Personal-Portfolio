import PortfolioScreenshot from '../assets/Portfolio-Screenshot.png';
import DatabaseImage from '../assets/Database-image.jpg';
import AJDAutoScreenshot from '../assets/AJDAuto-Screenshot.png';
import WigScreenshot from '../assets/Wig-Screenshot.png';

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
    title: 'Wig Automation Tool',
    description: 'A custom software solution for a small business, Wig Beautiful, to automate updating a datbase with available wigs for the online store, and ordering customers wigs.',
    tags: ['Python', 'Automation', 'Web Scraping', 'JSON', 'REST APIs', 'OAuth2', 'Shopify'],
    image: WigScreenshot,
    link: 'https://github.com/TheBryanD/AJDMonogramAutomation'
  },
  {
    title: 'AJD Laser Cutting Automation',
    description: 'A custom software solution for a small business, AJD Design, to automate creation of designs and laser cutting sheets.',
    tags: ['Python', 'Visual Basic', 'Automation', 'Web Scraping', 'JSON', 'REST APIs', 'OAuth2'],
    image: AJDAutoScreenshot,
    link: 'https://github.com/TheBryanD/AJDMonogramAutomation'
  }
];