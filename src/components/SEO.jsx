"use client"

import { useEffect } from "react"

const SEO = ({ title, description, keywords, author = "Ananta Nethralaya", ogImage = "/logo.png", canonical }) => {
  useEffect(() => {
    document.title = title

    updateMetaTag("name", "description", description)
    updateMetaTag("name", "keywords", keywords)
    updateMetaTag("name", "author", author)

    updateMetaTag("property", "og:title", title)
    updateMetaTag("property", "og:description", description)
    updateMetaTag("property", "og:image", ogImage)
    updateMetaTag("property", "og:type", "website")

    updateMetaTag("name", "twitter:card", "summary_large_image")
    updateMetaTag("name", "twitter:title", title)
    updateMetaTag("name", "twitter:description", description)
    updateMetaTag("name", "twitter:image", ogImage)

    if (canonical) {
      updateLinkTag("canonical", canonical)
    }

    updateMetaTag("name", "robots", "index, follow")
  }, [title, description, keywords, author, ogImage, canonical])

  const updateMetaTag = (attr, attrValue, content) => {
    let element = document.querySelector(`meta[${attr}="${attrValue}"]`)
    if (element) {
      element.setAttribute("content", content)
    } else {
      element = document.createElement("meta")
      element.setAttribute(attr, attrValue)
      element.setAttribute("content", content)
      document.head.appendChild(element)
    }
  }

  const updateLinkTag = (rel, href) => {
    let element = document.querySelector(`link[rel="${rel}"]`)
    if (element) {
      element.setAttribute("href", href)
    } else {
      element = document.createElement("link")
      element.setAttribute("rel", rel)
      element.setAttribute("href", href)
      document.head.appendChild(element)
    }
  }

  return null
}

export default SEO
