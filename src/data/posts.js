export const categories = [
  { name: 'News', slug: 'news', description: 'The latest anime announcements, industry updates and releases.' },
  { name: 'Reviews', slug: 'reviews', description: 'Thoughtful anime reviews, ratings and recommendations.' },
  { name: 'Guides', slug: 'guides', description: 'Anime watch orders, explainers and beginner guides.' },
  { name: 'Manga', slug: 'manga', description: 'Manga news, chapters, recommendations and discussions.' },
  { name: 'Characters', slug: 'characters', description: 'Character profiles, backstories and analysis.' }
];

// Article content is stored as editorial sections so the page can render a
// meaningful heading hierarchy instead of a wall of unstructured paragraphs.
export const posts = [
  {
    slug: 'frieren-beyond-journeys-end-review',
    anime: 'Frieren: Beyond Journey\'s End',
    title: 'Frieren: Beyond Journey’s End Review – Story, Characters & Animation',
    category: 'Reviews',
    date: '2026-11-15',
    modifiedDate: '2026-11-15',
    author: 'AnimeZenith Editorial',
    excerpt: 'A spoiler-light review of Frieren: Beyond Journey’s End, exploring its post-adventure premise, character writing, visual direction and deliberately reflective pace.',
    tags: ['Frieren', 'Anime Review', 'Fantasy Anime', 'Madhouse'],
    image: '/images/frieren-cover.jpg',
    avatar: '/images/char-frieren.png',
    spoilerLevel: 'Spoiler-light',
    sections: [
      { heading: 'What is Frieren: Beyond Journey’s End about?', paragraphs: [
        'Many fantasy stories build toward the defeat of a great enemy. Frieren: Beyond Journey’s End begins after that victory. The elven mage Frieren has already travelled with Hero Himmel, the priest Heiter and the warrior Eisen, and their ten-year adventure has brought peace. Because Frieren’s life is exceptionally long, the passage of time means something very different to her than it does to her human companions.',
        'A reunion decades later makes that difference impossible to ignore. After confronting the reality of human mortality and her own distance from the people around her, Frieren begins another journey: this time, she wants to understand people more deeply. The premise turns a familiar fantasy setting into a story about memory, attention and the relationships we only fully appreciate when time has passed.'
      ]},
      { heading: 'Storytelling: small moments carry real weight', paragraphs: [
        'The series is at its strongest when it allows an ordinary encounter to reveal something about a character. A local custom, a remembered conversation or a seemingly minor request can become meaningful because Frieren is learning to connect present experiences with memories of her former party. The past is not treated as a separate prologue; it continually changes how she understands the people she meets now.',
        'This structure gives the journey a gentle forward movement. Individual episodes and story arcs can have their own goals, but they also contribute to Frieren’s gradual emotional development. The show rarely needs to announce its themes. It lets a detail return later with a different meaning, trusting viewers to recognise the connection.'
      ]},
      { heading: 'Frieren, Fern and Stark', paragraphs: [
        'Frieren is compelling because her emotional reserve is not presented as a simple lack of feeling. Her long life has shaped her sense of time, and she often understands the importance of an interaction only after reflecting on it. Watching her make an effort to learn about others is the central pleasure of the series.',
        'Fern provides a contrasting perspective. She is more attentive to everyday responsibilities and often gives the travelling group structure. Her relationship with Frieren works in both directions: Fern is a student, but she also challenges her mentor’s habits and assumptions.',
        'Stark adds a different kind of energy. His nervousness can make him seem less confident than his abilities suggest, and his interactions with Fern and Frieren bring humour into the quieter stretches. Together, the three form a believable travelling party because their personalities do not always align, yet their shared experiences gradually build trust.'
      ]},
      { heading: 'Animation, atmosphere and music', paragraphs: [
        'The anime is produced by Madhouse, with music by Evan Call. Its visual approach supports the story rather than competing with it. Landscapes, changing weather, architecture and small character expressions give the journey a strong sense of place. When magic battles occur, the contrast with the quieter scenes makes the action feel consequential instead of constant.',
        'The soundtrack also helps establish the series’ reflective mood. It can make a landscape feel expansive or give a memory emotional space without explaining exactly what the viewer should feel. The result is an audiovisual style that is patient and carefully controlled.'
      ]},
      { heading: 'Pacing: who will enjoy it?', paragraphs: [
        'Frieren is not structured like a nonstop action series. Some episodes focus on travel, conversation, local problems or the habits that develop when people spend a long time together. Viewers who need a major cliffhanger in every episode may find this approach slow. Those who enjoy character-led fantasy will likely find that the quieter material is the point, not filler between fights.',
        'The series still includes magical confrontations and moments of tension, but it uses them as part of a broader journey. Its strongest scenes often depend on what the characters have learned about one another rather than on the scale of the threat.'
      ]},
      { heading: 'Final verdict', paragraphs: [
        'Frieren: Beyond Journey’s End is an excellent choice for viewers who want fantasy with emotional patience, memorable character relationships and a world that feels lived in. Its post-adventure premise gives it a distinctive perspective, while Frieren, Fern and Stark provide a warm centre for the journey. The deliberate pace will not suit every mood, but it is also what allows the series’ themes of time, memory and connection to develop naturally.',
        'Our recommendation: watch it when you are in the mood for a thoughtful fantasy adventure rather than a constant sequence of battles. The series rewards attention to small details and the way relationships change over time.'
      ]}
    ],
    sources: [
      { label: 'Madhouse – Frieren: Beyond Journey’s End (series information and staff)', url: 'https://madhouse.co.jp/english/works/tv_frieren-anime/' },
      { label: 'Official Frieren anime – staff and cast', url: 'https://frieren-anime.jp/staffcast/' }
    ]
  },
  {
    slug: 'jujutsu-kaisen-shibuya-incident-impact',
    anime: 'Jujutsu Kaisen',
    title: 'Jujutsu Kaisen Shibuya Incident Arc Explained: Turning Points & Consequences',
    category: 'Guides',
    date: '2026-11-14',
    modifiedDate: '2026-11-15',
    author: 'AnimeZenith Editorial',
    excerpt: 'A spoiler-marked guide to the Shibuya Incident in Jujutsu Kaisen, explaining the plan, Gojo’s removal from the conflict and the arc’s lasting consequences.',
    tags: ['Jujutsu Kaisen', 'Shibuya Incident', 'Arc Analysis', 'Anime Guide'],
    image: '/images/jujutsu-kaisen-cover.jpg',
    avatar: '/images/char-gojo.png',
    spoilerLevel: 'Major spoilers for the Shibuya Incident',
    sections: [
      { heading: 'What is the Shibuya Incident?', paragraphs: [
        'The Shibuya Incident is a major storyline in Jujutsu Kaisen’s second anime season. It brings the conflict between jujutsu sorcerers and the curse users and cursed spirits working against them into a crowded urban setting. Rather than presenting a straightforward contest between two sides, the arc follows several connected operations unfolding at once.',
        'The central strategic objective is to isolate Satoru Gojo. His strength makes him a decisive advantage for the sorcerers, so the opposing side designs the situation around limiting his ability to act freely. This changes the nature of the conflict: the heroes are not simply trying to win individual encounters; they are trying to understand and respond to a coordinated plan.'
      ]},
      { heading: 'Why Gojo’s sealing changes the story', paragraphs: [
        'Gojo’s removal is the arc’s defining turning point. Until this moment, his presence has shaped how both allies and enemies assess danger. Other characters know that he cannot solve every problem, but his existence provides a powerful form of reassurance. Once he is sealed, that safety net disappears.',
        'The consequences are both practical and emotional. Sorcerers who might previously have relied on Gojo must make decisions with incomplete information and fewer options. The opposing side gains room to pursue its wider objectives, while the younger characters are forced to take greater responsibility. The shift matters because it changes the rules of the story, not merely the result of one confrontation.'
      ]},
      { heading: 'Yuji Itadori and the human cost of the conflict', paragraphs: [
        'Yuji’s role keeps the arc connected to the series’ central question: what does it mean to protect people in a world where the costs of sorcery are so high? He is courageous and determined, but determination does not make him immune to uncertainty or emotional pressure. The events in Shibuya challenge his understanding of responsibility and force him to confront the consequences of being connected to Sukuna.',
        'The arc also gives supporting characters meaningful roles. Their separate assignments and encounters show that the crisis cannot be understood from one person’s perspective. The structure moves between groups, allowing the audience to see how decisions in one location affect the wider situation.'
      ]},
      { heading: 'A turning point for the power balance', paragraphs: [
        'Before Shibuya, the balance of power often appears to depend on a small number of exceptional individuals. The incident exposes the weakness of relying on that arrangement. When one key figure is removed, the wider jujutsu world has to deal with the consequences immediately. The result is a story that feels less stable and more politically complicated.',
        'This is also why the arc has a lasting effect on the characters’ relationships. Trust, leadership and responsibility become more difficult questions. People must decide what to do without the certainty that a stronger ally will arrive in time.'
      ]},
      { heading: 'How the anime adaptation presents the arc', paragraphs: [
        'The anime’s direction uses rapid changes in location and perspective to communicate the scale of the incident. That approach can feel intentionally overwhelming, because the characters themselves are responding to a situation that is difficult to control. Action sequences are important, but the arc’s structure and consequences are what give them context.',
        'The visual presentation also helps distinguish different encounters and emotional registers. Instead of treating every confrontation as an isolated highlight, the adaptation places them inside a continuous crisis. For viewers who prefer a simple tournament-style progression, the number of simultaneous threads may take some adjustment.'
      ]},
      { heading: 'Why Shibuya matters after the arc ends', paragraphs: [
        'The Shibuya Incident matters because the story cannot return to its earlier status quo. Gojo’s absence, the damage to the sorcerers’ organisation and the characters’ personal experiences all shape what follows. The arc functions as a dividing line between an earlier stage of the series and a more uncertain period in which the remaining characters must find a new way forward.',
        'In short, Shibuya is not important only because it contains major battles or dramatic reveals. It is important because it changes what the characters can rely on, what they fear and what they must take responsibility for next.'
      ]},
      { heading: 'Who should watch this arc?', paragraphs: [
        'The arc is essential for viewers following Jujutsu Kaisen’s main story and especially rewarding for those interested in strategy, ensemble storytelling and consequences that carry into later events. It is not a good starting point for newcomers: watch the earlier material first so the characters, abilities and relationships have context.',
        'If you are revisiting the series, pay attention to the plan surrounding Gojo, the way the narrative moves between groups and how Yuji’s understanding of responsibility changes. Those threads explain why Shibuya is such a significant turning point.'
      ]}
    ],
    sources: [
      { label: 'Official Jujutsu Kaisen anime – story and series information', url: 'https://jujutsukaisen.jp/story/' }
    ]
  },
  {
    slug: 'demon-slayer-complete-breathing-styles-guide',
    anime: 'Demon Slayer',
    title: 'Demon Slayer Breathing Styles Explained: Origins, Users & Differences',
    category: 'Guides',
    date: '2026-11-13',
    modifiedDate: '2026-11-15',
    author: 'AnimeZenith Editorial',
    excerpt: 'Understand how Breathing Styles work in Demon Slayer, how the major styles relate to one another and which characters are associated with them.',
    tags: ['Demon Slayer', 'Kimetsu no Yaiba', 'Breathing Styles', 'Anime Guide'],
    image: '/images/demon-slayer-cover.jpg',
    avatar: '/images/char-tanjiro.png',
    spoilerLevel: 'Some character and technique details; no late-story ending spoilers',
    sections: [
      { heading: 'What are Breathing Styles?', paragraphs: [
        'In Demon Slayer: Kimetsu no Yaiba, Breathing Styles are disciplined swordsmanship methods built around specialised breathing, physical conditioning and distinct combat forms. They are part of the Demon Slayer Corps’ approach to fighting demons. The styles give different swordsmen a framework for developing techniques that suit their training, temperament and abilities.',
        'The elemental imagery shown during many attacks is a visual language for the audience. It communicates the character and feeling of a technique, but it should not be read as a simple claim that every swordsman literally controls the corresponding natural element. The core of the system is the practitioner’s movement, timing, breathing and sword skill.'
      ]},
      { heading: 'The origin: Sun Breathing', paragraphs: [
        'Sun Breathing is presented as the original style from which the other major styles developed. Its importance is both historical and thematic: it connects the combat system to the earliest foundations of the Corps’ specialised training. The later styles are not unrelated powers; they are adaptations that emerged as different swordsmen developed methods they could use effectively.',
        'The story connects Tanjiro’s family tradition of Hinokami Kagura with this history. The relationship between the dance and the breathing method is revealed gradually, so viewers should distinguish what Tanjiro initially understands from what the wider story later explains.'
      ]},
      { heading: 'The major styles and their users', paragraphs: [
        'Water Breathing is associated with Sakonji Urokodaki, Tanjiro’s early training and Giyu Tomioka. Its forms are often presented as adaptable and flowing, making it a useful example of a style that can be applied in different situations. Tanjiro begins with this foundation before his family’s tradition becomes more important to his development.',
        'Flame Breathing is associated with the Rengoku family and Kyojuro Rengoku. Its presentation emphasises direct commitment and forceful forward movement. The style’s identity is closely tied to Rengoku’s character: confident, protective and unwavering in his sense of duty.',
        'Thunder Breathing is associated with Zenitsu Agatsuma and his training under Jigoro Kuwajima. Its signature approach places strong emphasis on explosive movement and speed. Zenitsu’s development shows how a student can specialise deeply in a particular part of a style rather than being equally comfortable with every form.',
        'Wind Breathing is associated with Sanemi Shinazugawa. Its aggressive visual language reflects a forceful approach to sword combat. Stone Breathing, used by Gyomei Himejima, has a different identity and is linked to a distinctive weapon and exceptional physical discipline.',
        'Mist Breathing is associated with Muichiro Tokito. Its forms and movement are presented around concealment, changing rhythm and confusing an opponent’s reading of distance. Beast Breathing is different: Inosuke Hashibira develops his own style through instinctive experimentation and an unusual personal approach to combat.',
        'Other styles appear across the wider story, including Insect, Love and Serpent Breathing. They demonstrate that the system is not limited to a short list of elemental labels. Each style has its own history, user and practical expression.'
      ]},
      { heading: 'How the styles are related', paragraphs: [
        'A useful way to understand the system is to think of Sun Breathing as the root and the other major styles as branches adapted by individual swordsmen. The adaptations reflect differences in ability and training. A style that suits one practitioner may not be the best fit for another, so the system allows variety without losing its shared foundation.',
        'This relationship also explains why a character’s style is more than a visual effect. It represents a history of instruction, practice and personal adaptation. The same broad family of techniques can look different when performed by different users because the practitioner’s strengths and habits matter.'
      ]},
      { heading: 'Breathing Style, form and technique: what is the difference?', paragraphs: [
        'A Breathing Style is the overall discipline, such as Water or Flame Breathing. A form is a named method within that discipline. A swordsman learns and practises forms as part of the larger style, and individual users may show different levels of skill or develop variations. This distinction is useful when reading episode guides or character profiles: the style is the system, while the form is one specific expression of it.',
        'Not every character uses every form in the same way. Training, experience and physical limits affect what a swordsman can perform. The series uses these differences to make combat styles feel connected to character development rather than like interchangeable lists of special moves.'
      ]},
      { heading: 'Quick comparison', paragraphs: [
        'The table below is a broad orientation guide, not a ranking. It summarises the identities most commonly associated with the styles in the anime. Individual forms and later revelations add more detail.'
      ]},
      { heading: 'Which Breathing Style is the strongest?', paragraphs: [
        'The series does not offer a simple universal ranking that settles every matchup. Sun Breathing has special historical importance, but the outcome of a confrontation also depends on the user, experience, situation and opponent. A character’s skill cannot be reduced to the name of their style.',
        'For the same reason, it is more useful to compare what each style contributes to the story than to treat the list as a power-level chart. The differences help distinguish characters and show how a shared discipline can produce many forms of expertise.'
      ]},
      { heading: 'Final takeaway', paragraphs: [
        'Breathing Styles are one of Demon Slayer’s most recognisable world-building ideas because they connect combat, training and character identity. Start with the distinction between the original Sun Breathing and its later adaptations, then look at the individual users. Once the system is understood as a family of related disciplines rather than a collection of unrelated elemental powers, the techniques and character choices become much easier to follow.'
      ]}
    ],
    comparison: [
      { style: 'Sun', user: 'Yoriichi Tsugikuni; linked to Tanjiro’s family tradition', identity: 'The original style and source of the major branches' },
      { style: 'Water', user: 'Giyu Tomioka; initially taught to Tanjiro', identity: 'Adaptable, flowing movements' },
      { style: 'Flame', user: 'Kyojuro Rengoku', identity: 'Direct, forceful swordsmanship' },
      { style: 'Thunder', user: 'Zenitsu Agatsuma', identity: 'Explosive movement and speed' },
      { style: 'Wind', user: 'Sanemi Shinazugawa', identity: 'Aggressive, sweeping attacks' },
      { style: 'Stone', user: 'Gyomei Himejima', identity: 'Distinctive weapon use and powerful defence' },
      { style: 'Mist', user: 'Muichiro Tokito', identity: 'Changing rhythm and misdirection' },
      { style: 'Beast', user: 'Inosuke Hashibira', identity: 'Self-developed, instinctive approach' },
      { style: 'Insect', user: 'Shinobu Kocho', identity: 'Specialised techniques that reflect her physical approach' },
      { style: 'Love', user: 'Mitsuri Kanroji', identity: 'A highly individual style built around her flexibility and weapon' },
      { style: 'Serpent', user: 'Obanai Iguro', identity: 'Unusual, curving sword movements' }
    ],
    sources: [
      { label: 'Official Demon Slayer anime portal – story and episode information', url: 'https://kimetsu.com/anime/story/' },
      { label: 'Official Demon Slayer – Tanjiro Kamado: Hinokami Kagura episode story', url: 'https://kimetsu.com/anime/risshihen/story/?story=20' }
    ]
  },
  {
    slug: 'solo-leveling-anime-review-hype-vs-reality',
    anime: 'Solo Leveling',
    title: 'Solo Leveling Anime Review: Animation, Story & Overall Verdict',
    category: 'Reviews',
    date: '2026-11-12',
    modifiedDate: '2026-11-15',
    author: 'AnimeZenith Editorial',
    excerpt: 'A balanced review of Solo Leveling, looking at Sung Jinwoo’s progression, the hunter-and-gate premise, action direction and the limits of its supporting cast.',
    tags: ['Solo Leveling', 'Anime Review', 'Action Anime', 'Sung Jinwoo'],
    image: '/images/solo-leveling-cover.jpg',
    avatar: '/images/char-jinwoo.png',
    spoilerLevel: 'Spoiler-light for the early story',
    sections: [
      { heading: 'What is Solo Leveling about?', paragraphs: [
        'Solo Leveling takes place in a world where gates connect ordinary places to dangerous dungeons. People known as hunters awaken special abilities and enter those spaces to deal with the threats inside. Sung Jinwoo begins as a low-ranked hunter who is widely regarded as unusually weak. During a dungeon raid, he encounters a situation that changes the direction of his life: he gains access to a system that allows him to grow stronger through quests and progression.',
        'That central idea gives the series a clear engine. Each new challenge can test Jinwoo’s abilities, reveal another part of the system or introduce a more demanding level of danger. The audience understands the basic goal quickly, which makes the show easy to follow even when its world expands.'
      ]},
      { heading: 'Sung Jinwoo: the appeal of visible progression', paragraphs: [
        'Jinwoo is the main reason the power-fantasy structure works. His early position gives the audience a clear baseline, and the system makes improvement visible. Training, rewards and new abilities are not abstract developments: they are presented as steps in a progression that viewers can track.',
        'The trade-off is that the supporting cast can sometimes feel less developed than the central character. Because the narrative spends so much time with Jinwoo’s growth, other hunters may function more as context for his changing reputation than as equally detailed protagonists. Viewers who want a large ensemble with several equally prominent arcs may want more from these side characters.'
      ]},
      { heading: 'Action and animation', paragraphs: [
        'The anime adaptation is produced by A-1 Pictures. Its action sequences are designed around readable movement, strong silhouettes and the contrast between Jinwoo’s earlier limitations and his later confidence. The gate and dungeon setting also gives the production room to change visual environments and opponent designs from one encounter to another.',
        'The strongest action scenes are not only about visual intensity. They show how Jinwoo applies what he has learned and how a new ability changes his options. That connection between progression and choreography is central to the series’ appeal.'
      ]},
      { heading: 'Story and pacing: strengths and limitations', paragraphs: [
        'Solo Leveling is focused on momentum. The system provides goals, the dungeons provide challenges and Jinwoo’s growth supplies a continuing reason to watch the next episode. This direct structure is a strength for viewers who enjoy clear progression and escalating action.',
        'It can also make some developments feel familiar. The pattern of facing a new challenge, gaining an advantage and moving toward a stronger opponent is part of the premise, but it may feel repetitive if a viewer is looking primarily for unpredictable mysteries or extended interpersonal drama. The show is most satisfying when it balances the progression loop with character choices and consequences.'
      ]},
      { heading: 'How it compares with the source material', paragraphs: [
        'Solo Leveling is adapted from the Korean web novel by Chugong and the webtoon adaptation illustrated by DUBU (REDICE STUDIO). Viewers coming from the webtoon may notice differences in pacing, scene order or the amount of time given to supporting characters. An adaptation is not a panel-by-panel copy: it has to make choices about timing, sound, movement and episode structure.',
        'For anime-only viewers, the series can be followed on its own. For readers, the adaptation offers a different way to experience the same broad progression, especially through music, voice performances and animated action.'
      ]},
      { heading: 'Who should watch Solo Leveling?', paragraphs: [
        'It is a strong fit for viewers who enjoy action fantasy, game-like progression, dungeon settings and a central character whose abilities change visibly over time. It is less suited to viewers who need a large ensemble cast or a story driven mainly by quiet psychological conversations.',
        'If the premise sounds appealing, give the early episodes time to establish the rules of the world and Jinwoo’s starting point. Those foundations make the later progression more satisfying.'
      ]},
      { heading: 'Final verdict', paragraphs: [
        'Solo Leveling understands its central appeal and delivers a clear, energetic action-fantasy experience. Its most effective elements are the progression system, Jinwoo’s changing capabilities and the visual presentation of major encounters. Its narrower focus can leave some supporting characters underexplored, and its repeated progression structure will not appeal to everyone.',
        'Our recommendation: watch it if you want a visually driven power fantasy with a straightforward hook. Approach it for momentum and spectacle rather than expecting the same kind of ensemble depth or thematic complexity found in slower character dramas.'
      ]}
    ],
    sources: [
      { label: 'Official Solo Leveling anime – introduction and staff/cast', url: 'https://sololeveling-anime.net/1st/' },
      { label: 'Official Solo Leveling anime – episode stories', url: 'https://sololeveling-anime.net/story/1st.html' }
    ]
  },
  {
    slug: 'attack-on-titan-legacy-eren-yeager',
    anime: 'Attack on Titan',
    title: 'Eren Yeager Character Analysis: Freedom, Motivation & Tragic Legacy',
    category: 'Characters',
    date: '2026-11-11',
    modifiedDate: '2026-11-15',
    author: 'AnimeZenith Editorial',
    excerpt: 'A full-series character analysis of Eren Yeager, tracing his early desire for freedom, the revelations beyond the walls and the choices that define his legacy.',
    tags: ['Attack on Titan', 'Eren Yeager', 'Character Analysis', 'Anime'],
    image: '/images/attack-on-titan-cover.jpg',
    avatar: '/images/char-eren.jpg',
    spoilerLevel: 'Major spoilers for the complete Attack on Titan story',
    sections: [
      { heading: 'Who is Eren Yeager?', paragraphs: [
        'Eren Yeager begins Attack on Titan as a boy who cannot accept the limits placed on his world. The walls protect the people inside them, but to Eren they also represent confinement. He dreams of seeing what lies beyond them and is frustrated by a society that has learned to treat a restricted life as normal.',
        'The destruction of his home and the loss of his mother turn that frustration into a personal mission. At first, his goal appears simple: eliminate the Titans and make the outside world accessible. As the story reveals more about the world, however, the meaning of freedom becomes far more complicated.'
      ]},
      { heading: 'The early Eren: anger, determination and loyalty', paragraphs: [
        'Early Eren is impulsive and often acts before he has considered every consequence. His anger can make him difficult to guide, but it also reflects his refusal to accept helplessness. He is driven by a strong sense of loyalty to the people closest to him, especially Mikasa and Armin, and he wants them to have the freedom to choose their own lives.',
        'This version of Eren is not simply a different person from the one seen later. The desire for freedom remains consistent. What changes is his understanding of the world, the people he sees as obstacles and the methods he becomes willing to consider.'
      ]},
      { heading: 'The basement revelation changes the meaning of the story', paragraphs: [
        'The discovery of the truth beyond the walls changes Attack on Titan from a struggle that appears to be about humanity surviving against Titans into a much wider conflict involving history, identity and political power. Eren learns that the people outside the walls are not merely an unknown landscape waiting to be explored. They are part of a world with its own fears, memories and hostility.',
        'This revelation does not erase Eren’s desire for freedom. Instead, it puts that desire into a context where other people also have histories and claims. The conflict becomes morally harder because the boundary between a threat and an ordinary person is no longer easy to draw.'
      ]},
      { heading: 'Future memories and the question of choice', paragraphs: [
        'As Eren learns more about the power of the Titans and the way memories can connect different points in time, the story raises difficult questions about knowledge and agency. Seeing fragments of future events affects how he understands his options. The audience is left to consider whether foreknowledge limits a person’s freedom or whether it becomes another reason they use to justify a decision.',
        'It is important not to treat this as a simple answer that Eren had no choice. The series deliberately leaves room to examine the relationship between what he sees, what he wants and what he decides to do. His knowledge influences him, but the consequences of his actions remain part of the moral debate.'
      ]},
      { heading: 'Mikasa and Armin: relationships at the centre', paragraphs: [
        'Mikasa and Armin are essential to understanding Eren because they represent bonds that existed before the world became fully visible to him. Mikasa’s loyalty and Armin’s curiosity offer different ways of responding to fear and uncertainty. Their disagreements with Eren are not merely tactical disputes; they reveal how differently the three understand freedom, safety and responsibility.',
        'Eren’s changing relationship with them is painful because the audience has seen the trust that once connected the group. The later conflict asks whether affection can survive when people make choices that place them on opposing sides. It also challenges the idea that protecting someone automatically gives a person the right to decide their future.'
      ]},
      { heading: 'The Rumbling and the moral weight of Eren’s choices', paragraphs: [
        'The Rumbling is the clearest expression of the distance between Eren’s original dream and the actions he ultimately takes. His stated desire to protect people close to him cannot make the scale of the plan morally acceptable. The story places his motives beside the consequences, refusing to let personal pain or loyalty erase the harm caused to others.',
        'That tension is central to why Eren remains controversial. Some viewers focus on the fear and history that shaped him; others focus on the immense suffering his decision brings about. A serious reading has to hold both parts in view without confusing explanation with justification.'
      ]},
      { heading: 'Hero, antagonist or tragic protagonist?', paragraphs: [
        'Eren occupies several narrative roles across the series. He begins as the protagonist whose goals guide the audience, later becomes a source of uncertainty and eventually stands as the central threat his former friends must confront. Those labels describe his place in the story, but none fully explains his character.',
        'Calling him only a hero ignores the consequences of his choices. Calling him only a villain ignores the fears, attachments and earlier ideals that shaped his path. The more useful interpretation is that Eren is a tragic protagonist: a character whose enduring desire for freedom becomes entangled with an increasingly destructive understanding of how to achieve it.'
      ]},
      { heading: 'Final analysis: what is Eren’s legacy?', paragraphs: [
        'Eren’s legacy is defined by contradiction. He wants freedom but makes choices that deny it to others. He cares deeply about his friends yet pushes them into a conflict they did not choose. He is shaped by forces larger than himself, but the story still asks the audience to judge what he does with the knowledge and power he receives.',
        'That is why his character arc continues to invite debate. Attack on Titan does not offer a comfortable answer that makes every decision acceptable. Instead, it asks viewers to examine how fear, historical grievance, loyalty and the pursuit of freedom can become entangled. Eren is memorable not because every choice is defensible, but because the series makes the cost of those choices impossible to ignore.'
      ]}
    ],
    sources: [
      { label: 'Official Attack on Titan – final story introduction', url: 'https://shingeki.tv/movie_final/introduction/' },
      { label: 'Official Attack on Titan – Eren Yeager character profile', url: 'https://shingeki.tv/season1/character/' }
    ]
  }
];

export const getReadingTime = (post) => {
  const text = (post.sections || []).flatMap(section => section.paragraphs || []).join(' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};
