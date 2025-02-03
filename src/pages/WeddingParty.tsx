// Image imports
import chiefbridesmaidImage from '../assets/chiefbridesmaid.jpg';
import littlebrideImage from '../assets/littlebride.jpg';
import bestmanImage from '../assets/bestman.jpg';

const WeddingParty = () => {
  const bridalParty = [
    {
      role: "Chief Bridesmaid",
      name: "Olowookere Temitade",
      image: chiefbridesmaidImage
    },
    {
      role: "Little Bride",
      name: "Oluyemi Ikeoluwa",
      image: littlebrideImage
    }
  ];

  const groomsmen = [
    {
      role: "Best Man",
      name: "Akinnifesi Emmanuel",
      image: bestmanImage
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="font-dancing text-5xl text-center text-rose-600 mb-12">Wedding Party</h1>

        <div className="space-y-16">
          {/* Bridal Party */}
          <div>
            <h2 className="text-3xl font-dancing text-center text-rose-600 mb-8">Bridal Party</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bridalParty.map((member, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-4 shadow-lg"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-rose-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Groomsmen */}
          <div>
            <h2 className="text-3xl font-dancing text-center text-rose-600 mb-8">Groomsmen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groomsmen.map((member, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-4 shadow-lg"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'top'
                    }}
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-rose-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingParty;
