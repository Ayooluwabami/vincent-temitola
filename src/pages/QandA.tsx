const QandA = () => {
  const questions = [
    {
      q: "What should I wear?",
      a: "The dress code for both ceremonies is formal attire. For the traditional ceremony, African attire is welcome. For the wedding ceremony, formal western or African attire is appropriate."
    },
    {
      q: "Can I bring a plus one?",
      a: "Due to venue capacity, we can only accommodate the guests named on the invitation. Please contact our coordinators if you have any questions."
    },
    {
      q: "Will there be parking at the venue?",
      a: "Yes, there will be ample parking available at both venues."
    },
    {
      q: "What time should I arrive?",
      a: "We recommend arriving 30 minutes before the ceremony start time to allow time for seating."
    },
    {
      q: "Are children welcome?",
      a: "Yes, children are welcome at our celebration."
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-dancing text-5xl text-center text-rose-600 mb-12">Questions & Answers</h1>

        <div className="space-y-6">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-rose-600 mb-3">{item.q}</h3>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700">
            Have more questions? Please don't hesitate to contact our wedding coordinators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QandA;