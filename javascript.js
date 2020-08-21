document.getElementById("MixButton").onclick = function(){
    let StringOneValue = document.getElementById('String_One_Value').value;
    let StringTwoValue = document.getElementById('String_Two_Value').value;
    document.getElementById("demo").innerHTML = MixUp(StringOneValue,StringTwoValue);
    } 

    function MixUp(a, b) {
        return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
      }