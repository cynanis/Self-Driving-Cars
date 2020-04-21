
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"126",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".match(\/[^.]*\\.[^.]{2,3}(?:\\.[^.]{2,3})?$\/)[0]})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",2],8,16],".pathname.split(\".\");return 1\u003Ca.length?a.pop().toUpperCase():\"HTML\"}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",2],8,16],".pathname.split(\"\/\").pop()}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003CjQuery(",["escape",["macro",2],8,16],").closest(\"#login-window\").length?\"true\":\"false\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003CjQuery(",["escape",["macro",2],8,16],").closest(\"[id^\\x3dshare-this-container-]\").length?\"true\":\"false\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(\"#library-item-container\").attr(\"data-item-number\");return a})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"QUERY"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.hostname.split(\".\")[0],b=\/www$|my|^asq|ebusiness|secure|careers|gsa|rube|prdweb|video\/i,c=\/staging|beta|test|cd|content|communityasq\/i,d=\/develop|replaceme\/i;return b.test(a)?\"production\":c.test(a)?\"staging\":d.test(a)?\"develop\":\"notfound\"})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[\"^asq.org\",\".asq.org\"],b=\/https?:\\\/\\\/([^\/:]+)\/.exec(",["escape",["macro",11],8,16],");if(b)for(var c=a.length;c--;)if((new RegExp(a[c]+\"$\")).test(b[1]))return null;return ",["escape",["macro",11],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.fbq;return!!a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionProducts"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;var b=",["escape",["macro",14],8,16],";var d=b.length;var c=[];id=\"'id': \";quantity=\",'quantity': \";itemPrice=\",'item_price': \";for(a=0;a\u003Cd;a++){var e=b[a].sku;var f=b[a].quantity;var g=b[a].price;c.push({id:e,quantity:f,itemPrice:g})}return c})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",16],8,16],".split(\"\/\")[1].replace(\".html\",\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,b=a.getTime();b+=24192E5;a.setTime(b);return a=a.toGMTString()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=location.href;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(\".col-lg-3 img\").attr(\"src\");a=a.substr(0,a.lastIndexOf(\"?\"));return\"https:\/\/asq.org\"+a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionShipping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTax"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",21],8,16],"-",["escape",["macro",22],8,16],"-",["escape",["macro",23],8,16],";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(\"meta[name\\x3dDCS.dcssta]\").attr(\"content\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.pathname+document.location.search+document.location.hash;return-1\u003Ca.indexOf(\"\/search\")?a.replace(\"#\",\"?\"):a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(\"div.topic-list-topic \\x3e div.userInfo \\x3e div.user-list-image \\x3e span.user-name-link \\x3e a\").attr(\"title\").split(\"'\")[0].split(\"View\")[1].trim();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(\"div.forums_view_topic \\x3e header \\x3e div\").text().trim().split(\" \").first();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.title.split(\" - \")[0];return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(\"#instructor-detail-container \\x3e div \\x3e div \\x3e div.basic-details \\x3e img\").attr(\"src\").split(\"?\")[0];return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(\"h3.basic-details__subtitle\").text().trim();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=jQuery(\"h1.basic-details__title\").text().trim();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003Cwindow.location.href.indexOf(\"?\")?\"true\":\"false\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){window.jQuery?console.log(\"jQuery Ready\"):console.log(\"jQuery Not Ready\");var a=jQuery(\"strong:contains('bstract')\"),b=jQuery(\"h2:contains('bstract')\");if(0\u003Ca.length+b.length)return console.log(\"abstract found\"),\"true\";console.log(\"no abstract found\");return\"false\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__dbg"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"MGICookie"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",10],
      "vtp_defaultValue":"UA-411753-18",
      "vtp_map":["list",["map","key","production","value","UA-411753-20"],["map","key","staging","value","UA-411753-18"]]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":false,
      "vtp_varType":"URL",
      "vtp_component":"HOST"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"QUERY",
      "vtp_queryKey":"item"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"visitorLoginState"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"description"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionId"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"MGICookie2"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","2018 ASQ Lean and Six Sigma Conference"],["map","key","\/conferences\/wcqi","value","2018 ASQ World Conference on Quality and Improvement"],["map","key","\/conferences\/quality-space-defense","value","2018 Collaboration on Quality in the Space and Defense Industries"],["map","key","\/conferences\/inspection-division","value","2018 ASQ Inspection Division Conference"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","https:\/\/asq.org\/conferences\/six-sigma\/about"],["map","key","\/conferences\/wcqi","value","https:\/\/asq.org\/conferences\/wcqi\/about"],["map","key","\/conferences\/quality-space-defense","value","https:\/\/asq.org\/conferences\/quality-space-defense\/about"],["map","key","\/conferences\/inspection-division","value","https:\/\/asq.org\/conferences\/inspection-division"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","https:\/\/asq.org\/-\/media\/Images\/LSSC\/pointe-hilton-entrance.jpg"],["map","key","\/conferences\/wcqi","value","https:\/\/asq.org\/-\/media\/Images\/WCQI\/WCQI_2018_Misc_photo_2.jpg"],["map","key","\/conferences\/quality-space-defense","value","https:\/\/asq.org\/-\/media\/Images\/CQSDI\/qsdi-visual2.jpg"],["map","key","\/conferences\/inspection-division","value","https:\/\/asq.org\/-\/media\/ASQ\/Images\/Logos\/logo.png"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","Do you have technical proficiencies and leadership responsibilities within your organization? Are you actively involved in process improvement, organizational change, and development dynamics related to a successful Lean and Six Sigma Culture? This conference is for you!"],["map","key","\/conferences\/wcqi","value","Premier quality conference from ASQ - gain knowledge, improvement methodologies, quality tools, best practices, and networking contacts."],["map","key","\/conferences\/quality-space-defense","value","If you work with an organization that is involved in the space and defense industry, this event will be your most important and rewarding professional experience for 2018. It includes government and industry leaders who will discuss the latest policies and practices that directly affect your organization."],["map","key","\/conferences\/inspection-division","value","The 2018 ASQ Inspection Division conference is an important stop on ones quality journey. The conference will help individuals and organizations bridge the gaps between remembering, understanding and contributing."]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"item",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1===",["escape",["macro",1],8,16],".indexOf(",["escape",["macro",43],8,16],")?!0:!1})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","2018-02-26T07:15"],["map","key","\/conferences\/wcqi","value","2018-04-30"],["map","key","\/conferences\/quality-space-defense","value","2018-03-12"],["map","key","\/conferences\/inspection-division","value","2018-02-26T07:15"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","Pointe Hilton Tapatio Cliffs"],["map","key","\/conferences\/wcqi","value","Washington State Convention Center"],["map","key","\/conferences\/quality-space-defense","value","Radisson Resort At The Port"],["map","key","\/conferences\/inspection-division","value","Fogelman Executive Conference Center and Hotel"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","11111 N. Seventh Street"],["map","key","\/conferences\/wcqi","value","705 Pike Street"],["map","key","\/conferences\/quality-space-defense","value","8701 Astronaut Boulevard"],["map","key","\/conferences\/inspection-division","value","330 Innovation Drive, Suite 206"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","Phoenix"],["map","key","\/conferences\/wcqi","value","Seattle"],["map","key","\/conferences\/quality-space-defense","value","Cape Canaveral"],["map","key","\/conferences\/inspection-division","value","Memphis"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","85020"],["map","key","\/conferences\/wcqi","value","98101"],["map","key","\/conferences\/quality-space-defense","value","32920"],["map","key","\/conferences\/inspection-division","value","38152-6481"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","AZ"],["map","key","\/conferences\/wcqi","value","WA"],["map","key","\/conferences\/quality-space-defense","value","FL"],["map","key","\/conferences\/inspection-division","value","TN"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",16],
      "vtp_defaultValue":"US",
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","US"],["map","key","\/conferences\/wcqi","value","US"],["map","key","\/conferences\/quality-space-defense","value","US"],["map","key","\/conferences\/inspection-division","value","US"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","2018-02-27T17:00"],["map","key","\/conferences\/wcqi","value","2018-05-02"],["map","key","\/conferences\/quality-space-defense","value","2018-03-13"],["map","key","\/conferences\/inspection-division","value","2018-09-15T17:00"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","1295.00"],["map","key","\/conferences\/wcqi","value","1095.00"],["map","key","\/conferences\/quality-space-defense","value","495.00"],["map","key","\/conferences\/inspection-division","value","299.00"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",16],
      "vtp_defaultValue":"USD",
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","USD"],["map","key","\/conferences\/wcqi","value","USD"],["map","key","\/conferences\/quality-space-defense","value","USD"],["map","key","\/conferences\/inspection-division","value","USD"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","http:\/\/schema.org\/InStock"],["map","key","\/conferences\/wcqi","value","http:\/\/schema.org\/InStock"],["map","key","\/conferences\/quality-space-defense","value","http:\/\/schema.org\/InStock"],["map","key","\/conferences\/inspection-division","value","http:\/\/schema.org\/InStock"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/conferences\/six-sigma","value","2018-01-13T12:00"],["map","key","\/conferences\/wcqi","value","2018-03-18T12:00"],["map","key","\/conferences\/quality-space-defense","value","2018-01-15T12:00"],["map","key","\/conferences\/inspection-division","value","2018-03-15T12:00"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionAffiliation"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/training\/lean-six-sigma-green-belt-training-ssg","value","Lean Six Sigma Green Belt Training"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/training\/lean-six-sigma-green-belt-training-ssg","value","https:\/\/asq.org\/training\/lean-six-sigma-green-belt-training-ssg"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/training\/lean-six-sigma-green-belt-training-ssg","value","This lean course teaches you the define-measure-analyze-improve-control methodology using case studies from several industries. You will learn to define improvement projects to satisfy the customer and reduce variation."]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/training\/lean-six-sigma-green-belt-training-ssg","value","onsite"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/training\/lean-six-sigma-green-belt-training-ssg","value","23 Feb 2018"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/training\/lean-six-sigma-green-belt-training-ssg","value","Hilton Garden Inn Orlando at SeaWorld"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","\/training\/lean-six-sigma-green-belt-training-ssg","value","15 Jan 2018"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"author"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",37],
      "vtp_fieldsToSet":["list",["map","fieldName","useAmpClientId","value","true"],["map","fieldName","referrer","value",["macro",12]],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",38]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-411753-22",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"PROTOCOL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar c=document.createElement(\"link\");c.rel=\"canonical\";c.href=[location.protocol,\"\/\/\",location.host,location.pathname].join(\"\");document.head.appendChild(c);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",37],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","referrer","value",["macro",12]],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",38]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",37],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackType":"TRACK_TRANSACTION",
      "vtp_enableLinkId":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTransaction":true,
      "tag_id":2
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":"335446",
      "tag_id":3
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":["macro",41],
      "vtp_conversionId":"1063052037",
      "vtp_conversionLabel":"bi2bCIvKyQkQhcbz-gM",
      "vtp_url":["macro",42],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":4
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":["macro",41],
      "vtp_conversionId":"1056415724",
      "vtp_conversionLabel":"NRWTCLbBxQgQ7L_e9wM",
      "vtp_url":["macro",42],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":5
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1063052037",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",42],
      "tag_id":6
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"950996768",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",42],
      "tag_id":7
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1056415724",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",42],
      "tag_id":8
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"5175363",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",37],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Outbound Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",43],
      "vtp_eventLabel":["macro",45],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",37],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"File Downloads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",3],
      "vtp_eventLabel":["macro",4],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",37],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Login Menu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",46],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",37],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Login Menu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Open",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",37],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Login Menu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Submit",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",37],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Shares",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",46],
      "vtp_eventLabel":["template",["macro",16],"?",["macro",8]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":["macro",37],
      "vtp_eventCategory":"Add To Cart",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",7],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",16]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",37],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Buy Now",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",49],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Homepage Carousel",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",47],
      "vtp_eventLabel":["macro",45],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Homepage MGR",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",47],
      "vtp_eventLabel":["macro",45],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"]],
      "vtp_eventCategory":"Homepage Dashboard",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",48],
      "vtp_eventLabel":["macro",45],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Login Menu",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Failed Login",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"login",
      "vtp_eventLabel":["macro",16],
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__asp",
      "once_per_event":true,
      "vtp_pixelId":"OXSONXHQWREEDE2VIYHU4Y",
      "vtp_customerId":"IJ6KRMC7V5FGJNGH346DDT",
      "vtp_conversionValueCurrency":"USD",
      "vtp_conversionValueInDollars":["macro",24],
      "tag_id":43
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"404 Response",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",40],
      "vtp_eventLabel":["macro",11],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":["macro",37],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","referrer","value",["macro",12]],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","page","value",["macro",27]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",38]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":60
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Non Interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Abstract Content",
      "vtp_eventLabel":["macro",40],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":77
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2775761_12",
      "tag_id":78
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2775761_13",
      "tag_id":79
    },{
      "function":"__cl",
      "tag_id":80
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2775761_15",
      "tag_id":81
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2775761_16",
      "tag_id":82
    },{
      "function":"__cl",
      "tag_id":83
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2775761_18",
      "tag_id":84
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2775761_19",
      "tag_id":85
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2775761_20",
      "tag_id":86
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2775761_21",
      "tag_id":87
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2775761_28",
      "tag_id":88
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2775761_29",
      "tag_id":89
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2775761_30",
      "tag_id":90
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{ \"@context\" : \"http:\/\/schema.org\",\n  \"@type\" : \"Organization\",\n  \"name\" : [ \"ASQ\", \n    \"American Society For Quality\"],\n  \"url\" : \"https:\/\/asq.org\",\n  \"logo\": \"https:\/\/asq.org\/-\/media\/ASQ\/Images\/Logos\/logo.png\",\n  \"sameAs\" : [\"https:\/\/en.wikipedia.org\/wiki\/American_Society_for_Quality\", \n    \"https:\/\/www.facebook.com\/ASQ\",\n    \"https:\/\/twitter.com\/asq\",\n    \"https:\/\/www.linkedin.com\/company\/asq\",\n    \"https:\/\/www.youtube.com\/user\/ASQhq\"],\n  \"contactPoint\" : [\n    { \"@type\" : \"ContactPoint\",\n      \"telephone\" : \"+1-800-248-1946\",\n      \"contactType\" : \"customer service\"\n    } ]\n}\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.membershipType=jQuery(\".ProductNameDisplay\").text().split(\" \")[0].toLowerCase();jQuery(document).ready(function(){1\u003C=jQuery(\"#mainwf_0_singlecolumnwf_0_ctl00_UserRegistrationControl_ContentPanelPanel #mainwf_0_singlecolumnwf_0_ctl00_UserRegistrationControl_EmailAddressTextBox\").length\u0026\u0026(hj(\"vpv\",\"\/\"+membershipType+\"-membership\/step-1\"),applyClickTrack())});\nfunction applyClickTrack(){jQuery(\"#mainwf_0_singlecolumnwf_0_ctl00_UserRegistrationControl_ContentPanelPanel #mainwf_0_singlecolumnwf_0_ctl00_UserRegistrationControl_LookupButton\").click(function(){pollHJ(function(){return 0\u003CjQuery(\"#mainwf_0_singlecolumnwf_0_ctl00_UserRegistrationControl_ContentPanelPanel #mainwf_0_singlecolumnwf_0_ctl00_UserRegistrationControl_LastNameTextBox\").length})})}\nfunction pollHJ(b,f,g,c,a){var d=Number(new Date)+(c||2E3);a=a||1500;(function e(){b()?hj(\"vpv\",\"\/\"+membershipType+\"-membership\/step-2\"):Number(new Date)\u003Cd?setTimeout(e,a):(console.log(\"element not found\"),applyClickTrack())})()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":22
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"http:\/\/schema.org\",\n  \"@type\": \"NewsArticle\",\n  \"mainEntityOfPage\": {\n    \"@type\": \"WebPage\",\n    \"@id\": \"http:\/\/asq.org\/quality-progress\/2017\/09\/statistics\/better-intelligence.html\"\n  },\n  \"headline\": \"Better Intelligence\",\n  \"image\": \"http:\/\/asq.org\/cms_prd_consump\/groups\/public\/documents\/web_asset\/121313.jpg\",\n  \"datePublished\": \"2017-10-09T08:00:00+08:00\",\n  \"dateModified\": \"2017-10-09T09:20:00+08:00\",\n  \"author\": {\n    \"@type\": \"Person\",\n    \"name\": \"Kishore Erukulapati\"\n  },\n  \"publisher\": {\n     \"name\": \"ASQ-Quality Progress\",\n     \"@type\": \"Organization\",\n     \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"http:\/\/asq.org\/cms_prd_consump\/groups\/public\/documents\/web_asset\/121313.jpg\"\n     }\n  },\n  \"description\": \"Incorporating advanced analytics with lean Six Sigma can lead to more effective decision making and problem solving\",\n  \"isAccessibleForFree\": \"False\",\n  \"hasPart\":\n    {\n    \"@type\": \"WebPageElement\",\n    \"isAccessibleForFree\": \"False\",\n    \"cssSelector\" : \".paywall\"\n    }\n}\n\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!1;fbq(\"init\",\"372198456487649\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=372198456487649\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":28
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=1056415724,google_conversion_label=\"M7HOCIOrwngQ7L_e9wM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/1056415724\/?label=M7HOCIOrwngQ7L_e9wM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":29
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"http:\/\/schema.org\",\n  \"@type\": \"Course\",\n \t\"name\" : \"",["escape",["macro",53],7],"\",\n  \"description\": \"",["escape",["macro",54],7],"\",\n  \"url\": \"",["escape",["macro",19],7],"\",\n  \"provider\": {\n    \"@type\": \"Organization\",\n    \"name\": \"ASQ\",\n    \"sameAs\": \"https:\/\/en.wikipedia.org\/wiki\/American_Society_for_Quality\"\n  }\n}\n\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{contents:",["escape",["macro",15],8,16],",content_type:\"product\",value:",["escape",["macro",21],8,16],"-",["escape",["macro",22],8,16],"-",["escape",["macro",23],8,16],",currency:\"USD\",content_name:",["escape",["macro",55],8,16],",content_category:",["escape",["macro",56],8,16],"});\u003C\/script\u003E\n      "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Enull==",["escape",["macro",38],8,16],"||\"undefined\"==",["escape",["macro",38],8,16],"?document.cookie=\"MGICookie\\x3d",["escape",["macro",17],7],"; path\\x3d\/\":",["escape",["macro",38],8,16],".includes(",["escape",["macro",17],8,16],")||(document.cookie=\"MGICookie\\x3d",["escape",["macro",38],7],"\/",["escape",["macro",17],7],"; path\\x3d\/\");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(null==",["escape",["macro",56],8,16],"||\"undefined\"==",["escape",["macro",56],8,16],")document.cookie=\"MGICookie2\\x3d",["escape",["macro",17],7],";expires\\x3d ",["escape",["macro",18],7],"; path\\x3d\/\";\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({author:document.querySelector(\"header h4\").innerText.split(\"\\x26amp;\").join(\"\").split(\"#39;\").join(\"\").replace(\/[^A-Za-z0-9 ]\/gi,\"\"),price:document.querySelector(\"h3 span\").innerText.split(\",\").join(\"\").split(\"\\x26amp;\").join(\"\").split(\/=\/).join(\"\"),description:document.querySelector(\"meta\").getAttribute(\"content\").split(\"\\x26amp;\").join(\"\").split(\"#39;\").join(\"\").replace(\/[^A-Za-z0-9 ]\/gi,\"\"),name:document.querySelector(\"h1\").innerText.split(\"\\x26amp;\").join(\"\").split(\"#39;\").join(\"\").replace(\/[^A-Za-z0-9 ]\/gi,\n\"\"),pageurl:document.location.href.split(\",\").join(\"\").split(\"\\x26amp;\").join(\"\").split(\/=\/).join(\"\"),event:\"allBooks\"});\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({description:document.querySelector(\"meta\").getAttribute(\"content\").split(\"\\x26amp;\").join(\"\").split(\"#39;\").join(\"\").replace(\/[^A-Za-z0-9 ]\/gi,\"\"),name:document.querySelector(\"h1\").innerText.split(\"\\x26amp;\").join(\"\").split(\"#39;\").join(\"\").replace(\/[^A-Za-z0-9 ]\/gi,\"\"),event:\"allCourses\"});\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar meta=document.createElement(\"meta\");document.getElementsByTagName(\"head\")[0].appendChild(meta);meta.setAttribute(\"property\",\"og:title\");meta.setAttribute(\"content\",\"",["escape",["macro",57],7],"\");meta=document.createElement(\"meta\");document.getElementsByTagName(\"head\")[0].appendChild(meta);meta.setAttribute(\"property\",\"og:type\");meta.setAttribute(\"content\",\"website\");meta=document.createElement(\"meta\");document.getElementsByTagName(\"head\")[0].appendChild(meta);meta.setAttribute(\"property\",\"og:url\");\nmeta.setAttribute(\"content\",\"",["escape",["macro",58],7],"\");meta=document.createElement(\"meta\");document.getElementsByTagName(\"head\")[0].appendChild(meta);meta.setAttribute(\"property\",\"og:image\");meta.setAttribute(\"content\",\"",["escape",["macro",59],7],"\");meta=document.createElement(\"meta\");document.getElementsByTagName(\"head\")[0].appendChild(meta);meta.setAttribute(\"property\",\"og:description\");meta.setAttribute(\"content\",\"",["escape",["macro",60],7],"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"{\n  \u0026quot;@context\u0026quot;: \u0026quot;http:\/\/schema.org\u0026quot;,\n  \u0026quot;@type\u0026quot;: \u0026quot;Event\u0026quot;,\n  \u0026quot;name\u0026quot;: \u0026quot;2020 ASQ Lean and Six Sigma Conference\u0026quot;,\n  \u0026quot;startDate\u0026quot;: \u0026quot;2020-02-23\u0026quot;,\n  \u0026quot;location\u0026quot;: {\n    \u0026quot;@type\u0026quot;: \u0026quot;Place\u0026quot;,\n    \u0026quot;name\u0026quot;: \u0026quot;Pointe Hilton Tapatio Cliffs\u0026quot;,\n    \u0026quot;address\u0026quot;: {\n      \u0026quot;@type\u0026quot;: \u0026quot;PostalAddress\u0026quot;,\n      \u0026quot;streetAddress\u0026quot;: \u0026quot;11111 N. Seventh Street\u0026quot;,\n      \u0026quot;addressLocality\u0026quot;: \u0026quot;Phoenix\u0026quot;,\n      \u0026quot;postalCode\u0026quot;: \u0026quot;85020\u0026quot;,\n      \u0026quot;addressRegion\u0026quot;: \u0026quot;AZ\u0026quot;,\n      \u0026quot;addressCountry\u0026quot;: \u0026quot;US\u0026quot;\n    }\n  },\n  \u0026quot;image\u0026quot;: \u0026quot;https:\/\/asq.org\/-\/media\/Images\/LSSC\/2020-lean-six-sigma-GettyImages-866010860.jpg\u0026quot;,\n  \u0026quot;description\u0026quot;: \u0026quot;Do you have technical proficiencies and leadership responsibilities within your organization? Are you actively involved in process improvement, organizational change, and development dynamics related to a successful Lean and Six Sigma Culture? This conference is for you!\u0026quot;,\n  \u0026quot;endDate\u0026quot;: \u0026quot;2020-02-25\u0026quot;\n  }\n}",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"http:\/\/schema.org\",\n  \"@type\": \"Event\",\n  \"name\": \"2020 ASQ World Conference on Quality and Improvement\",\n  \"startDate\": \"2020-05-03\",\n  \"location\": {\n    \"@type\": \"Place\",\n    \"name\": \"\",\n    \"address\": {\n      \"@type\": \"PostalAddress\",\n      \"streetAddress\": \"\",\n      \"addressLocality\": \"Columbus\",\n      \"postalCode\": \"\",\n      \"addressRegion\": \"OH\",\n      \"addressCountry\": \"US\"\n    }\n  },\n  \"image\": \"https:\/\/asq.org\/-\/media\/Images\/WCQI\/2020-WCQI-1008492080-2000x600.jpg\",\n  \"description\": \"The World Conference on Quality and Improvement is ASQ’s flagship conference representing a wide array of industries and over 45 countries.\",\n  \"endDate\": \"2020-05-06\"\n  }\n}\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"http:\/\/schema.org\",\n  \"@type\": \"Event\",\n  \"name\": \"2019 ASQ Inspection Division Conference\",\n  \"startDate\": \"2019-09-23\",\n  \"location\": {\n    \"@type\": \"Place\",\n    \"name\": \"Crowne Plaza\",\n    \"address\": {\n      \"@type\": \"PostalAddress\",\n      \"streetAddress\": \"830 Phillips Lane\",\n      \"addressLocality\": \"Louisville\",\n      \"postalCode\": \"40209\",\n      \"addressRegion\": \"KY\",\n      \"addressCountry\": \"US\"\n    }\n  },\n  \"image\": \"https:\/\/asq.org\/-\/media\/Images\/IDC\/2019-inspection-division-conference-hero-image.jpg\",\n  \"description\": \"Join the Inspection Division as it shares knowledge and provide explanation to how quality will serve as a bridge to the future at the 2019 Inspection Division Conference in Louisville, KY from September 23 - 24, 2019.\",\n  \"endDate\": \"2019-09-24\"\n  }\n}\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"http:\/\/schema.org\",\n  \"@type\": \"Event\",\n  \"name\": \"2019 ASQ Quality 4.0 Summit on Thriving in Disruption\",\n  \"startDate\": \"2019-11-18\",\n  \"location\": {\n    \"@type\": \"Place\",\n    \"name\": \"Dallas\/Addison Marriott Quorum by the Galleria\",\n    \"address\": {\n      \"@type\": \"PostalAddress\",\n      \"streetAddress\": \"14901 Dallas Parkway\",\n      \"addressLocality\": \"Dallas\",\n      \"postalCode\": \"75254\",\n      \"addressRegion\": \"TX\",\n      \"addressCountry\": \"US\"\n    }\n  },\n  \"image\": \"https:\/\/asq.org\/-\/media\/Images\/q4-0-conference\/2019-quality-40-933708530-alt-2000x600.jpg\",\n  \"description\": \"To achieve excellence through quality is to embrace the future of quality. It is paramount that quality professionals help their organizations make the vital connection between quality excellence and their ability to thrive in disruption. ASQ’s Quality 4.0 Summit will act as the catalyst for professionals, helping them understand how quality will enable transformation and growth.\",\n  \"endDate\": \"2019-11-19\"\n  }\n}\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"http:\/\/schema.org\",\n  \"@type\": \"Event\",\n  \"name\": \"2019 Collaboration on Quality in the Space and Defense Industries\",\n  \"startDate\": \"2019-03-11\",\n  \"endDate\": \"2019-03-12\",\n  \"url\": \"https:\/\/asq.org\/conferences\/quality-space-defense\",\n  \"location\": {\n    \"@type\": \"Place\",\n    \"name\": \"Radisson Resort At The Port\",\n    \"address\": {\n      \"@type\": \"PostalAddress\",\n      \"streetAddress\": \"8701 Astronaut Boulevard\",\n      \"addressLocality\": \"Cape Canaveral\",\n      \"postalCode\": \"32920\",\n      \"addressRegion\": \"FL\",\n      \"addressCountry\": \"US\"\n    }\n  },\n  \"image\": \"https:\\\/\\\/asq.org\\\/-\\\/media\\\/Images\\\/CQSDI\\\/qsdi-visual2.jpg\",\n  \"description\": \"If you work with an organization that is involved in the space and defense industry, this event will be your most important and rewarding professional experience for 2018. It includes government and industry leaders who will discuss the latest policies and practices that directly affect your organization.\"\n  }\n}\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n \"@context\": \"http:\/\/schema.org\",\n \"@type\": \"Periodical\",\n\"name\": [\"Six Sigma Forum Magazine\",\n\"Lean \u0026 Six Sigma Review Magazine\"],\n \"publisher\": \"ASQ\",\n \"description\": \"The Lean \u0026 Six Sigma Review Magazine provides a holistic view of lean and Six Sigma, from the basics to the boardroom. The magazine addresses the various professional development needs of Six Sigma Executives, Champions, Master Black Belts, Black Belts, Green Belts, and Yellow Belts.\",\n \"sameAs\": \"https:\/\/en.wikipedia.org\/wiki\/American_Society_for_Quality#Publications\"\n} \n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n \"@context\": \"http:\/\/schema.org\",\n \"@type\": \"Periodical\",\n\"name\": \"Journal for Quality and Participation\",\n \"publisher\": \"ASQ\",\n \"description\": \"Themes and topics include leadership, employee involvement, and teamwork. Process improvement in these areas encourages and enables people to participate in decisions that affect quality, customer satisfaction, and the performance of their organizations.\",\n \"sameAs\": \"https:\/\/en.wikipedia.org\/wiki\/American_Society_for_Quality#Publications\"\n} \n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n \"@context\": \"http:\/\/schema.org\",\n \"@type\": \"Periodical\",\n\"name\": \"Journal of Quality Technology\",\n \"publisher\": \"ASQ\",\n \"description\": \"The Journal of Quality Technology is a peer-reviewed publication and is published four times per year.  It is consistently ranked by Journal Citation Report as one of the most cited journals in the areas of industrial engineering, management science, and statistics.\",\n \"sameAs\": \"https:\/\/en.wikipedia.org\/wiki\/American_Society_for_Quality#Publications\"\n} \n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n \"@context\": \"http:\/\/schema.org\",\n \"@type\": \"Periodical\",\n\"name\": \"Quality Management Journal\",\n \"publisher\": \"ASQ\",\n \"description\": \"The Quality Management Journal aims to link the efforts of academic researchers and quality management practitioners by publishing significant research relevant to quality management practice and provide a forum for discussion of such research by academics and practitioners.\",\n \"sameAs\": \"https:\/\/en.wikipedia.org\/wiki\/American_Society_for_Quality#Publications\"\n} \n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n \"@context\": \"http:\/\/schema.org\",\n \"@type\": \"Periodical\",\n\"name\": \"Software Quality Professional\",\n \"publisher\": \"ASQ\",\n \"description\": \"The Software Quality Professional publishes research reports, case studies, experienced-based reports, and perspectives\/issues pieces to provide researchers and practitioners with an understanding of quality practices in modern software-intensive systems in a wide range of industries, applications, and organizational settings.\",\n \"sameAs\": \"https:\/\/en.wikipedia.org\/wiki\/American_Society_for_Quality#Publications\"\n} \n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n \"@context\": \"http:\/\/schema.org\",\n \"@type\": \"Periodical\",\n\"name\": \"Technometrics\",\n \"publisher\": \"ASQ\",\n \"description\": \"Technometrics contributes to the development and use of statistical methods in the physical, chemical, and engineering sciences as well as information sciences and technology. It features papers that describe new statistical techniques; illustrate innovative applications of known statistical methods; or review methods, issues, or philosophy in a particular area of statistics or science.\",\n \"sameAs\": \"https:\/\/en.wikipedia.org\/wiki\/Technometrics\"\n} \n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n \"@context\": \"http:\/\/schema.org\",\n \"@type\": \"Periodical\",\n\"name\": \"Quality Engineering\",\n \"publisher\": \"ASQ\",\n \"description\": \"Quality Engineering is written for professionals in all engineering and management fields interested in quality improvement, this journal provides the widest-ranging coverage of how-we-did-it accomplishments, focusing on comprehensive quality science applications throughout the entire economy and society.\",\n \"sameAs\": \"https:\/\/en.wikipedia.org\/wiki\/Quality_Engineering_(journal)\"\n} \n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n \"@context\": \"http:\/\/schema.org\",\n \"@type\": \"Periodical\",\n\"name\": \"Quality Progress\",\n \"publisher\": \"ASQ\",\n \"description\": \"Quality Progress is ASQ’s flagship publication, read by more people than any other magazine on quality, features in-depth articles describing the application of innovative methods.\",\n \"sameAs\": \"https:\/\/en.wikipedia.org\/wiki\/American_Society_for_Quality#Publications\"\n} \n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/tag.simpli.fi\/sifitag\/00453e70-272f-0137-4eb3-06659b33d47c\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/tag.simpli.fi\/sifitag\/7859dc60-316a-0137-5b99-067f653fa718\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/tag.simpli.fi\/sifitag\/0a840930-3170-0137-e28f-06a9ed4ca31b\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b={\"@context\":\"http:\/\/schema.org\",\"@type\":\"DiscussionForumPosting\",\"@id\":\"",["escape",["macro",40],7],"\",headline:",["escape",["macro",30],8,16],",author:{\"@type\":\"Person\",name:",["escape",["macro",28],8,16],"},interactionStatistic:{\"@type\":\"InteractionCounter\",interactionType:\"http:\/\/schema.org\/CommentAction\",userInteractionCount:",["escape",["macro",29],8,16],"}},a=document.createElement(\"script\");a.type=\"application\/ld+json\";a.innerHTML=JSON.stringify(b,null,2);document.getElementsByTagName(\"head\")[0].appendChild(a)})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":64
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b={\"@context\":\"http:\/\/schema.org\",\"@type\":\"DiscussionForumPosting\",\"@id\":\"",["escape",["macro",40],7],"\",headline:",["escape",["macro",30],8,16],",author:{\"@type\":\"Person\",name:",["escape",["macro",28],8,16],"}},a=document.createElement(\"script\");a.type=\"application\/ld+json\";a.innerHTML=JSON.stringify(b,null,2);document.getElementsByTagName(\"head\")[0].appendChild(a)})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":65
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b={\"@context\":\"http:\/\/schema.org\",\"@type\":\"Person\",image:\"",["escape",["macro",31],7],"\",jobTitle:\"",["escape",["macro",32],7],"\",name:\"",["escape",["macro",33],7],"\",url:\"",["escape",["macro",40],7],"\",worksFor:{\"@type\":\"EducationalOrganization\",name:\"ASQ\"}},a=document.createElement(\"script\");a.type=\"application\/ld+json\";a.innerHTML=JSON.stringify(b,null,2);document.getElementsByTagName(\"head\")[0].appendChild(a)})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":66
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._bcvma=window._bcvma||[];_bcvma.push([\"setAccountID\",\"546637058153697744\"]);_bcvma.push([\"setParameter\",\"WebsiteID\",\"543372997846592738\"]);_bcvma.push([\"addFloat\",{type:\"chat\",id:\"543289886609892152\"}]);_bcvma.push([\"pageViewed\"]);\nvar bcLoad=function(){if(!window.bcLoaded){window.bcLoaded=!0;var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"vmss.boldchat.com\/aid\/546637058153697744\/bc.vms4\/vms.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}};\nwindow.pageViewer\u0026\u0026pageViewer.load?pageViewer.load():\"complete\"==document.readyState?bcLoad():window.addEventListener?window.addEventListener(\"load\",bcLoad,!1):window.attachEvent(\"onload\",bcLoad);\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ca href=\"http:\/\/www.boldchat.com\" title=\"Live Chat Software\" target=\"_blank\"\u003E\u003Cimg alt=\"Live Chat Software\" src=\"https:\/\/vms.boldchat.com\/aid\/546637058153697744\/bc.vmi?wdid=543372997846592738\" border=\"0\" width=\"1\" height=\"1\"\u003E\u003C\/a\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"https:\/\/schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [{\n    \"@type\": \"Question\",\n    \"name\": \"How can I find out the status of my order?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Contact ASQ Customer Care at 800-248-1946 (United States and Canada only) or 414-272-8575 or send an e-mail to help@asq.org. Please provide the invoice or order number if possible.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Is it possible to get tracking information for a shipped order?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Yes. Contact Customer Care at 800-248-1946 (United States and Canada only) or 414-272-8575 or send an e-mail to help@asq.org to request tracking information on anything that has been shipped.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"What is your return policy?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"ASQ will accept the return of any product you purchased from us, as long as it has not been damaged and is still in a condition that can be resold as new. Enclose a note referencing the order or invoice number, and please indicate the reason for your return and whether you're requesting an exchange or a refund. Send the return to: MDS Fulfillment; Attn: Dept 8725; 6555 W. Mill Rd; Milwaukee, WI 53218.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"What payment methods does ASQ accept?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Payment options include Visa, check, MasterCard, American Express, purchase order and money order. Payments must be made in U.S. currency. Checks and money orders must be drawn on a U.S. financial institution. All international orders must be prepaid; no foreign purchase orders. Please make checks payable to ASQ.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Can I download a Quality Press order form?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\":\"You may download an order form for placing a mail or fax order. You may also place your order online. To place an order by phone, contact ASQ Customer Care at 800-248-1946 (United States and Canada only) or 414-272-8575. For help send an e-mail to help@asq.org.\"\n\t  }\n\t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Can I use the ASQ logo?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\":\"Sections or Forums\/Divisions wishing to use the ASQ logo should contact their designated Community Development administrator. Other inquires, contact John Van Slyke, ASQ Communications at jvanslyke@asq.org.\"\n\t  }\n\t  \t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"How do I report a missing issue of a magazine or journal?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\":\"Issues are mailed on the first business day of the publication month. Claims will not be accepted prior to the delivery guidelines listed below. Example: Quality Progress is mailed on May 1. Domestic claims will not be accepted prior to May 8. You may submit your missing issue report online. Domestic: 1 week. Canada\/Mexico air mail: 2 weeks. Canada\/Mexico ground: 4 weeks. International air mail: 3 weeks. International ground: 6 weeks. No claim for missing issues will be accepted after six months following the month of publication of the issue. Multiple claims for a publication should be directed to ASQ Customer Care at 800-248-1946 (United States and Canada only) or 414-272-8575.\"\n\t  }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Does ASQ offer gift certificates?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Gift certificates are available for Quality Press products. You can order gift certificates online or call ASQ Customer Care at 800-248-1946 (United States and Canada only) or 414-272-8575.\"\n    }\n    }]\n  }\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":68
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"https:\/\/schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [{\n    \"@type\": \"Question\",\n    \"name\": \"Is there an annual membership fee?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Yes, there are annual membership fees. Review our membership benefits for the benefits and fees.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"What are the differences between the types of individual memberships that ASQ offers?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Get an overview of the individual memberships or compare the benefits of each.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"What's the best membership for me?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"ASQ offers different types of membership to meet the needs of different customers. Review the options, prices and other information for each type in the benefits matrix and choose the one that's right for you.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Do I receive pricing discounts with any ASQ individual membership?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"\tAll pricing discounts apply if you hold a Student, Professional, Senior, or Fellow membership.  Discounts vary based on product type.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"What is a Technical Community?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\":\"ASQ has a rich history of connecting knowledgeable people around common interests and industries.  More than two dozen member-led Technical Communities help members with similar interests or jobs share their knowledge and resources with peers.  When you join ASQ as a Professional member you can choose to join any and\/or all of the 26 Technical Communities at no additional charge. Many have an online community in myASQ.\"\n\t  }\n\t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"What is a Section?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\":\"\tA section is a group of members within a geographic location. ASQ has more than 250 local, volunteer-run member groups in the United States, Canada, and Mexico.  Sections help you meet other quality professionals in your community.  One section membership is included in your Professional membership. Most sections offer meetings, newsletters, online information, educational courses\/seminars\/conferences and certification exam prep programs. You can also get involved by becoming a section volunteer. Many have an online community in myASQ.\"\n\t  }\n\t  \t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Can I transfer my membership to someone else?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\":\"No. If a company chooses not to renew an employee's membership and wants a different employee to be a member instead, that person would need to start a new membership.\"\n\t  }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Where can I find my Member Number?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Log into asq.org, then go to My Account in the upper blue bar of your screen. Your member number can be found on the right-hand side under Membership Summary.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"How do I change my address and e-mail?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"\tOnce you successfully login, go to My Account in the upper blue bar of your screen. The center of the page displays your contact information.  Simply click on Edit to change your home\/business address or e-mail address. It's that easy!\"\n\t\t  }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"When can I upgrade my membership?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"You can upgrade your student membership at any time by calling Customer Care at 1-800-248-1946 between 7:00 a.m. and 5:00 p.m. Central time on weekdays. Other types of upgrade, such as becoming a Senior member, have additional requirements.\"\n    }\n\t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"How do I request a replacement membership card?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"You can print your membership card for the My Account area of asq.org.  Login, then go to My Account in the upper blue bar of your screen. Print your Membership Card is found in the right-hand column under Membership \u0026 Participation.  You can also e-mail a request for a new card to help@asq.org or call Customer Care at 1-800-248-1946 between 7:00 a.m. and 5:00 p.m. Central time on weekdays.\"\n    }\n\t\t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"I paid my membership fee with a credit card. Are renewal fees automatically charged to that card?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"No. You will need to resubmit your credit card information each time you renew. If you need to make specific payment arrangements, contact Customer Care at help@asq.org or 800-248-1946 (United States and Canada only) or 414-272-8575.\"\n    }\n\t\t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Will I lose my certification if my membership lapses?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"No. Your certification is separate from your ASQ membership. However, some certifications require recertification every three years. You do receive 0.5 recertification units per 12 months of membership and the cost of recertification is higher for nonmembers.\"\n    }\n\t\t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Why am I being charged HST\/GST?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Following a review last year by the Canada Revenue Agency of ASQ's GST\/HST returns, it was determined that ASQ must begin charging GST\/HST on additional products\/services. Prior to the review ASQ had charged GST\/HST on books and subscriptions sold to Canadian residents. The CRA determined that under Canadian tax statutes ASQ must also charge GST\/HST on membership, training, electronic supplies (e-books), exam fees, and all conferences held in Canada. This took effect in January 2019.\"\n    }\n\t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"What happened to Associate membership?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"\tAfter extensive research showing declining Associate membership as well as declining value of Associate member benefits, the ASQ Board of Directors voted to eliminate the Associate membership category, which was discontinued on April 1, 2019. All renewing Associate members were moved to the new Professional category. New benefits were also added to the Professional membership to maximize value, including access to all 26 Technical Communities at no additional cost (formerly $10 each), digital access to the Journal of Quality Technology, and the Quality Management Journal.\"\n    }\n    }]\n  }\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"https:\/\/schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [{\n    \"@type\": \"Question\",\n    \"name\": \"What is a registered visitor?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"A registered visitor is someone who is not an ASQ member but who has provided ASQ with an e-mail address and selected a password. Registering gives you access to more material from ASQ’s archives, and allows you to add on to and save more information in your record to ease potential future interactions with the ASQ.org Web site. Also, employees of ASQ Site and Enterprise Members can become registered visitors to access their certification results.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Do I have to register as a visitor every time I buy something?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"No. Once you are a registered visitor we create a permanent record of your information.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Will I receive any mailings or e-mails from ASQ after registering?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"ASQ places you on our mailing list once you register. But at any time, you may have your name removed from this list. For more information, contact Customer Care at 800-248-1946 (United States and Canada only) or 414-272-8575 or e-mail help@asq.org. You may also reply to any e-mails you receive and ask to opt-out of our e-mail list. (Representatives are available by phone Monday through Friday from 7 a.m. to 5 p.m. Central time.)\"\n    }\n    }]\n  }\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"https:\/\/schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [{\n    \"@type\": \"Question\",\n    \"name\": \"Is there a way to receive updates when a new standard comes out?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Not at this time. ASQ is currently working on this feature but does not offer it yet.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Is there a listing of current standards so I know what the latest versions are?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Not at this time. ASQ is currently developing this feature but it is not available yet.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"If I purchase an e-standard can I print it or share it on my company network?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"No, you can purchase a hard copy for print. The ANSI\/ISO\/ASQ Q9000 Series Standards are available for posting on your company's local area network or Intranet.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"What steps does my company need to take to achieve ISO certification?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"ASQ is currently developing this information for its Web site but it is not available yet.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"How much will it cost my company to become certified?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\":\"This varies depending on each company's situation. ASQ is currently developing information to help guide you, but it is not available online yet.\"\n\t  }\n\t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Can I copy a portion of the standard for a training class I am leading at my company?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\":\"You must request permission to reprint or reproduce any of ASQ's copyrighted materials. The online form is at https:\/\/prdweb.asq.org\/forms\/Reprints\/RequestPermission. Please note: Filling out the form does not constitute receiving permission. ASQ will contact you with details.\"\n\t  }\n\t  \t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Are the standards available in languages other than English?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\":\"ASQ standards are distributed in English only. We sell some standards developed by other organizations which are available in other languages, but this varies by standard. For information on a specific standard please contact Customer Care at 800-248-1946 (United States and Canada only) or 414-272-8575 or e-mail help@asq.org.\"\n\t  }\n    }]\n  }\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":71
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"https:\/\/schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [{\n    \"@type\": \"Question\",\n    \"name\": \"I forgot my password. How do I obtain it?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Click here to have your password e-mailed to you. If you experience difficulty, you may also contact ASQ.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"I forgot my Username. How do I obtain it?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Click here to have your username e-mailed to you. If you experience difficulty, you may also contact ASQ.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"I’m a new visitor to ASQ. How do I log in?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"As you explore ASQ web sites you may encounter content that is only accessible to ASQ Members and registered visitors. Should you encounter this type of content, a log in screen displays and you need to create an account. Upon completing the registration process you will be able to log in using the email and password you entered during account creation. For return visits enter your Username and Password in the log in box which is located throughout the ASQ site.\"\n    }\n }, {\n    \"@type\": \"Question\",\n    \"name\": \"I’m a member of ASQ. How do I log in?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"The first time you log in, enter your Username and Password in the log in box which is located throughout the ASQ site. If you cannot remember your Username or Password use the Forgot Username or Forgot Password links to receive a reset email to your primary email address with ASQ.\"\n    }\n }, {\n    \"@type\": \"Question\",\n    \"name\": \"What can I access when I log in?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Different types of visitors have different levels of access to our materials. Registered Visitors can see and access a wide variety of articles and PDFs from ASQ. They won’t see materials restricted to members, such as articles from our magazines and journals. Subscribers can see what registered visitors can see, as well as articles from the journals or magazines to which they subscribe. Members can access even more materials from our journals and magazines, as well as a much larger archive of quality tools and resources.\"\n    }\n    }]\n  }\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":72
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"http:\/\/schema.org\",\n  \"@type\": \"Event\",\n  \"name\": \"2019 ASQ Audit Division Conference\",\n  \"startDate\": \"2019-10-17\",\n  \"location\": {\n    \"@type\": \"Place\",\n    \"name\": \"Doubletree by Hilton\",\n    \"address\": {\n      \"@type\": \"PostalAddress\",\n      \"streetAddress\": \"5780 Major Boulevard\",\n      \"addressLocality\": \"Orlando\",\n      \"postalCode\": \"32819\",\n      \"addressRegion\": \"FL\",\n      \"addressCountry\": \"US\"\n    }\n  },\n  \"image\": \"https:\/\/asq.org\/-\/media\/Images\/audit-conf\/2019-audit-division-conference-hero-image.jpg\",\n  \"description\": \"Learn how to guide business excellence in the 21st century at the 2019 Audit Division Conference in Orlando, Florida this October 17-18, 2019.\",\n  \"endDate\": \"2019-10-18\"\n  }\n}\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b={\"@context\":\"http:\/\/schema.org\",\"@type\":\"Product\",name:\"",["escape",["macro",53],7],"\",description:\"",["escape",["macro",54],7],"\",image:\"",["escape",["macro",20],7],"\",SKU:\"",["escape",["macro",61],7],"\",offers:{\"@type\":\"Offer\",availability:\"http:\/\/schema.org\/InStock\",price:\"",["escape",["macro",62],7],"\",priceCurrency:\"USD\",url:\"",["escape",["macro",40],7],"\"}},a=document.createElement(\"script\");a.type=\"application\/ld+json\";a.innerHTML=JSON.stringify(b,null,2);document.getElementsByTagName(\"head\")[0].appendChild(a)})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n  \"@context\": \"https:\/\/schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [{\n    \"@type\": \"Question\",\n    \"name\": \"What is the ASQ Certification Verification Registry?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"The ASQ Certification Registry is an up-to-date record of individuals who have earned an ASQ Certification and (where applicable) have maintained it through recertification. The Certification Registry has replaced the previous practice of publishing static certification pass lists online. ASQ's Certification Registry makes it easy for potential employers and others to verify an individual's certification and helps to protect the integrity of your hard-earned credential(s).\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"What Information is Included in The ASQ Certification Registry?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"The ASQ Certification Registry will include only those individuals that have an Active status certification and the following information will be listed: Certificate number, Certification holder's first and last name, Country, City\/State of their primary address, Credential and date earned, Certification status. No personal contact information, such as email, street address, or phone number, are included in the registry. Inclusion in the registry is voluntary. If you have an active certification and prefer not to be listed in the certification registry, you are able to opt out within your ASQ account and your information will not be included. Certified individuals will be opted in by default but are able to opt in or out of the certification registry at any time. Due to GDPR law, all EU residents will need to access their ASQ account and opt in to be included.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Why is ASQ Creating a Certification Registry?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Becoming certified is a point-in-time achievement. The ASQ Standards require 18 recertification units attained through continuing professional development activities for most professional certifications to ensure the certified individual's knowledge and skills remain current. Individuals who do not maintain the recertification requirement may not claim the certificaiton status or use the credential(s) after their name. A Certification Registry makes it easy for potential employers and others to verify an individual's certification.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"What is the Requirement to be Included in the Certification Registry?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Individuals must have an active certification status to be included in the Certification Registry.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"How Can I Check My Certification Status?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\":\"Check your certification status by logging into your ASQ Certification Account at www.asq.org\/cert, selecting My Account, and then selecting My Certifications from the left menu.\"\n\t  }\n\t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"What if I Have an Inactive Status and Would Like to be Included in the Certification Registry?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\":\"Candidates who have an inactive status will not be included on the Certification Registry. To be included, candidates must pass the exam again.\"\n\t  }\n\t  \t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"If I am Pursuing an ASQ Certification, Will I be Included in the Certification Registry?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\":\"No. Only candidates who hold an active certification will be included in the Certification Registry.\"\n\t  }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Will My Personal Information be Shared?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"No. The only information available in the Certification Registry is the certification holder's full name, certificate number, certification status, date earned, country and city\/state of residence.\"\n    }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"What is the Benefit of Being Listed on the Certification Registry?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"All active certifications will be included in the registry. This information makes it easy for employers and recruiters to verify ASQ credentials.\"\n\t\t  }\n  }, {\n    \"@type\": \"Question\",\n    \"name\": \"Is There a Fee to be Included in the Certification Registry?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"No. The ASQ Certification Registry is a benefit to all certified individuals.\"\n    }\n\t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"What if I Choose Not to Participate?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"All active certification holders (apart from EU residents) will be included by default. Individuals whose certification(s) are not active, or who choose not to participate by opting out, will not be included in the Certification Registry.\"\n    }\n\t\t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"How do I Opt Out of the Registry?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"You can opt out by logging into your ASQ Certification Account at www.asq.org\/cert, selecting My Account, and then selecting My Certifications from the left menu. Then on the My Certifications page, click OPT OUT on the right side of the page.\"\n    }\n\t\t  }, {\n    \"@type\": \"Question\",\n    \"name\": \"How Long After Passing My Certification or Recertifying Before My Name Appears in the Registry?\",\n    \"acceptedAnswer\": {\n      \"@type\": \"Answer\",\n      \"text\": \"Please allow up to 30 days after receiving your passing exam results or recertifying to appear in the registry.\"\n     }\n    }]\n  }\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":76
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/search|^\/quality-press\/search|^\/training\/catalog",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"\/store\/cart\/checkout\/thank-you"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"ecommerce",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"summary",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"\/cert\/placeorder",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",43],
      "arg1":"asq.org"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"(^$|((^|,)2775761_12($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"pdf|docx?|xlsx?|txt",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"(^$|((^|,)2775761_13($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"(^$|((^|,)2775761_16($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"Login"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"js-infobox js-infobox--dropdown"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"LOGIN"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"(^$|((^|,)2775761_18($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",46],
      "arg1":"email|facebook|twitter|linkedin",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"(^$|((^|,)2775761_19($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"library-add-to-cart"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"ADD TO CART"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"(^$|((^|,)2775761_20($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"BUY NOW"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"(^$|((^|,)2775761_21($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",47],
      "arg1":"CAR"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"(^$|((^|,)2775761_28($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",47],
      "arg1":"mgr"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"(^$|((^|,)2775761_29($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",47],
      "arg1":"dash"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"(^$|((^|,)2775761_30($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"failed_login"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"failed_login"
    },{
      "function":"_eq",
      "arg0":["macro",51],
      "arg1":"Logged In"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\\\/quality-progress\\\/.*1|^\\\/quality-participation\\\/.*1|^\\\/quality-technology\\\/.*1|^\\\/quality-engineering\\\/.*1|^\\\/quality-management\\\/.*1|^\\\/six-sigma\\\/.*1|^\\\/software-quality\\\/.*1|^\\\/technometrics\\\/.*1|^\\\/teamwork\\\/.*1",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"404"
    },{
      "function":"_re",
      "arg0":["macro",52],
      "arg1":"page not found",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"querySuccess"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"https:\/\/asq.org\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/account\/register\/membership"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/quality-progress\/2017\/09\/statistics\/better-intelligence.html"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",40],
      "arg1":"\/account\/register\/membership\/additional-bio?orderNo="
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"allCourses"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(asq.org|prdweb.asq.org)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"\\\/quality-press\\\/display-item\\?item\\=.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"\\\/training\\\/.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"\\\/training\\\/.*\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",40],
      "arg1":"\\\/training\\\/(catalog|group-training|gsa-contract-holder|instructors|registration).*$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"inspection-division"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/conferences\/six-sigma"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/conferences\/wcqi"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/conferences\/inspection-division"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/conferences\/quality-4-0"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/conferences\/quality-space-defense"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/pub\/sixsigma\/index.html"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/pub\/jqp\/index.html"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/pub\/jqt\/index.html"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/pub\/qmj\/index.html"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/pub\/sqp\/index.html"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/pub\/techno\/index.html"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/pub\/qe\/index.html"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/qualityprogress\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/store\/cart\/checkout\/thank-you"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/discuss\/viewtopic\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/communities\/discuss\/viewtopic\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/training\/instructors\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"asq.org"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/blog"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/customer-services\/faq\/general-help"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/membership\/frequently-asked-questions"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/customer-services\/faq\/registered-visitor"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/customer-services\/faq\/standards"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/customer-services\/faq\/login"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"my.asq.org"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/conferences\/audit-division"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"allBooks"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/cert\/faq\/registry"
    }],
  "rules":[
    [["if",0],["add",1,6,7,8,9,47,48,29,30,32,37,38,39]],
    [["if",2,3],["add",2,4,5,46]],
    [["if",0,4,5],["add",2,4,5]],
    [["if",0,6],["add",2,4,5]],
    [["if",3],["add",3]],
    [["if",8,9],["unless",7],["add",10]],
    [["if",8,10,11],["add",11]],
    [["if",8,12,13],["add",12]],
    [["if",14,15,16],["add",13]],
    [["if",8,12,17,18],["add",14]],
    [["if",8,19,20,21],["add",15]],
    [["if",8,22,23,24],["add",16]],
    [["if",8,25,26],["add",17]],
    [["if",8,27,28],["add",18]],
    [["if",8,29,30],["add",19]],
    [["if",8,31,32],["add",20]],
    [["if",33,34],["add",21]],
    [["if",35,36,37],["add",22]],
    [["if",37],["add",23]],
    [["if",0,38],["add",24]],
    [["if",0,39],["add",24]],
    [["if",40],["add",25]],
    [["if",3,41],["add",26]],
    [["if",0,42],["add",27]],
    [["if",0,43],["add",28,31,33,34,35]],
    [["if",0,44],["add",36]],
    [["if",0,45],["add",40]],
    [["if",3,46],["add",41]],
    [["if",0,36,47],["add",42]],
    [["if",3,48],["add",43]],
    [["if",0,49],["add",44]],
    [["if",50],["add",45]],
    [["if",3,52],["add",49]],
    [["if",3,53],["unless",54,55],["add",50]],
    [["if",0,56],["add",51]],
    [["if",0,57],["add",52]],
    [["if",0,58],["add",53]],
    [["if",0,59],["add",54]],
    [["if",0,60],["add",55]],
    [["if",0,61],["add",56]],
    [["if",0,62],["add",57]],
    [["if",0,63],["add",58]],
    [["if",0,64],["add",59]],
    [["if",0,65],["add",60]],
    [["if",0,66],["add",61]],
    [["if",0,67],["add",62]],
    [["if",0,68],["add",63]],
    [["if",0,69],["add",64]],
    [["if",0,70],["add",65,66,67]],
    [["if",0,71],["add",68]],
    [["if",0,72],["add",69]],
    [["if",0,73],["add",70]],
    [["if",0,74],["add",71]],
    [["if",0,76],["add",72]],
    [["if",0,77],["add",73]],
    [["if",0,78],["add",74]],
    [["if",0,79],["add",75]],
    [["if",0,80],["add",76]],
    [["if",0,81],["add",0]],
    [["if",0,82],["add",77]],
    [["if",83],["add",78]],
    [["if",0,84],["add",79]],
    [["if",0,1],["block",1]],
    [["if",3],["unless",51],["block",47,48]],
    [["if",0,75],["block",71]]]
},
"runtime":[
[],[]
]



};
var aa,da=this||self,ea=function(a){return"boolean"==typeof a},fa=/^[\w+/_-]+[=]{0,2}$/,ha=null;var ia=function(){},ja=function(a){return"function"==typeof a},ka=function(a){return"string"==typeof a},la=function(a){return"number"==typeof a&&!isNaN(a)},ma=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},pa=function(a,b){if(a&&ma(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},qa=function(a,b){if(!la(a)||
!la(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},sa=function(a,b){for(var c=new ra,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ua=function(a){return Math.round(Number(a))||0},va=function(a){return"false"==String(a).toLowerCase()?!1:!!a},wa=function(a){var b=[];if(ma(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},xa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},ya=function(){return(new Date).getTime()},ra=function(){this.prefix="gtm.";this.values={}};ra.prototype.set=function(a,b){this.values[this.prefix+a]=b};ra.prototype.get=function(a){return this.values[this.prefix+a]};ra.prototype.contains=function(a){return void 0!==this.get(a)};
var za=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ca=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Da=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ea=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Fa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ga=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ha=function(a){if(null==a)return String(a);var b=Ga.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ia=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ja=function(a){if(!a||"object"!=Ha(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ia(a,"constructor")&&!Ia(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ia(a,b)},f=function(a,b){var c=b||("array"==Ha(a)?[]:{}),d;for(d in a)if(Ia(a,d)){var e=a[d];"array"==Ha(e)?("array"!=Ha(c[d])&&(c[d]=[]),c[d]=f(e,c[d])):Ja(e)?(Ja(c[d])||(c[d]={}),c[d]=f(e,c[d])):c[d]=e}return c};
var Ka=[],La={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ma=function(a){return La[a]},Na=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ra=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Va={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Wa=function(a){return Va[a]};Ka[7]=function(a){return String(a).replace(Ra,Wa)};
Ka[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ra,Wa)+"'"}};var db=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,eb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},fb=function(a){return eb[a]};Ka[16]=function(a){return a};var ib;
var jb=[],kb=[],lb=[],mb=[],nb=[],pb={},qb,rb,sb,tb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},ub=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!pb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?pb[c](e):ib(c,e,b)},wb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=vb(a[e],b,c));return d},xb=
function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=pb[b];return c?c.priorityOverride||0:0},vb=function(a,b,c){if(ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(vb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=jb[g];if(!h||b.Ac(h))return;c[g]=!0;try{var k=wb(h,b,c);k.vtp_gtmEventId=b.id;d=ub(k,b);sb&&(d=sb.Ff(d,k))}catch(w){b.Yd&&b.Yd(w,Number(g)),d=!1}c[g]=!1;return d;case "map":d=
{};for(var l=1;l<a.length;l+=2)d[vb(a[l],b,c)]=vb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=vb(a[n],b,c);rb&&(m=m||p===rb.vb);d.push(p)}return rb&&m?rb.If(d):d.join("");case "escape":d=vb(a[1],b,c);if(rb&&ma(a[1])&&"macro"===a[1][0]&&rb.jg(a))return rb.vg(d);d=String(d);for(var t=2;t<a.length;t++)Ka[a[t]]&&(d=Ka[a[t]](d));return d;case "tag":var q=a[1];if(!mb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Kd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=yb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},yb=function(a,b,c){try{return qb(wb(a,b,c))}catch(d){JSON.stringify(a)}return null};var zb=function(){var a=function(b){return{toString:function(){return b}}};return{cd:a("convert_case_to"),dd:a("convert_false_to"),ed:a("convert_null_to"),fd:a("convert_true_to"),gd:a("convert_undefined_to"),bh:a("debug_mode_metadata"),ia:a("function"),Se:a("instance_name"),Te:a("live_only"),Ue:a("malware_disabled"),Ve:a("metadata"),eh:a("original_vendor_template_id"),We:a("once_per_event"),yd:a("once_per_load"),zd:a("setup_tags"),Ad:a("tag_id"),Bd:a("teardown_tags")}}();var Ab=null,Db=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];Ab=Bb(a);for(var e=0;e<kb.length;e++){var g=kb[e],h=Cb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<mb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Cb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ab(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Ab(e[g]);if(null===h)return null;
if(h)return!1}return!0},Bb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=yb(lb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Eb,Fb=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.qf&&(l["fix_"+m]=!0),l.Ld=l.Ld||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,F:q.F,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,w,y,x,A){var z=y||x||A||g.test(w)&&w||null,B=document.createElement("div");B.innerHTML=z;r[w]=B.textContent||B.innerText||z});return{tagName:q[1],F:r,jb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.Ld&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Xd=function(){return this[this.length-1]};v.Ec=function(B){var E=this.Xd();return E&&E.tagName&&E.tagName.toUpperCase()===B.toUpperCase()};v.Ef=
function(B){for(var E=0,F;F=this[E];E++)if(F.tagName===B)return!0;return!1};var w=function(B){B&&"startTag"===B.type&&(B.jb=q.test(B.tagName)||B.jb);return B},y=t,x=function(){k="</"+v.pop().tagName+">"+k},A={startTag:function(B){var E=B.tagName;"TR"===E.toUpperCase()&&v.Ec("TABLE")?(k="<TBODY>"+k,z()):l.oh&&r.test(E)&&v.Ef(E)?v.Ec(E)?x():(k="</"+B.tagName+">"+k,z()):B.jb||v.push(B)},endTag:function(B){v.Xd()?l.Sf&&!v.Ec(B.tagName)?x():v.pop():l.Sf&&(y(),z())}},z=function(){var B=k,E=w(y());k=B;if(E&&
A[E.type])A[E.type](E)};t=function(){z();return w(y())}}();return{append:function(q){k+=q},Eg:t,th:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},uh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.zh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.vh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Ah=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.F){var t=m.F[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.jb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.nh=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.vf=a.vf||!b[h]&&h;Eb=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={cf:a,df:a,ef:a,ff:a,rf:a,sf:function(p){return p},done:a,error:function(p){throw p;},Ig:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var w="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,lb:v.defaultView||v.parentWindow,Aa:v,Ob:Eb("",{qf:!0}),mc:[q],Oc:"",Pc:v.createElement(q.nodeName),hb:[],na:[]});p(this.Pc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.na,arguments);for(var q;!this.Gb&&this.na.length;)q=this.na.shift(),"function"===typeof q?this.zf(q):this.Zc(q)};t.prototype.zf=function(q){var r={type:"function",value:q.name||q.toString()};this.Lc(r);q.call(this.lb,this.Aa);this.$d(r)};
t.prototype.Zc=function(q){this.Ob.append(q);for(var r,v=[],w,y;(r=this.Ob.Eg())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.$g(v);w&&this.Yf(r);y&&this.Zf(r)};t.prototype.$g=function(q){var r=this.wf(q);r.Dd&&(r.yc=this.Oc+r.Dd,this.Oc+=r.Ag,this.Pc.innerHTML=r.yc,this.Yg())};t.prototype.wf=function(q){var r=this.mc.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.F){if(!/^noscript$/i.test(x.tagName)){var A=
r++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.F.id&&"ps-style"!==x.F.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.jb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Bh:q,raw:v.join(""),Dd:w.join(""),Ag:y.join("")}};t.prototype.Yg=function(){for(var q,r=[this.Pc];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.mc[p(q,"id")]=q,p(q,"id",null));var w=q.parentNode&&p(q.parentNode,"proxyof");
w&&this.mc[w].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Yf=function(q){var r=this.Ob.clear();r&&this.na.unshift(r);q.src=q.F.src||q.F.fh;q.src&&this.hb.length?this.Gb=q:this.Lc(q);var v=this;this.Zg(q,function(){v.$d(q)})};t.prototype.Zf=function(q){var r=this.Ob.clear();r&&this.na.unshift(r);q.type=q.F.type||q.F.gh||"text/css";this.ah(q);r&&this.write()};t.prototype.ah=function(q){var r=this.yf(q);this.hg(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.Aa.createTextNode(q.content)))};t.prototype.yf=function(q){var r=this.Aa.createElement(q.tagName);r.setAttribute("type",q.type);d(q.F,function(v,w){r.setAttribute(v,w)});return r};t.prototype.hg=function(q){this.Zc('<span id="ps-style"/>');var r=this.Aa.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Lc=function(q){q.qg=this.na;this.na=[];this.hb.unshift(q)};t.prototype.$d=function(q){q!==this.hb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.hb.shift(),this.write.apply(this,q.qg),!this.hb.length&&this.Gb&&(this.Lc(this.Gb),this.Gb=null))};t.prototype.Zg=function(q,r){var v=this.xf(q),w=this.Ng(v),y=this.options.cf;q.src&&(v.src=q.src,this.Lg(v,w?y:function(){r();y()}));try{this.gg(v),q.src&&!w||r()}catch(x){this.options.error(x),r()}};t.prototype.xf=function(q){var r=this.Aa.createElement(q.tagName);d(q.F,function(v,w){r.setAttribute(v,w)});q.content&&(r.text=q.content);return r};t.prototype.gg=function(q){this.Zc('<span id="ps-script"/>');
var r=this.Aa.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.Lg=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);r()}})};t.prototype.Ng=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.Ig&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var w=r.shift(),y;w&&(y=w[w.length-1],y.df(),w.stream=t.apply(null,w),y.ef())}function t(w,y,x){function A(F){F=x.sf(F);v.write(F);x.ff(F)}v=new n(w,x);v.id=q++;v.name=x.name||v.id;var z=w.ownerDocument,B={close:z.close,open:z.open,write:z.write,writeln:z.writeln};e(z,{close:a,open:a,write:function(){return A(h(arguments).join(""))},writeln:function(){return A(h(arguments).join("")+"\n")}});var E=v.lb.onerror||a;v.lb.onerror=function(F,M,Q){x.error({qh:F+
" - "+M+":"+Q});E.apply(v.lb,arguments)};v.write(y,function(){e(z,B);v.lb.onerror=E;x.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.ph?w[0]:w;var A=[w,y,x];w.ug={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.rf(A);r.push(A);v||p();return w.ug},{streams:{},sh:r,hh:n})}();Fb=l.postscribe}})();for(var Gb="floor ceil round max min abs pow sqrt".split(" "),Hb=0;Hb<Gb.length;Hb++)Math.hasOwnProperty(Gb[Hb]);var u=window,C=document,Ib=navigator,Jb=C.currentScript&&C.currentScript.src,Kb=function(a,b){var c=u[a];u[a]=void 0===c?b:c;return u[a]},Lb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Mb=function(a,b,c){var d=C.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Lb(d,b);c&&(d.onerror=c);var e;if(null===ha)b:{var g=da.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&fa.test(k)){ha=k;break b}}ha=""}e=ha;e&&d.setAttribute("nonce",e);var l=C.getElementsByTagName("script")[0]||C.body||C.head;l.parentNode.insertBefore(d,l);return d},Nb=function(){if(Jb){var a=Jb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ob=function(a,b){var c=C.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=C.body&&C.body.lastChild||
C.body||C.head;d.parentNode.insertBefore(c,d);Lb(c,b);void 0!==a&&(c.src=a);return c},Pb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},D=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Qb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){u.setTimeout(a,0)},Rb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Sb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Tb=function(a){var b=C.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ub=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Vb=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={Yb:"event_callback",La:"event_timeout",V:"gtag.config",O:"allow_ad_personalization_signals",R:"cookie_expires",Ka:"cookie_update",va:"session_duration"};var jc=/[A-Z]+/,kc=/\s/,lc=function(a){if(ka(a)&&(a=xa(a),!kc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(jc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},nc=function(a){for(var b={},c=0;c<a.length;++c){var d=lc(a[c]);d&&(b[d.id]=d)}mc(b);var e=[];ta(b,function(g,h){e.push(h)});return e};
function mc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var oc={},pc=null,qc=Math.random();oc.m="GTM-5WHHGF";oc.zb="9i1";var rc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},sc="www.googletagmanager.com/gtm.js";var tc=sc,uc=null,vc=null,wc=null,xc="//www.googletagmanager.com/a?id="+oc.m+"&cv=126",yc={},zc={},Ac=function(){var a=pc.sequence||0;pc.sequence=a+1;return a};var Bc={},Dc=function(a,b){Bc[a]=Bc[a]||[];Bc[a][b]=!0},Ec=function(a){for(var b=[],c=Bc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Fc=function(){return"&tc="+mb.filter(function(a){return a}).length},Pc=function(){Gc&&(u.clearTimeout(Gc),Gc=void 0);void 0===Hc||Ic[Hc]&&!Jc||(Kc[Hc]||Lc.lg()||0>=Mc--?(Dc("GTM",1),Kc[Hc]=!0):(Lc.Gg(),Pb(Nc()),Ic[Hc]=!0,Oc=Jc=""))},Nc=function(){var a=Hc;if(void 0===a)return"";var b=Ec("GTM"),c=Ec("TAGGING");return[Qc,Ic[a]?"":"&es=1",Rc[a],b?"&u="+b:"",c?"&ut="+c:"",Fc(),Jc,Oc,"&z=0"].join("")},Sc=function(){return[xc,"&v=3&t=t","&pid="+qa(),"&rv="+oc.zb].join("")},Tc="0.005000">
Math.random(),Qc=Sc(),Uc=function(){Qc=Sc()},Ic={},Jc="",Oc="",Hc=void 0,Rc={},Kc={},Gc=void 0,Lc=function(a,b){var c=0,d=0;return{lg:function(){if(c<a)return!1;ya()-d>=b&&(c=0);return c>=a},Gg:function(){ya()-d>=b&&(c=0);c++;d=ya()}}}(2,1E3),Mc=1E3,Vc=function(a,b){if(Tc&&!Kc[a]&&Hc!==a){Pc();Hc=a;Jc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Rc[a]="&e="+c+"&eid="+a;Gc||(Gc=u.setTimeout(Pc,500))}},Wc=function(a,b,c){if(Tc&&!Kc[a]&&b){a!==Hc&&(Pc(),Hc=a);var d=String(b[zb.ia]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Jc=Jc?Jc+"."+e:"&tr="+e;Gc||(Gc=u.setTimeout(Pc,500));2022<=Nc().length&&Pc()}};var Xc={},Yc=new ra,Zc={},$c={},dd={name:"dataLayer",set:function(a,b){f(ad(a,b),Zc);bd()},get:function(a){return cd(a,2)},reset:function(){Yc=new ra;Zc={};bd()}},cd=function(a,b){if(2!=b){var c=Yc.get(a);if(Tc){var d=ed(a);c!==d&&Dc("GTM",5)}return c}return ed(a)},ed=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:gd(d)},gd=function(a){for(var b=Zc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var jd=function(a,b){$c.hasOwnProperty(a)||(Yc.set(a,b),f(ad(a,b),Zc),bd())},ad=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},bd=function(a){ta($c,function(b,c){Yc.set(b,c);f(ad(b,void 0),Zc);f(ad(b,c),Zc);a&&delete $c[b]})},kd=function(a,b,c){Xc[a]=Xc[a]||{};var d=1!==c?ed(b):Yc.get(b);"array"===Ha(d)||"object"===Ha(d)?Xc[a][b]=f(d):Xc[a][b]=d},ld=function(a,b){if(Xc[a])return Xc[a][b]};var md=function(){var a=!1;return a};var J=function(a,b,c,d){return(2===nd()||d||"http:"!=u.location.protocol?a:b)+c},nd=function(){var a=Nb(),b;if(1===a)a:{var c=tc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=C.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Cd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Dd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ed={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Fd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Hd=function(a){var b=cd("gtm.whitelist");b&&Dc("GTM",9);var c=b&&Fa(wa(b),Dd),d=cd("gtm.blacklist");d||(d=cd("tagTypeBlacklist"))&&Dc("GTM",3);
d?Dc("GTM",8):d=[];Gd()&&(d=wa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=oa(wa(d),"google")&&Dc("GTM",2);var e=d&&Fa(wa(d),Ed),g={};return function(h){var k=h&&h[zb.ia];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=zc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>oa(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
oa(c,l[p])){Dc("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=oa(e,k);if(q)t=q;else{var r=sa(e,l||[]);r&&Dc("GTM",10);t=r}}var v=!m||t;v||!(0<=oa(l,"sandboxedScripts"))||c&&-1!==oa(c,"sandboxedScripts")||(v=sa(e,Fd));return g[k]=v}},Gd=function(){return Cd.test(u.location&&u.location.hostname)};var Id={Ff:function(a,b){b[zb.cd]&&"string"===typeof a&&(a=1==b[zb.cd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(zb.ed)&&null===a&&(a=b[zb.ed]);b.hasOwnProperty(zb.gd)&&void 0===a&&(a=b[zb.gd]);b.hasOwnProperty(zb.fd)&&!0===a&&(a=b[zb.fd]);b.hasOwnProperty(zb.dd)&&!1===a&&(a=b[zb.dd]);return a}};var Jd={active:!0,isWhitelisted:function(){return!0}},Kd=function(a){var b=pc.zones;!b&&a&&(b=pc.zones=a());return b};var Ld=!1,Md=0,Nd=[];function Od(a){if(!Ld){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ld=!0;for(var e=0;e<Nd.length;e++)G(Nd[e])}Nd.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function Pd(){if(!Ld&&140>Md){Md++;try{C.documentElement.doScroll("left"),Od()}catch(a){u.setTimeout(Pd,50)}}}var Qd=function(a){Ld?a():Nd.push(a)};var Rd={},Sd={},Td=function(a,b,c,d){if(!Sd[a]||rc[b]||"__zone"===b)return-1;var e={};Ja(d)&&(e=f(d,e));e.id=c;e.status="timeout";return Sd[a].tags.push(e)-1},Ud=function(a,b,c,d){if(Sd[a]){var e=Sd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Vd(a){for(var b=Rd[a]||[],c=0;c<b.length;c++)b[c]();Rd[a]={push:function(d){d(oc.m,Sd[a])}}}
var Yd=function(a,b,c){Sd[a]={tags:[]};ja(b)&&Wd(a,b);c&&u.setTimeout(function(){return Vd(a)},Number(c));return Xd(a)},Wd=function(a,b){Rd[a]=Rd[a]||[];Rd[a].push(Ca(function(){return G(function(){b(oc.m,Sd[a])})}))};function Xd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ca(function(){b++;d&&b>=c&&Vd(a)})},nf:function(){d=!0;b>=c&&Vd(a)}}};var Zd=function(){function a(d){return!la(d)||0>d?0:d}if(!pc._li&&u.performance&&u.performance.timing){var b=u.performance.timing.navigationStart,c=la(dd.get("gtm.start"))?dd.get("gtm.start"):0;pc._li={cst:a(c-b),cbt:a(vc-b)}}};var ce=!1,de=function(){return u.GoogleAnalyticsObject&&u[u.GoogleAnalyticsObject]},ee=!1;
var fe=function(a){u.GoogleAnalyticsObject||(u.GoogleAnalyticsObject=a||"ga");var b=u.GoogleAnalyticsObject;if(u[b])u.hasOwnProperty(b)||Dc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);u[b]=c}Zd();return u[b]},ge=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=de();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ie=function(){},he=function(){return u.GoogleAnalyticsObject||"ga"};var ke=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var le=/:[0-9]+$/,me=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},pe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ne(a.protocol)||ne(u.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:u.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||u.location.hostname).replace(le,"").toLowerCase());var g=b,h,k=ne(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=oe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(le,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Dc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=oa(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=me(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ne=function(a){return a?a.replace(":","").toLowerCase():""},oe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
qe=function(a){var b=C.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Dc("TAGGING",1),c="/"+c);var d=b.hostname.replace(le,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var we=function(a){};function ve(a,b){a.containerId=oc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function xe(a,b,c,d){var e=mb[a],g=ye(a,b,c,d);if(!g)return null;var h=vb(e[zb.zd],c,[]);if(h&&h.length){var k=h[0];g=xe(k.index,{J:g,T:1===k.Kd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function ye(a,b,c,d){function e(){if(g[zb.Ue])k();else{var w=wb(g,c,[]),y=Td(c.id,String(g[zb.ia]),Number(g[zb.Ad]),w[zb.Ve]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=ya()-z;Wc(c.id,mb[a],"5");Ud(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=ya()-z;Wc(c.id,mb[a],"6");Ud(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;Wc(c.id,g,"1");var A=function(B){var E=ya()-z;we(B);Wc(c.id,g,"7");Ud(c.id,y,"exception",E);x||(x=!0,k())};var z=ya();try{ub(w,c)}catch(B){A(B)}}}var g=mb[a],h=b.J,k=b.T,l=b.terminate;if(c.Ac(g))return null;var m=vb(g[zb.Bd],c,[]);if(m&&m.length){var n=m[0],p=xe(n.index,{J:h,T:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Kd?l:p}if(g[zb.yd]||g[zb.We]){var t=g[zb.yd]?nb:c.Pg,q=h,r=k;if(!t[a]){e=Ca(e);var v=ze(a,t,e);h=v.J;k=v.T}return function(){t[a](q,r)}}return e}
function ze(a,b,c){var d=[],e=[];b[a]=Ae(d,e,c);return{J:function(){b[a]=Be;for(var g=0;g<d.length;g++)d[g]()},T:function(){b[a]=Ce;for(var g=0;g<e.length;g++)e[g]()}}}function Ae(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Be(a){a()}function Ce(a,b){b()};var Fe=function(a,b){for(var c=[],d=0;d<mb.length;d++)if(a.cb[d]){var e=mb[d];var g=b.add();try{var h=xe(d,{J:g,T:g,terminate:g},a,d);h?c.push({oe:d,de:xb(e),Qf:h}):(De(d,a),g())}catch(l){g()}}b.nf();c.sort(Ee);for(var k=0;k<c.length;k++)c[k].Qf();return 0<c.length};function Ee(a,b){var c,d=b.de,e=a.de;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.oe,k=b.oe;g=h>k?1:h<k?-1:0}return g}
function De(a,b){if(!Tc)return;var c=function(d){var e=b.Ac(mb[d])?"3":"4",g=vb(mb[d][zb.zd],b,[]);g&&g.length&&c(g[0].index);Wc(b.id,mb[d],e);var h=vb(mb[d][zb.Bd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Ge=!1,He=function(a,b,c,d,e){if("gtm.js"==b){if(Ge)return!1;Ge=!0}Vc(a,b);var g=Yd(a,d,e);kd(a,"event",1);kd(a,"ecommerce",1);kd(a,"gtm");var h={id:a,name:b,Ac:Hd(c),cb:[],Pg:[],Yd:function(n){Dc("GTM",6);we(n)}};h.cb=Db(h);var k=Fe(h,g);
if(!k)return k;for(var l=0;l<h.cb.length;l++)if(h.cb[l]){var m=mb[l];if(m&&!rc[String(m[zb.ia])])return!0}return!1};var Je=function(a,b,c,d,e){var g=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.fb=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(void 0!==g.eventModel[h])return g.eventModel[h];if(void 0!==g.targetConfig[h])return g.targetConfig[h];if(void 0!==g.containerConfig[h])return g.containerConfig[h];if(void 0!==g.fb[h])return g.fb[h];if(void 0!==g.globalConfig[h])return g.globalConfig[h]}};var Ke={},Le=["G"];Ke.pe="";var Me=Ke.pe.split(",");function Ne(){var a=pc;return a.gcq=a.gcq||new Oe}
var Pe=function(a,b){Ne().register(a,b,void 0)},Qe=function(a,b,c,d){Ne().push("event",[b,a],c,d)},Re=function(a,b){Ne().push("config",[a],b)},Se={},Te=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.fb={};this.ee=null;this.Ud=!1},Ue=function(a,b,c,d,e){this.type=a;this.Ug=b;this.N=c||"";this.Cb=d;this.defer=e},Oe=function(){this.Gd={};this.Pd={};this.Xa=[]},Ve=function(a,b){var c=lc(b);return a.Gd[c.containerId]=a.Gd[c.containerId]||new Te},We=function(a,b,c,d){if(d.N){var e=
Ve(a,d.N),g=e.ee;if(g){var h=f(c),k=f(e.targetConfig[d.N]),l=f(e.containerConfig),m=f(e.fb),n=f(a.Pd),p=new Je(h,k,l,m,n);try{g(b,d.Ug,p)}catch(t){}}}};Oe.prototype.register=function(a,b,c){if(3!==Ve(this,a).status){Ve(this,a).ee=b;Ve(this,a).status=3;c&&(Ve(this,a).fb=c);var d=lc(a),e=Se[d.containerId];if(void 0!==e){var g=cd("gtm.uniqueEventId"),h=d.prefix,k=ya()-e;if(Tc&&!Kc[g]){g!==Hc&&(Pc(),Hc=g);var l=""+h+Math.floor(k);Oc=Oc?Oc+"."+l:"&cl="+l}delete Se[d.containerId]}this.flush()}};
Oe.prototype.push=function(a,b,c,d){var e=Math.floor(ya()/1E3);if(c){var g=lc(c),h;if(h=g){var k;if(k=1===Ve(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Ve(this,c).status=2,this.push("require",[],g.containerId),Se[g.containerId]=ya(),!md())){var m=encodeURIComponent(g.containerId);Mb(("http:"!=u.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=dataLayer&cx=c"))}}this.Xa.push(new Ue(a,e,c,b,d));d||this.flush()};
Oe.prototype.flush=function(a){for(var b=this;this.Xa.length;){var c=this.Xa[0];if(c.defer)c.defer=!1,this.Xa.push(c);else switch(c.type){case "require":if(3!==Ve(this,c.N).status&&!a)return;break;case "set":ta(c.Cb[0],function(l,m){b.Pd[l]=m});break;case "config":var d=c.Cb[0],e=!!d[H.tb];delete d[H.tb];var g=Ve(this,c.N),h=lc(c.N),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.N]={});g.Ud&&e||We(this,H.V,d,c);g.Ud=!0;k?f(d,g.containerConfig):f(d,g.targetConfig[c.N]);break;case "event":We(this,
c.Cb[1],c.Cb[0],c)}this.Xa.shift()}};var Xe=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},af=function(a,b,c,d){var e=Ye(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ze(e,function(g){return g.Hb},b);if(1===e.length)return e[0].id;e=Ze(e,function(g){return g.eb},c);return e[0]?e[0].id:void 0}};
function bf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Xe(b,e).indexOf(c)}
var ef=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=cf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!df(y,t)&&bf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!df(p,t)&&bf(m,a,l)}return k};function Ze(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Ye(a,b){for(var c=[],d=Xe(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Hb:1*k[0]||1,eb:1*k[1]||1}))}}return c}
var ff=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,gf=/(^|\.)doubleclick\.net$/i,df=function(a,b){return gf.test(document.location.hostname)||"/"===b&&ff.test(a)},cf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;gf.test(e)||ff.test(e)||a.push("none");return a};var hf="".split(/,/),jf=null,kf={},lf={},mf,nf=function(a,b){var c={event:a};b&&(c.eventModel=f(b),b[H.Yb]&&(c.eventCallback=b[H.Yb]),b[H.La]&&(c.eventTimeout=b[H.La]));return c};
var tf={config:function(a){},event:function(a){var b=
a[1];if(ka(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ja(a[2]))return;c=a[2]}var d=nf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).ih(a[1],a[2])},set:function(a){var b;2==a.length&&Ja(a[1])?b=f(a[1]):3==a.length&&ka(a[1])&&(b={},b[a[1]]=a[2]);if(b){
b._clear=!0;return b}}},uf={policy:!0};var wf=function(a){return vf?C.querySelectorAll(a):null},xf=function(a,b){if(!vf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!C.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yf=!1;if(C.querySelectorAll)try{var zf=C.querySelectorAll(":root");zf&&1==zf.length&&zf[0]==C.documentElement&&(yf=!0)}catch(a){}var vf=yf;var Gf=function(a){if(Ff(a))return a;this.Xg=a};Gf.prototype.Xf=function(){return this.Xg};var Ff=function(a){return!a||"object"!==Ha(a)||Ja(a)?!1:"getUntrustedUpdateValue"in a};Gf.prototype.getUntrustedUpdateValue=Gf.prototype.Xf;var Hf=!1,If=[];function Jf(){if(!Hf){Hf=!0;for(var a=0;a<If.length;a++)G(If[a])}}var Kf=function(a){Hf?G(a):If.push(a)};var Lf=[],Mf=!1,Nf=function(a){return u["dataLayer"].push(a)},Of=function(a){var b=pc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Qf=function(a){var b=a._clear;ta(a,function(g,h){"_clear"!==g&&(b&&jd(g,void 0),jd(g,h))});uc||(uc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ac(),a["gtm.uniqueEventId"]=d,jd("gtm.uniqueEventId",d));wc=c;var e=Pf(a);
wc=null;switch(c){case "gtm.init":Dc("GTM",19),e&&Dc("GTM",20)}return e};function Pf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=pc.zones;d=e?e.checkState(oc.m,c):Jd;return d.active?He(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Rf=function(){for(var a=!1;!Mf&&0<Lf.length;){Mf=!0;delete Zc.eventModel;bd();var b=Lf.shift();if(null!=b){var c=Ff(b);if(c){var d=b;b=Ff(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=cd(h,1);if(ma(k)||Ja(k))k=f(k);$c[h]=k}}try{if(ja(b))try{b.call(dd)}catch(v){}else if(ma(b)){var l=b;if(ka(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=cd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ka(b[0])){var r=tf[b[0]];if(r&&(!c||!uf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Mf=!1;continue}}a=Qf(b)||a}}finally{c&&bd(!0)}}Mf=!1}
return!a},Sf=function(){var a=Rf();try{var b=oc.m,c=u["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Tf=function(){var a=Kb("dataLayer",[]),b=Kb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Qd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Kf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<pc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Gf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Lf.push.apply(Lf,d);if(300<this.length)for(Dc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Rf()&&h};Lf.push.apply(Lf,a.slice(0));G(Sf)};var Uf;var pg={};pg.vb=new String("undefined");
var qg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===pg.vb?b:a[d]);return c.join("")}};qg.prototype.toString=function(){return this.resolve("undefined")};qg.prototype.valueOf=qg.prototype.toString;pg.Ye=qg;pg.jc={};pg.If=function(a){return new qg(a)};var rg={};pg.Hg=function(a,b){var c=Ac();rg[c]=[a,b];return c};pg.Hd=function(a){var b=a?0:1;return function(c){var d=rg[c];if(d&&"function"===typeof d[b])d[b]();rg[c]=void 0}};pg.jg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};pg.vg=function(a){if(a===pg.vb)return a;var b=Ac();pg.jc[b]=a;return'google_tag_manager["'+oc.m+'"].macro('+b+")"};pg.ng=function(a,b,c){a instanceof pg.Ye&&(a=a.resolve(pg.Hg(b,c)),b=ia);return{yc:a,J:b}};var sg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Rb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},tg=function(a){pc.hasOwnProperty("autoEventsSettings")||(pc.autoEventsSettings={});var b=pc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},ug=function(a,b,c){tg(a)[b]=c},vg=function(a,b,c,d){var e=tg(a),g=za(e,b,d);e[b]=c(g)},wg=function(a,b,c){var d=tg(a);return za(d,b,c)};var xg=function(){for(var a=Ib.userAgent+(C.cookie||"")+(C.referrer||""),b=a.length,c=u.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ya()/1E3)].join(".")},Ag=function(a,b,c,d){var e=yg(b);return af(a,e,zg(c),d)},Bg=function(a,b,c,d){var e=""+yg(c),g=zg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},yg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},zg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Cg=["1"],Dg={},Hg=function(a,b,c,d){var e=Eg(a);Dg[e]||Fg(e,b,c)||(Gg(e,xg(),b,c,d),Fg(e,b,c))};function Gg(a,b,c,d,e){var g=Bg(b,"1",d,c);ef(a,g,c,d,0==e?void 0:new Date(ya()+1E3*(void 0==e?7776E3:e)))}function Fg(a,b,c){var d=Ag(a,b,c,Cg);d&&(Dg[a]=d);return d}function Eg(a){return(a||"_gcl")+"_au"};var Ig=function(){for(var a=[],b=C.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Wc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Wc]||(g[a[h].Wc]=[]),g[a[h].Wc].push({timestamp:k[1],Uf:k[2]}))}return g};function Jg(){for(var a=Kg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Lg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Kg,Mg,Ng=function(a){Kg=Kg||Lg();Mg=Mg||Jg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Kg[l],Kg[m],Kg[n],Kg[p])}return b.join("")},Og=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Mg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Kg=Kg||Lg();Mg=Mg||
Jg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Pg;function Qg(a,b){if(!a||b===C.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Ug=function(){var a=Rg,b=Sg,c=Tg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){D(C,"mousedown",d);D(C,"keyup",d);D(C,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Tg=function(){var a=Kb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Vg=/(.*?)\*(.*?)\*(.*)/,Wg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Xg=/^(?:www\.|m\.|amp\.)+/,Yg=/([^?#]+)(\?[^#]*)?(#.*)?/,Zg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,ah=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ng(String(d))))}var e=b.join("*");return["1",$g(e),e].join("*")},$g=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Pg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Pg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Pg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ch=function(){return function(a){var b=qe(u.location.href),c=b.search.replace("?",""),d=me(c,"_gl",!0)||"";a.query=bh(d)||{};var e=pe(b,"fragment").match(Zg);a.fragment=bh(e&&e[3]||
"")||{}}},dh=function(){var a=ch(),b=Tg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Da(c,d.query),Da(c,d.fragment));return c},bh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Vg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===$g(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Og(t[q+1]);return p}}}}catch(r){}};
function eh(a,b,c){function d(m){var n=m,p=Zg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Yg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function fh(a,b,c){for(var d={},e={},g=Tg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Qg(k.domains,b)&&(k.fragment?Da(e,k.callback()):Da(d,k.callback()))}if(Ea(d)){var l=ah(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=C.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=eh(l,a.action);ke.test(v)&&(a.action=v)}}}else gh(l,a,!1)}if(!c&&Ea(e)){var w=ah(e);gh(w,a,!0)}}function gh(a,b,c){if(b.href){var d=eh(a,b.href,void 0===c?!1:c);ke.test(d)&&(b.href=d)}}
var Rg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||fh(e,e.hostname,!1)}}catch(h){}},Sg=function(a){try{if(a.action){var b=pe(qe(a.action),"host");fh(a,b,!0)}}catch(c){}},hh=function(a,b,c,d){Ug();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Tg().decorators.push(e)},ih=function(){var a=C.location.hostname,b=Wg.exec(C.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Xg,""),l=e.replace(Xg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},jh=function(a,b){return!1===a?!1:a||b||ih()};var kh={};var lh=/^\w+$/,mh=/^[\w-]+$/,nh=/^~?[\w-]+$/,oh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function ph(a){return a&&"string"==typeof a&&a.match(lh)?a:"_gcl"}var rh=function(){var a=qe(u.location.href),b=pe(a,"query",!1,void 0,"gclid"),c=pe(a,"query",!1,void 0,"gclsrc"),d=pe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||me(e,"gclid",void 0);c=c||me(e,"gclsrc",void 0)}return qh(b,c,d)};
function qh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(mh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==kh.gtm_3pds?0:kh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var th=function(a){var b=rh();sh(b,a)};
function sh(a,b,c){function d(p,t){var q=uh(p,e);q&&ef(q,t,h,g,l,!0)}b=b||{};var e=ph(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Hc?7776E3:b.Hc;c=c||ya();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Dh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var wh=function(a,b,c,d,e){for(var g=dh(),h=ph(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==oh[l]){var m=uh(l,h),n=g[m];if(n){var p=Math.min(vh(n),ya()),t;b:{for(var q=p,r=Xe(m,C.cookie),v=0;v<r.length;++v)if(vh(r[v])>q){t=!0;break b}t=!1}t||ef(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};sh(qh(g.gclid,g.gclsrc),w)},uh=function(a,b){var c=oh[a];if(void 0!==c)return b+c},vh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function xh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var yh=function(a,b,c,d,e){if(ma(b)){var g=ph(e);hh(function(){for(var h={},k=0;k<a.length;++k){var l=uh(a[k],g);if(l){var m=Xe(l,C.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},zh=function(a){return a.filter(function(b){return nh.test(b)})},Ah=function(a){for(var b=["aw","dc"],c=ph(a&&a.prefix),d={},e=0;e<b.length;e++)oh[b[e]]&&(d[b[e]]=oh[b[e]]);ta(d,function(g,h){var k=Xe(c+h,C.cookie);if(k.length){var l=k[0],m=vh(l),n={};n[g]=[xh(l)];sh(n,a,m)}})};var Bh=/^\d+\.fls\.doubleclick\.net$/;function Ch(a){var b=qe(u.location.href),c=pe(b,"host",!1);if(c&&c.match(Bh)){var d=pe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Dh(a,b){if("aw"==a||"dc"==a){var c=Ch("gcl"+a);if(c)return c.split(".")}var d=ph(b);if("_gcl"==d){var e;e=rh()[a]||[];if(0<e.length)return e}var g=uh(a,d),h;if(g){var k=[];if(C.cookie){var l=Xe(g,C.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=xh(l[m]);n&&-1===oa(k,n)&&k.push(n)}h=zh(k)}else h=k}else h=k}else h=[];return h}
var Eh=function(){var a=Ch("gac");if(a)return decodeURIComponent(a);var b=Ig(),c=[];ta(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Uf);g=zh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Fh=function(a,b,c,d,e){Hg(b,c,d,e);var g=Dg[Eg(b)],h=rh().dc||[],k=!1;if(g&&0<h.length){var l=pc.joined_au=pc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ib.sendBeacon&&Ib.sendBeacon(t)||Pb(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Eg(b),r=Dg[q];r&&Gg(q,r,c,d,e)}};var Gh;if(3===oc.zb.length)Gh="g";else{var Hh="G";Gh=Hh}
var Jh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gh,OPT:"o"},Kh=function(a){var b=oc.m.split("-"),c=b[0].toUpperCase(),d=Jh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===oc.zb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+oc.zb+e};var Ph=["input","select","textarea"],Qh=["button","hidden","image","reset","submit"],Rh=function(a){var b=a.tagName.toLowerCase();return!pa(Ph,function(c){return c===b})||"input"===b&&pa(Qh,function(c){return c===a.type.toLowerCase()})?!1:!0},Sh=function(a){return a.form?a.form.tagName?a.form:C.getElementById(a.form):Ub(a,["form"],100)},Th=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Rh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Wh=!!u.MutationObserver,Xh=void 0,Yh=function(a){if(!Xh){var b=function(){var c=C.body;if(c)if(Wh)(new MutationObserver(function(){for(var e=0;e<Xh.length;e++)G(Xh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;D(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Xh.length;e++)G(Xh[e])}))})}};Xh=[];C.body?b():G(b)}Xh.push(a)};var zi=u.clearTimeout,Ai=u.setTimeout,K=function(a,b,c){if(md()){b&&G(b)}else return Mb(a,b,c)},Bi=function(){return u.location.href},Ci=function(a){return pe(qe(a),"fragment")},Di=function(a){return oe(qe(a))},Ei=null;
var Fi=function(a,b){return cd(a,b||2)},Gi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Nf(a)},Hi=function(a,b){u[a]=b},W=function(a,b,c){b&&(void 0===u[a]||c&&!u[a])&&(u[a]=b);return u[a]},Ii=function(a,b,c){return Xe(a,b,void 0===c?!0:!!c)},Ji=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Hc:d};th(e);Ah(e)},Ki=function(a,b,c,d,e){wh(a,b,c,d,e);},Li=function(a,b,c,d,e){
yh(a,b,c,d,e);},Mi=function(a,b){if(md()){b&&G(b)}else Ob(a,b)},Ni=function(a){return!!wg(a,"init",!1)},Oi=function(a){ug(a,"init",!0)},Pi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":tc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});K(J("https://","http://",d))},Qi=function(a,b){var c=a[b];
return c};
var Si=pg.ng;var Ti=new ra,Ui=function(a,b){function c(h){var k=qe(h),l=pe(k,"protocol"),m=pe(k,"host",!0),n=pe(k,"port"),p=pe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Vi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ma(c)){for(var d=0;d<c.length;d++)if(Vi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=oa(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Ti.get(q);r||(r=new RegExp(c,t),Ti.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ui(b,c)}return!1};var Xi={},Yi=function(){if(u._gtmexpgrp&&u._gtmexpgrp.hasOwnProperty(1))return u._gtmexpgrp[1];void 0===Xi[1]&&(Xi[1]=Math.floor(2*Math.random()));return Xi[1]};var Zi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var $i={},aj=encodeURI,X=encodeURIComponent,bj=Pb;var cj=function(a,b){if(!a)return!1;var c=pe(qe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var dj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};$i.kg=function(){var a=!1;return a};var Ej=function(){var a=u.gaGlobal=u.gaGlobal||{};a.hid=a.hid||qa();return a.hid};var nk=window,ok=document,pk=function(a){var b=nk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===nk["ga-disable-"+a])return!0;try{var c=nk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Xe("AMP_TOKEN",ok.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ok.getElementById("__gaOptOutExtension")?!0:!1};var uk=function(a,b,c){Qe(b,c,a)},vk=function(a,b,c){Qe(b,c,a,!0)},xk=function(a,b){},wk=function(a,b){},
yk=function(a){return"_"===a.charAt(0)},zk=function(a){ta(a,function(c){yk(c)&&delete a[c]});var b=a[H.ub]||{};ta(b,function(c){yk(c)&&delete b[c]})};var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=void 0,c="//www.googleadservices.com/pagead/conversion_async.js";var d=a.vtp_gtmOnFailure;Zd();K(c,function(){var e=W("google_trackConversion");
if(ja(e)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=dj(a.vtp_customParams,"key","value"));var h={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.value=a.vtp_eventValue),a.vtp_eventItems&&(h.items=a.vtp_eventItems));var k={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_gtag_event_data:h,google_remarketing_only:!0,
onload_callback:a.vtp_gtmOnSuccess,google_gtm:Kh()};b&&(k.google_additional_conversion_params=b);e(k)||d()}else d()},d)})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(ld(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Fi("gtm.referrer",1)||C.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?pe(qe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Di(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=sg(c,"gtm.click");Gi(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Ni("cl")){var c=W("document");D(c,"click",a,!0);Oi("cl")}G(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Ii(a.vtp_name,Fi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Fi("gtm.url",1))||Bi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Di(String(c));var e=qe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ma(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=pe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=pe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Fi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.asp=["nonGoogleScripts"],function(){(function(a){Z.__asp=a;Z.__asp.b="asp";Z.__asp.g=!0;Z.__asp.priorityOverride=0})(function(a){u.adroll_adv_id=a.vtp_customerId;u.adroll_pix_id=a.vtp_pixelId;void 0!==a.vtp_conversionValueInDollars&&(u.adroll_conversion_value=a.vtp_conversionValueInDollars,u.adroll_currency=a.vtp_conversionValueCurrency||"USD");if(a.vtp_customData){var b=dj(a.vtp_customData,"key","value");u.adroll_custom_data=b}a.vtp_segmentName&&(u.adroll_segments=a.vtp_segmentName);a.vtp_visitorEmail&&
(u.adroll_email=a.vtp_visitorEmail);u.__adroll_loaded=!0;var c=J("https://s","http://a",".adroll.com/j/roundtrip.js");K(c,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;f(dj(n.vtp_fieldsToSet,"fieldName","value"),g);f(dj(n.vtp_contentGroup,"index","group"),h);f(dj(n.vtp_dimension,"index","dimension"),k);f(dj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=f(n);d=f(d,p)}f(dj(d.vtp_fieldsToSet,"fieldName","value"),g);f(dj(d.vtp_contentGroup,
"index","group"),h);f(dj(d.vtp_dimension,"index","dimension"),k);f(dj(d.vtp_metric,"index","metric"),l);var t=fe(d.vtp_functionName);if(ja(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Ac(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(T){var O=[].slice.call(arguments,0);O[0]=q+O[0];t.apply(window,O)},x=function(T,O){return void 0===O?O:T(O)},A=function(T,O){if(O)for(var na in O)O.hasOwnProperty(na)&&y("set",T+na,O[na])},z=function(){},B=function(T,O,na){var Sa=0;if(T)for(var Aa in T)if(T.hasOwnProperty(Aa)&&(na&&v[Aa]||!na&&void 0===v[Aa])){var Ta=w[Aa]?va(T[Aa]):T[Aa];"anonymizeIp"!=Aa||Ta||(Ta=void 0);O[Aa]=Ta;Sa++}return Sa},E={name:r};B(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Kh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(T,O){void 0!==d[O]&&y("set",T,d[O])})("nonInteraction","vtp_nonInteraction");A("contentGroup",h);A("dimension",k);A("metric",l);var F={};B(g,F,!1)&&y("set",F);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var T=g&&g.hitCallback;ja(T)&&T();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());var Q={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(ua,d.vtp_eventValue||
e.value)};B(M,Q,!1);y("send",Q);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){
y("require","ecommerce","//www.google-analytics.com/plugins/ua/ecommerce.js");var U=function(T){return Fi("transaction"+T,1)},P=U("Id");y("ecommerce:addTransaction",{id:P,affiliation:U("Affiliation"),revenue:U("Total"),shipping:U("Shipping"),tax:U("Tax")});for(var N=U("Products")||[],L=0;L<N.length;L++){var I=N[L];y("ecommerce:addItem",{id:P,sku:I.sku,name:I.name,category:I.category,price:I.price,quantity:I.quantity})}y("ecommerce:send");}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var Y=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:Y})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ba="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ba})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ca=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ca="internal/"+ca);a=!0;var Ba=J("https:","http:","//www.google-analytics.com/"+ca,g&&g.forceSSL);K(Ba,function(){var T=de();T&&T.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.hjtc=["nonGoogleScripts"],function(){(function(a){Z.__hjtc=a;Z.__hjtc.b="hjtc";Z.__hjtc.g=!0;Z.__hjtc.priorityOverride=0})(function(a){var b=a.vtp_hotjar_site_id;Hi("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});Hi("_hjSettings",{hjid:b,hjsv:5});K("//static.hotjar.com/c/hotjar-"+X(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();

Z.a.aev=["google"],function(){function a(q,r){var v=ld(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var y=q+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(q,w);if(A&&(x=v(A),n[y]=x,p.push(y),35<p.length)){var z=p.shift();delete n[z]}}return x}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(Bi());ma(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!cj(q,w)}function e(q){m.test(q)||(q="http://"+q);return pe(qe(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Rb(q,"value");case "button":return Sb(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Rh(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Rb(w,r)||v}var m=/^https?:\/\//i,n={},p=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
v;case "TEXT":return b(r,w,Sb)||v;case "URL":var x;a:{var A=String(a(r,"elementUrl")||v||""),z=qe(A),B=String(q.vtp_component||"URL");switch(B){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=pe(z,B,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var F=q.vtp_attribute,M=a(r,"element");E=M&&Rb(M,F)||v||""}return E;case "MD":var Q=q.vtp_mdValue,S=b(r,"MD",li);return Q&&S?oi(S,Q)||
v:S||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=f(a),c=b;c[zb.ia]=null;c[zb.Se]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Zd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Kh()},m=function(v){return function(w,y,x){var A="DATA_LAYER"==v?Fi(x):k[y];A&&(l[w]=A)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var p=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||{})[v]=w},t=function(v){return function(w,y,x,A){var z="DATA_LAYER"==
v?Fi(x):k[y];A(z)&&p(w,z)}},q="//www.googleadservices.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=t(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",ea),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",
function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var r=!0;r&&b.push(l);a||(a=!0,K(q,g(),
e(q)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=W(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var g={},h=function(k,l){void 0!==c[k]&&(g[l]=c[k])};h("vtp_goalValue","gv");h("vtp_eventCategory","ec");h("vtp_eventAction","ea");h("vtp_eventLabel","el");h("vtp_eventValue","ev");e.push(g);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{K("//bat.bing.com/bat.js",
function(){var k=Zi(W("UET"),{ti:c.vtp_tagId,q:e});u[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){G(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.b="baut";Z.__baut.g=!0;Z.__baut.priorityOverride=0}();
Z.a.fsl=[],function(){function a(){var e=W("document"),g=c(),h=HTMLFormElement.prototype.submit;D(e,"click",function(k){var l=k.target;if(l&&(l=Ub(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Rb(l,"value")){var m;(m=l.form?l.form.tagName?l.form:C.getElementById(l.form):Ub(l,["form"],100))&&g.store(m,l)}},!1);D(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,p=g.get(l),t=!0;if(d(l,function(){if(t){var q;
p&&(q=e.createElement("input"),q.type="hidden",q.name=p.name,q.value=p.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,n,p))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return pa(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=wg("fsl",h?"nv.mwt":"mwt",0),n;n=h?wg("fsl","nv.ids",[]):wg("fsl","ids",[]);if(!n.length)return!0;var p=sg(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);p["gtm.elementUrl"]=t;l&&(p["gtm.formSubmitElement"]=l);if(k&&m){if(!Gi(p,Of(g),m))return!1}else Gi(p,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(p){return Math.max(k,p)};vg("fsl","mwt",m,0);h||vg("fsl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};vg("fsl","ids",n,[]);h||vg("fsl","nv.ids",n,[]);Ni("fsl")||(a(),Oi("fsl"));G(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=dj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=C.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Lb(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){G(h)}}}var b=function(d,e,g){Qd(function(){var h,k=pc;k.postscribe||(k.postscribe=Fb);h=k.postscribe;var l={done:e},m=C.createElement("div");m.style.display="none";m.style.visibility="hidden";C.body.appendChild(m);try{h(m,d,l)}catch(n){G(g)}})};var c=function(d){if(C.body){var e=
d.vtp_gtmOnFailure,g=Si(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.yc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(C.body,Tb(h),k,e)()}else Ai(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();


Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Ub(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=wg("lcl",k?"nv.mwt":"mwt",0),m;m=k?wg("lcl","nv.ids",[]):wg("lcl","ids",[]);if(m.length){var n=sg(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=W((Qi(h,"target")||"_self").substring(1)),t=!0;if(Gi(n,Of(function(){t&&p&&(p.location.href=Qi(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else Gi(n,function(){},l||2E3);return!0}}};D(c,"click",e,!1);D(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=Qi(d,"href"),h=g.indexOf("#"),k=Qi(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Di(g),m=Di(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};vg("lcl","mwt",k,0);e||vg("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};vg("lcl","ids",l,[]);e||vg("lcl","nv.ids",l,[]);Ni("lcl")||(a(),Oi("lcl"));G(c.vtp_gtmOnSuccess)})}();

var Ik={};Ik.macro=function(a){if(pg.jc.hasOwnProperty(a))return pg.jc[a]},Ik.onHtmlSuccess=pg.Hd(!0),Ik.onHtmlFailure=pg.Hd(!1);Ik.dataLayer=dd;Ik.callback=function(a){yc.hasOwnProperty(a)&&ja(yc[a])&&yc[a]();delete yc[a]};Ik.tf=function(){pc[oc.m]=Ik;Da(zc,Z.a);rb=rb||pg;sb=Id};
Ik.fg=function(){kh.gtm_3pds=!0;pc=u.google_tag_manager=u.google_tag_manager||{};if(pc[oc.m]){var a=pc.zones;a&&a.unregisterChild(oc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)jb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)mb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)lb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);kb.push(p)}pb=Z;qb=Vi;Ik.tf();Tf();Ld=!1;Md=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)Od();else{D(C,"DOMContentLoaded",Od);D(C,"readystatechange",Od);if(C.createEventObject&&C.documentElement.doScroll){var q=!0;try{q=!u.frameElement}catch(y){}q&&Pd()}D(u,"load",Od)}Hf=!1;"complete"===C.readyState?Jf():
D(u,"load",Jf);a:{if(!Tc)break a;u.setInterval(Uc,864E5);}
vc=(new Date).getTime();
}};(0,Ik.fg)();

})()
