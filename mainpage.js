
function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(this.responseText);
            var output = "";
            for (var i=0 ; i<response.length ; i++){

                output += "<tr>";

                if(response[i].completed==true){
                    output += "<td><input type=checkbox  checked=checked disabled=true></td>"+ "<td>"+response[i].title+ "</td>";
                    
                }
                else{
                    output+= "<td><input type=checkbox name=check onchange=checkcounter()></td>"+"<td>"+response[i].title+"</td>";  
                    
                }

                output += "</tr>";
            }
            document.getElementById("tbdata").innerHTML=output;
           
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
}

function checkcounter(){
    var promise = new Promise(function(resolve,reject){
        var data = document.getElementsByName("check");
        var count =0;
        for (var i=0; i<data.length; i++){
            if (data[i].checked == true){
                count++;
            }
            
        }
        if(count==5){
            resolve();
        }
        else{
            reject();
        }
    })
    promise
    .then(function(){
        alert("Congrats!!! 5 Tasks have been Successfully Completed.");
    })
    
    
}

