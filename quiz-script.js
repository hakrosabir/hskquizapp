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
  { question: '爱 ài n. ', answers: ['Love', 'Friend', 'Eat', 'Sleep'], correctIndex: 0 },
  { question: '八 bā num. ', answers: ['Two', 'Eight', 'Ten', 'Three'], correctIndex: 1 },
  { question: '爸爸 bàba n. ', answers: ['Mother', 'Father', 'Sister', 'Brother'], correctIndex: 1 },
  { question: '杯子 bēizi n. ', answers: ['Cup', 'Plate', 'Bowl', 'Spoon'], correctIndex: 0 },
  { question: '北京 Běijīng prop. ', answers: ['Shanghai', 'Beijing', 'Guangzhou', 'Nanjing'], correctIndex: 1 },
  { question: '本 běn n. ', answers: ['Book', 'Magazine', 'Newspaper', 'Journal'], correctIndex: 0 },
  { question: '不客气 bú kèqi expr. ', answers: ['Hello', 'Goodbye', 'Thank you', 'You’re welcome'], correctIndex: 3 },
  { question: '不 bù adv. ', answers: ['Yes', 'No', 'Maybe', 'Always'], correctIndex: 1 },
  { question: '菜 cài n. ', answers: ['Meat', 'Vegetable', 'Rice', 'Fruit'], correctIndex: 1 },
  { question: '茶 chá n. ', answers: ['Coffee', 'Tea', 'Water', 'Milk'], correctIndex: 1 },
  { question: '吃 chī v. ', answers: ['Read', 'Write', 'Eat', 'Sleep'], correctIndex: 2 },
  { question: '出租车 chūzūchē n. ', answers: ['Bus', 'Train', 'Taxi', 'Car'], correctIndex: 2 },
  { question: '打电话 dǎ diànhuà v. ', answers: ['Send a letter', 'Make a phone call', 'Visit a friend', 'Go shopping'], correctIndex: 1 },
  { question: '大 dà adj. ', answers: ['Big', 'Small', 'Tall', 'Short'], correctIndex: 0 },
  { question: '的 de part. ', answers: ['Of', 'In', 'On', 'With'], correctIndex: 0 },
  { question: '点 diǎn n. ', answers: ['Minute', 'Hour', 'Day', 'Second'], correctIndex: 1 },
  { question: '电脑 diànnǎo n. ', answers: ['Television', 'Computer', 'Telephone', 'Radio'], correctIndex: 1 },
  { question: '电视 diànshì n. ', answers: ['Book', 'Magazine', 'Newspaper', 'Journal'], correctIndex: 0 },
  { question: '电影 diànyǐng n. ', answers: ['Drama', 'Documentary', 'News', 'Movie'], correctIndex: 3 },
  { question: '东西 dōngxi n. ', answers: ['Thing', 'Person', 'Place', 'Idea'], correctIndex: 0 },
  { question: '都 dōu adv. ', answers: ['Every', 'All', 'Some', 'None'], correctIndex: 1 },
  { question: '读 dú v. ', answers: ['See', 'Read', 'Listen', 'Speak'], correctIndex: 1 },
  { question: '对不起 duìbuqǐ expr. ', answers: ['Excuse me', 'I’m sorry', 'Thank you', 'You’re welcome'], correctIndex: 1 },
  { question: '多 duō adj. ', answers: ['Few', 'Many', 'Little', 'Much'], correctIndex: 1 },
  { question: '儿子 érzi n. ', answers: ['Daughter', 'Son', 'Sister', 'Brother'], correctIndex: 1 },
  { question: '二 èr num. ', answers: ['Three', 'Two', 'Four', 'Five'], correctIndex: 1 },
  { question: '饭店 fàndiàn n. ', answers: ['Cafe', 'Hotel', 'Restaurant', 'Bar'], correctIndex: 2 },
  { question: '飞机 fēijī n. ', answers: ['Car', 'Bus', 'Train', 'Airplane'], correctIndex: 3 },
  { question: '分钟 fēnzhōng n. ', answers: ['Hour', 'Minute', 'Second', 'Day'], correctIndex: 1 },
  { question: '高兴 gāoxìng adj. ', answers: ['Happy', 'Sad', 'Excited', 'Angry'], correctIndex: 0 },
  { question: '个 gè m. ', answers: ['Some', 'Many', 'Few', 'All'], correctIndex: 0 },
  { question: '工作 gōngzuò v./n. ', answers: ['Study', 'Work', 'Play', 'Sleep'], correctIndex: 1 },
  { question: '汉语 Hànyǔ n. ', answers: ['Korean', 'Japanese', 'English', 'Chinese'], correctIndex: 3 },
  { question: '好 hǎo adj. ', answers: ['Good', 'Bad', 'Nice', 'Ugly'], correctIndex: 0 },
  { question: '好 hào num. ', answers: ['Number', 'Date', 'Day', 'Month'], correctIndex: 1 },
  { question: '吃 hē v. ', answers: ['Eat', 'Drink', 'Sleep', 'Play'], correctIndex: 1 },
  { question: '和 hé conj. ', answers: ['And', 'But', 'Or', 'So'], correctIndex: 0 },
  { question: '很 hěn adv. ', answers: ['Little', 'A lot', 'Very', 'Quite'], correctIndex: 2 },
  { question: '后面 hòumiàn n. ', answers: ['Front', 'Back', 'Left', 'Right'], correctIndex: 1 },
  { question: '回 huí v. ', answers: ['Go', 'Come', 'Leave', 'Stay'], correctIndex: 1 },
  { question: '会 huì v. ', answers: ['Can', 'Cannot', 'Will', 'Shall'], correctIndex: 0 },
  { question: '几 jǐ pron. ', answers: ['How', 'What', 'When', 'Where'], correctIndex: 0 },
  { question: '家 jiā n. ', answers: ['Home', 'Office', 'School', 'Market'], correctIndex: 0 },
  { question: '叫 jiào v. ', answers: ['Say', 'Tell', 'Ask', 'Call'], correctIndex: 3 },
  { question: '今天 jīntiān n. ', answers: ['Yesterday', 'Today', 'Tomorrow', 'Now'], correctIndex: 1 },
  { question: '九 jiǔ num. ', answers: ['Eight', 'Nine', 'Ten', 'Twelve'], correctIndex: 0 },
  { question: '开 kāi v. ', answers: ['Drive', 'Open', 'Close', 'Stop'], correctIndex: 1 },
  { question: '看 kàn v. ', answers: ['See', 'Look', 'Read', 'Watch'], correctIndex: 2 },
  { question: '看见 kànjiàn v. ', answers: ['Hear', 'Listen', 'See', 'Look'], correctIndex: 2 },
  { question: '块 kuài n. ', answers: ['Dollar', 'Euro', 'Pound', 'Yuan'], correctIndex: 3 },
  { question: '来 lái v. ', answers: ['Go', 'Come', 'Leave', 'Stay'], correctIndex: 1 },
  { question: '老师 lǎoshī n. ', answers: ['Student', 'Teacher', 'Doctor', 'Engineer'], correctIndex: 1 },
  { question: '了 le part. ', answers: ['Still', 'Already', 'Again', 'Now'], correctIndex: 1 },
  { question: '冷 lěng adj. ', answers: ['Hot', 'Cold', 'Warm', 'Cool'], correctIndex: 1 },
  { question: '里 lǐ n. ', answers: ['Inside', 'Outside', 'Left', 'Right'], correctIndex: 0 },
  { question: '零 líng num. ', answers: ['Ten', 'Hundred', 'Thousand', 'Zero'], correctIndex: 3 },
  { question: '六 liù num. ', answers: ['Six', 'Seven', 'Eight', 'Nine'], correctIndex: 0 },
  { question: '妈妈 māma n. ', answers: ['Father', 'Mother', 'Sister', 'Brother'], correctIndex: 1 },
  { question: '吗 ma part. ', answers: ['Yes-no question', 'Wh-question', 'Exclamation', 'Imperative'], correctIndex: 0 },
  { question: '买 mǎi v. ', answers: ['Sell', 'Buy', 'Make', 'Build'], correctIndex: 1 },
  { question: '没关系 méi guānxi expr. ', answers: ['You’re welcome', 'Excuse me', 'Thank you', 'I’m sorry'], correctIndex: 0 },
  { question: '没有 méiyǒu v. ', answers: ['Have', 'Don’t have', 'Want', 'Need'], correctIndex: 1 },
  { question: '米饭 mǐfàn n. ', answers: ['Noodles', 'Rice', 'Bread', 'Pasta'], correctIndex: 1 },
  { question: '明天 míngtiān n. ', answers: ['Yesterday', 'Today', 'Tomorrow', 'Now'], correctIndex: 2 },
  { question: '名字 míngzi n. ', answers: ['Surname', 'First name', 'Full name', 'Nickname'], correctIndex: 2 },
  { question: '哪 nǎ pron. ', answers: ['Which', 'What', 'When', 'Where'], correctIndex: 0 },
  { question: '那儿 nàr pron. ', answers: ['Here', 'There', 'Nowhere', 'Everywhere'], correctIndex: 1 },
  { question: '那儿 nèi pron. ', answers: ['Here', 'There', 'Nowhere', 'Everywhere'], correctIndex: 1 },
  { question: '内 nèi pron. ', answers: ['This', 'That', 'These', 'Those'], correctIndex: 1 },
  { question: '呢 ne part. ', answers: ['Already', 'Still', 'Again', 'Now'], correctIndex: 3 },
  { question: '能 néng v. ', answers: ['Can', 'Cannot', 'Will', 'Shall'], correctIndex: 0 },
  { question: '你 nǐ pron. ', answers: ['I', 'You', 'He/She', 'We'], correctIndex: 1 },
  { question: '年 nián n. ', answers: ['Age', 'Year', 'Month', 'Day'], correctIndex: 1 },
  { question: '女儿 nǚ’ér n. ', answers: ['Son', 'Daughter', 'Sister', 'Brother'], correctIndex: 1 },
  { question: '朋友 péngyou n. ', answers: ['Friend', 'Family', 'Colleague', 'Neighbor'], correctIndex: 0 },
  { question: '漂亮 piàoliang adj. ', answers: ['Ugly', 'Handsome/Beautiful', 'Tall', 'Short'], correctIndex: 1 },
  { question: '苹果 píngguǒ n. ', answers: ['Banana', 'Pear', 'Orange', 'Apple'], correctIndex: 3 },
  { question: '七 qī num. ', answers: ['Six', 'Seven', 'Eight', 'Nine'], correctIndex: 1 },
  { question: '钱 qián n. ', answers: ['Money', 'Time', 'Weather', 'Age'], correctIndex: 0 },
  { question: 'qiánmiàn 前面 n. ', answers: ['Before', 'In front', 'At the head', 'Ahead'], correctIndex: 1 },
  
  { question: 'qǐng 请 v. ', answers: ['Thank you', 'Excuse me', 'Sorry', 'Please'], correctIndex: 3 },
  { question: 'qù 去 v. ', answers: ['Come', 'Go', 'Leave', 'Stay'], correctIndex: 1 },
  { question: 'rè 热 adj. ', answers: ['Cold', 'Hot', 'Warm', 'Cool'], correctIndex: 1 },
  { question: 'rén 人 n. ', answers: ['Person', 'Animal', 'Plant', 'Object'], correctIndex: 0 },
  { question: 'rènshi 认识 v. ', answers: ['Meet', 'Know', 'See', 'Understand'], correctIndex: 1 },
  { question: 'sān 三 num. ', answers: ['Three', 'Four', 'Five', 'Six'], correctIndex: 0 },
  { question: 'shāngdiàn 商店 n. ', answers: ['Supermarket', 'Store', 'Market', 'Shop'], correctIndex: 2 },
  { question: 'shàng 上 prep. ', answers: ['Under', 'Above', 'In front', 'Behind'], correctIndex: 1 },
  { question: 'shàngbān 上班 v. ', answers: ['Finish work', 'Go to work', 'Start work', 'Leave work'], correctIndex: 2 },
  { question: 'shàngchuán 上船 v. ', answers: ['Get off a boat', 'Get on a boat', 'Get off a plane', 'Get on a plane'], correctIndex: 1 },
  { question: 'shàngkè 上课 v. ', answers: ['Finish class', 'Go to class', 'Start class', 'Leave class'], correctIndex: 2 },
  { question: 'shēngbì 生日 n. ', answers: ['Currency', 'Credit card', 'Cash', 'Birthday'], correctIndex: 3 },
  { question: 'shéi 谁 pron. ', answers: ['Where', 'Who', 'When', 'Why'], correctIndex: 1 },
  { question: 'shénme 什么 pron. ', answers: ['Why', 'What', 'When', 'Where'], correctIndex: 1 },
  { question: 'shénme shíhòu 什么时候 ', answers: ['How', 'When', 'Where', 'Why'], correctIndex: 1 },
  { question: 'shénme yìsi 什么意思 ', answers: ['How are you?', 'What is your name?', 'Where do you live?', 'What does it mean?'], correctIndex: 3 },
  { question: 'shēng 生 v. ', answers: ['Die', 'Live', 'Sing', 'Dance'], correctIndex: 1 },
  { question: 'shí 十 num. ', answers: ['Five', 'Ten', 'Fifteen', 'Twenty'], correctIndex: 1 },
    
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


