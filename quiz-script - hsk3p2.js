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
  
  {
    question: '坏 huài adj. ',
    answers: ['Good; Well', 'Evil', 'Beautiful', 'Bad'],
    correctIndex: 3,
  },
  {
    question: '还 huán v. ',
    answers: ['Borrow', 'Return sth to the owner', 'Lend', 'Exchange'],
    correctIndex: 1,
  },
  {
    question: '环境 huánjìng n. ',
    answers: ['Weather', 'Surroundings', 'Environment; Condition', 'Circumstance'],
    correctIndex: 2,
  },
  {
    question: '换 huàn v. ',
    answers: ['Stay the same', 'Transform', 'Change', 'Exchange money'],
    correctIndex: 2,
  },
  {
    question: '黄河 Huánghé n. ',
    answers: ['Yangtze River', 'Mekong River', 'Ganges River', 'The Yellow River'],
    correctIndex: 3,
  },
  {
    question: '会议 huìyì n. ',
    answers: ['Festival', 'Party', 'Meeting', 'Gathering'],
    correctIndex: 2,
  },
  {
    question: '或者 huòzhě conj. ',
    answers: ['Maybe', 'And', 'But', 'Or'],
    correctIndex: 3,
  },
  {
    question: '几乎 jīhū adv. ',
    answers: ['Seldom', 'Always', 'Nearly; Almost', 'Rarely'],
    correctIndex: 2,
  },
  {
    question: '机会 jīhuì n. ',
    answers: ['Challenge', 'Problem', 'Luck', 'Chance; Opportunity'],
    correctIndex: 3,
  },
  {
    question: '极 jí adv. ',
    answers: ['Moderately', 'Not at all', 'Extremely; Exceedingly', 'Partially'],
    correctIndex: 2,
  },
  {
    question: '记得 jìde v. ',
    answers: ['Forget', 'Memorize', 'Learn by heart', 'Recall'],
    correctIndex: 2,
  },
  {
    question: '季节 jìjié n. ',
    answers: ['Weather', 'Climate', 'Season', 'Temperature'],
    correctIndex: 2,
  },
  {
    question: '检查 jiǎnchá v. ',
    answers: ['Ignore', 'Examine', 'Inspect; Check', 'Overlook'],
    correctIndex: 2,
  },
  {
    question: '简单 jiǎndān adj. ',
    answers: ['Complicated', 'Complex', 'Difficult', 'Easy; Simple'],
    correctIndex: 3,
  },
  {
    question: '见面 jiànmiàn v. ',
    answers: ['Meet', 'Say goodbye', 'Depart', 'Leave'],
    correctIndex: 0,
  },
  {
    question: '健康 jiànkāng adj. ',
    answers: ['Sick', 'Ill', 'Healthy', 'Unwell'],
    correctIndex: 2,
  },
  {
    question: '讲 jiǎng v. ',
    answers: ['Listen', 'Speak; Tell', 'Read', 'Write'],
    correctIndex: 1,
  },
  {
    question: '降落 jiàngluò v. ',
    answers: ['Ascend', 'Take off', 'Land', 'Fly'],
    correctIndex: 2,
  },
  {
    question: '角 jiǎo nm. ',
    answers: ['Yuan (money)', 'Dollar', 'Euro', 'Tenth of one Yuan (money)'],
    correctIndex: 3,
  },
  {
    question: '脚 jiǎo n. ',
    answers: ['Hand', 'Head', 'Leg', 'Foot'],
    correctIndex: 2,
  },

  
    {
      question: '教 jiāo v. ',
      answers: ['Learn', 'Teach', 'Speak', 'Listen'],
      correctIndex: 1,
    },
    {
      question: '接 jiē v. ',
      answers: ['Send', 'Accept; Receive', 'Reject', 'Give'],
      correctIndex: 1,
    },
    {
      question: '街道 jiēdào n. ',
      answers: ['Park', 'Square', 'Road', 'Street'],
      correctIndex: 3,
    },
    {
      question: '节目 jiémù n. ',
      answers: ['Drama', 'Concert', 'Show; Performance; Program', 'Movie'],
      correctIndex: 2,
    },
    {
      question: '节日 jiérì n. ',
      answers: ['Birthday', 'Weekend', 'Holiday; Festival', 'Anniversary'],
      correctIndex: 2,
    },
    {
      question: '结婚 jiéhūn v. ',
      answers: ['Divorce', 'Get married', 'Break up', 'Engage'],
      correctIndex: 1,
    },
    {
      question: '结束 jiéshù v. ',
      answers: ['Continue', 'Pause', 'Stop; Finish; End; Terminate', 'Begin'],
      correctIndex: 2,
    },
    {
      question: '解决 jiějué v. ',
      answers: ['Create', 'Introduce', 'Solve or resolve a problem or an issue', 'Analyze'],
      correctIndex: 2,
    },
    {
      question: '借 jiè v. ',
      answers: ['Lend', 'Return', 'Borrow; Lend', 'Take'],
      correctIndex: 2,
    },
    {
      question: '经常 jīngcháng adv. ',
      answers: ['Always', 'Sometimes', 'Never', 'Often'],
      correctIndex: 3,
    },
    {
      question: '经过 jīngguò v. ',
      answers: ['Avoid', 'Pass by', 'Pass through / by', 'Stop'],
      correctIndex: 2,
    },
    {
      question: '旧 jǐu adj. ',
      answers: ['New', 'Recent', 'Old; For a long time', 'Current'],
      correctIndex: 2,
    },
    {
      question: '旧 jiù adj. ',
      answers: ['New', 'Current', 'Old; Worn', 'Recent'],
      correctIndex: 2,
    },
    {
      question: '句子 jùzi n. ',
      answers: ['Word', 'Paragraph', 'Sentence', 'Character'],
      correctIndex: 2,
    },
    {
      question: '可爱 kě’ài adj. ',
      answers: ['Ugly', 'Handsome', 'Beautiful', 'Cute; Lovable; Likeable'],
      correctIndex: 3,
    },

      {
        question: '渴 kě adj. ',
        answers: ['Hungry', 'Thirsty', 'Full', 'Tired'],
        correctIndex: 1,
      },
      {
        question: '刻 kè n. ',
        answers: ['Minute', 'Second', 'Hour', 'Day'],
        correctIndex: 0,
      },
      {
        question: '客人 kèrén n. ',
        answers: ['Customer', 'Visitor', 'Employee', 'Host'],
        correctIndex: 1,
      },
      {
        question: '空调 kōngtiáo n. ',
        answers: ['Heater', 'Fan', 'Air Purifier', 'Air Conditioner'],
        correctIndex: 3,
      },
      {
        question: '口 kǒu nm. ',
        answers: ['Used for people and some animals', 'Ear', 'Nose', 'Mouth'],
        correctIndex: 0,
      },
      {
        question: '哭 kū v. ',
        answers: ['Laugh', 'Smile', 'Cry; Weep', 'Sing'],
        correctIndex: 2,
      },
      {
        question: '裤子 kùzi n. ',
        answers: ['Shirt', 'Tie', 'Shoes', 'Trousers; Pants'],
        correctIndex: 3,
      },
      {
        question: '筷子 kuàizi n. ',
        answers: ['Fork', 'Knife', 'Spoon', 'Chopsticks'],
        correctIndex: 3,
      },
      {
        question: '蓝 lán adj. ',
        answers: ['Green', 'Yellow', 'Red', 'Blue'],
        correctIndex: 3,
      },
      {
        question: '老 lǎo adj. ',
        answers: ['Young', 'Middle-aged', 'Aged; Old', 'Elderly'],
        correctIndex: 2,
      },
      {
        question: '离开 líkāi v. ',
        answers: [
          'Approach',
          'Arrive at',
          'Leave; To be away from; Part from; Separate from',
          'Stay at'
        ],
        correctIndex: 2,
      },
      {
        question: '礼物 lǐwù n. ',
        answers: ['Food', 'Money', 'Letter', 'Present; Gift'],
        correctIndex: 3,
      },
      {
        question: '历史 lìshǐ n. ',
        answers: ['Math', 'Science', 'English', 'History'],
        correctIndex: 3,
      },
      {
        question: '脸 liǎn n. ',
        answers: ['Head', 'Eye', 'Ear', 'Face'],
        correctIndex: 3,
      },
      {
        question: '练习 liànxí v. ',
        answers: ['Rest', 'Sleep', 'Study', 'Practice'],
        correctIndex: 3,
      },
      {
        question: '量 liàng nm. ',
        answers: ['Used for weight', 'Used for volume', 'Used for length', 'Used for automobiles'],
        correctIndex: 3,
      },
      {
        question: '聊天 liáotiān sv. ',
        answers: ['Read', 'Write', 'Chat', 'Listen'],
        correctIndex: 2,
      },

        {
          question: '了解 liǎojiě v. ',
          answers: ['Learn', 'Know; Understand; Comprehend', 'Teach', 'Forget'],
          correctIndex: 1,
        },
        {
          question: '邻居 línjū n. ',
          answers: ['Relative', 'Friend', 'Colleague', 'Neighbor'],
          correctIndex: 3,
        },
        {
          question: '留学 liúxué v. ',
          answers: ['Study in a foreign country', 'Study abroad', 'Teach abroad', 'Work abroad'],
          correctIndex: 0,
        },
        {
          question: '楼 lóu n. ',
          answers: ['Street', 'Building', 'Park', 'School'],
          correctIndex: 1,
        },
        {
          question: '绿 lǜ adj. ',
          answers: ['Yellow', 'Red', 'Blue', 'Green'],
          correctIndex: 3,
        },
        {
          question: '马 mǎ n. ',
          answers: ['Dog', 'Cat', 'Horse', 'Cow'],
          correctIndex: 2,
        },
        {
          question: '马上 mǎshàng adv. ',
          answers: ['Later', 'At night', 'Immediately; At once', 'Tomorrow'],
          correctIndex: 2,
        },
        {
          question: '满意 mǎnyì v. ',
          answers: ['Dissatisfied', 'Satisfied', 'Happy', 'Unhappy'],
          correctIndex: 1,
        },
        {
          question: '帽子 màozi n. ',
          answers: ['Glove', 'Hat; Cap', 'Shoes', 'Socks'],
          correctIndex: 1,
        },
        {
          question: '米 mǐ nm. ',
          answers: ['Inch', 'Centimeter', 'Foot', 'Meter'],
          correctIndex: 3,
        },
        {
          question: '面包 miànbāo n. ',
          answers: ['Cake', 'Bread', 'Cookie', 'Pastry'],
          correctIndex: 1,
        },
        {
          question: '面条 miàntiáo n. ',
          answers: ['Rice', 'Noodle', 'Pasta', 'Dumpling'],
          correctIndex: 1,
        },
        {
          question: '明白 míngbai v. ',
          answers: ['Understand', 'Confused', 'Forget', 'Explain'],
          correctIndex: 0,
        },
        {
          question: '拿 ná v. ',
          answers: ['Give', 'Take', 'Throw', 'Catch'],
          correctIndex: 1,
        },
        {
          question: '奶奶 nǎinai n. ',
          answers: ['Mother', 'Grandmother', 'Aunt', 'Sister'],
          correctIndex: 1,
        },
        {
          question: '南 nán n. ',
          answers: ['North', 'East', 'West', 'South'],
          correctIndex: 3,
        },
        {
          question: '难 nán adj. ',
          answers: ['Easy', 'Simple', 'Difficult; Hard', 'Complicated'],
          correctIndex: 2,
        },
        {
          question: '难过 nánguò v. ',
          answers: ['Enjoy', 'Have a hard time', 'Celebrate', 'Cry'],
          correctIndex: 1,
        },
        {
          question: '年级 niánjí n. ',
          answers: ['Age', 'Grade', 'Year', 'Class'],
          correctIndex: 1,
        },

          {
            question: '年轻 niánqīng adj. ',
            answers: ['Old', 'Young', 'Middle-aged', 'Teenage'],
            correctIndex: 1,
          },
          {
            question: '鸟 niǎo n. ',
            answers: ['Fish', 'Cat', 'Dog', 'Bird'],
            correctIndex: 3,
          },
          {
            question: '努力 nǔlì adj. ',
            answers: ['Lazy', 'Hard-working; Diligent', 'Smart', 'Talented'],
            correctIndex: 1,
          },
          {
            question: '爬山 páshān v. ',
            answers: ['Swim', 'Climb mountains', 'Run', 'Hike'],
            correctIndex: 1,
          },
          {
            question: '盘子 pánzi n. ',
            answers: ['Bowl', 'Cup', 'Tray; Plate; Dish', 'Spoon'],
            correctIndex: 2,
          },
          {
            question: '胖 pàng adj. ',
            answers: ['Thin', 'Tall', 'Short', 'Fat'],
            correctIndex: 3,
          },
          {
            question: '皮鞋 píxié n. ',
            answers: ['Sneakers', 'Leather shoes', 'Sandals', 'Boots'],
            correctIndex: 1,
          },
          {
            question: '啤酒 píjiǔ n. ',
            answers: ['Wine', 'Water', 'Soda', 'Beer'],
            correctIndex: 3,
          },
          {
            question: '普通话 pǔtōnghuà n. ',
            answers: ['Cantonese', 'Mandarin Chinese', 'Shanghainese', 'Hokkien'],
            correctIndex: 1,
          },
          {
            question: '其实 qíshí adv. ',
            answers: ['Probably', 'Certainly', 'Actually; In fact; As a matter of fact', 'Possibly'],
            correctIndex: 2,
          },
          {
            question: '其他 qítā pron. ',
            answers: ['Every', 'Some', 'Other; Else', 'None'],
            correctIndex: 2,
          },
          {
            question: '奇怪 qíguài adj. ',
            answers: ['Normal', 'Strange; Unusual; Peculiar', 'Common', 'Interesting'],
            correctIndex: 1,
          },
          {
            question: '骑 qí v. ',
            answers: ['Fly', 'Swim', 'Ride (an animal or bicycle); Sit on the back of', 'Run'],
            correctIndex: 2,
          },
          {
            question: '起飞 qǐfēi v. ',
            answers: ['Land', '(Of aircraft) Take off; Lift off; Launch', 'Fly', 'Arrive'],
            correctIndex: 1,
          },
          {
            question: '清楚 qīngchu adj. ',
            answers: ['Clear; Distinct', 'Blurry', 'Dark', 'Bright'],
            correctIndex: 0,
          },
          {
            question: '清楚 qīngchu v. ',
            answers: ['Confuse', 'Be clear about; Understand', 'Forget', 'Ignore'],
            correctIndex: 1,
          },
          {
            question: '秋 qiū n. ',
            answers: ['Spring', 'Summer', 'Fall; Autumn', 'Winter'],
            correctIndex: 2,
          },
          {
            question: '裙子 qúnzi n. ',
            answers: ['Shirt', 'Pants', 'Skirt', 'Dress'],
            correctIndex: 2,
          },
        
          
            {
              question: '然后 ránhòu conj. ',
              answers: ['Before', 'Now', 'Then; After that; Afterwards', 'Soon'],
              correctIndex: 2,
            },
            {
              question: '热情 rèqíng adj. ',
              answers: ['Cold', 'Cool', 'Fervent; Warm', 'Distant'],
              correctIndex: 2,
            },
            {
              question: '认为 rènwéi v. ',
              answers: ['Consider', 'Forget', 'Think; Consider', 'Ignore'],
              correctIndex: 2,
            },
            {
              question: '认真 rènzhēn adj. ',
              answers: ['Funny', 'Lighthearted', 'Conscientious; Earnest; Serious', 'Casual'],
              correctIndex: 2,
            },
            {
              question: '容易 róngyì adj. ',
              answers: ['Difficult', 'Impossible', 'Easy; Ready', 'Hard'],
              correctIndex: 2,
            },
            {
              question: '如果 rúguǒ conj. ',
              answers: ['Although', 'But', 'If; In case; In the event of; Supposing that', 'Therefore'],
              correctIndex: 2,
            },
            {
              question: '伞 sǎn n. ',
              answers: ['Coat', 'Hat', 'Gloves', 'Umbrella'],
              correctIndex: 3,
            },
          
          
      

  
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


