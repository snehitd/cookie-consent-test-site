
let userLang = (navigator.language || (navigator).userLanguage || 'en').split('-')[0];
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "6a044db288710940a9885de6",
  "uuid": "158a05aa-511f-4e7d-8805-ef824166ba65",
  "domain": "https://perf.pre-dataprivacy.com/cmapi",
  "version": 1,
  "elementID": "SEQRITE",
  lang: userLang,
  "storageMethod": "cookie",
  "storageName": "https://cookie-consent-enforcement-sdpdev.netlify.app/",
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
      "functional": {
        "title": "Functional",
        "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "<p>These cookies remember user preferences, such as language, currency, and theme settings, to provide a tailored browsing experience that aligns with individual needs.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "<p>Security cookies help protect user data by enabling authentication, fraud prevention, and secure browsing. They ensure that sensitive information, such as login credentials, is transmitted safely over encrypted connections.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
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
      "functional": {
        "title": "Functional",
        "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "<p>These cookies remember user preferences, such as language, currency, and theme settings, to provide a tailored browsing experience that aligns with individual needs.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "<p>Security cookies help protect user data by enabling authentication, fraud prevention, and secure browsing. They ensure that sensitive information, such as login credentials, is transmitted safely over encrypted connections.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
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
      "functional": {
        "title": "Functional",
        "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "<p>These cookies remember user preferences, such as language, currency, and theme settings, to provide a tailored browsing experience that aligns with individual needs.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "<p>Security cookies help protect user data by enabling authentication, fraud prevention, and secure browsing. They ensure that sensitive information, such as login credentials, is transmitted safely over encrypted connections.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ks": {
      "acceptAll": "سٲری کر قبوٗل۔",
      "accept": "قبول کرن۔",
      "decline": "سٲری کریو رد۔",
      "acceptSelected": "منتخب کر قبول۔",
      "ok": "سٲری کر قبوٗل۔",
      "consentNotice": {
        "description": "أسۍ چھ تہنٛز راز دٲری ہنٛد احترام کران أسۍ چھ ضروری سایٹہ ہنٛز فعالیتس سۭتۍ مارکیٹنگ، پرسنلائزیشن تہٕ تجزیاتن فعال کرنہٕ خٲطرٕ کوکیز ذخیرٕ کران۔ \"تمام قبول کرو\" کلک کرتھ، تہۍ چھو سانۍ کوکیز استعمال کرنہٕ خٲطرٕ رضامند۔ تہۍ ہیٚکو کنہ تہ وقتہٕ پنٕنۍ سیٹنگہٕ تبدیل کٔرتھ۔ کوکی پالیسی۔",
        "learnMore": "کسٹمائز کر۔",
        "changeDescription": " "
      },
      "save": "قبول کرن۔",
      "consentModal": {
        "title": "رضامندی ہنز ترجیحات کر کسٹمائز",
        "description": "أسۍ چھ کوکیز استعمال کران تۄہہ پیجن درمیان کامیٲبی سان نیویگیٹ کرنس منٛز مدد کرنہٕ خٲطرٕ، تہنٛز ترجیحات ذخیرٕ کرنہٕ خٲطرٕ، تہٕ عام طور پٲٹھۍ ویب سایٹہ ہنٛد تہنٛد تجربہٕ بہتر بناونہٕ خٲطرٕ۔ وونہ گو٘، أسۍ چھ تہنٛد راز دٲری ہنٛد حق تسلیم کران تہٕ امہ کنہ ہیٚکو تہۍ کیٚنٛہہ قٕسمٕک کوکیزن اجازت نہٕ دنک انتخاب کٔرتھ۔ زیادٕ زانٛکٲری تہٕ سٲنۍ ڈیفالٹ سیٹنگہٕ بدلاونہٕ خٲطرٕ کٔرو مختٔلف زمرٕ کین عنوانن پؠٹھ کلک۔ مہربٲنی کٔرتھ کٔرو نوٹ ز کیٚنٛہہ قٕسمٕک کوکیز بلاک کرنہٕ سۭتۍ ہیٚکہ تہنٛد سایٹہ ہنٛد تجربہٕ متٲثر گژھتھ۔",
        "buttons": {
          "save": "قبول کرن۔",
          "acceptAll": "سٲری کر قبوٗل۔",
          "decline": "سٲری کریو رد۔"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "سٲری کریو رد۔",
          "title": "سٲری کریو رد۔"
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
      "functional": {
        "title": "Functional",
        "description": "أسۍ چھ یم کوکیز ویب سایٹہ پیٹھ کٲم کرنہٕ خٲطرٕ تہٕ صارف کہ تجربہٕ بہتر بناونہٕ خٲطرٕ استعمال کران۔ زانٛکٲری منٛز ہیٚکہ لاگ ان ڈیٹا، خطہٕ، زبان تہٕ بہتر مواد شٲمل ٲستھ۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "یم کوکیز چھ ویب سائٹ ٹریفک، صارفک رویہٕ، تہٕ مشغولیتک نمونن ہیند تجزیہٕ کرنس منٛز مدد کران۔ جمع کرنہٕ آمٕتۍ بصیرت چھ اسہ مواد بہتر بناون، استعمالس منٛز اضافہٕ کرن، تہٕ مجموعی سائٹچ کارکردگی بہتر بناونک اجازت دیوان۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "یم کوکیز چھ سٲنۍ تشہیری شراکت دارن ذریعہٕ ذاتی اشتہار دنہٕ تہٕ مارکیٹنگ مہمن ہنٛد اثر و رسوخچ پیمٲئش کرنہٕ خٲطرٕ استعمال یوان کرنہٕ۔ تم چھ صارفن ہنٛز دلچسپین تہٕ براؤزنگ رویس پیٹھ مبنی متعلقہ پروموشنز فراہم کرنس منٛز مدد کران۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "اتھ زمرس منٛز چھ کوکیز شأمل یم نہٕ گوڑنتھ طے شدٕ زمرن منٛز فٹ چھ آسان مگر ویب سائٹچ کنہہ فعالیتہٕ یا بہتری خاطرٕ چھ ضروری۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "یم کوکیز چھ صارفن ہنٛز ترجیحہٕ یاد تھوان، ییتھ کیٛن زن زبان، کرنسی، تہٕ تھیم سیٹنگز، اکھ موزوں براؤزنگ تجربہٕ فراہم کرنہٕ خاطرٕ یس انفرادی ضروریاتس سۭتۍ ہم آہنگ چھ آسان۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "سیکیورٹی کوکیز چھ تصدیق، دھوکہ دہی ہنٛز روک تھام، تہٕ محفوظ براؤزنگ فعال کرتھ صارفن ہنٛد ڈیٹا محفوظ تھونس منٛز مدد کران۔ تم چھ اتھ کتھۍ یقینی بناوان ز حساس معلومات، یتھ کٔنۍ لاگ ان اسناد، چھ انکرپٹڈ کنکشنن پؠٹھ بحفاظت منتقل گژھان۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ml": {
      "acceptAll": "എല്ലാം സ്വീകരിക്കുക",
      "accept": "സ്വീകരിക്കുക",
      "decline": "എല്ലാം നിരസിക്കുക",
      "acceptSelected": "തിരഞ്ഞെടുത്തവ സ്വീകരിക്കുക",
      "ok": "എല്ലാം സ്വീകരിക്കുക",
      "consentNotice": {
        "description": "നിങ്ങളുടെ സ്വകാര്യതയെ ഞങ്ങൾ മാനിക്കുന്നു, അവശ്യ സൈറ്റ് പ്രവർത്തനക്ഷമത, മാർക്കറ്റിംഗ്, വ്യക്തിഗതമാക്കൽ, വിശകലനം എന്നിവ പ്രാപ്തമാക്കുന്നതിന് ഞങ്ങൾ കുക്കികൾ സംഭരിക്കുന്നു. \"എല്ലാം സ്വീകരിക്കുക\" ക്ലിക്കുചെയ്യുന്നതിലൂടെ, ഞങ്ങളുടെ കുക്കികളുടെ ഉപയോഗത്തിന് നിങ്ങൾ സമ്മതിക്കുന്നു. നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും നിങ്ങളുടെ ക്രമീകരണങ്ങൾ മാറ്റാം. കുക്കി നയം.",
        "learnMore": "ഇഷ്ടാനുസൃതമാക്കുക",
        "changeDescription": " "
      },
      "save": "സ്വീകരിക്കുക",
      "consentModal": {
        "title": "സമ്മത മുൻഗണനകൾ ഇഷ്ടാനുസൃതമാക്കുക",
        "description": "പേജുകൾക്കിടയിൽ കാര്യക്ഷമമായി നാവിഗേറ്റ് ചെയ്യാനും നിങ്ങളുടെ മുൻഗണനകൾ സംഭരിക്കാനും സാധാരണയായി ഒരു വെബ്സൈറ്റിന്റെ അനുഭവം മെച്ചപ്പെടുത്താനും നിങ്ങളെ സഹായിക്കുന്നതിന് ഞങ്ങൾ കുക്കികൾ ഉപയോഗിക്കുന്നു. എന്നിരുന്നാലും, സ്വകാര്യതയ്ക്കുള്ള നിങ്ങളുടെ അവകാശം ഞങ്ങൾ അംഗീകരിക്കുന്നു, അതിനാൽ ചിലതരം കുക്കികൾ അനുവദിക്കരുതെന്ന് നിങ്ങൾക്ക് തിരഞ്ഞെടുക്കാം. കൂടുതൽ അറിയാനും ഞങ്ങളുടെ സ്ഥിരസ്ഥിതി ക്രമീകരണങ്ങൾ മാറ്റാനും വ്യത്യസ്ത വിഭാഗ തലക്കെട്ടുകളിൽ ക്ലിക്കുചെയ്യുക. ചില തരത്തിലുള്ള കുക്കികൾ തടയുന്നത് സൈറ്റിലെ നിങ്ങളുടെ അനുഭവത്തെ ബാധിച്ചേക്കാമെന്നത് ശ്രദ്ധിക്കുക.",
        "buttons": {
          "save": "സ്വീകരിക്കുക",
          "acceptAll": "എല്ലാം സ്വീകരിക്കുക",
          "decline": "എല്ലാം നിരസിക്കുക"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "എല്ലാം നിരസിക്കുക",
          "title": "എല്ലാം നിരസിക്കുക"
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
      "functional": {
        "title": "Functional",
        "description": "വെബ്സൈറ്റിന്റെ പ്രവർത്തനം മെച്ചപ്പെടുത്തുന്നതിനും ഉപയോക്തൃ അനുഭവം മെച്ചപ്പെടുത്തുന്നതിനും ഞങ്ങൾ ഈ കുക്കികൾ ഉപയോഗിക്കുന്നു. വിവരങ്ങൾക്ക് ലോഗിൻ ഡാറ്റ, പ്രദേശം, ഭാഷ, മെച്ചപ്പെടുത്തിയ ഉള്ളടക്കം എന്നിവ ഉൾപ്പെടാം.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "വെബ്സൈറ്റ് ട്രാഫിക്, ഉപയോക്തൃ പെരുമാറ്റം, ഇടപഴകൽ രീതികൾ എന്നിവ വിശകലനം ചെയ്യാൻ ഈ കുക്കികൾ ഞങ്ങളെ സഹായിക്കുന്നു. ശേഖരിച്ച ഉൾക്കാഴ്ചകൾ ഉള്ളടക്കം ഒപ്റ്റിമൈസ് ചെയ്യാനും ഉപയോഗക്ഷമത വർദ്ധിപ്പിക്കാനും മൊത്തത്തിലുള്ള സൈറ്റ് പ്രകടനം മെച്ചപ്പെടുത്താനും ഞങ്ങളെ അനുവദിക്കുന്നു.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "വ്യക്തിഗതമാക്കിയ പരസ്യങ്ങൾ നൽകുന്നതിനും മാർക്കറ്റിംഗ് കാമ്പെയ്നുകളുടെ ഫലപ്രാപ്തി അളക്കുന്നതിനും ഞങ്ങളുടെ പരസ്യ പങ്കാളികൾ ഈ കുക്കികൾ ഉപയോഗിക്കുന്നു. ഉപയോക്തൃ താൽപ്പര്യങ്ങളും ബ്രൌസിംഗ് പെരുമാറ്റവും അടിസ്ഥാനമാക്കി പ്രസക്തമായ പ്രമോഷനുകൾ നൽകാൻ അവ സഹായിക്കുന്നു.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ഈ വിഭാഗത്തിൽ മുൻകൂട്ടി നിർവചിക്കപ്പെട്ട വിഭാഗങ്ങളുമായി പൊരുത്തപ്പെടാത്തതും എന്നാൽ ചില വെബ്സൈറ്റ് പ്രവർത്തനങ്ങൾക്കോ മെച്ചപ്പെടുത്തലുകൾക്കോ ആവശ്യമായി വന്നേക്കാവുന്ന കുക്കികൾ ഉൾപ്പെടുന്നു.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "വ്യക്തിഗത ആവശ്യങ്ങൾക്ക് അനുയോജ്യമായ ഒരു ബ്രൌസിംഗ് അനുഭവം നൽകുന്നതിന് ഭാഷ, കറൻസി, തീം ക്രമീകരണങ്ങൾ എന്നിവ പോലുള്ള ഉപയോക്തൃ മുൻഗണനകൾ ഈ കുക്കികൾ ഓർമ്മിക്കുന്നു.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "ആധികാരികത, വഞ്ചന തടയൽ, സുരക്ഷിത ബ്രൌസിംഗ് എന്നിവ പ്രാപ്തമാക്കുന്നതിലൂടെ ഉപയോക്തൃ ഡാറ്റ പരിരക്ഷിക്കാൻ സുരക്ഷാ കുക്കികൾ സഹായിക്കുന്നു. ലോഗിൻ ക്രെഡൻഷ്യലുകൾ പോലുള്ള സെൻസിറ്റീവ് വിവരങ്ങൾ എൻക്രിപ്റ്റ് ചെയ്ത കണക്ഷനുകളിലൂടെ സുരക്ഷിതമായി കൈമാറ്റം ചെയ്യപ്പെടുന്നുവെന്ന് അവർ ഉറപ്പാക്കുന്നു.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "mni": {
      "acceptAll": "ꯄꯨꯝꯅꯃꯛ ꯂꯧꯕꯤꯌꯨ",
      "accept": "ꯂꯧꯁꯤꯟꯕꯤꯌꯨ",
      "decline": "ꯄꯨꯝꯅꯃꯛ ꯂꯧꯊꯣꯛꯎ",
      "acceptSelected": "ꯈꯟꯒꯠꯂꯕ ꯑꯁꯤ ꯂꯧꯕꯤꯌꯨ",
      "ok": "ꯄꯨꯝꯅꯃꯛ ꯂꯧꯕꯤꯌꯨ",
      "consentNotice": {
        "description": "ꯑꯩꯈꯣꯏꯅ ꯅꯍꯥꯛꯀꯤ ꯂꯟꯅꯥꯏꯕꯨ ꯏꯀꯥꯏ ꯈꯨꯝꯅꯩ ꯑꯩꯈꯣꯏꯅ ꯇꯉꯥꯏꯐꯗꯕ ꯁꯥꯏꯠꯀꯤ ꯃꯊꯧ ꯇꯧꯕ ꯉꯝꯕ, ꯃꯥꯔꯀꯦꯇꯤꯡ, ꯄꯦꯁ ꯭ ꯅꯦꯜꯥꯏꯖꯦꯁꯟ ꯑꯃꯁꯨꯡ ꯑꯦꯅꯥꯂꯤꯇꯤꯛꯁ ꯇꯧꯕ ꯉꯝꯅꯕ ꯀꯨꯀꯤꯁꯤꯡ ꯊꯝꯃꯤ ꯫ \"ꯄꯨꯝꯅꯃꯛ ꯌꯥꯕꯤꯌꯨ\" ꯍꯥꯏꯕ ꯑꯗꯨꯗ ꯅꯝꯗꯨꯅ, ꯅꯍꯥꯛꯅ ꯑꯩꯈꯣꯏꯒꯤ ꯀꯨꯀꯤꯁꯤꯡ ꯁꯤꯖꯤꯟꯅꯕ ꯌꯥꯔꯦ ꯫ ꯅꯍꯥꯛꯅ ꯃꯇꯝ ꯑꯃꯍꯦꯛꯇꯗ ꯅꯍꯥꯛꯀꯤ ꯁꯦꯇꯤꯡꯁ ꯑꯗꯨ ꯍꯣꯡꯗꯣꯛꯄ ꯌꯥꯏ ꯫ ꯀꯨꯀꯤꯒꯤ ꯊꯧꯁꯤꯜ ꯫",
        "learnMore": "ꯀꯁꯇꯃꯥꯏꯖ ꯇꯧ ꯫",
        "changeDescription": " "
      },
      "save": "ꯂꯧꯁꯤꯟꯕꯤꯌꯨ",
      "consentModal": {
        "title": "ꯀꯣꯟꯁꯦꯟꯠ ꯄ ꯭ ꯔꯦꯐꯔꯦꯟꯁꯁꯤꯡ ꯀꯁ ꯭ ꯇꯥꯃꯥꯏꯖ ꯇꯧ",
        "description": "ꯑꯩꯈꯣꯏꯅ ꯀꯨꯀꯤꯁꯤꯡ ꯑꯁꯤ ꯅꯍꯥꯛꯅ ꯆꯦꯐꯣꯡꯁꯤꯡꯒꯤ ꯃꯔꯛꯇ ꯐꯖꯅ ꯆꯠꯄꯗ ꯃꯇꯦꯡ ꯄꯥꯡꯅꯕ, ꯅꯍꯥꯛꯀꯤ ꯄꯥꯝꯖꯕꯁꯤꯡ ꯊꯝꯗꯨꯅ ꯊꯝꯕ, ꯑꯃꯁꯨꯡ ꯃꯍꯧꯁꯥꯅ ꯅꯍꯥꯛꯀꯤ ꯋꯦꯕꯁꯥꯏꯠ ꯑꯃꯒꯤ ꯈꯪ-ꯍꯩꯕ ꯑꯗꯨ ꯐꯒꯠꯍꯟꯕꯗ ꯁꯤꯖꯤꯟꯅꯩ ꯫ ꯑꯗꯨꯝ ꯑꯣꯏꯅꯃꯛ, ꯑꯩꯈꯣꯏꯅ ꯅꯍꯥꯛꯀꯤ ꯂꯅꯥꯏꯒꯤ ꯑꯣꯏꯕ ꯍꯛ ꯑꯗꯨ ꯌꯥꯔꯦ ꯑꯃꯁꯨꯡ ꯃꯔꯝ ꯑꯁꯤꯅ ꯅꯍꯥꯛꯅ ꯃꯈꯜ ꯈꯔꯒꯤ ꯀꯨꯀꯤꯁꯤꯡ ꯌꯥꯍꯟꯗꯅꯕ ꯈꯟꯕ ꯌꯥꯏ ꯫ ꯍꯦꯟꯅ ꯈꯪꯗꯣꯛꯅꯕ ꯑꯃꯁꯨꯡ ꯑꯩꯈꯣꯏꯒꯤ ꯗꯤꯐꯣꯜꯠ ꯁꯦꯇꯤꯡꯁ ꯑꯗꯨ ꯍꯣꯡꯗꯣꯛꯅꯕ ꯇꯣꯉꯥꯟ-ꯇꯣꯉꯥꯟꯕ ꯀꯦꯇꯦꯒꯣꯔꯤꯒꯤ ꯍꯦꯗꯤꯡꯁꯤꯡꯗ ꯅꯝꯃꯨ ꯫ ꯆꯥꯟꯕꯤꯗꯨꯅ ꯆꯦꯛꯁꯤꯟꯕꯤꯌꯨ ꯃꯗꯨꯗꯤ ꯑꯀꯛꯅꯕ ꯃꯈꯜꯒꯤ ꯀꯨꯀꯤꯁꯤꯡ ꯊꯤꯡꯕꯅ ꯅꯍꯥꯛꯀꯤ ꯁꯥꯏꯠ ꯑꯗꯨꯒꯤ ꯈꯪꯍꯧꯗ ꯭ ꯔꯕꯗ ꯑꯀꯥꯏꯕ ꯄꯤꯕ ꯌꯥꯏ ꯫",
        "buttons": {
          "save": "ꯂꯧꯁꯤꯟꯕꯤꯌꯨ",
          "acceptAll": "ꯄꯨꯝꯅꯃꯛ ꯂꯧꯕꯤꯌꯨ",
          "decline": "ꯄꯨꯝꯅꯃꯛ ꯂꯧꯊꯣꯛꯎ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ꯄꯨꯝꯅꯃꯛ ꯂꯧꯊꯣꯛꯎ",
          "title": "ꯄꯨꯝꯅꯃꯛ ꯂꯧꯊꯣꯛꯎ"
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
      "functional": {
        "title": "Functional",
        "description": "ꯑꯩꯈꯣꯏꯅ ꯃꯁꯤꯒꯤ ꯀꯨꯀꯤꯁꯤꯡ ꯑꯁꯤ ꯋꯦꯕꯁꯥꯏꯠꯀꯤ ꯃꯊꯧ ꯇꯧꯕ ꯉꯝꯕꯒꯤ ꯆꯥꯡ ꯍꯦꯟꯒꯠꯍꯟꯅꯕ ꯑꯃꯁꯨꯡ ꯌꯨꯖꯔꯒꯤ ꯈꯪ-ꯍꯩꯕꯒꯤ ꯐꯤꯕꯝ ꯐꯒꯠꯍꯟꯅꯕ ꯁꯤꯖꯤꯟꯅꯩ ꯫ ꯑꯀꯨꯞꯄ ꯃꯔꯣꯜꯗ ꯂꯣꯒꯏꯟ ꯗꯦꯇꯥ, ꯃꯐꯝ, ꯂꯣꯟ, ꯑꯃꯁꯨꯡ ꯐꯒꯠꯍꯜꯂꯕ ꯃꯆꯥꯛ ꯌꯥꯎꯕ ꯌꯥꯏ ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ꯃꯁꯤꯒꯤ ꯀꯨꯀꯤꯁꯤꯡ ꯑꯁꯤꯅ ꯑꯩꯈꯣꯏꯗ ꯋꯦꯕꯁꯥꯏꯠꯀꯤ ꯇ ꯭ ꯔꯥꯐꯤꯛ, ꯌꯨꯖꯔꯒꯤ ꯃꯑꯣꯡ ꯃꯇꯧ, ꯑꯃꯁꯨꯡ ꯏꯡꯒꯦꯁꯟ ꯄꯦꯇꯔꯟꯁꯤꯡ ꯅꯩꯅꯕꯗ ꯃꯇꯦꯡ ꯄꯥꯡꯉꯤ ꯫ ꯈꯣꯝꯖꯤꯜꯂꯕ ꯋꯥꯈꯜꯂꯣꯟꯁꯤꯡ ꯑꯁꯤꯅ ꯑꯩꯈꯣꯏꯗ ꯀꯟꯇꯦꯟꯠ ꯑꯗꯨ ꯍꯦꯟꯅ ꯐꯕ ꯑꯣꯏꯍꯟꯕ, ꯁꯤꯖꯤꯟꯅꯕ ꯉꯝꯕꯒꯤ ꯆꯥꯡ ꯍꯦꯟꯒꯠꯍꯟꯕ, ꯑꯃꯁꯨꯡ ꯑꯄꯨꯟꯕ ꯁꯥꯏꯠꯀꯤ ꯊꯕꯛ ꯄꯥꯡꯊꯣꯛꯄ ꯑꯗꯨ ꯐꯒꯠꯍꯟꯕ ꯉꯝꯍꯜꯂꯤ ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ꯃꯁꯤꯒꯤ ꯀꯨꯀꯤꯁꯤꯡ ꯑꯁꯤ ꯑꯩꯈꯣꯏꯒꯤ ꯑꯦꯗꯚꯔꯇꯥꯏꯖꯃꯦꯟ ꯭ ꯇꯒꯤ ꯁꯔꯨꯛ ꯌꯥꯔꯤꯕꯁꯤꯡꯅ ꯂꯅꯥꯏꯒꯤ ꯑꯣꯏꯕ ꯑꯦꯗꯁꯤꯡ ꯄꯤꯅꯕ ꯑꯃꯁꯨꯡ ꯃꯥꯔꯀꯦꯇꯤꯡꯒꯤ ꯈꯣꯡꯖꯪꯁꯤꯡꯒꯤ ꯀꯥꯟꯅꯕꯒꯤ ꯆꯥꯡ ꯂꯦꯞꯊꯣꯛꯅꯕ ꯁꯤꯖꯤꯟꯅꯩ ꯫ ꯃꯈꯣꯏꯅ ꯁꯤꯖꯤꯟꯅꯔꯤꯕ ꯃꯤꯑꯣꯏ ꯑꯗꯨꯒꯤ ꯅꯨꯡꯉꯥꯏꯕ ꯑꯃꯁꯨꯡ ꯌꯦꯡꯕꯒꯤ ꯃꯑꯣꯡ-ꯃꯇꯧꯗ ꯌꯨꯝꯐꯝ ꯑꯣꯏꯕ ꯃꯔꯤ ꯂꯩꯅꯕ ꯄ ꯭ ꯔꯣꯃꯣꯁꯟꯁꯤꯡ ꯄꯤꯕꯗ ꯃꯇꯦꯡ ꯄꯥꯡꯉꯤ ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ꯃꯁꯤꯒꯤ ꯀꯦꯇꯦꯒꯣꯔꯤ ꯑꯁꯤꯗ ꯃꯃꯥꯡꯗ ꯂꯦꯞꯊꯣꯛꯂꯕ ꯀꯦꯇꯦꯒꯣꯔꯤꯁꯤꯡꯗ ꯌꯥꯎꯗꯕ ꯑꯗꯨꯕꯨ ꯑꯀꯛꯅꯕ ꯋꯦꯕꯁꯥꯏꯠꯀꯤ ꯃꯊꯧꯁꯤꯡ ꯅꯠꯇ ꯭ ꯔꯒ ꯐꯒꯠꯍꯟꯅꯕꯒꯤꯗꯃꯛ ꯃꯊꯧ ꯇꯥꯕ ꯌꯥꯕ ꯀꯨꯀꯤꯁꯤꯡ ꯌꯥꯎꯔꯤ ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "ꯃꯁꯤꯒꯤ ꯀꯨꯀꯤꯁꯤꯡ ꯑꯁꯤꯅ ꯃꯤꯑꯣꯏ ꯑꯃꯒꯤ ꯇꯉꯥꯏꯐꯗꯕꯁꯤꯡꯒ ꯃꯥꯟꯅꯕ ꯃꯑꯣꯡꯒꯤ ꯕ ꯭ ꯔꯥꯎꯖ ꯇꯧꯕꯒꯤ ꯍꯩꯁꯤꯡꯕ ꯑꯃ ꯄꯤꯅꯕ, ꯂꯣꯟ, ꯁꯦꯜ ꯑꯃꯁꯨꯡ ꯊꯤꯝ ꯁꯦꯇꯤꯡꯁꯒꯨꯝꯕ ꯌꯨꯖꯔꯒꯤ ꯄꯥꯝꯖꯕꯁꯤꯡ ꯑꯗꯨ ꯊꯝꯃꯣꯏ ꯊꯝꯃꯤ ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "ꯁꯦꯀ ꯭ ꯌꯨꯔꯤꯇꯤ ꯀꯨꯀꯤꯁꯤꯡꯅ ꯑꯣꯊꯦꯟꯇꯤꯀꯦꯁꯟ, ꯐ ꯭ ꯔꯣꯗ ꯄ ꯭ ꯔꯣꯚꯦꯟꯁꯟ, ꯑꯃꯁꯨꯡ ꯁꯦꯀ ꯭ ꯌꯨꯔ ꯕ ꯭ ꯔꯥꯎꯖꯤꯡ ꯇꯧꯕ ꯌꯥꯍꯟꯗꯨꯅ ꯌꯨꯖꯔꯒꯤ ꯗꯦꯇꯥ ꯉꯥꯛꯊꯣꯛꯄꯗ ꯃꯇꯦꯡ ꯄꯥꯡꯏ ꯫ ꯃꯈꯣꯏꯅ ꯂꯣꯒꯏꯟ ꯀ ꯭ ꯔꯦꯗꯦꯟꯁ ꯭ ꯌꯦꯜꯁꯤꯡꯒꯨꯝꯕ ꯑꯀꯨꯞꯄ ꯃꯔꯣꯜꯁꯤꯡ ꯑꯗꯨ ꯑꯦꯟꯀ ꯭ ꯔꯤꯞ ꯇꯧꯔꯕ ꯀꯣꯟꯇꯦꯛꯁꯤꯡꯒꯤ ꯈꯨꯠꯊꯥꯡꯗ ꯆꯦꯛꯁꯤꯟꯅ ꯁꯟꯗꯣꯛꯄ ꯉꯝꯍꯜꯂꯤ ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "sat": {
      "acceptAll": "ᱥᱟᱱᱟᱢ ᱜᱮ ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "accept": "ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "decline": "ᱥᱟᱱᱟᱢᱟᱜ ᱵᱟᱛᱟᱶ ᱢᱮ ᱾",
      "acceptSelected": "ᱵᱟᱪᱷᱱᱟᱣ ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "ok": "ᱥᱟᱱᱟᱢ ᱜᱮ ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "consentNotice": {
        "description": "ᱟᱢ ᱟᱢᱟᱜ ᱜᱚᱭᱱᱟᱥᱤ ᱨᱮᱭᱟᱜ ᱢᱟᱹᱱ ᱮᱢ ᱮᱫᱟ, ᱟᱢ ᱫᱚ ᱵᱮᱼᱵᱟᱹᱛᱤᱞ ᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱢᱤ ᱫᱟᱲᱮ ᱥᱟᱶ ᱥᱟᱶᱛᱮ ᱵᱟᱡᱟᱨ, ᱵᱮᱼᱵᱟᱹᱛᱤᱞ ᱟᱨ ᱚᱱᱚᱞᱤᱠᱤᱥ ᱠᱚᱨᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱠᱩᱠᱤ ᱠᱚ ᱫᱚᱦᱚ ᱮᱫᱟ ᱾ \"ᱥᱟᱱᱟᱢᱟᱜ ᱦᱟᱛᱟᱣ ᱢᱮ\" ᱨᱮ ᱠᱞᱤᱠ ᱠᱟᱛᱮ, ᱟᱢ ᱤᱧᱟᱹᱜ ᱠᱩᱠᱤᱠᱚ ᱵᱮᱶᱦᱟᱨ ᱞᱟᱹᱜᱤᱫ ᱮ ᱥᱤᱜᱤᱞ ᱞᱮᱱᱟ ᱾ ᱟᱢ ᱡᱟᱦᱟᱸ ᱚᱠᱛᱚ ᱨᱮᱦᱚᱸ ᱟᱢᱟᱜ ᱥᱮᱴᱤᱝ ᱠᱚ ᱵᱚᱱᱚᱫᱚᱞ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾ ᱠᱩᱠᱤ ᱟᱹᱨᱤ ᱾",
        "learnMore": "ᱠᱟᱥᱴᱚᱢᱟᱭᱤᱡ ᱢᱮ ᱾",
        "changeDescription": " "
      },
      "save": "ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "consentModal": {
        "title": "ᱥᱳᱯᱨᱩᱢᱟᱱᱟᱜ ᱵᱟᱪᱷᱱᱟᱣ ᱠᱚ ᱜᱚᱴᱟᱼᱵᱩᱴᱟᱹ ᱢᱮ ᱾",
        "description": "ᱟᱢ ᱫᱚ ᱯᱮᱡᱽ ᱠᱚ ᱢᱩᱫ ᱨᱮ ᱠᱟᱹᱢᱤ ᱞᱮᱠᱟᱛᱮ ᱧᱮᱞ ᱞᱟᱹᱜᱤᱫ ᱛᱮ, ᱟᱢᱟᱜ ᱵᱟᱪᱷᱱᱟᱣ ᱠᱚ ᱫᱚᱦᱚ ᱞᱟᱹᱜᱤᱫ ᱟᱨ ᱥᱟᱫᱷᱟᱨᱚᱱ ᱞᱮᱠᱟᱛᱮ ᱢᱤᱫᱴᱟᱝ ᱳᱭᱮᱵᱽᱥᱟᱭᱤᱴ ᱨᱮ ᱟᱢᱟᱜ ᱩᱯᱟᱹᱭ ᱟᱨᱦᱚᱸ ᱱᱟᱯᱟᱭ ᱞᱟᱹᱜᱤᱫ ᱛᱮ ᱟᱢ ᱠᱳᱠᱤ ᱠᱚ ᱵᱮᱣᱦᱟᱨᱼᱟ ᱾ ᱮᱱᱛᱮ ᱨᱮᱦᱚᱸ, ᱟᱢ ᱟᱢᱟᱜ ᱜᱚᱭᱟᱨᱚᱱ ᱫᱟᱲᱮᱭ ᱢᱟᱱᱟᱣ ᱟᱠᱟᱫᱟ ᱟᱨ ᱚᱱᱟᱛᱮ ᱟᱢ ᱠᱤᱪᱷᱩ ᱞᱮᱠᱟᱱ ᱠᱩᱠᱤ ᱨᱮᱭᱟᱜ ᱪᱷᱟᱹᱲ ᱵᱟᱝ ᱮᱢ ᱞᱟᱹᱜᱤᱫ ᱮ ᱵᱟᱪᱷᱱᱟᱣ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾ ᱟᱨᱦᱚᱸ ᱵᱟᱰᱟᱭ ᱞᱟᱹᱜᱤᱫ ᱟᱨ ᱟᱢᱟᱜ ᱰᱤᱯᱷᱚᱞᱴ ᱥᱮᱴᱤᱝᱥ ᱵᱚᱱᱚᱫᱚᱞ ᱞᱟᱹᱜᱤᱫ ᱟᱭᱢᱟ ᱛᱷᱚᱱᱚᱛ ᱨᱮᱭᱟᱜ ᱦᱤᱫᱤᱝ ᱨᱮ ᱠᱞᱤᱠ ᱢᱮ ᱾ ᱫᱟᱭᱟ ᱠᱟᱛᱮ ᱢᱚᱱᱮ ᱦᱩᱭᱩᱜ ᱢᱮ ᱡᱮ ᱠᱤᱪᱷᱩᱠ ᱞᱮᱠᱟᱱ ᱠᱩᱠᱤ ᱵᱚᱱᱫᱮᱡ ᱠᱚᱨᱟᱣ ᱟᱢᱟᱜ ᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱩᱯᱟᱹᱭ ᱮ ᱮᱥᱮᱨ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾",
        "buttons": {
          "save": "ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
          "acceptAll": "ᱥᱟᱱᱟᱢ ᱜᱮ ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
          "decline": "ᱥᱟᱱᱟᱢᱟᱜ ᱵᱟᱛᱟᱶ ᱢᱮ ᱾"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ᱥᱟᱱᱟᱢᱟᱜ ᱵᱟᱛᱟᱶ ᱢᱮ ᱾",
          "title": "ᱥᱟᱱᱟᱢᱟᱜ ᱵᱟᱛᱟᱶ ᱢᱮ ᱾"
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
      "functional": {
        "title": "Functional",
        "description": "ᱟᱢ ᱱᱚᱶᱟ ᱠᱩᱠᱤ ᱠᱚᱫᱚ ᱳᱭᱮᱵᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱢᱤ ᱫᱟᱲᱮᱹᱭᱟᱜᱼᱟ ᱟᱨ ᱵᱮᱣᱦᱟᱨᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱩᱯᱟᱹᱭ ᱵᱟᱹᱲᱛᱤ ᱞᱟᱹᱜᱤᱫ ᱠᱚ ᱵᱮᱣᱦᱟᱨᱼᱟ ᱾ ᱰᱚᱜᱚᱨ ᱨᱮ ᱞᱚᱜᱤᱱ ᱰᱮᱴᱟ, ᱴᱚᱴᱷᱟ, ᱯᱟᱹᱨᱥᱤ ᱟᱨ ᱵᱟᱹᱲᱛᱤ ᱠᱟᱱᱴᱮᱱᱴ ᱥᱮᱞᱮᱫ ᱦᱩᱭ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ᱱᱚᱶᱟ ᱠᱩᱠᱤ ᱠᱚᱫᱚ ᱳᱭᱮᱵᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱴᱨᱟᱯᱷᱤᱠ, ᱵᱮᱣᱦᱟᱨᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱵᱮᱣᱦᱟᱨ ᱟᱨ ᱡᱳᱜᱟᱡᱳᱜ ᱨᱮᱭᱟᱜ ᱦᱚᱨᱟ ᱠᱚ ᱵᱤᱪᱷᱱᱟᱶ ᱞᱟᱹᱜᱤᱫ ᱜᱚᱲᱚ ᱠᱚ ᱮᱢᱼᱟ ᱾ ᱥᱮᱞᱮᱫ ᱟᱠᱟᱱ ᱚᱱᱩᱢᱟᱹᱱ ᱠᱚ ᱤᱧᱟᱹᱜ ᱛᱚᱛᱩᱛᱚ ᱥᱚᱨᱮᱥ ᱞᱟᱹᱜᱤᱫ, ᱵᱮᱣᱦᱟᱨ ᱫᱟᱲᱮ ᱵᱟᱹᱲᱛᱤ ᱞᱟᱹᱜᱤᱫ ᱟᱨ ᱥᱟᱱᱟᱢ ᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱢᱤ ᱫᱟᱲᱮᱹᱭᱟᱜᱼᱟ ᱾<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ᱱᱚᱶᱟ ᱠᱩᱠᱤ ᱠᱚᱫᱚ ᱟᱢᱟᱜ ᱞᱮᱠᱟᱛᱮ ᱩᱪᱷᱟᱹᱱ ᱮᱢ ᱞᱟᱹᱜᱤᱫ ᱟᱨ ᱵᱤᱪᱷᱱᱟᱣᱟᱱ ᱥᱟᱸᱜᱷᱟᱨ ᱨᱮᱭᱟᱜ ᱮᱥᱮᱨᱟᱱ ᱧᱮᱞ ᱞᱟᱹᱜᱤᱫ ᱟᱢᱨᱮᱱ ᱩᱪᱷᱟᱹᱱ ᱦᱟᱹᱴᱤᱧᱤᱭᱟᱹ ᱠᱚ ᱫᱟᱨᱟᱭ ᱛᱮ ᱵᱮᱣᱦᱟᱨᱚᱜᱼᱟ ᱾ ᱩᱱᱠᱩ ᱫᱚ ᱵᱮᱶᱦᱟᱨᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱮᱥᱮᱨ ᱟᱨ ᱵᱨᱟᱵᱷᱟᱡᱽ ᱨᱮᱭᱟᱜ ᱵᱚᱱᱚᱫᱚᱞ ᱪᱮᱛᱟᱱ ᱴᱮᱦᱟᱴ ᱠᱟᱛᱮ ᱥᱟᱹᱵᱩᱫ ᱟᱱᱟᱜ ᱯᱟᱥᱱᱟᱣ ᱮᱢ ᱨᱮ ᱜᱚᱲᱚ ᱠᱚ ᱮᱢᱼᱟ ᱾<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ᱱᱚᱶᱟ ᱛᱷᱚᱱᱚᱛ ᱨᱮ ᱠᱳᱠᱤ ᱠᱚᱫᱚ ᱥᱮᱞᱮᱫ ᱢᱮᱱᱟᱜᱼᱟ ᱡᱟᱦᱟᱸ ᱫᱚ ᱢᱟᱲᱟᱝ ᱠᱷᱚᱱ ᱞᱟᱹᱭ ᱟᱠᱟᱱ ᱛᱷᱚᱱᱚᱛ ᱠᱚ ᱢᱩᱫᱨᱮ ᱵᱟᱝ ᱥᱮᱞᱮᱫᱚᱜᱼᱟ ᱢᱮᱱᱠᱷᱟᱱ ᱠᱤᱪᱷᱩ ᱳᱭᱮᱵᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱢᱤ ᱥᱮ ᱱᱟᱯᱟᱭ ᱞᱟᱹᱜᱤᱫ ᱞᱟᱹᱠᱛᱤ ᱦᱩᱭ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "ᱱᱚᱶᱟ ᱠᱩᱠᱤ ᱠᱚᱫᱚ ᱵᱮᱶᱦᱟᱨᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱞᱟᱹᱠᱛᱤ ᱠᱚ ᱩᱭᱦᱟᱹᱨ ᱠᱟᱛᱮ, ᱡᱮᱞᱮᱠᱟ ᱯᱟᱹᱨᱥᱤ, ᱠᱟᱹᱣᱰᱤ ᱟᱨ ᱛᱟᱹᱞᱤᱠᱟ ᱥᱮᱴᱤᱝ ᱠᱚ ᱩᱭᱦᱟᱹᱨ ᱫᱚᱦᱚᱼᱟ, ᱡᱟᱦᱟᱸᱛᱮ ᱵᱮᱼᱵᱨᱚᱡᱮᱡ ᱨᱮᱭᱟᱜ ᱢᱤᱫᱴᱟᱝ ᱩᱯᱟᱹᱭ ᱮᱢ ᱦᱳᱭᱳᱜᱼᱟ ᱾<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "ᱥᱠᱳᱭᱨᱤᱴᱤ ᱠᱩᱠᱤ ᱠᱚᱫᱚ ᱱᱩᱛᱚᱱᱟᱛᱤ, ᱞᱟᱹᱞᱤᱥ ᱵᱚᱱᱚᱫᱚᱞ ᱟᱨ ᱥᱠᱳᱭᱨᱤ ᱵᱨᱟᱣᱟᱡᱽ ᱞᱟᱹᱜᱤᱫ ᱵᱮᱣᱦᱟᱨᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱰᱮᱴᱟᱭ ᱥᱠᱳᱭᱤᱴ ᱠᱚᱨᱟᱣ ᱨᱮ ᱜᱚᱲᱚ ᱠᱚ ᱮᱢᱼᱟ ᱾ ᱩᱱᱠᱩ ᱫᱚ ᱜᱚᱴᱟ ᱞᱮᱫᱟ ᱡᱮ, ᱮᱥᱮᱨᱟᱱ ᱰᱚᱜᱚᱨ, ᱡᱮᱞᱮᱠᱟ ᱞᱚᱜᱤᱱ ᱮᱥᱮᱨᱮᱱᱰᱤᱞᱥ, ᱮᱱᱠᱨᱤᱯᱴᱰ ᱡᱳᱜᱟᱡᱳᱜ ᱛᱟᱞᱟᱛᱮ ᱱᱟᱯᱟᱭ ᱛᱮ ᱯᱟᱥᱱᱟᱣ ᱦᱳᱭᱳᱜᱼᱟ ᱾<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ur": {
      "acceptAll": "سب کو قبول کریں",
      "accept": "قبول کریں۔",
      "decline": "سب کو مسترد کریں",
      "acceptSelected": "منتخب کردہ کو قبول کریں",
      "ok": "سب کو قبول کریں",
      "consentNotice": {
        "description": "ہم آپ کی رازداری کا احترام کرتے ہیں۔ ہم سائٹ کی ضروری فعالیت کے ساتھ ساتھ مارکیٹنگ، شخصی کاری اور تجزیات کو فعال کرنے کے لیے کوکیز کو محفوظ کرتے ہیں۔ \"سب کو قبول کریں\" پر کلک کرکے، آپ ہمارے کوکیز کے استعمال سے اتفاق کرتے ہیں۔ آپ کسی بھی وقت اپنی ترتیبات تبدیل کر سکتے ہیں۔ کوکی پالیسی۔",
        "learnMore": "اپنی مرضی کے مطابق بنائیں",
        "changeDescription": " "
      },
      "save": "قبول کریں۔",
      "consentModal": {
        "title": "رضامندی کی ترجیحات کو حسب ضرورت بنائیں",
        "description": "ہم کوکیز کا استعمال آپ کو صفحات کے درمیان موثر طریقے سے نیویگیشن کرنے، اپنی ترجیحات کو محفوظ کرنے اور عام طور پر کسی ویب سائٹ کے اپنے تجربے کو بہتر بنانے میں مدد کرنے کے لیے کرتے ہیں۔ تاہم، ہم آپ کے رازداری کے حق کو تسلیم کرتے ہیں اور اس لیے آپ کچھ قسم کی کوکیز کی اجازت نہ دینے کا انتخاب کر سکتے ہیں۔ مزید جاننے اور ہماری ڈیفالٹ سیٹنگز کو تبدیل کرنے کے لیے مختلف زمرہ کے عنوانات پر کلک کریں۔ براہ کرم نوٹ کریں کہ بعض قسم کی کوکیز کو مسدود کرنا سائٹ کے آپ کے تجربے کو متاثر کر سکتا ہے۔",
        "buttons": {
          "save": "قبول کریں۔",
          "acceptAll": "سب کو قبول کریں",
          "decline": "سب کو مسترد کریں"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "سب کو مسترد کریں",
          "title": "سب کو مسترد کریں"
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
      "functional": {
        "title": "Functional",
        "description": "ہم ان کوکیز کا استعمال ویب سائٹ کی فعالیت کو بڑھانے اور صارف کے تجربے کو بہتر بنانے کے لیے کرتے ہیں۔ معلومات میں لاگ ان ڈیٹا، خطہ، زبان اور بہتر مواد شامل ہو سکتے ہیں۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "یہ کوکیز ویب سائٹ کے ٹریفک، صارف کے رویے اور مشغولیت کے نمونوں کا تجزیہ کرنے میں ہماری مدد کرتی ہیں۔ جمع کی گئی بصیرت ہمیں مواد کو بہتر بنانے، استعمال کو بڑھانے اور سائٹ کی مجموعی کارکردگی کو بہتر بنانے کی اجازت دیتی ہے۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "یہ کوکیز ہمارے اشتہاری شراکت داروں کے ذریعہ ذاتی اشتہارات کی فراہمی اور مارکیٹنگ کی مہمات کی تاثیر کی پیمائش کے لیے استعمال کی جاتی ہیں۔ وہ صارف کے مفادات اور براؤزنگ رویے کی بنیاد پر متعلقہ پروموشنز فراہم کرنے میں مدد کرتے ہیں۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "اس زمرے میں کوکیز شامل ہیں جو پہلے سے طے شدہ زمروں میں فٹ نہیں ہوتی ہیں لیکن ویب سائٹ کی کچھ فعالیتوں یا بہتری کے لیے ضروری ہو سکتی ہیں۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "یہ کوکیز صارف کی ترجیحات، جیسے زبان، کرنسی، اور تھیم کی ترتیبات کو یاد رکھتی ہیں، تاکہ انفرادی ضروریات کے مطابق موزوں براؤزنگ کا تجربہ فراہم کیا جا سکے۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "سیکیورٹی کوکیز تصدیق، دھوکہ دہی کی روک تھام اور محفوظ براؤزنگ کو فعال کرکے صارف کے ڈیٹا کی حفاظت میں مدد کرتی ہیں۔ وہ اس بات کو یقینی بناتے ہیں کہ حساس معلومات، جیسے لاگ ان کی اسناد، خفیہ کردہ کنکشن پر محفوظ طریقے سے منتقل کی جائیں۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "brx": {
      "acceptAll": "गासिबो नाजाव",
      "accept": "नाजाव",
      "decline": "गासिबोखौ नेवसि",
      "acceptSelected": "सायख 'जानायखौ नाजाव",
      "ok": "गासिबो नाजाव",
      "consentNotice": {
        "description": "जों नोंनि प्राइभेसिखौ मान होयो जों गोनांथार साइटनि खामानिजों लोगोसे मार्केटिं, गावारि खालामनाय आरो एनालाइटिक्स खालामनो थाखाय कुकिजखौ दोनथुमो। \"गासिबो नाजाव\" आव क्लिक खालामनानै, नों जोंनि कुकिफोरनि बाहायनायखौ गनायो। नोंथाङा जायखिजाया समावनो गावनि सेटिंसखौ सोलायनो हायो। कुकि पलिसि।",
        "learnMore": "कास्टमाइज खालाम",
        "changeDescription": " "
      },
      "save": "नाजाव",
      "consentModal": {
        "title": "गनायथि सायख 'नायफोरखौ कास्टमाइज खालाम",
        "description": "जों नोंथांखौ पेजफोरनि गेजेराव मोजाङै नेभिगेट खालामनायाव मदद होनो, नोंथांनि गोसो जानायफोरखौ दोनथुमनो आरो सरासनस्रायै नोंथांनि वेबसाइटनि रोंमोनदांथिखौ साबसिन खालामनो थाखाय कुकिफोरखौ बाहायो। जिखिजायामानो, जों नोंनि गावारि मोन्थाइखौ गनायो आरो बेनिखायनो नों माखासे रोखोमनि कुकिसखौ गनायथि होनाङा सायख 'नो हायो। बांसिन मिथिनो आरो जोंनि दिफल्ट सेटिंसखौ सोलायनो थाखाय गुबुन गुबुन थाखोनि हेडिंफोराव क्लिक खालाम। अन्नानै नोजोर हो दि माखासे रोखोमनि कुकिफोरखौ बन्द खालामनाया साइटनि नोंनि रोंमोनदांथिखौ गोहोम खोख्लैनो हागौ।",
        "buttons": {
          "save": "नाजाव",
          "acceptAll": "गासिबो नाजाव",
          "decline": "गासिबोखौ नेवसि"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "गासिबोखौ नेवसि",
          "title": "गासिबोखौ नेवसि"
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
      "functional": {
        "title": "Functional",
        "description": "जों बे कुकिफोरखौ वेबसाइटनि मावथायखौ बांहोनो आरो बाहायगिरिनि रोंमोनदांथिखौ साबसिन खालामनो बाहायो। फोरमायथियाव लगइननि खारि, ओनसोल, राव आरो बांनाय आयदाफोर थानो हागौ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "बे कुकिफोरा जोंनो वेबसाइट ट्राफिक, बाहायगिरिनि आखु आरो मावसोमनाय महरफोरखौ बिजिरनायाव मदद खालामो। बुथुमनाय मोनदांथिफोरा जोंनो आयदाफोरखौ साबसिन खालामनो, बाहायजाथावखौ बांहोनो आरो गासै साइट दिन्थिफुंनायखौ जौगाहोनो गनायथि होयो।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "बे कुकिफोरखौ जोंनि फोसावथाइ बाहागोआरिफ्रा गावारि फोसावथाइ होनो आरो फोसावथाइ फोसावथायनि गोहोमखौ जखा खालामनो बाहायो। बिसोर बाहायगिरिनि गोसो जानाय आरो ब्राउजिं आखुथायनि सायाव बिथा खालामनानै सोमोन्दो गोनां फोसावथायफोर जगायनो हेफाजाब होयो।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "बे थाखोआ बै कुकिफोरखौ लाफायो जाय सिगां थि खालामनाय थाखोफोराव थाङा नाथाय माखासे वेबसाइटनि खामानि एबा जौगाथायनि थाखाय गोनां जानो हागौ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "बे कुकिफोरा बाहायग्रानि सायख 'नायफोरखौ गोसोआव लाखियो, जेरै राव, रां आरो थीम सेटिंस, जाय गावारि गोनांथिफोरजों गोरोबनाय मोनसे थि ब्रावजिं रोंमोनदांथि जगायो।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "रैखाथि कुकिया फोरमानथि, गोरोनथि होबथाग्रा आरो रैखाथि गोनां ब्रावजिंनि गेजेरजों बाहायगिरिनि खारिखौ रैखा खालामनायाव मदद खालामो। बिसोरो रोखा खालामो दि सांग्रां खौरांफोर, जेरै लगइन फोरमानथिफोरा, इनक्रिप्टेड सुंजाबनायफोरनि गेजेरजों रैखाथिगोनाङै बारस्लायनाय जायो।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "mr": {
      "acceptAll": "सर्व स्वीकारा",
      "accept": "स्वीकारा",
      "decline": "सर्व नाकारा",
      "acceptSelected": "निवडलेले स्वीकारा",
      "ok": "सर्व स्वीकारा",
      "consentNotice": {
        "description": "आम्ही तुमच्या गोपनीयतेचा आदर करतो आम्ही आवश्यक साइट कार्यक्षमता, तसेच विपणन, वैयक्तिकरण आणि विश्लेषण सक्षम करण्यासाठी कुकीज संचयित करतो. \"सर्व स्वीकारा\" वर क्लिक करून, तुम्ही आमच्या कुकीजच्या वापरास संमती देता. तुम्ही कधीही तुमचे सेटिंग बदलू शकता. कुकी धोरण.",
        "learnMore": "सानुकूलित करा",
        "changeDescription": " "
      },
      "save": "स्वीकारा",
      "consentModal": {
        "title": "संमतीची प्राधान्ये सानुकूलित करा",
        "description": "पृष्ठांदरम्यान कार्यक्षमतेने नेव्हिगेट करण्यात, तुमची प्राधान्ये संचयित करण्यात आणि सामान्यतः वेबसाइटचा तुमचा अनुभव सुधारण्यात मदत करण्यासाठी आम्ही कुकीज वापरतो. तथापि, आम्ही तुमच्या गोपनीयतेच्या अधिकाराची कबुली देतो आणि म्हणूनच तुम्ही काही प्रकारच्या कुकीजला परवानगी न देणे निवडू शकता. अधिक जाणून घेण्यासाठी आणि आपली पूर्वनिर्धारित मांडणी बदलण्यासाठी विविध श्रेणी शीर्षकांवर क्लिक करा. कृपया लक्षात घ्या की विशिष्ट प्रकारच्या कुकीज अवरोधित केल्याने तुमच्या संकेतस्थळावरील अनुभवावर परिणाम होऊ शकतो.",
        "buttons": {
          "save": "स्वीकारा",
          "acceptAll": "सर्व स्वीकारा",
          "decline": "सर्व नाकारा"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सर्व नाकारा",
          "title": "सर्व नाकारा"
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
      "functional": {
        "title": "Functional",
        "description": "आम्ही या कुकीज वेबसाइटची कार्यक्षमता वाढविण्यासाठी आणि वापरकर्ता अनुभव सुधारण्यासाठी वापरतो. माहितीमध्ये लॉगिन डेटा, प्रदेश, भाषा आणि वर्धित सामग्री समाविष्ट असू शकते.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "या कुकीज आम्हाला वेबसाइटची रहदारी, वापरकर्त्याचे वर्तन आणि गुंतवणूकीच्या पद्धतींचे विश्लेषण करण्यात मदत करतात. गोळा केलेली अंतर्दृष्टी आम्हाला सामग्री अनुकूल करण्यास, उपयुक्तता वाढविण्यास आणि एकूण साइट कामगिरी सुधारण्यास अनुमती देते.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "या कुकीज आमच्या जाहिरात भागीदारांद्वारे वैयक्तिकृत जाहिराती देण्यासाठी आणि विपणन मोहिमांची परिणामकारकता मोजण्यासाठी वापरल्या जातात. ते वापरकर्त्याच्या आवडी आणि ब्राउझिंग वर्तनावर आधारित संबंधित जाहिराती प्रदान करण्यात मदत करतात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "या श्रेणीमध्ये अशा कुकीज समाविष्ट आहेत ज्या पूर्वनिर्धारित श्रेणींमध्ये बसत नाहीत परंतु वेबसाइटच्या विशिष्ट कार्यक्षमता किंवा सुधारणांसाठी आवश्यक असू शकतात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "या कुकीज वापरकर्त्यांची प्राधान्ये लक्षात ठेवतात, जसे की भाषा, चलन आणि थीम सेटिंग्ज, वैयक्तिक गरजांनुसार अनुरूप ब्राउझिंग अनुभव प्रदान करण्यासाठी.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा कुकीज प्रमाणीकरण, फसवणूक प्रतिबंध आणि सुरक्षित ब्राउझिंग सक्षम करून वापरकर्त्याचा डेटा संरक्षित करण्यात मदत करतात. ते हे सुनिश्चित करतात की लॉगिन प्रमाणपत्रांसारखी संवेदनशील माहिती एन्क्रिप्टेड जोडण्यांद्वारे सुरक्षितपणे प्रसारित केली जाते.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "or": {
      "acceptAll": "ସମସ୍ତଙ୍କୁ ଗ୍ରହଣ କରନ୍ତୁ",
      "accept": "ଗ୍ରହଣ କରନ୍ତୁ",
      "decline": "ସମସ୍ତକୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ",
      "acceptSelected": "ମନୋନୀତଙ୍କୁ ଗ୍ରହଣ କରନ୍ତୁ",
      "ok": "ସମସ୍ତ ଗ୍ରହଣ କରନ୍ତୁ",
      "consentNotice": {
        "description": "ଆମେ ଆପଣଙ୍କ ଗୋପନୀୟତାକୁ ସମ୍ମାନ କରୁ, ଆମେ ଅତ୍ୟାବଶ୍ୟକ ସାଇଟ୍ କାର୍ଯ୍ୟକାରିତା ତଥା ମାର୍କେଟିଂ, ବ୍ୟକ୍ତିଗତକରଣ ଏବଂ ବିଶ୍ଳେଷଣକୁ ସକ୍ଷମ କରିବା ପାଇଁ କୁକିଜ୍ ଷ୍ଟୋର୍ କରୁ। \"ସମସ୍ତଙ୍କୁ ଗ୍ରହଣ କରନ୍ତୁ\" ଉପରେ କ୍ଲିକ୍ କରି, ଆପଣ ଆମର କୁକିଜ୍ ବ୍ୟବହାର ପାଇଁ ରାଜି ହୁଅନ୍ତି। ଆପଣ ଯେକୌଣସି ସମୟରେ ନିଜର ସେଟିଂ ବଦଳାଇ ପାରିବେ। କୁକି ନୀତି।",
        "learnMore": "ସ୍ୱତନ୍ତ୍ର କରନ୍ତୁ",
        "changeDescription": " "
      },
      "save": "ଗ୍ରହଣ କରନ୍ତୁ",
      "consentModal": {
        "title": "ସମ୍ମତି ପସନ୍ଦଗୁଡ଼ିକୁ ସ୍ୱତନ୍ତ୍ର କରନ୍ତୁ",
        "description": "ଆମେ ଆପଣଙ୍କୁ ପୃଷ୍ଠାଗୁଡ଼ିକ ମଧ୍ୟରେ ଦକ୍ଷତାର ସହ ନେଭିଗେଟ୍ କରିବାରେ, ଆପଣଙ୍କ ପସନ୍ଦକୁ ସଂରକ୍ଷଣ କରିବାରେ ଏବଂ ସାଧାରଣତଃ ଏକ ୱେବ୍ସାଇଟ୍ରେ ଆପଣଙ୍କ ଅଭିଜ୍ଞତାକୁ ଉନ୍ନତ କରିବାରେ ସାହାଯ୍ୟ କରିବାକୁ କୁକିଜ୍ ବ୍ୟବହାର କରୁ। ତଥାପି, ଆମେ ଆପଣଙ୍କ ଗୋପନୀୟତାର ଅଧିକାରକୁ ସ୍ୱୀକାର କରୁ ଏବଂ ତେଣୁ ଆପଣ କିଛି ପ୍ରକାରର କୁକିଜକୁ ଅନୁମତି ନଦେବାକୁ ବାଛିପାରିବେ। ଅଧିକ ଜାଣିବା ପାଇଁ ବିଭିନ୍ନ ବର୍ଗର ଶୀର୍ଷକ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ ଏବଂ ଆମର ପୂର୍ବନିର୍ଦ୍ଧାରିତ ସେଟିଂ ବଦଳାନ୍ତୁ। ଦୟାକରି ଧ୍ୟାନ ଦିଅନ୍ତୁ ଯେ ନିର୍ଦ୍ଦିଷ୍ଟ ପ୍ରକାରର କୁକିଜକୁ ଅବରୋଧ କରିବା ସାଇଟର ଆପଣଙ୍କ ଅଭିଜ୍ଞତାକୁ ପ୍ରଭାବିତ କରିପାରେ।",
        "buttons": {
          "save": "ଗ୍ରହଣ କରନ୍ତୁ",
          "acceptAll": "ସମସ୍ତଙ୍କୁ ଗ୍ରହଣ କରନ୍ତୁ",
          "decline": "ସମସ୍ତକୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ସମସ୍ତକୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ",
          "title": "ସମସ୍ତକୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ"
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
      "functional": {
        "title": "Functional",
        "description": "ୱେବ୍ସାଇଟ କାର୍ଯ୍ୟକାରିତାକୁ ଉନ୍ନତ କରିବା ଏବଂ ବ୍ୟବହାରକାରୀଙ୍କ ଅଭିଜ୍ଞତାକୁ ଉନ୍ନତ କରିବା ପାଇଁ ଆମେ ଏହି କୁକିଜ ବ୍ୟବହାର କରୁ। ସୂଚନା ମଧ୍ୟରେ ଲଗଇନ୍ ତଥ୍ୟ, ଅଞ୍ଚଳ, ଭାଷା ଏବଂ ଉନ୍ନତ ବିଷୟବସ୍ତୁ ଅନ୍ତର୍ଭୁକ୍ତ ହୋଇପାରେ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ଏହି କୁକିଜ୍ ଆମକୁ ୱେବ୍ସାଇଟ୍ ଟ୍ରାଫିକ୍, ବ୍ୟବହାରକାରୀଙ୍କ ଆଚରଣ ଏବଂ ପ୍ରବୃତ୍ତି ଢାଞ୍ଚା ବିଶ୍ଳେଷଣ କରିବାରେ ସାହାଯ୍ୟ କରେ | ସଂଗୃହୀତ ଅନ୍ତର୍ଦୃଷ୍ଟି ଆମକୁ ବିଷୟବସ୍ତୁକୁ ଅପ୍ଟିମାଇଜ୍ କରିବାକୁ, ବ୍ୟବହାରଯୋଗ୍ୟତା ବୃଦ୍ଧି କରିବାକୁ ଏବଂ ସାମଗ୍ରିକ ସାଇଟ୍ ପ୍ରଦର୍ଶନରେ ଉନ୍ନତି କରିବାକୁ ଅନୁମତି ଦିଏ |<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ଏହି କୁକିଗୁଡ଼ିକ ଆମର ବିଜ୍ଞାପନ ଅଂଶୀଦାରମାନଙ୍କ ଦ୍ୱାରା ବ୍ୟକ୍ତିଗତ ବିଜ୍ଞାପନ ପ୍ରଦାନ କରିବା ଏବଂ ବିପଣନ ଅଭିଯାନର ପ୍ରଭାବକୁ ମାପିବା ପାଇଁ ବ୍ୟବହାର କରାଯାଇଥାଏ। ସେମାନେ ବ୍ୟବହାରକାରୀଙ୍କ ଆଗ୍ରହ ଏବଂ ବ୍ରାଉଜିଂ ଆଚରଣ ଉପରେ ଆଧାର କରି ପ୍ରାସଙ୍ଗିକ ପ୍ରଚାର ପ୍ରଦାନ କରିବାରେ ସାହାଯ୍ୟ କରନ୍ତି |<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ଏହି ବର୍ଗରେ କୁକିଜ ଅନ୍ତର୍ଭୁକ୍ତ ଅଛି ଯାହା ପୂର୍ବନିର୍ଦ୍ଧାରିତ ବର୍ଗରେ ଖାପ ଖାଏ ନାହିଁ କିନ୍ତୁ ନିର୍ଦ୍ଦିଷ୍ଟ ୱେବସାଇଟ୍ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ଉନ୍ନତି ପାଇଁ ଆବଶ୍ୟକ ହୋଇପାରେ |<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "ଏହି କୁକିଗୁଡ଼ିକ ବ୍ୟବହାରକାରୀଙ୍କ ପସନ୍ଦକୁ ମନେ ରଖିଥାଏ, ଯେପରିକି ଭାଷା, ମୁଦ୍ରା, ଏବଂ ଥିମ୍ ସେଟିଂ, ଯାହା ବ୍ୟକ୍ତିଗତ ଆବଶ୍ୟକତା ସହିତ ମେଳ ଖାଉଥିବା ଏକ ଅନୁକୂଳ ବ୍ରାଉଜିଂ ଅଭିଜ୍ଞତା ପ୍ରଦାନ କରିଥାଏ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "ସୁରକ୍ଷା କୁକିଜ ପ୍ରମାଣୀକରଣ, ଜାଲିଆତି ନିବାରଣ ଏବଂ ସୁରକ୍ଷିତ ବ୍ରାଉଜିଂକୁ ସକ୍ଷମ କରି ବ୍ୟବହାରକାରୀଙ୍କ ତଥ୍ୟକୁ ସୁରକ୍ଷିତ ରଖିବାରେ ସାହାଯ୍ୟ କରିଥାଏ। ସେମାନେ ସୁନିଶ୍ଚିତ କରନ୍ତି ଯେ ସମ୍ବେଦନଶୀଳ ସୂଚନା, ଯେପରିକି ଲଗଇନ୍ ପରିଚୟପତ୍ର, ଏନକ୍ରିପ୍ଟେଡ୍ ସଂଯୋଗ ମାଧ୍ୟମରେ ସୁରକ୍ଷିତ ଭାବରେ ସଞ୍ଚାରିତ ହୁଏ |<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "as": {
      "acceptAll": "সকলো গ্ৰহণ কৰক",
      "accept": "গ্ৰহণ কৰক",
      "decline": "সকলোবোৰ নাকচ কৰক",
      "acceptSelected": "নিৰ্বাচিত গ্ৰহণ কৰক",
      "ok": "সকলো গ্ৰহণ কৰক",
      "consentNotice": {
        "description": "আমি আপোনাৰ গোপনীয়তাক সন্মান কৰোঁ আমি অত্যাৱশ্যকীয় ছাইট কাৰ্য্যকৰীতা, লগতে বিপণন, ব্যক্তিগতকৰণ আৰু বিশ্লেষণ সক্ষম কৰিবলৈ কুকিজ সংৰক্ষণ কৰোঁ। \"সকলো গ্ৰহণ কৰক\" ক্লিক কৰি, আপুনি আমাৰ কুকিজৰ ব্যৱহাৰত সন্মতি প্ৰদান কৰে। আপুনি যিকোনো সময়তে আপোনাৰ ছেটিংছ সলনি কৰিব পাৰে। কুকি নীতি।",
        "learnMore": "স্বনিৰ্ধাৰিত কৰক",
        "changeDescription": " "
      },
      "save": "গ্ৰহণ কৰক",
      "consentModal": {
        "title": "সন্মতিৰ পছন্দসমূহ স্বনিৰ্বাচিত কৰক",
        "description": "আমি আপোনাক পৃষ্ঠাসমূহৰ মাজত কাৰ্য্যকৰীভাৱে নেভিগেট কৰাত সহায় কৰিবলৈ, আপোনাৰ পছন্দসমূহ সংৰক্ষণ কৰিবলৈ আৰু সাধাৰণতে ৱেবছাইট এটাৰ আপোনাৰ অভিজ্ঞতা উন্নত কৰিবলৈ কুকিজ ব্যৱহাৰ কৰোঁ। অৱশ্যে, আমি আপোনাৰ গোপনীয়তাৰ অধিকাৰক স্বীকাৰ কৰো আৰু সেয়েহে আপুনি কিছুমান প্ৰকাৰৰ কুকিজৰ অনুমতি নিদিব বিচাৰিব পাৰে। অধিক জানিবলৈ আৰু আমাৰ ডিফল্ট ছেটিংছ সলনি কৰিবলৈ বিভিন্ন শ্ৰেণীৰ শীৰ্ষকত ক্লিক কৰক। অনুগ্ৰহ কৰি মন কৰিব যে কিছুমান নিৰ্দিষ্ট ধৰণৰ কুকিজ ব্লক কৰিলে আপোনাৰ ছাইটৰ অভিজ্ঞতাত প্ৰভাৱ পৰিব পাৰে।",
        "buttons": {
          "save": "গ্ৰহণ কৰক",
          "acceptAll": "সকলো গ্ৰহণ কৰক",
          "decline": "সকলোবোৰ নাকচ কৰক"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "সকলোবোৰ নাকচ কৰক",
          "title": "সকলোবোৰ নাকচ কৰক"
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
      "functional": {
        "title": "Functional",
        "description": "আমি এই কুকিজসমূহ ৱেবছাইটৰ কাৰ্য্যকৰীতা বৃদ্ধি কৰিবলৈ আৰু ব্যৱহাৰকাৰীৰ অভিজ্ঞতা উন্নত কৰিবলৈ ব্যৱহাৰ কৰো। তথ্যত লগিন তথ্য, অঞ্চল, ভাষা, আৰু উন্নত সমল অন্তৰ্ভুক্ত থাকিব পাৰে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "এই কুকিজবোৰে আমাক ৱেবছাইটৰ ট্ৰেফিক, ব্যৱহাৰকাৰীৰ আচৰণ, আৰু ব্যস্ততাৰ ধৰণ বিশ্লেষণ কৰাত সহায় কৰে। সংগ্ৰহ কৰা অন্তৰ্দৃষ্টিয়ে আমাক সমল অনুকূল কৰিবলৈ, ব্যৱহাৰযোগ্যতা বৃদ্ধি কৰিবলৈ আৰু সামগ্ৰিক ছাইটৰ প্ৰদৰ্শন উন্নত কৰাত সহায় কৰে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "এই কুকিজবোৰ আমাৰ বিজ্ঞাপন অংশীদাৰসকলে ব্যক্তিগতকৃত বিজ্ঞাপন প্ৰদান কৰিবলৈ আৰু বিপণন প্ৰচাৰৰ ফলপ্ৰসূতা জুখিবৰ বাবে ব্যৱহাৰ কৰে। তেওঁলোকে ব্যৱহাৰকাৰীৰ আগ্ৰহ আৰু ব্ৰাউজিং আচৰণৰ ওপৰত ভিত্তি কৰি প্ৰাসংগিক প্ৰচাৰ প্ৰদান কৰাত সহায় কৰে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "এই শ্ৰেণীত কুকিজ অন্তৰ্ভুক্ত থাকে যিবোৰ পূৰ্বনিৰ্ধাৰিত শ্ৰেণীত খাপ নাখায় কিন্তু কিছুমান ৱেবছাইটৰ কাৰ্য্যকৰীতা বা উন্নতিৰ বাবে প্ৰয়োজনীয় হ 'ব পাৰে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "এই কুকিজবোৰে ব্যৱহাৰকাৰীৰ পছন্দবোৰ মনত ৰাখে, যেনে ভাষা, মুদ্ৰা, আৰু থিম ছেটিংছ, ব্যক্তিগত প্ৰয়োজনীয়তাৰ সৈতে খাপ খোৱা এক উপযোগী ব্ৰাউজিং অভিজ্ঞতা প্ৰদান কৰিবলৈ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "সুৰক্ষা কুকিজসমূহে প্ৰমাণীকৰণ, জালিয়াতি প্ৰতিৰোধ আৰু সুৰক্ষিত ব্ৰাউজিং সক্ষম কৰি ব্যৱহাৰকাৰীৰ তথ্য সুৰক্ষিত কৰাত সহায় কৰে। তেওঁলোকে নিশ্চিত কৰে যে সংবেদনশীল তথ্য, যেনে লগইন প্ৰমাণপত্ৰ, এনক্ৰিপ্ট কৰা সংযোগৰ জৰিয়তে সুৰক্ষিতভাৱে প্ৰেৰণ কৰা হয়।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "mai": {
      "acceptAll": "सभकेँ स्वीकार करू",
      "accept": "स्वीकार करू",
      "decline": "सभकेँ अस्वीकार करू",
      "acceptSelected": "चुनल गेलकेँ स्वीकार करू",
      "ok": "सभकेँ स्वीकार करू",
      "consentNotice": {
        "description": "हम अहाँक गोपनीयता के सम्मान करैत छी हम आवश्यक साइट कार्यक्षमता के संग-संग विपणन, वैयक्तिकरण आ विश्लेषण के सक्षम करै लेल कुकीज स्टोर करैत छी। \"सभ स्वीकार करू\" पर क्लिक कऽ अहाँ हमर कुकीजक उपयोगक लेल सहमति दैत छी। अहाँ कोनो समय अपन व्यवस्था बदल सकैत छी। कुकी नीति।",
        "learnMore": "अनुकूलित करू",
        "changeDescription": " "
      },
      "save": "स्वीकार करू",
      "consentModal": {
        "title": "सहमति प्राथमिकता केँ अनुकूलित करू",
        "description": "हम कुकीज के उपयोग अहाँ के पेज के बीच कुशलता सँ नेविगेट करै मे मदद करै लेल करैत छी, अपन प्राथमिकता के स्टोर करै लेल, आर आम तौर पर कोनो वेबसाइट के अपन अनुभव के बेहतर करै लेल। यद्यपि, हम अहाँक गोपनीयताक अधिकारकेँ स्वीकार करैत छी आ एहि लेल अहाँ किछु प्रकारक कुकीजकेँ अनुमति नहि देबाक विकल्प चुन सकैत छी। बेसी जानकारी प्राप्त करबाक लेल विभिन्न श्रेणीक शीर्षक पर क्लिक करू आ अपन पूर्वनिर्धारित सेटिंग्स बदलू। कृपया ध्यान राखू जे किछु प्रकारक कुकीजकेँ अवरुद्ध करब साइटक अहाँक अनुभवकेँ प्रभावित कऽ सकैत अछि।",
        "buttons": {
          "save": "स्वीकार करू",
          "acceptAll": "सभकेँ स्वीकार करू",
          "decline": "सभकेँ अस्वीकार करू"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सभकेँ अस्वीकार करू",
          "title": "सभकेँ अस्वीकार करू"
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
      "functional": {
        "title": "Functional",
        "description": "हमसभ एहि कुकीज सभक उपयोग वेबसाइटक कार्यक्षमता बढ़यबाक लेल आ उपयोगकर्ता अनुभवकेँ सुधारबाक लेल करैत छी। जानकारीमे लॉगइन डेटा, क्षेत्र, भाषा, आ उन्नत सामग्री सम्मिलित भऽ सकैत अछि।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ई कुकीज वेबसाइटक यातायात, उपयोगकर्ताक व्यवहार, आ संलग्नक स्वरूपक विश्लेषण करबामे हमरा सभक सहायता करैत अछि। एकत्रित अंतर्दृष्टि हमरा सभकेँ सामग्रीकेँ अनुकूलित करबाक, उपयोगिताकेँ बढ़यबाक, आ समग्र साइट प्रदर्शनमे सुधार करबाक अनुमति दैत अछि।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ई कुकीज सभक विज्ञापन भागीदार द्वारा व्यक्तिगत विज्ञापन देबाक लेल आ विपणन अभियानक प्रभावशीलताकेँ मापबाक लेल उपयोग कयल जाइत अछि। ओ उपयोगकर्ता के रुचि आ ब्राउज़िंग व्यवहार के आधार पर प्रासंगिक प्रचार प्रदान करय मे मदद करैत छैक।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "एहि श्रेणीमे कुकीज शामिल अछि जे पूर्वनिर्धारित श्रेणीमे फिट नहि होइत अछि मुदा वेबसाइटक किछु कार्यक्षमता वा सुधारक लेल आवश्यक भऽ सकैत अछि।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "ई कुकीज उपयोगकर्ता के प्राथमिकता के याद रखै छै, जेना भाषा, मुद्रा, आ विषय सेटिंग, ताकि व्यक्तिगत आवश्यकता के अनुरूप ब्राउज़िंग अनुभव प्रदान कैल जा सकय।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा कुकी प्रमाणीकरण, धोखाधड़ी रोकथाम, आ सुरक्षित ब्राउज़िंग सक्षम कऽ कऽ उपयोगकर्ता डेटा के सुरक्षा मे मदद करैत छैक। ओ ई सुनिश्चित करैत अछि जे संवेदनशील जानकारी, जेना लॉगइन क्रेडेंशियल्स, एन्क्रिप्टेड कनेक्शन पर सुरक्षित रूप सँ प्रसारित होय।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ta": {
      "acceptAll": "அனைத்தையும் ஏற்றுக்கொள்ளுங்கள்",
      "accept": "ஏற்றுக்கொள்",
      "decline": "அனைத்தையும் நிராகரிக்கவும்",
      "acceptSelected": "தேர்ந்தெடுக்கப்பட்டவர்களை ஏற்றுக்கொள்ளுங்கள்",
      "ok": "அனைத்தையும் ஏற்றுக்கொள்ளுங்கள்",
      "consentNotice": {
        "description": "அத்தியாவசிய தள செயல்பாடு, சந்தைப்படுத்தல், தனிப்பயனாக்கம் மற்றும் பகுப்பாய்வு ஆகியவற்றை செயல்படுத்த உங்கள் தனியுரிமையை நாங்கள் மதிக்கிறோம். \"அனைத்தையும் ஏற்றுக்கொள்ளுங்கள்\" என்பதைக் கிளிக் செய்வதன் மூலம், நாங்கள் குக்கீகளைப் பயன்படுத்துவதை நீங்கள் ஒப்புக்கொள்கிறீர்கள். நீங்கள் எந்த நேரத்திலும் உங்கள் அமைப்புகளை மாற்றலாம். குக்கீ கொள்கை.",
        "learnMore": "தனிப்பயனாக்குங்கள்",
        "changeDescription": " "
      },
      "save": "ஏற்றுக்கொள்",
      "consentModal": {
        "title": "சம்மத விருப்பங்களைத் தனிப்பயனாக்குங்கள்",
        "description": "பக்கங்களுக்கு இடையில் திறம்பட செல்லவும், உங்கள் விருப்பங்களை சேமிக்கவும், பொதுவாக ஒரு வலைத்தளத்தைப் பற்றிய உங்கள் அனுபவத்தை மேம்படுத்தவும் குக்கீகளைப் பயன்படுத்துகிறோம். இருப்பினும், தனியுரிமைக்கான உங்கள் உரிமையை நாங்கள் ஒப்புக்கொள்கிறோம், எனவே சில வகையான குக்கீகளை அனுமதிக்க வேண்டாம் என்று நீங்கள் தேர்வு செய்யலாம். மேலும் அறிய பல்வேறு வகை தலைப்புகளைக் கிளிக் செய்து நமது இயல்புநிலை அமைப்புகளை மாற்றவும். சில வகையான குக்கீகளைத் தடுப்பது தளத்தின் உங்கள் அனுபவத்தை பாதிக்கலாம் என்பதை நினைவில் கொள்க.",
        "buttons": {
          "save": "ஏற்றுக்கொள்",
          "acceptAll": "அனைத்தையும் ஏற்றுக்கொள்ளுங்கள்",
          "decline": "அனைத்தையும் நிராகரிக்கவும்"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "அனைத்தையும் நிராகரிக்கவும்",
          "title": "அனைத்தையும் நிராகரிக்கவும்"
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
      "functional": {
        "title": "Functional",
        "description": "வலைத்தளத்தின் செயல்பாட்டை மேம்படுத்தவும் பயனர் அனுபவத்தை மேம்படுத்தவும் இந்த குக்கீகளைப் பயன்படுத்துகிறோம். தகவல்களில் உள்நுழைவு தரவு, பிராந்தியம், மொழி மற்றும் மேம்படுத்தப்பட்ட உள்ளடக்கம் ஆகியவை அடங்கும்.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "வலைத்தள போக்குவரத்து, பயனர் நடத்தை மற்றும் ஈடுபாட்டு முறைகளை பகுப்பாய்வு செய்ய இந்த குக்கீகள் எங்களுக்கு உதவுகின்றன. சேகரிக்கப்பட்ட நுண்ணறிவுகள் உள்ளடக்கத்தை மேம்படுத்தவும், பயன்பாட்டினை மேம்படுத்தவும், ஒட்டுமொத்த தள செயல்திறனை மேம்படுத்தவும் அனுமதிக்கின்றன.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "இந்த குக்கீகள் எங்கள் விளம்பர கூட்டாளர்களால் தனிப்பயனாக்கப்பட்ட விளம்பரங்களை வழங்குவதற்கும் சந்தைப்படுத்தல் பிரச்சாரங்களின் செயல்திறனை அளவிடுவதற்கும் பயன்படுத்தப்படுகின்றன. பயனர் ஆர்வங்கள் மற்றும் உலாவல் நடத்தை ஆகியவற்றின் அடிப்படையில் பொருத்தமான விளம்பரங்களை வழங்க அவை உதவுகின்றன.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "இந்த வகை முன் வரையறுக்கப்பட்ட வகைகளுக்குள் பொருந்தாத குக்கீகளை உள்ளடக்கியது, ஆனால் சில வலைத்தள செயல்பாடுகள் அல்லது மேம்பாடுகளுக்கு அவசியமாக இருக்கலாம்.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "தனிப்பட்ட தேவைகளுக்கு ஏற்ப ஒரு தனிப்பயனாக்கப்பட்ட உலாவல் அனுபவத்தை வழங்க இந்த குக்கீகள் மொழி, நாணயம் மற்றும் தீம் அமைப்புகள் போன்ற பயனர் விருப்பங்களை நினைவில் கொள்கின்றன.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "அங்கீகாரம், மோசடி தடுப்பு மற்றும் பாதுகாப்பான உலாவல் ஆகியவற்றை இயக்குவதன் மூலம் பயனர் தரவைப் பாதுகாக்க பாதுகாப்பு குக்கீகள் உதவுகின்றன. உள்நுழைவு சான்றுகள் போன்ற முக்கியமான தகவல்கள் மறைகுறியாக்கப்பட்ட இணைப்புகள் மூலம் பாதுகாப்பாக அனுப்பப்படுவதை அவை உறுதி செய்கின்றன.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "sd": {
      "acceptAll": "سڀ قبول ڪریو",
      "accept": "قبول ڪریو",
      "decline": "سڀنی کی رد ڪریو",
      "acceptSelected": "چونڊیل قبول ڪریو",
      "ok": "سڀ قبول ڪریو",
      "consentNotice": {
        "description": "اسان توہان جی رازداری جو احترام ڪریون ٿا اسان ضروری سائیٽ جی ڪارڪردگی کی فعال ڪرڻ لاء ڪوڪی کی اسٽور ڪریون ٿا، گڏوگڏ مارڪیٽنگ، ذاتی ڪرڻ ۽ تجزیا ڪلڪ ڪندی \"سڀنی کی قبول ڪریو\" توہان اسان جی ڪوڪیز جی استعمال لاء رضامند آہیو توھان پنھنجی سیٽنگن کی ڪنھن بہ وقت تبدیل ڪری سگھو ٿا ڪوڪی پالسیء",
        "learnMore": "حسب ضرورت ٺاہیو",
        "changeDescription": " "
      },
      "save": "قبول ڪریو",
      "consentModal": {
        "title": "رضامندی جی ترجیحن کی ترتیب ڏیو",
        "description": "اسان استعمال ڪریون ٿا ڪوڪیز توہان جی مدد ڪرڻ لاء پیجز جی وچ ۾ نیویگیشن موثر طریقی سان، توہان جی ترجیحن کی محفوظ ڪرڻ، ۽ عام طئور تی توہان جی ویب سائیٽ جی تجربی کی بہتر بڻائڻ بہرحال، اسان توہان جی رازداری جی حق کی تسلیم ڪریون ٿا ۽ ان ڪری توہان چونڊ ڪری سگہو ٿا تہ ڪجھ قسم جی ڪوڪیز جی اجازت نہ ڏیو وڌیڪ معلوم ڪرڻ ۽ اسان جی ڊیفالٽ سیٽنگن کی تبدیل ڪرڻ لاء مختلف ڪیٽیگری ہیڊنگ تی ڪلڪ ڪریو مہربانی ڪری نوٽ ڪریو تہ ڪجھ قسم جی ڪوڪیز کی بلاڪ ڪرڻ شاید سائیٽ جی توہان جی تجربی کی متاثر ڪری سگہی ٿو",
        "buttons": {
          "save": "قبول ڪریو",
          "acceptAll": "سڀ قبول ڪریو",
          "decline": "سڀنی کی رد ڪریو"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "سڀنی کی رد ڪریو",
          "title": "سڀنی کی رد ڪریو"
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
      "functional": {
        "title": "Functional",
        "description": "اسان ویب سائیٽ جی ڪارڪردگی کی وڌائڻ ۽ صارف جی تجربی کی بہتر بڻائڻ لاء اہی ڪوڪی استعمال ڪندا آہیون معلومات ۾ لاگ ان ڊیٽا، علائقو، ٻولی، ۽ بہتر مواد شامل ٿی سگہی ٿو<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "اہی ڪوڪیز اسان کی ویب سائیٽ ٽرئفڪ، صارف جی رویا، ۽ مصروفیت جی نمونن جو تجزیو ڪرڻ ۾ مدد ڪن ٿیون گڏ ڪیل بصیرت اسان کی مواد کی بہتر بڻائڻ، استعمال کی وڌائڻ، ۽ مجموعی سائیٽ جی ڪارڪردگی کی بہتر بڻائڻ جی اجازت ڏئی ٿی<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "اہی ڪوڪیز اسان جی اشتہارن جی ڀائیوارن طرفان ذاتی ڪیل اشتھار پہچائڻ ۽ مارڪیٽنگ مہم جی اثرائتی کی ماپڻ لاء استعمال ڪیون ویندیون آھن اھی مدد ڪن ٿا لاڳاپیل پروموشن مہیا ڪرڻ جی بنیاد تی استعمال ڪندڙ جی مفادن ۽ براؤزنگ رویا<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ھن درجی ۾ ڪوڪیز شامل آھن جیڪی اڳ ۾ مقرر ڪیل قسمن ۾ فٽ نہ ٿیون ٿین پر شاید ویب سائیٽ جی ڪجھ ڪارڪردگی یا بہتری لاء ضروری آھن<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "اہی ڪوڪیز صارف جی ترجیحن کی یاد ڪن ٿیون، جہڙوڪ ٻولی، ڪرنسی، ۽ موضوع جی سیٽنگون، ہڪ ترتیب ڏنل براؤزنگ تجربو مہیا ڪرڻ لاء جیڪو انفرادی ضرورتن سان جڙیل آھی<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "حفاظتی ڪوڪیز تصدیق، دوکی جی روڪٿام ۽ محفوظ براؤزنگ کی فعال ڪندی صارف جی ڊیٽا جی حفاظت ۾ مدد ڪن ٿیون اھی یقینی بڻائین ٿا تہ حساس معلومات، جہڙوڪ لاگ ان اسناد، محفوظ طئور تی منتقل ٿیل ڪنیڪشن تی<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "bn": {
      "acceptAll": "সব গ্রহণ করুন",
      "accept": "গ্রহণ করুন",
      "decline": "সবগুলিই প্রত্যাখ্যান করুন",
      "acceptSelected": "নির্বাচিতদের গ্রহণ করুন",
      "ok": "সব গ্রহণ করুন",
      "consentNotice": {
        "description": "আমরা আপনার গোপনীয়তাকে সম্মান করি আমরা প্রয়োজনীয় সাইট কার্যকারিতা, পাশাপাশি বিপণন, ব্যক্তিগতকরণ এবং বিশ্লেষণ সক্ষম করতে কুকিজ সঞ্চয় করি। \"সবাইকে গ্রহণ করুন\"-এ ক্লিক করে, আপনি আমাদের কুকি ব্যবহারের জন্য সম্মত হন। আপনি যে কোনও সময় আপনার সেটিংস পরিবর্তন করতে পারেন। কুকি নীতি।",
        "learnMore": "কাস্টমাইজ করুন",
        "changeDescription": " "
      },
      "save": "গ্রহণ করুন",
      "consentModal": {
        "title": "সম্মতি পছন্দগুলি কাস্টমাইজ করুন",
        "description": "আমরা আপনাকে দক্ষতার সাথে পৃষ্ঠাগুলির মধ্যে নেভিগেট করতে, আপনার পছন্দগুলি সংরক্ষণ করতে এবং সাধারণত কোনও ওয়েবসাইটের আপনার অভিজ্ঞতা উন্নত করতে সহায়তা করার জন্য কুকি ব্যবহার করি। যাইহোক, আমরা আপনার গোপনীয়তার অধিকারকে স্বীকার করি এবং তাই আপনি কিছু ধরনের কুকিজ অনুমোদন না করার সিদ্ধান্ত নিতে পারেন। আরও জানতে এবং আমাদের ডিফল্ট সেটিংস পরিবর্তন করতে বিভিন্ন বিভাগের শিরোনামে ক্লিক করুন। দয়া করে মনে রাখবেন যে নির্দিষ্ট ধরনের কুকিজ ব্লক করা আপনার সাইটের অভিজ্ঞতাকে প্রভাবিত করতে পারে।",
        "buttons": {
          "save": "গ্রহণ করুন",
          "acceptAll": "সব গ্রহণ করুন",
          "decline": "সবগুলিই প্রত্যাখ্যান করুন"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "সবগুলিই প্রত্যাখ্যান করুন",
          "title": "সবগুলিই প্রত্যাখ্যান করুন"
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
      "functional": {
        "title": "Functional",
        "description": "আমরা ওয়েবসাইটের কার্যকারিতা উন্নত করতে এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে এই কুকিগুলি ব্যবহার করি। তথ্যের মধ্যে লগইন তথ্য, অঞ্চল, ভাষা এবং উন্নত বিষয়বস্তু অন্তর্ভুক্ত থাকতে পারে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "এই কুকিগুলি আমাদের ওয়েবসাইটের ট্রাফিক, ব্যবহারকারীর আচরণ এবং ব্যস্ততার ধরণ বিশ্লেষণ করতে সহায়তা করে। সংগৃহীত অন্তর্দৃষ্টি আমাদের বিষয়বস্তু অপ্টিমাইজ করতে, ব্যবহারযোগ্যতা বাড়াতে এবং সামগ্রিক সাইটের কর্মক্ষমতা উন্নত করতে সহায়তা করে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "এই কুকিগুলি আমাদের বিজ্ঞাপন অংশীদাররা ব্যক্তিগতকৃত বিজ্ঞাপন সরবরাহ করতে এবং বিপণন প্রচারের কার্যকারিতা পরিমাপ করতে ব্যবহার করে। তারা ব্যবহারকারীর আগ্রহ এবং ব্রাউজিং আচরণের উপর ভিত্তি করে প্রাসঙ্গিক প্রচার প্রদান করতে সহায়তা করে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "এই বিভাগে এমন কুকিজ রয়েছে যা পূর্বনির্ধারিত বিভাগগুলির সাথে খাপ খায় না তবে নির্দিষ্ট ওয়েবসাইটের কার্যকারিতা বা উন্নতির জন্য প্রয়োজনীয় হতে পারে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "এই কুকিগুলি ব্যবহারকারীর পছন্দগুলি মনে রাখে, যেমন ভাষা, মুদ্রা এবং থিম সেটিংস, একটি উপযুক্ত ব্রাউজিং অভিজ্ঞতা প্রদান করে যা পৃথক প্রয়োজনের সাথে সামঞ্জস্যপূর্ণ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "সুরক্ষা কুকিগুলি প্রমাণীকরণ, জালিয়াতি প্রতিরোধ এবং সুরক্ষিত ব্রাউজিং সক্ষম করে ব্যবহারকারীর ডেটা রক্ষা করতে সহায়তা করে। তারা নিশ্চিত করে যে সংবেদনশীল তথ্য, যেমন লগইন শংসাপত্রগুলি, এনক্রিপ্ট করা সংযোগগুলির মাধ্যমে নিরাপদে প্রেরণ করা হয়।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "kn": {
      "acceptAll": "ಎಲ್ಲವನ್ನೂ ಸ್ವೀಕರಿಸಿ",
      "accept": "ಸ್ವೀಕರಿಸಿ",
      "decline": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ",
      "acceptSelected": "ಆಯ್ಕೆಯಾದವರನ್ನು ಸ್ವೀಕರಿಸಿ",
      "ok": "ಎಲ್ಲವನ್ನು ಸ್ವೀಕರಿಸಿ",
      "consentNotice": {
        "description": "ನಿಮ್ಮ ಗೌಪ್ಯತೆಯನ್ನು ನಾವು ಗೌರವಿಸುತ್ತೇವೆ, ಅಗತ್ಯವಾದ ಸೈಟ್ ಕಾರ್ಯವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು, ಹಾಗೆಯೇ ಮಾರ್ಕೆಟಿಂಗ್, ವೈಯಕ್ತೀಕರಣ ಮತ್ತು ವಿಶ್ಲೇಷಣೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ನಾವು ಕುಕೀಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ. \"ಎಲ್ಲರನ್ನೂ ಸ್ವೀಕರಿಸಿ\" ಕ್ಲಿಕ್ ಮಾಡುವ ಮೂಲಕ, ನೀವು ನಮ್ಮ ಕುಕೀಗಳ ಬಳಕೆಯನ್ನು ಒಪ್ಪುತ್ತೀರಿ. ನೀವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು ಬದಲಾಯಿಸಬಹುದು. ಕುಕೀ ನೀತಿ.",
        "learnMore": "ಕಸ್ಟಮೈಸ್ ಮಾಡಿ",
        "changeDescription": " "
      },
      "save": "ಸ್ವೀಕರಿಸಿ",
      "consentModal": {
        "title": "ಒಪ್ಪಿಗೆಯ ಆದ್ಯತೆಗಳನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ",
        "description": "ಪುಟಗಳ ನಡುವೆ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲು, ನಿಮ್ಮ ಆದ್ಯತೆಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು ಮತ್ತು ಸಾಮಾನ್ಯವಾಗಿ ವೆಬ್ಸೈಟ್ನ ನಿಮ್ಮ ಅನುಭವವನ್ನು ಸುಧಾರಿಸಲು ನಾವು ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತೇವೆ. ಆದಾಗ್ಯೂ, ನಿಮ್ಮ ಗೌಪ್ಯತೆಯ ಹಕ್ಕನ್ನು ನಾವು ಅಂಗೀಕರಿಸುತ್ತೇವೆ ಮತ್ತು ಆದ್ದರಿಂದ ನೀವು ಕೆಲವು ರೀತಿಯ ಕುಕೀಗಳನ್ನು ಅನುಮತಿಸದಿರಲು ಆಯ್ಕೆ ಮಾಡಬಹುದು. ಹೆಚ್ಚು ತಿಳಿಯಲು ಮತ್ತು ನಮ್ಮ ಪೂರ್ವನಿಯೋಜಿತ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು ಬದಲಾಯಿಸಲು ವಿವಿಧ ವರ್ಗದ ಶೀರ್ಷಿಕೆಗಳ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ. ಕೆಲವು ರೀತಿಯ ಕುಕೀಗಳನ್ನು ನಿರ್ಬಂಧಿಸುವುದರಿಂದ ಸೈಟ್ನ ನಿಮ್ಮ ಅನುಭವದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರಬಹುದು ಎಂಬುದನ್ನು ದಯವಿಟ್ಟು ಗಮನಿಸಿ.",
        "buttons": {
          "save": "ಸ್ವೀಕರಿಸಿ",
          "acceptAll": "ಎಲ್ಲವನ್ನೂ ಸ್ವೀಕರಿಸಿ",
          "decline": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ",
          "title": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ"
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
      "functional": {
        "title": "Functional",
        "description": "ಜಾಲತಾಣದ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಬಳಕೆದಾರರ ಅನುಭವವನ್ನು ಸುಧಾರಿಸಲು ನಾವು ಈ ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತೇವೆ. ಮಾಹಿತಿಯು ಲಾಗಿನ್ ದತ್ತಾಂಶ, ಪ್ರದೇಶ, ಭಾಷೆ ಮತ್ತು ವರ್ಧಿತ ವಿಷಯವನ್ನು ಒಳಗೊಂಡಿರಬಹುದು.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ಈ ಕುಕೀಗಳು ಜಾಲತಾಣದ ದಟ್ಟಣೆ, ಬಳಕೆದಾರರ ನಡವಳಿಕೆ ಮತ್ತು ನಿಶ್ಚಿತಾರ್ಥದ ಮಾದರಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಸಂಗ್ರಹಿಸಿದ ಒಳನೋಟಗಳು ನಮಗೆ ವಿಷಯವನ್ನು ಅತ್ಯುತ್ತಮವಾಗಿಸಲು, ಉಪಯುಕ್ತತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಒಟ್ಟಾರೆ ಸೈಟ್ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಸುಧಾರಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ಈ ಕುಕೀಗಳನ್ನು ನಮ್ಮ ಜಾಹೀರಾತು ಪಾಲುದಾರರು ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಜಾಹೀರಾತುಗಳನ್ನು ನೀಡಲು ಮತ್ತು ಮಾರ್ಕೆಟಿಂಗ್ ಅಭಿಯಾನಗಳ ಪರಿಣಾಮಕಾರಿತ್ವವನ್ನು ಅಳೆಯಲು ಬಳಸುತ್ತಾರೆ. ಬಳಕೆದಾರರ ಆಸಕ್ತಿಗಳು ಮತ್ತು ಬ್ರೌಸಿಂಗ್ ನಡವಳಿಕೆಯ ಆಧಾರದ ಮೇಲೆ ಸಂಬಂಧಿತ ಪ್ರಚಾರಗಳನ್ನು ಒದಗಿಸಲು ಅವು ಸಹಾಯ ಮಾಡುತ್ತವೆ.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ಈ ವರ್ಗವು ಪೂರ್ವನಿರ್ಧರಿತ ವರ್ಗಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗದ ಆದರೆ ಕೆಲವು ಜಾಲತಾಣದ ಕಾರ್ಯಗಳು ಅಥವಾ ಸುಧಾರಣೆಗಳಿಗೆ ಅಗತ್ಯವಾಗಬಹುದಾದ ಕುಕೀಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "ಈ ಕುಕೀಗಳು ವೈಯಕ್ತಿಕ ಅಗತ್ಯಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗುವ ಸೂಕ್ತವಾದ ಬ್ರೌಸಿಂಗ್ ಅನುಭವವನ್ನು ಒದಗಿಸಲು ಭಾಷೆ, ಕರೆನ್ಸಿ ಮತ್ತು ಥೀಮ್ ಸೆಟ್ಟಿಂಗ್ಗಳಂತಹ ಬಳಕೆದಾರರ ಆದ್ಯತೆಗಳನ್ನು ನೆನಪಿಸಿಕೊಳ್ಳುತ್ತವೆ.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "ದೃಢೀಕರಣ, ವಂಚನೆ ತಡೆಗಟ್ಟುವಿಕೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಬ್ರೌಸಿಂಗ್ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವ ಮೂಲಕ ಬಳಕೆದಾರರ ಡೇಟಾವನ್ನು ರಕ್ಷಿಸಲು ಭದ್ರತಾ ಕುಕೀಗಳು ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಲಾಗಿನ್ ರುಜುವಾತುಗಳಂತಹ ಸೂಕ್ಷ್ಮ ಮಾಹಿತಿಯನ್ನು ಎನ್ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾದ ಸಂಪರ್ಕಗಳ ಮೂಲಕ ಸುರಕ್ಷಿತವಾಗಿ ರವಾನಿಸಲಾಗುತ್ತದೆ ಎಂದು ಅವರು ಖಚಿತಪಡಿಸುತ್ತಾರೆ.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "gu": {
      "acceptAll": "બધા સ્વીકારો",
      "accept": "સ્વીકારો",
      "decline": "બધાને નકારી કાઢો",
      "acceptSelected": "પસંદ કરેલ સ્વીકારો",
      "ok": "બધાને સ્વીકારો",
      "consentNotice": {
        "description": "અમે તમારી ગોપનીયતાનો આદર કરીએ છીએ અમે આવશ્યક સાઇટ કાર્યક્ષમતા, તેમજ માર્કેટિંગ, વ્યક્તિગતકરણ અને વિશ્લેષણને સક્ષમ કરવા માટે કૂકીઝ સંગ્રહિત કરીએ છીએ. \"બધા સ્વીકારો\" પર ક્લિક કરીને, તમે અમારા કૂકીઝના ઉપયોગ માટે સંમતિ આપો છો. તમે કોઈપણ સમયે તમારી સેટિંગ્સ બદલી શકો છો. કૂકી નીતિ.",
        "learnMore": "કસ્ટમાઇઝ કરો",
        "changeDescription": " "
      },
      "save": "સ્વીકારો",
      "consentModal": {
        "title": "સંમતિ પસંદગીઓને કસ્ટમાઇઝ કરો",
        "description": "અમે તમને પૃષ્ઠો વચ્ચે અસરકારક રીતે નેવિગેટ કરવામાં, તમારી પસંદગીઓને સંગ્રહિત કરવામાં અને સામાન્ય રીતે વેબસાઇટના તમારા અનુભવને સુધારવામાં મદદ કરવા માટે કૂકીઝનો ઉપયોગ કરીએ છીએ. જો કે, અમે તમારા ગોપનીયતાના અધિકારને સ્વીકારીએ છીએ અને તેથી તમે અમુક પ્રકારની કૂકીઝને મંજૂરી ન આપવાનું પસંદ કરી શકો છો. વધુ જાણવા અને આપણી મૂળભૂત સુયોજનો બદલવા માટે વિવિધ શ્રેણીના શીર્ષકો પર ક્લિક કરો. મહેરબાની કરીને નોંધ કરો કે અમુક પ્રકારની કૂકીઝને અવરોધિત કરવાથી સાઇટના તમારા અનુભવને અસર થઈ શકે છે.",
        "buttons": {
          "save": "સ્વીકારો",
          "acceptAll": "બધા સ્વીકારો",
          "decline": "બધાને નકારી કાઢો"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "બધાને નકારી કાઢો",
          "title": "બધાને નકારી કાઢો"
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
      "functional": {
        "title": "Functional",
        "description": "અમે આ કૂકીઝનો ઉપયોગ વેબસાઇટની કાર્યક્ષમતા વધારવા અને વપરાશકર્તા અનુભવને સુધારવા માટે કરીએ છીએ. માહિતીમાં લૉગિન ડેટા, પ્રદેશ, ભાષા અને ઉન્નત સામગ્રી શામેલ હોઈ શકે છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "આ કૂકીઝ અમને વેબસાઇટ ટ્રાફિક, વપરાશકર્તા વર્તન અને જોડાણ પેટર્નનું વિશ્લેષણ કરવામાં મદદ કરે છે. એકત્રિત કરવામાં આવેલી આંતરદૃષ્ટિ આપણને સામગ્રીને શ્રેષ્ઠ બનાવવા, ઉપયોગીતા વધારવા અને એકંદર સાઇટ પ્રદર્શનમાં સુધારો કરવાની મંજૂરી આપે છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "આ કૂકીઝનો ઉપયોગ અમારા જાહેરાત ભાગીદારો દ્વારા વ્યક્તિગત જાહેરાતો પહોંચાડવા અને માર્કેટિંગ ઝુંબેશની અસરકારકતાને માપવા માટે થાય છે. તેઓ વપરાશકર્તાની રુચિઓ અને બ્રાઉઝિંગ વર્તણૂકના આધારે સંબંધિત પ્રચાર પ્રદાન કરવામાં મદદ કરે છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "આ શ્રેણીમાં એવી કૂકીઝનો સમાવેશ થાય છે જે પૂર્વવ્યાખ્યાયિત શ્રેણીઓમાં બંધબેસતું નથી પરંતુ ચોક્કસ વેબસાઇટ કાર્યક્ષમતાઓ અથવા સુધારાઓ માટે જરૂરી હોઈ શકે છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "આ કૂકીઝ વપરાશકર્તાની પસંદગીઓને યાદ રાખે છે, જેમ કે ભાષા, ચલણ અને થીમ સેટિંગ્સ, વ્યક્તિગત જરૂરિયાતો સાથે સંરેખિત બ્રાઉઝિંગ અનુભવ પ્રદાન કરવા માટે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "સુરક્ષા કૂકીઝ પ્રમાણીકરણ, છેતરપિંડી નિવારણ અને સુરક્ષિત બ્રાઉઝિંગને સક્ષમ કરીને વપરાશકર્તા ડેટાને સુરક્ષિત કરવામાં મદદ કરે છે. તેઓ ખાતરી કરે છે કે સંવેદનશીલ માહિતી, જેમ કે લૉગિન ઓળખપત્રો, એન્ક્રિપ્ટેડ જોડાણો પર સુરક્ષિત રીતે પ્રસારિત થાય છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ne": {
      "acceptAll": "सबै स्वीकार गर्नुहोस्",
      "accept": "स्वीकार गर्नुहोस्",
      "decline": "सबै अस्वीकार गर्नुहोस्",
      "acceptSelected": "चुनिएको स्वीकार गर्नुहोस्",
      "ok": "सबै स्वीकार गर्नुहोस्",
      "consentNotice": {
        "description": "हामी तपाईंको गोपनीयतालाई सम्मान गर्दछौं हामी आवश्यक साइट कार्यक्षमता, साथै मार्केटिङ, निजीकरण र विश्लेषण सक्षम गर्न कुकीहरू भण्डार गर्दछौं। \"सबै स्वीकार गर्नुहोस्\" मा क्लिक गरेर, तपाईं हाम्रो कुकीजको प्रयोगमा सहमत हुनुहुन्छ। तपाईँले कुनै पनि समयमा आफ्नो सेटिङहरू परिवर्तन गर्न सक्नुहुन्छ। कुकी नीति।",
        "learnMore": "अनुकूलित गर्नुहोस्",
        "changeDescription": " "
      },
      "save": "स्वीकार गर्नुहोस्",
      "consentModal": {
        "title": "सहमति प्राथमिकताहरू अनुकूलित गर्नुहोस्",
        "description": "हामी तपाईंलाई पृष्ठहरू बिच कुशलतापूर्वक नेभिगेट गर्न, तपाईंको प्राथमिकताहरू भण्डारण गर्न, र सामान्यतया वेबसाइटको तपाईंको अनुभव सुधार गर्न मद्दत गर्न कुकीहरू प्रयोग गर्दछौं। यद्यपि, हामी तपाईँको गोपनीयताको अधिकारलाई स्वीकार गर्दछौँ र त्यसैले तपाईँले केही प्रकारका कुकीजहरूलाई अनुमति नदिन छनौट गर्न सक्नुहुन्छ। थप पत्ता लगाउन र हाम्रो पूर्वनिर्धारित सेटिङहरू परिवर्तन गर्न विभिन्न श्रेणी शीर्षकहरूमा क्लिक गर्नुहोस्। कृपया ध्यान दिनुहोस् कि केही प्रकारका कुकीहरू अवरुद्ध गर्नाले साइटको तपाईंको अनुभवलाई असर गर्न सक्छ।",
        "buttons": {
          "save": "स्वीकार गर्नुहोस्",
          "acceptAll": "सबै स्वीकार गर्नुहोस्",
          "decline": "सबै अस्वीकार गर्नुहोस्"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सबै अस्वीकार गर्नुहोस्",
          "title": "सबै अस्वीकार गर्नुहोस्"
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
      "functional": {
        "title": "Functional",
        "description": "हामी यी कुकीहरू वेबसाइट कार्यक्षमता बढाउन र प्रयोगकर्ता अनुभव सुधार गर्न प्रयोग गर्दछौं। जानकारीले लगइन डेटा, क्षेत्र, भाषा, र उन्नत सामग्री समावेश गर्न सक्छ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "यी कुकीहरूले हामीलाई वेबसाइट ट्राफिक, प्रयोगकर्ता व्यवहार, र संलग्नता ढाँचाहरू विश्लेषण गर्न मद्दत गर्दछ। एकत्रित अन्तर्दृष्टिले हामीलाई सामग्री अनुकूलन गर्न, उपयोगिता बढाउन, र समग्र साइट प्रदर्शन सुधार गर्न अनुमति दिन्छ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "यी कुकीहरू हाम्रा विज्ञापन साझेदारहरूद्वारा व्यक्तिगत विज्ञापनहरू वितरण गर्न र मार्केटिङ अभियानहरूको प्रभावकारिता मापन गर्न प्रयोग गरिन्छ। तिनीहरूले प्रयोगकर्ता रुचि र ब्राउजिङ व्यवहारको आधारमा सान्दर्भिक पदोन्नतिहरू प्रदान गर्न मद्दत गर्छन्।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "यस श्रेणीले कुकीहरू समावेश गर्दछ जुन पूर्वनिर्धारित कोटीहरूमा फिट हुँदैन तर निश्चित वेबसाइट प्रकार्यहरू वा सुधारहरूका लागि आवश्यक हुन सक्छ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "यी कुकीहरूले प्रयोगकर्ता प्राथमिकताहरू सम्झन्छन्, जस्तै भाषा, मुद्रा, र विषय सेटिङहरू, व्यक्तिगत आवश्यकताहरूसँग मेल खाने अनुकूल ब्राउजिङ अनुभव प्रदान गर्न।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा कुकीहरूले प्रमाणीकरण, धोखाधडी रोकथाम, र सुरक्षित ब्राउजिङ सक्षम गरेर प्रयोगकर्ता डेटा सुरक्षित गर्न मद्दत गर्दछ। तिनीहरूले यो सुनिश्चित गर्छन् कि संवेदनशील जानकारी, जस्तै लगइन प्रमाणहरू, इन्क्रिप्टेड जडानहरूमा सुरक्षित रूपमा प्रसारित हुन्छ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "hi": {
      "acceptAll": "सभी को स्वीकार करें",
      "accept": "स्वीकार करें",
      "decline": "सभी को अस्वीकार करें",
      "acceptSelected": "चयनित को स्वीकार करें",
      "ok": "सभी को स्वीकार करें",
      "consentNotice": {
        "description": "हम आपकी गोपनीयता का सम्मान करते हैं हम आवश्यक साइट कार्यक्षमता के साथ-साथ विपणन, वैयक्तिकरण और विश्लेषण को सक्षम करने के लिए कुकीज़ संग्रहीत करते हैं। \"सभी को स्वीकार करें\" पर क्लिक करके, आप कुकीज़ के हमारे उपयोग के लिए सहमत हैं। आप किसी भी समय अपनी सेटिंग बदल सकते हैं। कुकी नीति।",
        "learnMore": "अनुकूलित करें",
        "changeDescription": " "
      },
      "save": "स्वीकार करें",
      "consentModal": {
        "title": "सहमति वरीयताएँ अनुकूलित करें",
        "description": "हम कुकीज़ का उपयोग आपको पृष्ठों के बीच कुशलता से नेविगेट करने, आपकी प्राथमिकताओं को संग्रहीत करने और आम तौर पर किसी वेबसाइट के आपके अनुभव को बेहतर बनाने में मदद करने के लिए करते हैं। हालाँकि, हम आपकी गोपनीयता के अधिकार को स्वीकार करते हैं और इसलिए आप कुछ प्रकार की कुकीज़ की अनुमति नहीं दे सकते हैं। अधिक जानने के लिए विभिन्न श्रेणी शीर्षकों पर क्लिक करें और हमारी डिफ़ॉल्ट सेटिंग्स को बदलें। कृपया ध्यान दें कि कुछ प्रकार की कुकीज़ को अवरुद्ध करने से साइट का आपका अनुभव प्रभावित हो सकता है।",
        "buttons": {
          "save": "स्वीकार करें",
          "acceptAll": "सभी को स्वीकार करें",
          "decline": "सभी को अस्वीकार करें"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सभी को अस्वीकार करें",
          "title": "सभी को अस्वीकार करें"
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
      "functional": {
        "title": "Functional",
        "description": "हम इन कुकीज़ का उपयोग वेबसाइट की कार्यक्षमता बढ़ाने और उपयोगकर्ता अनुभव को बेहतर बनाने के लिए करते हैं। जानकारी में लॉगिन डेटा, क्षेत्र, भाषा और उन्नत सामग्री शामिल हो सकती है।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ये कुकीज़ हमें वेबसाइट ट्रैफिक, उपयोगकर्ता व्यवहार और जुड़ाव पैटर्न का विश्लेषण करने में मदद करती हैं। एकत्रित अंतर्दृष्टि हमें सामग्री को अनुकूलित करने, उपयोगिता बढ़ाने और समग्र साइट प्रदर्शन में सुधार करने की अनुमति देती है।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "इन कुकीज़ का उपयोग हमारे विज्ञापन भागीदारों द्वारा व्यक्तिगत विज्ञापन देने और विपणन अभियानों की प्रभावशीलता को मापने के लिए किया जाता है। वे उपयोगकर्ता की रुचियों और ब्राउज़िंग व्यवहार के आधार पर प्रासंगिक प्रचार प्रदान करने में मदद करते हैं।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "इस श्रेणी में ऐसी कुकीज़ शामिल हैं जो पूर्वनिर्धारित श्रेणियों में फिट नहीं होती हैं, लेकिन कुछ वेबसाइट कार्यक्षमताओं या सुधारों के लिए आवश्यक हो सकती हैं।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "ये कुकीज़ उपयोगकर्ता की प्राथमिकताओं को याद रखती हैं, जैसे कि भाषा, मुद्रा और विषय सेटिंग, जो व्यक्तिगत आवश्यकताओं के अनुरूप ब्राउज़िंग अनुभव प्रदान करती हैं।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा कुकीज़ प्रमाणीकरण, धोखाधड़ी की रोकथाम और सुरक्षित ब्राउज़िंग को सक्षम करके उपयोगकर्ता डेटा की सुरक्षा में मदद करती हैं। वे यह सुनिश्चित करते हैं कि संवेदनशील जानकारी, जैसे कि लॉगिन क्रेडेंशियल्स, एन्क्रिप्टेड कनेक्शनों पर सुरक्षित रूप से प्रेषित की जाती है।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "gom": {
      "acceptAll": "सगळें मान्य कर",
      "accept": "स्विकार कर",
      "decline": "सगळें न्हयकार",
      "acceptSelected": "वेंचून घेतिल्लें मान्य कर",
      "ok": "सगळें मान्य कर",
      "consentNotice": {
        "description": "आमी तुमच्या गुप्ततायेचो आदर करतात आमी गरजेच्यो संकेतथळ कार्यक्षमताय, तशेंच विपणन, वैयक्तीकरण आनी विश्लेशण सक्षम करपा खातीर कुकीज सांठोवन दवरतात. \"सगळे मान्य करात\" क्लिक केल्यार, तुमी आमचे कुकीज वापरपाक मान्यताय दितात. तुमी खंयच्याय वेळार तुमची सेटिंग बदलूंक शकतात. कुकी धोरण.",
        "learnMore": "कस्टमायझ करात",
        "changeDescription": " "
      },
      "save": "स्विकार कर",
      "consentModal": {
        "title": "संमतीची पसंती सानुकूल करात",
        "description": "पानां मदीं कुशळटायेन नेव्हिगेट करपाक, तुमची पसंती सांठोवन दवरपाक आनी सादारणपणान संकेतथळाचो तुमचो अणभव सुदारपाक आमी कुकीज वापरतात. पूण, आमी तुज्या खाजगीपणाच्या अधिकाराची मान्यताय दितात आनी देखून तूं कांय प्रकारच्या कुकीजांक परवानगी दिना अशें निवडूंक शकता. चड सोदून काडपाक आनी आमची पूर्वनिर्धारीत मांडणी बदलपाक वेगवेगळ्या श्रेणीच्या शीर्षकांचेर क्लिक करात. उपकार करून लक्षांत घेयात की कांय प्रकारच्या कुकीज आडावपाचो परिणाम तुमच्या सायटीच्या अणभवाचेर जावं येता.",
        "buttons": {
          "save": "स्विकार कर",
          "acceptAll": "सगळें मान्य कर",
          "decline": "सगळें न्हयकार"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सगळें न्हयकार",
          "title": "सगळें न्हयकार"
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
      "functional": {
        "title": "Functional",
        "description": "संकेतथळाची कार्यक्षमताय वाडोवपा खातीर आनी वापरप्याचो अणभव सुदारपा खातीर आमी ह्यो कुकीज वापरतात. म्हायतींत लॉगीन डेटा, प्रदेश, भास, आनी वर्धित सामुग्री आसूं येता.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "हे कुकीज आमकां संकेतथळाचो ट्रॅफिक, वापरप्याची वागणूक, आनी व्यस्ततायेचे नमुने विश्लेशण करपाक मदत करतात. एकठांय केल्ली अंतर्दृष्टी आमकां सामुग्री ऑप्टिमायझ करपाक, उपेगीपण वाडोवपाक आनी एकंदर सायटाची कामगिरी सुदारपाक मदत करता.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "हे कुकीज आमचे जायरात भागीदार वैयक्तीक जायराती दिवपा खातीर आनी विपणन मोहिमांची परिणामकारकता मेजपा खातीर वापरतात. वापरप्याची आवड आनी ब्राउझिंग वेव्हाराचेर आदारून संबंदीत बडटी दिवपाक ते मदत करतात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ह्या श्रेणींत कुकीज आसतात ज्यो पूर्वनिर्धारित श्रेणींत बसनात पूण कांय संकेतथळाची कार्यक्षमताय वा सुदारणां खातीर गरजेच्यो आसूं येतात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "हे कुकीज वापरप्याची पसंती याद दवरतात, देखीक भास, चलन, आनी थीम सेटिंग्ज, वैयक्तीक गरजांकडेन जुळपी अनुरूप ब्राउझिंग अणभव दिवपा खातीर.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा कुकीज प्रमाणीकरण, फसवणूक आडावप, आनी सुरक्षीत ब्राउझिंग सक्षम करून वापरप्याचो डेटा राखपाक मदत करतात. लॉगीन प्रमाणपत्रां सारकी संवेदनशील म्हायती एन्क्रिप्टेड जोडणींतल्यान सुरक्षीतपणान धाडटात हाची खात्री ते करतात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "pa": {
      "acceptAll": "ਸਭ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ",
      "accept": "ਸਵੀਕਾਰ ਕਰੋ",
      "decline": "ਸਭ ਨੂੰ ਰੱਦ ਕਰੋ",
      "acceptSelected": "ਚੁਣੇ ਹੋਏ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ",
      "ok": "ਸਭ ਸਵੀਕਾਰ ਕਰੋ",
      "consentNotice": {
        "description": "ਅਸੀਂ ਤੁਹਾਡੀ ਗੋਪਨੀਯਤਾ ਦਾ ਸਨਮਾਨ ਕਰਦੇ ਹਾਂ ਅਸੀਂ ਜ਼ਰੂਰੀ ਸਾਈਟ ਕਾਰਜਕੁਸ਼ਲਤਾ ਦੇ ਨਾਲ ਨਾਲ ਮਾਰਕੀਟਿੰਗ, ਵਿਅਕਤੀਗਤਕਰਨ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣ ਨੂੰ ਸਮਰੱਥ ਕਰਨ ਲਈ ਕੂਕੀਜ਼ ਨੂੰ ਸਟੋਰ ਕਰਦੇ ਹਾਂ। \"ਸਭ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ\" ਉੱਤੇ ਕਲਿਕ ਕਰਕੇ, ਤੁਸੀਂ ਸਾਡੀਆਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਲਈ ਸਹਿਮਤੀ ਦਿੰਦੇ ਹੋ। ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣੀਆਂ ਸੈਟਿੰਗਾਂ ਨੂੰ ਬਦਲ ਸਕਦੇ ਹੋ। ਕੂਕੀ ਨੀਤੀ.",
        "learnMore": "ਅਨੁਕੂਲਿਤ ਕਰੋ",
        "changeDescription": " "
      },
      "save": "ਸਵੀਕਾਰ ਕਰੋ",
      "consentModal": {
        "title": "ਸਹਿਮਤੀ ਤਰਜੀਹਾਂ ਨੂੰ ਅਨੁਕੂਲਿਤ ਕਰੋ",
        "description": "ਅਸੀਂ ਪੰਨਿਆਂ ਵਿਚਕਾਰ ਕੁਸ਼ਲਤਾ ਨਾਲ ਨੈਵੀਗੇਟ ਕਰਨ, ਤੁਹਾਡੀਆਂ ਤਰਜੀਹਾਂ ਨੂੰ ਸੰਭਾਲਣ ਅਤੇ ਆਮ ਤੌਰ 'ਤੇ ਕਿਸੇ ਵੈੱਬਸਾਈਟ ਦੇ ਤੁਹਾਡੇ ਤਜ਼ਰਬੇ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਨ ਲਈ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ। ਹਾਲਾਂਕਿ, ਅਸੀਂ ਤੁਹਾਡੇ ਗੋਪਨੀਯਤਾ ਦੇ ਅਧਿਕਾਰ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦੇ ਹਾਂ ਅਤੇ ਇਸ ਲਈ ਤੁਸੀਂ ਕੁੱਝ ਕਿਸਮਾਂ ਦੀਆਂ ਕੂਕੀਜ਼ ਦੀ ਆਗਿਆ ਨਾ ਦੇਣ ਦੀ ਚੋਣ ਕਰ ਸਕਦੇ ਹੋ। ਹੋਰ ਜਾਣਨ ਅਤੇ ਸਾਡੀਆਂ ਡਿਫਾਲਟ ਸੈਟਿੰਗਾਂ ਨੂੰ ਬਦਲਣ ਲਈ ਵੱਖ-ਵੱਖ ਸ਼੍ਰੇਣੀ ਸਿਰਲੇਖਾਂ 'ਤੇ ਕਲਿੱਕ ਕਰੋ। ਕਿਰਪਾ ਕਰਕੇ ਨੋਟ ਕਰੋ ਕਿ ਕੁੱਝ ਕਿਸਮਾਂ ਦੀਆਂ ਕੂਕੀਜ਼ ਨੂੰ ਰੋਕਣਾ ਸਾਈਟ ਦੇ ਤੁਹਾਡੇ ਤਜ਼ਰਬੇ ਨੂੰ ਪ੍ਰਭਾਵਤ ਕਰ ਸਕਦਾ ਹੈ।",
        "buttons": {
          "save": "ਸਵੀਕਾਰ ਕਰੋ",
          "acceptAll": "ਸਭ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ",
          "decline": "ਸਭ ਨੂੰ ਰੱਦ ਕਰੋ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ਸਭ ਨੂੰ ਰੱਦ ਕਰੋ",
          "title": "ਸਭ ਨੂੰ ਰੱਦ ਕਰੋ"
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
      "functional": {
        "title": "Functional",
        "description": "ਅਸੀਂ ਇਨ੍ਹਾਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਵੈੱਬਸਾਈਟ ਦੀ ਕਾਰਜਕੁਸ਼ਲਤਾ ਨੂੰ ਵਧਾਉਣ ਅਤੇ ਉਪਭੋਗਤਾ ਅਨੁਭਵ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਲਈ ਕਰਦੇ ਹਾਂ। ਜਾਣਕਾਰੀ ਵਿੱਚ ਲੌਗਇਨ ਡੇਟਾ, ਖੇਤਰ, ਭਾਸ਼ਾ ਅਤੇ ਵਧੀ ਹੋਈ ਸਮੱਗਰੀ ਸ਼ਾਮਲ ਹੋ ਸਕਦੀ ਹੈ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ਇਹ ਕੂਕੀਜ਼ ਸਾਨੂੰ ਵੈੱਬਸਾਈਟ ਟ੍ਰੈਫਿਕ, ਉਪਭੋਗਤਾ ਵਿਵਹਾਰ ਅਤੇ ਰੁਝੇਵਿਆਂ ਦੇ ਪੈਟਰਨਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਦੀਆਂ ਹਨ। ਇਕੱਠੀ ਕੀਤੀ ਗਈ ਸੂਝ ਸਾਨੂੰ ਸਮੱਗਰੀ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣ, ਉਪਯੋਗਤਾ ਵਧਾਉਣ ਅਤੇ ਸਮੁੱਚੀ ਸਾਈਟ ਪ੍ਰਦਰਸ਼ਨ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਦੀ ਆਗਿਆ ਦਿੰਦੀ ਹੈ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ਇਹ ਕੂਕੀਜ਼ ਸਾਡੇ ਵਿਗਿਆਪਨ ਭਾਈਵਾਲਾਂ ਦੁਆਰਾ ਵਿਅਕਤੀਗਤ ਵਿਗਿਆਪਨ ਪ੍ਰਦਾਨ ਕਰਨ ਅਤੇ ਮਾਰਕੀਟਿੰਗ ਮੁਹਿੰਮਾਂ ਦੀ ਪ੍ਰਭਾਵਸ਼ੀਲਤਾ ਨੂੰ ਮਾਪਣ ਲਈ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। ਉਹ ਉਪਭੋਗਤਾ ਦੀਆਂ ਰੁਚੀਆਂ ਅਤੇ ਬ੍ਰਾਊਜ਼ਿੰਗ ਵਿਵਹਾਰ ਦੇ ਅਧਾਰ ਤੇ ਢੁਕਵੀਂ ਤਰੱਕੀ ਪ੍ਰਦਾਨ ਕਰਨ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਦੇ ਹਨ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ਇਸ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਕੂਕੀਜ਼ ਸ਼ਾਮਲ ਹਨ ਜੋ ਪਹਿਲਾਂ ਤੋਂ ਪ੍ਰਭਾਸ਼ਿਤ ਸ਼੍ਰੇਣੀਆਂ ਵਿੱਚ ਫਿੱਟ ਨਹੀਂ ਹੁੰਦੀਆਂ ਪਰ ਕੁਝ ਵੈੱਬਸਾਈਟ ਕਾਰਜਕੁਸ਼ਲਤਾ ਜਾਂ ਸੁਧਾਰਾਂ ਲਈ ਜ਼ਰੂਰੀ ਹੋ ਸਕਦੀਆਂ ਹਨ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "ਇਹ ਕੂਕੀਜ਼ ਉਪਭੋਗਤਾ ਦੀਆਂ ਤਰਜੀਹਾਂ ਨੂੰ ਯਾਦ ਰੱਖਦੀਆਂ ਹਨ, ਜਿਵੇਂ ਕਿ ਭਾਸ਼ਾ, ਮੁਦਰਾ ਅਤੇ ਥੀਮ ਸੈਟਿੰਗਜ਼, ਇੱਕ ਅਨੁਕੂਲ ਬ੍ਰਾਊਜ਼ਿੰਗ ਅਨੁਭਵ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਜੋ ਵਿਅਕਤੀਗਤ ਜ਼ਰੂਰਤਾਂ ਨਾਲ ਮੇਲ ਖਾਂਦੀ ਹੈ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "ਸੁਰੱਖਿਆ ਕੂਕੀਜ਼ ਪ੍ਰਮਾਣਿਕਤਾ, ਧੋਖਾਧਡ਼ੀ ਦੀ ਰੋਕਥਾਮ ਅਤੇ ਸੁਰੱਖਿਅਤ ਬ੍ਰਾਊਜ਼ਿੰਗ ਨੂੰ ਸਮਰੱਥ ਬਣਾ ਕੇ ਉਪਭੋਗਤਾ ਡੇਟਾ ਦੀ ਸੁਰੱਖਿਆ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਦੀਆਂ ਹਨ। ਉਹ ਇਹ ਸੁਨਿਸ਼ਚਿਤ ਕਰਦੇ ਹਨ ਕਿ ਸੰਵੇਦਨਸ਼ੀਲ ਜਾਣਕਾਰੀ, ਜਿਵੇਂ ਕਿ ਲੌਗਇਨ ਪ੍ਰਮਾਣ ਪੱਤਰ, ਐਨਕ੍ਰਿਪਟਡ ਕੁਨੈਕਸ਼ਨਾਂ ਉੱਤੇ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਪ੍ਰਸਾਰਿਤ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "sa": {
      "acceptAll": "सर्वं स्वीकरोतु",
      "accept": "स्वीकरोतु",
      "decline": "सर्वं निराकरोतु",
      "acceptSelected": "चयनं स्वीकरोतु",
      "ok": "सर्वं स्वीकरोतु",
      "consentNotice": {
        "description": "वयं भवतः गोपनीयतायाः आदरं कुर्वन्ति, वयं आवश्यक-जालपुट-कार्यक्षमतां, अपि च विपणनं, वैयक्तिकरणं, विश्लेषणं च समर्थयितुं कुकीस् सञ्चालयामः। \"सर्वान् स्वीकरोतु\" इति क्लिक् कृत्वा, भवान् अस्माकं कुकीस् इत्यस्य उपयोगाय सम्मतिं ददति। भवान् कस्मिंश्चित् अपि स्वस्य सेट्टिङ्ग्स् परिवर्तयितुं शक्नोति। कुकी नीतिः।",
        "learnMore": "कस्टमैस् कुरु",
        "changeDescription": " "
      },
      "save": "स्वीकरोतु",
      "consentModal": {
        "title": "सहमतिप्राधान्यतां स्वकीयीकरोतु",
        "description": "वयं कुकीस् इत्येतान् भवतां पृष्ठानां मध्ये दक्षतया मार्गनिर्देशयितुं, भवतः प्राथमिकतां सञ्चारं कर्तुं, सामान्यतया भवतः जालपुटानुभवं वर्धयितुं च उपयुज्यामः। तथापि, वयं भवतः गोपनीयतायाः अधिकारम् अङ्गीकृष्यामः, अतः भवान् केषुचित् प्रकाराणां कुकीस् इत्येतान् न अनुमन्येताम् इति चयनं कर्तुं शक्नोति। विभिन्नवर्गस्य शीर्षकेषु क्लिक् कुर्वन्तु, येन अधिकं ज्ञातुं, अस्मैः पूर्वनिर्धारितानि सेट्टिङ्ग्स् च परिवर्तयितुं शक्नुयात्। कृपया लक्षयतु यत् कतिपयप्रकाराणां कुकीस् इत्येतान् अवरुद्धं कुर्वन् भवतः जालपुटस्य अनुभवः प्रभावितः भवेत्।",
        "buttons": {
          "save": "स्वीकरोतु",
          "acceptAll": "सर्वं स्वीकरोतु",
          "decline": "सर्वं निराकरोतु"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सर्वं निराकरोतु",
          "title": "सर्वं निराकरोतु"
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
      "functional": {
        "title": "Functional",
        "description": "वयं एतान् कुकीस् इत्येतान् जालपुटस्य कार्यक्षमतां वर्धयितुं तथा उपयोक्तृानुभवं वर्धयितुं उपयुज्यामः। सूचनायां प्रवेश-दत्तांशः, प्रदेशः, भाषा, वर्धित-विषयवस्तु च भवितुम् अर्हति।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "एते कुकीस् इत्येताः जालपुटस्य यातायातस्य, उपयोक्तृ-व्यवहारस्य, संलग्नता-विन्यासस्य च विश्लेषणार्थं साहाय्यं कुर्वन्ति। सङ्गृहीताः अन्तर्दृष्टयः सामग्रीं अनुकूलतां कर्तुं, उपयोगितां वर्धयितुं, समग्र-जालस्थल-प्रदर्शनं च वर्धयितुं साहाय्यं कुर्वन्ति।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "एताः कुकीस्-विशेषाः अस्माकं विज्ञापन-सहभागिभिः व्यक्तिगत-विज्ञापनं दातुं, विपणन-अभियानानां प्रभावशीलतां मापयितुं च उपयुज्यन्ते। ते उपयोक्तृ-रुचिभिः, विहरण-व्यवहारस्य च आधारेण प्रासङ्गिक-प्रचारान् प्रदातुं साहाय्यं कुर्वन्ति।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "अस्मिन् वर्गे कुकीस् इत्येतानि अन्तर्भवन्ति यानि पूर्वनिर्धारितेषु वर्गेषु न योजयन्ति परन्तु कतिपय-जालपुट-क्रियात्मकतायै वा सुधाराय वा आवश्यकानि भवितुम् अर्हन्ति।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "एते कुकी-विशेषाः उपयोक्तृ-प्राथमिकतां यथा भाषा, मुद्रा, विषय-विन्यासं च स्मर्यन्ति, येन व्यक्तिगत-आवश्यकतानां अनुरूपं विहरणानुभवः प्रदत्ता भवति।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा-कुकी-विशेषाः प्रमाणीकरणं, कपट-निवारणं, सुरक्षित-निरीक्षणं च समर्थयित्वा उपयोक्तृ-दत्तांशस्य संरक्षणे साहाय्यं कुर्वन्ति। ते सुनिश्चितं कुर्वन्ति यत् संवेदनायुक्तसूचनाः, यथा प्रवेशप्रमाणपत्राणि, एन्क्रिप्टेड्-सम्पर्केषु सुरक्षिततया प्रेष्यन्ते इति।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "doi": {
      "acceptAll": "सब स्वीकार करो",
      "accept": "मंजूर करो",
      "decline": "सब को खारिज कर दे",
      "acceptSelected": "चयनित स्वीकार करना",
      "ok": "सब स्वीकार करो",
      "consentNotice": {
        "description": "अस तुंदी गोपनीयता दा आदर करने आं अस कुकीज़ गी संग्रहीत करदे आं तां जे जरूरी साइट दी कार्यक्षमता, ते कन्नै गै मार्केटिंग, निजीकरण ते विश्लेषण गी सक्षम बनाया जाई सकै। &quot;सभनें गी स्वीकार करो&quot; पर क्लिक करियै, तुस कुकीज़ दे साढ़े इस्तेमाल लेई सहमति दिंदे ओ। तुस कुसै बी समें उप्पर अपनी सेटिंग्स बदली सकदे ओ। कुकी नीति।",
        "learnMore": "अनुकूलित करो",
        "changeDescription": " "
      },
      "save": "मंजूर करो",
      "consentModal": {
        "title": "सहमति प्राथमिकताएं गी अनुकूलित करो",
        "description": "अस कुकीज़ दा इस्तेमाल तुसेंगी पन्नें दे बिच्च कुशलता कन्नै नेविगेट करने, तुंदी पसंद गी संग्रहीत करने ते आमतौर पर कुसै वेबसाइट दे तुंदे अनुभव गी बेहतर बनाने च मदद करने आस्तै करदे आं। हालांकि, अस तुंदे गोपनीयता दे अधिकार गी स्वीकार करने आं ते इसलेई तुस किश किस्म दे कुकीज़ दी अनुमति नेईं देने दा विकल्प चुन सकदे ओ। होर जानने लेई ते साढ़ी डिफाल्ट सेटिंग्स बदलने लेई बक्ख-बक्ख श्रेणी हेडिंगें पर क्लिक करो। कृपा करियै ध्यान देओ जे किश किस्म दे कुकीज़ गी ब्लॉक करने कन्नै साइट दे तुंदे अनुभव गी प्रभावित करी सकदा ऐ।",
        "buttons": {
          "save": "मंजूर करो",
          "acceptAll": "सब स्वीकार करो",
          "decline": "सब को खारिज कर दे"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सब को खारिज कर दे",
          "title": "सब को खारिज कर दे"
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
      "functional": {
        "title": "Functional",
        "description": "अस इन्हें कुकीज़ दा इस्तेमाल वेबसाइट दी कार्यक्षमता गी बधाने ते बरतूनी दे अनुभव गी बेहतर बनाने लेई करदे आं। सूचना च लॉगिन डेटा, क्षेत्र, भाशा, ते बधाए गेदे सामग्री शामल होई सकदी ऐ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "एह् कुकीज़ असेंगी वेबसाइट ट्रैफिक, बरतूनी व्यवहार, ते रूज्झे दे पैटर्न दा विश्लेषण करने च मदद करदियां न। इकट्ठी कीती गेदी अंतर्दृष्टि असेंगी सामग्री गी अनुकूल बनाने, उपयोगिता गी बधाने ते समग्र साइट दे प्रदर्शन च सुधार करने दी अनुमति दिंदी ऐ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "इनें कुकीज़ दा इस्तेमाल साढ़े विज्ञापन साझेदारें आसेआ निजीकृत विज्ञापन देने ते विपणन अभियानें दी प्रभावशीलता गी मापने लेई कीता जंदा ऐ। एह् बरतूनी दी रुचि ते ब्राउज़िंग व्यवहार दे आधार उप्पर प्रासंगिक प्रचार देने च मदद करदे न।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "इस श्रेणी च कुकीज़ शामल न जेह् ड़ियां पैह् ले थमां गै परिभाशत श्रेणियें च फिट नेईं होंदियां न पर किश वेबसाइटें दी कार्यक्षमताएं जां सुधारें लेई जरूरी होई सकदियां न।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "एह् कुकीज़ बरतूनी दी पसंद, जि’यां भाशा, मुद्रा, ते थीम सेटिंग्स गी याद करदे न, तां जे इक अनुकूलित ब्राउज़िंग अनुभव उपलब्ध करोआया जाई सकै जेह् ड़ा व्यक्तिगत जरूरतें कन्नै मेल खंदा ऐ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा कुकीज़ प्रमाणीकरण, धोखाधड़ी रोकथाम ते सुरक्षत ब्राउज़िंग गी सक्षम करियै बरतूनी दे डेटा दी सुरक्षा च मदद करदी ऐ। एह् इस गल्लै गी सुनिश्चत करदे न जे संवेदनशील जानकारी, जि’यां लॉग इन क्रेडेंशियल्स, एन्क्रिप्टेड कनेक्शनें पर सुरक्षत रूप कन्नै प्रसारित कीती जंदी ऐ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "te": {
      "acceptAll": "అన్నింటినీ అంగీకరించండి",
      "accept": "అంగీకరించు",
      "decline": "అన్నింటినీ తిరస్కరించండి",
      "acceptSelected": "ఎంచుకున్న వాటిని అంగీకరించండి",
      "ok": "అన్నింటినీ అంగీకరించండి",
      "consentNotice": {
        "description": "మేము మీ గోప్యతను గౌరవిస్తాము. సైట్ యొక్క ముఖ్యమైన కార్యాచరణను, అలాగే మార్కెటింగ్, వ్యక్తిగతీకరణ మరియు విశ్లేషణలను ప్రారంభించడానికి మేము కుకీలను నిల్వ చేస్తాము. “అన్నింటినీ అంగీకరించు”పై క్లిక్ చేయడం ద్వారా, మీరు మా కుకీల వినియోగానికి సమ్మతిస్తున్నారు. మీరు మీ సెట్టింగ్‌లను ఎప్పుడైనా మార్చుకోవచ్చు. కుకీ విధానం.",
        "learnMore": "అనుకూలీకరించండి",
        "changeDescription": " "
      },
      "save": "అంగీకరించు",
      "consentModal": {
        "title": "సమ్మతి ప్రాధాన్యతలను అనుకూలీకరించండి",
        "description": "పేజీల మధ్య సమర్థవంతంగా నావిగేట్ చేయడానికి, మీ ప్రాధాన్యతలను నిల్వ చేయడానికి, మరియు సాధారణంగా వెబ్‌సైట్‌తో మీ అనుభవాన్ని మెరుగుపరచడానికి మేము కుకీలను ఉపయోగిస్తాము. అయితే, మేము మీ గోప్యతా హక్కును గుర్తిస్తాము, కాబట్టి మీరు కొన్ని రకాల కుకీలను అనుమతించకూడదని ఎంచుకోవచ్చు. మరింత తెలుసుకోవడానికి మరియు మా డిఫాల్ట్ సెట్టింగ్‌లను మార్చడానికి వివిధ వర్గాల శీర్షికలపై క్లిక్ చేయండి. దయచేసి గమనించండి, కొన్ని రకాల కుకీలను బ్లాక్ చేయడం వలన సైట్‌తో మీ అనుభవం ప్రభావితం కావచ్చు.",
        "buttons": {
          "save": "అంగీకరించు",
          "acceptAll": "అన్నింటినీ అంగీకరించండి",
          "decline": "అన్నింటినీ తిరస్కరించండి"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "అన్నింటినీ తిరస్కరించండి",
          "title": "అన్నింటినీ తిరస్కరించండి"
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
      "functional": {
        "title": "Functional",
        "description": "వెబ్‌సైట్ పనితీరును మెరుగుపరచడానికి మరియు వినియోగదారు అనుభవాన్ని మెరుగుపరచడానికి మేము ఈ కుకీలను ఉపయోగిస్తాము. ఈ సమాచారంలో లాగిన్ డేటా, ప్రాంతం, భాష మరియు మెరుగైన కంటెంట్ వంటివి ఉండవచ్చు.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ఈ కుకీలు వెబ్‌సైట్ ట్రాఫిక్, వినియోగదారు ప్రవర్తన మరియు ఎంగేజ్‌మెంట్ ప్యాటర్న్‌లను విశ్లేషించడానికి మాకు సహాయపడతాయి. సేకరించిన అంతర్దృష్టులు కంటెంట్‌ను ఆప్టిమైజ్ చేయడానికి, వినియోగ సౌలభ్యాన్ని మెరుగుపరచడానికి మరియు మొత్తం సైట్ పనితీరును మెరుగుపరచడానికి మాకు వీలు కల్పిస్తాయి.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "మా ప్రకటనల భాగస్వాములు వ్యక్తిగతీకరించిన ప్రకటనలను అందించడానికి మరియు మార్కెటింగ్ ప్రచారాల ప్రభావాన్ని కొలవడానికి ఈ కుకీలను ఉపయోగిస్తారు. ఇవి వినియోగదారుల ఆసక్తులు మరియు బ్రౌజింగ్ ప్రవర్తన ఆధారంగా సంబంధిత ప్రమోషన్‌లను అందించడంలో సహాయపడతాయి.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ఈ వర్గంలో ముందుగా నిర్వచించిన వర్గాలలోకి సరిపోని కుకీలు ఉంటాయి, కానీ అవి కొన్ని వెబ్‌సైట్ కార్యాచరణలకు లేదా మెరుగుదలలకు అవసరం కావచ్చు.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "personalization": {
        "title": "Personalization",
        "description": "ఈ కుకీలు భాష, కరెన్సీ మరియు థీమ్ సెట్టింగ్‌ల వంటి వినియోగదారు ప్రాధాన్యతలను గుర్తుంచుకుంటాయి, తద్వారా వ్యక్తిగత అవసరాలకు అనుగుణంగా ఉండే ప్రత్యేకమైన బ్రౌజింగ్ అనుభవాన్ని అందిస్తాయి.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "భద్రతా కుకీలు ప్రామాణీకరణ, మోసాల నివారణ మరియు సురక్షిత బ్రౌజింగ్‌ను సాధ్యం చేయడం ద్వారా వినియోగదారు డేటాను రక్షించడంలో సహాయపడతాయి. లాగిన్ ఆధారాల వంటి సున్నితమైన సమాచారం ఎన్‌క్రిప్టెడ్ కనెక్షన్‌ల ద్వారా సురక్షితంగా ప్రసారం చేయబడుతుందని అవి నిర్ధారిస్తాయి.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
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
  "appName": "Test3",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "Test3",
  "companyAddress": " ",
  "services": [
    {
      "name": "functional",
      "title": "Functional",
      "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;countID</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;number</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>",
      "purposes": [],
      "required": true,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "countID",
        "number"
      ]
    },
    {
      "name": "analytics",
      "title": "Analytics",
      "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga_0000000001</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga_0000000001",
        "_ga"
      ]
    },
    {
      "name": "marketing",
      "title": "Marketing",
      "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;https://cookieconsenttestqa.netlify.app</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "https://cookieconsenttestqa.netlify.app"
      ]
    },
    {
      "name": "others",
      "title": "Others",
      "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">2 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_session_id</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_visit_count</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "qh_session_id",
        "qh_visit_count"
      ]
    },
    {
      "name": "personalization",
      "title": "Personalization",
      "description": "<p>These cookies remember user preferences, such as language, currency, and theme settings, to provide a tailored browsing experience that aligns with individual needs.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_consent_version</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "qh_consent_version"
      ]
    },
    {
      "name": "security",
      "title": "Security",
      "description": "<p>Security cookies help protect user data by enabling authentication, fraud prevention, and secure browsing. They ensure that sensitive information, such as login credentials, is transmitted safely over encrypted connections.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;qh_form_state</div><div><b>Host:</b>&nbsp;cookieconsenttestqa.netlify.app</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "qh_form_state"
      ]
    }
  ]
};
showCookie();