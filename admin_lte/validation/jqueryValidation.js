const regex_rules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

// function validateStrings(string) {
//   return $.trim(string).match(regex_rules) ? true : false;
//
$.validator.addMethod(
  "regex",
  function (value, element, regex) {
    return this.optional(element) || regex.test(value);
  },
  "Please enter a valid password."
);

$().ready(function () {
  $("#demoForm").validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    rules: {
      user: {
        required: true,
        maxlength: 15,
      },
      password: {
        required: true,
        minlength: 8,
        regex: regex_rules,
      },
      "re-password": {
        equalTo: "#password",
        minlength: 8,
      },
    },
    messages: {
      password: {
        regex:
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character, and be 8-10 characters long.",
      },
    },
  });
});
