# canales-lab

Website for the Canales Lab at UCLA Anesthesiology and Perioperative Medicine: perioperative brain health, frailty, and equity.

Published with GitHub Pages from `index.html` on the `main` branch. Changes go live about 1–2 minutes after they are saved to `main`.

---

## How to update the website (no coding needed)

You can make every common change from the GitHub website. There is nothing to install.

**Editing a file on GitHub:** open the file in this repository, click the pencil icon (✏️ "Edit this file"), make your change, then click **Commit changes…** and **Commit changes** again. Wait 1–2 minutes and refresh the site. If you still see the old version, press Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows) to reload without the cache.

**Uploading a photo:** open the folder (for example `images/team`), click **Add file → Upload files**, drag the photo in, and click **Commit changes**. Use a lowercase file name with dashes and no spaces, like `jane-doe.jpg`. Keep photos under about 500 KB; on a Mac, Preview → Tools → Adjust Size can shrink them.

### Where things live

| To change… | Edit this |
|---|---|
| Team members (cards, roles, bios, photos) | `content/team.js` |
| News & Recognition cards | `content/news.js` |
| Member photos | `images/team/` folder |
| Everything else (home page text, research, publications, PI bio, events, gallery, contact info) | `index.html` |

### Add, edit, or remove a team member

1. Upload their photo to `images/team/` (see above).
2. Open `content/team.js` and click the pencil icon.
3. Copy an existing person's block, from `{` to `},`, and paste it into the right section. Then change the text:

   ```js
   {
     name: "Jane Doe",
     role: "Medical Student",
     school: "David Geffen School of Medicine at UCLA",
     photo: "images/team/jane-doe.jpg",
     about: "Where they grew up, how they joined the lab, what they work on.",
     hobbies: "What they do for fun.",
     future: "Their plans after the lab."
   },
   ```

   - If you don't have a photo yet, delete the `photo:` line and their initials will show instead.
   - If you don't have bio text yet, delete those lines and the popup will say "Profile coming soon."

4. **To remove someone:** delete their whole block, from `{` to `},`.
5. **To move someone to another section** (for example from Undergraduate Students to Research Volunteers): cut their block and paste it into the other section.
6. **To add a new section:** copy a whole `{ section: "…", members: [ … ] },` block and rename it. Sections show on the site in the order they appear in the file.

### Add a news item

Open `content/news.js`, copy one `{ … },` block to the **top** of the list (newest first), and fill in `tag`, `title`, `text`, and `links`.

### Add a publication

In `index.html`, find the **Publications** section by searching for `pg-publications`. Each paper is one line starting with `<div class="pub">`, grouped under year headings like `<div class="sub-center">2026</div>`. Copy a line, paste it under the right year, and change the PubMed link, title, authors, and journal.

### Change the contact email

The contact email appears in two places in `index.html`, so search for `mailto:` and change both:

1. the email address shown in the Join Us contact section, and
2. the line in the contact form script that says `window.location.href='mailto:…`.

### If something breaks

- **The team list or news cards disappeared after an edit:** there's a typo in `content/team.js` or `content/news.js`. The usual cause is a missing `"` or a missing comma between blocks. Text must stay inside straight double quotes `"…"`. If the text itself needs a double quote, use curly quotes “ ” or type `\"`.
- **To undo any change:** open the file on GitHub, click **History**, open the last version that worked, click the **⋯** menu → **View file**, copy its contents, and paste them back with the pencil editor. You can also ask whoever has repository access to revert the commit.

---

## Handing the site off

Before the current maintainer leaves, make sure:

- [ ] The repository is owned by a lab GitHub organization or by a long-term lab member, not only by a student's personal account. Use Settings → General → Danger Zone → **Transfer ownership**. Moving it changes the web address unless you set up a custom domain.
- [ ] At least two people (for example Dr. Canales and the next student lead) have admin access.
- [ ] Anything the site links to that is owned by an account, such as a contact form, is owned by the lab account (`canaleslab@mednet.ucla.edu`), not a personal one.

## Previewing changes on your own computer (optional)

From this folder, run `python3 -m http.server 8000`, then open http://localhost:8000. Opening `index.html` directly also works for most things.
