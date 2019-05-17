var BaseCal = function (){
            this.type = 'BaseCal'
        }
        BaseCal.prototype = {
            add: function(x, y){
                return x+y
            },
            sub: function(x, y){
                return x-y
            }
        }

        var Calculator = function(){
            this.type = 'Calculator'
            this.mul = function(x, y){
                return x*y
            }
            this.div = function(x, y){
                if(y!=0) return x/y
                else return 0
            }
            this.mod = function(x, y){
                if (y!=0) return x%y
                else return 0
            }
        }

        Calculator.prototype = new BaseCal();

        while(1){
            var num1 = parseInt(prompt("Enter number 1"))
            var num2 = parseInt(prompt("Enter number 2"))
            var calc = new Calculator()
            var n = prompt("Select option\n1.ADD\n2.Substract\n3.Multiply\n4.Divide\n5.Modulous")
            if(n==1){
                alert(calc.add(num1, num2))
                break
            }
            else if(n==2){
                alert(calc.sub(num1, num2))
                break;
            }
            else if(n==3){
                alert(calc.mul(num1, num2))
                break;
            }
            else if(n==4){
                alert(calc.div(num1, num2))
                break;
            }
            else if(n==5){
                alert(calc.mod(num1, num2))
                break;
            }
            else break;
        }