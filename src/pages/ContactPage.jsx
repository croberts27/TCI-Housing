/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const people = [
  {
    name: "Event Operators",
    path: "/event-ops",
    imageUrl:
      "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Event Attendee",
    path: "/attendees",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661342597698-4977ce52f48e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hotelier",
    path: "/hoteliers",
    imageUrl:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // More people...
];

function ContactPage() {
  return (
    <div className="bg-white mt-10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Reach out to us with any inquiries about an event you're running,
            attending, or need housing for!
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-8 sm:gap-16 sm:grid-cols-6 lg:mx-0 lg:max-w-none">
          {/* eslint-disable-next-line no-unused-vars */}
          {people.map((person, index) => (
            <Link
              to={person.path}
              key={person.name}
              className="flex flex-col items-center p-2 border rounded-lg focus:outline-none"
            >
              <img
                className="aspect-square w-full rounded-lg object-cover"
                src={person.imageUrl}
                alt={`Image of ${person.name}`}
              />
              <h3 className="mt-3 text-lg font-semibold leading-6 text-center text-black">
                {person.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
