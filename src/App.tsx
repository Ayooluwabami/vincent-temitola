import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import CountdownTimer from './components/CountdownTimer';
import { Copy, Calendar, Heart, Download } from 'lucide-react';
import { Loader } from '@googlemaps/js-api-loader';

// Image imports
import heroImage from './assets/HeroImage.jpg';
import traditionalImage from './assets/traditional.jpg';
import casualImage from './assets/casual.jpg';
import trad2Image from './assets/trad2.jpg';
import casual2Image from './assets/casual2.jpg';
import tradImage from './assets/trad.jpg';
import casual5Image from './assets/casual5.jpg';
import traditional5Image from './assets/traditional5.jpg';
import chiefbridesmaidImage from './assets/chiefbridesmaid.jpg';
import littlebrideImage from './assets/littlebride.jpg';
import stylishImage from './assets/informal.jpg';
import bestmanImage from './assets/bestman.jpg';
import moment1Image from './assets/trad.jpg';
import moment2Image from './assets/traditional2.jpg';
import moment3Image from './assets/casual2.jpg';
import moment4Image from './assets/traditional3.jpg';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const mapRef = useRef<HTMLDivElement>(null);

  const heroImages = [
    {
      url: heroImage,
      style: {
        backgroundSize: '95%',
        backgroundPosition: 'center 55%'
      }
    },
    {
      url: traditionalImage,
      style: {
        backgroundSize: '95%',
        backgroundPosition: 'center 5%'
      }
    },
    {
      url: casualImage,
      style: {
        backgroundSize: '95%',
        backgroundPosition: 'center 3%'
      }
    },
    {
      url: trad2Image,
      style: {
        backgroundSize: '95%',
        backgroundPosition: 'center 20%'
      }
    },
    {
      url: casual2Image,
      style: {
        backgroundSize: '95%',
        backgroundPosition: 'center 5%'
      }
    },
    {
      url: tradImage,
      style: {
        backgroundSize: '95%',
        backgroundPosition: 'center 25%'
      }
    },
    {
      url: casual5Image,
      style: {
        backgroundSize: '95%',
        backgroundPosition: 'center 25%'
      }
    },
    {
      url: traditional5Image,
      style: {
        backgroundSize: '95%',
        backgroundPosition: 'center 5%'
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API key
        version: "weekly"
      });

      const { Map, Marker } = await loader.importLibrary("maps");

      const position = { lat: 7.2571, lng: 5.2058 }; // Akure coordinates

      if (mapRef.current) {
        const map = new Map(mapRef.current, {
          center: position,
          zoom: 14,
        });

        new Marker({
          position: position,
          map: map,
          title: "Wedding Venue"
        });
      }
    };

    initMap();
  }, []);

  const downloadImage = (imageUrl: string, imageName: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const events = [
    {
      date: "Friday, April 25, 2025",
      events: [
        {
          name: "Traditional Wedding",
          time: "11:00 AM to 3:00 PM",
          location: "Akure, Ondo State, Nigeria"
        }
      ]
    },
    {
      date: "Saturday, April 26, 2025",
      events: [
        {
          name: "Reception",
          time: "11:00 AM to 3:00 PM",
          location: "Akure, Ondo State, Nigeria"
        },
        {
          name: "After-party",
          time: "4:00 PM to 8:00 PM",
          location: "Akure, Ondo State, Nigeria"
        }
      ]
    }
  ];

  const moments = [
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

  const weddingParty = {
    bridalParty: [
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
    ],
    groomsmen: [
      {
        role: "Best Man",
        name: "Akinnifesi Emmanuel",
        image: bestmanImage
      }
    ]
  };

  const accounts = [
    {
      country: "UK",
      bank: "Monzo",
      name: "VINCENT FASEYOSAN",
      sortCode: "04-00-03",
      accountNumber: "40036703"
    },
    {
      country: "Nigeria",
      bank: "First Bank",
      name: "Faseyosan Vincent",
      accountNumber: "3155792466"
    }
  ];

  const addToCalendar = (event: any) => {
    const startTime = new Date(`${event.date} ${event.time.split(' to ')[0]}`);
    const endTime = new Date(`${event.date} ${event.time.split(' to ')[1]}`);

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`${event.name} - Vincent & Temitola's Wedding`)}&dates=${startTime.toISOString().replace(/-|:|\.\d\d\d/g, '')}/${endTime.toISOString().replace(/-|:|\.\d\d\d/g, '')}&details=${encodeURIComponent(`Location: ${event.location}`)}&location=${encodeURIComponent(event.location)}`;

    window.open(googleCalendarUrl, '_blank');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-wedding-cream">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="h-screen relative overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className="h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image.url})`,
                ...image.style,
                backgroundRepeat: 'no-repeat',
                transform: index === currentImageIndex ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 10s ease-out'
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-wedding-dark/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-wedding-white px-4">
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-8xl mb-4 animate-fade-in text-center">
            <span className="text-wedding-white">Vincent</span>
            <span className="text-wedding-pink mx-2 sm:mx-4">&</span>
            <span className="text-wedding-white">Temitola</span>
          </h1>
          <p className="font-cormorant text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-wedding-cream animate-slide-up text-center">
            April 26, 2025 • Akure, Nigeria
          </p>
          <CountdownTimer />
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-wedding-dark">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-playfair text-5xl text-center text-wedding-sand mb-12 animate-fade-in">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative h-[400px] w-full bg-cover bg-center rounded-lg shadow-xl overflow-hidden group">
              <div
                className="h-full w-full bg-cover bg-center image-hover"
                style={{
                  backgroundImage: `url(${traditionalImage})`,
                  backgroundSize: "90%",
                  backgroundPosition: "top center",
                }}
              />
              <div className="absolute -bottom-4 -right-4 bg-wedding-pink text-wedding-dark p-4 rounded-lg shadow-lg">
                <Heart className="w-6 h-6" />
              </div>
            </div>
            <div className="space-y-6 animate-slide-up">
              <h3 className="font-playfair text-3xl text-wedding-pink">Divine Encounter</h3>
              <div className="prose prose-rose">
                <p className="text-wedding-cream font-cormorant text-lg leading-relaxed">
                  Meeting Temitola was nothing short of a divine moment—one of those encounters that feel destined from the very start. It all began on an ordinary Sunday when my close friend, while passing through Akure on his way to Abuja, stopped by to visit.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-wedding-cream font-cormorant text-lg leading-relaxed animate-slide-up">
            <p>
              Curious—and maybe a little out of obligation to my friend—I decided to call her. That first conversation was magic. There was an instant connection, a warmth in her voice that made me want to keep talking. She was soft-spoken yet full of wisdom, respectful yet lively. It didn't take long before our conversations became the highlight of my days.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="h-[300px] w-full bg-cover bg-center rounded-lg shadow-xl overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center image-hover"
                  style={{
                    backgroundImage: `url(${casualImage})`,
                    backgroundSize: "95%",
                    backgroundPosition: "top center",
                  }}
                />
              </div>

              <div className="h-[300px] w-full bg-cover bg-center rounded-lg shadow-xl overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center image-hover"
                  style={{
                    backgroundImage: `url(${stylishImage})`,
                    backgroundSize: "90%",
                    backgroundPosition: "top",
                  }}
                />
              </div>
            </div>

            <p>
              As weeks went by, we grew closer. Then came the day she visited me in Akure. We went out on a date, and sitting across from her, seeing her smile, hearing her laugh—it hit me. This was it. Temitola wasn't just someone I liked; she was the one. She had the grace of a queen and the heart of someone who could build a home with me. That day, I became certain she would be the love of my life and the mother of my unborn children.
            </p>
            <p>
              Now, here we are, stronger and more in love than ever. Our journey together has been nothing short of a blessing, and with every step, I thank the stars—and my friend—for leading me to her.
            </p>
            <p className="text-wedding-sand font-semibold text-right">- Vincent</p>
          </div>
        </div>
      </section>

      {/* Schedule Section with Map */}
      <section id="schedule" className="py-20 bg-wedding-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-playfair text-5xl text-center text-wedding-sand mb-12 animate-fade-in">Wedding Schedule</h2>
          <div className="space-y-12">
            {events.map((day, index) => (
              <div key={index} className="space-y-6 animate-slide-up">
                <h3 className="text-2xl font-playfair text-wedding-dark">{day.date}</h3>
                <div className="grid gap-6">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="bg-wedding-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl font-playfair text-wedding-sand mb-2">{event.name}</h4>
                          <p className="text-wedding-brown font-cormorant mb-1">{event.time}</p>
                          <p className="text-wedding-brown font-cormorant">{event.location}</p>
                        </div>
                        <button
                          onClick={() => addToCalendar(event)}
                          className="flex items-center gap-2 px-4 py-2 bg-wedding-sand text-wedding-dark rounded-lg hover:bg-wedding-pink transition-colors duration-300"
                        >
                          <Calendar className="w-4 h-4" />
                          <span className="font-cormorant">Add to Calendar</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Add Google Map */}
          <div className="mt-12">
            <h3 className="font-playfair text-3xl text-center text-wedding-sand mb-6">Venue Location</h3>
            <div
              ref={mapRef}
              className="w-full h-[400px] rounded-lg shadow-lg mb-6"
            />
          </div>
        </div>
      </section>

      {/* Gifts Section */}
      <section id="gifts" className="py-20 bg-wedding-dark">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-playfair text-5xl text-center text-wedding-sand mb-6 animate-fade-in">Registry</h2>
          <p className="text-center text-wedding-cream font-cormorant text-lg mb-12 animate-slide-up">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have provided our account details below.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {accounts.map((account, index) => (
              <div key={index} className="bg-wedding-white rounded-lg shadow-md p-6 space-y-4 animate-scale">
                <div className="text-2xl font-playfair text-wedding-sand mb-4">{account.country} Account</div>

                <div>
                  <div className="text-sm text-wedding-brown">Bank</div>
                  <div className="text-lg font-medium text-wedding-dark font-cormorant">{account.bank}</div>
                </div>

                <div>
                  <div className="text-sm text-wedding-brown">Account Name</div>
                  <div className="text-lg font-medium text-wedding-dark font-cormorant">{account.name}</div>
                </div>

                {account.sortCode && (
                  <div>
                    <div className="text-sm text-wedding-brown">Sort Code</div>
                    <div className="flex items-center gap-2">
                      <div className="text-lg font-medium text-wedding-dark font-cormorant">{account.sortCode}</div>
                      <button
                        onClick={() => copyToClipboard(account.sortCode)}
                        className="p-1 hover:bg-wedding-cream rounded transition-colors duration-300"
                      >
                        <Copy className="w-4 h-4 text-wedding-brown" />
                      </button>
                    </div>
                  </div>
                )}

                <div>
                  <div className="text-sm text-wedding-brown">Account Number</div>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-medium text-wedding-dark font-cormorant">{account.accountNumber}</div>
                    <button
                      onClick={() => copyToClipboard(account.accountNumber)}
                      className="p-1 hover:bg-wedding-cream rounded transition-colors duration-300"
                    >
                      <Copy className="w-4 h-4 text-wedding-brown" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Party Section */}
      <section id="wedding-party" className="py-20 bg-wedding-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-playfair text-5xl text-center text-wedding-sand mb-12 animate-fade-in">Wedding Party</h2>

          <div className="space-y-16">
            {/* Bridal Party */}
            <div>
              <h3 className="text-3xl font-playfair text-center text-wedding-pink mb-8 animate-fade-in">Bridal Party</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {weddingParty.bridalParty.map((member, index) => (
                  <div key={index} className="text-center animate-scale">
                    <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden mb-4 shadow-lg group">
                      <div
                        className="w-full h-full image-hover"
                        style={{
                          backgroundImage: `url(${member.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      <div className="absolute inset-0 bg-wedding-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                    <h4 className="text-xl font-playfair text-wedding-dark">{member.name}</h4>
                    <p className="text-wedding-pink font-cormorant">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Groomsmen */}
            <div>
              <h3 className="text-3xl font-playfair text-center text-wedding-sand mb-8 animate-fade-in">Groomsmen</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {weddingParty.groomsmen.map((member, index) => (
                  <div key={index} className="text-center animate-scale">
                    <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden mb-4 shadow-lg group">
                      <div
                        className="w-full h-full image-hover"
                        style={{
                          backgroundImage: `url(${member.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'top'
                        }}
                      />
                      <div className="absolute inset-0 bg-wedding-dark opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>
                    <h4 className="text-xl font-playfair text-wedding-dark">{member.name}</h4>
                    <p className="text-wedding-sand font-cormorant">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moments Section */}
      <section id="moments" className="py-20 bg-wedding-dark">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-playfair text-5xl text-center text-wedding-sand mb-12 animate-fade-in">Our Journey Together</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moments.map((photo, index) => (
              <div key={index} className="group relative animate-scale">
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <div
                    className="w-full h-full image-hover"
                    style={{
                      backgroundImage: `url(${photo.url})`,
                      ...photo.style
                    }}
                  >
                    <div className="absolute inset-0 bg-wedding-dark bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
                    <div className="absolute inset-0 flex flex-col items-end justify-between p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        onClick={() => downloadImage(photo.url, `wedding-${index + 1}.jpg`)}
                        className="bg-wedding-sand text-wedding-dark p-2 rounded-full hover:bg-wedding-pink transition-colors duration-300"
                      >
                        <Download className="w-5 h-5" />
                      </button>
                      <p className="text-wedding-cream font-cormorant text-lg w-full">{photo.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;