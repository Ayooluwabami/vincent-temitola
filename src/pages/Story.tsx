import { Heart } from 'lucide-react';

// Image imports
import traditionalImage from '../assets/trad3.jpg';
import casualImage from '../assets/casual3.jpg';
import stylishImage from '../assets/traditional4.jpg';

const Story = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-dancing text-5xl text-center text-rose-600 mb-12">Our Story</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative h-[400px] w-full bg-cover bg-center rounded-lg shadow-xl"
            style={{
              backgroundImage: `url(${traditionalImage})`,
              backgroundSize: "90%",
              backgroundPosition: "top center",
            }}
          >
            <div className="absolute -bottom-4 -right-4 bg-rose-600 text-white p-4 rounded-lg shadow-lg">
              <Heart className="w-6 h-6" />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-dancing text-3xl text-rose-600">Divine Encounter</h2>
            <div className="prose prose-rose">
              <p className="text-gray-700 leading-relaxed">
                Meeting Temitola was nothing short of a divine moment—one of those encounters that feel destined from the very start. It all began on an ordinary Sunday when my close friend, while passing through Akure on his way to Abuja, stopped by to visit.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In the midst of our conversations, he casually mentioned someone he thought I should meet. He spoke of Temitola with such enthusiasm, hoping something beautiful might blossom between us.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-12">
          <p className="text-gray-700 leading-relaxed">
            Curious—and maybe a little out of obligation to my friend—I decided to call her. That first conversation was magic. There was an instant connection, a warmth in her voice that made me want to keep talking. She was soft-spoken yet full of wisdom, respectful yet lively. It didn't take long before our conversations became the highlight of my days.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="h-[300px] w-full bg-cover bg-center rounded-lg shadow-xl"
              style={{
                backgroundImage: `url(${casualImage})`,
                backgroundSize: "95%",
                backgroundPosition: "top center",
              }}
            ></div>

            <div className="h-[300px] w-full bg-cover bg-center rounded-lg shadow-xl"
              style={{
                backgroundImage: `url(${stylishImage})`,
                backgroundSize: "90%",
                backgroundPosition: "top",
              }}
            ></div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            As weeks went by, we grew closer. Then came the day she visited me in Akure. We went out on a date, and sitting across from her, seeing her smile, hearing her laugh—it hit me. This was it. Temitola wasn't just someone I liked; she was the one. She had the grace of a queen and the heart of someone who could build a home with me. That day, I became certain she would be the love of my life and the mother of my unborn children.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Now, here we are, stronger and more in love than ever. Our journey together has been nothing short of a blessing, and with every step, I thank the stars—and my friend—for leading me to her.
          </p>
          <p className="text-gray-700 font-semibold text-right">- Vincent</p>
        </div>

        <div className="flex justify-center">
          <Heart className="text-rose-600 w-12 h-12" />
        </div>
      </div>
    </div>
  );
};

export default Story;
