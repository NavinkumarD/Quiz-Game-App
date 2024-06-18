# Quiz-Game-App
In this repository, we created a quiz game app using react. This quiz game app contains 10 multiple-choice questions about India and the user want to select an option as answer for the respected questions, it will show the selected option is correct or not, if its not, it will show the right answer for the respected question. Each file in this repository is used to make up the quiz game app. The description about each file in this repository are follows: -

Quiz.js: This React component, called Quiz, offers a quiz with question and answer possibilities. It leverages context to access data and functions, and it displays the current question, the user's chosen response, the correct answer, and navigation buttons for going on to the next question or viewing the final result. The user can select an answer, and the component will check the answer and navigate accordingly.

Result.js: The quiz results are displayed in this React component called Result. It leverages context to access data and actions, and it displays the user's score, a score-related message, and a "Start Over" button. The component determines whether the user's score exceeds the passing criterion (half of the total score), and sets the backdrop color to green for passing and red for failing. When the user clicks the "Start Over" button, the quiz resumes.

Start.js: Start is a React component that displays the start page for a quiz game. It leverages context to access data and functions. The component has the headline "Quiz Game App" and a "Start Quiz" button. When the button is pressed, the startQuiz function is executed, which most likely initiates the quiz. The component is only displayed when the showStart variable is set to true.

datacontext.js: This React component, named datacontext, is a context provider that manages the state and behavior of a quiz app. It uses the useState and useEffect hooks to manage the quiz data, user interaction, and display states. The component loads JSON data, sets a single question, starts the quiz, checks the answer, moves to the next question, shows the result, and restarts the quiz. The component provides these functions and states to child components through the context. The component is responsible for controlling the flow of the quiz app and updating the states accordingly.

App.js: this App component is the entry point of the application and it renders three main pages:
  -Start page: This is the welcome page of the quiz app.
  -Quiz page: This is where the actual quiz questions are displayed.
  -Result page: This page shows the final result of the quiz.
The DataProvider component ensures that these pages can communicate with each other and share data, making it a single, cohesive quiz app.
