


console.log('↓-------------------------------------------------------------------------');
console.log(window.printableDictList);

document.getElementById("print-button").addEventListener("click", () => {
    const header = document.getElementsByTagName("header")[0];
    header.style.display = "none";
    window.print();
    header.style.display = "flex";
});