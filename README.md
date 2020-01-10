

                 ####    Website for La Quincaillerie made in React/Node.Js by Sofian Delalay.   ####
    
   /* Click on the "Raw" button to see a prettier README :) Enjoy ! */
    
    0- Summary

-> Intro
-> How I worked
-> Architecture of the repository
-> How to start the program
-> Things to do in the future to improve the test

    1- Intro

This website let you to see some images from a database and then allows you to like or dislike theese images. 
You can also see the score board with every images in the database.
The only thing you can do right now is take a look at the front client and navigate from the vote page to the leaderboard.

    2- How I worked

If you want to understand the code, there are a few comments in the styles.css file and some in Rank.js and Vote.js. You can also find comments in back directory (config/database/index/routes.js). I don't have much comments because I prefered to spend more time on this dirty code (yes it's dirty I know that I can do better, but not in one day) rather than write comments that I don't actually need (yes I know comments are not for me but anyway).
For the client, I created 3 .js files. One is a router, for navigate between the 2 other files: the Vote file and the Rank file. The Vote file contain a class Vote and inside it, we have a layout wich is separed in 3 parts: the Header, the Content and the Footer.
I also created a styles.css file, it contains all the classNames needed by the tags.
For the server, I created a back directory and tried to create a database in sql with nodejs, but I couldn't afford to make it working. I tried to add images inside sql database but I failed at configuring the server to be working with react... so I couldn't connect my client with my server.
You can find the same architecture in the Rank file but without the footer (I hesitated in add one). This file contain all the design for the leaderboard.

I worked on one branch only. So you can see all my commits on the master branch. Even if I started earlier, I would have only one branch, because I don't think it's necessary to add branch when I'm alone. I know that it is a bad habit but this is how I work.

    3- Architecture of the repository

Q_repository
|___client
|    |____nodes_modules
|    |____public
|    |____src
|    |    |____assets
|    |    |      |__logo.png
|    |    |____layout
|    |    |      |__Rank.js
|    |    |      |__Vote.js
|    |    |      |__Router.js
|    |    |      |__styles.css
|    |    |__App.css
|    |    |__App.js
|    |    |__index.css
|    |    |__index.js
|    |    |__serviceWorker.js
|    |    |__App.test.js
|    |____.gitignore
|    |____Dockerfile
|    |____package.json
|    |____package-lock.json
|____back
|    |____data
|    |    |___photo
|    |    |___users
|    |____images
|    |    |__ ... (q images)
|    |____nodes_modules
|    |____config.js
|    |____database.js
|    |____index.js
|    |____routes.js
|    |____Dockerfile
|    |____package.json
|    |____package-lock.json
|____docker-compose.yml
|____launch_program.sh
|____README.md


    4- How to start the program

At the root of the repository, you can find a file name launch_program. You just have to run the following command:
                    $> ./launch_program.sh
Once the program is compiled, go to:  http://localhost:3000 (Local)
                           Or go to:  http://172.26.0.2:3000/ (on Network)
Enjoy!

    5- Things to do in the future to improve the test

If I had more time, I think I would have a database compiling with docker and the font client would allow you to vote for your favorite Q images. I would also filled the leaderboard. I think I would have had a LogIn/Register page, so you can know for wich images you actually voted. I want to clean the code, because I know I can do much better than this... I duplicated so much code that's why I want to add one file to supress all these lines. 
If you want to know the main reason I didn't actually finished all what I wanted to do (except the fact that I started the project yesterday), is because I spend so much time on the design in css... I think if I had started by the devlopment itself (server/database/access to data) I think I would have more fonctionalities.


Thank you for reading this README.
