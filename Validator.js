function Validator(options) {
  var formElement = document.querySelector(options.form);
  console.log;
  if (formElement) {
    options.rules.forEach((rule) => {
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        inputElement.onblur = function () {
          console.log(rule);
        };
      }
    });
  }
}
// dinh nghia rule
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
