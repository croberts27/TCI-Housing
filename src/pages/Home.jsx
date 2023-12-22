import { NewspaperIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
const cards = [
  {
    name: "About Us",
    description:
      "TCI Housing will solve all of your housing needs for your event! If you are an event operator, attendee, or a hotelier please click here to learn more!",
    icon: NewspaperIcon,
    path: "/about",
  },
  {
    name: "Contact Us",
    description:
      "Have questions? TCI Housing will solve all of your housing needs for your event! If you are an event operator, attendee, or a hotelier please click here to learn more!",
    icon: PhoneIcon,
    path: "/contact",
  },
  {
    name: "Media Inquiries",
    description:
      "TCI Housing will solve all of your housing needs for your event! If you are an event operator, attendee, or a hotelier please click here to learn more!",
    icon: NewspaperIcon,
    path: "/contact",
  },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-none py-24 sm:py-32">
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] "
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] "
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex flex-wrap justify-end items-end max-w-3xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight bg-black/30 p-6 ring-1 rounded-xl ring-transparent  text-white sm:text-6xl">
            TCI Housing
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <Link
              key={card.name}
              to={card.path} // Corrected: Moved 'to' prop here
              className="flex gap-x-4 rounded-xl bg-black/30 p-6 ring-1 ring-inset ring-black/10"
            >
              <div>
                <card.icon
                  className="h-7 w-5 flex-none font-semibold text-white"
                  aria-hidden="true"
                />
              </div>
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 font-medium text-white">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
