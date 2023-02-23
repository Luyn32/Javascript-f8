function Validator(options) {
  var selectorRules = {};
  //ham thuc hiẹn validate
  function validate(inputElement, rule) {
    var errorElement =
      inputElement.parentElement.querySelector(".form-message");
    var errorMessage = rule.test(inputElement.value);
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }
  //lay element cua form can validate
  var formElement = document.querySelector(options.form);
  console.log;
  if (formElement) {
    options.rules.forEach((rule) => {
      var inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
        inputElement.oninput = function () {
          var errorElement =
            inputElement.parentElement.querySelector(".form-message");
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}
// dinh nghia rule
// // nguyen tac cua ca rule
// 1. khi co loi=> tra ra mesage loi
// 2. khi hopj le => khong tra ra cai gi ca
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : message || "Vui lòng nhập trường này";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "Trường này phải là email";
    },
  };
};
Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
    },
  };
};
Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue()
        ? undefined
        : message || "Giá trị nhập vào không chính xác";
    },
  };
};
