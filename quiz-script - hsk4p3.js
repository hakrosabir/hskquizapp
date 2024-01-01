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
  
  
  { question: '减肥 jiǎnféi sv. ', answers: ['Build muscle', 'Stay fit', 'Gain weight', 'Lose weight'], correctIndex: 3 },
  { question: '减少 jiǎnshǎo v. ', answers: ['Increase', 'Grow', 'Expand', 'Reduce; Decrease; Cut down; Diminish'], correctIndex: 3 },
  { question: '建议 jiànyì v. ', answers: ['Command', 'Demand', 'Suggest; Advise', 'Order'], correctIndex: 2 },
  { question: '将来 jiānglái n. ', answers: ['In the Past', 'Present', 'Future', 'Yesterday'], correctIndex: 2 },
  { question: '奖品 jiǎngjīn n. ', answers: ['Gift', 'Prize; Reward; Award; Bonus', 'Trophy', 'Medal'], correctIndex: 1 },
  { question: '降低 jiàngdī v. ', answers: ['Raise', 'Elevate', 'Increase', 'Lower; Reduce; Decrease'], correctIndex: 3 },
  { question: '交 jiāo v. ', answers: ['Receive', 'Give; Hand over', 'Exchange', 'Barter'], correctIndex: 1 },
  { question: '交流 jiāoliú v. ', answers: ['Isolate', 'Separate', 'Communicate', 'Ignore'], correctIndex: 2 },
  { question: '交通 jiāotōng n. ', answers: ['Communication', 'Traffic', 'Connection', 'Interaction'], correctIndex: 1 },
  { question: '郊区 jiāoqū n. ', answers: ['City center', 'Downtown', 'Suburbs; Outskirts', 'Rural area'], correctIndex: 2 },
  { question: '骄傲 jiāo’ào adj. ', answers: ['Humble', 'Shy', 'Modest', 'Proud'], correctIndex: 3 },
  { question: '饺子 jiǎozi n. ', answers: ['Spring roll', 'Sushi', 'Dim sum', 'Jiaozi; Dumpling'], correctIndex: 3 },
  { question: '教授 jiàoshòu n. ', answers: ['Teacher', 'Instructor', 'Lecturer', 'Professor'], correctIndex: 3 },
  { question: '教育 jiàoyù n. ', answers: ['Learning', 'Knowledge', 'Education', 'Wisdom'], correctIndex: 2 }
,


  { question: '接受 jiēshòu v. ', answers: ['Decline', 'Reject', 'Accept; Take up', 'Deny'], correctIndex: 2 },
  { question: '接着 jiēzhe v. ', answers: ['Pause', 'Stop', 'Interrupt', 'Continue; Go on'], correctIndex: 3 },
  { question: '节 jié nm. ', answers: ['Lesson', 'Class', 'Segment', 'Period of class'], correctIndex: 2 },
  { question: '节约 jiéyuē v. ', answers: ['Waste', 'Spend', 'Economize; Save; Spare', 'Splurge'], correctIndex: 2 },
  { question: '结果 jiéguǒ n. ', answers: ['Process', 'Outcome', 'Procedure', 'Result'], correctIndex: 3 },
  { question: '解释 jiěshì v. ', answers: ['Interpret; Define', 'Conceal', 'Ignore', 'Complicate'], correctIndex: 0 },
  { question: '尽管 jǐnguǎn conj. ', answers: ['Moreover', 'Therefore', 'But', 'Although; Even though'], correctIndex: 3 },
  { question: '紧张 jǐnzhāng adj. ', answers: ['Relaxed', 'Calm', 'Stressed', 'Feel nervous'], correctIndex: 3 },
  { question: '进行 jìnxíng v. ', answers: ['Suspend', 'Halt', 'Abort', 'Execute; Carry out'], correctIndex: 3 },
  { question: '禁止 jìnzhǐ v. ', answers: ['Allow', 'Permit', 'Grant', 'Forbid; Prohibit'], correctIndex: 3 },
  { question: '京剧 jīngjù n. ', answers: ['Peking Opera', 'Shanghai Opera', 'Sichuan Opera', 'Beijing Opera'], correctIndex: 3 },
  { question: '经济 jīngjì n. ', answers: ['Society', 'Culture', 'Politics', 'Economy'], correctIndex: 3 },
  { question: '经历 jīnglì v. ', answers: ['Predict', 'Forecast', 'Go through; Experience; Undergo', 'Avoid'], correctIndex: 2 },
  { question: '经验 jīngyàn n. ', answers: ['Experiment', 'Trial', 'Error', 'Experience'], correctIndex: 3 },
  { question: '精彩 jīngcǎi adj. ', answers: ['Ordinary', 'Mediocre', 'Dull', '(Of a performance, match, etc.) Brilliant; Wonderful'], correctIndex: 3 },
  { question: '景色 jǐngsè n. ', answers: ['Noise', 'Taste', 'Smell', 'Scenery; View'], correctIndex: 3 },
  { question: '警察 jǐngchá n. ', answers: ['Lawyer', 'Judge', 'Criminal', 'Policeman; Policewoman; Cop'], correctIndex: 3 },
  { question: '竞争 jìngzhēng v. ', answers: ['Collaborate', 'Cooperate', 'Coexist', 'Compete; Contend'], correctIndex: 3 },

  
    { question: '竟然 jìngrán adv. ', answers: ['Expectedly', 'Predictably', 'Unexpectedly', 'Anticipatedly'], correctIndex: 2 },
    { question: '镜子 jìngzi n. ', answers: ['Book', 'Mirror; Glass', 'Window', 'Painting'], correctIndex: 1 },
    { question: '究竟 jiūjìng adv. ', answers: ['Beyond', 'Nowhere', 'On earth', 'Above'], correctIndex: 2 },
    { question: '举 jǔ v. ', answers: ['Place', 'Lift; Hold up', 'Lower', 'Drop'], correctIndex: 1 },
    { question: '举办 jǔbàn v. ', answers: ['Cancel', 'Postpone', 'Hold (an exhibition, contest, etc.)', 'Attend'], correctIndex: 2 },
    { question: '举行 jǔxíng v. ', answers: ['Cancel', 'Postpone', 'Hold (an exhibition, contest, etc.)', 'Attend'], correctIndex: 2 },
    { question: '拒绝 jùjué v. ', answers: ['Accept', 'Consider', 'Review', 'Decline; Reject'], correctIndex: 3 },
    { question: '距离 jùlí v. ', answers: ['Be close to', 'Be connected to', 'Be apart from; Be at a distance from', 'Be next to'], correctIndex: 2 },
    { question: '聚会 jùhuì n. ', answers: ['Meeting; Get-together', 'Dinner', 'Party', 'Wedding'], correctIndex: 0 },
    { question: '开玩笑 kāi wánxiào ', answers: ['Play games', 'Tell a story', 'Do homework', 'Make a joke'], correctIndex: 3 },
    { question: '开心 kāixīn adj. ', answers: ['Sad; Unhappy', 'Angry; Upset', 'Excited; Energetic', 'Happy; Joyful; Delighted'], correctIndex: 3 },
    { question: '看法 kànfǎ n. ', answers: ['Judgment', 'View; Opinion', 'Decision', 'Evaluation'], correctIndex: 1 },
    { question: '考虑 kǎolǜ v. ', answers: ['Ignore', 'Neglect', 'Think; Consider', 'Avoid'], correctIndex: 2 },
    { question: '科学 kēxué n. ', answers: ['Art', 'Humanities', 'Science', 'Mathematics'], correctIndex: 2 },
    { question: '棵 kē nm. ', answers: ['Used for animals', 'Used for buildings', 'Used for plants', 'Used for people'], correctIndex: 2 },
    { question: '咳嗽 késou v. ', answers: ['Sneeze', 'Cough', 'Laugh', 'Sing'], correctIndex: 1 },
    { question: '可怜 kělián adj. ', answers: ['Pitiful; Pitiable; Poor', 'Rich; Wealthy', 'Powerful', 'Happy'], correctIndex: 0 },
    { question: '可是 kěshì conj. ', answers: ['And', 'Or', 'But; Yet; However', 'So'], correctIndex: 2 },
    { question: '可惜 kěxī adj. ', answers: ['Lucky', 'Regrettable; Unfortunate', 'Proud', 'Joyful'], correctIndex: 1 },
    { question: '客厅 kètīng n. ', answers: ['Kitchen', 'Bathroom', 'Living room', 'Bedroom'], correctIndex: 2 },
    { question: '肯定 kěndìng adv. ', answers: ['Possibly', 'Likely', 'Certainly; Surely', 'Maybe'], correctIndex: 2 },
    { question: '空 kōng adj. ', answers: ['Crowded', 'Full', 'Empty; Vacant', 'Occupied'], correctIndex: 2 }
  ,

  
    { question: '空气 kōngqì n. ', answers: ['Water', 'Air', 'Earth', 'Fire'], correctIndex: 1 },
    { question: '恐怕 kǒngpà adv. ', answers: ['Certainly; Surely', 'Possibly', 'Definitely', 'Probably; Maybe'], correctIndex: 3 },
    { question: '苦 kǔ adj. ', answers: ['Sweet', 'Bitter', 'Sour', 'Salty'], correctIndex: 1 },
    { question: '矿泉水 kuàngquánshuǐ n. ', answers: ['Mineral water', 'Tap water', 'Spring water', 'Distilled water'], correctIndex: 0 },
    { question: '困 kùn adj. ', answers: ['Awake', 'Energetic', 'Sleepy', 'Active'], correctIndex: 2 },
    { question: '困难 kùnnan ', answers: ['Easy', 'Simple', 'Trouble; Difficulty', 'Comfortable'], correctIndex: 2 },
    { question: '垃圾桶 lājītǒng n. ', answers: ['Recycling bin', 'Garbage disposal', 'Trash can', 'Compost bin'], correctIndex: 2 },
    { question: '拉 lā v. ', answers: ['Push', 'Lift', 'Pull', 'Drag'], correctIndex: 2 },
    { question: '辣 là adj. ', answers: ['Mild', 'Bland', '(Of taste) Spicy; Hot', 'Sweet'], correctIndex: 2 },
    { question: '来不及 láibují ', answers: ['Have enough time', 'Just in time', 'Haven’t enough time', 'Already'], correctIndex: 2 },
    { question: '来得及 láidejí ', answers: ['Too late', 'Missed it', 'Come from', 'Have enough time'], correctIndex: 3 },
    { question: '来自 láizì v. ', answers: ['Come from', 'Go to', 'Stay in', 'Leave'], correctIndex: 0 },
    { question: '懒 lǎn adj. ', answers: ['Hardworking', 'Active', 'Energetic', 'Lazy'], correctIndex: 3 },
    { question: '浪费 làngfèi v. ', answers: ['Save', 'Conserve', 'Squander; Waste', 'Invest'], correctIndex: 2 },
    { question: '浪漫 làngmàn adj. ', answers: ['Practical', 'Ordinary', 'Romantic', 'Traditional'], correctIndex: 2 },
    { question: '老虎 lǎohǔ n. ', answers: ['Lion', 'Elephant', 'Tiger', 'Leopard'], correctIndex: 2 },
    { question: '冷静 lěngjìng adj. ', answers: ['Hot-tempered', 'Excited', 'Calm; Cool; Dispassionate', 'Energetic'], correctIndex: 2 },
    { question: '离婚 líhūn v. ', answers: ['Get married', 'Engage', 'Date', 'Divorce'], correctIndex: 3 },
    { question: '礼拜天 lǐbàitiān n. ', answers: ['Monday', 'Saturday', 'Sunday', 'Wednesday'], correctIndex: 2 }

    ,
      { question: '礼貌 lǐmào n. ', answers: ['Politeness; Manners; Ceremony; Civility', 'Courage; Bravery', 'Courtesy; Etiquette', 'Formality'], correctIndex: 0 },
      { question: '理发 lǐfà v. ', answers: ['Get a haircut', 'Shave', 'Style hair', 'Dye hair'], correctIndex: 0 },
      { question: '理解 lǐjiě v. ', answers: ['Explain', 'Understand; Comprehend', 'Agree', 'Accept'], correctIndex: 1 },
      { question: '理想 lǐxiǎng ', answers: ['Goal', 'Ideal; Perfection', 'Decision', 'Aspiration'], correctIndex: 1 },
      { question: '力量 lìqi n. ', answers: ['Endurance', 'Power', 'Energy', '(Physical) Strength; Might; Force'], correctIndex: 3 },
      { question: '厉害 lìhai adj. ', answers: ['Clever', 'Interesting', 'Serious; Acute', 'Funny'], correctIndex: 2 },
      { question: '两 liǎ num. ', answers: ['One', 'Three', 'Five', 'Pair; Couple'], correctIndex: 3 },
      { question: '连 lián adv. ', answers: ['Only', 'Even (used for emphasis)', 'Just', 'Together'], correctIndex: 1 },
      { question: '联系 liánxì v. ', answers: ['Disconnect', 'Break up', 'Communicate; Establish contact', 'Ignore'], correctIndex: 2 },
      { question: '凉快 liángkuai adj. ', answers: ['Warm', 'Hot', 'Cool', 'Cold'], correctIndex: 2 },
      { question: '零钱 língqián n. ', answers: ['Pocket money', 'Change', 'Donation', 'Banknote'], correctIndex: 1 },
      { question: '另外 lìngwài adj. ', answers: ['Different', 'Same', 'Special', 'In addition'], correctIndex: 3 },
      { question: '留 liú v. ', answers: ['Leave', 'Go', 'Stay', 'Travel'], correctIndex: 2 },
      { question: '流利 liúlì adj. ', answers: ['Stuttering', 'Incoherent', 'Fluent', 'Hesitant'], correctIndex: 2 },
      { question: '流行 liúxíng adj. ', answers: ['Outdated', 'Trendy', 'Traditional', 'Popular; Fashionable'], correctIndex: 3 },
      { question: '旅行 lǚxíng v. ', answers: ['Study abroad', 'Move', 'Travel', 'Explore'], correctIndex: 2 }
    ,

    
      { question: '律师 lǜshī n. ', answers: ['Judge', 'Attorney', 'Lawyer', 'Counselor'], correctIndex: 2 },
      { question: '乱 luàn adj. ', answers: ['Neat; Tidy', 'Clean', 'Messy; Disorderly; Confused', 'Organized'], correctIndex: 2 },
      { question: '麻烦 máfan ', answers: ['Entertainment', 'Pleasure', 'Troublesome', 'Easy'], correctIndex: 2 },
      { question: '马虎 mǎhu adj. ', answers: ['Careful', 'Attentive', 'Careless; Negligent', 'Precise'], correctIndex: 2 },
      { question: '满 mǎn adj. ', answers: ['Empty', 'Partial', 'Filled; Full', 'Hollow'], correctIndex: 2 },
      { question: '毛 máo n. ', answers: ['Feather', 'Fur', 'Hair; Fur', 'Wool'], correctIndex: 2 },
      { question: '毛巾 máojīn n. ', answers: ['Toothpaste', 'Toothbrush', 'Towel', 'Soap'], correctIndex: 2 },
      { question: '美好 měihǎo adj. ', answers: ['Ugly', 'Dark', 'Bright; Beautiful', 'Ordinary'], correctIndex: 2 }
    
    






  
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


