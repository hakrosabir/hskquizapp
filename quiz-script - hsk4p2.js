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
  
  
  { question: '对话 duìhuà n. ', answers: ['Monologue', 'Discussion', 'Conversation', 'Dialogue'], correctIndex: 3 },
  { question: '对面 duìmiàn n. ', answers: ['The same side', 'The adjacent side', 'The opposite side', 'The front side'], correctIndex: 2 },
  { question: '儿童 értóng n. ', answers: ['Adult', 'Teenager', 'Elder', 'A child'], correctIndex: 3 },
  { question: '而 ér conj. ', answers: ['Or', 'And', 'But', 'However'], correctIndex: 1 },
  { question: '发生 fāshēng v. ', answers: ['Occur', 'Disappear', 'End', 'Start'], correctIndex: 0 },
  { question: '发展 fāzhǎn v. ', answers: ['Develop', 'Stagnate', 'Decrease', 'Pause'], correctIndex: 0 },
  { question: '法律 fǎlǜ n. ', answers: ['Ethics', 'Morality', 'Rules', 'Law'], correctIndex: 3 },
  { question: '翻译 fānyì v. ', answers: ['Invent', 'Explore', 'Translate', 'Create'], correctIndex: 2 },
  { question: '烦恼 fánnǎo n. ', answers: ['Joy', 'Contentment', 'Peace', 'Vexation; Worry; Trouble'], correctIndex: 3 },
  { question: '反对 fǎnduì v. ', answers: ['Support', 'Endorse', 'Oppose', 'Agree'], correctIndex: 2 },
  { question: '方法 fāngfǎ n. ', answers: ['Approach', 'Direction', 'Strategy', 'Method; Way; Manner; Measure'], correctIndex: 3 },
  { question: '方面 fāngmiàn n. ', answers: ['Aspect', 'Feature', 'Point', 'Factor'], correctIndex: 0 },
  { question: '方向 fāngxiàng n. ', answers: ['Position', 'Location', 'Orientation', 'Direction'], correctIndex: 3 },
  { question: '房东 fángdōng n. ', answers: ['Tenant', 'Homeowner', 'Roommate', 'Landlord'], correctIndex: 3 },

  
    { question: '放弃 fàngqì v. ', answers: ['Hold on', 'Continue', 'Persist', 'Give up'], correctIndex: 3 },
    { question: '放暑假 fàng shǔjià ', answers: ['Have a winter vacation', 'Have a spring vacation', 'Have a summer vacation', 'Have an autumn vacation'], correctIndex: 2 },
    { question: '放松 fàngsōng v. ', answers: ['Stress', 'Strain', 'Tighten', 'Relax'], correctIndex: 3 },
    { question: '费用 fèiyòng n. ', answers: ['Income', 'Savings', 'Expense; Money spent', 'Investment'], correctIndex: 2 },
    { question: '份 fèn nm. ', answers: ['Whole', 'Section', 'Total', 'Part; Portion'], correctIndex: 3 },
    { question: '丰富 fēngfù adj. ', answers: ['Scarce', 'Limited', 'Inadequate', 'Abundant; Plentiful; Copious; Rich; Profuse'], correctIndex: 3 },
    { question: '否则 fǒuzé conj. ', answers: ['Certainly', 'Otherwise', 'Moreover', 'Additionally'], correctIndex: 1 },
    { question: '符合 fúhé v. ', answers: ['Diverge', 'Contradict', 'Disagree', 'Correspond with; Accord with; Conform to'], correctIndex: 3 },
    { question: '父亲 fùqīn n. ', answers: ['Mother', 'Father', 'Grandfather', 'Grandmother'], correctIndex: 1 },
    { question: '付款 fùkuǎn v. ', answers: ['Refund', 'Receive', 'Pay', 'Deposit'], correctIndex: 2 },
    { question: '负责 fùzé v. ', answers: ['Follow', 'Lead', 'Be responsible for; Be in charge of', 'Observe'], correctIndex: 2 },
    { question: '复印 fùyìn v. ', answers: ['Reproduce', 'Invent', 'Create', 'Translate'], correctIndex: 0 },
    { question: '复杂 fùzá adj. ', answers: ['Simple', 'Clear', 'Easy', 'Complicated; Complex'], correctIndex: 3 },
    { question: '富 fù adj. ', answers: ['Poor', 'Wealthy', 'Comfortable', 'Rich'], correctIndex: 3 },
    { question: '改变 gǎibiàn v. ', answers: ['Remain', 'Preserve', 'Retain', 'Change; Vary'], correctIndex: 3 },
    { question: '感悲 gǎnbēi v. ', answers: ['Celebrate', 'Applaud', 'Toast', 'Cheers'], correctIndex: 3 },

    
      { question: '感 gǎn v. ', answers: ['Let go', 'Hold on', 'Catch; Get', 'Release'], correctIndex: 2 },
      { question: '敢 gǎn aux. ', answers: ['Hesitate', 'Risk', 'Dare to do', 'Avoid'], correctIndex: 2 },
      { question: '感动 gǎndòng v. ', answers: ['Move or touch sb', 'Be still', 'Remain', 'Stop'], correctIndex: 0 },
      { question: '感觉 gǎnjué n. ', answers: ['Thought', 'Feeling; Impression; Sensation', 'Opinion', 'Memory'], correctIndex: 1 },
      { question: '感情 gǎnqíng n. ', answers: ['Passion', 'Interest', 'Feeling; Emotion', 'Attraction'], correctIndex: 2 },
      { question: '感谢 gǎnxiè v. ', answers: ['Forget', 'Thank; Be grateful; Appreciate', 'Reject', 'Ignore'], correctIndex: 1 },
      { question: '干 gàn v. ', answers: ['Stop', 'Begin', 'Continue', 'Do; Work'], correctIndex: 3 },
      { question: '高级 gāojí adj. ', answers: ['Inferior', 'Average', 'Middle-level', 'Advanced'], correctIndex: 3 },
      { question: '高速公路 gāosùgōnglù n. ', answers: ['Street', 'Highway', 'Expressway', 'Path'], correctIndex: 2 },
      { question: '个 gè pron. ', answers: ['Any', 'Each', 'Every', 'Some'], correctIndex: 2 },
      { question: '工资 gōngzī n. ', answers: ['Rent', 'Profit', 'Wage; Pay; Salary', 'Bonus'], correctIndex: 2 },
      { question: '公里 gōnglǐ nm. ', answers: ['Meter', 'Kilogram', 'Kilometer', 'Centimeter'], correctIndex: 2 },
      { question: '功夫 gōngfu n. ', answers: ['Effort', 'Work', 'Skill', 'Kung Fu'], correctIndex: 3 },
      { question: '共同 gòngtóng adj. ', answers: ['Different', 'Special', 'Shared', 'Common'], correctIndex: 2 },
      { question: '购物 gòuwù sv. ', answers: ['Go shopping', 'Sell', 'Buy', 'Trade'], correctIndex: 0 },
      { question: '够 gòu adv. ', answers: ['Insufficient', 'More', 'Fewer', 'Enough'], correctIndex: 3 },
      { question: '购 gòu v. ', answers: ['Sell', 'Buy', 'Acquire', 'Exchange'], correctIndex: 1 },

      
        { question: '估计 gūjì v. ', answers: ['Evaluate', 'Estimate; Figure approximately', 'Conclude', 'Analyze'], correctIndex: 1 },
        { question: '鼓励 gǔlì n. ', answers: ['Incentive', 'Encouragement', 'Discouragement', 'Motivation'], correctIndex: 1 },
        { question: '鼓励 gǔlì v. ', answers: ['Discourage', 'Suppress', 'Encourage; Work up; Cheer on', 'Deter'], correctIndex: 2 },
        { question: '故意 gùyì adv. ', answers: ['Accidentally', 'Unintentionally', 'Deliberately; Designedly', 'Randomly'], correctIndex: 2 },
        { question: '顾客 gùkè n. ', answers: ['Visitor', 'Client', 'Consumer', 'Customer'], correctIndex: 3 },
        { question: '挂 guà v. ', answers: ['Remove', 'Hang up', 'Install', 'Fix'], correctIndex: 1 },
        { question: '关键 guānjiàn n. ', answers: ['Important', 'Crucial; Very important', 'Trivial', 'Insignificant'], correctIndex: 1 },
        { question: '观众 guānzhòng n. ', answers: ['Viewer; Spectator; Audience', 'Performer', 'Participant', 'Speaker'], correctIndex: 0 },
        { question: '管理 guǎnlǐ v. ', answers: ['Handle', 'Oversee', 'Be in charge of; Manage', 'Neglect'], correctIndex: 2 },
        { question: '管理 guǎnlǐ n. ', answers: ['Supervision', 'Control', 'Leadership', 'Management'], correctIndex: 3 },
        { question: '光 guāng n. ', answers: ['Darkness', 'Brightness', 'Shadow', 'Light'], correctIndex: 3 },
        { question: '光 guāng adv. ', answers: ['Solely; Only', 'Quickly', 'Brightly', 'Softly'], correctIndex: 0 },
        { question: '光 guāng adj. ', answers: ['Used up; Finished (used after a verb)', 'Abundant', 'Dim', 'Shining'], correctIndex: 0 },
        { question: '广播 guǎngbō n. ', answers: ['Telecast', 'Podcast', 'Broadcasting', 'Transmission'], correctIndex: 2 }
      ,

      
        { question: '广告 guǎnggào n. ', answers: ['Announcement', 'Advertisement; Commercial', 'Promotion', 'Publicity'], correctIndex: 1 },
        { question: '逛 guàng v. ', answers: ['Run', 'Stroll; Roam', 'Climb', 'Hide'], correctIndex: 1 },
        { question: '规定 guīdìng v. ', answers: ['Suggest', 'Order', 'Instruct', 'Stipulate; Order'], correctIndex: 3 },
        { question: '规定 guīdìng n. ', answers: ['Guideline', 'Rule; Regulation; Stipulation', 'Law', 'Protocol'], correctIndex: 1 },
        { question: '国籍 guójí n. ', answers: ['Origin', 'Nationality; Citizenship', 'Ancestry', 'Heritage'], correctIndex: 1 },
        { question: '国际 guójì adj. ', answers: ['National', 'Global', 'Local', 'International'], correctIndex: 3 },
        { question: '果汁 guǒzhī n. ', answers: ['Tea', 'Juice', 'Soda', 'Water'], correctIndex: 1 },
        { question: '过程 guòchéng n. ', answers: ['Event', 'Procedure; Process; Course', 'Decision', 'Outcome'], correctIndex: 1 },
        { question: '海洋 hǎiyáng n. ', answers: ['Desert', 'Island', 'Lake', 'Ocean'], correctIndex: 3 },
        { question: '害羞 hàixiū adj. ', answers: ['Confident', 'Outgoing', 'Reserved', 'Shy'], correctIndex: 3 },
        { question: '寒假 hánjià n. ', answers: ['Spring break', 'Summer vacation', 'Autumn break', 'Winter vacation'], correctIndex: 3 },
        { question: '汗 hàn n. ', answers: ['Tears', 'Saliva', 'Sweat', 'Blood'], correctIndex: 2 },
        { question: '好处 hǎochu n. ', answers: ['Flaw', 'Weakness', 'Disadvantage', 'Good point; Advantage'], correctIndex: 3 },
        { question: '好像 hǎoxiàng adv. ', answers: ['Certainly', 'Maybe', 'Definitely', 'As if; Seem; Be like; Look like'], correctIndex: 3 },
        { question: '号码 hàomǎ n. ', answers: ['Date', 'Number', 'Time', 'Address'], correctIndex: 1 },
        { question: '合格 héhé adj. ', answers: ['Eligible', 'Qualified', 'Unfit', 'Ineligible'], correctIndex: 1 },
        { question: '合适 héshì adj. ', answers: ['Inappropriate', 'Inadequate', 'Awkward', 'Fit; Suitable; Appropriate'], correctIndex: 3 },
        { question: '盒子 hézi n. ', answers: ['Box', 'Bag', 'Case', 'Package'], correctIndex: 0 },
        { question: '后悔 hòuhuǐ v. ', answers: ['Celebrate', 'Appreciate', 'Regret; Repent', 'Apologize'], correctIndex: 2 },
        { question: '厚 hòu adj. ', answers: ['Thin', 'Short', 'Tall', 'Thick'], correctIndex: 3 },
        { question: '厚 hòu n. ', answers: ['Length', 'Width', 'Height', 'Thickness'], correctIndex: 3 }
      ,

      
        { question: '互联网 hùliánwǎng n. ', answers: ['Telecommunication', 'Intranet', 'Internet', 'Network'], correctIndex: 2 },
        { question: '互相 hùxiāng adv. ', answers: ['Mutually', 'Singly', 'Collectively', 'Each other; One another'], correctIndex: 3 },
        { question: '护士 hùshi n. ', answers: ['Doctor', 'Patient', 'Therapist', 'Nurse'], correctIndex: 3 },
        { question: '怀疑 huáiyí v. ', answers: ['Trust', 'Believe', 'Distrust', 'Doubt; Suspect'], correctIndex: 3 },
        { question: '回忆 huíyì v. ', answers: ['Forget', 'Remember', 'Ignore', 'Recall'], correctIndex: 3 },
        { question: '回忆 huíyì n. ', answers: ['Memory; Recollection', 'Dream', 'Thought', 'Imagination'], correctIndex: 0 },
        { question: '活动 huódòng v. ', answers: ['Rest', 'Sleep', 'Exercise', 'Relax'], correctIndex: 2 },
        { question: '活动 huódòng n. ', answers: ['Action; Movement', 'Event', 'Function', 'Activity'], correctIndex: 3 },
        { question: '活泼 huópō adj. ', answers: ['Quiet', 'Dull', 'Stagnant', 'Lively'], correctIndex: 3 },
        { question: '火 huǒ n. ', answers: ['Water', 'Earth', 'Wind', 'Fire'], correctIndex: 3 },
        { question: '火 huǒ n. ', answers: ['Anger; Irritation', 'Joy; Happiness', 'Love', 'Fear'], correctIndex: 0 },
        { question: '火 huǒ adj. ', answers: ['Traditional', 'Casual', 'Conservative', 'Fashionable; Popular; Prosperous'], correctIndex: 3 },
        { question: '获得 huòdé v. ', answers: ['Lose', 'Miss', 'Find', 'Get; Obtain'], correctIndex: 3 },
        { question: '积极 jījí adj. ', answers: ['Negative', 'Passive', 'Inactive', 'Positive; Vigorous'], correctIndex: 3 },
        { question: '积累 jīlěi v. ', answers: ['Distribute', 'Discard', 'Accumulate', 'Consume'], correctIndex: 2 },
        { question: '积累 jīlěi n. ', answers: ['Depletion', 'Scarcity', 'Reduction', 'Accumulation'], correctIndex: 3 },
        { question: '基础 jīchǔ n. ', answers: ['Structure', 'Core', 'Basis; Foundation', 'Surface'], correctIndex: 2 }
      ,

      
        { question: '激动 jīdòng adj. ', answers: ['Calm', 'Excited', 'Indifferent', 'Stir; Excite; Move'], correctIndex: 3 },
        { question: '及时 jíshí adv. ', answers: ['Late', 'Early', 'In Time', 'Never'], correctIndex: 2 },
        { question: '即使 jíshǐ conj. ', answers: ['In Case', 'Unless', 'Even If', 'Although'], correctIndex: 2 },
        { question: '计划 jìhuà n. ', answers: ['Plan', 'Goal', 'Agenda', 'Strategy'], correctIndex: 0 },
        { question: '计划 jìhuà v. ', answers: ['Postpone', 'Cancel', 'Plan to do sth', 'Delay'], correctIndex: 2 },
        { question: '计算机 jìsuànjī n. ', answers: ['Calculator', 'Computer', 'Machine', 'Device'], correctIndex: 1 },
        { question: '技术 jìshù n. ', answers: ['Technique', 'Art', 'Skill', 'Science'], correctIndex: 0 },
        { question: '既然 jìrán conj. ', answers: ['Because', 'Therefore', 'Since', 'Thus'], correctIndex: 2 },
        { question: '继续 jìxù adv. ', answers: ['Start', 'Pause', 'Continue; Proceed; Carry on; Get on; Keep on', 'End'], correctIndex: 2 },
        { question: '寄 jì v. ', answers: ['Receive', 'Deliver', 'Mail', 'Pick up'], correctIndex: 2 },
        { question: '加班 jiābān sv. ', answers: ['Take a break', 'Go home', 'Work overtime', 'Rest'], correctIndex: 2 },
        { question: '加油站 jiāyóuzhàn n. ', answers: ['Bus station', 'Train station', 'Airport', 'Gas station'], correctIndex: 3 },
        { question: '家具 jiājù n. ', answers: ['Food', 'Clothing', 'Furniture', 'Electronics'], correctIndex: 2 },
        { question: '价格 jiàgé n. ', answers: ['Weight', 'Size', 'Color', 'Price'], correctIndex: 3 },
        { question: '假 jiǎ adj. ', answers: ['Real', 'True', 'Genuine', 'Fake; False'], correctIndex: 3 },
        { question: '坚持 jiānchí v. ', answers: ['Give up', 'Quit', 'Insist on; Persist in; Keep up; Stand on', 'Abandon'], correctIndex: 2 }
      ,
      
  
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


