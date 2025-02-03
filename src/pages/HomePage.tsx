import CountdownTimer from '../components/CountdownTimer';

// Image imports
import heroImage from '../assets/HeroImage.jpg';
import traditionalImage from '../assets/traditional.jpg';
import casualImage from '../assets/casual.jpg';
import stylishImage from '../assets/informal.jpg';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: '90%',
          transition: 'background-size 0.3s ease-in-out'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="font-dancing text-6xl md:text-8xl mb-4">Vincent & Temitola</h1>
          <p className="text-xl md:text-2xl mb-8">April 26, 2025 • Akure, Nigeria</p>
          <CountdownTimer />
        </div>
      </div>

      {/* Featured Photos Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            className="h-[400px] w-full bg-cover bg-center rounded-lg shadow-xl relative transition-all duration-300 hover:bg-[length:100%]"
            style={{
              backgroundImage: `url(${traditionalImage})`,
              backgroundSize: '90%',
              backgroundPosition: 'top',
            }}
          ></div>

          <div className="space-y-6">
            <h2 className="font-dancing text-4xl text-rose-600">Our Love Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Join us as we celebrate our love and commitment to each other.
              We're excited to share this special day with our beloved family and friends
              as we begin our journey together as husband and wife.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Photos */}
      <div className="bg-[#faf7f5] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Casual Image */}
            <div
              className="h-[400px] w-full bg-cover bg-center rounded-lg shadow-xl relative transition-all duration-300 hover:bg-[length:100%]"
              style={{
                backgroundImage: `url(${casualImage})`,
                backgroundSize: "90%",
                backgroundPosition: "top",
              }}
            ></div>

            {/* Stylish Image */}
            <div
              className="h-[400px] w-full bg-cover bg-center rounded-lg shadow-xl relative transition-all duration-300 hover:bg-[length:100%]"
              style={{
                backgroundImage: `url(${stylishImage})`,
                backgroundSize: "80%",
                backgroundPosition: "center 20%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;