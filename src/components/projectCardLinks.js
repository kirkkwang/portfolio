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

const lightBulb = new ProjectCardLinks(
  "Light Bulbs",
  "Play with some super fun light bulbs, see if you can find the secret multicolor mode.",
  "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
  "Light Bulbs Project Screenshot",
  "https://kirkkwang.github.io/light-bulb-react/",
  "https://github.com/kirkkwang/light-bulb-react"
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

const pigLatin = new ProjectCardLinks(
  "Pig Latin Translator",
  "Pretty fun little translator from english to Pig Latin.",
  "https://i.guim.co.uk/img/media/7a0ccba31578833efe0de8db130e57015109d067/183_0_3840_2304/master/3840.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=3b95b4d4869e595a2cebff6be1c24eac",
  "Capstone Project Screenshot",
  "https://www.google.com",
  "https://www.github.com"
);

const dummyProject1 = new ProjectCardLinks(
  "Something Something Project",
  "Filler stuff, don't mind pay me any attention and move along about your day.",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80",
  "Something Something Project Screenshot",
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
  lightBulb,
  catTinder,
  capstone,
  pigLatin,
  dummyProject1,
  dummyProject2,
];
