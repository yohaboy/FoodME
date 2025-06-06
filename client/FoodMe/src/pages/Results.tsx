function Results() {
  return (
    <>
      {" "}
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
                  <g clip-path="url(#clip0_6_543)">
                    <path
                      d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_6_543">
                      <rect width="48" height="48" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                CulinaryCraft
              </h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <a
                  className="text-white text-sm font-medium leading-normal"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="text-white text-sm font-medium leading-normal"
                  href="#"
                >
                  Recipes
                </a>
                <a
                  className="text-white text-sm font-medium leading-normal"
                  href="#"
                >
                  Favorites
                </a>
                <a
                  className="text-white text-sm font-medium leading-normal"
                  href="#"
                >
                  Profile
                </a>
              </div>
              <div className="flex gap-2">
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#223449] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                  <div
                    className="text-white"
                    data-icon="MagnifyingGlass"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                </button>
                <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#223449] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                  <div
                    className="text-white"
                    data-icon="Bell"
                    data-size="20px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"></div>
            </div>
          </header>
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                  <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                    Recipe Results
                  </p>
                  <p className="text-[#90abcb] text-sm font-normal leading-normal">
                    Explore recipes tailored to your preferences.
                  </p>
                </div>
              </div>
              <div className="px-4 py-3">
                <label className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <div
                      className="text-[#90abcb] flex border-none bg-[#223449] items-center justify-center pl-4 rounded-l-xl border-r-0"
                      data-icon="MagnifyingGlass"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                      </svg>
                    </div>
                    <input
                      placeholder="Search for recipes"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#223449] focus:border-none h-full placeholder:text-[#90abcb] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                      value=""
                    />
                  </div>
                </label>
              </div>
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Main Dishes
              </h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div className="flex flex-col gap-3 pb-3">
                  <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Grilled Salmon with Lemon
                    </p>
                    <p className="text-[#90abcb] text-sm font-normal leading-normal">
                      Delicious grilled salmon with a zesty lemon flavor.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Roasted Chicken with Herbs
                    </p>
                    <p className="text-[#90abcb] text-sm font-normal leading-normal">
                      Tender roasted chicken seasoned with aromatic herbs.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Vegetable Stir-Fry
                    </p>
                    <p className="text-[#90abcb] text-sm font-normal leading-normal">
                      Healthy and flavorful vegetable stir-fry.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <p className="text-[#90abcb] text-sm font-normal leading-normal">
                    Delicious grilled salmon with a zesty lemon flavor.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <p className="text-[#90abcb] text-sm font-normal leading-normal">
                    Tender roasted chicken seasoned with aromatic herbs.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <p className="text-[#90abcb] text-sm font-normal leading-normal">
                    Healthy and flavorful vegetable stir-fry.
                  </p>
                </div>
              </div>
              <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Desserts
              </h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div className="flex flex-col gap-3 pb-3">
                  <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Chocolate Lava Cake
                    </p>
                    <p className="text-[#90abcb] text-sm font-normal leading-normal">
                      Rich chocolate lava cake with a gooey center.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Fruit Tart
                    </p>
                    <p className="text-[#90abcb] text-sm font-normal leading-normal">
                      Fresh fruit tart with a creamy custard filling.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">
                      Cheesecake
                    </p>
                    <p className="text-[#90abcb] text-sm font-normal leading-normal">
                      classNameic cheesecake with a graham cracker crust.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center p-4">
                <a
                  href="#"
                  className="flex size-10 items-center justify-center"
                >
                  <div
                    className="text-white"
                    data-icon="CaretLeft"
                    data-size="18px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-full bg-[#223449]"
                  href="#"
                >
                  1
                </a>
                <a
                  className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full"
                  href="#"
                >
                  2
                </a>
                <a
                  className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full"
                  href="#"
                >
                  3
                </a>
                <a
                  className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full"
                  href="#"
                >
                  4
                </a>
                <a
                  href="#"
                  className="flex size-10 items-center justify-center"
                >
                  <div
                    className="text-white"
                    data-icon="CaretRight"
                    data-size="18px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <footer className="flex justify-center">
            <div className="flex max-w-[960px] flex-1 flex-col">
              <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                  <a
                    className="text-[#90abcb] text-base font-normal leading-normal min-w-40"
                    href="#"
                  >
                    About Us
                  </a>
                  <a
                    className="text-[#90abcb] text-base font-normal leading-normal min-w-40"
                    href="#"
                  >
                    Contact
                  </a>
                  <a
                    className="text-[#90abcb] text-base font-normal leading-normal min-w-40"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                  <a
                    className="text-[#90abcb] text-base font-normal leading-normal min-w-40"
                    href="#"
                  >
                    Terms of Service
                  </a>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#">
                    <div
                      className="text-[#90abcb]"
                      data-icon="TwitterLogo"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div
                      className="text-[#90abcb]"
                      data-icon="InstagramLogo"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div
                      className="text-[#90abcb]"
                      data-icon="FacebookLogo"
                      data-size="24px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <p className="text-[#90abcb] text-base font-normal leading-normal">
                  @2024 CulinaryCraft. All rights reserved.
                </p>
              </footer>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Results;
