import { Users, ChevronRight } from "lucide-react"
import { Link } from "../utils/Router"
import SEO from "../components/SEO"

const DoctorsPage = () => {
  return (
    <>
      <SEO
        title="Dr. Ashwin Cherusseril Somarajan - Vitreo-Retinal & Cataract Surgeon | Ananta Nethralaya"
        description="Meet Dr. Ashwin Cherusseril Somarajan — MBBS, DNB (Sankara Nethralaya), MNAMS, FVRS. Expert Vitreo-Retinal & Cataract Surgeon with 8+ years of experience and over 6000 successful eye surgeries in Kerala."
        keywords="Dr Ashwin Somarajan, eye surgeon Kerala, retina specialist Kerala, cataract surgeon Muvattupuzha, vitreoretinal surgeon, Sankara Nethralaya alumni, eye doctor Kerala"
        canonical="https://www.anantanethralaya.org/doctors"
      />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Meet Our Expert</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Delivering advanced and compassionate eye care with precision, expertise, and empathy
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-gradient-to-br from-teal-50 to-amber-50 rounded-3xl shadow-2xl overflow-hidden border border-teal-200">
              <div className="p-8 md:p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  {/* Doctor Photo */}
                  <div className="flex-shrink-0 mx-auto lg:mx-0">
                    <div className="w-72 h-96 lg:w-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                      <img
                        src="/images/DrAshwinCSomarajan.jpg"
                        alt="Dr. Ashwin Cherusseril Somarajan - Consultant Vitreo-Retinal & Cataract Surgeon"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex-1 flex flex-col">
                    <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-700 to-teal-900 bg-clip-text text-transparent mb-3">
                      Dr. Ashwin Cherusseril Somarajan
                    </h2>
                    <p className="text-amber-600 font-semibold mb-2 text-base lg:text-lg">
                      MBBS, DNB (Sankara Nethralaya), MNAMS, FVRS
                    </p>
                    <p className="text-teal-700 font-semibold mb-6 text-sm lg:text-base">
                      Consultant Vitreo-Retinal & Cataract Surgeon
                    </p>

                    <div className="space-y-4 text-gray-700 text-sm lg:text-base leading-relaxed">
                      <p>
                        Dr. Ashwin Cherusseril Somarajan is a passionate and skilled
                        Vitreoretinal and Cataract Surgeon with over{" "}
                        <strong>8 years of experience</strong> in delivering
                        advanced and compassionate eye care. He completed his{" "}
                        <strong>DNB Ophthalmology</strong> from{" "}
                        <strong>Sankara Nethralaya, Kolkata</strong> — one of
                        India's top three eye institutes — and pursued a{" "}
                        <strong>long-term surgical retina fellowship</strong> at
                        Chaithanya Eye Hospital, Trivandrum, a premier center for
                        retinal surgery and training.
                      </p>

                      <p>
                        With extensive surgical expertise, Dr. Ashwin has
                        successfully performed over{" "}
                        <strong>5000 topical phacoemulsification surgeries</strong>{" "}
                        (including premium IOL implants) and more than{" "}
                        <strong>1000 retinal surgeries</strong>, combining
                        precision, technology, and empathy to achieve optimal
                        outcomes for his patients.
                      </p>

                      <p className="italic text-teal-800 font-medium text-base lg:text-lg pt-2">
                        "Every patient deserves care with passion, compassion, and
                        kindness."
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      className="mt-8 bg-gradient-to-r from-teal-700 to-teal-800 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 w-fit font-semibold text-base lg:text-lg shadow-lg"
                    >
                      Book Consultation
                    </Link>
                  </div>
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
