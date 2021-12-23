
// From here - Actual



var phase = 1;


//
function createNumOrOp()
{
    phase++;
    var p = document.createElement("p");
    p.innerText = '';
    p.id = phase;
    document.getElementById('Begin').appendChild(p)
}


//
function adjustValue(number)
{
    if((phase % 2 == 0))
    {
        createNumOrOp()
    }

    var to_adjust = document.getElementById(phase);
    to_adjust.innerText = to_adjust.innerText.concat(number);
}


//
function setOperation(op)
{

    if(document.getElementById(1).innerText != '')
    {
        if(!(phase % 2 == 0))
        {
            createNumOrOp()
        }

        var to_adjust = document.getElementById(phase);
        to_adjust.innerText = op;
    }
}



//
function negateValue()
{

    if(!(phase % 2 == 0))
    {
        var to_adjust = document.getElementById(phase);

        if (to_adjust.innerText.search('-') == 0)
        {
            to_adjust.innerText= to_adjust.innerText.slice(1, to_adjust.innerText.length);
        }

        else
        {
            to_adjust.innerText= '-'.concat(to_adjust.innerText);
        }
    }

}


//
function stringToNumber(id)
{

    switch (id)
    {
        // Something
    }

}


//
function undoAdjust()
{

    var to_adjust = document.getElementById(phase);

    to_adjust.innerText= to_adjust.innerText.slice(0,to_adjust.innerText.length-1);

    if( (phase > 1) && (to_adjust.innerText == '') )
    {
        phase--;
        document.getElementById('Begin').removeChild(to_adjust);
        //to_adjust = document.getElementById(phase);
    }
}


//
function clearAll()
{
    for(phase; phase > 1; phase--)
    {
        var to_adjust = document.getElementById(phase);
        document.getElementById('Begin').removeChild(to_adjust);
    }
    document.getElementById(1).innerText = '';
}


//
function performCalc()
{
    var equation = '';
    var total  = 0;

    for(let i = 1; i <= phase; i++)
    {
        equation = equation.concat(document.getElementById(i).innerText);
    }

    clearAll()
    document.getElementById(1).innerText = math.evaluate(equation)
    
    //console.log(math.evaluate(equation))
    //console.log(equation);

}