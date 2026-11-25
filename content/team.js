/*
  ============================================================
  TEAM MEMBERS  -  edit this file to change the "Our Team" page
  ============================================================

  HOW IT WORKS
  - Each section below (Medical Students, Undergraduate Students, ...)
    becomes a heading on the Our Team page, in this order.
  - Each { ... } block inside a section is one person's card.
  - Clicking a card opens a popup with their About / Hobbies / Looking Ahead text.

  TO ADD A PERSON
  1. Upload their photo to the images/team/ folder (a square-ish JPG
     under 500 KB works best), e.g. images/team/jane-doe.jpg
  2. Copy an existing { ... } block, paste it into the right section,
     and change the text. Keep the quotes " " and the comma after each }.
  3. Any line you don't have can be deleted (for example no photo yet:
     delete the photo line and their initials will show instead).

  TO REMOVE A PERSON: delete their whole { ... }, block.
  TO ADD A SECTION: copy a whole { section: ..., members: [ ... ] }, block.

  WATCH OUT
  - Text must stay inside "double quotes". If the text itself needs a
    double quote, type \" instead (straight apostrophes ' are fine).
  - Every } and ] that has something after it needs a comma.
  - If the team list disappears from the site after an edit, there is
    a typo here: check quotes and commas, or undo the change in GitHub
    (open this file -> History -> previous version).
*/

const TEAM = [
  {
    section: "Medical Students",
    members: [
      {
        name: "Jonathan Shih",
        role: "Medical Student",
        school: "David Geffen School of Medicine at UCLA",
        photo: "images/team/jonathan-shih.jpg",
        about: "I was born in Taiwan before my family moved to the Bay Area. I studied Biology at UC Riverside, where I began working as an EMT and spent my final year completing paramedic academy while finishing my degree. As a licensed paramedic, caring for patients during critical moments in the field sparked my fascination with airway management, resuscitation, and acute physiology, which ultimately led me to anesthesiology. I joined the Canales Lab at DGSOM because of its strong culture of mentorship, and my work focuses on postoperative outcomes and recovery, with a growing interest in data science.",
        hobbies: "Outside of medicine, I can usually be found on the mountains during the winter, where I snowboard and enjoy teaching friends who are just starting out. As a longtime club swimmer and former swim coach, I still love being in the water, and I spend as much time as I can hiking and exploring national parks.",
        future: "I plan to pursue anesthesiology and am especially excited about how research and data science can improve perioperative care and recovery. I hope to build a career in academic medicine that combines clinical practice, research, and mentorship, and to support future students the way my mentors have supported me."
      },
      {
        name: "Nare Ghaltakhchyan",
        role: "Medical Student",
        school: "David Geffen School of Medicine at UCLA",
        photo: "images/team/nare-ghaltakhchyan.jpg",
        about: "Nare was born and raised in Armenia and continues to return every year to visit family and stay connected to home. At 16, she moved to Norway to attend an international high school, where she lived and studied alongside students from more than 100 countries. She then moved to the United States and studied biology at UNC Chapel Hill before coming to UCLA for medical school. Nare became interested in anesthesiology for its combination of physiology, pharmacology, procedures and the privilege of caring for patients during particularly vulnerable moments. She joined the Canales Lab early in medical school, where her work focuses on understanding barriers and facilitators to postoperative delirium screening in the PACU and improving its implementation in clinical practice.",
        hobbies: "Nare’s time in Norway sparked a lasting fascination with different cultures, foods and traditions. She now travels whenever her schedule allows and is often guilty of planning her next trip while she is still on the current one. When she cannot get on a plane, living in Los Angeles provides plenty to explore through its diverse communities and food scene. She also enjoys playing tennis, discovering new coffee shops and practicing her latte art at home, with the dream of having a coffee shop of her own one day.",
        future: "Nare hopes to pursue anesthesiology and is especially interested in obstetric anesthesia, women’s health, and improving patients’ experiences with pain and perioperative care. She is also passionate about finding meaningful ways to contribute to Armenian healthcare. As her medical training progresses, she would love to give back through direct work and collaboration in Armenia as well as by supporting Armenian communities in the United States."
      },
      {
        name: "Michelle Ryder",
        role: "Medical Student",
        school: "David Geffen School of Medicine at UCLA",
        photo: "images/team/michelle-ryder.jpg",
        about: "I grew up in Massachusetts before moving to Baltimore for college. I double majored in Molecular and Cellular Biology and Public Health at Johns Hopkins as a student athlete. I moved to LA post-college and in the midst of COVID to teach high school math in West Adams. I was lucky enough to be accepted to DGSOM. I came into medical school very undifferentiated and unsure. I did know that education, specifically medical education, would be a huge part of whatever specialty I wanted to pursue. Dr. Canales does so much in resident education, restructuring the UCLA anesthesia curriculum, and simulations. Her lab was a perfect fit for me.",
        hobbies: "Outside of medicine, I love gardening and am so proud of our passionfruit, carolina reapers, and finger limes. I have two dogs, a cat, and a wonderful fiance. My fiance and I met teaching and I still visit the school he teaches at for a medical enrichment program. I play field hockey or ice hockey most Sundays and go to the gym during the week.",
        future: "Medical education is a huge part of my pathway and my future. I would love to continue to teach as a resident, fellow, and eventually an attending! I would also love to continue working with local high school students who are underrepresented in medicine. My former students are a large part of the reason I am here at UCLA and I would be remiss to forget that. I am pursuing anesthesia and am excited to apply this cycle."
      },
      {
        name: "Howard Y. Hong",
        role: "Medical Student",
        school: "UMass Chan Medical School",
        photo: "images/team/howard-hong.jpg",
        about: "Howard grew up in the Bay Area and recently graduated from UCLA before beginning medical school at UMass Chan Medical School in Massachusetts. He first joined the Canales Lab as an undergraduate student researcher in 2022 and has continued working with the team ever since. This past summer, he was fortunate to be selected for the Foundation for Anesthesia Education and Research (FAER) Medical Student Anesthesia Research Fellowship (MSARF), returning to the Canales Lab to continue exploring research in anesthesiology and postoperative outcomes.",
        hobbies: "Outside of medicine and research, Howard enjoys baking, gardening, and swimming. He also loves to find new scenic views, enjoy a crisp Diet Coke, and share stories and laughs with friends.",
        future: "Howard is interested in academic medicine, particularly the intersection of research, mentorship, and clinical care, and is set on pursuing anesthesiology. His time in the Canales Lab has shown him the value of collaboration and mentorship in shaping future physicians and researchers, and he hopes to pay it forward as his career develops."
      },
      {
        name: "Lillian Phung",
        role: "Medical Student",
        school: "Drexel University College of Medicine",
        photo: "images/team/lillian-phung.jpg",
        about: "Lilly grew up in Philadelphia, Pennsylvania, studied Philosophy at the University of Pennsylvania, and is now finishing her medical degree at Drexel University College of Medicine. Lilly completed the Foundation for Anesthesia Education and Research (FAER) Medical Student Anesthesia Research Fellowship (MSARF) in 2024, where she matched into Dr. Canales’ Lab at UCLA. Since then, she has been continuing to investigate areas ranging from postoperative delirium to anesthesiology education with Dr. Canales and other teammates.",
        hobbies: "When not in the hospital, you’ll find Lilly spending time with her friends, whether studying at cafes or boba shops, or trying new restaurants around town. On the weekends she likes to hike, and in the winters she loves to ski. She also loves to travel!!",
        future: "Lilly is applying to anesthesiology residency and would be excited to meet her future community. Her time in the Canales Lab has inspired her interest in research, so she will continue scholarship throughout the next four years and is striving to become an excellent anesthesiologist."
      },
      {
        name: "Christian Park",
        role: "Medical Student",
        school: "UC Riverside School of Medicine",
        photo: "images/team/christian-park.jpg",
        about: "Christian grew up in Southern California and attended Emory University before returning back to pursue his medical degree at UC Riverside SOM. He joined the Canales Lab through the Foundation for Anesthesia Education and Research (FAER) Medical Student Anesthesia Research Fellowship (MSARF) in 2024, where he studied the relationship between benzodiazepine premedication and postoperative delirium. He has continued collaborating with Dr. Canales and the lab, contributing to projects focused on postoperative neurocognitive outcomes and recovery.",
        hobbies: "Outside of medicine, Christian enjoys staying active, whether playing pickup basketball, Spikeball, soccer, or swimming. He also enjoys going to the gym and getting in a good workout. In his free time, he loves spending time with family and friends, taking walks along the beach at sunset, and finding any excuse to be outdoors.",
        future: "Christian is applying to anesthesiology residency and hopes to become a skilled and compassionate anesthesiologist. His time in the Canales Lab has shown him how meaningful mentorship and collaboration can shape both research and medical training, and he hopes to provide that same support to others throughout his career."
      },
      {
        name: "Josh Martins-Caulfield",
        role: "Medical Student",
        school: "Icahn School of Medicine at Mount Sinai",
        photo: "images/team/josh-martins-caulfield.jpg",
        about: "Josh grew up in Ann Arbor, Michigan and didn’t go very far for college, earning his degree in public health at the University of Michigan (go blue!). He took one gap year where he did research on ethnic differences in cognitive decline in Corpus Christi, Texas, then started medical school at the Icahn School of Medicine at Mount Sinai in New York City. Once he was a medical student, Josh participated in the FAER MSARF program where he was connected to the Canales lab. In between his M1 and M2 years, Josh spent the summer in the PACU at UCLA with Dr. Canales studying delirium in older adults, and is still currently contributing to the Canales lab’s research.",
        hobbies: "In his free time, Josh likes to play soccer, watch football (and dominate in fantasy football), watch movies, and go on runs in Central Park. He is an avid Letterboxd user and loves discussing his favorite films. He also is fascinated with politics and can usually name all 100 US senators (depending on how sharp he is that day)!",
        future: "Josh has long been interested in academic medicine and hopes to continue down that path in his future career. He loves teaching and mentoring people going through the journey he went on and receiving that from people who have come before him. Josh is leaning towards applying into anesthesiology for residency but reserves the right to change his mind. Check back later!"
      }
    ]
  },
  {
    section: "Undergraduate Students",
    members: [
      {
        name: "Gabriel Xavier",
        role: "Undergraduate Research Assistant",
        school: "Psychobiology, UCLA",
        photo: "images/team/gabriel-xavier.jpg",
        about: "Gabriel grew up in San Diego California before coming to UCLA to pursue a degree in Psychobiology as an undergraduate student in 2025. His interest in medicine began at a young age where he was inspired by physicians such as his mother. Throughout high school he took initiative to participate in clinical volunteering and shadowing which reinforced his passion of helping others through medicine. Gabriel came across the Canales Lab when searching for undergraduate research opportunities related to anesthesia and the rest is history.",
        hobbies: "In his free time Gabriel enjoys surfing, fishing, running, cooking, and going to the gym. He has been all over the world chasing surf from Costa Rica to South Africa and pretty much everywhere in between.",
        future: "Gabriel's future plans include finishing his undergraduate degree and then attending medical school in hopes of one day becoming an Anesthesiologist."
      }
    ]
  },
  {
    section: "Research Volunteers",
    members: [
      {
        name: "Ayliz Urkmez",
        role: "Research Volunteer",
        school: "B.S. Biochemistry, UCLA",
        photo: "images/team/ayliz-urkmez.jpg",
        about: "Ayliz recently graduated from UCLA with a degree in Biochemistry and has lived in both California and Türkiye. During her time at UCLA, she developed a strong interest in medicine through her science coursework and clinical volunteer experiences in hospital settings. This interest ultimately led her to Dr. Canales’ research group, where she is currently contributing to the Preoperative Risk and Postsurgical Pain research project.",
        hobbies: "In her free time, she loves spending time with friends and family, watching movies and TV shows, reading, swimming, and spending time outdoors. She enjoys staying active and expressing her creative side through performance-based activities and has been involved in color guard, dance, and theatre.",
        future: "Her future plans include attending medical school and continuing to explore both the clinical and research sides of medicine. She would love to stay involved in research throughout her medical training while continuing to learn through direct patient care experiences."
      },
      {
        name: "Aryaman Singh",
        role: "Research Volunteer",
        school: "B.S. Psychobiology, UCLA",
        photo: "images/team/aryaman-singh.jpg",
        about: "Aryaman grew up in Santa Clarita, California, and graduated from UCLA with a B.S. in Psychobiology. He joined the perioperative research lab as an undergraduate, driven by his interest in neuroscience, aging, and patient care. His work focuses on developing programs aimed at improving perioperative care and recovery for older surgical patients.",
        hobbies: "Outside the lab, Aryaman enjoys playing guitar, basketball, finding new music, working out, cooking, watching anime, and gaming. He especially loves traveling and hopes to visit every continent at least once (yes, even Antarctica). He also enjoys trying new foods, spending time with friends and family, and learning an unreasonable number of useless facts about space.",
        future: "Aryaman plans to attend medical school and pursue a career in anesthesiology. He hopes to continue conducting research in perioperative medicine and contribute to improving how postoperative neurocognitive disorders are recognized, prevented, and managed."
      },
      {
        name: "Fawziah Fariha",
        role: "Research Volunteer",
        school: "M.S. Biomedical Sciences, Icahn School of Medicine at Mount Sinai",
        photo: "images/team/fawziah-fariha.jpg",
        about: "Fariha was born in Bangladesh and moved to New York at the age of nine. She double majored in Psychology and Theology at Fordham University, with a minor in Biological Sciences on the Pre-Health track. After graduating, she participated in the UCLA PREP program in 2023, where she shadowed Dr. Yu in Anesthesiology, who connected her to Dr. Canales. Fariha then completed her Master of Biomedical Sciences at the Icahn School of Medicine at Mount Sinai, with a thesis on white matter and suicidal behavior using UK Biobank neuroimaging data. Since January 2026, she has volunteered with Dr. Canales's team, working remotely on two studies. The first draws on interviews with anesthesiology staff to understand how delirium screening is carried out in the PACU. The second uses statewide inpatient data from Georgia to ask whether a patient's preferred language is associated with outcomes after cesarean delivery.",
        hobbies: "In her free time, Fariha loves to dance. She has performed hip hop and Bollywood since high school, from school talent shows to cultural showcases and charity events. When she isn't on stage, she's usually painting landscapes or exploring photography, taking nature shots with her digital camera on road trips.",
        future: "Fariha plans to pursue MD/PhD programs and is keeping her specialty options open. She plans to continue research throughout her training, with the goal of developing new interventions for patients and addressing healthcare disparities. One day, she would like to open a practice in the United States and set up free clinics in Bangladesh."
      }
    ]
  }
];
