var units = new Array("", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen");
var tens = new Array("", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety");

function convertToWord(num) {

    var numString = num.toString();

    if (num < 0) throw new Error('Negative numbers are not supported.');
    if (num === 0) return 'zero';
    if (num > 9999) {
        alert('Larger numbers than 9999 are currently not supported.');
        return;
    }
    //the case of 0 - 20
    if (num < 20) {
        return units[num];
    }

    if (numString.length === 2) {
        return tens[numString[0]] + ' ' + units[numString[1]];
    }

    //100 and more
    if (numString.length == 3) {
        if (numString[1] === '0' && numString[2] === '0')
            return units[numString[0]] + ' hundred';
        else
            return units[numString[0]] + ' hundred and ' + convertToWord(+(numString[1] + numString[2]));
    }

    if (numString.length === 4) {
        var end = +(numString[1] + numString[2] + numString[3]);
        if (end === 0) return units[numString[0]] + ' thousand';
        if (end < 100) return units[numString[0]] + ' thousand and ' + convertToWord(end);
        return units[numString[0]] + ' thousand ' + convertToWord(end);
    }
}

function numberToWords(start, end, tableId) {
    let html = "";
    html += "<tr><th>Number</th><th>Word</th>";

    for (let i = start; i <= end; i++) {
        const word = convertToWord(i);
        if (word)
            html += `<tr><td>${i}</td><td>${word}</td>`;
    }

    let table = document.getElementById(`${tableId}`);
    table.innerHTML = html;
}

numberToWords(1, 10000, 'table');