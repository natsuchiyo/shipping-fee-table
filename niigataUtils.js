const niigataColumns = {
    addressee: 0,
    address: 1,
    item: 2,
    weight: 3,
    branch: 4,
};





const calcNiigataFee = (address, size) => {

    const prefecture = pickPrefecture(address);

    return niigataFeeMap[prefecture][size];
};




const niigataArrayToDict = (array) => {

    return {
        addressee: array[niigataColumns.addressee],
        item: array[niigataColumns.item],
        shippingFee: calcNiigataFee(
            array[niigataColumns.branch],
            array[niigataColumns.weight]
        ),
        note: ''
    };
};