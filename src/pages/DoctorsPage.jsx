import { Users, ChevronRight } from "lucide-react"
import { Link } from "../utils/Router"
import SEO from "../components/SEO"

const DoctorsPage = () => {
  return (
    <>
      <SEO
        title="Dr. Ashwin C Somarajan - Expert Eye Surgeon | Ananta Nethralaya"
        description="Meet Dr. Ashwin C Somarajan, MBBS, DNB Ophthalmology from Sankara Nethralaya. Expert in cataract surgery, retina surgery, and comprehensive eye care. 15+ years of experience in Kerala."
        keywords="Dr Ashwin Somarajan, eye surgeon Kerala, ophthalmologist Muvattupuzha, cataract surgeon, retina specialist, Sankara Nethralaya, eye doctor Kerala, vitreoretinal surgeon"
        canonical="https://www.anantanethralaya.org/doctors"
      />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Meet Our Expert</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Leading eye care specialist with extensive training and international experience
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-teal-50 to-amber-50 rounded-3xl shadow-2xl overflow-hidden border border-teal-200">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex items-center justify-center group">
                  <div className="w-80 h-80 bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500">
                    <Users
                      className="text-amber-400 group-hover:scale-110 transition-transform duration-300"
                      size={160}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-700 to-teal-900 bg-clip-text text-transparent mb-3">
                    Dr. Ashwin C Somarajan
                  </h2>
                  <p className="text-amber-600 font-semibold mb-2 text-lg">
                    MBBS, DNB Ophthalmology (Sankara Nethralaya)
                  </p>
                  <p className="text-teal-700 font-semibold mb-6">MNAMS, FVRS - Cornea, Cataract & Retina Surgeon</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Founder & Medical Director of Ananta Nethralaya, Dr. Ashwin specializes in advanced cataract and
                    retinal surgeries with a patient-first approach. Trained at the prestigious Sankara Nethralaya, he
                    brings world-class expertise to Kerala.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start group/item">
                      <ChevronRight
                        className="text-amber-500 mr-2 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform"
                        size={20}
                      />
                      <p className="text-gray-700">
                        <span className="font-semibold">Specialization:</span> Premium Cataract Surgery, Vitreo-Retinal
                        Surgery, Diabetic Retinopathy
                      </p>
                    </div>
                    <div className="flex items-start group/item">
                      <ChevronRight
                        className="text-amber-500 mr-2 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform"
                        size={20}
                      />
                      <p className="text-gray-700">
                        <span className="font-semibold">Experience:</span> 15+ Years in Clinical Practice
                      </p>
                    </div>
                    <div className="flex items-start group/item">
                      <ChevronRight
                        className="text-amber-500 mr-2 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform"
                        size={20}
                      />
                      <p className="text-gray-700">
                        <span className="font-semibold">Education:</span> DNB from Sankara Nethralaya, Chennai
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-teal-700 to-teal-800 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 w-fit font-semibold text-lg shadow-lg"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-16">
              <div className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white p-10 rounded-3xl shadow-2xl border border-teal-600">
                <h3 className="text-3xl font-bold mb-6">Professional Expertise</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <h4 className="font-semibold text-amber-400 mb-3 text-lg group-hover:text-amber-300 transition-colors">
                      Surgical Excellence
                    </h4>
                    <ul className="space-y-2 text-gray-100">
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></span>
                        Micro-incision cataract surgery
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></span>
                        Premium IOL implantation
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></span>
                        Vitreo-retinal procedures
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></span>
                        Sutureless vitrectomy
                      </li>
                    </ul>
                  </div>
                  <div className="group">
                    <h4 className="font-semibold text-amber-400 mb-3 text-lg group-hover:text-amber-300 transition-colors">
                      Medical Management
                    </h4>
                    <ul className="space-y-2 text-gray-100">
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></span>
                        Diabetic retinopathy care
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></span>
                        Glaucoma management
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></span>
                        Corneal disease treatment
                      </li>
                      <li className="flex items-center group/item">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover/item:scale-150 transition-transform"></span>
                        Comprehensive eye exams
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default DoctorsPage
