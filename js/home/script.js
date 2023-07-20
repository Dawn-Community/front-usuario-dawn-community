import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const links = [
  "https://api.github.com/users/kyoudan",
  "https://api.github.com/users/ayano-coder",
  "https://api.github.com/users/Martins-pedro23",
  "https://api.github.com/users/Wesley-Breno",
  "https://api.github.com/users/MatheusSystem",
];

//Martins-pedro23

const generateSlides = async (link) => {
  const response = await fetch(link);
  const data = await response.json();
  const slide = `
        <div class="swiper-slide">
            <div
              class="slide-container w-full flex lg:flex-row flex-col gap-12 items-center justify-center "
            >
              <div class="lg:w-1/2 w-[90%] flex items-center lg:justify-end justify-center">
                <img
                  src="${data.avatar_url}"
                  alt="${data.name}"
                  class="w-[300px] h-[auto] rounded-[50%]"
                />
              </div>
              <div class="lg:w-1/2 w-[90%] flex flex-col  justify-center items-center lg:items-start">
                <h3
                  class="text-primary-light-100 font-montserrat text-4xl font-bold lg:mr-0 lg:ml-0 mr-4 ml-4 text-center"
                >
                  ${data.name}
                </h3>
                <p class="text-zinc-500 font-montserrat text-2xl mt-6 max-w-[500px] lg:mr-0 lg:ml-0 mr-4 ml-4 text-justify">
                  ${data.bio}
                </p>
                <div class="mt-6">
                  <a
                    href="${data.html_url}"
                    target="_blank"
                    class="bg-primary-light-100 text-white p-2 rounded font-bold lg:mr-0 lg:ml-0 mr-4 ml-4"
                    >GitHub</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        
    `;
  return slide;
};

const renderSlides = async () => {
  links.forEach(async (link) => {
    const slide = await generateSlides(link);
    swiper.appendSlide(slide);
  });
};

renderSlides();
