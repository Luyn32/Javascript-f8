//Đổi tượng validator
function Validator(option) {
  var formElement = document.querySelector(option.form);
  if (formElement) {
    option.rules.forEach((rule) => {
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        inputElement.onblur = function () {
          // value: inputElement.value
          //test func:rule.test
          console.log(rule);
        };
      }
    });
  }
}
//định nghĩa rules
//nguyen tac cua cac rule:
//1. khi co loi => message loi
//2. khi hop le => khong tra ra gi ca
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function () {},
  };
};
Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function () {},
  };
};
