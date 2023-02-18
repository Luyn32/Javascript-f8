function Validator(options) {
  var formElement = document.querySelector(options.form);
  console.log;
  if (formElement) {
    options.rules.forEach((rule) => {
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        inputElement.onblur = function () {
          var errorMessage = rule.test(inputElement.value);
          console.log(errorMessage);
        };
      }
    });
  }
}
// dinh nghia rule
// // nguyen tac cua ca rule
// 1. khi co loi=> tra ra mesage loi
// 2. khi hopj le = > khong tra ra cai gi ca
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "vui long nhap truong nay";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function () {},
  };
};
