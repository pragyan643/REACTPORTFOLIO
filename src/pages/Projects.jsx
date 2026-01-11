import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Link
} from '@mui/material';

import LanguageIcon from '@mui/icons-material/Language';
import StorageIcon from '@mui/icons-material/Storage';

import styles from '../styles/Projects.module.css';

const TechStack = ({ tech }) => (
  <Box className={styles.tech}>
    {tech.map((t, i) => (
      <Chip key={i} label={t} size="small" style={{ color: 'rgb(66, 201, 255)' }} />
    ))}
  </Box>
);

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio website showcasing my skills, projects, and contact information using clean UI design.",
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: "https://pragyan643.github.io/Portfolio/",
      icon: <LanguageIcon className={styles.icon} />,
      color: styles.blue
    },
    {
      title: "My Home Town Website Project",
      description: "A simple website project about my hometown with images and information, built using HTML and CSS.",
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: "", // add link if hosted
      icon: <StorageIcon className={styles.icon} />,
      color: styles.green
    }
  ];

  // Create meta description from projects
  const metaDescription = `Projects by Pragyan Sahu including ${projects
    .map(p => p.title)
    .join(', ')}. Explore my web development work built using HTML, CSS, and JavaScript.`;

  return (
    <>
      <Helmet>
        <title>Projects by Pragyan Sahu | Web Development Portfolio</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="Pragyan Sahu projects, portfolio website, html css projects, web development projects, hometown project"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pragyansahu.com/projects" />
        <meta property="og:title" content="Projects by Pragyan Sahu | Web Development Portfolio" />
        <meta
          property="og:description"
          content="Explore my projects including portfolio website and home town website using HTML, CSS and JavaScript."
        />
        <meta property="og:image" content="https://pragyansahu.com/images/projects-og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pragyansahu.com/projects" />
        <meta property="twitter:title" content="Projects by Pragyan Sahu | Web Development Portfolio" />
        <meta
          property="twitter:description"
          content="Check out my web development projects including portfolio website and home town website project."
        />
        <meta property="twitter:image" content="https://pragyansahu.com/images/projects-twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://pragyansahu.com/projects" />

        {/* Additional meta tags */}
        <meta name="author" content="Pragyan Sahu" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        {/* Structured Data for Projects/Portfolio */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Projects Portfolio - Pragyan Sahu",
            "description": "Collection of projects by Pragyan Sahu",
            "url": "https://pragyansahu.com/projects",
            "numberOfItems": projects.length,
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "url": project.link || "https://pragyansahu.com/projects",
                "keywords": project.tech.join(", "),
                "author": {
                  "@type": "Person",
                  "name": "Pragyan Sahu"
                }
              }
            }))
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://pragyansahu.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Projects",
                "item": "https://pragyansahu.com/projects"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          My Projects
        </Typography>

        <Typography className={styles.subtitle}>
          Portfolio and web projects built using HTML, CSS & JavaScript
        </Typography>

        <Box className={styles.cards}>
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`${styles.card} ${project.color}`}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <CardContent>
                {project.icon}
                <Typography className={styles.cardTitle} itemProp="name">
                  {project.title}
                </Typography>
                <Typography className={styles.text} itemProp="description">
                  {project.description}
                </Typography>

                <Box itemProp="keywords" style={{ display: 'none' }}>
                  {project.tech.join(', ')}
                </Box>

                <TechStack tech={project.tech} />

                {project.link && project.link.trim() !== "" && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="url"
                    aria-label={`Visit ${project.title}`}
                  >
                    View Project
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Projects;
