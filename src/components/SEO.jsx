// src/components/SEO.jsx
"use client";

import { useEffect } from "react";

const SEO = ({
  title,
  description,
  keywords,
  author = "Ananta Nethralaya",
  ogImage = "ANlogo.jpg",
  canonical,
}) => {
  useEffect(() => {
    // Create schema markup inside useEffect where variables are accessible
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Ananta Nethralaya",
      image: ogImage,
      description: description,
      address: {
        "@type": "PostalAddress",
        streetAddress: "MCS Hospital, Muvattupuzha",
        addressLocality: "Ernakulam",
        addressRegion: "Kerala",
        postalCode: "686661",
        addressCountry: "IN",
      },
      telephone: "+918075649788",
      url: "https://www.anantanethralaya.org",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);
    document.title = title;

    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("name", "author", author);

    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "og:type", "website");

    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", ogImage);

    if (canonical) {
      updateLinkTag("canonical", canonical);
    }

    updateMetaTag("name", "robots", "index, follow");

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [title, description, keywords, author, ogImage, canonical]);

  const updateMetaTag = (attr, attrValue, content) => {
    let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
    if (element) {
      element.setAttribute("content", content);
    } else {
      element = document.createElement("meta");
      element.setAttribute(attr, attrValue);
      element.setAttribute("content", content);
      document.head.appendChild(element);
    }
  };

  const updateLinkTag = (rel, href) => {
    let element = document.querySelector(`link[rel="${rel}"]`);
    if (element) {
      element.setAttribute("href", href);
    } else {
      element = document.createElement("link");
      element.setAttribute("rel", rel);
      element.setAttribute("href", href);
      document.head.appendChild(element);
    }
  };

  return null;
};

export default SEO;