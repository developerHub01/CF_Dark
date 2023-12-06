const themeColor = "#212121";
const themeColor2 = "#111111";
const themeColor3 = "#252422";
const borderColor1 = "#444444";
const lightText = "#f1f1f1";
const theneText = "#f5f3f4";
const whiteText = "#ffffff";
const blueColor1 = "#0496ff";
const blueColor2 = "#0d41e1";
const warningColor = "#ff7b00";
const green1 = "#29bf12";
const red1 = "#d90429";
const purpel1 = "#f20089";
const pink1 = "#ff0a54";
const testCaseColor1 = "#121212";
const testCaseColor2 = "#262626";
const testCaseColor3 = "#050505";
const testCaseColor4 = "#1c1c1c";
const ace_keyword_color = "#e21fc6";
const sortIcon = "https://i.ibb.co/W6RC8qW/sortIcon.png";
const logo = "https://i.ibb.co/7XV6bF3/logo.png";
const ascIcon = "https://i.ibb.co/Dk0T4FW/asc.png";
const descIcon = "https://i.ibb.co/PC9wcqY/desc.png";
const searchIcon = "https://i.ibb.co/6BmWvt3/search.png";

const handleDarkMode = () => {
  document.body.style.background = `${themeColor}`;
  document.body.style.color = `${lightText}`;

  // logo
  document.querySelector("#header a") &&
    document.querySelector("#header a").href.trim() ===
      "https://codeforces.com/" &&
    document.querySelector("#header a img") &&
    (document.querySelector("#header a img").src = logo);

  document.querySelectorAll("small").forEach((element) => {
    element.style.color = theneText;
  });

  document
    .querySelectorAll("._CatalogHistorySidebarFrame_item")
    .forEach((element) => {
      element.style.lineHeight = "1.5";
    });
  document
    .querySelectorAll(
      "._CatalogViewFrame_catalog-action-icon, .icon-folder-open-alt"
    )
    .forEach((element) => {
      element.style.color = theneText;
    });

  document
    .querySelectorAll("._CatalogHistorySidebarFrame_value")
    .forEach((element) => {
      element.style.color = theneText;
    });
  document
    .querySelectorAll(
      "._CatalogHistorySidebarFrame_value ins, ._CatalogHistorySidebarFrame_value del"
    )
    .forEach((element) => {
      element.style.color = themeColor;
    });

  document.querySelectorAll(".icon-file-text-alt").forEach((item) => {
    item.style.setProperty("color", theneText, "important");
  });

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
  document.querySelectorAll("h1, h2,h3, h4").forEach((element) => {
    element.style.color = whiteText;
  });
  document.querySelectorAll(".spoiler, .header").forEach((element) => {
    element.style.color = lightText;
  });

  document.querySelectorAll(".page-index.active").forEach((element) => {
    element.style.color = lightText;
  });

  document
    .querySelectorAll(".info a.rated-user.user-black")
    .forEach((element) => {
      element.style.setProperty("color", whiteText);
    });

  /*==========================================================
                        Test case 
  ============================================================*/

  const handleThemeOfTestCase = (element, className, bgColor1, bgColor2) => {
    element.querySelectorAll(`.${className}`).forEach((element) => {
      element.style.background = bgColor1;
      element.addEventListener("mouseover", () => {
        let currentElement = element;
        while (currentElement && currentElement.classList.contains(className)) {
          currentElement.style.background = bgColor2;
          currentElement = currentElement.previousElementSibling;
        }
        currentElement = element;
        while (currentElement && currentElement.classList.contains(className)) {
          currentElement.style.background = bgColor2;
          currentElement = currentElement.nextElementSibling;
        }
      });
      element.addEventListener("mouseleave", () => {
        let currentElement = element;
        while (currentElement && currentElement.classList.contains(className)) {
          currentElement.style.background = bgColor1;
          currentElement = currentElement.previousElementSibling;
        }
        currentElement = element;
        while (currentElement && currentElement.classList.contains(className)) {
          currentElement.style.background = bgColor1;
          currentElement = currentElement.nextElementSibling;
        }
      });
    });
  };

  document.querySelectorAll(".sample-test").forEach((element) => {
    element.style.setProperty("color", themeColor, "important");
    element.querySelectorAll(".test-example-line, pre").forEach((element) => {
      element.style.setProperty("background", themeColor2, "important");
      element.style.setProperty("color", lightText, "important");
      element.style.setProperty("font-size", "14px", "important");
      element.style.setProperty("font-weight", "800", "important");
      element.style.setProperty("padding", "4px", "important");
    });

    handleThemeOfTestCase(
      element,
      "test-example-line-odd",
      testCaseColor1,
      testCaseColor2
    );
    handleThemeOfTestCase(
      element,
      "test-example-line-even",
      testCaseColor3,
      testCaseColor4
    );
  });

  /*==========================================================
                        Submission problem details 
  ============================================================*/
  document
    .querySelectorAll(
      ".file.input-view, .file.output-view, .file.answer-view, .file.checker-comment-view"
    )
    .forEach((element) => {
      element
        .querySelectorAll(
          "pre.input, pre.output, pre.answer, pre.checkerComment"
        )
        .forEach((element) => {
          element.style.background = themeColor2;
          element.style.fontSize = "14px";
          element.style.lineHeight = "1.5";
          element.style.overflowX = "auto";
        });
      element.querySelectorAll(".name").forEach((element) => {
        element.style.paddingBottom = "5px";
        element.style.display = "inline-block";

        const verdictElement = element.parentElement.previousElementSibling;
        if (verdictElement.classList.contains("verdict_infoline")) {
          verdictElement.querySelectorAll("div").forEach((element) => {
            if (element.classList.contains("welldone")) {
              element.style.color = green1;
              element.style.setProperty("color", green1, "important");
              element.style.background = green1;
            }
          });
        }
      });
    });

  document
    .querySelectorAll(".infoline.verdict_infoline .verdict_type.welldone")
    .forEach((element) => {
      element.style.background = "red";
      element.style.setProperty("background", "red", "important");
    });
  document
    .querySelectorAll(
      ".view-protocol, .view-source, ._UserTalkBlacklistFrame_blockUser, .add-api-key, .icon-list.userListMarker"
    )
    .forEach((element) => {
      element.addEventListener("click", (e) => {
        const facebox = document.querySelector("#facebox");
        if (!facebox) return;
        facebox.style.background = themeColor;
        const popup = facebox.querySelector(".popup");
        popup && (popup.style.background = themeColor);
        const content = facebox.querySelector(".content");
        content && (content.style.background = themeColor);
        const pre = facebox.querySelector("pre");
        pre && (pre.style.fontSize = "14px");
      });
    });

  document.querySelectorAll(".source-popup").forEach((element) => {
    element.style.background = themeColor;
    element.querySelectorAll("pre").forEach((element) => {
      element.style.padding = "8px";
    });
  });
  document
    .querySelectorAll(".input, .output, .answer, .checker")
    .forEach((element) => {
      element.style.background = themeColor2;
      element.style.fontSize = "14px";
      element.style.padding = "8px";
    });

  document.querySelectorAll(".popup .content").forEach((element) => {
    element.style.background = themeColor2;
    element.querySelectorAll("a").forEach((element) => {
      element.style.color = blueColor1;
    });
    element.querySelectorAll(".close").forEach((element) => {
      element.style.width = "15px";
      element.style.height = "15px";
      element.style.display = "grid";
      element.style.placeItems = "center";
      element.style.borderRadius = "50%";
      element.style.background = whiteText;
    });
  });

  /*==========================================================
                        Submit code editor 
  ============================================================*/
  document.querySelectorAll("#editor").forEach((element) => {
    element.style.background = themeColor;
  });
  document
    .querySelectorAll(".ace_layer.ace_gutter-layer.ace_folding-enabled")
    .forEach((element) => {
      element.style.background = themeColor;
    });

  document.querySelectorAll(".ace_line").forEach((element) => {
    element.style.fontSize = "14px";
    element.style.lineHeight = "1.5";
  });
  document.querySelectorAll(".ace_keyword").forEach((element) => {
    element.style.setProperty("color", pink1, "important");
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
    .querySelectorAll(".topic .title a, .title a, .title p, .title")
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

  document.querySelectorAll(".alert").forEach((element) => {
    element.style.background = warningColor;
    element.style.color = whiteText;
    element.style.borderColor = warningColor;
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.alignItem = "center";
    element.style.gap = "5px";
    element.style.flexWrap = "wrap";
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

  document.querySelectorAll("td").forEach((element) => {
    element
      .querySelectorAll(".groupName")
      .forEach((element) =>
        element.style.setProperty("color", blueColor1, "important")
      );
    element.style.setProperty(
      "background",
      element.classList.contains("dark") ? themeColor2 : themeColor,
      "important"
    );
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

  document
    .querySelectorAll("input[type='button'], input[type='submit']")
    .forEach((element) => {
      element.style.fontSize = "14px";
      element.style.cursor = "pointer";
      element.style.background = whiteText;
      element.style.border = "none";
      element.style.padding = "4px 8px";
      element.style.display = "inline-block";
      element.style.borderRadius = "4px";
    });

  document
    .querySelectorAll(".comment-table.highlight-blue")
    .forEach((element) => {
      element.style.setProperty("background", blueColor2, "important");
    });

  document.querySelectorAll(".new-comments-box div").forEach((element) => {
    element.style.background = themeColor;
    element.style.color = whiteText;
  });

  document.querySelectorAll(".prettyprint .lit").forEach((element) => {
    element.style.color = green1;
  });

  document.querySelectorAll("code.tt").forEach((element) => {
    element.style.background = themeColor3;
    element.style.borderColor = red1;
    element.style.color = red1;
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
    element.querySelectorAll(".bell-details__no-new").forEach((element) => {
      element.style.setProperty("color", lightText);
    });
  });

  document.querySelectorAll(".ttypography").forEach((element) => {
    element.style.setProperty("color", lightText, "important");
  });

  const optionDOM = () => {
    document.querySelectorAll("option, select")?.forEach((element) => {
      element.style.setProperty("color", lightText);
      element.style.setProperty("fontSize", "13px");
      element.style.setProperty("color", lightText, "important");
      element.style.setProperty("background", themeColor2, "important");
    });
  };

  document.querySelectorAll(".search, .filter input").forEach((element) => {
    element.style.background = `${themeColor2} url('${searchIcon}') 2px 2px no-repeat`;
    element.style.backgroundSize = "15px";
    element.style.fontSize = "14px";
    element.style.color = lightText;
    element.style.border = `1px solid ${lightText}`;
  });
  document
    .querySelectorAll(
      `[name="minDifficulty"], [name="maxDifficulty"], .handleBox.ac_input, ._CatalogViewFrame_filter`
    )
    .forEach((element) => {
      element.style.background = themeColor2;
      element.style.fontSize = "14px";
      element.style.color = lightText;
      element.style.border = `1px solid ${lightText}`;
      element.style.borderRadius = "2px";
    });

  optionDOM();
  document.querySelectorAll("form#locationSelect").forEach((element) => {
    element.style.fontSize = "13px";
    element.style.color = lightText;
    optionDOM();
  });
  document.querySelectorAll(".verdict-rejected")?.forEach((element) => {
    element.style.color = blueColor2;
  });

  const handleProfileRating = (element, i) => {
    if (!i) {
      element.querySelectorAll("span").forEach((element) => {
        element.style.background = lightText;
        element.style.padding = "2px";
        element.style.borderRadius = "2px";
        element.style.color = themeColor;
      });
    } else if (i == 1) {
      element.querySelectorAll("span").forEach((element) => {
        element.style.color = lightText;
      });
    }
  };
  document
    .querySelectorAll(".propertyLinks li")
    .forEach((element, i) => handleProfileRating(element, i));
  document.querySelectorAll(".info").forEach((element) => {
    element
      .querySelectorAll("ul li")
      .forEach((element, i) => handleProfileRating(element, i));
  });

  document.querySelectorAll(".prettyprint.prettyprinted").forEach((element) => {
    element.querySelectorAll("span").forEach((element) => {
      if (element.classList.contains("typ"))
        element.style.setProperty("color", purpel1);
      else if (element.classList.contains("pln"))
        element.style.setProperty("color", lightText);
      else if (element.classList.contains("str"))
        element.style.setProperty("color", green1);
      else if (element.classList.contains("kwd"))
        element.style.setProperty("color", blueColor1);
      else if (element.classList.contains("pun"))
        element.style.setProperty("color", warningColor);
    });
    element.style.color = lightText;
  });

  document.querySelectorAll(".bordertable tr").forEach((item) => {
    item.style.color = lightText;
  });

  document.querySelectorAll(".page-index.active").forEach((element) => {
    element.style.background = themeColor2;
    element.style.borderColor = themeColor2;
  });

  const handleNonDecorated = (element) => {
    element.querySelectorAll("img").forEach((element, i) => {
      element.style.display = "inline-block";
      element.style.flexGrow = "0";
      element.style.flexShrink = "0";
      element.style.objectFit = "contain";
      i && (element.src = sortIcon);

      if (i) {
        if (element.title.toLocaleLowerCase().includes("asc")) {
          element.src = descIcon;
          element.style.width = "10px";
        } else if (element.title.toLocaleLowerCase().includes("desc")) {
          element.src = ascIcon;
          element.style.width = "10px";
        }
      }
    });
  };
  document.querySelectorAll(".non-decorated").forEach((element) => {
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.alignItem = "center";
    element.style.gap = "10px";
    handleNonDecorated(element);
    if (element.title == "Difficulty") {
      element.addEventListener("click", () => handleNonDecorated(element));
    } else {
      element.addEventListener("click", () => handleNonDecorated(element));
    }
  });

  document.querySelectorAll(".userbox .badge").forEach((element) => {
    element.style.paddingBottom = "15px";
  });

  document.querySelectorAll(".options .opt").forEach((element) => {
    element.style.setProperty("background", themeColor2, "important");
    element.style.color = lightText;
    element.addEventListener("mouseenter", (e) => {
      element.style.setProperty("background", themeColor, "important");
    });
    element.addEventListener("mouseleave", (e) => {
      element.style.setProperty("background", themeColor2, "important");
    });
  });

  document.querySelectorAll("#filterSubstring").forEach((element) => {
    element.style.background = themeColor2;
    element.style.color = lightText;
    element.style.border = `1px solid ${lightText}`;
    element.style.fontSize = "14px";
  });

  document.querySelectorAll(".CaptionCont.SelectBox").forEach((element) => {
    element.style.background = themeColor2;
    element.style.color = lightText;

    element.querySelectorAll("i").forEach((element) => {
      element.style.background = `url('${ascIcon}')`;
      element.style.setProperty(
        "background",
        `url('${ascIcon}') no-repeat`,
        "important"
      );
      element.style.setProperty("background-size", `10px`, "important");
      element.style.setProperty("transform", "translateY(25%)", "important");
    });
  });

  document
    .querySelectorAll(".field-name._SidebarSettingsPage_field-name")
    .forEach((element) => {
      element.style.color = lightText;
    });

  /*==========================================================
  ========================= Input box animation ==================
  ========================================================*/
  const inputStyle = (element) => {
    element.style.background = themeColor2;
    element.style.setProperty("background", themeColor2, "important");
    element.style.color = lightText;
    element.style.setProperty("color", lightText, "important");
    element.style.fontSize = "14px";
    element.style.border = `1px solid ${whiteText}`;
    element.style.borderRadius = "4px";
    element.style.resize = "vertical";
  };
  document.querySelectorAll("input, textarea").forEach((element) => {
    if (
      element.type === "password" ||
      element.type === "email" ||
      element.name === "password" ||
      element.name === "email" ||
      element.name === "firstName" ||
      element.name === "lastName" ||
      element.name === "handleOrEmail" ||
      element.name === "submittedProblemCode" ||
      element.name === "judgedTestCount" ||
      element.name === "title" ||
      element.name === "content" ||
      element.name === "comment" ||
      element.name === "replyContent" ||
      element.name === "handle" ||
      element.name === "newKeyName" ||
      element.name === "englishName" ||
      element.name === "englishDescription" ||
      element.name === "websiteUrl" ||
      element.name === "input" ||
      element.name === "output" ||
      element.name === "startDay" ||
      element.name === "startTime"
    ) {
      inputStyle(element);
    }
  });
  document.querySelectorAll("select, .ac_input").forEach((element) => {
    inputStyle(element);
    element.style.display = "inline-block";
  });

  document.querySelectorAll(".smaller.add-tags-row").forEach((element) => {
    element.addEventListener("click", (e) => {
      document.querySelectorAll(".ac_input").forEach((element) => {
        inputStyle(element);
        element.style.display = "inline-block";
      });
    });
  });

  /*==========================================================
  ========================= Let's talk ==================
  ========================================================*/
  document.querySelectorAll(".talk-text a div").forEach((element) => {
    element.style.color = lightText;
    element.style.background = themeColor;
  });
  document.querySelectorAll(".wysiwyg iframe").forEach((element) => {
    element.style.background = themeColor2;
    element.style.color = lightText;
    element.contentDocument.body.style.color = lightText;
    element.contentDocument.body.style.letterSpacing = "1px";
  });

  /*==========================================================
  ========================= Navbar animation ==================
  ========================================================*/
  document.querySelectorAll("textarea#registrationTerms").forEach((element) => {
    element.style.background = themeColor2;
    element.style.color = whiteText;
    element.style.fontSize = "14px";
    element.style.lineHeight = 1.5;
    element.style.resize = "vertical";
  });

  /*==========================================================
  ========================= Catalog time ==================
  ========================================================*/
  document
    .querySelectorAll("._CatalogViewFrame_choose-time")
    .forEach((element) => {
      element.style.background = themeColor;
      element.querySelectorAll("li").forEach((element) => {
        element.style.background = themeColor;
        element.addEventListener("mouseover", () => {
          element.style.background = themeColor2;
        });
        element.addEventListener("mouseleave", () => {
          element.style.background = themeColor;
        });
      });
    });

  document
    .querySelectorAll(".status-filter-form-part label")
    .forEach((element) => {
      element.style.paddingBottom = "5px";
      element.style.display = "inline-block";
    });

  document.querySelectorAll(".verdict-accepted").forEach((element) => {
    element.style.color = green1;
  });
  document
    .querySelectorAll(".verdict-rejected, .verdict-unsuccessful-challenge")
    .forEach((element) => {
      element.style.color = blueColor1;
    });

  document.addEventListener("load", (e) => {
    document
      .querySelectorAll(".mrow")
      .forEach((element) => (element.style.color = "white"));
  });

  const styleElement = document.createElement("style");
  styleElement.innerHTML = `
   #facebox .content {
    background: ${themeColor};
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    box-sizing: border-box
  }
  .unsuccessfulChallengeCount{
    color: ${lightText} !important;
  }
  .successfulChallengeCount{
    color: ${green1} !important;
  }
  .cell-rejected{
    color: ${blueColor1} !important;
  }
  .mrow, .likeCount, .likeState.icon-thumbs-up{
    color: ${lightText};
  }
  .spoiler-content{
    background: ${themeColor};
    color: ${lightText} !important;
  }
  .spoiler-content .ttypography p{
    color: ${lightText} !important;
  }
  .spoiler .spoiler-content a{
    color: ${blueColor1} !important;
  }
  .ace_layer.ace_print-margin-layer{
    background: ${themeColor2};
  }
  .ace_keyword, .ace_storage.ace_type{
    color: ${ace_keyword_color} !important;
  }
  .ace_operator{
    color: ${"#6c757d"} !important;
  }
  .ace_constant.ace_other{
    color: ${"#dee2e6"} !important;
  }
  .ace_string, .ace_numeric {
    color: ${"#0496ff"} !important;
  }
  .ace_comment {
    color: ${"#bcb8b1"} !important;
  }
  .ace_operator {
    color: ${"#eae2b7"} !important;
  }
  .ace_function {
    color: ${"#8338ec"} !important;
  }
  .ace-chrome .ace_marker-layer .ace_selection {
    background: ${themeColor} !important;
  }
  .com{
    color: ${red1};
  }
  .verdict_type.welldone{
    color: ${green1} !important;
  }
  .verdict_type.error{
    color: ${red1} !important;
  }
  .second-level-menu-list li a{
    border-radius: 4px;
    transition: all 0.3s;
    padding: 2px 4px;
  }
  .second-level-menu-list li a:hover, .selectedLava a, .current.selectedLava a{
    background: ${blueColor1} !important;
    color: ${whiteText} !important;
  }
  .backLava{
    display: none !important;
    background-image: none !important;
    background: ${blueColor1} !important;
  }
  .menu-list li.current{
    border-color: ${blueColor1};
  }
  `;

  document.head.appendChild(styleElement);
};

handleDarkMode();
