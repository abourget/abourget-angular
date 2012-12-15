# Widgets and tools for AngularJS development.

Often components I was reusing everywhere.


## $watch fighters

I often had to show on the screen large amount of informations, like
tables, graphs or other heavyweight data.  Using AngularJS, if I used
the native and quick data-binding notation, I would very quickly
overload the page with `$watch`es.  The AngularJS devs suggest not
more than 2000 watches per page before you start to see performance
decreases.

2000 is a lot of moving parts, and if you have 2000 dynamically bound
data components in one page, you're most probably overloading your
user's brain.  This doesn't mean you can't have 2000 data elements on
a page.  For example, if you have a grid that shows small numbers in
an Excel-like fashion, especially if each cell has two bindings or
more (with a title attribute with bound information, etc..), you can
easily hit that 2000 `$watch` cap (not that Angular will prevent you
from doing it, it's just bad practice).  But most of the time, all
that information displayed on a screen is not going to change, or not
all at the same time.  You probably won't have 2000 cells with data
flowing through.  And even then, if you had 2000 cells with data
flowing and changing in real-time, it would probably be a bad user
experience (who can grasp the meaning of all those numbers flowing ?).

Ssssoo, long story short, I wanted bindings that would work the same
as native bindings, but that wouldn't trigger `$watch`es.  That would
be `$interpolate`d the first time, and would never move.  For that
I wrote those simple `set-...` directives.

There is:

 * `set-title`, which sets the `title` attribute once and for all

 * `set-href`, sets the `href` attribute

 * `set-text`, which sets the `.text()` content (using jQuery)

 * `set-html`, which sets the `.html()` content (using jQuery again)

 * `set-class`, which adds the class returned by the expression (using
   jQ's `.addClass()`)

 * `set-if`, which renders the content only if its evaluated
   expression is truthy.  It is different from ng-show/ng-hide as the
   contents of the element will *not be added to the DOM*.  It is also
   different from `angular-ui`'s `ui-if` directive, as it is only
   evaluated *once* and does not set a `$watch`.

