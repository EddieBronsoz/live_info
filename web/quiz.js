function checkAnswers(){
  
  var  quizScore = 0
  
  var questionOneAnswer  = document.querySelector("input[name='bball team']:checked").value;
  if(questionOneAnswer == "d"){
    quizScore = quizScore + 1;
  } else {
    quizScore = quizScore
  }
    
     var questionTwoAnswer = document.querySelector("input[name='Nba trivia']:checked").value
  if(questionTwoAnswer == "d"){
     quizScore = quizScore + 1;
   } else  {
     quizScore = quizScore;
   }
    
   var questionThreeAnswer = document.querySelector("input[name='bbball team']:checked").value
  if(questionThreeAnswer == "c"){
    quizScore = quizScore + 1;
  } else {
    quizScore = quizScore;
  }
    
     var questionFourAnswer = document.querySelector("input[name='Nbaa Trivia']:checked").value
  if(questionFourAnswer == "a"){
    quizScore = quizScore + 1;
  } else {
    quizScore = quizScore;
    
  }
    
      var questionFiveAnswer = document.querySelector("input[name='Bballl Team']:checked").value
  if(questionFiveAnswer == "b"){
    quizScore = quizScore + 1;
  } else {
    quizScore = quizScore;
  }
    
    var questionSixAnswer = document.querySelector("input[name='Nba Triviaa']:checked").value
  if(questionSixAnswer == "d"){
    quizScore = quizScore + 1;
  } else {
    quizScore = quizScore;
  }
    
     var questionSevenAnswer = document.querySelector("input[name='bball teamm']:checked").value
  if(questionSevenAnswer == "b"){
    quizScore = quizScore + 1;
  } else {
    quizScore = quizScore;
  }
    
     var questionEightAnswer = document.querySelector("input[name='Nba triviaaa']:checked").value
  if(questionEightAnswer == "c"){
    quizScore = quizScore + 1;
  } else {
    quizScore = quizScore;
  }
    
      var questionNineAnswer = document.querySelector("input[name='bbaall team']:checked").value
  if(questionNineAnswer == "c"){
    quizScore = quizScore + 1;
  } else {
    quizScore = quizScore;
  }
  
      var questionTenAnswer = document.querySelector("input[name='Nba Triviia']:checked").value
  if(questionTenAnswer == "d"){
    quizScore = quizScore + 1;
  } else {
    quizScore = quizScore;
  }
  
  alert(quizScore)
}

    