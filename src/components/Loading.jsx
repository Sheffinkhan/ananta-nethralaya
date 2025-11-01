import { Eye } from "lucide-react"

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8 animate-fade-in-up">
          <span className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Premium Eye Care Center
          </span>
        </div>

        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">Your Vision,</h1>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-400">Our Priority</h1>
        </div>

        <div className="relative mx-auto w-24 h-24 mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <Eye className="text-amber-400" size={40} />
          </div>

          <div
            className="absolute inset-0 border-4 border-transparent border-t-amber-400 border-r-amber-500 rounded-full animate-spin"
            style={{ animationDuration: "1.5s" }}
          ></div>
          <div
            className="absolute inset-2 border-4 border-transparent border-b-teal-300 rounded-full animate-spin"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          ></div>
        </div>

        <p className="text-teal-100 text-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Comprehensive eye care services with state-of-the-art technology
        </p>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  )
}

export default Loading
