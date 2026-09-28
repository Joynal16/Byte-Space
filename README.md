# Byte-Space

Byte-Space is a static course-learning website made from standalone HTML pages.

## Pages

- `index.html` - Home page
- `bytespace_course_catalog.html` - Course catalog
- `bytespace_course_details_reviews.html` and `Course-Details.html` - Course details
- `ByteSpace – Course Lessons.html` - Course lessons
- `ByteSpace – Creator Profile.html` - Creator profile
- `bytespace_auth_pages.html` - Sign-in and registration screens
- `bytespace_404_not_found_page.html` - Not-found page

Open `index.html` in a browser to start exploring the site.

## Shared UI

The common footer is implemented as the `bytespace-footer` custom element in
`components/site-footer.js`. Pages that use it include the script and place
`<bytespace-footer></bytespace-footer>` where the footer should appear. Add the
`spaced` attribute when the page needs the larger top margin.
