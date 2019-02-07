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

export default { QuestionAnswerPair };
