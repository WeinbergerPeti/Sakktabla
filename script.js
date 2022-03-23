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

}

function babu()
{
    event.target.innerHTML="A";
    event.target.removeEventListener("click", babu);
    style.color="red";
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
    for (let i = 0; i < 64; i++) 
    {
        var sor =Math.floor(i/8); // megnézi hogy mennyi az egész része az argumentumának.
        console.log(sor);
        if(sor % 2 === 0)
        {
            if (i%2===0) 
            {
                sakkElemTomb[i].style.backgroundColor= "black";
            }
        }
        else
        {
            if (i%2===1) 
            {
                sakkElemTomb[i].style.backgroundColor="black";    
            }
        }
    }

}