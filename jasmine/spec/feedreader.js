/* All test are within the $() function,
 * since some of these tests may require DOM elements.
 */
$(function() {
   // This suite is about the RSS feeds definitions (the allFeeds variable)
    describe('  ', function() {
        // Make sure that the allFeeds variable has been defined and that it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // loops through allFeeds object and ensures it has a URL defined and not null.
        it('has a URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(null);
            });
        // another way of looping the allFeeds. Checks it's not empty
            for(let feed of allFeeds) {
                expect(feed.url.length).not.toBe(0);
            }
        });

        // loops through each feed and ensures it has a name defined and not null or empty
        it('has a name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(null);
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    describe('The Menu', function() {
        var menu;

        beforeEach(function() {
            menu = $('body');
        });

        // Ensures the menu element is hidden by default.
        it('is hidden by default', function() {
            expect(menu.hasClass('menu-hidden')).toBe(true);
        });

       // Ensures the menu changes visibility when the menu icon is clicked.
        it('change its visibility', function() {
            menuIcon = $('.menu-icon-link');
            $(menuIcon).click();

            expect(menu.hasClass('menu-hidden')).toBe(false);

            $(menuIcon).click();

            expect(menu.hasClass('menu-hidden')).toBe(true);
        });
    });

    // Ensures that after loadFeed function is called there is at least a single .entry element within
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has at least one entry in the feed after loading', function() {
            var firstEntry = $('.entry-link').children('.entry').first();

            expect(firstEntry.length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {

        // Ensures that when a new feed is loaded the content actually changes.
        var feed,
            firstEntry,
            changedEntry,
            i = 0;

        beforeEach(function(done) {
            feed = $('.feed'),
            loadFeed(i, function() {
                firstEntry = feed.children(':first'); /* keeps a copy of the first feed */
                i += 1; /* uses closure to loop over all elements in allFeeds object */
                loadFeed(i, function() {
                    changedEntry = feed.children(':first'); /* keeps a copy of the next feed */
                    done();
                });
            });
        });

        function testNewLoading() { /* wraaping function for the test for the loop */
            it('has the content changed', function() { 
                expect(firstEntry).not.toEqual(changedEntry);
            });
        }

        for (k = 1; k<allFeeds.length; k++) { /* starts from 1 to match the first changedEntry - loadFeed(1) */
            testNewLoading();
        }
    });
}());