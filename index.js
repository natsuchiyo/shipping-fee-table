let shippedDictList = [];


const csvForm = document.getElementById("csvForm");




const createCheckboxTd = () => {

    const td = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'list-checkbox form-check-input';
    td.appendChild(checkbox);

    return td;
};




const createInputTd = (inputName, rowIndex) => {

    const td = document.createElement('td');
    const input = document.createElement('input');
    input.name = inputName;
    input.type = inputName === 'shippingFee' ? 'number' : 'text';
    input.className = 'form-control form-control-sm ' + inputName;
    input.dataset.row = rowIndex;
    input.value = shippedDictList[rowIndex][inputName];

    console.log('↓-------------------------------------------------------------------------');
    console.log(rowIndex, inputName, shippedDictList);

    input.addEventListener('change', editshippedData);

    td.appendChild(input);

    return td;
};




const createShippedTr = (rowIndex) => {

    const tr = document.createElement('tr');

    tr.appendChild(createCheckboxTd());

    tr.appendChild(createInputTd("addressee", rowIndex));

    const itemTd = document.createElement('td');
    itemTd.textContent = shippedDictList[rowIndex].item;
    itemTd.style.maxWidth = '300px';
    itemTd.style.overflowX = 'auto';
    tr.appendChild(itemTd);

    tr.appendChild(createInputTd("shippingFee", rowIndex));

    tr.appendChild(createInputTd("note", rowIndex));

    return tr;
};




const createShippedTable = () => {

    const tbodyFragment = document.createDocumentFragment();

    shippedDictList.forEach((_, index) => {
        const tr = createShippedTr(index);
        tbodyFragment.appendChild(tr);
    });

    document.getElementById('shipped-table-body').appendChild(tbodyFragment);
};




const clickReadButton = async (event) => {

    event.preventDefault();

    const formData = new FormData(csvForm);
    const yamatoCsvFile = formData.get("yamatoCsvFile");
    const niigataCsvFile = formData.get("niigataCsvFile");

    // ファイルを指定していない場合もFileオブジェクトは取得できてしまう
    // 指定していない場合はname属性が空文字となる
    if (yamatoCsvFile.name !== '') {
        await appendShippedDictListFromCsv(yamatoCsvFile, yamatoArrayToDict);
    }

    if (niigataCsvFile.name !== '') {
        await appendShippedDictListFromCsv(niigataCsvFile, niigataArrayToDict);
    }

    createShippedTable();

};


csvForm.addEventListener("submit", clickReadButton);


document.getElementById('print-button').addEventListener('click', clickPrintButton);