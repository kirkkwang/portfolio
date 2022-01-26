import lightBulbs from "./assets/lightbulbs.png";
import ticTacToe from "./assets/tictactoe.png";
import pigLatin from "./assets/piglatin.png";

class ProjectCardLinks {
  constructor(title, desc, img, alt, projectLink, githubLink) {
    this.title = title;
    this.desc = desc;
    this.img = img;
    this.alt = alt;
    this.projectLink = projectLink;
    this.githubLink = githubLink;
  }
}

const lightBulbProject = new ProjectCardLinks(
  "Light Bulbs",
  "Fidget with some super fun light bulbs and see if you can find the secret multicolor mode.",
  lightBulbs,
  "Light Bulbs Project Screenshot",
  "https://kirkkwang.github.io/light-bulb-react/",
  "https://github.com/kirkkwang/light-bulb-react"
);

const ticTacToeProject = new ProjectCardLinks(
  "Tic Tac Toe",
  "Just a friendly turn base game of tic tac toe.  You can choose your own emoji and battle your friend!",
  ticTacToe,
  "Something Something Project Screenshot",
  "https://kirkkwang.github.io/tic-tac-toe/",
  "https://github.com/kirkkwang/tic-tac-toe"
);

const catTinder = new ProjectCardLinks(
  "Cat Tinder",
  "Need a match for you feline friend? Look no further!",
  "https://images.unsplash.com/photo-1603104010974-de673b7c5674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80",
  "Cats Tinder Project Screenshot",
  "https://www.google.com",
  "https://www.github.com"
);

const capstone = new ProjectCardLinks(
  "Capstone",
  "This is the bit project that everyone's been talking about.  Hopefully I'll be ready for it!",
  "https://images.unsplash.com/photo-1616989724007-d93722dab1b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "Capstone Project Screenshot",
  "https://www.google.com",
  "https://www.github.com"
);

const pigLatinProject = new ProjectCardLinks(
  "Pig Latin Translator",
  "Pretty fun little translator from english to Pig Latin.",
  pigLatin,
  "Capstone Project Screenshot",
  "https://www.google.com",
  "https://www.github.com"
);

const dummyProject2 = new ProjectCardLinks(
  "Dummy Project",
  "More filler text over here, don't mind me",
  "https://images.unsplash.com/photo-1528475422887-f47817e10712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1713&q=80",
  "Dummy Project Screenshot",
  "https://www.google.com",
  "https://www.github.com"
);

export const projectCardLinks = [
  lightBulbProject,
  ticTacToeProject,
  pigLatinProject,
  catTinder,
  capstone,
  dummyProject2,
];

export const projectLinkIcon = [
  "M16.1054 2.25146C16.1054 1.83725 16.4452 1.50146 16.8644 1.50146H22.4301C22.8493 1.50146 23.1891 1.83725 23.1891 2.25146V7.75146C23.1891 8.16568 22.8493 8.50146 22.4301 8.50146C22.0109 8.50146 21.6711 8.16568 21.6711 7.75146V4.06212L15.3772 10.2818C15.0808 10.5747 14.6002 10.5747 14.3038 10.2818C14.0074 9.9889 14.0074 9.51402 14.3038 9.22113L20.5978 3.00146H16.8644C16.4452 3.00146 16.1054 2.66568 16.1054 2.25146Z",
  "M2.9501 4.25146C2.9501 3.28497 3.74297 2.50146 4.72101 2.50146H13.3226C13.7417 2.50146 14.0815 2.83725 14.0815 3.25146C14.0815 3.66568 13.7417 4.00146 13.3226 4.00146H4.72101C4.58129 4.00146 4.46803 4.11339 4.46803 4.25146V19.7515C4.46803 19.8895 4.58129 20.0015 4.72101 20.0015H20.4062C20.5459 20.0015 20.6592 19.8895 20.6592 19.7515V11.2515C20.6592 10.8373 20.999 10.5015 21.4181 10.5015C21.8373 10.5015 22.1771 10.8373 22.1771 11.2515V19.7515C22.1771 20.718 21.3842 21.5015 20.4062 21.5015H4.72101C3.74297 21.5015 2.9501 20.718 2.9501 19.7515V4.25146Z",
];

export const projectGithubIcon =
  "M12.5594 0.00146484C6.12971 0.00146484 0.921967 5.14772 0.921967 11.5015C0.921967 16.5902 4.25317 20.8884 8.87904 22.4121C9.46091 22.5127 9.67911 22.1677 9.67911 21.8659C9.67911 21.5927 9.66457 20.6871 9.66457 19.724C6.74067 20.2559 5.98424 19.0196 5.75149 18.3727C5.62057 18.0421 5.05325 17.0215 4.55866 16.7484C4.15135 16.5327 3.56948 16.0009 4.54411 15.9865C5.46055 15.9721 6.11516 16.8202 6.33336 17.1652C7.38073 18.9046 9.0536 18.4159 9.72276 18.114C9.82458 17.3665 10.1301 16.8634 10.4646 16.5759C7.87532 16.2884 5.16962 15.2965 5.16962 10.8977C5.16962 9.6471 5.62057 8.6121 6.36245 7.8071C6.24608 7.5196 5.83877 6.34085 6.47883 4.75959C6.47883 4.75959 7.45346 4.45772 9.67911 5.93835C10.6101 5.6796 11.5993 5.55022 12.5885 5.55022C13.5776 5.55022 14.5668 5.6796 15.4978 5.93835C17.7235 4.44334 18.6981 4.75959 18.6981 4.75959C19.3382 6.34085 18.9309 7.5196 18.8145 7.8071C19.5564 8.6121 20.0073 9.63272 20.0073 10.8977C20.0073 15.3109 17.2871 16.2884 14.6977 16.5759C15.1196 16.9352 15.4833 17.6252 15.4833 18.7034C15.4833 20.2415 15.4687 21.4777 15.4687 21.8659C15.4687 22.1677 15.6869 22.5271 16.2688 22.4121C20.8656 20.8884 24.1968 16.5759 24.1968 11.5015C24.1968 5.14772 18.989 0.00146484 12.5594 0.00146484Z";
