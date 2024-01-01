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
  
  
  { question: '爱情 àiqíng n. ', answers: ['Friendship', 'Family', 'Passion', 'Love (between a man and a woman)'], correctIndex: 3 },
  { question: '安排 ānpái v. ', answers: ['Construct', 'Organize', 'Plan in detail; Arrange', 'Improvise'], correctIndex: 2 },
  { question: '安全 ānquán adj. ', answers: ['Dangerous', 'At risk', 'Secure', 'Safe'], correctIndex: 2 },
  { question: '按时 ànshí adv. ', answers: ['Delayed', 'Early', 'On time; On schedule; Punctually', 'Randomly'], correctIndex: 2 },
  { question: '按照 ànzhào prep. ', answers: ['Contrary to', 'According to', 'Due to', 'In response to'], correctIndex: 1 },
  { question: '百分之 bǎifēnzhī ', answers: ['Hundredth', 'Percentage', 'Proportion', 'Percent'], correctIndex: 3 },
  { question: '棒 bàng adj. ', answers: ['Bad', 'Mediocre', 'Great; Good; Excellent', 'Poor'], correctIndex: 2 },
  { question: '包子 bāozi n. ', answers: ['Dumpling', 'Spring roll', 'Steamed stuffed bun', 'Wonton'], correctIndex: 2 },
  { question: '保护 bǎohù v. ', answers: ['Endanger', 'Neglect', 'Protect', 'Abandon'], correctIndex: 2 },
  { question: '保证 bǎozhèng v. ', answers: ['Threaten', 'Doubt', 'Guarantee; Ensure; Promise', 'Challenge'], correctIndex: 2 },
  { question: '报名 bàomíng v. ', answers: ['Register', 'Enroll', 'Apply', 'Declare'], correctIndex: 2 },

  
    { question: '抱 bào v. ', answers: ['Release', 'Hold tightly', 'Push away', 'Embrace'], correctIndex: 3 },
    { question: '抱歉 bàoqiàn v. ', answers: ['Express joy', 'Be sorry; Feel apologetic; Regret', 'Celebrate', 'Appreciate'], correctIndex: 1 },
    { question: '倍 bèi nm. ', answers: ['Portion', 'Fraction', 'Double', 'Multiple'], correctIndex: 2 },
    { question: '本来 běnlái adv. ', answers: ['Initially', 'Originally', 'Recently', 'Consequently'], correctIndex: 1 },
    { question: '笨 bèn adj. ', answers: ['Clever', 'Intelligent', 'Dull; Foolish; Stupid', 'Wise'], correctIndex: 2 },
    { question: '比如 bǐrú v. ', answers: ['For example', 'Therefore', 'However', 'Moreover'], correctIndex: 0 },
    { question: '毕业 bìyè sv. ', answers: ['Commence', 'Graduate', 'Postpone', 'Withdraw'], correctIndex: 1 },
    { question: '变 biàn vm. ', answers: ['Stagnation', 'Alteration', 'Change', 'Constancy'], correctIndex: 2 },
    { question: '标准 biāozhǔn n. ', answers: ['Goal', 'Standard; Criterion', 'Principle', 'Pattern'], correctIndex: 1 },
    { question: '表格 biǎogé n. ', answers: ['Schedule', 'List', 'Form; Table', 'Diagram'], correctIndex: 2 },
    { question: '表达 biǎodá v. ', answers: ['Hide', 'Express; Convey', 'Disguise', 'Withhold'], correctIndex: 1 },
    { question: '表演 biǎoyǎn v. ', answers: ['Act; Perform; Play', 'Analyze', 'Produce', 'Complain'], correctIndex: 0 },
    { question: '表扬 biǎoyáng v. ', answers: ['Critique', 'Criticize', 'Blame', 'Praise'], correctIndex: 3 },

    
      { question: '饼干 bǐnggān n. ', answers: ['Pancake', 'Biscuit', 'Pizza', 'Noodle'], correctIndex: 1 },
      { question: '并且 bìngqiě conj. ', answers: ['Nevertheless', 'Consequently', 'Therefore', 'Furthermore'], correctIndex: 3 },
      { question: '博士 bóshì n. ', answers: ['Teacher', 'Scientist', 'Doctor (an academic degree)', 'Engineer'], correctIndex: 2 },
      { question: '不过 búguò conj. ', answers: ['Therefore', 'Consequently', 'However', 'Moreover'], correctIndex: 2 },
      { question: '不得不 bùdébù ', answers: ['May', 'Must; Have to', 'Could', 'Would'], correctIndex: 1 },
      { question: '不管 bùguǎn conj. ', answers: ['Moreover', 'Regardless', 'Certainly', 'Although'], correctIndex: 1 },
      { question: '不好意思 bùhǎoyìsi ', answers: ['Feel shy or sorry', 'Be angry', 'Be happy', 'Be surprised'], correctIndex: 0 },
      { question: '不仅 bùjǐn conj. ', answers: ['Just as', 'Not until', 'Not only', 'Not yet'], correctIndex: 2 },
      { question: '部分 bùfen n. ', answers: ['Total', 'Whole', 'Part; Section; Portion', 'End'], correctIndex: 2 },
      { question: '擦 cā v. ', answers: ['Stare', 'Touch', 'Rub or wipe in order to clean', 'Smell'], correctIndex: 2 },
      { question: '猜 cāi v. ', answers: ['Calculate', 'Predict', 'Guess', 'Analyze'], correctIndex: 2 },
      { question: '材料 cáiliào n. ', answers: ['Ingredients', 'Material', 'Tools', 'Recipe'], correctIndex: 1 },
      { question: '参观 cānguān v. ', answers: ['Visit for learning', 'Work', 'Explore', 'Rest'], correctIndex: 0 },
      { question: '餐厅 cāntīng n. ', answers: ['Gym', 'Hotel', 'Park', 'Restaurant'], correctIndex: 3 },
      { question: '厕所 cèsuǒ n. ', answers: ['Bathroom', 'Living room', 'Bedroom', 'Kitchen'], correctIndex: 0 },
      { question: '差不多 chàbuduō adv. ', answers: ['Never', 'About; Nearly', 'Exactly', 'Sometimes'], correctIndex: 1 },
      { question: '长城 Chángchéng n. ', answers: ['The Great Wall', 'The Forbidden City', 'The Summer Palace', 'The Terracotta Army'], correctIndex: 0 },
      { question: '长江 Chángjiāng n. ', answers: ['The Yellow River', 'The Yangtze River', 'The Mekong River', 'The Nile River'], correctIndex: 1 },
      { question: '尝 cháng v. ', answers: ['Smell', 'Taste', 'Hear', 'See'], correctIndex: 1 },
      { question: '场 chǎng vm. ', answers: ['Used for sports', 'Used for activities', 'Used for cooking', 'Used for sleeping'], correctIndex: 1 },
      { question: '超过 chāoguò v. ', answers: ['Surpass', 'Match', 'Equal', 'Surround'], correctIndex: 0 },

      
        { question: '成功 chénggōng ', answers: ['Vibrant', 'Successful', 'Confident', 'Noisy'], correctIndex: 1 },
        { question: '争吵 zhēngchǎo ', answers: ['Discuss', 'Agree', 'Quarrel', 'Compromise'], correctIndex: 2 },
        { question: '成为 chéngwéi ', answers: ['Remain', 'Become', 'Attend', 'Engage'], correctIndex: 1 },
        { question: '诚实 chéngshí ', answers: ['Kind', 'Honest', 'Courageous', 'Generous'], correctIndex: 1 },
        { question: '乘坐 chéngzuò ', answers: ['Swim', 'Walk', 'Fly', 'Take a ride (in a car, ship, etc.)'], correctIndex: 3 },
        { question: '吃惊 chījīng ', answers: ['Feel excited', 'Feel afraid suddenly', 'Feel happy', 'Feel surprised'], correctIndex: 1 },
        { question: '重新 chóngxīn adv. ', answers: ['Once more', 'Never', 'Always', 'Nowadays'], correctIndex: 0 },
        { question: '抽烟 chōuyān ', answers: ['Read a book', 'Play chess', 'Play music', 'Smoke a cigarette'], correctIndex: 3 },
        { question: '出差 chūchāi sv. ', answers: ['Go shopping', 'Go on vacation', 'Be on a business trip', 'Go hiking'], correctIndex: 2 },
        { question: '出发 chūfā v. ', answers: ['Stay', 'Set out; Start off; Leave; Head; Move on; Take the road', 'Return', 'Rest'], correctIndex: 1 },
        { question: '出生 chūshēng v. ', answers: ['Die', 'Be born', 'Live', 'Retire'], correctIndex: 1 },
        { question: '厨房 chúfáng n. ', answers: ['Living room', 'Bedroom', 'Bathroom', 'Kitchen'], correctIndex: 3 },
        { question: '传真 chuánzhēn n. ', answers: ['Telephone', 'Printer', 'Computer', 'Fax'], correctIndex: 3 },
        { question: '窗户 chuānghu n. ', answers: ['Door', 'Mirror', 'Curtain', 'Window'], correctIndex: 3 },
      
        
          { question: '词语 cíyǔ n. ', answers: ['Language', 'Character', 'Word and phrase', 'Grammar'], correctIndex: 2 },
          { question: '从来 cónglái adv. ', answers: ['Always', 'Recently', 'Sometimes', 'Never'], correctIndex: 0 },
          { question: '粗心 cūxīn adj. ', answers: ['Careful', 'Serious', 'Thoughtful', 'Careless; Thoughtless'], correctIndex: 3 },
          { question: '存 cún v. ', answers: ['Keep; Save; Deposit', 'Spend', 'Lose', 'Find'], correctIndex: 0 },
          { question: '错误 cuòwù adj. ', answers: ['Correct', 'Wrong; Incorrect; Mistaken', 'Right', 'Accurate'], correctIndex: 1 },
          { question: '答案 dá’àn n. ', answers: ['Question', 'Explanation', 'Answer', 'Quiz'], correctIndex: 2 },
          { question: '打扮 dǎban v. ', answers: ['Dress up; Make up', 'Exercise', 'Clean up', 'Cook'], correctIndex: 0 },
          { question: '打扰 dǎrǎo v. ', answers: ['Visit', 'Bother; Interrupt; Intervene', 'Help', 'Chat'], correctIndex: 1 },
          { question: '打印 dǎyìn v. ', answers: ['Read', 'Write', 'Print', 'Copy'], correctIndex: 2 },
          { question: '打招呼 dǎzhāohu ', answers: ['Wave goodbye', 'Greet sb by word or gesture', 'Apologize', 'Laugh'], correctIndex: 1 },
          { question: '打折 dǎzhé sv. ', answers: ['Pay', 'Charge', 'Offer', 'Give a discount'], correctIndex: 3 },
          { question: '打针 dǎzhēn sv. ', answers: ['Give or have an injection', 'Donate', 'Buy', 'Sell'], correctIndex: 0 },
          { question: '大概 dàgài adv. ', answers: ['Exactly', 'Roughly', 'Exactly', 'Precisely'], correctIndex: 1 },
          { question: '大使馆 dàshǐguǎn n. ', answers: ['Embassy', 'Hospital', 'School', 'Office'], correctIndex: 0 },
          { question: '大约 dàyuē adv. ', answers: ['Exactly', 'Almost; Probably', 'Surely', 'Certainly'], correctIndex: 1 },
          { question: '大夫 dàifu n. ', answers: ['Engineer', 'Professor', 'Doctor; Physician; Surgeon', 'Scientist'], correctIndex: 2 },
          { question: '戴 dài v. ', answers: ['Take off', 'Wear; Put on', 'Hold', 'Carry'], correctIndex: 1 },

          
            { question: '当时 dāngshí n. ', answers: ['At that moment', 'Now', 'Tomorrow', 'Yesterday'], correctIndex: 0 },
            { question: '刀 dāo n. ', answers: ['Fork', 'Spoon', 'Knife', 'Plate'], correctIndex: 2 },
            { question: '导游 dǎoyóu n. ', answers: ['Driver', 'Chef', 'Tourist', 'Tour guide'], correctIndex: 3 },
            { question: '倒 dǎo v. ', answers: ['Stand up', 'Sit down', 'Jump', 'Fall; Lie down'], correctIndex: 3 },
            { question: '到处 dàochù adv. ', answers: ['Nowhere', 'Somewhere', 'Here and there', 'Everywhere'], correctIndex: 3 },
            { question: '到底 dàodǐ adv. ', answers: ['At last', 'On earth', 'In the end', 'Finally'], correctIndex: 1 },
            { question: '道歉 dàoqiàn sv. ', answers: ['Make an apology', 'Express gratitude', 'Compliment', 'Congratulate'], correctIndex: 0 },
            { question: '得意 déyì adj. ', answers: ['Disappointed', 'Satisfied', 'Embarrassed', 'Proud; Pleased with oneself'], correctIndex: 3 },
            { question: '的 de sa. ', answers: ['Possessive marker', 'Interrogative particle', 'Emphatic particle', 'Marker of complement'], correctIndex: 0 },
            { question: '得 děng sa. ', answers: ['Stand', 'Wait', 'Get; Obtain; Win; Earn', 'Postpone'], correctIndex: 2 },
            { question: '登机牌 dēngjīpái n. ', answers: ['Ticket', 'Boarding pass', 'Passport', 'Identification card'], correctIndex: 1 },
            { question: '等 děng sa. ', answers: ['And so on; Et cetera', 'Moreover', 'However', 'Furthermore'], correctIndex: 0 },
            { question: '低 dī adj. ', answers: ['High', 'Medium', 'Low; Down', 'Deep'], correctIndex: 2 },
            { question: '低 dī v. ', answers: ['Raise', 'Elevate', 'Lower', 'Decrease'], correctIndex: 2 },
            { question: '地 dǐ n. ', answers: ['At the beginning of', 'At the end of', 'In the middle of', 'On the side of'], correctIndex: 1 },
            { question: '地球 dìqiú n. ', answers: ['The moon', 'Mars', 'The Earth', 'Venus'], correctIndex: 2 },
            { question: '地址 dìzhǐ n. ', answers: ['Email address', 'Phone number', 'Home address', 'Street address'], correctIndex: 3 },
            { question: '调查 diàochá v. ', answers: ['Celebrate', 'Investigate', 'Announce', 'Protest'], correctIndex: 1 },

            
              { question: '掉 diào v. ', answers: ['Rise', 'Jump', 'Fly', 'Fall'], correctIndex: 3 },
              { question: '丢 diū v. ', answers: ['Find', 'Get', 'Win', 'Lose'], correctIndex: 3 },
              { question: '动作 dòngzuò n. ', answers: ['Rest', 'Stillness', 'Movement; Action; Motion', 'Quietness'], correctIndex: 2 },
              { question: '堵车 dǔchē v. ', answers: ['Traffic accident', 'Traffic control', 'Traffic flow', 'Traffic jam'], correctIndex: 3 },
              { question: '肚子 dùzi n. ', answers: ['Back', 'Chest', 'Head', 'Belly; Abdomen; Stomach'], correctIndex: 3 },
              { question: '短信 duǎnxìn n. ', answers: ['Email', 'Letter', 'Phone call', 'Short message'], correctIndex: 3 }
            
            
          
          
        
  
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


