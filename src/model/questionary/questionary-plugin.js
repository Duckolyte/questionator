import qap from './question-answer-pair';

export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, '$_qap', { value: qap });
  }
}
