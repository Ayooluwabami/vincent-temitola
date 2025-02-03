import { Calendar } from 'lucide-react';

const Schedule = () => {
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

  const contacts = [
    {
      name: "Temitade Olowookere",
      phone: "+2349037312540"
    },
    {
      name: "Precious Faseyosan",
      phone: "+2347034952994"
    }
  ];

  const addToCalendar = (event: any) => {
    const startTime = new Date(`${event.date} ${event.time.split(' to ')[0]}`);
    const endTime = new Date(`${event.date} ${event.time.split(' to ')[1]}`);

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`${event.name} - Vincent & Temitola's Wedding`)}&dates=${startTime.toISOString().replace(/-|:|\.\d\d\d/g, '')}/${endTime.toISOString().replace(/-|:|\.\d\d\d/g, '')}&details=${encodeURIComponent(`Location: ${event.location}`)}&location=${encodeURIComponent(event.location)}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-dancing text-5xl text-center text-rose-600 mb-12">Wedding Schedule</h1>

        <div className="space-y-12">
          {events.map((day, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">{day.date}</h2>

              <div className="grid gap-6">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-rose-600 mb-2">{event.name}</h3>
                        <p className="text-gray-600 mb-1">{event.time}</p>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                      <button
                        onClick={() => addToCalendar(event)}
                        className="flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Add to Calendar</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">RSVP Contacts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-rose-600 mb-2">{contact.name}</h3>
                <p className="text-gray-600">{contact.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;