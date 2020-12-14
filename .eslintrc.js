module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["spellcheck"],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "spellcheck/spell-checker": [
      2,
      {
        ignoreRequire: true,
        skipWords: [
          "onmail",
          "edison",
          "gmail",
          "smtp",
          "dns",
          "ttl",
          "tnc",
          "jpg",
          "pdf",
          "pdfjs",
          "bcc",
          "signup",
          "num",
          "responder",
          "bulleted",
          "strikethrough",
          "customizable",
          "dnd",
          "lottie",
          "cta",
          "mth",
          "verifications",
          "anonymized",
          "cvc",
        ],
        skipIfMatch: [
          "https?://.*",
          "^[-\\w]+/[-\\w\\.]+$", //For MIME Types
        ],
        skipWordIfMatch: [
          "^foobar.*$", // words that begin with foobar will not be checked
        ],
        minLength: 3,
      },
    ],
  },
};
