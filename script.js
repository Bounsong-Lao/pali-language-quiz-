document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ພາສາປາລີມີຄວາມສຳພັນຫຼັກກັບສາສະໜາໃດ?",
            options: [
                "ຄຣິສຕຽນ",
                "ອິດສະລາມ",
                "ພຸດທະສາສະໜາ",
                "ຮິນດູ"
            ],
            answer: "ພຸດທະສາສະໜາ",
            explanation: "ພາສາປາລີມີຄວາມສຳພັນຫຼັກກັບພຣະພຸດທະສາສະໜານິກາຍເຖຣະວາດ."
        },
        {
            question: "ຄຳພີສັກສິດຫຼັກຂອງພຣະພຸດທະສາສະໜານິກາຍເຖຣະວາດ ທີ່ຂຽນດ້ວຍພາສາປາລີມີຊື່ວ່າແນວໃດ?",
            options: [
                "ຄຳພີໄບເບິນ",
                "ພຣະໄຕຣປີດົກ",
                "ຄຳພີກຸລະອ່ານ",
                "ພຣະເວດ"
            ],
            answer: "ພຣະໄຕຣປີດົກ",
            explanation: "ພຣະໄຕຣປີດົກ ແມ່ນຄຳພີຫຼັກຂອງພຣະພຸດທະສາສະໜານິກາຍເຖຣະວາດທີ່ຂຽນດ້ວຍພາສາປາລີ."
        },
        {
            question: "ພາສາປາລີເປັນພາສາບູຮານໃນກຸ່ມພາສາໃດ?",
            options: [
                "ພາສາຈີນ-ທິເບດ",
                "ພາສາອິນໂດ-ອາຣະຢັນ",
                "ພາສາອາຣັບ",
                "ພາສາກຣີກ"
            ],
            answer: "ພາສາອິນໂດ-ອາຣະຢັນ",
            explanation: "ພາສາປາລີເປັນພາສາບູຮານໃນກຸ່ມພາສາອິນໂດ-ອາຣະຢັນ."
        },
        {
            question: "ຄຳວ່າ 'ປາລີ' ເອງມີຄວາມໝາຍວ່າແນວໃດ?",
            options: [
                "ຕົ້ນໄມ້",
                "ຂໍ້ຄວາມ ຫຼື ແຖວ",
                "ນ້ຳ",
                "ພູເຂົາ"
            ],
            answer: "ຂໍ້ຄວາມ ຫຼື ແຖວ",
            explanation: "ຄຳວ່າ 'ປາລີ' ເອງໝາຍເຖິງ 'ຂໍ້ຄວາມ' ຫຼື 'ແຖວ' ເຊິ່ງໝາຍເຖິງຂໍ້ຄວາມໃນພຣະຄຳພີ."
        },
        {
            question: "ພາສາປາລີຍັງຖືກສຶກສາ ແລະ ນຳໃຊ້ຢູ່ໃນປະເທດໃດແດ່ໃນປັດຈຸບັນ?",
            options: [
                "ຝຣັ່ງ, ເຢຍລະມັນ, ອັງກິດ",
                "ຍີ່ປຸ່ນ, ເກົາຫຼີ, ຈີນ",
                "ສີລັງກາ, ມຽນມາ, ໄທ, ລາວ, ກຳປູເຈຍ",
                "ອາເມລິກາ, ການາດາ, ອົດສະຕາລີ"
            ],
            answer: "ສີລັງກາ, ມຽນມາ, ໄທ, ລາວ, ກຳປູເຈຍ",
            explanation: "ພາສາປາລີຍັງຖືກສຶກສາ ແລະ ນຳໃຊ້ໃນບັນດາປະເທດທີ່ນັບຖືພຸດທະສາສະໜານິກາຍເຖຣະວາດໃນອາຊີຕາເວັນອອກສຽງໃຕ້ ແລະ ອາຊີໃຕ້."
        },
        {
            question: "ພາສາປາລີມີຄວາມສຳພັນກັບພາສາບູຮານໃດ?",
            options: [
                "ພາສາລາຕິນ",
                "ພາສາສັນສະກິດ",
                "ພາສາອີຢິບບູຮານ",
                "ພາສາເບີບູຣີ"
            ],
            answer: "ພາສາສັນສະກິດ",
            explanation: "ພາສາປາລີມີຄວາມສຳພັນກັບພາສາສັນສະກິດ ແຕ່ມີຄວາມງ່າຍດາຍກວ່າ."
        },
        {
            question: "ການສຶກສາພາສາປາລີມີຄວາມສຳຄັນແນວໃດຕໍ່ພຣະສົງ ແລະ ນັກວິຊາການພຸດທະສາສະໜາ?",
            options: [
                "ເພື່ອຮຽນຮູ້ສູດຄິດໄລ່",
                "ເພື່ອເຂົ້າເຖິງຄຳສອນດັ້ງເດີມໂດຍກົງ",
                "ເພື່ອຮຽນຮູ້ວິທີການປູກຝັງ",
                "ເພື່ອສຶກສາປະຫວັດສາດລາວ"
            ],
            answer: "ເພື່ອເຂົ້າເຖິງຄຳສອນດັ້ງເດີມໂດຍກົງ",
            explanation: "ການສຶກສາພາສາປາລີຊ່ວຍໃຫ້ເຂົ້າເຖິງຄຳສອນດັ້ງເດີມຂອງພຣະພຸດທະເຈົ້າໄດ້ຢ່າງຖືກຕ້ອງ."
        },
        {
            question: "ເຊື່ອກັນວ່າພາສາປາລີເຄີຍເປັນພາສາໃດໃນສະໄໝພຣະພຸດທະເຈົ້າ?",
            options: [
                "ພາສາລາຍລັກອັກສອນເທົ່ານັ້ນ",
                "ພາສາເວົ້າ",
                "ພາສາລັບ",
                "ພາສາທາງການທູດ"
            ],
            answer: "ພາສາເວົ້າ",
            explanation: "ເຊື່ອກັນວ່າພາສາປາລີເຄີຍເປັນພາສາເວົ້າໃນສະໄໝພຣະພຸດທະເຈົ້າ."
        },
        {
            question: "ພຣະໄຕຣປີດົກ ປະກອບດ້ວຍຄຳພີຫຼັກຈັກສ່ວນ?",
            options: [
                "2 ສ່ວນ",
                "3 ສ່ວນ",
                "4 ສ່ວນ",
                "1 ສ່ວນ"
            ],
            answer: "3 ສ່ວນ",
            explanation: "ພຣະໄຕຣປີດົກ ປະກອບດ້ວຍ 3 ສ່ວນຄື: ພຣະວິນັຍປີດົກ, ພຣະສູດຕັນຕະປີດົກ, ແລະ ພຣະອະພິທຳປີດົກ."
        },
        {
            question: "ພາສາປາລີມີບົດບາດແນວໃດໃນການຮັກສາພຣະທຳຄຳສອນຂອງພຣະພຸດທະເຈົ້າ?",
            options: [
                "ບໍ່ມີບົດບາດ",
                "ເປັນພາສາທີ່ໃຊ້ສຳລັບການຄ້າ",
                "ເປັນພາສາທີ່ໃຊ້ສືບທອດພຣະທຳຄຳສອນມາສູ່ຄົນຮຸ່ນຫຼັງ",
                "ເປັນພາສາສຳລັບບົດເພງເທົ່ານັ້ນ"
            ],
            answer: "ເປັນພາສາທີ່ໃຊ້ສືບທອດພຣະທຳຄຳສອນມາສູ່ຄົນຮຸ່ນຫຼັງ",
            explanation: "ພາສາປາລີເປັນພາສາທີ່ບັນທຶກ ແລະ ສືບທອດພຣະທຳຄຳສອນຂອງພຣະພຸດທະເຈົ້າໄວ້ຢ່າງຄົບຖ້ວນ."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length;
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    quizContainer.innerHTML = `
        <p>ກົດປຸ່ມ "ເລີ່ມທົດສອບ" ເພື່ອເລີ່ມຕົ້ນ!</p>
        <button id="start-quiz-btn">ເລີ່ມທົດສອບ</button>
    `;
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
