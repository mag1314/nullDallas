/* =========================================================================
   null Dallas — SITE CONTENT
   -------------------------------------------------------------------------
   This is the ONLY file you need to edit for day-to-day updates.
   Add an event, change a link, add an organizer: do it here, commit, done.

   Events are sorted automatically. Anything dated today or later shows as
   "upcoming"; anything earlier moves to "past sessions" on its own.

   Entries marked `sample: true` show a "Sample" badge on the site so you
   don't accidentally publish placeholder content. Replace or delete them.
   ========================================================================= */

window.SITE = {
  chapter: "null Dallas",
  hashtag: "#nulldallas",
  email: "null.dallas.chapter@gmail.com", // TODO: your chapter email

  // Links used by buttons across the site. Replace every "#" / example URL.
  links: {
    propose: "https://sessionize.com/null-dallas9421/",      // TODO: Google Form for talk proposals
    volunteer: "https://forms.gle/your-volunteer-form", // TODO
    venue: "mailto:dallas@example.com?subject=Hosting%20a%20null%20Dallas%20meet",
    slides: "#",                                       // TODO: intro slides deck
    nullCommunity: "https://null.community",
    codeOfConduct: "about.html#code-of-conduct"
  },

  // Shown on the home page and in the footer. Remove any you don't use.
  social: [
    { name: "LinkedIn",  note: "Announcements and recaps",  url: "https://www.linkedin.com/company/null-dallas/" },
    { name: "Meetup",    note: "RSVP for every meet",       url: "https://www.meetup.com/your-group" },
    { name: "Discord",   note: "Chat between meets",        url: "https://discord.gg/your-invite" },
    { name: "X (Twitter)", note: "Talks and quick updates", url: "https://x.com/your-handle" },
    { name: "Instagram", note: "Photos from meets",         url: "https://www.instagram.com/your-handle" }
  ]
};

/* -------------------------------------------------------------------------
   EVENTS
   type:     "Monthly Meet" | "Lab" | "Workshop" | anything else you like
   date:     "YYYY-MM-DD"
   rsvp:     link for upcoming events (Meetup, Luma, Google Form...). Leave "" if not open yet.
   recap:    link for past events (blog post, LinkedIn post, slides). Optional.
   attended: number, for past events. Optional.
   ------------------------------------------------------------------------- */
window.EVENTS = [];

/* -------------------------------------------------------------------------
   TEAM
   photo: optional path like "img/team/jane.jpg". Leave "" to show initials.
   ------------------------------------------------------------------------- */
window.TEAM = [
  { sample: true, name: "Organizer Name", role: "Chapter lead",        photo: "", linkedin: "#" },
  { sample: true, name: "Organizer Name", role: "Events and venues",   photo: "", linkedin: "#" },
  { sample: true, name: "Organizer Name", role: "Talks and speakers",  photo: "", linkedin: "#" },
  { sample: true, name: "Organizer Name", role: "Community and social", photo: "", linkedin: "#" }
];
