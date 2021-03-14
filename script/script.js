const answer1 = window.document.getElementsByClassName('answer')[0];
const answer2 = window.document.getElementsByClassName('answer')[1];

const textQuestion1 = window.document.getElementsByClassName('text-question')[0];
const textQuestion2 = window.document.getElementsByClassName('text-question')[1];

const iconArrow1 = window.document.getElementById('icon1');
const iconArrow2 = window.document.getElementById('icon2');

const answerApplyStylePattern = function (question, icon, answer, value) {
    switch(value) {
        case "none":
            answer.style.display = 'none';
            question.style.fontWeight = '400';
            icon.style.transform = 'rotate(0deg)'
            break;
        case "block":
            answer.style.display = 'block';
            question.style.fontWeight = '700';
            icon.style.transform = 'rotate(180deg)'
            break;
        default:
            return "invalid value";
    }
}

answerApplyStylePattern(textQuestion1, iconArrow1,answer1, "none");
answerApplyStylePattern(textQuestion2, iconArrow2, answer2, "none");


const answerApplyStyle = function (textQuestion, iconArrow, answer) {
    textQuestion.addEventListener('click', () => {
        if((answer.style.display == "none") == true) {
            answerApplyStylePattern(textQuestion,iconArrow, answer, "block");
        } else {
            answerApplyStylePattern(textQuestion, iconArrow, answer, "none");
        }
    })
}

answerApplyStyle(textQuestion1, iconArrow1, answer1);
answerApplyStyle(textQuestion2, iconArrow2, answer2);
