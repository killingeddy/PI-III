import { Disclosure, Transition } from "@headlessui/react";
import { HiChevronRight } from "react-icons/hi";

const FaqItem = ({ name, description }) => {
  return (
    <div className="rounded-xl w-full mb-12 md:mb-5">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`w-full relative h-auto py-4 m-auto flex flex-row bg-neutral shadow-inner drop-shadow-lg  rounded-full items-center justify-between z-10`}
            >
              <span className="text-xl text-black px-6 text-justify font-body-bold">
                {name}
              </span>
              <div className="p-1 bg-primary-yellow rounded-full mr-4">
                <HiChevronRight
                  className={`w-6 h-6 ${open ? "transform rotate-90" : ""
                    } text-dorange`}
                />
              </div>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="m-auto relative flex flex-col shadow bg-primary-yellow rounded-b-3xl z-0 -top-7 w-full bg-dorange">
                <div className="px-6 pt-10 pb-6">
                  <span className="text-xl text-black text-justify font-body">
                    {description}
                  </span>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default FaqItem;