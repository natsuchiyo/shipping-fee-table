const yamatoCsvColumns = {
    addressee: 0,
    address: 1,
    item: 2,
    size: 3
};



const pickPrefecture = (address) => {

    const match = address.match(/^(.{2,3})[都道府県](.+)$/);

    return match ? match[1] : null;
};




const calcYamatoFee = (address, size) => {

    const prefecture = pickPrefecture(address);

    return yamatoFeeMap[prefecture][size];
};




const yamatoArrayToDict = (array) => {

    return {
        addressee: array[yamatoCsvColumns.addressee],
        item: array[yamatoCsvColumns.item],
        shippingFee: calcYamatoFee(
            array[yamatoCsvColumns.address],
            array[yamatoCsvColumns.size]
        ),
        note: ''
    };
};