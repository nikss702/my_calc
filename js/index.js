var input=document.querySelector("#input");
var equation=document.querySelector("#equation");
var equations=[];
var answers=[];
function getVal(x)//7,8
{
    if(input.value==0)
        input.value=x;//7
    else
        input.value+=x;
}

function ans()
{
    equation.value=input.value +" = ";
    input.value=eval(input.value);
    equations.push(equation.value);
    answers.push(eval(input.value));
    document.querySelector("#history").innerHTML="";
    for(let i=equations.length-1;i>=0;i--)
    {
        document.querySelector("#history").innerHTML+="<div class='output'><p>"+equations[i]+"</p><p>"+answers[i]+"</p></div>";
    }
    
}

function clearInput()
{
    input.value=0;
    equation.value="";
}
function clearHistory()
{
    document.querySelector("#history").innerHTML="";
}