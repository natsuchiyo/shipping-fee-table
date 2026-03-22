
const readFileAsync = async (csvFile) => {
    return new Promise((resolve, reject) => {

        const reader = new FileReader();

        reader.addEventListener("error", () => reject(reader.error));

        reader.addEventListener("load", () => {
            const { result } = reader;
            if (typeof result !== "string") throw TypeError("Not String");
            resolve(result);
        });

        reader.readAsText(csvFile);
    });
};






const csvToDictList = (csvRawText, converter) => {

    const rows = csvRawText.replace(/\r\n|\r/g, '\n').split('\n');

    const dictList = rows.map(row => converter(row.split(",")));

    return dictList;
};




const appendShippedDictListFromCsv = async (csvFile, converter) => {

    const csvText = await readFileAsync(csvFile);
    const dictList = csvToDictList(csvText, converter);

    shippedDictList = shippedDictList.concat(dictList);
};




const editshippedData = (event) => {

    const rowIndex = event.currentTarget.dataset.row;
    const valueName = event.currentTarget.name;

    shippedDictList[rowIndex][valueName] = event.currentTarget.value;
};




const createPrintableDictList = () => {

    const printableDictList = [];

    const checkboxes = document.getElementsByClassName("list-checkbox");

    // 戻り値のHTMLCollectionはforEach()を持たないため、forループで回す
    for (let i = 0; i < checkboxes.length; i++) {

        if (checkboxes[i].checked) {
            printableDictList.push(shippedDictList[i]);
        }
    }

    return printableDictList;
};




const clickPrintButton = () => {

    const printableDictList = createPrintableDictList();

    const printWindow = window.open("printable-table.html");

    printWindow.printableDictList = printableDictList;
};
