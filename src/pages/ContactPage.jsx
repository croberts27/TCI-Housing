import React from "react";

const people = [
  {
    name: "Event Operators",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
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
        <div className="mt-10 align-middle grid grid-cols-10 gap-8 sm:gap-16 sm:grid-cols-6 lg:mx-0 lg:max-w-none">
          {people.map((person, index) => (
            <button
              key={person.name}
              className="flex flex-col items-center p-2 border rounded-lg focus:outline-none"
            >
              <img
                className="aspect-[3/2] w-full rounded-lg object-cover"
                src={person.imageUrl}
                alt={`Image of ${person.name}`}
              />
              <h3 className="mt-3 text-lg font-semibold leading-6 text-center text-black">
                {person.name}
              </h3>
            </button>
          ))}
        </div>
        <div className="mt-10 align-middle grid grid-cols-10 gap-8 sm:gap-16 sm:grid-cols-6 lg:mx-0 lg:max-w-none">
          {people.map((person, index) => (
            <button
              key={person.name}
              className="flex flex-col items-center p-2 border rounded-lg focus:outline-none"
            >
              <img
                className="aspect-[3/2] w-full rounded-lg object-cover"
                src={person.imageUrl}
                alt={`Image of ${person.name}`}
              />
              <h3 className="mt-3 text-lg font-semibold leading-6 text-center text-black">
                {person.name}
              </h3>
            </button>
          ))}
        </div>
        <div className="mt-10 align-middle grid grid-cols-10 gap-8 sm:gap-16 sm:grid-cols-6 lg:mx-0 lg:max-w-none">
          {people.map((person, index) => (
            <button
              key={person.name}
              className="flex flex-col items-center p-2 border rounded-lg focus:outline-none"
            >
              <img
                className="aspect-[3/2] w-full rounded-lg object-cover"
                src={person.imageUrl}
                alt={`Image of ${person.name}`}
              />
              <h3 className="mt-3 text-lg font-semibold leading-6 text-center text-black">
                {person.name}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
