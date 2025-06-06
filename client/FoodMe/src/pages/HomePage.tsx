import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function HomePage() {
  return (
    <>
      <div className="relative flex size-full min-h-screen flex-col bg-[#101923] dark group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#223449] px-10 py-3">
            <div className="flex items-center gap-4 text-white">
              <div className="size-4">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                Recipe Preferences
              </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <a
                  className="text-white text-md font-medium leading-normal"
                  href=""
                >
                  Home
                </a>
                <a
                  className="text-white text-md font-medium leading-normal"
                  href="#"
                >
                  About
                </a>
                <a
                  className="text-white text-md font-medium leading-normal"
                  href="#"
                >
                  Contact
                </a>
              </div>
            </div>
          </header>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
              <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                Tell us about your recipe preferences
              </h2>
              <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                We'll use this information to tailor your recipe
                recommendations.
              </p>
              <div className="flex gap-28 items-center justify-center mt-4">
                <div>
                  <div className="flex max-w-[350px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                      <Select>
                        <SelectTrigger className="w-60 h-14 text-white rounded-xl px-4 text-base font-normal">
                          <SelectValue placeholder="Select Ingredients" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#223449] text-white">
                          <SelectItem value="one">one</SelectItem>
                          <SelectItem value="two">two</SelectItem>
                          <SelectItem value="three">three</SelectItem>
                        </SelectContent>
                      </Select>
                    </label>
                  </div>
                  <div className="flex max-w-[350px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                      <Select>
                        <SelectTrigger className="w-60 h-14 text-white rounded-xl px-4 text-base font-normal">
                          <SelectValue placeholder="Select Ingredients" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#223449] text-white">
                          <SelectItem value="one">one</SelectItem>
                          <SelectItem value="two">two</SelectItem>
                          <SelectItem value="three">three</SelectItem>
                        </SelectContent>
                      </Select>
                    </label>
                  </div>
                  <div className="flex max-w-[350px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                      <Select>
                        <SelectTrigger className="w-60 h-14 text-white rounded-xl px-4 text-base font-normal">
                          <SelectValue placeholder="Select Ingredients" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#223449] text-white">
                          <SelectItem value="one">one</SelectItem>
                          <SelectItem value="two">two</SelectItem>
                          <SelectItem value="three">three</SelectItem>
                        </SelectContent>
                      </Select>
                    </label>
                  </div>
                </div>

                <div>
                  <div className="flex max-w-[350px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                      <Select>
                        <SelectTrigger className="w-60 h-14 text-white rounded-xl px-4 text-base font-normal">
                          <SelectValue placeholder="Select Ingredients" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#223449] text-white">
                          <SelectItem value="one">one</SelectItem>
                          <SelectItem value="two">two</SelectItem>
                          <SelectItem value="three">three</SelectItem>
                        </SelectContent>
                      </Select>
                    </label>
                  </div>
                  <div className="flex max-w-[350px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                      <Select>
                        <SelectTrigger className="w-60 h-14 text-white rounded-xl px-4 text-base font-normal">
                          <SelectValue placeholder="Select Ingredients" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#223449] text-white">
                          <SelectItem value="one">one</SelectItem>
                          <SelectItem value="two">two</SelectItem>
                          <SelectItem value="three">three</SelectItem>
                        </SelectContent>
                      </Select>
                    </label>
                  </div>
                  <div className="flex max-w-[350px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                      <Select>
                        <SelectTrigger className="w-60 h-14 text-white rounded-xl px-4 text-base font-normal">
                          <SelectValue placeholder="Select Ingredients" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#223449] text-white">
                          <SelectItem value="one">one</SelectItem>
                          <SelectItem value="two">two</SelectItem>
                          <SelectItem value="three">three</SelectItem>
                        </SelectContent>
                      </Select>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex px-4 py-3 items-center justify-center mt-4">
                <button className="flex max-w-[300px] py-6 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#0c77f2] text-white text-md font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Submit Preferences</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
