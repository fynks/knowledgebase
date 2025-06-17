---
layout: doc
title: Browsers
---

# Browser Setup Guide

A comprehensive guide for setting up and configuring modern browsers with focus on privacy, security, and productivity.

## Table of Contents
- [Firefox Setup](#firefox-setup)
- [Essential Extensions](#essential-extensions)
- [Extension Configurations](#extension-configurations)
- [Userscripts](#userscripts)
- [Custom Filters](#custom-filters)
- [Bookmarklets](#bookmarklets)

## Firefox Setup

### Performance & Privacy Customizations

#### Betterfox Configuration
[Betterfox](https://github.com/yokoffing/Betterfox/blob/main/user.js) provides optimized Firefox settings for better performance, privacy, and security.

**Installation:**
1. Download the `user.js` file
2. Place it in your Firefox profile folder
3. Restart Firefox

#### UI Improvements
[Firefox-UI-Fix](https://github.com/black7375/Firefox-UI-Fix/releases/latest) modernizes Firefox's interface with Proton design improvements.

### Search Engine Configuration

- **Google**: [Mycroft Installation](https://mycroftproject.com/install.html?id=118251&basename=anti-google&icontype=ico&name=G)

### Enterprise Policy Configuration

Download the [Firefox Policies](https://raw.githubusercontent.com/fynks/configs/main/browsers/configs/policies.json) file and place it in the appropriate directory:

**Linux:**
```bash
sudo mkdir -p /etc/firefox/policies
sudo wget -O /etc/firefox/policies/policies.json https://raw.githubusercontent.com/fynks/configs/main/browsers/configs/policies.json
```

**Windows:**
```bash
# Create directory if it doesn't exist
C:\Program Files\Mozilla Firefox\distribution\policies.json
```


### Cookie Management

#### Trusted Sites Exception List
The following sites are commonly whitelisted for cookies and functionality:

```txt
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

**To add cookie exceptions in Firefox:**
1. Go to `Settings` > `Privacy & Security`
2. Under `Cookies and Site Data`, click `Manage Exceptions`
3. Add each URL with "Allow" permission

## Essential Extensions
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


## Custom Filters
### Content Blocking Rules

#### Reddit Enhancement Filters
Add these filters to uBlock Origin for a cleaner Reddit experience:

```css
/* Remove Reddit Award buttons */
www.reddit.com,sh.reddit.com##award-button

/* Remove Promoted/Sponsored content */
www.reddit.com##.promotedlink

/* Hide Reddit Premium promotions */
www.reddit.com##.premium-banner-outer

/* Remove "Get Coins" button */
www.reddit.com##[data-testid="give-award-button"]
```

## Bookmarklets

Useful JavaScript bookmarklets for enhanced browsing:

### Translation Tools

#### Google Translate Current Page
Instantly translate any webpage to English:
```javascript
javascript:void(open('https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=' + encodeURIComponent(location.href)));
```

### Page Editing

#### Enable Page Editing
Make any webpage editable for quick modifications:
```javascript
javascript:document.body.contentEditable = 'true'; document.designMode='on'; void 0
```
