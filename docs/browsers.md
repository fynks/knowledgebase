---
layout: doc
title: Browsers
---
# Browser Setup Guide

## Firefox Setup
### Customizations
- [Better-Fox](https://github.com/yokoffing/Betterfox/blob/main/user.js)
- [Firefox-UI-Fix](https://github.com/black7375/Firefox-UI-Fix/releases/latest)

### Search Configuration 
- [Mycroft (Google)](https://mycroftproject.com/install.html?id=118251&basename=anti-google&icontype=ico&name=G)

### Policy Configuration
Download the [Firefox Policies](https://raw.githubusercontent.com/fynks/configs/main/browsers/configs/policies.json) file and place it in one of these locations:

Linux:
```bash
/etc/firefox/policies
```

Windows:
```bash
C:\Program Files\Mozilla Firefox\distribution
```

### Cookie Exception List

```
https://github.com
```

```txt
https://netlify.com
```

```txt
https://chat.openai.com
```

```txt
https://auth.openai.com
```

```txt
https://chatgpt.com
```

```txt
https://google.com
```

```txt
https://inoreader.com
```

## Extensions

| **Extensions**     | **Firefox**                                                                       | **Chrome**                                                                                                  |
| :----------------- | :-------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| Ublock Origin      | [Get](https://addons.mozilla.org/en-GB/firefox/addon/ublock-origin/)              | [Get](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)             |
| Bitwarden          | [Get](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/) | [Get](https://chrome.google.com/webstore/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb) |
| Addy.io            | [Get](https://addons.mozilla.org/en-US/firefox/addon/addy_io/)                    | [Get](https://chrome.google.com/webstore/detail/addyio-anonymous-email-fo/iadbdpnoknmbdeolbapdackdcogdmjpe) |
| Tampermonkey       | [Get](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)               | [Get](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)              |
| LibRedirect        | [Get](https://addons.mozilla.org/firefox/addon/libredirect/)                      | [Get](https://libredirect.github.io/download_chromium.html)                                   |
| Firefox Containers | [Get](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/)   | ---                                                                                                         |
| ImproveTube     | [Get](https://addons.mozilla.org/en-US/firefox/addon/youtube-addon/)               | [Get](https://chromewebstore.google.com/detail/improve-youtube-%F0%9F%8E%A7-for-yo/bnomihfieiccainjcjblhegjgglakjdd)                           |
| Sponsor Block      | [Get](https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/)               | [Get](https://chrome.google.com/webstore/detail/mnjggcdmjocbbbhaepdhchncahnbgone)                           |

### Extension configs

- [UBlock Origin](https://raw.githubusercontent.com/fynks/configs/main/browsers/extensions/u_block_origin_configs.txt)
- [LibRedirect](https://raw.githubusercontent.com/fynks/configs/main/browsers/extensions/libredirect.json)
- [ImproveTube](https://raw.githubusercontent.com/fynks/configs/main/browsers/extensions/improvedtube.json)
- [Tampermonkey Script](https://raw.githubusercontent.com/fynks/configs/main/browsers/extensions/tampermonkey_scripts.zip)


## Userscripts
- [Github Repo](https://github.com/fynks/userscripts)

### Blocklists
#### Reddit Filters
```css
/* Remove Reddit Award buttons */
www.reddit.com,sh.reddit.com##award-button

/* Remove Promoted/Sponsored content */
www.reddit.com##.promotedlink
```

## Bookmarklets

- G Translate
``` js
javascript:void(open('https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=' + encodeURIComponent(location.href)));
```
- Edit current page
```js
javascript:document.body.contentEditable = 'true'; document.designMode='on'; void 0
```
