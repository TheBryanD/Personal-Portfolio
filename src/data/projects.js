import PortfolioScreenshot from '../assets/Portfolio-Screenshot.png';
import DatabaseImage from '../assets/Database-image.jpg';
import AJDAutoScreenshot from '../assets/AJDAuto-Screenshot.png';
import WigScreenshot from '../assets/Wig-Screenshot.png';
import CruWebpageImage from '../assets/CruRecommendationSystem.png';
import XmlImage from '../assets/XML.png';
import ServerDeploymentImage from '../assets/ServerDeployment.jpg';
import ServerImage from '../assets/ServerImage.png';

export const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A React based front-end portfolio website to showcase my projects and skills.',
    tags: ['React', 'Node.js', 'Tailwind', 'Vite', 'JavaScript', 'CSS', 'HTML'],
    image: PortfolioScreenshot,
    link: 'https://thebryand.github.io/Personal-Portfolio/'
  },
  {
    title: 'Aristocrat Specialized File Manager',
    description: 'A web-based file management system for Aristocrat to handle specialized files used in gaming machines.',
    tags: ['C#', 'ASP.NET', 'JavaScript', 'Blazor', 'HTML', 'PostgreSQL', 'Okta'],
    image: XmlImage
  },
  {
    title: 'Server Deployment Console',
    description: 'A C# desktop application to manage server deployments for Aristocrat.',
    tags: ['C#', 'ASP.NET', 'Avalonia', 'HTTP', 'JSON' ],
    image: ServerDeploymentImage
  },
  {
    title: 'Inventory Management System',
    description: 'A web-based inventory management system for Aristocrat to track stock levels and orders.',
    tags: ['C#', 'ASP.NET', 'JavaScript', 'Razor', 'HTML', 'PostgreSQL', 'EFCore', 'Okta'],
    image: DatabaseImage
  },
  {
    title: 'Server Simulator POC',
    description: 'A proof of concept for simulating server behavior in a controlled environment. This was to test new features and configurations more efficiently.',
    tags: ['C#', 'ASP.NET', 'JavaScript', 'Razor', 'HTML', 'PostgreSQL', 'EFCore', 'Okta'],
    image: ServerImage
  },
  {
    title: 'Wig Automation Tool',
    description: 'A custom software solution for a small business, Wig Beautiful, to automate updating a datbase with available wigs for the online store, and ordering customers wigs.',
    tags: ['Python', 'Automation', 'Web Scraping', 'JSON', 'REST APIs', 'OAuth2', 'Shopify'],
    image: WigScreenshot
  },
  {
    title: 'AJD Laser Cutting Automation',
    description: 'A custom software solution for a small business, AJD Design, to automate creation of designs and laser cutting sheets.',
    tags: ['Python', 'Visual Basic', 'Automation', 'Web Scraping', 'JSON', 'REST APIs', 'OAuth2'],
    image: AJDAutoScreenshot,
    link: 'https://github.com/TheBryanD/AJDMonogramAutomation'
  },
  {
    title: 'Senior Capstone Project - Website Sentiment Analysis Recommendation System',
    description: 'A web application that analyzes webpages for Cru and provides recommendations based on the analysis. This looked at sentiment analysis, keyword extraction, and HTML content to help improve user engagement and content effectiveness.',
    tags: ['Python', 'Pandas', 'Spacy', 'Sentiment Analysis', 'HTML', 'SQL', 'Hex'],
    image: CruWebpageImage
  }
];