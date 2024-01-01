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
    question: '阿姨 āyí n.',
    answers: ['Dance', 'Wash', 'Aunt', 'Short, Low'],
    correctIndex: 2,
  },
  {
    question: '啊 a int.',
    answers: [
      'Hope; Want; Wish; Be Desirous Of',
      'Matter; Business; Circumstance; Event; Affair; Incident; Occurrence',
      'Questions, Problems (in a Test or a Quiz)',
      'Used to express surprise, exclamation, or promise',
    ],
    correctIndex: 3,
  },
  {
    question: '爱好 àihào n.',
    answers: ['Hour', 'Wash', 'Aunt', 'Hobby; An interest; Fancy'],
    correctIndex: 3,
  },
  {
    question: '矮 ǎi adj. ',
    answers: ['Dance', 'Wash', 'Short, Low', 'Play'],
    correctIndex: 2,
  },
  
{
  question: '安静 ānjìng',
  answers: ['Dance', 'Noiseless; Quiet; Calm', 'Play', 'Wash'],
  correctIndex: 1,
  },
  {
  question: '把 bǎ',
  answers: ['Dealing with, used before an object, followed by a transitive verb', 'Used for things with a handle', 'Wash', 'Play'],
  correctIndex: 0,
  },
  {
  question: '班 bān',
  answers: ['Wash', 'Class', 'Play', 'Dance'],
  correctIndex: 1,
  },
  {
  question: '搬 bān',
  answers: ['Carry; Move', 'Dance', 'Wrist Watch; Watch', 'Wash'],
  correctIndex: 0,
  },
  {
  question: '办法 bànfǎ',
  answers: ['Dance', 'Way; Means; Measure; Step to take; Method; Resource', 'Play', 'Wash'],
  correctIndex: 1,
  },
  {
  question: '办公室 bàngōngshì',
  answers: ['Wash', 'Office', 'Dance', 'Play'],
  correctIndex: 1,
  },
  {
  question: '半 bàn',
  answers: ['Wrist Watch; Watch', 'Dance', 'Half', 'Wash'],
  correctIndex: 2,
  },
  {
  question: '帮忙 bāngmáng',
  answers: ['Wash', 'Play', 'Help; Give a helping hand; Do a favor; Lend a hand', 'Dance'],
  correctIndex: 2,
  },
  {
  question: '包 bāo',
  answers: ['Wrist Watch; Watch', 'Not hungry, full', 'Bag', 'Wash'],
  correctIndex: 2,
  },
  {
  question: '饱 bǎo',
  answers: ['Dance', 'Not hungry, full', 'Play', 'Wash'],
  correctIndex: 1,
  },
  {
  question: '北方 běifāng',
  answers: ['North', 'Wash', 'Dance', 'Play'],
  correctIndex: 0,
  },
  {
  question: '被 bèi',
  answers: ['Wrist Watch; Watch', 'Not hungry, full', 'Wash', 'Be made or forced, indicating passive voice'],
  correctIndex: 3,
  },
  {
  question: '鼻子 bízi',
  answers: ['Dance', 'Nose', 'Wash', 'Play'],
  correctIndex: 1,
  },
  {
  question: '比较 bǐjiào',
  answers: ['Wrist Watch; Watch', 'Fairly; Quite', 'Dance', 'Wash'],
  correctIndex: 1,
  },
  {
  question: '比赛 bǐsài',
  answers: ['Competition', 'Wrist Watch; Watch', 'Play', 'Wash'],
  correctIndex: 0,
  }
  ,

  {
    question: '笔记本 bǐjìběn',
    answers: ['Dance', 'Notebook', 'Sing', 'Laptop'],
    correctIndex: 1,
  },
  {
    question: '必须 bìxū',
    answers: ['Must; Have to', 'Cook', 'Play Music', 'Dance'],
    correctIndex: 0,
  },
  {
    question: '变化 biànhuà',
    answers: ['Change; Variation', 'Paint', 'Dance', 'Play'],
    correctIndex: 0,
  },
  {
    question: '别人 biérén',
    answers: ['Other people; Another person', 'Dance', 'Cook', 'Play'],
    correctIndex: 0,
  },
  {
    question: '宾馆 bīnguǎn',
    answers: ['Dance', 'Hotel', 'Cook', 'Play'],
    correctIndex: 1,
  },
  {
    question: '冰箱 bīngxiāng',
    answers: ['Wrist Watch; Watch', 'Refrigerator', 'Dance', 'Cook'],
    correctIndex: 1,
  },
  {
    question: '不但…而且… búdàn...érqiě...',
    answers: ['Moreover; Not only... but also...', 'Dance', 'Cook', 'Play'],
    correctIndex: 0,
  },
  {
    question: '才 cái',
    answers: ['Late, indicating just happened', 'Just; Only (indicating only one solution)', 'Dance', 'Cook'],
    correctIndex: 1,
  },
  {
    question: '菜单 càidān',
    answers: ['Dance', 'Menu', 'Cook', 'Play'],
    correctIndex: 1,
  },
  {
    question: '参加 cānjiā',
    answers: ['Dance', 'Join; Take part in; Attend', 'Cook', 'Play'],
    correctIndex: 1,
  },
  {
    question: '草 cǎo',
    answers: ['Dance', 'Grass; Straw', 'Cook', 'Play'],
    correctIndex: 1,
  },
  {
    question: '层 céng',
    answers: ['Dance', 'Layer, floor, etc. (used for things that have separate levels)', 'Cook', 'Play'],
    correctIndex: 1,
  },
  {
    question: '差 chà',
    answers: ['Bad; Poor', 'Fall short of; Owe', 'Cook', 'Play'],
    correctIndex: 0,
  }

  ,
  {
    question: '长 cháng',
    answers: ['Short', 'Long', 'Tall', 'Thick'],
    correctIndex: 1,
  },
  {
    question: '超市 chāoshì',
    answers: ['Market', 'Supermarket', 'Store', 'Shop'],
    correctIndex: 1,
  },
  {
    question: '衬衫 chènshān',
    answers: ['Skirt', 'Shirt', 'Dress', 'Pants'],
    correctIndex: 1,
  },
  {
    question: '成绩 chéngjì',
    answers: ['Result', 'Score', 'Achievement', 'Grade'],
    correctIndex: 1,
  },
  {
    question: '城市 chéngshì',
    answers: ['Town', 'City', 'Village', 'Country'],
    correctIndex: 1,
  },
  {
    question: '迟到 chídào',
    answers: ['Be Early', 'Be Punctual', 'Be Late', 'Be On Time'],
    correctIndex: 2,
  },
  {
    question: '出现 chūxiàn',
    answers: ['Disappear', 'Happen', 'Appear', 'Show Up'],
    correctIndex: 2,
  },
  {
    question: '除了 chúle',
    answers: ['Except For', 'Besides', 'In Addition To', 'Instead Of'],
    correctIndex: 0,
  },
  {
    question: '船 chuán',
    answers: ['Car', 'Bus', 'Train', 'Boat; Ship'],
    correctIndex: 3,
  },
  {
    question: '春 chūn',
    answers: ['Summer', 'Autumn', 'Winter', 'Spring'],
    correctIndex: 3,
  },
  {
    question: '词典 cídiǎn',
    answers: ['Novel', 'Magazine', 'Dictionary', 'Newspaper'],
    correctIndex: 2,
  },
  {
    question: '聪明 cōngming',
    answers: ['Stupid', 'Clever', 'Silly', 'Intelligent'],
    correctIndex: 3,
  },
  {
    question: '打扫 dǎsǎo',
    answers: ['Play', 'Sweep', 'Cook', 'Clean'],
    correctIndex: 1,
  },
  {
    question: '打算 dǎsuàn',
    answers: ['Plan', 'Think', 'Consider', 'Decide'],
    correctIndex: 0,
  },
  {
    question: '带 dài',
    answers: ['Bring', 'Take', 'Send', 'Hold'],
    correctIndex: 1,
  },
  {
    question: '当然 dāngrán',
    answers: ['Maybe', 'Certainly', 'Perhaps', 'Possibly'],
    correctIndex: 1,
  },
  {
    question: '蛋糕 dàngāo',
    answers: ['Cookie', 'Candy', 'Cake', 'Chocolate'],
    correctIndex: 2,
  },
  {
    question: '当然 dāngrán',
    answers: ['Of Course', 'Definitely', 'Absolutely', 'Surely'],
    correctIndex: 0,
  }
  ,
  {
    question: '灯 dēng',
    answers: ['Table', 'Lamp', 'Chair', 'Bed'],
    correctIndex: 1,
  },
  {
    question: '得 de',
    answers: ['Verb Particle', 'Adverb Marker', 'Adjective Particle', 'Noun Particle'],
    correctIndex: 1,
  },
  {
    question: '地方 dìfang',
    answers: ['Country', 'City', 'Place', 'Town'],
    correctIndex: 2,
  },
  {
    question: '地铁 dìtiě',
    answers: ['Bus', 'Train', 'Subway', 'Car'],
    correctIndex: 2,
  },
  {
    question: '地图 dìtú',
    answers: ['Globe', 'Map', 'Compass', 'Atlas'],
    correctIndex: 1,
  },
  {
    question: '电梯 diàntī',
    answers: ['Elevator', 'Escalator', 'Stairs', 'Door'],
    correctIndex: 0,
  },
  {
    question: '电子邮件 diànzǐyóujiàn',
    answers: ['Letter', 'Postcard', 'Email', 'Package'],
    correctIndex: 2,
  },
  {
    question: '东 dōng',
    answers: ['West', 'North', 'South', 'East'],
    correctIndex: 3,
  },
  {
    question: '冬 dōng',
    answers: ['Spring', 'Summer', 'Autumn', 'Winter'],
    correctIndex: 3,
  },
  {
    question: '动物园 dòngwùyuán',
    answers: ['Museum', 'Zoo', 'Park', 'Garden'],
    correctIndex: 1,
  },
  {
    question: '短 duǎn',
    answers: ['Long', 'Short', 'Tall', 'Small'],
    correctIndex: 1,
  },
  {
    question: '段 duàn',
    answers: ['Line', 'Paragraph', 'Section', 'Chapter'],
    correctIndex: 1,
  },
  {
    question: '锻炼 duànliàn',
    answers: ['Study', 'Exercise', 'Read', 'Rest'],
    correctIndex: 1,
  },
  {
    question: '多么 duōme',
    answers: ['Why', 'How', 'What', 'When'],
    correctIndex: 1,
  },
  {
    question: '饿 è',
    answers: ['Thirsty', 'Full', 'Hungry', 'Tired'],
    correctIndex: 2,
  },
  {
    question: '耳朵 ěrduo',
    answers: ['Eye', 'Mouth', 'Nose', 'Ear'],
    correctIndex: 3,
  },
  {
    question: '发 fā',
    answers: ['Receive', 'Send', 'Open', 'Close'],
    correctIndex: 1,
  },
  {
    question: '发烧 fāshāo',
    answers: ['Catch a Cold', 'Have a Fever', 'Feel Dizzy', 'Get Injured'],
    correctIndex: 1,
  },
  {
    question: '发现 fāxiàn',
    answers: ['Forget', 'See', 'Find Out', 'Remember'],
    correctIndex: 2,
  },
  {
    question: '方便 fāngbiàn',
    answers: ['Difficult', 'Easy', 'Uncomfortable', 'Convenient'],
    correctIndex: 3,
  },
  {
    question: '放 fàng',
    answers: ['Throw', 'Take', 'Put', 'Get'],
    correctIndex: 2,
  },
  {
    question: '放心 fàngxīn',
    answers: ['Be Concerned', 'Be Confused', 'Be Assured', 'Be Surprised'],
    correctIndex: 2,
  }
,  

  {
    question: '分 fēn',
    answers: ['Minute', 'Mark; Grade; Score', 'Split; Separate', 'Division'],
    correctIndex: 0,
  },
  {
    question: '附近 fùjìn',
    answers: ['Nearby; Neighbour; Vicinity; Proximity', 'Close', 'Approach', 'Next to'],
    correctIndex: 0,
  },
  {
    question: '复习 fùxí',
    answers: ['Review', 'Revise', 'Examine', 'Revisit'],
    correctIndex: 0,
  },
  {
    question: '干净 gānjìng',
    answers: ['Clean', 'Pure', 'Spotless', 'Neat'],
    correctIndex: 0,
  },
  {
    question: '感冒 gǎnmào',
    answers: ['Have/Catch a Cold', 'Contract Cold', 'Catch Infection', 'Fall Ill'],
    correctIndex: 0,
  },
  {
    question: '感兴趣 gǎnxìngqù',
    answers: ['Interest; Taste', 'Fascination', 'Curiosity', 'Engagement'],
    correctIndex: 0,
  },
  {
    question: '刚才 gāngcái',
    answers: ['A Moment Ago; Just Now', 'Recently', 'Shortly', 'Just Then'],
    correctIndex: 0,
  },
  {
    question: '个子 gèzi',
    answers: ['Height', 'Stature', 'Figure', 'Build'],
    correctIndex: 0,
  },
  {
    question: '根据 gēnjù',
    answers: ['On the Basis of; According to', 'In Accordance With', 'Based On', 'Following'],
    correctIndex: 0,
  },
  {
    question: '更 gèng',
    answers: ['More', 'Greater', 'Additional', 'Further'],
    correctIndex: 0,
  },
  {
    question: '公斤 gōngjīn',
    answers: ['Kilogram', 'Kilo', 'Weight', 'Mass'],
    correctIndex: 0,
  },
  {
    question: '公园 gōngyuán',
    answers: ['Park', 'Public Park', 'Recreation Area', 'Green Space'],
    correctIndex: 0,
  },
  {
    question: '故事 gùshi',
    answers: ['Story', 'Narrative', 'Tale', 'Plot'],
    correctIndex: 0,
  },
  {
    question: '风 guāfēng',
    answers: ['Blow (of Wind)', 'Breeze', 'Gust', 'Wind'],
    correctIndex: 0,
  },
  {
    question: '关 guān',
    answers: ['Close; Turn Off', 'Shut', 'Seal', 'Lock'],
    correctIndex: 0,
  }
  ,

  {
    question: '关系 guānxì',
    answers: ['Relation; Relationship', 'Wrist Watch; Watch', 'Refrigerator', 'Dance'],
    correctIndex: 0,
  },
  {
    question: '关心 guānxīn',
    answers: ['Care for; Be concerned for', 'Not hungry, full', 'Competition', 'Bright; Clever; Intelligent'],
    correctIndex: 0,
  },
  {
    question: '关于 guānyú',
    answers: ['With regard to', 'Change; Variation', 'Competition', 'Clean'],
    correctIndex: 0,
  },
  {
    question: '国家 guójiā',
    answers: ['Country', 'Change; Variation', 'Not hungry, full', 'Carry; Move'],
    correctIndex: 0,
  },
  {
    question: '过 guò',
    answers: ['Live; Pass', 'Not hungry, full', 'Come out , happen; Show up; Appear', 'Clean'],
    correctIndex: 0,
  },
  {
    question: '还是 háishì',
    answers: ['Still; All the same', 'Do physical training; Take exercise', 'Have a fever', 'Relation; Relationship'],
    correctIndex: 0,
  },
  {
    question: '害怕 hàipà',
    answers: ['Be afraid; Be frightened', 'More', 'Be assured', 'Not hungry, full'],
    correctIndex: 0,
  },
  {
    question: '航班 hángbān',
    answers: ['Flight; Scheduled flight', 'Short', 'Play', 'Clean'],
    correctIndex: 0,
  },
  {
    question: '黑板 hēibǎn',
    answers: ['Blackboard', 'Short', 'Carry; Move', 'Short, Low'],
    correctIndex: 0,
  },
  {
    question: '后来 hòulái',
    answers: ['Later; Afterwards', 'Clean', 'Bad; Poor', 'North'],
    correctIndex: 0,
  },
  {
    question: '护照 hùzhào',
    answers: ['Passport', 'Change; Variation', 'Layer, floor, etc. (used for things that have separate levels)', 'Carry; Take; Bring; Bear'],
    correctIndex: 0,
  },
  {
    question: '花 huā',
    answers: ['Spend', 'Must; Have to', 'City', 'Do physical training; Take exercise'],
    correctIndex: 0,
  },
  {
    question: '花 huā',
    answers: ['Flower', 'Must; Have to', 'Refrigerator', 'City'],
    correctIndex: 0,
  },
  {
    question: '画 huà',
    answers: ['Draw; Paint', 'Hotel', 'Carry; Take; Bring; Bear', 'Flower'],
    correctIndex: 0,
  }
  
  
  
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


