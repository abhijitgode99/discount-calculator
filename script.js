


const bill=document.querySelector("#bill");
const discount=document.querySelector("#discount");
const calculator=document.querySelector("#calculator");
const total=document.querySelector("#total");

calculator.addEventListener( 'click', () =>{
    const billValue=bill.value;
    const discountValue=discount.value;
    const valisDis= isValidDis(discountValue);
    const validBillVal = isValidBillBal(billValue)
    if(valisDis){
        if(validBillVal){
            const discountcal=billValue-(billValue*(discountValue/100));
            total.innerHTML=`Total amount to pay is ${discountcal}`;
        }else{
            alert(`Entered Bill value is not correct ${billValue}`);
        }
    }
    else{
            alert(`Entered discount value is not correct ${discountValue}`)
    }
});
function isValidDis(discount) {
    if(discount =="" || discount < 0 || discount > 100){
        return false;
    }
    return true;
}
function isValidBillBal(billValue) {
    if(billValue =="" || billValue < 0){
        return false;
    }
    return true;
}