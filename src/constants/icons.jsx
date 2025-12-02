// ===============================
// PREMIUM MEDICAL SVG ICONS
// ===============================

// 1️⃣ CATARACT ICON — Simple blank eye shape (outline only)
export const CataractIcon = ({ size = 32, className = "" }) => (
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
    {/* Simple eye outline - no pupil or iris */}
    <path d="M8 32C14 20 22 14 32 14C42 14 50 20 56 32C50 44 42 50 32 50C22 50 14 44 8 32Z" />
  </svg>
);

// 2️⃣ RETINA ICON — Eyeball with blood vessels and optic nerve
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
    {/* Eye outline */}
    <path d="M8 32C14 20 22 14 32 14C42 14 50 20 56 32C50 44 42 50 32 50C22 50 14 44 8 32Z" />
    
    {/* Retinal blood vessels branching from optic disc */}
    <circle cx="32" cy="32" r="4" fill="currentColor" />
    <path d="M32 28C32 24 30 20 28 18" />
    <path d="M32 28C32 24 34 20 36 18" />
    <path d="M32 36C32 40 30 44 28 46" />
    <path d="M32 36C32 40 34 44 36 46" />
    <path d="M28 32C24 32 20 30 18 28" />
    <path d="M36 32C40 32 44 30 46 28" />
  </svg>
);

// 3️⃣ GLAUCOMA ICON — Circle with optic nerve cupping (cup-to-disc ratio)
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
    {/* Outer circle (disc) */}
    <circle cx="32" cy="32" r="18" />
    
    {/* Horizontal line through center */}
    <path d="M14 32H50" />
    
    {/* Optic cup - arc in lower portion (increased cupping in glaucoma) */}
    <path d="M20 32C20 38 25 42 32 42C39 42 44 38 44 32" />
  </svg>
);

// 4️⃣ REFRACTIVE / LASIK ICON — Eye with laser beam
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
    {/* Eye outline */}
    <path d="M8 32C14 20 22 14 32 14C42 14 50 20 56 32C50 44 42 50 32 50C22 50 14 44 8 32Z" />
    
    {/* Pupil/iris target area */}
    <circle cx="32" cy="32" r="6" />
    
    {/* Laser beam from top-left targeting the center */}
    <path d="M18 18L28 28" />
    <path d="M20 16L26 26" />
    <path d="M16 20L26 26" />
  </svg>
);

export const DiabeticRetinaIcon = ({ size = 32, className = "" }) => (
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
    {/* Eye outline */}
    <path d="M8 32C14 20 22 14 32 14C42 14 50 20 56 32C50 44 42 50 32 50C22 50 14 44 8 32Z" />

    {/* Retina circle */}
    <circle cx="32" cy="32" r="6" />

    {/* Diabetic blood drop indicator */}
    <path d="M42 26c3 4 3 8 0 10c-3 2 -7 0 -7 -4c0 -4 4 -6 7 -6z" />

    {/* Retinal vessels */}
    <path d="M26 30c-3 -1 -6 -3 -8 -5" />
    <path d="M26 34c-3 1 -6 3 -8 5" />
    <path d="M38 30c3 -1 6 -3 8 -5" />
    <path d="M38 34c3 1 6 3 8 5" />
  </svg>
);

