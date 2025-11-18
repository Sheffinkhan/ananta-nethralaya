// src/constants/icons.js

// ===============================
// PREMIUM MEDICAL SVG ICONS
// ===============================

// 1️⃣ RETINA ICON — Option 3 (Selected by user)
export const RetinaIcon = ({ size = 32, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 32C10 18 22 10 32 10C42 10 54 18 58 32C54 46 42 54 32 54C22 54 10 46 6 32Z" />
    <circle cx="32" cy="32" r="10" />
    <path d="M32 22V10" />
    <path d="M32 54V42" />
    <path d="M22 32H10" />
    <path d="M42 32H54" />
    <path d="M32 32L44 20" />
  </svg>
);

// 2️⃣ GLAUCOMA ICON — Eye + Pressure / Tonometry-style
export const GlaucomaIcon = ({ size = 32, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 32C12 18 24 10 32 10C40 10 52 18 58 32C52 46 40 54 32 54C24 54 12 46 6 32Z" />
    <circle cx="32" cy="32" r="10" />
    <path d="M42 12L48 6" />
    <path d="M22 12L16 6" />
    <path d="M48 58L42 52" />
    <path d="M16 58L22 52" />
    <path d="M32 10V6" />
    <path d="M32 58V54" />
  </svg>
);

// 3️⃣ REFRACTIVE / LASIK ICON — Corneal cross-section
export const RefractiveIcon = ({ size = 32, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M10 32C14 22 22 16 32 16C42 16 50 22 54 32C50 42 42 48 32 48C22 48 14 42 10 32Z" />
    <path d="M14 22C20 18 28 14 32 14" />
    <path d="M32 14C36 14 44 18 50 22" />
    <path d="M32 48C36 50 44 46 50 42" />
    <circle cx="32" cy="32" r="6" />
    <path d="M32 6V14" />
  </svg>
);
