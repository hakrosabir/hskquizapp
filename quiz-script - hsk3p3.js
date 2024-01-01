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
    question: '伞 sǎn n. ',
    answers: ['Coat', 'Hat', 'Gloves', 'Umbrella'],
    correctIndex: 3,
  },

  
    { question: '上网 shàngwǎng v. ', answers: ['Get online', 'Go offline', 'Connect', 'Disconnect'], correctIndex: 0 },
    { question: '生气 shēngqì v. ', answers: ['Take offence', 'Be angry', 'Apologize', 'Forgive'], correctIndex: 1 },
    { question: '声音 shēngyīn n. ', answers: ['Smell', 'Sound', 'Silence', 'Music'], correctIndex: 1 },
    { question: '世界 shìjiè n. ', answers: ['Country', 'Planet', 'City', 'World'], correctIndex: 3 },
    { question: '试 shì v. ', answers: ['Experiment', 'Try', 'Learn', 'Achieve'], correctIndex: 1 },
    { question: '瘦 shòu adj. ', answers: ['Thick', 'Thin', 'Wide', 'Narrow'], correctIndex: 1 },
    { question: '叔叔 shūshu n.', answers: ['Grandfather', 'Uncle', 'Father', 'Brother'], correctIndex: 1 },
    { question: '舒服 shūfu adj. ', answers: ['Sad', 'Happy', 'Angry', 'Pleased'], correctIndex: 1 },
    { question: '树 shù n. ', answers: ['River', 'Mountain', 'Tree', 'Lake'], correctIndex: 2 },
    { question: '数学 shùxué n. ', answers: ['Science', 'Mathematics', 'Literature', 'History'], correctIndex: 1 },
    { question: '刷牙 shuāyá v. ', answers: ['Clean', 'Dirty', 'Wash', 'Polish'], correctIndex: 0 },
    { question: '双 shuāng nm. ', answers: ['Single', 'Double', 'Triple', 'Quadruple'], correctIndex: 1 },
    { question: '水平 shùpíng n. ', answers: ['Evaluation', 'Rating', 'Standard', 'Quality'], correctIndex: 2 },
    { question: '双 shuāng nm. ', answers: ['Driver', 'Passenger', 'Pilot', 'Navigator'], correctIndex: 0 },
    
      { question: '太阳 tàiyáng n. ', answers: ['Moon', 'Star', 'Sky', 'Sun'], correctIndex: 3 },
      { question: '特别 tèbié adv. ', answers: ['Ordinary', 'Normal', 'Extraordinary', 'Unique'], correctIndex: 2 },
      { question: '疼 téng adj. ', answers: ['Happy', 'Ache', 'Cold', 'Tired'], correctIndex: 1 },
      { question: '提高 tígāo v. ', answers: ['Decrease', 'Lower', 'Improve', 'Reduce'], correctIndex: 2 },
      { question: '体育 tǐyù n. ', answers: ['Science', 'Mathematics', 'Physical education', 'Language'], correctIndex: 2 },
      { question: '甜 tián adj. ', answers: ['Bitter', 'Sour', 'Spicy', 'Sweet'], correctIndex: 3 },
      { question: '条 tiáo nm. ', answers: ['Square', 'Circle', 'Triangle', 'Long and slender things'], correctIndex: 3 },
      { question: '同事 tóngshì n. ', answers: ['Friend', 'Colleague', 'Family', 'Neighbor'], correctIndex: 1 },
      { question: '同意 tóngyì v. ', answers: ['Disagree', 'Object', 'Consent', 'Oppose'], correctIndex: 2 },
      { question: '头发 tóufa n. ', answers: ['Nose hair', 'Facial hair', 'Eyebrow', 'Hair'], correctIndex: 3 },
      { question: '突然 tūrán adj. ', answers: ['Gradual', 'Predictable', 'Regular', 'Sudden'], correctIndex: 3 },
      { question: '突然 tūrán adv. ', answers: ['Gradually', 'Predictably', 'Regularly', 'Suddenly'], correctIndex: 3 },
      { question: '图书馆 túshūguǎn n. ', answers: ['Library', 'Bookstore', 'School', 'Museum'], correctIndex: 0 },
      { question: '腿 tuǐ n. ', answers: ['Arm', 'Hand', 'Leg', 'Foot'], correctIndex: 2 },
      { question: '完成 wánchéng v. ', answers: ['Start', 'Fail', 'Begin', 'Accomplish'], correctIndex: 3 },
      { question: '碗 wǎn n. ', answers: ['Cup', 'Bowl', 'Plate', 'Glass'], correctIndex: 1 },
      { question: '万 wàn num. ', answers: ['Hundred', 'Thousand', 'Million', 'Ten Thousand'], correctIndex: 3 },
      { question: '忘记 wàngjì v. ', answers: ['Remember', 'Recall', 'Forget', 'Remind'], correctIndex: 2 },
      { question: '为 wèi prep. ', answers: ['Against', 'Towards', 'For', 'Opposed to'], correctIndex: 2 },
      { question: '为了 wèile prep. ', answers: ['Because of', 'Therefore', 'In order to', 'Due to'], correctIndex: 2 },
      { question: '位 wèi nm. ', answers: ['Location', 'Position', 'Person', 'Time'], correctIndex: 2 }
    ,
    
      { question: '文化 wénhuà n. ', answers: ['Science', 'History', 'Mathematics', 'Culture; Civilization'], correctIndex: 3 },
      { question: '西 xī n. ', answers: ['East', 'South', 'North', 'West'], correctIndex: 3 },
      { question: '习惯 xíguàn v. ', answers: ['Habit', 'Learn', 'Practice', 'Be accustomed to; Be/get used to'], correctIndex: 3 },
      { question: '洗手间 xǐshǒujiān n. ', answers: ['Living room', 'Bedroom', 'Kitchen', 'Toilet; Washroom; Bathroom'], correctIndex: 3 },
      { question: '洗澡 xǐzǎo v. ', answers: ['Wash dishes', 'Take a bath; Bathe', 'Clean the house', 'Brush teeth'], correctIndex: 1 },
      { question: '夏 xià n. ', answers: ['Spring', 'Winter', 'Autumn', 'Summer'], correctIndex: 3 },
      { question: '先 xiān adv. ', answers: ['Now', 'Later', 'Before', 'First'], correctIndex: 3 },
      { question: '相信 xiāngxìn v. ', answers: ['Doubt', 'Deny', 'Trust', 'Believe in; Be convinced of; Have faith in; Place reliance on; Put one\'s trust in'], correctIndex: 3 },
      { question: '香蕉 xiāngjiāo n. ', answers: ['Orange', 'Apple', 'Banana', 'Grapes'], correctIndex: 2 },
      { question: '向 xiàng prep. ', answers: ['Away from', 'Against', 'To; Towards', 'Along with'], correctIndex: 2 },
      { question: '像 xiàng v. ', answers: ['Appear', 'Disappear', 'Look alike', 'Differ'], correctIndex: 2 },
      { question: '小心 xiǎoxīn v. ', answers: ['Be reckless', 'Take risks', 'Take care; Look out', 'Be careless'], correctIndex: 2 },
      { question: '小心 xiǎoxīn adj. ', answers: ['Careful', 'Fearful', 'Hasty', 'Bold'], correctIndex: 0 },
      { question: '校长 xiàozhǎng n. ', answers: ['Teacher', 'Student', 'Principal; Headmaster', 'Parent'], correctIndex: 2 }
      ,
        { question: '新闻 xīnwén n. ', answers: ['Story', 'Gossip', 'Rumor', 'News'], correctIndex: 3 },
        { question: '新鲜 xīnxiān adj. ', answers: ['Stale', 'Rotten', 'Spoiled', 'Fresh'], correctIndex: 3 },
        { question: '信用卡 xìnyòngkǎ n. ', answers: ['Debit card', 'Business card', 'ID card', 'Credit card'], correctIndex: 3 },
        { question: '行李箱 xínglixiāng n. ', answers: ['Briefcase', 'Suitcase', 'Backpack', 'Trunk; Baggage'], correctIndex: 3 },
        { question: '熊猫 xióngmāo n. ', answers: ['Penguin', 'Koala', 'Panda', 'Giraffe'], correctIndex: 2 },
        { question: '需要 xūyào v. ', answers: ['Want', 'Desire', 'Reject', 'Need; Claim; Demand'], correctIndex: 3 },
        { question: '选择 xuǎnzé v. ', answers: ['Avoid', 'Decide', 'Choose; Select; Pick', 'Neglect'], correctIndex: 2 },
        { question: '选择 xuǎnzé n. ', answers: ['Decision', 'Selection', 'Option', 'Alternation'], correctIndex: 2 },
        { question: '要求 yāoqiú v. ', answers: ['Require', 'Suggest', 'Recommend', 'Ask; Request; Demand'], correctIndex: 3 },
        { question: '要求 yāoqiú n. ', answers: ['Instruction', 'Requirement', 'Request; Demand; Need', 'Preference'], correctIndex: 2 },
        { question: '爷爷 yéye n. ', answers: ['Grandmother', 'Father', 'Uncle', 'Grandfather, also used as a title of respect for an old man'], correctIndex: 3 },
        { question: '一定 yídìng adv. ', answers: ['Maybe', 'Certainly not', 'Uncertain', 'Surely; Certainly; Necessarily'], correctIndex: 3 },
        { question: '一共 yígòng adv. ', answers: ['Separately', 'In total', 'Partially', 'Altogether; In all; All told'], correctIndex: 3 },
        { question: '一会儿 yíhuìr a moment ', answers: ['A long time', 'In a while', 'Instantly', 'For a moment'], correctIndex: 3 },
        { question: '一样 yíyàng adj. ', answers: ['Different', 'Special', 'Similar', 'The same'], correctIndex: 3 },
        { question: '一般 yìbān adv. ', answers: ['Usually not', 'Rarely', 'Occasionally', 'Usually; Generally; Habitually; Ordinarily'], correctIndex: 3 },
        { question: '一边 yìbiān adv. ', answers: ['In the center', 'On the side', 'By the way', 'While; As; At the same time; Simultaneously'], correctIndex: 3 },
        { question: '一直 yìzhí adv. ', answers: ['Sometimes', 'Once in a while', 'Never', 'All the time'], correctIndex: 3 },
        { question: '以前 yǐqián adv. ', answers: ['After (a point of time)', 'Now', 'In the future', 'Before (a point of time); Back; Ago; Previously; Formerly'], correctIndex: 3 }
      ,
      
        { question: '音乐 yīnyuè n. ', answers: ['Art', 'Language', 'Mathematics', 'Music'], correctIndex: 3 },
        { question: '银行 yínháng n. ', answers: ['Park', 'Library', 'Hospital', 'Bank'], correctIndex: 3 },
        { question: '饮料 yǐnliào n. ', answers: ['Snack', 'Beverage; Drink', 'Dessert', 'Appetizer'], correctIndex: 1 },
        { question: '应该 yīnggāi aux. ', answers: ['Could', 'May', 'Should; Have to; Ought to; Must', 'Would'], correctIndex: 2 },
        { question: '影响 yǐngxiǎng v. ', answers: ['Ignore', 'Observe', 'Influence; Affect; Concern; Work upon', 'Neglect'], correctIndex: 2 },
        { question: '影响 yǐngxiǎng n. ', answers: ['Influence; Effect', 'Opinion', 'Impression', 'Decision'], correctIndex: 0 },
        { question: '用 yòng v. ', answers: ['Use', 'Replace', 'Store', 'Remove'], correctIndex: 0 },
        { question: '游戏 yóuxì n. ', answers: ['Travel', 'Hobby', 'Game; Play; Recreation', 'Exercise'], correctIndex: 2 },
        { question: '有名 yǒumíng adj. ', answers: ['Unknown', 'Unpopular', 'Famous', 'Hidden'], correctIndex: 2 },
        { question: '又 yòu adv. ', answers: ['Later', 'Once', 'Now', 'Again; Once more'], correctIndex: 3 },
        { question: '遇到 yùdào v. ', answers: ['Avoid', 'Forget', 'Meet', 'Miss'], correctIndex: 2 },
        { question: '元 yuán nm. ', answers: ['Dollar', 'Euro', 'Yen', 'RMB Yuan'], correctIndex: 3 },
        { question: '愿意 yuànyì aux. ', answers: ['Refuse', 'Dislike', 'Regret', 'Be willing; Wish; Like; Want'], correctIndex: 3 },
        { question: '月亮 yuèliang n. ', answers: ['Star', 'Sun', 'Cloud', 'The Moon'], correctIndex: 3 },
        { question: '越 yuè adv. ', answers: ['Here', 'Now', 'There', 'The more…the more…'], correctIndex: 3 },
        { question: '站 zhàn v. ', answers: ['Walk', 'Sit', 'Stand', 'Sleep'], correctIndex: 2 },
        { question: '站 zhàn nm. ', answers: ['Seat', 'Station', 'Platform', 'Distance between two bus stops'], correctIndex: 3 },
        { question: '张 zhāng nm. ', answers: ['Used for paper, bed, table, face, etc.', 'Cover', 'Fence', 'Layer'], correctIndex: 0 },
        { question: '张 zhāng v. ', answers: ['Close up', 'Shut down', 'Open up', 'Turn off'], correctIndex: 2 },
        { question: '照顾 zhàogù v. ', answers: ['Neglect', 'Ignore', 'Look after; Take care', 'Disregard'], correctIndex: 2 },
        { question: '照片 zhàopiàn n. ', answers: ['Painting', 'Photo', 'Artwork', 'Sketch'], correctIndex: 1 },
        { question: '照相机 zhàoxiàngjī n. ', answers: ['Camera', 'Microphone', 'Telescope', 'Projector'], correctIndex: 0 },
        { question: '支 zhī nm. ', answers: ['Leaf', 'Branch', 'Root', 'One of a pair; For animals, furniture, boats or ships'], correctIndex: 3 }
      ,
      
        { question: '只 zhǐ adv. ', answers: ['Simply', 'Solely', 'Only; Merely; Just', 'Clearly'], correctIndex: 2 },
        { question: '中间 zhōngjiān n. ', answers: ['Corner', 'Edge', 'Center; Middle', 'Periphery'], correctIndex: 2 },
        { question: '中文 Zhōngwén n. ', answers: ['Chinese Tea', 'Chinese Food', 'Chinese Language', 'Chinese Culture'], correctIndex: 2 },
        { question: '终于 zhōngyú adv. ', answers: ['Suddenly', 'Eventually', 'At first', 'At last; Finally'], correctIndex: 3 },
        { question: '种 zhǒng nm. ', answers: ['Category', 'Type', 'Kind; Sort; Type', 'Variety'], correctIndex: 2 },
        { question: '重要 zhòngyào adj. ', answers: ['Trivial', 'Insignificant', 'Important', 'Unimportant'], correctIndex: 2 },
        { question: '周末 zhōumò n. ', answers: ['Weekday', 'Weeknight', 'Weekend', 'Week'], correctIndex: 2 },
        { question: '主要 zhǔyào adj. ', answers: ['Secondary', 'Minor', 'Major; Main', 'Insignificant'], correctIndex: 2 },
        { question: '注意 zhùyì v. ', answers: ['Focus on', 'Neglect', 'Ignore', 'Pay attention to; Keep an eye on; Take notice of'], correctIndex: 3 },
        { question: '担忧 zháojí v. ', answers: ['Celebrate', 'Worry; Feel anxious', 'Relax', 'Enjoy'], correctIndex: 1 },
        { question: '自己 zìjǐ pron. ', answers: ['Others', 'Myself', 'You', 'Someone else'], correctIndex: 1 },
        { question: '总是 zǒngshì adv. ', answers: ['Never', 'Sometimes', 'Often', 'Always'], correctIndex: 3 },
        { question: '嘴 zuǐ n. ', answers: ['Eyes', 'Nose', 'Ears', 'Mouth'], correctIndex: 3 },
        { question: '最近 zuìjìn adv. ', answers: ['Previously', 'Long ago', 'Recently; Of late; Lately', 'In the future'], correctIndex: 2 },
        { question: '作业 zuòyè n. ', answers: ['Job', 'Homework', 'Assignment', 'Task'], correctIndex: 2 },
        { question: '作用 zuòyòng n. ', answers: ['Affect', 'Effect', 'Result', 'Outcome'], correctIndex: 1 }
    
      
        


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


