function at1(){
    var i = 10
    while(i >=1){
        alert(i)
        i--
    }
    alert("Feliz Ano Novo!")
}

function at2(){
    var num = document.getElementById("txtat2").value;
    var num2 = num;
    document.getElementById("pat2").innerHTML = "";
    for(var i = 1; i<=10; i++){
        num2 = num*i;
        document.getElementById("pat2").innerHTML = document.getElementById("pat2").innerHTML + " " + num2;
    }
}

function at3(){
    var i = 1;
    var num = 0;
    while(i<=50){
        if(i%2==0){
            var num = num+i;
        }
        i++;
    }
    alert(num);
}
