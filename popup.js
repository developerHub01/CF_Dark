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
