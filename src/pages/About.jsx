import React from 'react';
import { Box, Typography, Card, CardContent, Link } from '@mui/material';
import { Helmet } from 'react-helmet';
import styles from '../styles/About.module.css';

function About() {
  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>About Pragyan Sahu | Web Intern – AediaX Tech Private Limited</title>

        <meta
          name="description"
          content="Learn about Pragyan Sahu, a Web Intern at AediaX Tech Private Limited and a student at Gangadhar Meher University. Interested in Full Stack Development, Python, and AI-driven web solutions."
        />

        <meta
          name="keywords"
          content="Pragyan Sahu, AediaX Tech, Web Intern, Gangadhar Meher University, Full Stack Developer, Python Developer, Web Developer, Portfolio"
        />

        <meta name="author" content="Pragyan Sahu" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="About Pragyan Sahu | Web Intern at AediaX Tech" />
        <meta
          property="og:description"
          content="Pragyan Sahu is a Web Intern at AediaX Tech Private Limited and a student at Gangadhar Meher University, building modern web applications using Full Stack and Python."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Pragyan Sahu Portfolio" />
        <meta property="og:url" content="https://pragyan.aediax.com/about" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pragyan Sahu | Web Intern at AediaX Tech" />
        <meta
          name="twitter:description"
          content="Web Intern at AediaX Tech Private Limited | Student at Gangadhar Meher University | Full Stack & Python Developer"
        />
      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
      <Box id={styles.aboutSection} className={styles.aboutContainer}>
        <Typography id={styles.aboutTitle} variant="h2" className={styles.title}>
          About Pragyan Sahu
        </Typography>

        <Typography id={styles.aboutSubtitle} variant="h5" className={styles.subtitle}>
          Web Intern, AediaX Tech Private Limited
        </Typography>

        {/* Biography */}
        <Typography id={styles.bioPara1} className={styles.bio}>
          Pragyan Sahu is a passionate web developer and technology learner currently working as a
          <b> Web Intern</b> at <b>AediaX Tech Private Limited</b>. He focuses on building modern,
          responsive, and performance-optimized web interfaces.
        </Typography>

        <Typography id={styles.bioPara2} className={styles.bio}>
          Along with internship experience, Pragyan is also a student at <b>Gangadhar Meher University</b>,
          pursuing <b>B.Sc. IST (Semester IV)</b> (Information Science & Telecommunication).
          He is continuously improving his skills in Full Stack Development, Python, and AI-based tools.
        </Typography>

        <Typography id={styles.bioPara3} className={styles.bio}>
          His goal is to become a skilled Full Stack Developer and contribute to real-world projects,
          solving problems with clean UI design, efficient coding, and scalable systems.
        </Typography>

        {/* Cards */}
        <Box id={styles.cardsWrapper} className={styles.cardContainer}>
          {/* Professional Role */}
          <Card id={styles.professionalRoleCard} className={styles.card}>
            <CardContent>
              <Typography
                id={styles.professionalRoleTitle}
                variant="h6"
                className={styles.cardTitle}
              >
                Professional Role
              </Typography>

              <Typography id={styles.professionalRoleText} className={styles.cardText}>
                Pragyan Sahu currently works as a <b>Web Intern</b> at <b>AediaX Tech Private Limited</b>,
                where he learns industry practices and contributes to web development tasks such as
                frontend UI design, responsive layouts, and web performance improvements.
              </Typography>

              <Typography id={styles.professionalRoleLinks} className={styles.links}>
                <Link href="https://aediax.com" target="_blank" rel="noreferrer">
                  AediaX Official Website
                </Link>
              </Typography>
            </CardContent>
          </Card>

          {/* Academic Background */}
          <Card id={styles.academicCard} className={styles.card}>
            <CardContent>
              <Typography id={styles.academicTitle} variant="h6" className={styles.cardTitle}>
                Academic Background
              </Typography>

              <Typography id={styles.academicText} className={styles.cardText}>
                Pragyan is studying at <b>Gangadhar Meher University</b> in the branch of
                <b> Information Science & Telecommunication</b>. His academic learning supports his
                technical growth in programming, databases, web technologies, and software development.
              </Typography>
            </CardContent>
          </Card>

          {/* Skills & Interests */}
          <Card id={styles.familyCard} className={styles.card}>
            <CardContent>
              <Typography id={styles.familyTitle} variant="h6" className={styles.cardTitle}>
                Skills & Interests
              </Typography>

              <Typography id={styles.familyText1} className={styles.cardText}>
                Pragyan is interested in learning and working on:
                <b> Full Stack Web Development, Python Programming, Modern UI/UX, and AI Tools</b>.
                He enjoys building real-world projects and improving his skills daily.
              </Typography>

              <Typography id={styles.familyText2} className={styles.cardText}>
                He also runs a gaming YouTube channel named <b>PRAGYAN PLAYS</b>, where he uploads short
                BGMI gameplay videos and works on growing his audience globally.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default About;
