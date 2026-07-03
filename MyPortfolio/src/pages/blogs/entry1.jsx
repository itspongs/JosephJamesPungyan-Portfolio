import pungyan from '../../assets/images/blogEntry1/pungyan.jpg'
import gavira from '../../assets/images/blogEntry1/gavira.jpg'
import vega from '../../assets/images/blogEntry1/vega.jpg'
import deJesus from '../../assets/images/blogEntry1/de_jesus.png'

const Entry1 = {
    id: 'entry1',
    entry: 'BLOG ENTRY #1',
    title: 'ConQuest, Our Final Java Project',
    date: 'APRIL 27, 2026',
    readTime: '7 MINUTES READ',
    excerpt: 'How we built and finalized our Final Java Project as our exit ticket for our Intermediate Programming major course in our First Year, Second Semester, and what I have learned throughout this journey.',
    tags: ['JAVA', 'PROJECT', 'QUIZ', 'COLLEGE'],
    content: [
        { type: 'heading', text: 'The Course' },
        { type: 'paragraph', text: `It all started from our major course in our first year, second semester of college. The Intermediate Programming course introduced us to the core language, Java. I've already learned C in our first semester of the first year of college, covering its fundamentals and programming concepts. But unlike C, Java uses a different approach, with packages and additional programming concepts such as Java Swing (GUI), classes, and object-oriented programming (OOP).` },

        { type: 'heading', text: 'The Project Details and Specifications' },
        { type: 'paragraph', text: `As our course entered the semester's finals, our professor gave us the final Java project. That is to create a Java application using all the lessons taught throughout the course. It was this moment that I realized that all the programming I have been learning has a purpose.` },
        { type: 'paragraph', text: `For this final project, we weren't just going to create any Java application. The professor provided us with what applications we should be making:` },
        { type: 'paragraph', text: `• Simple Banking System\n• Library Book Management System\n• Inventory Management System\n• Quiz Game System\n• Appointment Scheduling System`},
        { type: 'paragraph', text: `In choosing which application we'd be making, the professor appointed the point person for each group by drawing lots. Our group is assigned to make an application of the Quiz Game System.\n  ` },
        { type: 'paragraph', text: `We were provided a guide on what the project must include. We must submit a complete and functional Java program. The files must be submitted as a zip file, including the program manual, with the deadline on April 20, 2026, at 6:00pm.` },

        { type: 'heading', text: 'The Groupmates Who Made it Possible' },
        { type: 'paragraph', text: `The professor then introduced us to the groupmates that I'll be working with. Each group consists of four members, and our class had ten groups.` },
        { type: 'paragraph', text: `My groupmates are Zeus Gavira Angelo, a classmate from my section, and a close friend in college. The other two are from the other section, whom I am not familiar with, Frances Vega and Francis Lawrence De Jesus. We came together as a team and started planning for the final Java project. We decided that I would be the point person for the group.` },
        { type: 'image-group', images: [
            { src: pungyan,  caption: 'Joseph James Pungyan (Point Person)' },
            { src: gavira,   caption: 'Zeus Angelo Gavira' },
            { src: vega,     caption: 'Frances Vega' },
            { src: deJesus,  caption: 'Francis Lawrence De Jesus' },
        ]},

        { type: 'heading', text: `My Part as the Point Person`},
        { type: 'paragraph', text: `Being the point person Isn't as easy as it seems, but it’s been a great experience despite the heavy Finals workload. It wasn’t just the Intermediate Programming project we were dealing with, but I continued to work on the project as it was my responsibility as the point person.`},
        { type: 'paragraph', text: `What I did first was create an online document for us to see and edit, writing some ideas and brainstorming. This way, the group members will compile each other's ideas and share their thoughts so we can reach an agreement.` },
        { type: 'paragraph', text: `I also created a guide for my members on how to use GitHub, since most of them aren't yet familiar with it, and that’s okay because I’ve been in the same situation before. This is essential when it comes to working on projects like these. This final project is a practice for us to use GitHub and it would be very beneficial for us in the coming future as programmers.` },
        { type: 'paragraph', text: `We’ve finalized the ideas in the end with the plan of having six categories for our quiz game. For each category, there are fifty questions and will randomly pick thirty items within those questions. The six categories are:` },
        { type: 'paragraph', text: `• Geography\n •	Driving\n• General Knowledge\n•	Media\n• Programming\n • Brainrot `},
        { type: 'paragraph', text: `I assigned myself and my group members in which categories we will be working on throughout the project. Giving them tasks through the online document in a way we do our programming exercises from our professors, this approach is very effective as I received the precise and expected results from our codes.`},
        { type: 'paragraph', text: `The folder structure is also part of it, planning where the folder and files should be located such as the package consisting the Java classes which is imported to the main Java file.`},
        { type: 'paragraph', text: `Creating the GUI Layout is the part that I’ve been struggling with, creating flow charts in our online document making sure to keep its interactive purpose, but I managed to complete it anyway and coded with Java Swing in the end.`},


        { type: 'heading', text: `How “ConQuest” was made`},
        { type: 'paragraph', text: `The name “ConQuest” came from the idea of Me and Zeus Angelo Gavira. During the planning phase, the word “Quest” came into our minds from the word “Questions” itself, answering questions making them right is an achievement. The inner self me remembered the vehicle that I always drove with, it was our Hilux Conquest. It came to a conclusion with us finalizing the application name Conquest.`},
        { type: 'paragraph', text: `Before proceeding with the final application with interactive GUIs, we decided to create the terminal output first. This served as our proof of concept and as the alternative submission in case we don’t have enough time to create the final application.`},
        { type: 'paragraph', text: `In the coding process, I created the main Java file and the other group members contributed to their category quiz Java class, inserting their compiled questions from the document to the code, which will be imported to the main file. But for the questions regarding this case as terminal output, we only used thirty questions and will randomly pick ten questions. The results of the quizzes are then saved to the text file at the local folder and will also display at the terminal. Consisting 2D arrays, 7 classes in the package, methods, loops, and objects as requirements for the project.`},
        { type: 'paragraph', text: `After the terminal output was successful, we then transitioned to our final application which consists of interactive GUI using Java Swing, a package that imports music and images from the local files for better experience despite being simple and little.`},
        { type: 'paragraph', text: `The coding process with the GUI surely took two days and then we inserted all the category quizzes once again with interactive buttons and images. This time, all the fifty questions are used and will randomly pick thirty questions. The results of the quizzes are saved to the text file at the local folder and will be displayed inside the application. The package consists of 13 classes, images for the quizzes, and music. 2D arrays, methods, loops, and objects are included as requirements for the project.`},
        { type: 'paragraph', text: `After all the hard work in such an amount of time, it was finally done. We compressed the file and submitted it.    `},

        { type: 'heading', text: `What I’ve Learned After Everything`},
        { type: 'paragraph', text: `It was a very fun and great experience as a programmer and it is a very huge step for me. I could say that this project is only just the beginning and there’s more than meets the eye. It motivates me to explore more and build something that’s beyond just a simple quiz game. I was still in my first year of college and there’s a lot of time for me to create more.`},
        { type: 'paragraph', text: `I’m not a very good leader and I had a bad history about it. But seeing myself leading a team with the same passion as mine made me realize that the computer field is where I belong. But I’m not perfect and I acknowledge my flaws and shortcomings, yet I continue to work hard, create ideas and help the group members to contribute and shape our project. I’m grateful to have wonderful groupmates that helped and commended me for what I do and I evaluated them as my best team I had yet so far.`},
        { type: 'paragraph', text: `Overall, this motivated me to pursue what I am currently doing and explore more. I am proud of what we’ve made and to the people that contributed to this project. A quest that ended successfully and is driving me to make more.`}
    ]
}

export default Entry1
