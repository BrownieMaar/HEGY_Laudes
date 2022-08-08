const psalmArray = document.getElementsByClassName("psalm");

for (let psalmElement of psalmArray) {
    const psalmTextArray = psalmElement.innerHTML.split("\n");
    if (psalmTextArray[0] === "") psalmTextArray.shift();
    psalmElement.innerHTML = "";
    for (let i = 0; i < psalmTextArray.length; i++) {
        let isItAFirstLine = false;
        if (i === 0) {
            isItAFirstLine = true;
        }
        else if (i === 1) {
            isItAFirstLine = false;
        }
        else if (psalmTextArray[i].slice(-1) === "†" ||
            (psalmTextArray[i].slice(-1) === "*" && psalmTextArray[i - 1].slice(-1) !== "†")
        ) {
            isItAFirstLine = true;
        }

        psalmTextArray[i] = psalmTextArray[i].replace("†","<span class='rubrum'>†</span>")

        let psalmRowElement = document.createElement("p");
        while (psalmTextArray[i][0] === " ") {
            psalmTextArray[i] = psalmTextArray[i].substring(1);
        }
        if (psalmTextArray[i].slice(-1) === "*") {
            psalmTextArray[i] = psalmTextArray[i].slice(0, -1);
            psalmTextArray[i] += "<span class='asterisk'>*</span>";
        }

        if (psalmTextArray[i].slice(-1) === "†") {
            psalmTextArray[i] = psalmTextArray[i].slice(0, -1);
            psalmTextArray[i] += "<span class='asterisk'>†</span>";
        }

        if (isItAFirstLine) {
            psalmTextArray[i] = `<strong>${psalmTextArray[i][0]}</strong>${psalmTextArray[i].slice(1, -1)}`
        }

        console.log(i + psalmTextArray[i]);
        psalmRowElement.innerHTML = psalmTextArray[i];
        if (!isItAFirstLine) psalmRowElement.classList.add("intend");
        psalmElement.appendChild(psalmRowElement);
    }
}

console.log(psalmArray);