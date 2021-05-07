---
sidebar: false
---

# Support

The InversifyJS development team is dedicated to the support of its users. We keep an eye on Github and Stack Overflow to try to answer questions and resolve technical issues as soon as we can. Please use the following links if you need any kind of assitance:

-   [See all InversifyJS questions on Stack Overflow](http://stackoverflow.com/questions/tagged/inversifyjs)
-   [Ask a question on Stack Overflow](http://stackoverflow.com/questions/ask?tags=inversifyjs)
-   [See all InversifyJS issues on GitHub](https://github.com/inversify/InversifyJS/issues?utf8=%E2%9C%93&q=is%3Aissue)
-   [Repport an issue on GitHub](https://github.com/inversify/InversifyJS/issues/new">)

If you are experience any kind of issues we will be happy to help.
You can report an issue using the [issues page](https://github.com/inversify/InversifyJS/issues)
or the [discord chat](https://discord.gg/jXcMagAPnm).
You can also ask questions at [Stack overflow](http://stackoverflow.com/tags/inversifyjs)
using the <code>inversifyjs</code> tag.

If you want to share your thoughts with the development team or join us you will be able to do
so using the [discord chat](https://discord.gg/jXcMagAPnm)
You can check out the [wiki](../en/getting-started)
to learn more about InversifyJS internals.

# Creating Translations

We recommend that each individual file you update has its own commit.

This keeps the history for commits clean and easy to track backwards.

### Creating a New Locale / Translation

It's a pretty short process but requires some work.

0. Fork the [Repository](https://github.com/inversify/inversify.github.io/fork)
1. Copy `en.js` from `src/.vuepress/locales/en.js`.
1. Rename it to your two letter [ISO-639-1 Code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
1. Edit the titles and translate them. Follow instructions in the copied code. We left comments for you.
1. Copy the folder `en` from the `src` directory.
1. Rename it to your ISO-639-1 Code for your Country / Language.
1. Begin converting documents from English to your language.
1. Test locally! It's very important!
1. Make a pull request.
