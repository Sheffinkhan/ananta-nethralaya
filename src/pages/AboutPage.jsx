import { Eye, Target, Award } from "lucide-react"
import SEO from "../components/SEO"

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us - Ananta Nethralaya Eye Care Center"
        description="Learn about Ananta Nethralaya, a leading super specialty eye care center in Muvattupuzha, Kerala. Our mission is to provide world-class eye care with compassion and excellence. Founded by Dr. Ashwin C Somarajan."
        keywords="about Ananta Nethralaya, eye care center Kerala, ophthalmology hospital Muvattupuzha, eye care mission, vision care excellence, MCS Hospital eye care, Kerala eye specialist"
        canonical="https://www.anantanethralaya.org/about"
      />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Ananta Nethralaya</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Leading super specialty eye care center dedicated to preserving and restoring vision with compassion and
              excellence
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {/* Vision Card */}
              <div
                className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group border border-teal-200 hover:border-teal-400"
                style={{
                  animation: `fadeInUp 0.8s ease-out 0s both`,
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Eye className="text-amber-400 group-hover:rotate-12 transition-transform duration-300" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-teal-700 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the most trusted eye care provider, delivering world-class treatment with compassion and
                  innovation across India.
                </p>
              </div>

              {/* Mission Card */}
              <div
                className="text-center p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group border border-amber-200 hover:border-amber-400"
                style={{
                  animation: `fadeInUp 0.8s ease-out 0.15s both`,
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="text-white group-hover:rotate-12 transition-transform duration-300" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-teal-700 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide comprehensive, affordable, and accessible eye care services using advanced technology and
                  skilled professionals.
                </p>
              </div>

              {/* Excellence Card */}
              <div
                className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group border border-teal-200 hover:border-teal-400"
                style={{
                  animation: `fadeInUp 0.8s ease-out 0.3s both`,
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Award className="text-amber-400 group-hover:rotate-12 transition-transform duration-300" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-teal-700 mb-4">Our Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Committed to excellence through continuous learning, cutting-edge equipment, and patient-centered
                  care.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white p-12 rounded-3xl shadow-2xl border border-teal-600">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-100 leading-relaxed mb-4">
                  Ananta Nethralaya was founded with a vision to provide world-class eye care services to the people of
                  Kerala and beyond. We believe that clear vision is not just about seeing - it's about experiencing
                  life to its fullest.
                </p>
                <p className="text-gray-100 leading-relaxed mb-4">
                  Our state-of-the-art facility at MCS Hospital, Muvattupuzha, is equipped with the latest diagnostic
                  and surgical equipment. We specialize in premium cataract surgery and advanced retinal treatments,
                  offering our patients the best outcomes with minimal discomfort.
                </p>
                <p className="text-gray-100 leading-relaxed">
                  Led by experienced ophthalmologists and supported by a dedicated team, we are committed to delivering
                  personalized care that addresses each patient's unique needs. Your vision is our priority, and we're
                  here to ensure you see the world clearly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage
