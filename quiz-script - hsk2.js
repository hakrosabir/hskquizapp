const startButton = document.getElementById('start-btn');
const questionText = document.getElementById('question');
const answerOptions = document.getElementById('answers');
const buttonsContainer = document.getElementById('buttons');
const feedback = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const resetButton = document.getElementById('reset-btn');
const showResultButton = document.getElementById('show-result-btn');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  { question: ' "吧 ba" mp. used at the end of a sentence to express speculative interrogation', answers: ['Yes', 'No', 'Maybe', 'I don\'t know'], correctIndex: 0 },
  { question: ' "吧 ba " mp. used at the end of an imperative sentence', answers: ['Agree', 'Disagree', 'Follow', 'Ignore'], correctIndex: 1 },
  { question: 'bái 白 adj. ', answers: ['Red', 'Blue', 'Green', 'White'], correctIndex: 3 },
  { question: 'bǎi 百 num.', answers: ['Ten', 'Fifty', 'One Hundred', 'Two Hundred'], correctIndex: 2 },
  { question: '帮助 bāngzhù  v.', answers: ['Help; assist; aid; support', 'Obstruct', 'Ignore', 'Avoid'], correctIndex: 0 },
  { question: '报纸 bàozhǐ n.', answers: ['Magazine', 'Book', 'Newspaper', 'Brochure'], correctIndex: 2 },
  { question: '比 bǐ prep. ', answers: ['Addition', 'Subtraction', 'Comparison', 'Multiplication'], correctIndex: 2 },
  { question: '别 bié adv. don’t', answers: ['Yes', 'No', 'Maybe', 'I don\'t know'], correctIndex: 1 },
  { question: '长 cháng adj. ', answers: ['Short', 'Medium', 'Long', 'Very Long'], correctIndex: 2 },
  { question: '唱歌 chànggē v.', answers: ['Speak', 'Dance', 'Sing', 'Play'], correctIndex: 2 },
  { question: '出 chū v. ', answers: ['Enter', 'Exit; go out', 'Stay', 'Move'], correctIndex: 1 },
  { question: '穿 chuān v. ', answers: ['Remove', 'Wear; put on', 'Hold', 'Drop'], correctIndex: 1 },
  { question: '次 cì nm./vm. number of times', answers: ['Once', 'Twice', 'Thrice', 'Four Times'], correctIndex: 2 },
  { question: '从 cóng prep. ', answers: ['To', 'from; since', 'Between', 'Among'], correctIndex: 1 },
  { question: '错 cuò adj. ', answers: ['Correct', 'Incorrect', 'Right', 'Left'], correctIndex: 1 },
  { question: '打篮球 dǎ lánqiú ', answers: ['Play Soccer', 'Play Basketball', 'Swim', 'Run'], correctIndex: 1 },
  { question: '大家 dàjiā pron.', answers: ['Some', 'None', 'everyone; everybody', 'Few'], correctIndex: 2 },
  { question: '到 dào v.', answers: ['Depart', 'arrive; reach', 'Travel', 'Stop'], correctIndex: 1 },
  { question: '得 de sa. marker of complement', answers: ['Yes', 'No', 'Maybe', 'I don\'t know'], correctIndex: 0 },
  { question: '等 děng v.', answers: ['Wait', 'Leave', 'Stay', 'Hurry'], correctIndex: 0 },
  { question: '弟弟 dìdi n.', answers: ['Older Brother', 'Younger Brother', 'Sister', 'Cousin'], correctIndex: 1 },
  { question: '第一 dì-yī num.', answers: ['First', 'Second', 'Third', 'Fourth'], correctIndex: 0 },
  { question: '懂 dǒng v. ', answers: ['Understand', 'Confuse', 'Misunderstand', 'Ignore'], correctIndex: 0 },
  { question: '对 duì adj. ', answers: ['Right', 'Wrong', 'Correct', 'Incorrect'], correctIndex: 2 },
  { question: '对 duì prep. ', answers: ['To', 'From', 'to; towards', 'Away'], correctIndex: 2 },
  { question: '房间 fángjiān n. ', answers: ['Living Room', 'Bedroom', 'Kitchen', 'Room'], correctIndex: 3 },
  { question: '非常 fēicháng adv.', answers: ['Not Very', 'Somewhat', 'Very', 'Extremely'], correctIndex: 2 },
  { question: '服务员 fúwùyuán n. ', answers: ['Customer', 'waiter; waitress', 'Manager', 'Owner'], correctIndex: 1 },
  { question: '高 gāo adj.', answers: ['Short', 'Average', 'tall; high', 'Very Tall'], correctIndex: 2 },
  { question: '告诉 gàosu v.', answers: ['Ask', 'Tell', 'Answer', 'Ignore'], correctIndex: 1 },
  { question: '哥哥 gēge n.', answers: ['Elder Sister', 'Younger Sister', 'Elder Brother', 'Younger Brother'], correctIndex: 2 },
  { question: '给 gěi v. ', answers: ['Take', 'Give, hand over', 'Receive', 'Reject'], correctIndex: 1 },
  { question: '公共汽车 gōnggòngqìchē n.', answers: ['Car', 'Bus', 'Bicycle', 'Train'], correctIndex: 1 },
  { question: '公司 gōngsī n.', answers: ['School', 'company; firm', 'Hospital', 'Factory'], correctIndex: 1 },
  { question: '狗 gǒu n. ', answers: ['Cat', 'Dog', 'Bird', 'Fish'], correctIndex: 1 },
  { question: '贵 guì adj.', answers: ['Cheap', 'Affordable', 'expensive; costly', 'Luxurious'], correctIndex: 2 },
  { question: '过 guo sa. used after a verb, referring to sth. that happened previously', answers: ['Now', 'Before', 'After', 'During'], correctIndex: 1 },
  { question: '还 hái adv.', answers: ['Already', 'Not Yet', 'still; yet', 'Finished'], correctIndex: 2 },
  { question: '孩子 háizi n.', answers: ['Son', 'Daughter', 'Child, son or daughter', 'Sibling'], correctIndex: 2 },
  { question: '好吃 hǎochī ', answers: ['Delicious', 'Tasty', 'Bland', 'Spicy'], correctIndex: 0 },
  { question: '黑 hēi adj.', answers: ['White', 'black; dark', 'Gray', 'Dark'], correctIndex: 1 },
  { question: '红 hóng adj. ', answers: ['Blue', 'Green', 'Yellow', 'Red'], correctIndex: 3 },
  { question: '欢迎 huānyíng v.', answers: ['Welcome', 'Goodbye', 'Hello', 'Farewell'], correctIndex: 0 },
  { question: '回答 huídá v.', answers: ['Ask', 'Ignore', 'Respond', 'Answer'], correctIndex: 3 },
  { question: '火车站 huǒchēzhàn', answers: ['Railway station', 'Airport', 'Egg', 'Classroom'], correctIndex: 0 },
  { question: '机场 jīchǎng', answers: ['Railway station', 'Airport', 'Egg', 'Classroom'], correctIndex: 1 },
  { question: '鸡蛋 jīdàn', answers: ['Railway station', 'Airport', 'Egg', 'Classroom'], correctIndex: 2 },
  { question: '件 jiàn', answers: ['Railway station', 'Airport', 'Egg', 'Classroom'], correctIndex: 3 },
  { question: '教室 jiàoshì', answers: ['Classroom', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '姐姐 jiějie', answers: ['Elder Sister', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '介绍 jièshào', answers: ['Introduce sb. or sth.', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '进 jìn', answers: ['Enter', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '近 jìn', answers: ['Close; Near', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '就 jiù', answers: ['Indicating certainty; right on', 'Immediately; right now; right away', 'Railway station', 'Airport'], correctIndex: 1 },
  { question: '觉得 juéde', answers: ['Feel; Think', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '咖啡 kāfēi', answers: ['Coffee', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '开始 kāishǐ', answers: ['Start; Begin', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '考试 kǎoshì', answers: ['Examination / Take a test', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '可能 kěnéng', answers: ['May; Can', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '可以 kěyǐ', answers: ['Can; May', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '课 kè', answers: ['Lesson; Class', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '快 kuài', answers: ['Fast; Be going to; Will; Shall', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '快乐 kuàilè', answers: ['Happy; Joyful; Cheerful; Glad', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '累 lèi', answers: ['Tired; Fatigued', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '离 lí', answers: ['Away from', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '两 liǎng', answers: ['Two', 'Railway station', 'Airport', 'Egg'], correctIndex: 0 },
  { question: '路 lù', answers: ['Travel', 'Slow', 'Road', 'Sell'], correctIndex: 2 },
  { question: '陆游 lǚyóu', answers: ['Road', 'Travel', 'Sell', 'Slow'], correctIndex: 1 },
  { question: '买 mài', answers: ['Travel', 'Road', 'Slow', 'Sell'], correctIndex: 3 },
  { question: 'màn', answers: ['Road', 'Travel', 'Sell', 'Slow'], correctIndex: 2 },
  { question: 'máng', answers: ['Sell', 'Travel', 'Road', 'Slow'], correctIndex: 3 },
  { question: 'māo', answers: ['Travel', 'Slow', 'Road', 'Sell'], correctIndex: 2 },
  { question: 'měi', answers: ['Sell', 'Road', 'Slow', 'Travel'], correctIndex: 1 },
  { question: 'mèimei', answers: ['Road', 'Travel', 'Sell', 'Slow'], correctIndex: 3 },
  { question: 'mén', answers: ['Sell', 'Slow', 'Road', 'Travel'], correctIndex: 2 },
  { question: 'nán', answers: ['Travel', 'Road', 'Sell', 'Slow'], correctIndex: 1 },
  { question: 'nín', answers: ['Road', 'Slow', 'Sell', 'Travel'], correctIndex: 3 },
  { question: 'niúnǎi', answers: ['Slow', 'Travel', 'Road', 'Sell'], correctIndex: 1 },
  { question: 'nǚ', answers: ['Travel', 'Slow', 'Road', 'Sell'], correctIndex: 0 },
  { question: 'pángbiān', answers: ['Road', 'Sell', 'Slow', 'Travel'], correctIndex: 1 },
  { question: 'pǎobù', answers: ['Slow', 'Travel', 'Road', 'Sell'], correctIndex: 2 },
  { question: 'piányi', answers: ['Travel', 'Sell', 'Road', 'Slow'], correctIndex: 3 },
  { question: 'piào', answers: ['Slow', 'Road', 'Sell', 'Travel'], correctIndex: 2 },
  { question: 'qīzi', answers: ['Travel', 'Slow', 'Road', 'Sell'], correctIndex: 1 },
  { question: 'qǐchuáng', answers: ['Travel', 'Slow', 'Sell', 'Road'], correctIndex: 0 },
  { question: 'qiān', answers: ['Road', 'Travel', 'Slow', 'Sell'], correctIndex: 3 },
  { question: 'qiānbǐ', answers: ['Slow', 'Travel', 'Road', 'Sell'], correctIndex: 2 },
  { question: 'qíng', answers: ['Road', 'Travel', 'Slow', 'Sell'], correctIndex: 1 },
  { question: 'qùnián', answers: ['Road', 'Slow', 'Sell', 'Travel'], correctIndex: 2 },
  { question: 'ràng', answers: ['Road', 'Travel', 'Sell', 'Slow'], correctIndex: 1 },
  { question: 'rì', answers: ['Road', 'Travel', 'Slow', 'Sell'], correctIndex: 2 },
  { question: 'shàngbān', answers: ['Travel', 'Slow', 'Road', 'Sell'], correctIndex: 0 },
  { question: 'shēntǐ', answers: ['Slow', 'Road', 'Travel', 'Sell'], correctIndex: 2 },
  { question: 'shēngbìng', answers: ['Road', 'Travel', 'Sell', 'Slow'], correctIndex: 1 },
  { question: 'shēngrì', answers: ['Matter; Business; Circumstance; Event; Affair; Incident; Occurrence', 'Birthday', 'Wrist Watch; Watch', 'Time'], correctIndex: 1 },
  { question: 'shíjiān', answers: ['Wash', 'Hour', 'Time', 'Laugh; Smile'], correctIndex: 2 },
  { question: 'shìqing', answers: ['Why', 'Dance', 'Play Soccer', 'Matter; Business; Circumstance; Event; Affair; Incident; Occurrence'], correctIndex: 3 },
  { question: 'shǒubiǎo', answers: ['Dance', 'Wrist Watch; Watch', 'Why', 'Play Soccer'], correctIndex: 1 },
  { question: 'shǒujī', answers: ['Hope; Wish; Want; Be Desirous Of', 'Mobile Phone', 'Wrist Watch; Watch', 'New; Up-to-date'], correctIndex: 2 },
  { question: 'sòng', answers: ['Wrist Watch; Watch', 'Play', 'Give sb. sth. as a Gift', 'Swim'], correctIndex: 2 },
  { question: 'suīrán…dànshì…', answers: ['Play Soccer', 'Though; But; However', 'Why', 'Wrist Watch; Watch'], correctIndex: 1 },
  { question: 'tā', answers: ['Mobile Phone', 'Why', 'It; Its', 'Matter; Business; Circumstance; Event; Affair; Incident; Occurrence'], correctIndex: 2 },
  { question: 'tī zúqiú', answers: ['Laugh; Smile', 'Play Soccer', 'Questions, Problems (in a Test or a Quiz)', 'Wash'], correctIndex: 1 },
  { question: 'tí', answers: ['Play Soccer', 'Dance', 'Wash', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 3 },
  { question: 'tiàowǔ', answers: ['Dance', 'Hour', 'Wrist Watch; Watch', 'Wash'], correctIndex: 0 },
  { question: 'wài', answers: ['Wash', 'Wrist Watch; Watch', 'Outer; Outside', 'Why'], correctIndex: 2 },
  { question: 'wán', answers: ['Wrist Watch; Watch', 'Questions, Problems (in a Test or a Quiz)', 'Play', 'Why'], correctIndex: 2 },
  { question: 'wán', answers: ['Play Soccer', 'Wrist Watch; Watch', 'Play', 'Wash'], correctIndex: 2 },
  { question: 'wǎnshang', answers: ['Wrist Watch; Watch', 'Evening', 'Wash', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 1 },
  { question: 'wèi shénme', answers: ['Hour', 'Why', 'Wrist Watch; Watch', 'Wash'], correctIndex: 3 },
  { question: 'wèn', answers: ['Dance', 'Wrist Watch; Watch', 'Wash', 'Ask; Inquire After'], correctIndex: 3 },
  { question: 'wèntí', answers: ['Questions, Problems (in a Test or a Quiz)', 'Wrist Watch; Watch', 'Wash', 'Dance'], correctIndex: 0 },
  { question: 'xīguā', answers: ['Wrist Watch; Watch', 'Wash', 'Watermelon', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 2 },
  { question: 'xīwàng', answers: ['Wrist Watch; Watch', 'Wash', 'Hope; Wish; Want; Be Desirous Of', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 2 },
  { question: 'xǐ', answers: ['Play', 'Questions, Problems (in a Test or a Quiz)', 'Wrist Watch; Watch', 'Wash'], correctIndex: 3 },
  { question: 'xiǎoshí', answers: ['Why', 'Hour', 'Wrist Watch; Watch', 'Wash'], correctIndex: 1 },
  { question: 'xiào', answers: ['Questions, Problems (in a Test or a Quiz)', 'Wrist Watch; Watch', 'Hour', 'Wash'], correctIndex: 3 },
  { question: 'xīn', answers: ['Wrist Watch; Watch', 'New; Up-to-date', 'Wash', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 1 },
  { question: 'xìng', answers: ['Matter; Business; Circumstance; Event; Affair; Incident; Occurrence', 'Take … As Surname', 'Wash', 'Play Soccer'], correctIndex: 0 },
  { question: 'xiūxi', answers: ['Wrist Watch; Watch', 'Wash', 'Relax; Have a Rest; Take a Break', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 2 },
  { question: 'xuě', answers: ['Matter; Business; Circumstance; Event; Affair; Incident; Occurrence', 'Snow', 'Wrist Watch; Watch', 'Wash'], correctIndex: 1 },
  { question: 'yánsè', answers: ['Wrist Watch; Watch', 'Wash', 'Color', 'Play Soccer'], correctIndex: 2 },
  { question: 'yǎnjing', answers: ['Wash', 'Wrist Watch; Watch', 'Eye', 'Questions, Problems (in a Test or a Quiz)'], correctIndex: 2 },
  { question: 'yángròu', answers: ['Watermelon', 'Wash', 'Mutton', 'Wrist Watch; Watch'], correctIndex: 3 },
  { question: 'yào', answers: ['Hour', 'Hope; Want; Wish; Be Desirous Of', 'Medicine', 'Wrist Watch; Watch'], correctIndex: 2 },
  { question: 'yě', answers: ['Wrist Watch; Watch', 'Wash', 'Also; Too; As Well; Either', 'Hope; Wish; Want; Be Desirous Of'], correctIndex: 2 },
  { question: 'yíxià', answers: ['Wrist Watch; Watch', 'Wash', 'Once; In a Short While', 'Hope; Wish; Want; Be Desirous Of'], correctIndex: 2 },
  { question: 'yìqǐ', answers: ['Wrist Watch; Watch', 'Wash', 'Together', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yǐjīng', answers: ['Wrist Watch; Watch', 'Wash', 'Already; Yet', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yìsi', answers: ['Wrist Watch; Watch', 'Wash', 'Meaning', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yīnwèi…suǒyǐ…', answers: ['Wrist Watch; Watch', 'Wash', 'On Account Of; Because Of', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yīn', answers: ['Wrist Watch; Watch', 'Wash', 'Cloudy; Overcast', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yóuyǒng', answers: ['Wrist Watch; Watch', 'Wash', 'Swim', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yòubian', answers: ['Wrist Watch; Watch', 'Wash', 'Right; Right Side', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yú', answers: ['Wash', 'Wrist Watch; Watch', 'Fish', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yuǎn', answers: ['Wrist Watch; Watch', 'Wash', 'Far', 'Once; In a Short While'], correctIndex: 2 },
  { question: 'yùndòng', answers: ['Take Exercise'], correctIndex: 0 },
  { question: 'zài', answers: ['Again', 'More; Further'], correctIndex: 0 },
  { question: 'zǎoshang', answers: ['Morning'], correctIndex: 0 },
  { question: 'zhàngfu', answers: ['Husband'], correctIndex: 0 },
  { question: 'zhǎo', answers: ['Seek; Look For'], correctIndex: 0 },
  { question: 'zhe', answers: ['Used After a Verb, Indicating That the Action Starts and Continues'], correctIndex: 0 },
  { question: 'zhēn', answers: ['Indeed; Really'], correctIndex: 0 },
  { question: 'zhèngzài', answers: ['Be + Verb + Ing; In the Process Of; In the Course Of; In the Middle Of; In the Act Of'], correctIndex: 0 },
  { question: 'zhīdào', answers: ['Know; Be Aware Of'], correctIndex: 0 },
  { question: 'zhǔnbèi', answers: ['Be Going To; Intend; Plan; Prepare'], correctIndex: 0 },
  { question: 'zìxíngchē', answers: ['Bicycle'], correctIndex: 0 },
  { question: 'zǒu', answers: ['Walk; Go on Foot', 'Leave; Go Away; Depart'], correctIndex: 0 },
  { question: 'zuì', answers: ['The Most'], correctIndex: 0 },
  { question: 'zuǒbian', answers: ['Left; Left Side'], correctIndex: 0 }

    
  // Add more questions as needed
];


function startQuiz() {
  startButton.style.display = 'none';
  buttonsContainer.style.display = 'block';
  score = 0;
  currentQuestionIndex = 0;
  showQuestion(questions[currentQuestionIndex]);
  prevButton.style.display = 'none'; // Initially hide the "Back to Previous Question" button
  resetButton.style.display = 'none'; // Initially hide the "Reset Question" button
  nextButton.style.display = 'none'; // Initially hide the "Next Question" button
  showResultButton.style.display = 'none'; // Initially hide the "Show Result" button
}


function startQuiz() {
  startButton.style.display = 'none'; // Hide the "Start" button
  buttonsContainer.style.display = 'block'; // Show the container for quiz buttons
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionText.textContent = question.question;
  answerOptions.innerHTML = '';

  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(index));
    answerOptions.appendChild(button);
  });

  feedback.textContent = '';
  nextButton.style.display = 'none';
  prevButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
  resetButton.style.display = 'none';
  showResultButton.style.display = 'none';
  enableButtons();
}

function selectAnswer(index) {
  const question = questions[currentQuestionIndex];

  if (index === question.correctIndex) {
    score++;
    feedback.textContent = 'Correct!';
    feedback.style.color = '#3498db';
    nextButton.style.display = 'block';
    prevButton.style.display = 'none';
    resetButton.style.display = 'none';
    showResultButton.style.display = currentQuestionIndex === questions.length - 1 ? 'block' : 'none';
  } else {
    feedback.textContent = 'Incorrect. Try again.';
    feedback.style.color = '#e74c3c';
    resetButton.style.display = 'block';
    showResultButton.style.display = 'none';
  }
}

function enableButtons() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.disabled = false;
  });
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
    feedback.textContent = '';
    nextButton.style.display = 'none';
    prevButton.style.display = 'block';
    resetButton.style.display = 'none';
    showResultButton.style.display = 'none';
  } else {
    showResult();
  }
}

function prevQuestion() {
  currentQuestionIndex--;

  if (currentQuestionIndex >= 0) {
    showQuestion(questions[currentQuestionIndex]);
    feedback.textContent = '';
    nextButton.style.display = 'none';
    prevButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    resetButton.style.display = 'none';
    showResultButton.style.display = 'none';
  } else {
    currentQuestionIndex = 0;
  }
}

function resetQuestion() {
  showQuestion(questions[currentQuestionIndex]);
  feedback.textContent = '';
  nextButton.style.display = 'none';
  resetButton.style.display = 'none';
  showResultButton.style.display = 'none';
}

function showResult() {
  answerOptions.innerHTML = `Your score: ${score}/${questions.length}`;
  nextButton.style.display = 'none';
  prevButton.style.display = 'none';
  resetButton.style.display = 'none';
  showResultButton.style.display = 'none';
}

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
prevButton.addEventListener('click', prevQuestion);
resetButton.addEventListener('click', resetQuestion);


