function getElementWidth(content, padding, border) {
    const boxSizing = Number.parseFloat(padding) + Number.parseFloat(border)
    const elementWidth = Number.parseFloat(content) + Number.parseFloat(padding) + Number.parseFloat(border) + boxSizing;
    return elementWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200