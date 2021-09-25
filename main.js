//tanlangan elementlar
var elForm = document.querySelector(".js-form");
var elSelect = elForm.querySelector(".js-form__select");
var elSizeWrapper = elForm.querySelector(".js-size-wrapper");
var elProductWrapper = elForm.querySelector(".js-product-wrapper");
var elExtraWrapper = elForm.querySelector(".js-extra-wrapper");

var elSelectResult = document.querySelector(".js-select-result");
var elSizeResult = document.querySelector(".js-size-result");
var elProductResult = document.querySelector(".js-product-result");
var elExtraResult = document.querySelector(".js-extra-result");


//to'lamlar
var formArr = ["Yupqa", "O'rtacha", "Qalin"];

var sizeArr = ["25sm", "30sm", "35sm"];

var productArr = [
    "Pomidor",
    "Kurka go'shti",
    "Zaytun",
    "Tuzlangan bodring",
    "Qo'ziqorin",
    "Qazi"
];

var extraArr = ["Achchiq", "Sosiskali"]


//noni qanday bulsishi
for (var i = 0; i < formArr.length; i++) {

    var elOption = document.createElement("option");
    elOption.textContent = formArr[i];

    elOption.value = formArr[i];

    elSelect.appendChild(elOption);

    //select tanlaydigan funksiya
    elSelectResult.textContent = elSelect.value;

    var nonTuri = function () {
        elSelectResult.textContent = elSelect.value;
    };
    elSelect.addEventListener("change", nonTuri);

};


//kattaligi
for (var i = 0; i < sizeArr.length; i++) {

    var elLabelSize = document.createElement("label");
    var elLabelSizeSpan = document.createElement("span");
    var elInputSize = document.createElement("input");

    //atributlari
    elLabelSizeSpan.textContent = sizeArr[i];
    elInputSize.value = sizeArr[i];
    elInputSize.type = "radio";
    elInputSize.name = "size";
    elInputSize.className = "sizeChange";

    // razmer tanlaydigan funksiya
    var hajmi = function () {
        elSizeResult.textContent = this.value;
    }

    elInputSize.addEventListener("change", hajmi);

    elLabelSize.appendChild(elLabelSizeSpan);
    elLabelSize.appendChild(elInputSize);
    elSizeWrapper.appendChild(elLabelSize);
};


//ustiga nima solaylik
var resultProducts = [];

for (var i = 0; i < productArr.length; i++) {

    var elProductLabel = document.createElement("label");
    var elProductSpan = document.createElement("span");
    var elProductInput = document.createElement("input");

    //atributlari
    elProductSpan.textContent = productArr[i];
    elProductInput.value = productArr[i];
    elProductInput.type = "checkbox";
    // elProductInput.required = true;

    elProductLabel.appendChild(elProductSpan);
    elProductLabel.appendChild(elProductInput);
    elProductWrapper.appendChild(elProductLabel);

    elProductInput.addEventListener("change", function () {

        if (resultProducts.includes(this.value)) {
            var productIndex = resultProducts.indexOf(this.value);
            resultProducts.splice(productIndex, 1);
        } else {

            resultProducts.push(this.value);
        }

        elProductResult.innerHTML = null;

        for (var l = 0; l < resultProducts.length; l++) {
            var newLi = document.createElement("li");
            newLi.textContent = resultProducts[l];
            elProductResult.appendChild(newLi);


        }
        console.log(resultProducts);
    });

};


//qo'shimchalar
var resultExtra = [];

for (var i = 0; i < extraArr.length; i++) {

    var elExtraLabel = document.createElement("label");
    var elExtraSpan = document.createElement("span");
    var elExtraInput = document.createElement("input");

    //atributlari
    elExtraSpan.textContent = extraArr[i];
    elExtraInput.value = extraArr[i];
    elExtraInput.type = "checkbox";

    elExtraLabel.appendChild(elExtraSpan);
    elExtraLabel.appendChild(elExtraInput);
    elExtraWrapper.appendChild(elExtraLabel);

    elExtraInput.addEventListener("change", function () {

        if (resultExtra.includes(this.value)) {
            var extraIndex = resultExtra.indexOf(this.value);
            resultExtra.splice(extraIndex, 1);
        } else {
            resultExtra.push(this.value);
        }

        elExtraResult.innerHTML = null;

        for (var k = 0; k < resultExtra.length; k++) {

            var extraNewLi = document.createElement("li");
            extraNewLi.textContent = resultExtra[k];

            elExtraResult.appendChild(extraNewLi);

        }
    });
};


















