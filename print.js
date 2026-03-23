
window.printableDictList = [
    {
        "addressee": "新潟県新潟市中央区木村",
        "item": "本ああああああああああ",
        "shippingFee": 1110,
        "note": ""
    },
    {
        "addressee": "新潟県新中央区木村",
        "item": "本ああああああああああ",
        "shippingFee": 1110,
        "note": "ｆ"
    },
    {
        "addressee": "新潟県新潟市中央区木村",
        "item": "本ああああああ",
        "shippingFee": 1110,
        "note": ""
    }
];



const createTr = (rowIndex) => {

    const tr = document.createElement('tr');

    const indexTd = document.createElement('td');
    indexTd.textContent = rowIndex;
    tr.appendChild(indexTd);

    const addresseeTd = document.createElement('td');
    addresseeTd.textContent = window.printableDictList[rowIndex].addressee;
    tr.appendChild(addresseeTd);
    tr.appendChild(indexTd);

    // const addresseeTd = document.createElement('td');
    // addresseeTd.textContent = window.printableDictList[rowIndex].addressee;
    // tr.appendChild(addresseeTd);
    // tr.appendChild(indexTd);

    // const addresseeTd = document.createElement('td');
    // addresseeTd.textContent = window.printableDictList[rowIndex].addressee;
    // tr.appendChild(addresseeTd);

    return tr;
};


document.getElementById("print-button").addEventListener("click", () => {
    const header = document.getElementsByTagName("header")[0];
    header.style.display = "none";
    window.print();
    header.style.display = "flex";
});