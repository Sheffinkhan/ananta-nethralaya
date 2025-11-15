"use client"

import { Eye, Shield, Layers, Heart, Microscope, Award, Target } from "lucide-react"
import  CLINIC_CONTENT  from "../constants/content"
import SEO from "../components/SEO"




const AboutPage = () => {
  const getIcon = (iconName, isLarge = false) => {
    const iconProps = {
      size: isLarge ? 48 : 40,
      className: "text-amber-400 group-hover:rotate-12 transition-transform duration-300"
    }
    
    switch(iconName) {
      case "Award":
        return <Award {...iconProps} />
      case "Shield":
        return <Shield {...iconProps} />
      case "Layers":
        return <Layers {...iconProps} />
      case "Heart":
        return <Heart {...iconProps} />
      case "Microscope":
        return <Microscope {...iconProps} />
      case "Target":
        return <Target {...iconProps} />
      case "Eye":
        return <Eye {...iconProps} />
      default:
        return <Eye {...iconProps} />
    }
  }

  return (
    <>
      <SEO
        title="About Us - Leading Eye Care Center | Ananta Nethralaya"
        description="Learn about Ananta Nethralaya, Kerala's premier eye care center. Founded by Dr. Ashwin C Somarajan with 8+ years expertise. Our vision, mission, and commitment to excellence in ophthalmology."
        keywords="about Ananta Nethralaya, eye hospital Kerala, Dr Ashwin Somarajan, eye care center Muvattupuzha, ophthalmology excellence Kerala, retina center Kerala"
        canonical="https://www.anantanethralaya.org/about"
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-teal-800 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              About Ananta Nethralaya
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto animate-fade-in mb-4">
              {CLINIC_CONTENT.about.description}
            </p>
            <p className="text-base md:text-lg text-gray-200 max-w-4xl mx-auto animate-fade-in">
              {CLINIC_CONTENT.about.intro}
            </p>
          </div>
        </section>

        {/* Vision, Mission, Excellence Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {CLINIC_CONTENT.visionMissionExcellence.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${idx * 0.15}s both`,
                  }}
                >
                  <div className={`h-full p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${
                    idx === 0 ? 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200 hover:border-cyan-400' :
                    idx === 1 ? 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:border-amber-400' :
                    'bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 hover:border-teal-400'
                  }`}>
                    <div className="flex justify-center mb-6">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                        idx === 0 ? 'bg-gradient-to-br from-cyan-600 to-cyan-800' :
                        idx === 1 ? 'bg-gradient-to-br from-amber-600 to-amber-800' :
                        'bg-gradient-to-br from-teal-600 to-teal-800'
                      }`}>
                        {getIcon(item.icon, true)}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className={`text-xl md:text-2xl font-bold mb-4 ${
                        idx === 0 ? 'text-cyan-800' :
                        idx === 1 ? 'text-amber-800' :
                        'text-teal-800'
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
                Why Choose Ananta Nethralaya
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your trust in us is built on these pillars of excellence
              </p>
            </div>

            {/* First Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
              {CLINIC_CONTENT.whyChooseUs.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${idx * 0.15}s both`,
                }}
              >
                {/* Card */}
                <div className="h-full p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-teal-200 hover:border-teal-400">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {getIcon(item.icon)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-teal-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto mb-16">
            {CLINIC_CONTENT.whyChooseUs.slice(3, 5).map((item, idx) => (
              <div
                key={idx + 3}
                className="group relative w-full md:w-[calc(33.333%-1.33rem)]"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${(idx + 3) * 0.15}s both`,
                }}
              >
                {/* Card */}
                <div className="h-full p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-teal-200 hover:border-teal-400">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {getIcon(item.icon)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-teal-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Our Story Section */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-teal-600 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden p-2 group shadow-lg">
                  <img
                    src="ANlogo.jpg"
                    alt="Ananta Nethralaya Logo"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{CLINIC_CONTENT.ourStory.title}</h2>
              </div>
              <div className="text-gray-100 leading-relaxed text-base md:text-lg space-y-4">
                {CLINIC_CONTENT.ourStory.content.map((paragraph, idx) => (
                  <p key={idx}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Inline Styles for Animation */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default AboutPage
