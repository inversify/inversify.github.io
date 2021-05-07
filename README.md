## Development / Testing

```sh
$ yarn install
```

```sh
$ yarn dev
```

## Creating Translations

We recommend that each individual file you update has its own commit.

This keeps the history for commits clean and easy to track backwards.

### Creating a New Locale / Translation

It's a pretty short process but requires some work.

0. Fork the Repository
1. Copy `en.js` from `src/.vuepress/locales/en.js`.
1. Rename it to your two letter [ISO-639-1 Code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
1. Edit the titles and translate them. Follow instructions in the copied code. We left comments for you.
1. Copy the folder `en` from the `src` directory.
1. Rename it to your ISO-639-1 Code for your Country / Language.
1. Begin converting documents from English to your language.
1. Test locally! It's very important!
1. Make a pull request.
