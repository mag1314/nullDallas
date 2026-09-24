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
  email: "dallas@example.com", // TODO: your chapter email

  // Links used by buttons across the site. Replace every "#" / example URL.
  links: {
    propose: "https://forms.gle/your-talk-form",      // TODO: Google Form for talk proposals
    volunteer: "https://forms.gle/your-volunteer-form", // TODO
    venue: "mailto:dallas@example.com?subject=Hosting%20a%20null%20Dallas%20meet",
    slides: "#",                                       // TODO: intro slides deck
    nullCommunity: "https://null.community",
    codeOfConduct: "about.html#code-of-conduct"
  },

  // Shown on the home page and in the footer. Remove any you don't use.
  social: [
    { name: "LinkedIn",  note: "Announcements and recaps",  url: "https://www.linkedin.com/company/your-page" },
    { name: "Meetup",    note: "RSVP for every meet",       url: "https://www.meetup.com/your-group" },
    { name: "Discord",   note: "Chat between meets",        url: "https://discord.gg/your-invite" },
    { name: "X (Twitter)", note: "Talks and quick updates", url: "https://x.com/your-handle" },
    { name: "Instagram", note: "Photos from meets",         url: "https://www.instagram.com/your-handle" }
  ]
};

/* -------------------------------------------------------------------------
   EVENTS
   type:     "Monthly Meet" | "Humla" | "Bachav" | anything else you like
   date:     "YYYY-MM-DD"
   rsvp:     link for upcoming events (Meetup, Luma, Google Form...). Leave "" if not open yet.
   recap:    link for past events (blog post, LinkedIn post, slides). Optional.
   attended: number, for past events. Optional.
   ------------------------------------------------------------------------- */
window.EVENTS = [
  {
    sample: true,
    type: "Monthly Meet",
    title: "null Dallas Monthly Meet — October",
    date: "2026-10-17",
    time: "10:00 AM – 1:00 PM",
    venue: "Venue to be announced, Dallas",
    summary: "Two talks and open floor. First-timers welcome; bring a laptop if you want to follow along.",
    rsvp: "https://www.meetup.com/your-group"
  },
  {
    sample: true,
    type: "Humla",
    title: "Humla: Hands-on web application hacking",
    date: "2026-11-07",
    time: "10:00 AM – 4:00 PM",
    venue: "Venue to be announced, Richardson",
    summary: "A full-day attack lab. Work through a deliberately vulnerable app in pairs, from recon to exploitation.",
    rsvp: ""
  },
  {
    sample: true,
    type: "Monthly Meet",
    title: "null Dallas Monthly Meet — November",
    date: "2026-11-21",
    time: "10:00 AM – 1:00 PM",
    venue: "Venue to be announced, Dallas",
    summary: "Call for talks is open. Propose a 20-minute session on anything you've been breaking or defending.",
    rsvp: ""
  },
  {
    sample: true,
    type: "Monthly Meet",
    title: "null Dallas Monthly Meet — September",
    date: "2026-09-19",
    time: "10:00 AM – 1:00 PM",
    venue: "Sample venue, Dallas",
    summary: "Talks on cloud IAM misconfigurations and getting started with bug bounties.",
    attended: 42,
    recap: ""
  },
  {
    sample: true,
    type: "Bachav",
    title: "Bachav: Detection engineering with Sigma rules",
    date: "2026-08-15",
    time: "10:00 AM – 3:00 PM",
    venue: "Sample venue, Plano",
    summary: "A defensive workshop: write, test and tune detections against real attack telemetry.",
    attended: 28,
    recap: ""
  },
  {
    sample: true,
    type: "Monthly Meet",
    title: "null Dallas kickoff meet",
    date: "2026-07-18",
    time: "10:00 AM – 12:30 PM",
    venue: "Sample venue, Dallas",
    summary: "The first null Dallas meet: introductions, what the chapter will run, and lightning talks.",
    attended: 35,
    recap: ""
  }
];

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
