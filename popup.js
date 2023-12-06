const buttons = document.querySelectorAll("button");

const themes = [
  {
    themeName: "default",
  },
  {
    themeName: "t1",
    themeColor1: "#212121",
    themeColor2: "#111111",
    themeColor3: "#252422",
  },
  {
    themeName: "t2",
    themeColor1: "#001523",
    themeColor2: "#00111c",
    themeColor3: "#001a2c",
  },
  {
    themeName: "t3",
    themeColor1: "#2f0e07",
    themeColor2: "#260701",
    themeColor3: "#2f0e07",
  },
  {
    themeName: "t4",
    themeColor1: "#141414",
    themeColor2: "#0a0a0a",
    themeColor3: "#1f1f1f",
  },
  {
    themeName: "t5",
    themeColor1: "#000b25",
    themeColor2: "#00081c",
    themeColor3: "#000e2f",
  },
  {
    themeName: "t6",
    themeColor1: "#001b0b",
    themeColor2: "#001609",
    themeColor3: "#00220e",
  },
  {
    themeName: "t7",
    themeColor1: "#001f29",
    themeColor2: "#001214",
    themeColor3: "#002837",
  },
  {
    themeName: "t8",
    themeColor1: "#1e2029",
    themeColor2: "#1b1d25",
    themeColor3: "#21232d",
  },
  {
    themeName: "t9",
    themeColor1: "#142133",
    themeColor2: "#0d1b2a",
    themeColor3: "#182437",
  },
];

buttons.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    buttons.forEach((element) => {
      element.classList.remove("active");
      chrome.storage.local.remove(`theme`);
    });
    element.classList.add("active");
    chrome.storage.local.set({
      theme: themes[i],
    });
  });
});
