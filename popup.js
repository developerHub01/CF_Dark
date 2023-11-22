const darkModeBtn = document.querySelector(".darkModeBtn");

chrome.storage.local.get("cfDark").then((result) => {
  console.log(result.cfDark);
  if (result.cfDark) {
    console.log("===============");
    darkModeBtn.innerText = "Light Mode";
  } else {
    console.log("xxxxxxxxxxx");
    darkModeBtn.innerText = "Dark Mode";
  }
});

darkModeBtn.addEventListener("click", (e) => {
  chrome.storage.local.get("cfDark").then((result) => {
    console.log(result);
    if (result.cfDark) {
      chrome.storage.local.set({
        cfDark: false,
      });
      darkModeBtn.innerText = "Dark Mode";
    } else {
      darkModeBtn.innerText = "Light Mode";
      chrome.storage.local.set({
        cfDark: true,
      });
    }
  });
});
