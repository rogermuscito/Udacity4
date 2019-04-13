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
- `has a URL` : all feeds must contain a *url* property which is not empty
- `has a name` : all feeds must contain a *name* property which is not empty

**The menu**
- `is hidden by default` : hidden with the css class *menu-hidden*
- `change its visibility` : menu is dis/appearing if clicked

**Initial Entries**
- `has at least one entry in the feed after loading` : before the initial load the feed is empty, checks if afterwards there's at least one *entry* class element in the *feed* container

**New Feed Selection**
- `has the content changed` : compares the first child in the feed before and after each loading. Begins from `loadFeed(0)` and `loadFeed(1)`, and looping the *allFeeds* from 1 to its end (to avoid checking `loadFeed(length+1)`
- This suit runs asynchronous check with *done()*
