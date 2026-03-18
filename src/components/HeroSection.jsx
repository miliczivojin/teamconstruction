import { useEffect } from 'react';
import './HeroSection.css';

function HeroSection({ title, subtitle, image }) {
  useEffect(() => {
    if (!image) return;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = typeof image === 'string' ? image : (image?.src ?? image?.default ?? '');
    document.head.appendChild(link);
    return () => link.remove();
  }, [image]);

  return (
    <section
      className={`hero ${image ? 'hero--with-image' : ''}`}
      style={image ? { '--hero-bg-image': `url(${image})` } : undefined}
    >
      {image && <div className="hero-overlay" aria-hidden="true" />}
      <div className="hero-inner">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default HeroSection;
