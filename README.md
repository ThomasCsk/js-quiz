# Thomas Ciszek's JavaScript Quiz

## Description

- This project uses HTML, CSS, and JavaScript to create a timed quiz with the ability to save initials and scores locally
- This project was incredibly challenging, pushing my knowledge of JavaScript to its highest limit
- There were two sections in particular that gave me grief :

#### The Questions section
- This section had two main problems for me, the first being coordinating the questions with the timer, and the second being cycling the questions.
- The first problem was fairly simple in the end, it just required me to declare the value of the timer globally, so that the question responses could edit it if needed.
- The second problem was more difficult and led to me using a globally declared variable 'i' and effectivly turning multiple functions into a for loop.

#### The Save/Load Data Sections
- This section, while not taking as long as the previous section, gave me just about the same amount of trouble. 
- My main issue with these two functions is that I had initially made a seperate html file for my highscores page.
- This meant that while I was able to locally save the infomation I needed, it didnt transfer over to the seperate html file.
- In moving my highscores page html into the index.html file, I broke multiple parts of my code, making it difficult to fix.
 
## The Website

The website is currently deployed at https://thomascsk.github.io/js-quiz/
![A picture of the deployed website](/assets/images/website-screenshot.PNG)
