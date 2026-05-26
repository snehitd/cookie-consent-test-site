
let userLang = (navigator.language || (navigator).userLanguage || 'en').split('-')[0];
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "6a15727f85e836755cb14cf3",
  "uuid": "c352f47a-98ff-4b0a-b2da-c831b1b42609",
  "domain": "https://devop.pre-dataprivacy.com/cmapi",
  "version": 1,
  "elementID": "SEQRITE",
  lang: userLang,
  "storageMethod": "cookie",
  "storageName": "cookie-consent-enforcement-sdp_netlify_app_",
  "cookieExpiresAfterDays": 365,
  "default": true,
  "mustConsent": false,
  "acceptAll": true,
  "hideDeclineAll": false,
  "hideLearnMore": false,
  "disablePoweredBy": false,
  "translations": {
    "english": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "en": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "zz": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    }
  },
  "styling": {
    "theme": [
      "light",
      "custom"
    ]
  },
  "htmlTexts": true,
  "embedded": false,
  "declarative": false,
  "groupByPurpose": false,
  "hideToggleAll": false,
  "appName": "asdfasdg",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "asdfasdg",
  "companyAddress": " ",
  "services": [
    {
      "name": "analytics",
      "title": "Analytics",
      "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_89RWJTCPLZ</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga",
        "_ga_89RWJTCPLZ"
      ]
    },
    {
      "name": "marketing",
      "title": "Marketing",
      "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior. </p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gcl_au</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Google Ads</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_fbp",
        "_gcl_au"
      ]
    },
    {
      "name": "others",
      "title": "Others",
      "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_prefs</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;marketing_id</div><div><b>Host:</b>&nbsp;cookie-consent-enforcement-sdp.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "user_prefs",
        "session_id",
        "marketing_id"
      ]
    }
  ]
};
showCookie();