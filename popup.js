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
    testCaseColor1: "#121212",
    testCaseColor2: "#262626",
    testCaseColor3: "#050505",
    testCaseColor4: "#1c1c1c",
  },
  {
    themeName: "t2",
    themeColor1: "#001523",
    themeColor2: "#00111c",
    themeColor3: "#001a2c",
    testCaseColor1: "#001523",
    testCaseColor2: "#002137",
    testCaseColor3: "#00111c",
    testCaseColor4: "#002137",
  },
  {
    themeName: "t3",
    themeColor1: "#2f0e07",
    themeColor2: "#260701",
    themeColor3: "#2f0e07",
    testCaseColor1: "#260701",
    testCaseColor2: "#411d13",
    testCaseColor3: "#38160d",
    testCaseColor4: "#4a2419",
  },
  {
    themeName: "t4",
    themeColor1: "#141414",
    themeColor2: "#0a0a0a",
    themeColor3: "#1f1f1f",
    testCaseColor1: "#101010",
    testCaseColor2: "#1c1c1c",
    testCaseColor3: "#0a0a0a",
    testCaseColor4: "#1d1d1b",
  },
  {
    themeName: "t5",
    themeColor1: "#000b25",
    themeColor2: "#00081c",
    themeColor3: "#000e2f",
    testCaseColor1: "#00113d",
    testCaseColor2: "#000b25",
    testCaseColor3: "#000e2f",
    testCaseColor4: "#001342",
  },
  {
    themeName: "t6",
    themeColor1: "#001b0b",
    themeColor2: "#001609",
    themeColor3: "#00220e",
    testCaseColor1: "#001609",
    testCaseColor2: "#003014",
    testCaseColor3: "#001b0b",
    testCaseColor4: "#00220e",
  },
  {
    themeName: "t7",
    themeColor1: "#001f29",
    themeColor2: "#001214",
    themeColor3: "#002837",
    testCaseColor1: "#001214",
    testCaseColor2: "#002837",
    testCaseColor3: "#001f29",
    testCaseColor4: "#01394c",
  },
  {
    themeName: "t8",
    themeColor1: "#1e2029",
    themeColor2: "#1b1d25",
    themeColor3: "#21232d",
    testCaseColor1: "#16171e",
    testCaseColor2: "#1e2029",
    testCaseColor3: "#1b1d25",
    testCaseColor4: "#21232d",
  },
  {
    themeName: "t9",
    themeColor1: "#142133",
    themeColor2: "#0d1b2a",
    themeColor3: "#182437",
    testCaseColor1: "#0c1926",
    testCaseColor2: "#142133",
    testCaseColor3: "#0a141f",
    testCaseColor4: "#142133",
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
