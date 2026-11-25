/*
  ============================================================
  NEWS  -  edit this file to change "News & Recognition" cards
  ============================================================

  - Each { ... } block is one card. Cards show in this order, so put
    the newest one at the top.
  - tag:   the small blue label above the title (e.g. "Award", "Feature")
  - title: the headline
  - text:  one or two sentences
  - links: buttons under the card. Each is { label: "...", url: "https://..." }.
           Use links: [] for none.

  Same rules as team.js: keep text in "double quotes" and keep the
  commas between blocks. If the news cards disappear after an edit,
  there is a typo here (or undo it from this file's History on GitHub).
*/

const NEWS = [
  {
    tag: "National Honor",
    title: "National Academy of Medicine Scholar in Diagnostic Excellence",
    text: "Selected through national competition for “Advancing Language Equity in Diagnosing Perioperative Neurocognitive Disorders.”",
    links: [
      { label: "UCLA Newsroom", url: "https://newsroom.ucla.edu/dept/faculty/cecilia-canales-national-academy-medicine-diagnostic-excellence" },
      { label: "UCLA Health", url: "https://www.uclahealth.org/news/release/dr-cecilia-canales-selected-national-academy-medicine" }
    ]
  },
  {
    tag: "Feature",
    title: "Building a Health System That Speaks Your Language",
    text: "Feature coverage of the lab's language equity research in diverse older surgical adults.",
    links: [
      { label: "Newswise", url: "https://www.newswise.com/articles/building-a-health-system-that-speaks-your-language" },
      { label: "EurekAlert", url: "https://www.eurekalert.org/news-releases/1087890" }
    ]
  },
  {
    tag: "Leadership",
    title: "Named Medical Director of the UCLA Simulation Center",
    text: "Translating research on frailty, empathy, and language equity into hands-on clinical training.",
    links: [
      { label: "Announcement", url: "https://sim.ucla.edu/ucla-simulation-center-welcomes-new-medical-director" }
    ]
  },
  {
    tag: "Active Study",
    title: "Improving Outcomes in Minority Elder Surgical Patients",
    text: "Studying factors contributing to postoperative neurocognitive disorder in elderly end-stage renal disease patients.",
    links: [
      { label: "Study Info", url: "https://www.uclahealth.org/providers/cecilia-canales" }
    ]
  },
  {
    tag: "Conferences",
    title: "NAM Annual Meeting & ANESTHESIOLOGY 2025",
    text: "Lab presentations at the National Academy of Medicine Annual Meeting and the ASA's ANESTHESIOLOGY conference.",
    links: [
      { label: "NAM 2023", url: "https://chime.ucla.edu/news-article/drs-cecilia-canales-alejandra-casillas-at-2023-nam" },
      { label: "ASA 2025", url: "https://www.uclahealth.org/departments/anes/dapm-anesthesiology-2025" }
    ]
  }
];
