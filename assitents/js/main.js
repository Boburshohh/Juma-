function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    var l = d.getDay();
    document.getElementById("vaqt").innerHTML = h + ":" + m + ":" + s;
   
    
    

    if(l==1){
        var cl=document.getElementById("clock").innerHTML=" Bugun Dushanba";
        document.getElementById("yozchi").innerHTML = "BUGUNGI DUSHANBA KUN BILAN TABRIKLAYMAN"

    }
    else if(l==2)
    {
        var cl=document.getElementById("clock").innerHTML=" Bugun Seshanba";
        document.getElementById("yozchi").innerHTML = "BUGUNGI SESHANBA KUN BILAN TABRIKLAYMAN  ALLOH TAOLO SIZNIG BUGUNGI KUNINGIZNI BAROKATLI QILSIZN "
    }
    else if(l==3)
    {
        var cl=document.getElementById("clock").innerHTML="Bugun Chorshanba";
        document.getElementById("yozchi").innerHTML = "BUGUNGI CHORSHANBA KUN BILAN TABRIKLAYMAN  ALLOH TAOLO SIZNIG BUGUNGI KUNINGIZNI BAROKATLI QILSIN "
    }
    else if(l==4)
    {
        var cl=document.getElementById("clock").innerHTML="Bugun Payshanba";
        document.getElementById("yozchi").innerHTML = "BUGUNGI PAYSHANBA KUN BILAN TABRIKLAYMAN  ALLOH TAOLO SIZNIG BUGUNGI KUNINGIZNI BAROKATLI QILSIN "
    }
    else if(l==5)
    {
        var cl=document.getElementById("clock").innerHTML=" Bugun Juma";
        //
        document.getElementById("yozchi").innerHTML = "SIZNI BUGUNGI JUMA AYYOMI BILAN TABRIKLAYMAN."
    }
    else if(l==6)
    {
        var cl=document.getElementById("clock").innerHTML=" Bugun Shanba";
        document.getElementById("yozchi").innerHTML = "BUGUNGI SHANBA KUN BILAN TABRIKLAYMAN  ALLOH TAOLO SIZNIG BUGUNGI KUNINGIZNI BAROKATLI QILSIN "
    }
    
    else{
        var cl=document.getElementById("clock").innerHTML= " Bugun Yakshanba" ;
        document.getElementById("yozchi").innerHTML = "BUGUNGI YAKSHANBA KUN BILAN TABRIKLAYMAN  ALLOH TAOLO SIZNIG BUGUNGI KUNINGIZNI BAROKATLI QILSIN "
    }



    if(h >= 5  &&  h < 7)
    {
        var dl=document.getElementById("vaqtlar").innerHTML="Bomdod vaqti";

    }
    else if(h >= 12  &&  h < 16 )
    {
        var dl=document.getElementById("vaqtlar").innerHTML= "Peshin vaqti" ;
    }
    else if(h >= 15  &&  h < 17 )
    {
        var dl=document.getElementById("vaqtlar").innerHTML= "Asr vaqti" ;
    }
    else if(h >= 17  &&  h < 18 )
    {
        var dl=document.getElementById("vaqtlar").innerHTML= "Shom vaqti" ;
    }
    // else if( m  >= 43 )
    // {
    //     var dl=document.getElementById("vaqtlar").innerHTML= "Shom vaqti" ;
        

    // }
    else if(h >= 19  &&  h < 24 )
    {
        var dl=document.getElementById("vaqtlar").innerHTML= "Xufton vaqti" ;
    }

   
    else{
        var dl=document.getElementById("vaqtlar").innerHTML= "" ;
    }
    
    

}
setInterval(time, 1000); 






let ism=prompt("Iltimos ismingizni kiriting");
    alert(ism);
    if(ism==0)
       for(var i = 2; i<4; i++){
          alert("Juma");
     
        }
        document.getElementById("ism1").textContent=ism; 
