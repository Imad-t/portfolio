import chatPage from "./assets/images/chatPage.png";
import musicPlayer from "./assets/images/musicPlayer.png";
import multiStep from "./assets/images/multiStep1.png";
import skyWay from "./assets/images/skyWay.png";
import alarado from "./assets/images/alarado.png";
import translator from "./assets/images/translator.png";
import quiz from "./assets/images/quiz.png";
import t3 from "./assets/images/t3.png";

const projects = [
  {
    title: "Online Gallery",
    description:
      "A Gallery website that allows users to sign up and upload their own images using the T3 stack.",
    tech: ["NextJS", "PostgreSQL", "Prisma","Clerk"],
    links: {
      code: "https://github.com/Imad-t/T3",
      demo: "https://t3-gallery-imadt.vercel.app/",
    },
    img: t3,
  },
  {
    title: "Translator App",
    description:
      "A single page translator app that utilizes MyMemory API and provides basic text to speech.",
    tech: ["React", "TailwindCss"],
    links: {
      code: "https://github.com/Imad-t/translator-app",
      demo: "https://translated-io.vercel.app/",
    },
    img: translator,
  },
  {
    title: "Country Quiz",
    description:
      "A quiz game that tests users knowledge of countries and their flags utilizing the REST countries API.",
    tech: ["React", "TailwindCss"],
    links: {
      code: "https://github.com/Imad-t/countryQuiz",
      demo: "https://country-quiz-puce.vercel.app/",
    },
    img: quiz,
  },
  {
    title: "Responsive Hero Page",
    description: "A responsive Hero page with Dark mode toggle.",
    tech: ["JavaScript", "CSS"],
    links: {
      code: "https://github.com/Imad-t/Darkmode-Homepage",
      demo: "https://alarado-ivory.vercel.app/",
    },
    img: alarado,
  },
  {
    title: "Multistep from",
    description:
      "A multistep register form with simple validation using vanilla Javascript.",
    tech: ["JavaScript", "CSS"],
    links: {
      code: "https://github.com/Imad-t/multi-step-form",
      demo: "https://multi-step-form-wine-alpha.vercel.app/",
    },
    img: multiStep,
  },
  {
    title: "Music Player",
    description: "An online music player with custom playback controls.",
    tech: ["JavaScript", "TailwindCss"],
    links: {
      code: "https://github.com/Imad-t/music-player",
      demo: "https://music-player-imadt.vercel.app/",
    },
    img: musicPlayer,
  },
  {
    title: "Flight reservation website",
    description:
      "A simple attempt at creating the UI of a flight reservation website.",
    tech: ["React", "TypeScript", "TailwindCss"],
    links: {
      code: "https://github.com/Imad-t/skyWay",
      demo: "https://sky-way.vercel.app/",
    },
    img: skyWay,
  },
  {
    title: "Chat Page",
    description:
      "This is a simple chat page, suitable for any sort of website that supports account registration.",
    tech: ["React", "SCSS"],
    links: {
      code: "https://github.com/Imad-t/chatPage",
      demo: "https://chat-page-zeta.vercel.app/",
    },
    img: chatPage,
  },
];

export default projects;
