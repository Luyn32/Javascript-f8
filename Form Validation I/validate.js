function Validator(option) {
    var formElement = document.querySelector(option.form);
    if (formElement) {
        console.log(formElement);
    }
}

Validator.isRequired = function () {};
Validator.isEmail = function () {};

setTimeout(function () {
    var tag2 = "Fabric",
        title = "Upholstery Color";
    function run() {
        setTimeout(function () {
            for (
                var e = document.querySelectorAll(".popmenu_listItem_button"),
                    t = 0;
                t < e.length;
                t++
            )
                e[t].innerText.includes(tag) &&
                    (e[t].click(), console.log("click"));
            console.log("running1"),
                setTimeout(function () {
                    for (
                        var e = document.querySelectorAll(
                                ".popmenu_listItem_button"
                            ),
                            t = 0;
                        t < e.length;
                        t++
                    )
                        e[t].innerText.includes(tag2) &&
                            (e[t].click(), console.log("click"));
                    console.log("running2");
                }, "0");
        }, "0");
    }
    (threeDot = document.getElementsByClassName("overflow_menu")),
        (tag = "Hide");
    for (var i = 0; i < threeDot.length; i++)
        threeDot[i].addEventListener("click", run);
    var Tags = document.getElementsByClassName("overflow_menu"),
        inputs = document.querySelectorAll(
            ".product_column_body .product_column_inputrow"
        );
    function process(e) {
        null != inputs[e].querySelector(".label_tooltip_target") &&
            inputs[e].querySelector(".label_tooltip_target").innerText ==
                title &&
            null != inputs[e].querySelector(".overflow_menu") &&
            (inputs[e].querySelector(".overflow_menu").click(),
            console.log("click menu"));
    }
    for (i = 0; i < inputs.length; i++) process(i);
    for (var i = 0; i < threeDot.length; i++)
        threeDot[i].removeEventListener("click", run);

    setTimeout(function () {
        var tag2 = "Leather",
            title = "Upholstery Color";
        function run() {
            setTimeout(function () {
                for (
                    var e = document.querySelectorAll(
                            ".popmenu_listItem_button"
                        ),
                        t = 0;
                    t < e.length;
                    t++
                )
                    e[t].innerText.includes(tag) &&
                        (e[t].click(), console.log("click"));
                console.log("running1"),
                    setTimeout(function () {
                        for (
                            var e = document.querySelectorAll(
                                    ".popmenu_listItem_button"
                                ),
                                t = 0;
                            t < e.length;
                            t++
                        )
                            e[t].innerText.includes(tag2) &&
                                (e[t].click(), console.log("click"));
                        console.log("running2");
                    }, "0");
            }, "0");
        }
        (threeDot = document.getElementsByClassName("overflow_menu")),
            (tag = "Hide");
        for (var i = 0; i < threeDot.length; i++)
            threeDot[i].addEventListener("click", run);
        var Tags = document.getElementsByClassName("overflow_menu"),
            inputs = document.querySelectorAll(
                ".product_column_body .product_column_inputrow"
            );
        function process(e) {
            null != inputs[e].querySelector(".label_tooltip_target") &&
                inputs[e].querySelector(".label_tooltip_target").innerText ==
                    title &&
                null != inputs[e].querySelector(".overflow_menu") &&
                (inputs[e].querySelector(".overflow_menu").click(),
                console.log("click menu"));
        }
        for (i = 0; i < inputs.length; i++) process(i);
        for (var i = 0; i < threeDot.length; i++)
            threeDot[i].removeEventListener("click", run);
    }, "1000");
}, 0);
