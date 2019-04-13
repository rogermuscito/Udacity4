# RSS Feed Reader Testing

1. In this project there's a given web-based application that reads RSS feeds.
2. The porject shows a basic test which was incomplete (had 1 test now has 7).
3. The test is using [Jasmine](http://jasmine.github.io/).

## Files System:

| Type          | Folder | Format         |
| :---------    | :----- | :------------- |
| Run test      | root   | index.html     |
| Given styles  | \css   | style.css      |
| Given fonts   | \fonts | icomoon.***    |
| Given web-app | \js    | app.js         |
| The test code | \jasmine\spec | feedreader.js |
| Markdown      | root   | `README.md`    |

## Tests Suits

**RSS Feeds**
- `are defined` : make sure that *allFeeds* is correctly defined
- `has a URL` : all feeds must contain a *url* property
- `has a name` : all feeds must contain a *name* property

**The menu**
- `is hidden by default` : hidden with the css class *menu-hidden*
- `change its visibility` : menu is dis/appearing if clicked

**Initial Entries**
- `has at least one entry in the feed after loading` : before the initial load the feed is empty, checks if afterwards there's at least one child (with the css class *entry-link*)

**New Feed Selection**
- `has the content changed` : compares the first child in the feed before and after each loading. Begins from `loadFeed(1)` as the test doesn't check the initial loading, but only the changes after it. This suit runs asynchronous check with *done()* as well as looping the *allFeeds* from 1 (the first change after initial loading) to its end.
