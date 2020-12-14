# edison-i18n

A string library for edison

## Getting Started

Add the package with: `yarn add https://github.com/Always-Near/edison-i18n.git`

Example:

```
import i18next from "i18next";
import { EN } from "edison-i18n";

i18next.init(
  {
    lng: "en",
    debug: true,
    resources: {
      en: {
        translation: EN,
      },
    },
  },
  function (err, t) {
    document.getElementById("output").innerHTML = i18next.t("welcome");
  }
);
```

## Upgrade

`yarn upgrade edison-i18n`
