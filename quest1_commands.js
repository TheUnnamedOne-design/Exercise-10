let names = ['Alen', 'Deena', 'Diana', 'Jack', 'Jain', 'Kelvin', 'Louis', 'Rex'];
let ages=[39,47,21,54,23,61,69,49];
let pid=[1,2,3,4,5,6,7,8]


function Sort() {

    var i;

    for(i=0;i<ages.length;i++)
    {
        for(j=0;j<ages.length-i-1;j++)
        {
            if(ages[j+1]<ages[j])
            {
                var temp;

                temp=ages[j+1];
                ages[j+1]=ages[j];
                ages[j]=temp;

                temp=names[j+1];
                names[j+1]=names[j];
                names[j]=temp;

                temp=pid[j+1];
                pid[j+1]=pid[j];
                pid[j]=temp;

            }
        }
    }

    text="";
    var tableholder=document.getElementById("tbl")
    tableholder.style.display="none";

    text+='<table border="2px solid black" cellspacing="0px" cellpadding="5px" style="width: 250px;" id="tbl"> <tr><td>P-Id</td><td>Name</td><td>Age</td></tr>'

    for(i=0;i<ages.length;i++)
    {
        text+='<tr><td>'+(pid[i])+'</td><td>'+names[i]+'</td><td>'+ages[i]+'</td></tr>'
    }

    text+="</table>"


    document.getElementById("tablenames").innerHTML = text;
}


function search()
{
    var val=document.getElementById("searcher").value;
    
    
    var i;
    for(i=0;i<pid.length;i++)
    {
        if(val==pid[i])
        {
            document.getElementById("result").innerHTML="Found P-Id :  "+(val);
        }
        else 
        {
            document.getElementById("result").innerHTML="Not Found P-Id :  "+(val);
        }
    }
}


function classification()
{
    var para=document.getElementById("classification");
    var i;
    var text1="Age range (30-40) : ",text2="Age range (40-50) : ",text3="Age range (50-60) : ",text4="Age range (>60) : ";

    for(i=0;i<ages.length;i++)
    {
        if(ages[i]>=30&&ages[i]<=40)
        {
            text1+=names[i]+" ";
        }
        else if(ages[i]<=50)
        {
            text2+=names[i]+" ";
        }
        else if(ages[i]<=60)
        {
            text3+=names[i]+" ";
                
        }
        else if(ages[i]>60)
        {
            text4+=names[i]+" ";
        }
    
    }

    var textout=text1+"<br>"+text2+"<br>"+text3+"<br>"+text4+"<br>"
    para.innerHTML=textout;

}