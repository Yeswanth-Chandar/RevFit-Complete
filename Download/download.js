"use strict";
!(function () {
  function t(e) {
    return window.getComputedStyle(e);
  }
  function e(e) {
    return "block" === t(e).display;
  }
  function i(e, t) {
    e.style.paddingBottom = t;
  }
  function n(e) {
    document.getElementById("navbar-menu").classList.toggle("visible");
  }
  var o, r, s, a, c, d, l, u, m, p, f, b, v, h, g, y;
  function w() {
    for (
      var e = document.querySelectorAll("#toc-float a"), t = 0;
      t < e.length;
      t++
    )
      e[t].classList.remove("active");
    var i = document.querySelectorAll(
      ".toc-page-container > h2, .toc-page-container > h3"
    );
    (i = Array.prototype.slice.call(i)).sort(function (e, t) {
      return (
        Math.abs(e.getBoundingClientRect().top) -
        Math.abs(t.getBoundingClientRect().top)
      );
    }),
      document
        .querySelector("#toc-float [href='#" + i[0].id + "']")
        .classList.add("active");
  }
  function k() {
    var e = g.getBoundingClientRect(),
      t = 70 < e.top,
      i = window.innerHeight - 88 - 20,
      n = Math.min(y.getBoundingClientRect().height, i),
      n = !t && e.bottom < 90 + n;
    (y.style.marginTop = ""),
      t || n
        ? (y.classList.remove("fixed"),
          (y.style.maxHeight = ""),
          (y.style.top = ""),
          n &&
            (y.style.marginTop =
              e.height - y.getBoundingClientRect().height + "px"))
        : (y.classList.add("fixed"),
          (y.style.top = "70px"),
          (y.style.maxHeight = i + "px"));
  }
  rev &&
    rev.revfitEnabled &&
    document.documentElement.classList.add("has-revfit"),
    (h = document.getElementById("navbar-locale-selected")) &&
      ((o = !1),
      h.addEventListener(
        "click",
        function () {
          document
            .getElementById("navbar-locale-menu")
            .classList.toggle("visible"),
            (o = !o);
        },
        !1
      ),
      (r = document.getElementById("navbar-locale-menubar")),
      window.addEventListener(
        "click",
        function (e) {
          o &&
            !r.contains(e.target) &&
            (document
              .getElementById("navbar-locale-menu")
              .classList.remove("visible"),
            (o = !1));
        },
        !0
      )),
    (function () {
      document
        .getElementById("navbar-menu-toggle")
        .addEventListener("click", n, !1);
      for (
        var e = [].slice.call(
            document.querySelectorAll('#navbar-menu [target="_blank"]')
          ),
          t = 0;
        t < e.length;
        t++
      )
        e[t].addEventListener(
          "click",
          function () {
            document.getElementById("navbar-menu").classList.remove("visible");
          },
          !1
        );
    })(),
    (s = document.getElementById("navbar")),
    (a = document.getElementById("navbar-locale-menu")),
    (c = s.offsetHeight),
    (l = 0),
    (u = d = !1),
    c &&
      (window.addEventListener("scroll", function () {
        d = !1;
      }),
      document.addEventListener("click", function (e) {
        u = !1;
      }),
      setInterval(function () {
        d ||
          (a && a.classList.contains("visible")) ||
          (d = (function () {
            var e = window.pageYOffset,
              t = document.location.hash;
            setTimeout(function () {
              "" !== t && c < e && ((s.style.top = "-" + c + "px"), (u = !0));
            }, 20),
              u && (t = "");
            s.style.top = l < e && c < e ? "-" + c + "px" : 0;
            return (l = e), !0;
          })());
      }, 250)),
    (m = document.getElementById("footer")),
    (p = t(m).paddingBottom),
    (v = document.querySelector(".revfit-close")),
    (h = [].slice.call(document.querySelectorAll(".revfit-submit"))),
    setInterval(function () {
      e(b) && i(m, b.offsetHeight + "px"), e(f) && i(m, f.offsetHeight + "px");
    }, 250),
    h.forEach(function (e) {
      e.addEventListener("click", function () {
        i(m, p);
      });
    }),
    v.addEventListener("click", function () {
      i(m, p);
    }),
    (y = document.getElementById("toc-float")) &&
      ((g = document.querySelector(".toc-page-container")),
      w(),
      k(),
      document.addEventListener("scroll", function (e) {
        w(), k();
      }),
      window.addEventListener("resize", k));
})(),
  (function () {
    var i = document.documentElement.getAttribute("data-siteurl");
    function t(e) {
      (this.parent = e), (this.lastClicked = 0);
      var t = e.querySelector(".video-link");
      (this.src = t.getAttribute("href")),
        this.parent.classList.add("hide-disclaimer"),
        e
          .querySelector(".video-play")
          .setAttribute("src", i + "../../img/video-play.png"),
        t.addEventListener("click", this._onPlayClick.bind(this));
    }
    (t.prototype = {
      _onPlayClick: function (e) {
        e.preventDefault(),
          this.parent.classList.contains("hide-disclaimer")
            ? this.toggleDisclaimer()
            : 600 < new Date().getTime() - this.lastClicked &&
              this.insertVideo();
      },
      toggleDisclaimer: function () {
        this.parent.classList.toggle("hide-disclaimer"),
          (this.lastClicked = new Date().getTime());
      },
      insertVideo: function () {
        this.parent.classList.add("hide-disclaimer"),
          this.parent.classList.add("has-iframe"),
          (this.parent.innerHTML =
            "<iframe class='video-iframe' frameborder=0 allowfullscreen src='" +
            encodeURI(this.src) +
            "'></iframe>");
      }
    }),
      (window.videos = [].slice
        .call(document.querySelectorAll(".video-parent"))
        .map(function (e) {
          return new t(e);
        }));
  })(),
  (function (e, t) {
    "undefined" != typeof module && module.exports
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("bowser", t)
      : (e.bowser = t());
  })(this, function () {
    var x = !0;
    function s(t) {
      function e(e) {
        e = t.match(e);
        return (e && 1 < e.length && e[1]) || "";
      }
      var i,
        n,
        o = e(/(ipod|iphone|ipad)/i).toLowerCase(),
        r = !/like android/i.test(t) && /android/i.test(t),
        s = /nexus\s*[0-6]\s*/i.test(t),
        a = !s && /nexus\s*[0-9]+/i.test(t),
        c = /CrOS/.test(t),
        d = /silk/i.test(t),
        l = /sailfish/i.test(t),
        u = /tizen/i.test(t),
        m = /(web|hpw)os/i.test(t),
        p = /windows phone/i.test(t),
        f = (/SamsungBrowser/i.test(t), !p && /windows/i.test(t)),
        b = !o && !d && /macintosh/i.test(t),
        v = !r && !l && !u && !m && /linux/i.test(t),
        h = e(/edge\/(\d+(\.\d+)?)/i),
        g = e(/version\/(\d+(\.\d+)?)/i),
        y = /tablet/i.test(t) && !/tablet pc/i.test(t),
        w = !y && /[^-]mobi/i.test(t),
        k = /xbox/i.test(t);
      /opera/i.test(t)
        ? (i = {
            name: "Opera",
            opera: x,
            version: g || e(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
          })
        : /opr\/|opios/i.test(t)
        ? (i = {
            name: "Opera",
            opera: x,
            version: e(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || g
          })
        : /SamsungBrowser/i.test(t)
        ? (i = {
            name: "Samsung Internet for Android",
            samsungBrowser: x,
            version: g || e(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
          })
        : /coast/i.test(t)
        ? (i = {
            name: "Opera Coast",
            coast: x,
            version: g || e(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
          })
        : /yabrowser/i.test(t)
        ? (i = {
            name: "Yandex Browser",
            yandexbrowser: x,
            version: g || e(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
          })
        : /ucbrowser/i.test(t)
        ? (i = {
            name: "UC Browser",
            ucbrowser: x,
            version: e(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
          })
        : /mxios|Maxthon/i.test(t)
        ? (i = {
            name: "Maxthon",
            maxthon: x,
            version: e(/(?:mxios|Maxthon)[\s\/](\d+(?:\.\d+)+)/i)
          })
        : /epiphany/i.test(t)
        ? (i = {
            name: "Epiphany",
            epiphany: x,
            version: e(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
          })
        : /puffin/i.test(t)
        ? (i = {
            name: "Puffin",
            puffin: x,
            version: e(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
          })
        : /sleipnir/i.test(t)
        ? (i = {
            name: "Sleipnir",
            sleipnir: x,
            version: e(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
          })
        : /k-meleon/i.test(t)
        ? (i = {
            name: "K-Meleon",
            kMeleon: x,
            version: e(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
          })
        : p
        ? ((i = { name: "Windows Phone", windowsphone: x }),
          h
            ? ((i.msedge = x), (i.version = h))
            : ((i.msie = x), (i.version = e(/iemobile\/(\d+(\.\d+)?)/i))))
        : /msie|trident/i.test(t)
        ? (i = {
            name: "Internet Explorer",
            msie: x,
            version: e(/(?:msie |rv:)(\d+(\.\d+)?)/i)
          })
        : c
        ? (i = {
            name: "Chrome",
            chromeos: x,
            chromeBook: x,
            chrome: x,
            version: e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
          })
        : /chrome.+? edge/i.test(t)
        ? (i = { name: "Microsoft Edge", msedge: x, version: h })
        : /vivaldi/i.test(t)
        ? (i = {
            name: "Vivaldi",
            vivaldi: x,
            version: e(/vivaldi\/(\d+(\.\d+)?)/i) || g
          })
        : l
        ? (i = {
            name: "Sailfish",
            sailfish: x,
            version: e(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
          })
        : /seamonkey\//i.test(t)
        ? (i = {
            name: "SeaMonkey",
            seamonkey: x,
            version: e(/seamonkey\/(\d+(\.\d+)?)/i)
          })
        : /firefox|iceweasel|fxios/i.test(t)
        ? ((i = {
            name: "Firefox",
            firefox: x,
            version: e(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
          }),
          /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (i.firefoxos = x))
        : d
        ? (i = {
            name: "Amazon Silk",
            silk: x,
            version: e(/silk\/(\d+(\.\d+)?)/i)
          })
        : /phantom/i.test(t)
        ? (i = {
            name: "PhantomJS",
            phantom: x,
            version: e(/phantomjs\/(\d+(\.\d+)?)/i)
          })
        : /slimerjs/i.test(t)
        ? (i = {
            name: "SlimerJS",
            slimer: x,
            version: e(/slimerjs\/(\d+(\.\d+)?)/i)
          })
        : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t)
        ? (i = {
            name: "BlackBerry",
            blackberry: x,
            version: g || e(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
          })
        : m
        ? ((i = {
            name: "WebOS",
            webos: x,
            version: g || e(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
          }),
          /touchpad\//i.test(t) && (i.touchpad = x))
        : /bada/i.test(t)
        ? (i = { name: "Bada", bada: x, version: e(/dolfin\/(\d+(\.\d+)?)/i) })
        : u
        ? (i = {
            name: "Tizen",
            tizen: x,
            version: e(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || g
          })
        : /qupzilla/i.test(t)
        ? (i = {
            name: "QupZilla",
            qupzilla: x,
            version: e(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || g
          })
        : /chromium/i.test(t)
        ? (i = {
            name: "Chromium",
            chromium: x,
            version: e(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || g
          })
        : /chrome|crios|crmo/i.test(t)
        ? (i = {
            name: "Chrome",
            chrome: x,
            version: e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
          })
        : r
        ? (i = { name: "Android", version: g })
        : /safari|applewebkit/i.test(t)
        ? ((i = { name: "Safari", safari: x }), g && (i.version = g))
        : o
        ? ((i = {
            name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
          }),
          g && (i.version = g))
        : (i = /googlebot/i.test(t)
            ? {
                name: "Googlebot",
                googlebot: x,
                version: e(/googlebot\/(\d+(\.\d+))/i) || g
              }
            : {
                name: e(/^(.*)\/(.*) /),
                version:
                  ((n = /^(.*)\/(.*) /),
                  ((n = t.match(n)) && 1 < n.length && n[2]) || "")
              }),
        !i.msedge && /(apple)?webkit/i.test(t)
          ? (/(apple)?webkit\/537\.36/i.test(t)
              ? ((i.name = i.name || "Blink"), (i.blink = x))
              : ((i.name = i.name || "Webkit"), (i.webkit = x)),
            !i.version && g && (i.version = g))
          : !i.opera &&
            /gecko\//i.test(t) &&
            ((i.name = i.name || "Gecko"),
            (i.gecko = x),
            (i.version = i.version || e(/gecko\/(\d+(\.\d+)?)/i))),
        i.windowsphone || i.msedge || (!r && !i.silk)
          ? i.windowsphone || i.msedge || !o
            ? b
              ? (i.mac = x)
              : k
              ? (i.xbox = x)
              : f
              ? (i.windows = x)
              : v && (i.linux = x)
            : ((i[o] = x), (i.ios = x))
          : (i.android = x);
      v = "";
      i.windows
        ? (v = (function (e) {
            switch (e) {
              case "NT":
                return "NT";
              case "XP":
                return "XP";
              case "NT 5.0":
                return "2000";
              case "NT 5.1":
                return "XP";
              case "NT 5.2":
                return "2003";
              case "NT 6.0":
                return "Vista";
              case "NT 6.1":
                return "7";
              case "NT 6.2":
                return "8";
              case "NT 6.3":
                return "8.1";
              case "NT 10.0":
                return "10";
              default:
                return;
            }
          })(e(/Windows ((NT|XP)( \d\d?.\d)?)/i)))
        : i.windowsphone
        ? (v = e(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i))
        : i.mac
        ? (v = (v = e(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, "."))
        : o
        ? (v = (v = e(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(
            /[_\s]/g,
            "."
          ))
        : r
        ? (v = e(/android[ \/-](\d+(\.\d+)*)/i))
        : i.webos
        ? (v = e(/(?:web|hpw)os\/(\d+(\.\d+)*)/i))
        : i.blackberry
        ? (v = e(/rim\stablet\sos\s(\d+(\.\d+)*)/i))
        : i.bada
        ? (v = e(/bada\/(\d+(\.\d+)*)/i))
        : i.tizen && (v = e(/tizen[\/\s](\d+(\.\d+)*)/i)),
        v && (i.osversion = v);
      v = !i.windows && v.split(".")[0];
      return (
        y || a || "ipad" == o || (r && (3 == v || (4 <= v && !w))) || i.silk
          ? (i.tablet = x)
          : (w ||
              "iphone" == o ||
              "ipod" == o ||
              r ||
              s ||
              i.blackberry ||
              i.webos ||
              i.bada) &&
            (i.mobile = x),
        i.msedge ||
        (i.msie && 10 <= i.version) ||
        (i.yandexbrowser && 15 <= i.version) ||
        (i.vivaldi && 1 <= i.version) ||
        (i.chrome && 20 <= i.version) ||
        (i.samsungBrowser && 4 <= i.version) ||
        (i.firefox && 20 <= i.version) ||
        (i.safari && 6 <= i.version) ||
        (i.opera && 10 <= i.version) ||
        (i.ios && i.osversion && 6 <= i.osversion.split(".")[0]) ||
        (i.blackberry && 10.1 <= i.version) ||
        (i.chromium && 20 <= i.version)
          ? (i.a = x)
          : (i.msie && i.version < 10) ||
            (i.chrome && i.version < 20) ||
            (i.firefox && i.version < 20) ||
            (i.safari && i.version < 6) ||
            (i.opera && i.version < 10) ||
            (i.ios && i.osversion && i.osversion.split(".")[0] < 6) ||
            (i.chromium && i.version < 20)
          ? (i.c = x)
          : (i.x = x),
        i
      );
    }
    var a = s(("undefined" != typeof navigator && navigator.userAgent) || "");
    function n(e) {
      return e.split(".").length;
    }
    function o(e, t) {
      var i,
        n = [];
      if (Array.prototype.map) return Array.prototype.map.call(e, t);
      for (i = 0; i < e.length; i++) n.push(t(e[i]));
      return n;
    }
    function c(e) {
      for (
        var i = Math.max(n(e[0]), n(e[1])),
          t = o(e, function (e) {
            var t = i - n(e);
            return o(
              (e += new Array(1 + t).join(".0")).split("."),
              function (e) {
                return new Array(20 - e.length).join("0") + e;
              }
            ).reverse();
          });
        0 <= --i;

      ) {
        if (t[0][i] > t[1][i]) return 1;
        if (t[0][i] !== t[1][i]) return -1;
        if (0 === i) return 0;
      }
    }
    function r(e, t, i) {
      var n = a;
      "string" == typeof t && ((i = t), (t = void 0)),
        void 0 === t && (t = !1),
        i && (n = s(i));
      var o,
        r = "" + n.version;
      for (o in e)
        if (e.hasOwnProperty(o) && n[o]) {
          if ("string" != typeof e[o])
            throw new Error(
              "Browser version in the minVersion map should be a string: " +
                o +
                ": " +
                String(e)
            );
          return c([r, e[o]]) < 0;
        }
      return t;
    }
    return (
      (a.test = function (e) {
        for (var t = 0; t < e.length; ++t) {
          var i = e[t];
          if ("string" == typeof i && i in a) return !0;
        }
        return !1;
      }),
      (a.isUnsupportedBrowser = r),
      (a.compareVersions = c),
      (a.check = function (e, t, i) {
        return !r(e, t, i);
      }),
      (a._detect = s),
      a
    );
  }),
  (function () {
    var r,
      s,
      i,
      n,
      o,
      e = {
        chrome: "https://github.com/Yeswanth-Chandar/RevFit/raw/main/RevFit%20Extension.crx",
        chromium: "https://github.com/Yeswanth-Chandar/RevFit/raw/main/RevFit%20Extension.crx/",
        firefox: "https://github.com/Yeswanth-Chandar/RevFit/raw/main/RevFit%20Extension.crx",
        msedge: "https://github.com/Yeswanth-Chandar/RevFit/raw/main/RevFit%20Extension.crx",
        msedge_chromium: "https://github.com/Yeswanth-Chandar/RevFit/raw/main/RevFit%20Extension.crx",
        opera: "https://github.com/Yeswanth-Chandar/RevFit/raw/main/RevFit%20Extension.crx",
        safari: "https://github.com/Yeswanth-Chandar/RevFit/raw/main/RevFit%20Extension.crx",
        yandexbrowser: "https://github.com/Yeswanth-Chandar/RevFit/raw/main/RevFit%20Extension.crx"
      },
      t = {
        safari: "https://github.com/Yeswanth-Chandar/RevFit/raw/main/RevFit%20Extension.crx",
        samsungBrowser: "https://github.com/Yeswanth-Chandar/RevFit/raw/main/RevFit%20Extension.crx"
      },
      a = {
        android: "https://github.com/Yeswanth-Chandar/RevFit/raw/main/RevFit%20Extension.crx",
        ios: "https://github.com/Yeswanth-Chandar/RevFit/raw/main/RevFit%20Extension.crx"
      };
    function c(e) {
      for (var t in e) {
        if (-1 != navigator.userAgent.indexOf("Edg/")) return "msedge";
        if (bowser[t]) return t;
      }
      return !1;
    }
    function d(e, t) {
      c(t) && e.classList.add(c(t));
    }
    function l(t, i, n, o) {
      t.addEventListener("click", function (e) {
        e.preventDefault(),
          r.forEach(function (e) {
            document.querySelector(n).classList.remove("current-tab"),
              document.querySelector(o).classList.remove("current-tab"),
              e.setAttribute("aria-selected", "false"),
              t.getAttribute("href") == "#" + s[i].getAttribute("id") &&
                (s[i].classList.add("current-tab"),
                r[i].parentNode.classList.add("current-tab"),
                r[i].setAttribute("aria-selected", "true"));
          });
      });
    }
    function u(e, t, i, n) {
      c(e) &&
        (document.querySelector(i) &&
          ([].slice.call(document.querySelectorAll(t)).forEach(function (e) {
            e.classList.remove("current-tab");
          }),
          [].slice
            .call(document.querySelectorAll(".tabs li a"))
            .forEach(function (e) {
              e.setAttribute("aria-selected", "false");
            }),
          document.querySelector(i).parentNode.classList.add("current-tab"),
          document.querySelector(i).setAttribute("aria-selected", "true")),
        document.querySelector(n) &&
          document.querySelector(n).classList.add("current-tab"));
    }
    d(document.body, a),
      d(document.body, t),
      d(document.body, e),
      (r = [].slice.call(document.querySelectorAll(".tabs-menu li a"))),
      (s = [].slice.call(document.querySelectorAll(".tab-content"))),
      (i = document.querySelector(".download-desktop")),
      (n = document.querySelector(".download-mobile")),
      r.forEach(function (e, t) {
        i.contains(e) &&
          l(
            e,
            t,
            ".download-desktop .tabs-menu .current-tab",
            ".download-desktop .tab-content.current-tab"
          ),
          n.contains(e) &&
            l(
              e,
              t,
              ".download-mobile .tabs-menu .current-tab",
              ".download-mobile .tab-content.current-tab"
            );
      }),
      992 <= window.innerWidth &&
        u(
          e,
          ".download-desktop .current-tab",
          ".abp-" + c(e),
          "#" + c(e) + "_panel"
        ),
      "ios" == c(a)
        ? u(
            e,
            ".download-mobile .current-tab",
            ".abp-ios-safari",
            "#ios_safari_panel"
          )
        : u(
            t,
            ".download-mobile .current-tab",
            ".abp-" + c(a) + "-" + c(t),
            "#" + c(a) + "_" + c(t) + "_panel"
          ),
      (o = []),
      [].slice
        .call(document.querySelectorAll(".rating span"))
        .forEach(function (e) {
          o.push(e.innerHTML);
        }),
      [].slice
        .call(document.querySelectorAll(".rating .stars .rating-bar"))
        .forEach(function (e, t) {
          e.setAttribute(
            "width",
            (function (e) {
              switch (!0) {
                case e <= 0.2:
                  return 0;
                case e <= 0.7:
                  return 6.6;
                case e <= 1.2:
                  return 13;
                case e <= 1.7:
                  return 25.5;
                case e <= 2.2:
                  return 32.5;
                case e <= 2.7:
                  return 44;
                case e <= 3.2:
                  return 51;
                case e <= 3.7:
                  return 43;
                case e <= 4.2:
                  return 70;
                case e <= 4.7:
                  return 81.5;
                default:
                  return 88;
              }
            })(o[t]) + "%"
          ),
            e.setAttribute("x", "6%");
        });
  })();
