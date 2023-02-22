import { useState } from "react";
import { RiCheckFill, RiArrowDropDownFill, RiCloseLine } from "react-icons/ri";
import { Disclosure, Transition } from "@headlessui/react";
const filtersData = [
  {
    name: "Technologies",
    tags: [
      {
        name: "React",
        icon: "reactjs",
        selected: false,
        id: 1,
      },
      {
        name: "BigCommerce",
        icon: "bigcommerce",
        selected: false,
        id: 2,
      },
      {
        name: "Next Js",
        icon: "nextjs",
        selected: false,
        id: 3,
      },

      {
        name: "Node Js",
        icon: "node",
        selected: false,
        id: 4,
      },
      {
        name: "Sass",
        icon: "sass",
        selected: false,
        id: 5,
      },
      {
        name: "Tailwind Css",
        icon: "tailwind",
        selected: false,
        id: 6,
      },
    ],
  },
  {
    name: "Challanges",
    tags: [
      {
        name: "Medium",
        icon: "medium",
        selected: false,
        id: 1,
      },
      {
        name: "Github",
        icon: "github",
        selected: false,
        id: 2,
      },
      {
        name: "hackathon",
        icon: "nextjs",
        selected: false,
        id: 3,
      },
      {
        name: "Code wars",
        icon: "code",
        selected: false,
        id: 4,
      },
    ],
  },
  {
    name: "Type",
    tags: [
      {
        name: "Ecommerce",
        icon: "ecommerce",
        selected: false,
        id: 1,
      },
      {
        name: "SPA",
        icon: "spa",
        selected: false,
        id: 2,
      },
      {
        name: "PWA",
        icon: "nextjs",
        selected: false,
        id: 3,
      },
    ],
  },
  {
    name: "Technologies1",
    tags: [
      {
        name: "React",
        icon: "reactjs",
        selected: false,
        id: 1,
      },
      {
        name: "BigCommerce",
        icon: "bigcommerce",
        selected: false,
        id: 2,
      },
      {
        name: "Next Js",
        icon: "nextjs",
        selected: false,
        id: 3,
      },

      {
        name: "Node Js",
        icon: "node",
        selected: false,
        id: 4,
      },
      {
        name: "Sass",
        icon: "sass",
        selected: false,
        id: 5,
      },
      {
        name: "Tailwind Css",
        icon: "tailwind",
        selected: false,
        id: 6,
      },
    ],
  },
  {
    name: "Technologies3",
    tags: [
      {
        name: "React",
        icon: "reactjs",
        selected: false,
        id: 1,
      },
      {
        name: "BigCommerce",
        icon: "bigcommerce",
        selected: false,
        id: 2,
      },
      {
        name: "Next Js",
        icon: "nextjs",
        selected: false,
        id: 3,
      },

      {
        name: "Node Js",
        icon: "node",
        selected: false,
        id: 4,
      },
      {
        name: "Sass",
        icon: "sass",
        selected: false,
        id: 5,
      },
      {
        name: "Tailwind Css",
        icon: "tailwind",
        selected: false,
        id: 6,
      },
    ],
  },
  {
    name: "Technologies6",
    tags: [
      {
        name: "React",
        icon: "reactjs",
        selected: false,
        id: 1,
      },
      {
        name: "BigCommerce",
        icon: "bigcommerce",
        selected: false,
        id: 2,
      },
      {
        name: "Next Js",
        icon: "nextjs",
        selected: false,
        id: 3,
      },

      {
        name: "Node Js",
        icon: "node",
        selected: false,
        id: 4,
      },
      {
        name: "Sass",
        icon: "sass",
        selected: false,
        id: 5,
      },
      {
        name: "Tailwind Css",
        icon: "tailwind",
        selected: false,
        id: 6,
      },
    ],
  },
];

const Projects = () => {
  const [filters, setFilters] = useState(filtersData);
  const [filtersApplayed, setFiltersApplayed] = useState(false);

  const selectFilter = (name: string, id: number) => {
    const newFilters = filters.map((filter) =>
      filter.name === name
        ? {
            ...filter,
            tags: filter.tags.map((tag) =>
              tag?.id === id ? { ...tag, selected: !tag?.selected } : tag
            ),
          }
        : filter
    );

    setFilters(newFilters);
    setFiltersApplayed(true);
  };

  const resetFilters = () => {
    setFilters(filtersData);
    setFiltersApplayed(false);
  };

  return (
    <section className="flex max-w-[100vw] flex-col md:h-full md:max-w-none md:flex-row">
      <div className="w-full overflow-y-auto border-r border-lines md:w-1/4">
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full">
                <div className="flex items-center gap-3 border border-lines py-[10px] px-4 text-white">
                  <div
                    className={` transition-all duration-300 ease-in-out ${
                      open ? "" : "rotate-180"
                    }`}
                  >
                    <i className="ri-arrow-down-s-fill"></i>
                  </div>
                  <p>projects</p>
                  {filtersApplayed && (
                    <div
                      className="ml-auto cursor-pointer"
                      onClick={resetFilters}
                    >
                      <RiCloseLine />
                    </div>
                  )}
                </div>
              </Disclosure.Button>

              <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-300 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-300 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel>
                  {filters.map((el, index) => (
                    <div key={index} className="py-4 px-5">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              as="div"
                              className="mb-2 flex cursor-pointer items-center"
                            >
                              <div
                                className={` transition-all duration-300 ease-in-out ${
                                  open ? "" : "rotate-180"
                                }`}
                              >
                                <RiArrowDropDownFill
                                  fill="white"
                                  size={"2rem"}
                                />
                              </div>

                              <p>{el.name}</p>
                            </Disclosure.Button>

                            <Transition
                              enter="transition duration-300 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-300 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-300 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <Disclosure.Panel>
                                {el.tags.map((tag, i) => (
                                  <div
                                    key={i}
                                    className="ml-4 flex items-center gap-3"
                                  >
                                    <div
                                      className={`flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm border border-secondary1 shadow-md bg-${
                                        tag?.selected
                                          ? "secondary1"
                                          : "tranparent"
                                      } p-1 transition-all duration-300 ease-in-out hover:shadow-secondary1`}
                                      onClick={() =>
                                        selectFilter(el.name, tag?.id)
                                      }
                                    >
                                      {tag?.selected && (
                                        <RiCheckFill size={"2rem"} />
                                      )}
                                    </div>
                                    <p
                                      className={`${
                                        !tag?.selected && "text-secondary1"
                                      }`}
                                    >
                                      {tag?.name}
                                    </p>
                                  </div>
                                ))}
                              </Disclosure.Panel>
                            </Transition>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  ))}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
      <div className="flex w-full flex-wrap md:w-3/4">
        <div className="flex w-full flex-col border-r border-lines">
          <p className=" flex border border-lines py-[10px] px-4 text-white transition-colors duration-300 ease-in-out">
            <i className="ri-arrow-down-s-fill"></i> contact-me
          </p>
          grid here
        </div>
      </div>
    </section>
  );
};

export default Projects;
