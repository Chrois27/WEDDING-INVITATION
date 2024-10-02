import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ borderBottom: '2px solid var(--color-secondary)', paddingBottom: '1rem' }}>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;