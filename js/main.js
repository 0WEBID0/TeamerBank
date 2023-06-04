let message = document.getElementById('message') ;


function show_mes_inp(){
    
    var numRows = parseInt($('#numRows').val());
    let inputshow = document.querySelectorAll ("#vecter") ;
    if(numRows > 0){
    for(let i = 0; i < inputshow.length ;i++){
        inputshow[i].style.display = 'block' ;
        document.getElementById("message").innerHTML = " Please enter the customer's time to be stored in the schedule  ";
    }
} else{
    document.getElementById("message").innerHTML = "Please enter the Positive number";
  }
  
}
function time() {
    
    setTimeout(function() {
        document.getElementById("submitform").style.display = 'none' ;
        document.getElementById("sendtable").style.display = 'block' ;
        document.getElementById("mainn").style.display = 'none' ;
        var table = document.getElementById('example');
        var cells = table.getElementsByTagName('td');
        
        
    //     for (var i = 0; i < cells.length; i++) {
    //         cells[i].onclick = function(){
    //             if (this.hasAttribute('data-clicked')) {
    //                 return;
    //             }
    //             this.setAttribute('data-clicked', 'yes');
    //             this.setAttribute('data-text', this.innerHTML);
        
    //             var input = document.createElement('input');
    //             input.setAttribute('type','text');
    //             input.value = this.innerHTML;
    //             input.style.width = this.offsetWidth - (this.clientLeft * 2) + "px";
    //             input.style.height = this.offsetHeight - (this.clientTop * 2) + "px";
    //             input.style.border = "0px";
    //             input.style.fontFamily = "inherit";
    //             input.style.fontSize = "inherit";
    //             input.style.backgroundColor = "transparent";
        
    //             input.onblur = function() {
    //                 var td = this.parentElement;
    //                 var orig_text = td.getAttribute('data-text');
    //                 var current_text = this.value;
        
    //                 if (orig_text !== current_text) {
    //                     //there are changes; save to geojson
    //                     td.removeAttribute('data-clicked');
    //                     td.removeAttribute('data-text');
    //                     td.innerHTML = current_text;
    //                     td.style.cssText = 'padding: 5px';
    //                     // console.log(orig_text + ' is changed to ' + current_text);
    //                 } else {
    //                     td.removeAttribute('data-clicked');
    //                     td.removeAttribute('data-text');
    //                     td.innerHTML = orig_text;
    //                     td.style.cssText = 'padding: 5px';
    //                     // console.log('no changes');
    //                 }
    //             }
    //             input.onkeypress = function(event) {
    //                 if (event.keyCode == 13) {
    //                     this.blur();
    //                 }
    //             }
    //             this.innerHTML = '';
    //             this.style.cssText = 'padding: 0px';
    //             this.appendChild(input);
    //             this.firstElementChild.select();
    //         }
    //     }
        
    }, );
  }


let messegesuccess = document.querySelector('.u-form-send-success') ;

function addRows() {
    var ServiceTimeA = parseInt($('#servicestimeA').val()) || 25;
    var ServiceTimeB = parseInt($("#servicestimeB").val()) || 50;
    var ServiceStartTimeA = parseInt($("#servicesstartA").val()) || 0;
    var inputfrom1 = parseInt($('#inputfrom1').val()) || 42;
    var inputto1 = parseInt($('#inputto1').val()) || 58;
    var I1 = parseInt($('#I1').val()) || 0;
    var I2 = parseInt($('#I2').val()) || 60;
    var I3 = parseInt($('#I3').val()) || 120;
    var I4 = parseInt($('#I4').val()) || 180;
    var IO1 = parseFloat($('#IO1').val()) || 0.23;
    var IO2 = parseFloat($('#IO2').val()) || 0.5;
    var IO3 = parseFloat($('#IO3').val()) || 0.8;
    var timespendinsystem = 0 ;
    var numRows = parseInt($('#numRows').val());
    var table = $('#example tbody');
    let InterArrivaltime ;
    let Arrivaltime = 0 ;
    let Timewaitinquene = 0 ;//=(servicestarttime - arrivaltime)
    let ServiceEndTime =  parseInt($('#end1').val());//=(servicetime - servicestarttime)
    let avaservicetime = 0 ;
    let avatimewaitinqueue = 0 ;
    let maxtimespendinsystem = 0 ;
    // let avaidletime = 0 ;
    // let totarrivalrand = 0 ;
    let totinterArrivaltime = 0 ;
    let totarrivaltime = 0 ;
    let totservicetime = 0 ;
    let tottimewaitinqueue = 0 ;
    let tottimespendinsystem = 0 ;
    let servicestarttime = (ServiceStartTimeA + ServiceTimeB + ServiceTimeA);//=(serviceendtime *up*)



for (var i = 0; i < numRows; i++) {
var arrivalrand = Math.random().toFixed(4);
var servicetime = Math.floor(Math.random() * (inputto1 - inputfrom1 + 1)) + inputfrom1;

if (arrivalrand <= IO1 ) {
    InterArrivaltime = I1 ;
}else if (arrivalrand <= IO2){
    InterArrivaltime = I2 ;
}else if (arrivalrand <= IO3){
    InterArrivaltime = I3 ;
}else if (arrivalrand <= 1){
    InterArrivaltime = I4 ;
}

Arrivaltime =(Arrivaltime+ InterArrivaltime) ;
Timewaitinquene = Math.abs(servicestarttime - Arrivaltime);
ServiceEndTime = (servicestarttime + servicetime);
timespendinsystem = Math.abs(ServiceEndTime - Arrivaltime)
tottimewaitinqueue = (tottimewaitinqueue + Timewaitinquene) ;
totarrivaltime = (totarrivaltime + Arrivaltime) ;
// totarrivalrand = (totarrivalrand + arrivalrand) ;
tottimespendinsystem = (tottimespendinsystem + timespendinsystem) ;
totservicetime = (totservicetime + servicetime) ;
totinterArrivaltime = (totinterArrivaltime + InterArrivaltime) ;

if(maxtimespendinsystem < timespendinsystem ){
    maxtimespendinsystem = timespendinsystem
}

        $('#myTable tbody tr:gt(' + (numRows -2 ) + ')').remove();
        table.append('<tr style="height: 83px;" ><td class="u-table-cell" id="myTable'+(i+1)+'" >'+(i+1)+'</td><td class="u-table-cell" >'+arrivalrand+'</td><td class="u-table-cell" >'+InterArrivaltime+'</td><td class="u-table-cell" >'+Arrivaltime+'</td><td class="u-table-cell" >'+servicetime+'</td><td class="u-table-cell" >'+servicestarttime+'</td><td class="u-table-cell" >'+Timewaitinquene+'</td><td class="u-table-cell id="end'+i+1+'" >'+ServiceEndTime+'</td><td class="u-table-cell">'+timespendinsystem+'</td><td class="u-table-cell">0</td></tr>');
        servicestarttime = ServiceEndTime ;
    }
    avaservicetime = (totservicetime/numRows).toFixed(2) ;
    avatimewaitinqueue = (tottimewaitinqueue/numRows).toFixed(2) ;

    document.getElementById("avatimewaitinqueue").innerHTML =  avatimewaitinqueue ;
    document.getElementById("avaservicetime").innerHTML =  avaservicetime ;
    document.getElementById("totinterArrivaltime").innerHTML =  totinterArrivaltime ;
    document.getElementById("totservicetime").innerHTML =  totservicetime ;
    document.getElementById("tottimespendinsystem").innerHTML =  tottimespendinsystem ;
    // document.getElementById("totarrivalrand").innerHTML =  totarrivalrand ;
    document.getElementById("totarrivaltime").innerHTML =  totarrivaltime ;
    document.getElementById("tottimewaitinqueue").innerHTML =  tottimewaitinqueue ;
    document.getElementById("maxtimespendinsystem").innerHTML =  maxtimespendinsystem ;

}


function change_val_col() {
    var ServiceTimeA = parseInt($('#servicestimeA').val()) || 25;
    var ServiceTimeB = parseInt($("#servicestimeB").val()) || 50;
    var ServiceStartTimeA = parseInt($("#servicesstartA").val()) || 0;

    var timespendinsystem0 = document.getElementById("spend0");
    var timespendinsystem1 = document.getElementById("spend1");
    var startcol0 = document.getElementById("start0");
    var startcol1 = document.getElementById("start1");
    var servicetimecol0 = document.getElementById("servicetime0");
    var servicetimecol1 = document.getElementById("servicetime1");
    var endcol0 = document.getElementById("end0");
    var endcolval0 = (ServiceTimeA + ServiceStartTimeA );
    var endcol1 = document.getElementById("end1");
    let ServiceStartTimeB = endcolval0 ;


    
    // تحديث قيمة العنصر الذي لديه معرف "servicetime0"
    servicetimecol0.innerHTML = ServiceTimeA;
    servicetimecol1.innerHTML = ServiceTimeB;
    startcol0.innerHTML = ServiceStartTimeA;
    startcol1.innerHTML = ServiceStartTimeB;
    endcol0.innerHTML = (ServiceStartTimeA + ServiceTimeA) ;
    endcol1.innerHTML = (ServiceStartTimeB + ServiceTimeB) ;
    timespendinsystem0.innerHTML = ((ServiceStartTimeA + ServiceTimeA)-0)
    timespendinsystem1.innerHTML = ((ServiceStartTimeB + ServiceTimeB)-0)

    // console.log("Time Services Ends: " + ServiceTimeA + ServiceTimeB + ServiceStartTimeA + ServiceStartTimeB);  

    document.getElementById("sendtable").style.display = 'none' ;
    document.getElementById("Reloaded").style.display = 'block ' ;
    document.getElementById("message").style.display = 'none';
}

function toggleBox() {
    var box = document.getElementById("box");
    var flag = document.getElementById("pngtree");
    if (box.classList.contains("show")) {
      box.classList.remove("show");
      flag.classList.remove("pngtreemove")
    } else {
      box.classList.add("show");
      flag.classList.add("pngtreemove")
    }
  }