import { ChevronRight } from "lucide-react"
import { Link } from "../utils/Router"
import SEO from "../components/SEO"

const ServicesPage = () => {
  const services = [
    {
      title: "Premium Cataract Surgery",
      description:
        "Advanced micro-incision cataract surgery with premium IOL options for crystal clear vision. We use the latest phacoemulsification technology for faster recovery.",
      icon: "👁️",
      features: ["Micro-incision surgery", "Premium IOL options", "Same-day discharge", "Quick recovery"],
    },
    {
      title: "Sutureless Retina Surgery",
      description:
        "Cutting-edge retinal treatments including vitrectomy and laser procedures for retinal disorders with minimal invasiveness.",
      icon: "🔬",
      features: ["23G/25G Vitrectomy", "Retinal detachment repair", "Macular hole surgery", "Laser treatments"],
    },
    {
      title: "Comprehensive Eye Care",
      description:
        "Complete eye examinations, vision testing, and preventive care for all age groups with detailed assessments.",
      icon: "✨",
      features: ["Complete eye exams", "Vision testing", "Pediatric eye care", "Geriatric care"],
    },
    {
      title: "Diabetic Retinopathy Care",
      description:
        "Specialized screening, monitoring, and treatment for diabetes-related eye complications to prevent vision loss.",
      icon: "💉",
      features: ["Retinal screening", "Laser photocoagulation", "Anti-VEGF injections", "Regular monitoring"],
    },
    {
      title: "Glaucoma Management",
      description:
        "Advanced diagnosis and treatment of glaucoma to prevent vision loss and preserve sight with comprehensive care.",
      icon: "🎯",
      features: ["IOP monitoring", "Medical management", "Laser treatments", "Surgical options"],
    },
    {
      title: "Corneal Treatments",
      description:
        "Expert management of corneal diseases, infections, and injuries with modern techniques and therapies.",
      icon: "💎",
      features: ["Corneal ulcer treatment", "Keratoconus management", "Dry eye therapy", "Pterygium surgery"],
    },
  ]

  return (
    <>
      <SEO
        title="Eye Care Services - Cataract, Retina & Comprehensive Care"
        description="Comprehensive eye care services at Ananta Nethralaya: Premium cataract surgery, sutureless retina surgery, diabetic retinopathy care, glaucoma management, corneal treatments, and more. Advanced technology with expert care."
        keywords="cataract surgery Kerala, retina surgery Muvattupuzha, diabetic eye care, glaucoma treatment, corneal surgery, eye care services, phacoemulsification, vitrectomy Kerala, IOL implantation, laser eye treatment"
        canonical="https://www.anantanethralaya.org/services"
      />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive eye care solutions with advanced technology and personalized treatment plans
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group border border-gray-100 hover:border-teal-300"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-teal-700 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700 group/item">
                        <ChevronRight
                          className="text-amber-500 mr-2 group-hover/item:translate-x-1 transition-transform"
                          size={16}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-teal-700 to-teal-800 text-white px-10 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg font-semibold text-lg"
              >
                Book a Consultation
                <ChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServicesPage
