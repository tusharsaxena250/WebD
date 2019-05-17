function cal(sgpa, n){
            gpa = 0
            function gpaCal(){
                for(var i=0; i<n;i++)
                   gpa +=sgpa[i] 
                gpa /=n
                return gpa
            } 

            return gpaCal
        }

var sem = prompt("Enter number of sem")
var sgpa = []
for(var i=0; i<sem; i++)
    sgpa[i] = parseFloat(prompt("Enter SGPA for Sem: "+(i+1)))

var res = cal(sgpa, sem)
document.write(res())  