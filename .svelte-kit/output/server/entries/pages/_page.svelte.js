import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center cursor-pointer group hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-betweeen gap-4 items-end" data-svelte-h="svelte-o55gl8"><div class="ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-white after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="z-4">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Quorabust",
      icon: "fa-solid fa-magnifying-glass",
      description: ""
    },
    {
      name: "Newsact",
      icon: "fa-solid fa-wand-magic-sparkles",
      description: " "
    },
    {
      name: "Chatster",
      icon: "fa-solid fa-envelope",
      description: ""
    }
  ];
  let benefits = [
    {
      metric: "10x",
      name: "Summary",
      description: "As a software developer and aspiring computer scientist, I am driven by a deep passion for both the theoretical and practical aspects of technology. My enthusiasm lies in areas such as AI, automated reasoning, soft computing, and natural language processing (NLP). I thrive on the challenge of pushing technological boundaries through research and innovation. In my free time, I enjoy playing the violin, which adds a creative balance to my technical pursuits. I also actively contribute to open-source projects, continually learning and working to shape the future of intelligent systems by merging theory with practice."
    },
    {
      name: "My Interests",
      description: "Artificial Intelligence (AI): Passionate about exploring cutting-edge advancements and contributing to the creation of smarter, more efficient systems. Automated Reasoning: Fascinated by the potential of machines to autonomously reason and make decisions. Soft Computing: Interested in approaches that mimic human reasoning to solve complex, real-world problems. Natural Language Processing (NLP): Enthusiastic about improving how machines understand and process human language. Engineering and Technology: Driven by the challenge of designing and developing innovative engineering solutions and advancing technological progress."
    },
    {
      name: "Research Aspirations",
      description: "I aspire to delve deeper into the intersection of AI and human cognition, aiming to develop systems that can learn, adapt, and reason more effectively. My research goals include: Advancing AI Algorithms: Enhancing the capabilities of AI through innovative algorithms that push the limits of current technology. Improving NLP: Creating more intuitive and efficient methods for machines to understand and generate human language. Exploring Hybrid Systems: Combining soft computing techniques with traditional AI to solve complex, ambiguous problems. Contributing to Open-Source Projects: Collaborating with the global developer community to share knowledge and drive technological progress."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14" data-svelte-h="svelte-1e3cjfa"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl"><span class="poppins text-violet-400">AliSina</span> Karimi
                <br>Software
                <span class="poppins text-violet-400">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl">As a <span class="poppins text-violet-400">software developer</span> and aspiring <span class="poppins text-violet-400">computer scientist</span>, I am deeply passionate about exploring the realms theory and practice. My interests include <span class="poppins text-violet-400">AI</span> , <span class="poppins text-violet-400">automated reasoning</span>, <span class="poppins text-violet-400">soft computing</span>, and <span class="poppins text-violet-400">NLP</span>. I thrive on pushing tech boundaries through research and love playing violin in my downtime. Actively contributing to open-source projects as another interest of mine, I aim to continuosly learn and shape the future of intelligent systems by blending theory with practice.</p> <button class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9" id="contact">Get in touch →</h4></button></div> </section> <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-w5tlaa"><h6 class="text-large sm:text-xl md:text-2xl">Here are some of my projects</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Look into some of <span class="poppins text-violet-400"><a href="https://github.com/AliSinaDevelo">my work</a></span></h3></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-fr09mf">Implemented using Python, employing Bag-of-Words (BOW), TFIDF, and XG- Boost algorithms. Quorabust serves as a tool facilitating the discovery of similar Quora questions to aid users in finding pertinent answers. Its functionality aims to streamline the process of locating relevant information within the Quora platform.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-gmocwi">Developed using Python in conjunction with Scikit-learn. Newsact functions as a machine learning tool engineered to discern between authentic news and misinformation, thus combating the proliferation of fake news.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-196u1bk">Designed and developed using Go for backend infrastructure management.
                    Utilized ReactJS for frontend development.
                    Chatster is a comprehensive real-time chat application equipped with a wide array of features. It serves as a robust framework adaptable for various chat systems within organizational environments.</p>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"> <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-1v5l3ql"><h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-1q8im4p">I am . . .</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return ` <div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50" data-svelte-h="svelte-zp0ubu"><p>Scroll to see more →</p></div> <p class="mx-auto" data-svelte-h="svelte-g5q3n9">So why not invest?</p></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
