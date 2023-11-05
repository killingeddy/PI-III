import { Disclosure } from "@headlessui/react";
import Link from "next/link";

const Card = ({ name, link, img }) => {
  return (
    <Link href={`${link}`} className="rounded-xl min-w-[15%] max-w-[15%] mb-12 md:mb-5 h-80">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`min-w-full max-w-full relative h-full m-auto flex flex-col bg-neutral shadow-inner drop-shadow-lg rounded-3xl items-center z-10`}
            >
              <img
                src={img}
                alt="img"
                className="rounded-3xl h-52 w-full object-cover"
              />
              <span className="text-base text-black px-2 m-2 text-left font-body-bold">
                {name}
              </span>
            </Disclosure.Button>
          </>
        )}
      </Disclosure>
    </Link>
  );
};

export default Card;