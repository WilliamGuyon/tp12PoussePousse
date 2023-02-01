
window.onload=function()
{
    let tableauId = getAllId();
    console.log(tableauId);
    display(tableauId);
}

function getAllId()
{
    varTab=new Array();

    tab=document.getElementsByTagName('td');
    for(let i = 0 ;i<28; i++)
    {
        varTab[i]=tab[i].getAttribute("id");
    }
    return varTab;
}

function display(arr)
{  
    for(let i = 1 ;i<28; i++)
    { 
        let img="url(images/"+i+".jpg)";
        document.getElementById(arr[i]).style.backgroundImage=img;
    }
}