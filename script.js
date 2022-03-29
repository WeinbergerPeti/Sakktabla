window.addEventListener("load", init);

function ID(elem)
{
    return document.getElementById("ID");
}

function $(elem)
{
    return document.querySelectorAll(elem); // minden html elemre lehet hivatkozni
}

function Class(elem)
{
    return document.getElementsByClassName(elem);
}

function init()
{
    sakktabla();
    sakktablaSzinezes();
    for (let i = 0; i < 64; i++) 
    {
        $("article div")[i].addEventListener("click", babu);
    }
    sakkFigura();
}

function babu()
{
    event.target.innerHTML="A";
    event.target.removeEventListener("click", babu);
    event.target.style.color="red";
}

function sakktabla()
{
    var txt="";
    for (let i = 0; i < 64; i++) 
    {
        txt+="<div></div>"
    }
    $("article")[0].innerHTML=txt;
}

function sakktablaSzinezes()
{
    var sakkElemTomb=$("article div");
    for (let i = 0; i < sakkElemTomb.length; i++) 
    {
        var sor =Math.floor(i/8); // megnézi hogy mennyi az egész része az argumentumának.
        console.log(sor);
        if(sor % 2 === 0)
        {
            if (i%2===1) 
            {
                sakkElemTomb[i].style.backgroundColor= "black";
            }
        }
        else
        {
            if (i%2===0) 
            {
                sakkElemTomb[i].style.backgroundColor="black";    
            }
        }

        /* if(i==0 | i==7)
        {
            sakkElemTomb[i].innerHTML="&#9814";
        } */
    }
}

function sakkFigura()
{
    /* 
    fehér király: &#9812;
    fehér királynő: &#9813;
    fehér bástya: &#9814;
    fehér futó: &#9815;
    fehér huszár: &#9816;
    fehér gyalog: &#9817;
    -----------------------
    fekete király: &#9818;
    fekete királynő: &#9819;
    fekete bástya: &#9820;
    fekete futó: &#9821;
    fekete huszár: &#9822;
    fekete gyalog: &#9823;			  
    */
    var kiraly="&#9812";
    var kiralyno="&#9813";
    var bastya="&#9814";
    var futo="&#9815";
    var huszar="&#9816";
    var gyalog="&#9817";

    var sakkElemTomb=$("article div");
    
    for (let i = 0; i < sakkElemTomb.length; i++) 
    {
        /* console.log(sakkElemTomb[i]); */
        if((i===0 | i===7) | (i===sakkElemTomb.length-1 | i===56))
        {
            sakkElemTomb[i].innerHTML=bastya;
        }
        else if((i===1 | i===6) | (i===sakkElemTomb.length-2 | i===57))
        {
            sakkElemTomb[i].innerHTML=futo;
        }
        else if((i===2 | i===5) | (i===sakkElemTomb.length-3 | i===58))
        {
            sakkElemTomb[i].innerHTML=huszar;
        }
        else if(i===3 | i===sakkElemTomb.length-5)
        {
            sakkElemTomb[i].innerHTML=kiralyno;
        }
        else if(i===4 | i===sakkElemTomb.length-4)
        {
            sakkElemTomb[i].innerHTML=kiraly;
        }
        else if((i>=8 && i<16) | (i>=48 && i<56))
        {
            sakkElemTomb[i].innerHTML=gyalog;
        }
        
        
    }
}