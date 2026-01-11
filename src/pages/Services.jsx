import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';

import WebIcon from '@mui/icons-material/Language';
import MobileIcon from '@mui/icons-material/Smartphone';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';

import styles from '../styles/Services.module.css';

const Tech = ({ items }) => (
  <Box className={styles.tech}>
    {items.map((item, i) => (
      <Chip
        key={i}
        label={item}
        size="small"
        style={{ color: 'rgb(66, 201, 255)' }}
        aria-label={`Technology: ${item}`}
      />
    ))}
  </Box>
);

function Services() {
  const services = [
    {
      title: "Web Application Development",
      description:
        "Design and development of responsive, SEO-optimized, and high-performance web applications using modern frontend tools.",
      tech: ['React', 'HTML', 'CSS', 'JavaScript', 'SEO', 'Sitemap'],
      icon: <WebIcon className={styles.icon} />,
      color: styles.blue,
      category: "Web Development"
    },
    {
      title: "Frontend UI Development",
      description:
        "Creating clean and modern UI designs with responsive layouts for mobile, tablet, and desktop screens.",
      tech: ['React', 'Material UI', 'CSS', 'Responsive Design'],
      icon: <MobileIcon className={styles.icon} />,
      color: styles.green,
      category: "Frontend Development"
    },
    {
      title: "Backend & Database Basics",
      description:
        "Learning and building backend APIs and database integration for scalable full stack applications.",
      tech: ['Node.js', 'Express', 'Firebase', 'REST API'],
      icon: <CloudIcon className={styles.icon} />,
      color: styles.purple,
      category: "Backend Development"
    },
    {
      title: "Python & AI Tools (Learning)",
      description:
        "Exploring Python programming and AI tools to improve productivity and build intelligent solutions.",
      tech: ['Python', 'AI Tools', 'Automation'],
      icon: <PsychologyIcon className={styles.icon} />,
      color: styles.orange,
      category: "AI / Python"
    },
    {
      title: "Website Optimization",
      description:
        "Improving website performance, SEO, clean code structure, and deployment for better speed and ranking.",
      tech: ['SEO', 'Performance', 'Clean Code'],
      icon: <SecurityIcon className={styles.icon} />,
      color: styles.red,
      category: "Optimization"
    },
    {
      title: "Student Projects & Learning Support",
      description:
        "Building projects for learning, college assignments, and internship-based real-world work at AediaX Tech.",
      tech: ['Projects', 'Internship', 'Git', 'Teamwork'],
      icon: <SchoolIcon className={styles.icon} />,
      color: styles.dark,
      category: "Learning"
    }
  ];

  // Meta description
  const metaDescription = `Services by Pragyan Sahu (Web Intern at AediaX Tech Pvt. Ltd. & student at Gangadhar Meher University) including ${services
    .map(s => s.category)
    .join(', ')}.`;

  // Keywords from all tech stacks
  const allKeywords = Array.from(new Set(services.flatMap(s => s.tech))).join(', ');

  return (
    <>
      <Helmet>
        <title>Services | Pragyan Sahu - Web Development & Full Stack Learning</title>

        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content={`Pragyan Sahu services, ${allKeywords}, web development, React developer, full stack learner, web intern AediaX`}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pragyansahu.com/services" />
        <meta property="og:title" content="Services | Pragyan Sahu" />
        <meta
          property="og:description"
          content="Web development and internship-based services by Pragyan Sahu — building responsive, modern and optimized web apps."
        />
        <meta property="og:image" content="https://pragyansahu.com/images/services-og-image.jpg" />
        <meta property="og:image:alt" content="Pragyan Sahu Services Overview" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pragyansahu.com/services" />
        <meta property="twitter:title" content="Services | Pragyan Sahu" />
        <meta
          property="twitter:description"
          content="Services by Pragyan Sahu (Web Intern at AediaX Tech) in web development, UI design, and full stack learning."
        />
        <meta property="twitter:image" content="https://pragyansahu.com/images/services-twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://pragyansahu.com/services" />

        {/* Additional meta tags */}
        <meta name="author" content="Pragyan Sahu" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="subject" content="Web Development, Full Stack Learning, React Developer" />
        <meta name="classification" content="Technology Services" />

        {/* Structured Data for Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Pragyan Sahu Development Services",
            "description": "Web development and internship-based services by Pragyan Sahu",
            "url": "https://pragyansahu.com/services",
            "provider": {
              "@type": "Person",
              "name": "Pragyan Sahu",
              "jobTitle": "Web Intern",
              "email": "pragyansahu643@gmail.com",
              "url": "https://pragyansahu.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description,
                  "category": service.category,
                  "serviceType": service.tech.join(", "),
                  "provider": {
                    "@type": "Person",
                    "name": "Pragyan Sahu"
                  }
                },
                "position": index + 1
              }))
            }
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
                "name": "Services",
                "item": "https://pragyansahu.com/services"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          Services
        </Typography>

        <Typography className={styles.subtitle}>
          Building modern web solutions & learning full stack development
        </Typography>

        <Box className={styles.cards}>
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${styles.card} ${service.color}`}
              itemScope
              itemType="https://schema.org/Service"
              aria-labelledby={`service-title-${index}`}
            >
              <CardContent>
                <div aria-hidden="true">
                  {service.icon}
                </div>

                <Typography
                  id={`service-title-${index}`}
                  className={styles.cardTitle}
                  itemProp="name"
                >
                  {service.title}
                </Typography>

                <Typography className={styles.text} itemProp="description">
                  {service.description}
                </Typography>

                <Box itemProp="serviceType" style={{ display: 'none' }}>
                  {service.tech.join(', ')}
                </Box>

                <Box itemProp="category" style={{ display: 'none' }}>
                  {service.category}
                </Box>

                <Tech items={service.tech} />
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Services;
