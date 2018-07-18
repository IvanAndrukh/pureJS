function getNominals(){
  let price = document.getElementById('price').value;
  let sum = document.getElementById('sum').value;
  let change = (sum - price).toFixed(2);
  const dolars = Math.floor(change);
  const initialCentAmount = (change - dolars).toFixed(2)*100;
  let cents = (change - dolars).toFixed(2)*100;
  let nominals = [50, 25, 10, 5, 1];

  const nominalsArray = nominals.reduce((acc, nominal) => {
    let amount = Math.floor(cents/nominal);
    cents -= amount * nominal;
    if (amount) {
      if(amount >1){
        while(amount !== 0){
          acc.push(nominal);
          amount--;
        }
      } else{
        acc.push(nominal);
      }
    }
    return acc;
  }, []);
  const editingNominalArray = nominalsArray.map(item => `${item} cent`);
  document.getElementById('result')
    .innerHTML = `Your change is ${dolars} dolars and ${initialCentAmount} cents
        by nominals(${dolars} dolars ${ editingNominalArray })`;
}