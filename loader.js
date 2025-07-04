"use client";

export default function myImageLoader({ src, width, quality }) {
    if(src.includes('https://images.pexels.com')) return src
  return `https://nextjsportfolio.com/${src}?w=${width}&q=${quality || 75}`;
}
