function zakatCalculator() {
    let totalAmount = +prompt(`Enter your complete amount to find your zakat!
    U T H , Th T.Th , Lk T.Lk `);

let calculateZakat = (totalAmount/10) / 4;

alert(`Congratulations!🎉
Your zakat is: ${calculateZakat}`)
}