// Image imports
import moment1Image from '../assets/trad.jpg';
import moment2Image from '../assets/traditional2.jpg';
import moment3Image from '../assets/casual2.jpg';
import moment4Image from '../assets/traditional3.jpg';

const Moments = () => {
  const photos = [
    {
      url: moment1Image,
      caption: "Prewedding Photoshoot",
      style: { backgroundSize: 'cover', backgroundPosition: 'center' }
    },
    {
      url: moment2Image,
      caption: "Traditional Prewedding Photoshoot",
      style: { backgroundSize: 'cover', backgroundPosition: 'center' }
    },
    {
      url: moment3Image,
      caption: "Casual Prewedding Photoshoot",
      style: { backgroundSize: 'contain', backgroundPosition: 'top' }
    },
    {
      url: moment4Image,
      caption: "Traditional Prewedding Photoshoot",
      style: { backgroundSize: 'cover', backgroundPosition: 'top center' }
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="font-dancing text-5xl text-center text-rose-600 mb-12">Gallery</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="group relative">
              <div
                className="aspect-square rounded-lg overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url(${photo.url})`,
                  ...photo.style
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white p-4">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Moments;
