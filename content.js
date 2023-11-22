const themeColor = "#212121";
const themeColor2 = "#111111";
const themeColor3 = "#252422";
const borderColor1 = "#444444";
const lightText = "#f1f1f1";
const theneText = "#f5f3f4";
const whiteText = "#ffffff";
const blueColor1 = "#0496ff";
const blueColor2 = "#072ac8";
const warningColor = "#ff7b00";

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

  document.querySelectorAll(".rated-user, .user-rank").forEach((element) => {
    element.style.background = whiteText;
    element.style.padding = "2px 4px";
    element.style.margin = "1px 2px";
    element.style.borderRadius = "4px";
    element.style.display = "inline-block";
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
  document
    .querySelectorAll(".spoiler .spoiler-content p")
    .forEach((element) => {
      element.style.setProperty("color", themeColor, "important");
    });

  document.querySelectorAll(".page-index.active").forEach((element) => {
    element.style.color = lightText;
  });

  console.log(document.querySelectorAll(".info a.rated-user.user-black"));
  document
    .querySelectorAll(".info a.rated-user.user-black")
    .forEach((element) => {
      element.style.setProperty("color", whiteText);
    });

  document
    .querySelectorAll(".problem-statement .sample-tests pre")
    .forEach((element) => {
      element.style.background = themeColor2;
    });

  document.querySelectorAll(".mrow .mn").forEach((element) => {
    element.style.color = `#fff!important`;
    element.style.setProperty("color", whiteText, "important");
    element.style.border = "1px solid red";
  });

  document.querySelectorAll(".sidebar-menu ul li").forEach((element) => {
    element.style.setProperty("border", "1px solid transparent");
  });

  document
    .querySelectorAll("div.ttypography pre, div.ttypography code")
    .forEach((element) => {});

  document
    .querySelectorAll("a")
    .forEach((element) => (element.style.color = blueColor1));
  document.querySelectorAll("ul") &&
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
    .querySelectorAll(".topic .title a, .title a, .title p")
    .forEach((element) => {
      element.style.setProperty("color", blueColor1, "important");
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

  document.querySelector("#pageContent") &&
    (document.querySelector("#pageContent").style.color = "#ffffff");

  // footer ==========================
  document.querySelector("#footer") &&
    (document.querySelector(
      "#footer"
    ).style.borderTop = `1px solid ${borderColor1}`);
  document.querySelector("#footer a img") &&
    (document.querySelector("#footer a img").style.borderRadius = `50%`);

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

  document.querySelectorAll(".roundbox tbody a").forEach((element) => {
    element.style.padding = "2px 4px";
    element.style.fontSize = "14px";
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
    item.addEventListener("mouseenter", (e) => {
      item.style.color = themeColor;
      item.style.background = `${themeColor2} !important`;
    });
    item.addEventListener("mouseleave", (e) => {
      item.style.color = lightText;
      item.style.background = ``;
    });
  });

  document.querySelectorAll(".alert.alert-error").forEach((element) => {
    element.style.background = warningColor;
    element.style.color = whiteText;
    element.style.borderColor = warningColor;
    console.log(element.querySelector("a"));
    element.querySelectorAll("a").forEach((item) => {
      item.style.color = blueColor2;
      item.style.textShadow = "none";
    });
  });

  document
    .querySelectorAll(".contest-state-regular")
    .forEach((element) => (element.color = whiteText));

  document.querySelectorAll(".datatable").forEach((element) => {
    element.style.background = themeColor3;
  });

  document.querySelectorAll(".datatable tr").forEach((element) => {
    element.style.background = themeColor;
    element.style.border = `1px solid ${borderColor1}`;
    element.style.color = lightText;
  });

  document.querySelectorAll(".datatable td").forEach((element) => {
    element
      .querySelectorAll(".groupName")
      .forEach((element) =>
        element.style.setProperty("color", blueColor1, "important")
      );
    element.style.background = element.classList.contains("dark")
      ? themeColor2
      : themeColor;
    element.style.border = `1px solid ${borderColor1}`;
    element.style.color = `${lightText}!important`;
  });

  document.querySelectorAll(".notice, .countdown").forEach((element) => {
    element.style.setProperty("color", theneText, "important");
  });

  document.querySelectorAll(".contest-state-phase").forEach((element) => {
    element.style.setProperty("color", blueColor1);
    element.style.paddingBottom = "10px";
    element.style.display = "inline-block";
  });

  //inbox
  document.querySelectorAll("#facebox").forEach((element) => {
    element.style.background = themeColor2;
    element.querySelectorAll(".content").forEach((element) => {
      element.style.background = themeColor;
      element.querySelectorAll("form").forEach((element) => {
        element.style.background = themeColor;
      });
    });
    element
      .querySelectorAll(".alert.alert-success.ttypography ul li")
      .forEach((element) => {
        element.style.setProperty("color", themeColor, "important");
      });

    element.querySelectorAll(".talk-content div").forEach((element) => {
      if (!element.getAttribute("data-talkid")) {
        element.style.background = themeColor2;
        element.style.color = lightText;
        element.style.padding = "4px";
        element.marginTop = "4px";
      }
    });
  });

  document.querySelectorAll(".submit").forEach((element) => {
    element.style.cursor = "pointer";
    element.style.background = whiteText;
    element.style.border = "none";
    element.style.padding = "4px 8px";
    element.style.display = "inline-block";
    element.style.borderRadius = "4px";
  });

  console.log(document.querySelectorAll(".comment-table.highlight-blue"));
  document
    .querySelectorAll(".comment-table.highlight-blue")
    .forEach((element) => {
      element.style.setProperty("background", blueColor1);
    });

  document.querySelectorAll(".nav-links li a").forEach((item) => {
    item.style.fontSize = "14px";
    item.style.padding = "3px 0";
  });
  document.querySelectorAll(".user-gray").forEach((element) => {
    element.style.setProperty("color", lightText);
  });

  document.querySelectorAll(".bell-details").forEach((element) => {
    element.style.background = themeColor;
    element.querySelectorAll("bell-details__no-new").forEach((element) => {
      element.style.color = lightText;
    });
  });
};
handleDarkMode();
