  
class calculateMoneyLeft{
    constructor(inheritedMoney, finalYear) {
              this.inheritedMoney = inheritedMoney;
              this.finalYear = finalYear;
    
              
            }

    calculateExpenses(){
            let finalYear,moneyLeft = 0;
          
            let age = 18;
            for (let year = 1800; finalYear <= 1800; year++) {
                      let isEvenYear = year % 2 === 0;
                      let expenses = isEvenYear ? 12000 : 12000 + 50 * age;
                  
                      if (expenses > moneyLeft) {
                        let moneyNeeded = expenses - moneyLeft;
                        return `He will need ${moneyNeeded.toFixed(2)} dollars to survive.`;
                      }
                  
                      moneyLeft -= expenses;
                      age++;
                    }
                  
                    return `Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`;
                  }
            }
let body = new calculateMoneyLeft()
console.log(body.calculateExpenses(1200, 1809))
//console.log(body.calculateMoneyLeft(50000, 1815)); 