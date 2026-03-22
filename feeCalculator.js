


const calcNiigataFee = (weight, branch) => {

    const fee = niigataFeeMap[branch][weight];

    return fee;
};
