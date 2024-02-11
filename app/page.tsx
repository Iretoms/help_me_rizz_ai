export default function Home() {
  return (
    <>
      <div className="bg-slate900 min-h-screen px-8 md:px-0 flex flex-col justify-center items-center text-textGray">
        {/* Background Gradient (Optional) */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900 to-slate-800"></div> */}

        {/* Header */}
        <h1 className="text-5xl font-bold mb-8">Upgrade Your Dating Game!</h1>

        {/* Illustration */}
        <img
          src="/undraw_confident_man.svg"
          alt="Confident person smiling"
          className="w-64 mb-8"
        />

        {/* Subheading */}
        <p className="text-lg font-medium mb-8">
          Impress anyone with witty lines & AI-powered rizz responses.
        </p>

        {/* Testimonials (Optional) */}
        <div className="max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-lg font-light">
                "This app is a game-changer! My matches have skyrocketed."
              </p>
              <p className="text-base font-light">- John Doe</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-lg font-light">
                "I never knew AI could make dating so much fun and exciting!"
              </p>
              <p className="text-base font-light">- Jane Smith</p>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <button className="bg-coral hover:bg-coral-dark text-white font-bold py-2 px-4 rounded-full shadow-md">
          Get Started Free
        </button>

        {/* Privacy Link (Optional) */}
        <p className="text-sm text-gray-500 mt-4">
          By clicking "Get Started", you agree to our{" "}
          <a href="/" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </>
  );
}
