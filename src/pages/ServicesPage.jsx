// src/pages/ServicesPage.jsx
import {
  Eye,
  Smiley,
  Flame,
  CircleWavyWarning,
  Brain,
  Drop,
  UsersThree,
} from "phosphor-react";

import { ChevronRight } from "lucide-react";
import { Link } from "../utils/Router";
import SEO from "../components/SEO";

// ------------------------------------------------------------
// PREMIUM CUSTOM SVG ICONS (NEW Retina, Glaucoma, Refractive)
// ------------------------------------------------------------

// ⭐ NEW RETINA ICON (Different from HomePage Retina)
const RetinaIcon = ({ size = 28, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9v-3" />
    <path d="M12 18v-3" />
    <path d="M15 12h3" />
    <path d="M6 12h3" />
  </svg>
);

const GlaucomaIcon = ({ size = 28, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Eye outline */}
    <path d="M2 12c3 -5 7 -8 10 -8s7 3 10 8c-3 5 -7 8 -10 8s-7 -3 -10 -8z" />

    {/* Optic nerve cupping (larger inner cup) */}
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="12" cy="12" r="1.8" />

    {/* Radial pressure lines (IOP increase) */}
    <path d="M12 3.5v2" />
    <path d="M12 18.5v2" />
    <path d="M4.5 12h2" />
    <path d="M17.5 12h2" />
  </svg>
);


const RefractiveIcon = ({ size = 28, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Corneal curve */}
    <path d="M4 12c2 -4 6 -6 10 -6c3 0 6 1.5 8 6c-2 4 -5 6 -8 6c-4 0 -8 -2 -10 -6z" />

    {/* Corneal flap cut */}
    <path d="M9 10c2 -1 4 -1 6 0" />

    {/* Laser beam */}
    <path d="M14 4l6 -2" />
    <path d="M14 20l6 2" />

    {/* Central optical zone */}
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// ------------------------------------------------------------

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Premium Cataract Surgery",
      icon: Eye,
      description:
        "Experience crystal-clear vision through advanced micro-incision painless, sutureless cataract surgery using premium intraocular lenses (IOLs). Personalized lens options for your unique visual needs.",
      features: [
        "Micro-incision painless surgery",
        "Sutureless advanced technique",
        "Premium IOL options",
        "Personalized lens selection",
        "Same-day discharge",
      ],
    },
    {
      id: 2,
      title: "Retina & Vitreous Services",
      icon: RetinaIcon, // ⭐ NEW Retina icon applied here
      description:
        "State-of-the-art diagnostics and surgical care for retinal diseases, including diabetic retinopathy, macular disorders, retinal detachment, and vitreoretinal surgeries.",
      features: [
        "Diabetic retinopathy treatment",
        "Macular disorder management",
        "Retinal detachment surgery",
        "Vitreoretinal surgeries",
        "Advanced retinal imaging",
      ],
    },
    {
      id: 3,
      title: "Glaucoma Management",
      icon: GlaucomaIcon,
      description:
        "Early detection and effective management of glaucoma through advanced imaging, laser, and surgical techniques to preserve vision and prevent optic nerve damage.",
      features: [
        "Advanced glaucoma imaging",
        "Laser glaucoma treatment",
        "Surgical intervention options",
        "Optic nerve monitoring",
        "Personalized pressure control",
      ],
    },
    {
      id: 4,
      title: "ROP (Retinopathy of Prematurity) Screening & Treatment",
      icon: Smiley,
      description:
        "Specialized retinal screening and laser therapy for premature infants, ensuring timely intervention to safeguard lifelong vision.",
      features: [
        "Premature infant screening",
        "Early detection protocols",
        "Laser therapy for ROP",
        "Regular monitoring",
        "Family counseling",
      ],
    },
    {
      id: 5,
      title: "Uvea & Inflammatory Eye Diseases",
      icon: Flame,
      description:
        "Comprehensive care for uveitis and other inflammatory eye disorders with an integrated approach to diagnosis and management.",
      features: [
        "Uveitis diagnosis & treatment",
        "Inflammatory disorder care",
        "Immunosuppressive therapy",
        "Long-term monitoring",
        "Multidisciplinary approach",
      ],
    },
    {
      id: 6,
      title: "Ocular Trauma Care",
      icon: CircleWavyWarning,
      description:
        "Emergency management for ocular injuries, including corneal, anterior segment, and retinal trauma — restoring both structure and sight.",
      features: [
        "24/7 emergency care",
        "Corneal injury repair",
        "Anterior segment reconstruction",
        "Retinal trauma surgery",
        "Immediate intervention",
      ],
    },
    {
      id: 7,
      title: "Neuro-Ophthalmology",
      icon: Brain,
      description:
        "Diagnosis and management of vision problems related to the brain and nervous system, such as optic neuritis, double vision, and visual field loss.",
      features: [
        "Optic neuritis treatment",
        "Double vision assessment",
        "Visual field testing",
        "Neurological eye exams",
        "Brain-eye coordination care",
      ],
    },
    {
      id: 8,
      title: "Dry Eye & Ocular Surface Disorders",
      icon: Drop,
      description:
        "Advanced diagnostics and individualized treatment protocols for dry eye syndrome and ocular surface diseases, combining comfort with long-term relief.",
      features: [
        "Comprehensive dry eye assessment",
        "Tear film analysis",
        "Advanced treatment options",
        "Lifestyle modification guidance",
        "Long-term management plans",
      ],
    },
    {
      id: 9,
      title: "Refractive Services (LASIK & Beyond)",
      icon: RefractiveIcon,
      description:
        "Vision correction through safe, precise, and customized refractive solutions — helping you reduce or eliminate dependence on glasses or contact lenses.",
      features: [
        "LASIK surgery",
        "Custom refractive procedures",
        "Advanced corneal topography",
        "Pre-operative assessments",
        "Glasses-free lifestyle options",
      ],
    },
    {
      id: 10,
      title: "Comprehensive Eye Care for All Ages",
      icon: UsersThree,
      description:
        "From pediatric eye check-ups to senior eye health, we provide preventive, diagnostic, and therapeutic eye care under one roof.",
      features: [
        "Pediatric eye examinations",
        "Adult eye health screening",
        "Senior vision care",
        "Preventive eye care",
        "Complete family eye health",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Eye Care Services - Cataract, Retina & Comprehensive Care"
        description="Comprehensive eye care services at Ananta Nethralaya: Premium cataract surgery, retina & vitreous services, glaucoma management, ROP screening, neuro-ophthalmology and more."
      />

      <div className="pt-16 md:pt-20">
        {/* HERO */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Our Specialized Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-2">
              Comprehensive eye care powered by expertise, technology, and
              compassion
            </p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, idx) => {
                const IconComponent = service.icon;

                return (
                  <div
                    key={service.id}
                    className={`bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 group border border-gray-100 hover:border-teal-300
                      ${service.id === 10 ? "lg:col-start-2" : ""}`}
                    style={{
                      animation: `fadeInUp 0.8s ease-out ${idx * 0.1}s both`,
                    }}
                  >
                    <div className="mb-4 md:mb-6 bg-gradient-to-br from-teal-100 to-amber-100 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <IconComponent
                        className="text-teal-700 group-hover:text-amber-600 transition-colors duration-300"
                        size={28}
                      />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-3 md:mb-4 group-hover:text-amber-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2 md:space-y-3">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start text-xs md:text-sm text-gray-700 group/item"
                        >
                          <ChevronRight
                            className="text-amber-500 mr-2 mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform"
                            size={14}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* BUTTON */}
            <div className="text-center mt-12 md:mt-16">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-teal-700 to-teal-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-base md:text-lg"
              >
                Book a Consultation
                <ChevronRight className="ml-2"size={20}/>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default ServicesPage;
