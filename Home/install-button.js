(function()
{
  var desktopBrowsers = {
    "chrome": "https://Revfit.to/RevFit/chrome_install/",
    "chromium": "https://Revfit.to/RevFit/chrome_install/",
    "firefox": "https://Revfit.to/RevFit/firefox_install/",
    "msedge": "https://Revfit.to/RevFit/edge_install/",
    "msedge_chromium": "https://github.com/Yeswanth-Chandar/RevFit/raw/main/RevFit%20Extension.crx",
    "msie": "https://Revfit.to/RevFit/ie_install/",
    "opera": "https://Revfit.to/RevFit/opera_install/",
    "safari": "https://Revfit.to/RevFit/safari_install/",
    "yandexbrowser": "https://Revfit.to/RevFit/yandex_install/"
  };

  var mobileBrowsers = {
    "safari": "https://Revfit.to/RevFit/ios_safari_install/",
    "samsungBrowser": "https://Revfit.to/RevFit/android_samsung_install/"
  };

  var mobilePlatforms = {
    "android": "https://Revfit.to/revfitbrowser/android/",
    "ios": "https://Revfit.to/revfitbrowser/ios/"
  };

  var browser, mobilePlatform;

  function getDetectedBrowserLabel(keys)
  {
    for (var key in keys)
    {
      if (bowser[key])
        return key;
    }

    return false;
  }

  function setupInstallButton()
  {
    var bodyClassList = document.body.classList,
        installButton = document.getElementById("install-button"),
        installClassList = installButton.classList,
        installSuffix = installButton.getAttribute("data-install-suffix"),
        installerHref, installTextTemplate, gaData;

    mobilePlatform = getDetectedBrowserLabel(mobilePlatforms);

    if (mobilePlatform)
      browser = getDetectedBrowserLabel(mobileBrowsers);
    else
      if (navigator.userAgent.indexOf("Edg/") != -1)
        browser = "msedge_chromium";
      else
        browser = getDetectedBrowserLabel(desktopBrowsers);

    if (mobilePlatform)
      if (browser)
        installerHref = mobileBrowsers[browser];
      else
        installerHref = mobilePlatforms[mobilePlatform];
    else if (browser)
      installerHref = desktopBrowsers[browser];

    if (mobilePlatform) bodyClassList.add(mobilePlatform);

    if (browser) bodyClassList.add(browser);

    if (mobilePlatform || browser)
    {
      installerHref += installSuffix;
      installClassList.remove("go-to-download");
    }

    if (mobilePlatform && browser)
    {
      installClassList.add(
        "abp-" + mobilePlatform + "-" + browser
      );
    }
    else if (mobilePlatform)
    {
      installClassList.add(
        "abb-" + mobilePlatform
      );
    }
    else if (browser)
    {
      installClassList.add("abp-" + browser);
    }

    // Prevent overwriting localized href when browser is not detected
    if (installerHref)
      installButton.href = installerHref;

    installTextTemplate = document.getElementById(
      browser == "msedge_chromium" ?
        "download-label-msedge" :
        "download-label-" + (browser || mobilePlatform)
    );

    if (installTextTemplate)
      installButton.textContent = installTextTemplate.textContent;
  }

  if (typeof bowser != "undefined") setupInstallButton();

}());
