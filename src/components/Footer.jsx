import React from 'react';
import { Box, Typography, Link, Tooltip } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language'; // Portfolio Website
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import styles from '../styles/Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      className={styles.footer}
      style={{ background: 'rgb(3, 11, 30)' }}
    >
      {/* Top Section */}
      <Box className={styles.topFooter}>

        {/* Navigation */}
        <Box className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
        </Box>

        {/* Social Icons */}
        <Box className={styles.socialLinks}>

          <Tooltip title="LinkedIn">
            <Link
              href="https://www.linkedin.com/in/pragyan643"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <LinkedInIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Instagram">
            <Link
              href="https://www.instagram.com/pragyan643?igsh=MXMwZjE2dzZmZ2RxeA=="
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <InstagramIcon />
            </Link>
          </Tooltip>

          <Tooltip title="YouTube">
            <Link
              href="https://www.youtube.com/@PRAGYAN_GAMMING"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <YouTubeIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Portfolio Website">
            <Link
              href="https://pragyan643.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <LanguageIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Email">
            <Link
              href="mailto:pragyansahu643@gmail.com"
              className={styles.socialLink}
            >
              <EmailIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Phone / WhatsApp">
            <Link
              href="tel:+919937982318"
              className={styles.socialLink}
            >
              <PhoneIcon />
            </Link>
          </Tooltip>

          <Tooltip title="India">
            <Link
              href="https://maps.google.com/?q=India"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <LocationOnIcon />
            </Link>
          </Tooltip>

        </Box>
      </Box>

      {/* Divider */}
      <Box className={styles.divider}></Box>

      {/* Copyright */}
      <Typography variant="body2" className={styles.text}>
        © {currentYear} <strong>Pragyan Sahu</strong>
      </Typography>
    </Box>
  );
}

export default Footer;
