const psalmArray = document.getElementsByClassName("psalm");

function makeBold(str) {
    while (str.indexOf("__") !== -1) {
        console.log("Found one!");
        let firstIndex = str.indexOf("__")
        let secondIndex = str.indexOf("__", firstIndex + 1);
        console.log(`${firstIndex}, ${secondIndex}`);
        let inside = str.slice(firstIndex+2, secondIndex);
        inside = `<b>${inside}</b>`;
        console.log(inside);
        str = str.slice(0, firstIndex) + inside + str.slice(secondIndex + 2, -1);
    }
    return str;
}

function makeItalics(str) {
    while (true) {
        if (str.indexOf("_") === -1 || str.indexOf("_") === str.indexOf("__") && str.indexOf("_", str.indexOf("__") + 2)) {
            break;
        }
        
    }
    return str;
}

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

        psalmTextArray[i] = makeItalics(psalmTextArray[i]);
        
        psalmTextArray[i] = makeBold(psalmTextArray[i]);

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
        psalmRowElement.innerHTML = psalmTextArray[i];
        if (!isItAFirstLine) psalmRowElement.classList.add("intend");
        psalmElement.appendChild(psalmRowElement);
    }
}

console.log(psalmArray);