document.addEventListener("DOMContentLoaded", () => {


        for(i=0;i<=100;i++){
            var txt = "";
                if(i % 3 == 0){txt += "Fizz";}
                if(i % 5 == 0){txt += "Buzz";}
                if(txt == ""){txt = i;}
                    var p = document.createElement("p");
                    p.innerHTML = txt;
                    document.body.append(p);
        }
});