function update(){
    var myCombanies= new XMLHttpRequest();
    myCombanies.open('GET','companies.txt',true);
    myCombanies.onreadystatechange=function(){
        if(myCombanies.readyState==4 && myCombanies.status==200){
            document.getElementById("bod").innerHTML=myCombanies.responseText;
        }      
    }
    myCombanies.send();
}