import { ChevronRight, Eye, Microscope, Activity, Baby, Flame, AlertCircle, Brain, Droplet, Sparkles, Users } from "lucide-react"
import { Link } from "../utils/Router"
import SEO from "../components/SEO"

const ServicesPage = () => {
  // All 10 specialized services with professional icons
  const services = [
    {
      id: 1,
      title: "Premium Cataract Surgery",
      icon: Eye,
      description: "Experience crystal-clear vision through advanced micro-incision painless, sutureless cataract surgery using premium intraocular lenses (IOLs). Personalized lens options for your unique visual needs.",
      features: [
        "Micro-incision painless surgery",
        "Sutureless advanced technique",
        "Premium IOL options",
        "Personalized lens selection",
        "Same-day discharge"
      ]
    },
    {
      id: 2,
      title: "Retina & Vitreous Services",
      icon: Microscope,
      description: "State-of-the-art diagnostics and surgical care for retinal diseases, including diabetic retinopathy, macular disorders, retinal detachment, and vitreoretinal surgeries.",
      features: [
        "Diabetic retinopathy treatment",
        "Macular disorder management",
        "Retinal detachment surgery",
        "Vitreoretinal surgeries",
        "Advanced retinal imaging"
      ]
    },
    {
      id: 3,
      title: "Glaucoma Management",
      icon: Activity,
      description: "Early detection and effective management of glaucoma through advanced imaging, laser, and surgical techniques to preserve vision and prevent optic nerve damage.",
      features: [
        "Advanced glaucoma imaging",
        "Laser glaucoma treatment",
        "Surgical intervention options",
        "Optic nerve monitoring",
        "Personalized pressure control"
      ]
    },
    {
      id: 4,
      title: "ROP (Retinopathy of Prematurity) Screening & Treatment",
      icon: Baby,
      description: "Specialized retinal screening and laser therapy for premature infants, ensuring timely intervention to safeguard lifelong vision.",
      features: [
        "Premature infant screening",
        "Early detection protocols",
        "Laser therapy for ROP",
        "Regular monitoring",
        "Family counseling"
      ]
    },
    {
      id: 5,
      title: "Uvea & Inflammatory Eye Diseases",
      icon: Flame,
      description: "Comprehensive care for uveitis and other inflammatory eye disorders with an integrated approach to diagnosis and management.",
      features: [
        "Uveitis diagnosis & treatment",
        "Inflammatory disorder care",
        "Immunosuppressive therapy",
        "Long-term monitoring",
        "Multidisciplinary approach"
      ]
    },
    {
      id: 6,
      title: "Ocular Trauma Care",
      icon: AlertCircle,
      description: "Emergency management for ocular injuries, including corneal, anterior segment, and retinal trauma — restoring both structure and sight.",
      features: [
        "24/7 emergency care",
        "Corneal injury repair",
        "Anterior segment reconstruction",
        "Retinal trauma surgery",
        "Immediate intervention"
      ]
    },
    {
      id: 7,
      title: "Neuro-Ophthalmology",
      icon: Brain,
      description: "Diagnosis and management of vision problems related to the brain and nervous system, such as optic neuritis, double vision, and visual field loss.",
      features: [
        "Optic neuritis treatment",
        "Double vision assessment",
        "Visual field testing",
        "Neurological eye exams",
        "Brain-eye coordination care"
      ]
    },
    {
      id: 8,
      title: "Dry Eye & Ocular Surface Disorders",
      icon: Droplet,
      description: "Advanced diagnostics and individualized treatment protocols for dry eye syndrome and ocular surface diseases, combining comfort with long-term relief.",
      features: [
        "Comprehensive dry eye assessment",
        "Tear film analysis",
        "Advanced treatment options",
        "Lifestyle modification guidance",
        "Long-term management plans"
      ]
    },
    {
      id: 9,
      title: "Refractive Services (LASIK & Beyond)",
      icon: Sparkles,
      description: "Vision correction through safe, precise, and customized refractive solutions — helping you reduce or eliminate dependence on glasses or contact lenses.",
      features: [
        "LASIK surgery",
        "Custom refractive procedures",
        "Advanced corneal topography",
        "Pre-operative assessments",
        "Glasses-free lifestyle options"
      ]
    },
    {
      id: 10,
      title: "Comprehensive Eye Care for All Ages",
      icon: Users,
      description: "From pediatric eye check-ups to senior eye health, we provide preventive, diagnostic, and therapeutic eye care under one roof.",
      features: [
        "Pediatric eye examinations",
        "Adult eye health screening",
        "Senior vision care",
        "Preventive eye care",
        "Complete family eye health"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Eye Care Services - Cataract, Retina & Comprehensive Care"
        description="Comprehensive eye care services at Ananta Nethralaya: Premium cataract surgery, retina & vitreous services, glaucoma management, ROP screening, neuro-ophthalmology, and more. Expert care powered by advanced technology."
        keywords="cataract surgery Kerala, retina surgery Muvattupuzha, diabetic eye care, glaucoma treatment, ROP screening, neuro-ophthalmology, dry eye treatment, LASIK surgery, ocular trauma care, comprehensive eye care"
        canonical="https://www.anantanethralaya.org/services"
      />
      <div className="pt-16 md:pt-20">
        <section className="py-12 md:py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">Our Specialized Services</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-2">
              Comprehensive eye care powered by expertise, technology, and compassion
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4 group border border-gray-100 hover:border-teal-300"
                    style={{
                      animation: `fadeInUp 0.8s ease-out ${idx * 0.1}s both`,
                    }}
                  >
                    <div className="mb-4 md:mb-6 bg-gradient-to-br from-teal-100 to-amber-100 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <IconComponent className="text-teal-700 group-hover:text-amber-600 transition-colors duration-300" size={28} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-3 md:mb-4 group-hover:text-amber-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">{service.description}</p>
                    <ul className="space-y-2 md:space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-xs md:text-sm text-gray-700 group/item">
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

            <div className="text-center mt-12 md:mt-16">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-teal-700 to-teal-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-base md:text-lg"
              >
                Book a Consultation
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>

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
  )
}

export default ServicesPage
