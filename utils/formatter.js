export const formatter = (total)=>{
    const options = {
        style: 'currency',
        currency: 'LKR',
        minmumFractionDigits: 2
    };

    const formatter = new Intl.NumberFormat('en-LKR',options);

    //Formats estimated total 
    return formatter.format(total);
};