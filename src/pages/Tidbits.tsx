const Tidbits = () => {
  const questions = [
    {
      q: "How did you first meet?",
      a: "We met through my friend's recommendation of each other."
    },
    {
      q: "Who made the first move? How?",
      a: "I did. I asked her out of course."
    },
    {
      q: "What was your most memorable date?",
      a: "Abuja with other group of friends."
    },
    {
      q: "What's your favorite activity together?",
      a: "Ofofo"
    },
    {
      q: "What's the best meal you have eaten together?",
      a: "Every meal my babe cooks is the best and the good thing is that we always have it together."
    },
    {
      q: "What's the most memorable trip you have taken together?",
      a: "Lagos Island trip."
    },
    {
      q: "A life goal of ours",
      a: "To be a channels of blessings unto generations."
    },
    {
      q: "The most spontaneous thing we've done",
      a: "I can't remember any."
    },
    {
      q: "The dorkiest thing about us is",
      a: "We are terrible at lying."
    },
    {
      q: "A social cause we care about",
      a: "Global mental health."
    },
    {
      q: "We take pride in",
      a: "We take pride in Legacy of Christ."
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-dancing text-5xl text-center text-rose-600 mb-12">Fun Facts About Us</h1>

        <div className="grid gap-8">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-rose-600 mb-2">{item.q}</h3>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tidbits;