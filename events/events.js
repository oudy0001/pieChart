document.addEventListener("DOMContentLoaded", function(){


//dealing with canvas element
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d")
var canvas2 = document.getElementById("canvas2");
var context2 = canvas2.getContext("2d");
var cx = 150;
var cy = 200;

//basic pieces to build chart(s)
var radius = 100;
var listLenght = 0;
var currentAngle = 0;
var appendString = "";
    //var object = {"segments":[]};
var cheeseData = {"segments":[
			{"value":18.8496, "label":"Mozzarella", "color":"rgb(18,82,178)"},
			{"value":43.9823, "label":"Cheddar", "color":"rgb(255,53,25)"},
			{"value":25.1327, "label":"Gouda", "color":"rgb(0,102,255)"},
			{"value":31.4159, "label":"Danish Blue", "color":"rgb(160,204,20)"},
			{"value":3.1416, "label":"Stilton", "color":"rgb(255,85,15)"},
			{"value":12.5664, "label":"Monterey Jack", "color":"rgb(255,238,0)"}
		]};
    var orderedColor = [];
    var orderedLable = [];
    var orderedValue = [];
    var example = document.getElementById("example");
    
    //math, flags and stuff
    var totalValues = 0;
    var orderFlag = 0;
    var topFlag = 0;
    var bottomFlag = 0;
    var textStart = 5;
    var anchorTextGraph = 0;
    
    /*
    //getting lines drawn
context.beginPath();
context.moveTo(20, 20);
context.lineTo(20, 50);
context.lineTo(70, 100);
context.strokeStyle = "red";
context.stroke();
    //*/


//building order, average and 
    for(var i=0; i<cheeseData.segments.length; i++){
        totalValues = totalValues + cheeseData.segments[i].value;
        orderedValue.push(cheeseData.segments[i].value);
    }
    
    orderedValue.sort(function(a, b) {
  return a - b;
});
          /*  Mess we made in class
    if(orderedValue.length == 0){
            orderedValue.push(Math.round(cheeseData.segments[i].value));
            //orderedValue = cheeseData.segments[i].value;
            //ifFlag = ifFlag++;
            //alert("first");
           }
        else{
            for(var j=0; j<orderedValue.length; j++){
                if(cheeseData.segments[i].value<orderedValue[j]){
                    console.log("loop");
                    orderedValue.splice(j, 0, cheeseData.segments[i]);
                }
            }
            
           }
//*/
    
    appendString = orderedValue;
    
   /* Here I was trying to create a loop that would put the data in order, but I ran out of time and some things just wouldn't work
    var sortAndFlag = function(orderData){
        orderFlag = ++orderFlag;
        for(var i = 0; i < orderedData.length; ++i)
        appendString = appendString + ( orderedData[i]);
    }//*/
    /*
    for(var i=0; i<cheeseData.segments.length; i++){
        //loop through list
        var localColor = cheeseData.segments[orderFlag].color;
        var localLabel = cheeseData.segments[orderFlag].label;
        var localValue = cheeseData.segments[orderFlag].value;
        var spliceNumber = 0;
        
            orderedValue.push(localValue);/*This would only push once, and I don't know why
        //sorting begins
        if(orderedValue.length == 0){
            orderedColor.push(localColor);
            orderedLable.push(localLabel);
            orderedValue.push(localValue);
        }else if(orderedColor.length == 1){
            orderedValue.splice(0, 0, localValue);
            /*See what happens
            if(orderedValue<localValue){
                orderedColor.push(localColor);
                orderedLable.push(localLabel);
                orderedValue.push(localValue);
            }else{
                orderedColor.splice(0, 0, localColor);
                orderedLable.splice(0, 0, localLabel);
                orderedValue.splice(0, 0, localValue);
            }
            //*/
        /*}else{
            for(var j = 0; localValue>orderedValue; j++){
                spliceNumber = spliceNumber + 1;
            }
            orderedColor.splice(spliceNumber, 0, localColor);
            orderedLable.splice(spliceNumber, 0, localLabel);
            orderedValue.splice(spliceNumber, 0, localValue);
        }//*/
        //alert(orderedValue);
    /*
    for(var i=0; i<cheeseData.segments.length; i++){
        appendString = appendString + "<br>" + i + "value: " + orderedValue[i];
    }
        /*else if(){
        }else if(){
        }else if(){
        }else if(){
            alert("ding dong");
        }//*/
    
    
    /*making the 
     example.innerHTML = example.innerHTML + "<p>" + totalValues + "</p>";
    
    /*Making sure I got the data calling
for(var i=0; i<cheeseData.segments.length; i++){
    appendString = appendString + "<p>" + i + ", " + cheeseData.segments[i].label + ", " + cheeseData.segments[i].color + ", " + cheeseData.segments[i].value/totalValues*100 + "</p>";
    }
    
    
    
    
    
    
    

    //Pie Chart, cause I'm done messing around here */
    
    
for(var i=0; i<cheeseData.segments.length; i++){
    var endAngle = currentAngle + ((cheeseData.segments[i].value/totalValues) * (Math.PI * 2));
    var useRadius = radius;
    if (cheeseData.segments[i].value == orderedValue[orderedValue.length-1]){
        useRadius = .9 * radius;
    }else if(cheeseData.segments[i].value == orderedValue[0]){
    //}else{
        useRadius = 1.1 * radius;
    }
    
    //this made a cooler chart in my oppion, but like we discussed in class it misrepresents the data
    //var useRadius = radius * (1 - cheeseData.segments[i].value/totalValues) * 1.25;
    context.moveTo(cx, cy);
    context.beginPath();
    context.fillStyle = cheeseData.segments[i].color;
    context.arc(cx, cy, useRadius, currentAngle, endAngle, false);  
    context.lineTo(cx, cy);
    context.fill();
    context.closePath();
    //checking angles explain why things weren't lining up
    //appendString = appendString + ("<p>current: " + currentAngle + " end: " + endAngle + "</p>");
    currentAngle = endAngle;
};
    
        example.innerHTML = example.innerHTML + appendString + "<br>";
    //Labels */
    
currentAngle = 0;
appendString = "";
    
for(var i=0; i<cheeseData.segments.length; i++){

    var endAngle = currentAngle + ((cheeseData.segments[i].value/totalValues) * (Math.PI * 2));
    var lableAngle = (currentAngle + endAngle)/2;
    //soa used for x ordinates
    var sinnedAngle = Math.sin(lableAngle);
    //coh used for y oridinates
    var cossedAngle = Math.cos(lableAngle);
    var startRadius = radius * 0.1;
    var endRadius = radius * 1.3;
    context.beginPath();
    context.moveTo((startRadius * cossedAngle + cx), (startRadius * sinnedAngle + cy));
    context.lineTo((endRadius * cossedAngle + cx), (endRadius * sinnedAngle + cy));
    context.strokeStyle="black";
    context.stroke();
    //checking angle explain why things weren't lining up...got cos and sin mixed up resulting in the labels being inverted on the horisontal acess
    //appendString = appendString + ("<p>Start: " + currentAngle + " Lable: " + lableAngle + " End Angle: " + endAngle + "</p>");
    currentAngle = endAngle;
};//*/
    
    
    //Putting names in the right spot
    for(var i=0; i<cheeseData.segments.length; i++){

    var endAngle = currentAngle + ((cheeseData.segments[i].value/totalValues) * (Math.PI * 2));
    var lableAngle = (currentAngle + endAngle)/2;
    //soa used for x ordinates
    var sinnedAngle = Math.sin(lableAngle);
    //coh used for y oridinates
    var cossedAngle = Math.cos(lableAngle);
    var endRadius = radius * 1.4;
        context.fillStyle="black";
    context.font = "15px Verdana";
        //context.textAlign="center";
    context.fillText(cheeseData.segments[i].label, (endRadius * cossedAngle + cx), (endRadius * sinnedAngle + cy));
    context.strokeStyle="black";
    context.font="black";
    context.stroke();
    //checking angle explain why things weren't lining up...got cos and sin mixed up resulting in the labels being inverted on the horisontal acess
    //appendString = appendString + ("<p>Start: " + currentAngle + " Lable: " + lableAngle + " End Angle: " + endAngle + "</p>");
    currentAngle = endAngle;
};//*/
    
    for(var i=0; i<cheeseData.segments.length; i++){

    var height = Math.round((cheeseData.segments[i].value/totalValues)*200);
    
    var fontHeigh = height;
        
    if(height<10){fontHeigh = 10}else{};
    anchorTextGraph = anchorTextGraph + fontHeigh + 5;
    var barStart = anchorTextGraph + 6;
    context2.beginPath();
    context2.moveTo(2, barStart);
    context2.lineTo((cheeseData.segments[i].value/totalValues) * 1000, barStart);
    context2.lineTo((cheeseData.segments[i].value/totalValues) * 1000, barStart - fontHeigh/8);
    context2.lineTo(2, barStart - fontHeigh/4);
    context2.fillStyle = "rgb(200,200,200)";
    context2.closePath();
    context2.font="black";
    context2.fill();
    
        
    //if I uncomment the next line the code breaks but only after filling...I dont know why!!!!!!
    //context2.fill();
    
        
    context2.font = fontHeigh + "px Verdana";
    //appendString = appendString + height + "<br>";
    context2.fillStyle=cheeseData.segments[i].color;
    context2.fillText(cheeseData.segments[i].label + " " + Math.round(cheeseData.segments[i].value), 10, anchorTextGraph);

    //checking angle explain why things weren't lining up...got cos and sin mixed up resulting in the labels being inverted on the horisontal acess
        
    //appendString = appendString + ("<p>Start: " + currentAngle + " Lable: " + lableAngle + " End Angle: " + endAngle + "</p>");
    currentAngle = endAngle;
};//*/
    context2.beginPath();
    context2.moveTo(0, 250);
    context2.lineTo(377, 250);
    context2.closePath();
    context2.strokeStyle="black";
    context2.stroke();
    for(i=0; i<6; i++){
        context2.beginPath();
        context2.moveTo(375 / 5 * i + 1, 250);
        context2.lineTo(375 / 5 * i + 1, 260);
        context2.strokeStyle="black";
        context2.stroke();
    }
    
    
    //used instead of console log
    example.innerHTML = example.innerHTML + appendString;
});