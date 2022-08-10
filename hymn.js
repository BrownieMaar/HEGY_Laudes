const hymnArray = document.getElementsByClassName("hymn");

for (let hymn of hymnArray) {
    const verseArray = hymn.children;
    for (let verse of verseArray) {
        console.log(verse.innerHTML)
        let verseStr = verse.innerHTML;
        while (verseStr[0] === " ") {
            verseStr = verseStr.substring(1);
        }
        console.log(verseStr[0])
    }
}