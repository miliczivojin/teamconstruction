import { useEffect } from 'react';

const SITE_NAME = 'TEAM Construction 018';
const DEFAULT_DESC =
  'Građevinske usluge i moderna stambena izgradnja u Nišu. Gotovi projekti i objekti u izgradnji.';
const CANONICAL_BASE = 'https://teamconstruction018.rs';

/**
 * Sets document title, canonical link and meta description (and OG) for SEO.
 * @param {{ title?: string, description?: string }} props - Optional page title (appended to SITE_NAME) and meta description.
 */
function SeoHead({ title, description = DEFAULT_DESC }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  useEffect(() => {
    document.title = fullTitle;

    const canonical =
      typeof window !== 'undefined'
        ? `${CANONICAL_BASE}${window.location.pathname.replace(/\/$/, '') || '/'}`
        : CANONICAL_BASE;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical);

    const setMeta = (attr, value, content) => {
      const selector = attr === 'name' ? `meta[name="${value}"]` : `meta[property="${value}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
  }, [fullTitle, description]);

  return null;
}

export default SeoHead;
