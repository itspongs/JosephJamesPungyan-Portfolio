const Entry2 = {
    id: 'entry2',
    entry: 'BLOG ENTRY #2',
    title: 'Making my Portfolio Website',
    date: 'MAY 14, 2026',
    readTime: '7 MINUTES READ',
    excerpt: 'A journey of designing and developing my own portfolio website to showcase my projects, skills, creativity, and growth as an aspiring developer.',
    tags: ['PORTFOLIO', 'WEB', 'REACT', 'FRONTEND', 'VERCEL'],
    content: [
        { type: 'heading', text: 'Why I created it?' },
        { type: 'paragraph', text: `The second semester of my first year of college is almost over. I wondered myself what I should do to be productive as summer drew near. Perhaps it's time for me to make something about myself in keeping with the degree I selected with enthusiasm and aptitude. According to what I've seen, students pursuing degrees in computer science and other similar fields have an online portfolio that details their background, experiences, and completed projects. My classmates have one as well. Since I started college, it has inspired me to create one.` },
        { type: 'paragraph', text: `Making this portfolio also allows me to practice my frontend programming skills. That's where I learned React.js in pieces. I have prior understanding of HTML and CSS, as well as React.js, an open-source JavaScript package that I am currently learning. It was a challenge for me to advance my programming and web development skills.` },
        { type: 'paragraph', text: `The purpose of my portfolio is to share my background and journey through technology. It shows what I have achieved so far, what I can do, and the goals I want to focus on as I continue my journey in computers and programming.` },
        
        { type: 'heading', text: 'Designing the Portfolio' },
        { type: 'paragraph', text: `In April 30, 2026, before writing the code for my website. I started first engaging with the designing the UI of the Portfolio. In addition to the fact that it was my first time using Figma, I find it challenging because I don't know how to utilize the website.` },
        { type: 'paragraph', text: `My partner, Sofia Paris Arrieta, was already familiar with UI/UX design using Figma. We worked together to create the website for my portfolio. Before the day of coding, it took us three days to design the portfolio.` },
        { type: 'paragraph', text: `My partner and I seemed to like working with Figma together, and since she was a minimalist and I was a maximalist, this experience really highlighted our differences in creativity. However, at the end of the day, what works work and it turned out to be an amazing design.` },
        
        { type: 'heading', text: 'Making the Portfolio' },
        { type: 'paragraph', text: `Once my portfolio's UI design was complete, I started by deciding which stack to employ. React is the frontend stack I use for this project because it's the one I've learned yet. However, I intend to study many frontend stacks, including TypeScript.` },
        { type: 'paragraph', text: `Since burgundy, maroon and crimson red are my favorite colors, I choose the ideal color scheme for my website.` },
        { type: 'paragraph', text: `I wanted my website to be interactive, I began by creating the Starting Page, which serves as the website's initial introduction and greets visitors with my name and a collection of my photos. I also created sections like the "About Page," where people can discover more about me, including my background, methods of learning, areas of interest, and future goals. My Timeline Page, which highlights my experiences and development, comes next. Next, my abilities, demonstrating the many stacks I employ. Users can view the projects I have created along the road on the Projects Page, which is another area. The Blogs Page comes next, where I post my writing so that people can read about my experience in the computer industry. Lastly, I made a contact area where people can view my social media accounts and email address in case they need to get in touch with me.` },
        { type: 'paragraph', text: `I made the decision to add music to my website with me playing the guitar in the background in order to make it more engaging.` },
        { type: 'paragraph', text: `I created the navigation bar for my website, which is at the top of the user interface wherever I scroll, once every section was complete. Users will be able to navigate which page they are on thanks to this. I used React-Route to organize the various portions into separate pages.` },

        { type: 'heading', text: 'Finalizing the Portfolio' },
        { type: 'paragraph', text: `After completing my portfolio, I used Vercel to launch the website. I wanted the entire look to be a reflection of my personality, and it did. ` },
        { type: 'paragraph', text: `Naturally, though, the website needed some adjustments in a few areas. However, my partner and I alone are responsible for the work and viewpoint. I also want to know what other people think. Because each creation was worthy of feedback. For this reason, I sent my portfolio website to my acquaintances.` },

        { type: 'heading', text: 'Feedbacks on the Portfolio' },
        { type: 'paragraph', text: `Feedbacks that I have received that may be essential in creating a portfolio website:` },

        { type: 'subheading', text: "1. Your portfolio's main content must be contained in a single, scrollable section." },
        { type: 'subheading-date', text: 'May 10, 2026' },
        { type: 'paragraph', text: `a.) I overemphasized "interactiveness," giving each area its own page and requiring users to click on the navigation bar to access the other sections. The majority of viewers — including the interviewers — are indolent and prefer to absorb the content on a single page. Users would become irritated with numerous clicks.` },
        { type: 'paragraph', text: `b.) I eliminated the react-router and combined the AboutPage, TimelinePage, SkillsPage, ProjectsPage, BlogsPage, and ContactSection into a single scrollable page. The navigation bar is still there, but it will indicate the material you are presently viewing. Additionally, you can navigate simply clicking on the information you wish to read, and it will automatically scroll you to that content.` },

        { type: 'subheading', text: "2. Don't let background music take over the portfolio." },
        { type: 'subheading-date', text: 'May 10, 2026' },
        { type: 'paragraph', text: `a.) To make my portfolio more interesting, I included some music. Although it might not be required, it's a pleasant extra. Although it is only a small aspect of the website, the loudness of the audio would also be bothersome.` },
        { type: 'paragraph', text: `b.) I began by adjusting the audio level to a low volume. I developed a feature that allows users to see the music that is now playing and to change or mute the audio's volume. Additionally, I created a feature that allows users to pause and play music.` },

        { type: 'subheading', text: '3. The blog entries must be routed to another page.' },
        { type: 'subheading-date', text: 'June 30, 2026' },
        { type: 'paragraph', text: `a.) I use modals to display the content of my blog. As a result, when readers read the blogs, a modal will show up with the material accessible while the main portfolio remains visible in the background. However, I was informed by a friend that it is advised to keep the content apart from the portfolio's main page. The goal is to improve the reading experience and navigation so that users may naturally use the browser's Back button and refresh the site without getting lost. A dedicated page has a unique URL.` },
        { type: 'paragraph', text: `b.) I reintroduced React Router and routed each blog entry to its own dedicated page instead of displaying the content in a modal. This provides a better reading experience, improves navigation, and gives each article its own unique URL, making it easier to bookmark, share, and access directly.` },
        { type: 'subheading', text: "P.S.: There is still space for improvement, so any recommendations are very valued and will be carefully considered. Share me your thoughts and will incorporate it in my portfolio." },

        { type: 'heading', text: 'What I want it to become' },
        { type: 'paragraph', text: `Many milestones and achievements deserve recognition. This portfolio serves as a collection of the accomplishments I have earned throughout my journey as a Computer Science student. As I continue to pursue my passion, I hope to fill this portfolio with even more achievements and projects that reflect my growth, skills, and dedication.` },
        { type: 'paragraph', text: `I also hope this portfolio becomes an inspiration to others who aspire to pursue a similar path. Starting early can open opportunities to achieve great things, and documenting your journey is something to be proud of. It reflects your growth—from starting with nothing to building meaningful projects and accomplishments through dedication and continuous learning.` },
    ]
}

export default Entry2
