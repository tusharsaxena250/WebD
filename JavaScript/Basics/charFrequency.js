function charFreq(a){
            var s = {}
            a = a.toLowerCase()
            a = a.split("")

            for(var i=0; i<a.length;i++){
                x = a[i]
                if (x in s){
                    s[x]++
                }
                else{
                    s[x] = 1
                }
            }
            for (x in s)
                document.write(x, ":", s[x], "<br/>")
            
        }

var str = prompt("Enter a string")
charFreq(str) 