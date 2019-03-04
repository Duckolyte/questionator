function QuestionAnswerPair(question, answer) {
  this.id = this.generatePairId(this.sequence);
  this.question = question;
  this.answer = answer;
};

QuestionAnswerPair.prototype.sequence = {value: 0};

QuestionAnswerPair.prototype.generatePairId = (id_seq) => {
  const valBeforeInc = id_seq.value;
  id_seq.value += 1;
  return valBeforeInc;
};

function Question(code, label, answers, usesImage) {
  this.questionaryQuestionId = this.generateQuestionId(this.sequence);
  this.code = code;
  this.usesImage = usesImage;
  this.label = label;
  this.answers = answers;
};

Question.prototype.sequence = {value: 0};

Question.prototype.generateQuestionId = (id_seq) => {
  const valBeforeInc = id_seq.value;
  id_seq.value += 1;
  return valBeforeInc;
};

export default { QuestionAnswerPair, Question };
