<script>
    import Step from "./Step.svelte";

    let steps = [
        {
            name: "Quorabust",
            icon: "fa-solid fa-magnifying-glass",
            description:
                "",
        },
        {
            name: "Newsact",
            icon: "fa-solid fa-wand-magic-sparkles",
            description:
                " ",
        },
        {
            name: "Chatster",
            icon: "fa-solid fa-envelope",
            description:
                "",
        },
    ];

    let benefits = [
    {
        metric: "10x",
        name: "Summary",
        description:
            "As a software developer and aspiring computer scientist, I am driven by a deep passion for both the theoretical and practical aspects of technology. My enthusiasm lies in areas such as AI, automated reasoning, soft computing, and natural language processing (NLP). I thrive on the challenge of pushing technological boundaries through research and innovation. In my free time, I enjoy playing the violin, which adds a creative balance to my technical pursuits. I also actively contribute to open-source projects, continually learning and working to shape the future of intelligent systems by merging theory with practice."
    },
    {
        name: "My Interests",
        description:
            "Artificial Intelligence (AI): Passionate about exploring cutting-edge advancements and contributing to the creation of smarter, more efficient systems. Automated Reasoning: Fascinated by the potential of machines to autonomously reason and make decisions. Soft Computing: Interested in approaches that mimic human reasoning to solve complex, real-world problems. Natural Language Processing (NLP): Enthusiastic about improving how machines understand and process human language. Engineering and Technology: Driven by the challenge of designing and developing innovative engineering solutions and advancing technological progress."
    },
    {
        name: "Research Aspirations",
        description:
            "I aspire to delve deeper into the intersection of AI and human cognition, aiming to develop systems that can learn, adapt, and reason more effectively. My research goals include: Advancing AI Algorithms: Enhancing the capabilities of AI through innovative algorithms that push the limits of current technology. Improving NLP: Creating more intuitive and efficient methods for machines to understand and generate human language. Exploring Hybrid Systems: Combining soft computing techniques with traditional AI to solve complex, ambiguous problems. Contributing to Open-Source Projects: Collaborating with the global developer community to share knowledge and drive technological progress."
    }
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
               <span class="poppins text-violet-400">AliSina</span> Karimi
                <br />Software
                <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                As a <span class="poppins text-violet-400">software developer</span> and aspiring <span class="poppins text-violet-400">computer scientist</span>, I am deeply passionate about exploring the realms theory and practice. My interests include <span class="poppins text-violet-400">AI</span> , <span class="poppins text-violet-400">automated reasoning</span>, <span class="poppins text-violet-400">soft computing</span>, and <span class="poppins text-violet-400">NLP</span>. I thrive on pushing tech boundaries through research and love playing violin in my downtime. Actively contributing to open-source projects as another interest of mine, I aim to continuosly learn and shape the future of intelligent systems by blending theory with practice.
            </p>
            <button
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                />
                <h4 class="relative z-9" id="contact">Get in touch &rarr;</h4>
            </button>
        </div>
        
        <!-- <div  class="flex p-0.5 relative max-w-[700px] w-full mx-auto">
            <div
                class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center"
            >
                <div
                    class="bg-gradient-to-r absolute inset-[-20px]  from-violet-800 to-indigo-800 specialSpin"
                />
            </div>

            <img
                src={""}
                alt=""
                class="w-full h-full object-cover z-[2]"
            />
        </div> -->
    </section>
    <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                Here are some of my projects
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Look into some of <span class="poppins text-violet-400"><a href="https://github.com/AliSinaDevelo">my work</a></span> 
            </h3>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    Implemented using Python, employing Bag-of-Words (BOW), TFIDF, and XG- Boost algorithms. Quorabust serves as a tool facilitating the discovery of similar Quora questions to aid users in finding pertinent answers. Its functionality aims to streamline the process of locating relevant information within the Quora platform.
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>
                    Developed using Python in conjunction with Scikit-learn. Newsact functions as a machine learning tool engineered to discern between authentic news and misinformation, thus combating the proliferation of fake news.
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                    Designed and developed using Go for backend infrastructure management.
                    Utilized ReactJS for frontend development.
                    Chatster is a comprehensive real-time chat application equipped with a wide array of features. It serves as a robust framework adaptable for various chat systems within organizational environments.
                </p>
            </Step>
        </div>
    </section>
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <!-- <div class="flex flex-col gap-2 mx-auto">
                    <div class="flex items-end gap-4">
                        <p
                            class="poppins text-6xl sm:text-7xl md:text-8xl text-slate-500 font-medium"
                        >
                            {benefit.metric}
                        </p>
                        <p
                            class="text-xl sm:text-2xl md:text-3xl capitalize pb-2"
                        >
                            {benefit.name}
                        </p>
                    </div>
                    <p class="text-center italic">- {benefit.description}</p>
                </div> -->
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        
       
                      
        <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>Scroll to see more &rarr;</p>
        </div>
        <p class="mx-auto">So why not invest?</p>
    </section>
</main>