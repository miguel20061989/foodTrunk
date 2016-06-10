        // Canvas Image Banners
         var img = new Image();

        img.src = 'foodTruck2.jpg';
        var CanvasXSize = 450;
        var CanvasYSize = 120;
        var speed = 30;
        var scale = 1.25;
        var y = -4.5; 
        var trRows=0;


        var dx = 0.75;
        var imgW;
        var imgH;
        var x = 0;
        var clearX;
        var clearY;
        var ctx;

        img.onload = function() {
            imgW = img.width*scale;
            imgH = img.height*scale;
            if (imgW > CanvasXSize) { x = CanvasXSize-imgW; } 
            if (imgW > CanvasXSize) { clearX = imgW; } 
            else { clearX = CanvasXSize; }
            if (imgH > CanvasYSize) { clearY = imgH; } 
            else { clearY = CanvasYSize; }
            ctx = document.getElementById('canvas').getContext('2d');
            return setInterval(draw, speed);
        }

        function draw() {
          
            ctx.clearRect(0,0,clearX,clearY);
            if (imgW <= CanvasXSize) {
                if (x > (CanvasXSize)) { x = 0; }
                if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
            }
            else {
                if (x > (CanvasXSize)) { x = CanvasXSize-imgW; }
                if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-imgW+1,y,imgW,imgH); }
            }
            ctx.drawImage(img,x,y,imgW,imgH);
            x += dx;
        }


        // Canvas Image Banners




        function changePrice(){


        var meats = document.getElementById("meats").value;  
        var drink = document.getElementById("drink").value;

        if(meats === ""){
        document.getElementById("price").value = "$"+drink;    
        }
        else if(drink === "")
        {
          document.getElementById("price").value = "$"+meats;
        }
        else if(meats === "" && drink === "" ){
        document.getElementById("price").value = "$0";
        }
        else{

        var resultado = (meats * 1) + (drink * 1);  
         document.getElementById("price").value =  "$"+resultado;   
        }

        };


        function pedidoCocina(){

        var numeroOrden = "00"+trRows;
        trRows+=1;

        var priceMeats = document.getElementById("meats").value;  
        var priceDrink = document.getElementById("drink").value;

        var a = document.getElementById("meats").options.selectedIndex;  
        var b = document.getElementById("drink").options.selectedIndex;


        var meats = document.getElementById("meats").options[a].text;
        var drink = document.getElementById("drink").options[b].text;
        var tableClient = document.getElementById("tableClient").value



        var table = document.getElementById("kitchen");
            var row = table.insertRow(0);
            row.id= numeroOrden;
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = numeroOrden;
            cell2.innerHTML = platillo;
            cell3.innerHTML = bebida;
            cell4.innerHTML = '<input type="checkbox" '+ "onChange="+"factura("+"'"+priceMeats+"',"+"'"+meats+"',"+"'"+priceDrink+"',"+"'"+drink+"',"+"'"+numeroOrden+"',"+"'"+tableClient+"'"+")"+'>'+'</input>';
        }

        function factura(priceMeats, meats, priceDrink, drink, numOrden, tableClient){


        var total = (precioComidas * 1) + (precioBebidas * 1);
        var tips = (total * 1) * 0.10;
        var totalService = (total * 1) + (tips * 1); 


        document.getElementById("numOrder").innerHTML = numOrden;
        document.getElementById("propina").innerHTML = "$"+tips;
        document.getElementById("total").innerHTML = "$"+totalService;
        
          document.getElementById("meats").innerHTML = comida;
          document.getElementById("drinks").innerHTML = bebida;

          document.getElementById("table").innerHTML = mesa;


            document.getElementById("buttonPrint").innerHTML = '<button id="print" '+ "onclick="+"printTicket("+"'"+tips+"',"+"'"+comida+"',"+"'"+totalService+"',"+"'"+bebida+"',"+"'"+numOrden+"',"+"'"+mesa+"'"+")"+'> Print Ticket'+'</button>';


       document.getElementById(numOrden).remove();



        }



    function printTicket(tips, comida, totalService, bebida, numOrden, mesa){

    top.wRef=window.open('','myconsole',
      'width=500,height=450,left=10,top=10'
       +',menubar=1'
       +',toolbar=0'
       +',status=1'
       +',scrollbars=1'
       +',resizable=1')
     top.wRef.document.writeln(
      '<html><head><title>Ticket</title> <img src="foodTruck.jpg" style="display:inline-block"> </head>'
     +'<body bgcolor=white onLoad="self.focus()">'
     +'<center><font color=black><b><i><a href=# onclick="window.print();return false;">Print Ticket</a></i></b></font>'
     +'<H3>TICKET</H3>'
     +'<table border=0 cellspacing=3 cellpadding=3>'
     )

     buf='';

     buf+='<tr>';
     buf+='<td align=right><font size=2 face=Arial,Helvetica>';
     buf+='N°Order :<br>';
     buf+='</font></td>';
     buf+='<td align=right><font size=2 face=Arial,Helvetica style="font-weight: bold;">'
     buf+= ''+numOrden+'<br>';
     buf+='</font></td>';
     buf+='</tr>';

      buf+='<tr>';
     buf+='<td align=right><font size=2 face=Arial,Helvetica style="font-weight: bold;">';
     buf+='Table :<br>';
     buf+='</font></td>';
     buf+='<td align=right><font size=2 face=Arial,Helvetica>'
     buf+= ''+mesa+'<br>';
     buf+='</font></td>';
     buf+='</tr>';

     buf+='<tr>';
     buf+='<td align=right><font size=2 face=Arial,Helvetica style="font-weight: bold;">';
     buf+='Service :<br>';
     buf+='</font></td>';
     buf+='<td align=right><font size=2 face=Arial,Helvetica>'
     buf+= ''+comida+'<br>';
     buf+= ''+bebida+'<br>';
     buf+='</font></td>';
     buf+='</tr>';

     buf+='<tr>';
     buf+='<td align=right><font size=2 face=Arial,Helvetica style="font-weight: bold;">';
     buf+='Tips :<br>';
     buf+='</font></td>';
     buf+='<td align=right><font size=2 face=Arial,Helvetica>'
     buf+= ''+'$'+tips+'<br>';
     buf+='</font></td>';
     buf+='</tr>';

     buf+='<tr>';
     buf+='<td align=right><font size=2 face=Arial,Helvetica style="font-weight: bold;">';
     buf+='Tips :<br>';
     buf+='</font></td>';
     buf+='<td align=right><font size=2 face=Arial,Helvetica>'
     buf+= ''+'$'+totalService+'<br>';
     buf+='</font></td>';
     buf+='</tr>';



     top.wRef.document.writeln(buf+'</table></center></body></html>')
     top.wRef.document.close()

    }





