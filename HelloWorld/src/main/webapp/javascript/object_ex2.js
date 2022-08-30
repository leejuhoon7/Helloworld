
function Estimate(param){
    this.unit = param;
    this.getEstimate

}

 
let unitInfo = [
    {type: 'wood', price: 100},
    {type: 'iron', price: 300},
    {type: 'plastic', prcie: 200}
]

let estimate = new Estimate(unitInfo);
let result = estimate.getEstimate('iron', 20, 30);

estimate.addUnit({type: 'carbon', price: 500});
result = estimate.getEstimate('carbon', 20, 30);

console.log(`계산결과: ${result}`);