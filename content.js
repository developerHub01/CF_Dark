const themeColor = "#212121";
const themeColor2 = "#111111";
const borderColor1 = "#444444";
const lightText = "#f1f1f1";
const whiteText = "#ffffff";
const blueColor1 = "#0496ff";
// chrome.storage.onChanged.addListener((changes, areaName) => {
//   if (areaName === "local") {
//     chrome.storage.local.get("cfDark").then((result) => {
//       console.log(result.cfDark);
//       handleDarkMode(result.cfDark);
//     });
//   }
// });
// chrome.storage.local.get("cfDark").then((result) => {
//   handleDarkMode(result.cfDark);
// });

const handleDarkMode = () => {
  document.body.style.background = `${themeColor}`;
  document.body.style.color = `${lightText}`;
  document.querySelectorAll("div").forEach((element) => {
    element.style.color = lightText;
  });
  document.querySelectorAll(".menu-box").forEach((element) => {
    element.style.border = `1px solid ${borderColor1}`;
    element.style.background = `${themeColor}`;
  });
  document
    .querySelectorAll("p, ul, .rated-user .user-admin")
    .forEach((element) => {
      element.style.color = lightText;
    });
  document.querySelectorAll("h1, h2, h4").forEach((element) => {
    element.style.color = whiteText;
  });
  document.querySelectorAll(".spoiler, .header").forEach((element) => {
    element.style.color = lightText;
  });

  console.log(document.querySelectorAll(".info a.rated-user.user-black"));
  document
    .querySelectorAll(".info a.rated-user.user-black")
    .forEach((element) => {
      element.style = "";
      // element.style.color = whiteText;
    });

  document
    .querySelectorAll(".problem-statement .sample-tests pre")
    .forEach((element) => {
      element.style.background = themeColor2;
    });

  document.querySelectorAll(".mrow .mn").forEach((element) => {
    element.style.color = `#fff!important`;
    element.style.border = "1px solid red";
  });

  document.querySelectorAll(".sidebar-menu ul li").forEach((element) => {
    element.style.border = "";
  });

  document
    .querySelectorAll("div.ttypography pre, div.ttypography code")
    .forEach((element) => {});

  document
    .querySelectorAll("a")
    .forEach((element) => (element.style.color = blueColor1));
  document.querySelectorAll("ul").forEach((element) => {
    element.style.color = lightText;
  });

  document
    .querySelectorAll(".second-level-menu-list li.backLava")
    .forEach((element) => (element.background = whiteText));

  document.querySelectorAll("li.current").forEach((element) => {
    element.style.borderBottom = `3px solid ${blueColor1}`;
  });
  document
    .querySelectorAll(".topic .title a, .topic .title a:hover, .topic .title a")
    .forEach((element) => {
      element.style.color = `${blueColor1} !important`;
    });
  // not sure
  document.querySelectorAll("div.ttypography a").forEach((element) => {
    element.style.color = `${blueColor1}`;
  });
  // not sure
  document.querySelectorAll(".user-black").forEach((element) => {
    element.style.color = `${blueColor1}`;
  });
  document.querySelectorAll(".menu-list li a").forEach((element) => {
    element.style.color = `${lightText}`;
  });

  document.querySelector("#pageContent").style.color = "#ffffff";

  // footer ==========================
  document.querySelector(
    "#footer"
  ).style.borderTop = `1px solid ${borderColor1}`;

  // not sure
  document.querySelectorAll("a").forEach((element) => {
    element.style.color = `${blueColor1} !important`;
  });

  document
    .querySelectorAll("ol")
    .forEach((element) => (element.style.color = lightText));

  document.querySelectorAll(".roundbox").forEach((element) => {
    element.style.color = `1px solid ${blueColor1}`;
    element.style.background = themeColor;
  });
  document.querySelectorAll(".roundbox .dark").forEach((element) => {
    element.style.background = themeColor2;
  });
  document.querySelectorAll(".rated-user.user-legendary").forEach((element) => {
    element.style.padding = "4px 8px";
    element.style.margin = "2px 0";
    element.style.background = "#ffffff";
  });
  document.querySelectorAll(".bottom-links").forEach((element) => {
    element.style.background = themeColor2;
  });
  document.querySelectorAll(".bottom-links tr").forEach((element) => {
    element.style.padding = "4px 8px";
    element.querySelectorAll("a").forEach((item) => {
      item.style.color = blueColor1;
      item.style.fontSize = "12px";
      item.style.padding = "2px";
    });
  });
  document.querySelectorAll(".caption.titled").forEach((element) => {
    element.style.color = blueColor1;
  });

  document.querySelectorAll(".bordertable tr").forEach((item) => {
    item.style.color = lightText;
    // item.style.background = themeColor;
    item.addEventListener("mouseenter", (e) => {
      item.style.color = themeColor;
      item.style.background = `${themeColor2} !important`;
    });
    item.addEventListener("mouseleave", (e) => {
      item.style.color = lightText;
      item.style.background = ``;
    });
  });
};
handleDarkMode();
