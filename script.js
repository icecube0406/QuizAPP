let questions = [
    {
      "question":"Wer hat HTML erfunden?",
      "answer_1":"Robbie Williams",
      "answer_2":"Lady Gaga",
      "answer_3":"Tim Berners-Lee",
      "answer_4":"Justin Bieber",
      "right_answer":3
    },
    {
        "question":"Was für ein Handy habe ich?",
        "answer_1":"Samsung",
        "answer_2":"iPhone",
        "answer_3":"Google Phone",
        "answer_4":"Nokia",
        "right_answer":2
      },
      {
        "question":"In welchem Monat beginnt der Frühling?",
        "answer_1":"Dezember",
        "answer_2":"Januar",
        "answer_3":"Februar",
        "answer_4":"März",
        "right_answer":4
      },
      {
        "question":"Wie viele Std. liegt Florida hinter Deutschland?",
        "answer_1":"6h",
        "answer_2":"5h",
        "answer_3":"4h",
        "answer_4":"3h",
        "right_answer":1
      },
      {
        "question":"Wie viele 'STRG'-Tasten sind auf einer Standardtastatur?",
        "answer_1":"1",
        "answer_2":"2",
        "answer_3":"3",
        "answer_4":"4",
        "right_answer":2
      }
    ];

    let rightQuestions = 0;

    let currentQuestion = 0;

    function init(){
        document.getElementById('all-questions').innerHTML = questions.length;

        showQuestion();
    };

    function showQuestion(){

       if (currentQuestion >= questions.length) {
         //TODO show End Screen, abgleichen mit den Zahlenmengen
         document.getElementById('endScreen').style = '';
         document.getElementById('questionBody').style = 'display: none';

         document.getElementById('amount-of-questions').innerHTML = questions.length;
         document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        } else {

       let question = questions[currentQuestion];
       
       document.getElementById('question-number').innerHTML = currentQuestion +1; //Zugriff auf die erste nummer (1 von % Fragen)
       document.getElementById('questiontext').innerHTML = question['question'];
       document.getElementById('answer_1').innerHTML = question['answer_1'];
       document.getElementById('answer_2').innerHTML = question['answer_2'];
       document.getElementById('answer_3').innerHTML = question['answer_3'];
       document.getElementById('answer_4').innerHTML = question['answer_4'];
      }
    }

    function answer(selection){
      let question = questions[currentQuestion];
      let selectedQuestionNumber = selection.slice(-1);
      let idofRightAnswer = `answer_${question['right_answer']}`;
    
      if(selectedQuestionNumber == question['right_answer']) { //Richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
      } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idofRightAnswer).parentNode.classList.add('bg-success');
      }
      document.getElementById('next-button').disabled = false;
    }

    function nextQuestion(){
      currentQuestion++; //z.B. von 0 auf 1
      document.getElementById('next-button').disabled = true; //der blaue button wird wieder disabled
      resetAnswerButton(); // vor der nächsten Frage, werden die Farben in den Antwortfelder gelöscht
      showQuestion(); //Nächste Frage wird aufgerufen
    }
    
    function resetAnswerButton(){
      document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
      document.getElementById('answer_1').parentNode.classList.remove('bg-success');
      document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
      document.getElementById('answer_2').parentNode.classList.remove('bg-success');
      document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
      document.getElementById('answer_3').parentNode.classList.remove('bg-success');
      document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
      document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    }
    
    
    
    // Video 18 fertig