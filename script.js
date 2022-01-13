$('textArea#main').keyup(function(event) {

    if(event.keyCode === 13) {
        $('button#equals').click()
    }
})


// From here - Actual

//
function adjustValue(number)
{
    var textArea = $('textarea#main');
    textArea.val(textArea.val().concat(number));
}


//
function setOperation(op)
{
    var textArea = $('textarea#main');
    textArea.val(textArea.val().concat(op));
}



//
function negateValue()
{

    var textArea = $('textarea#main');

    if (textArea.val().search('-') == 0)
    {
        textArea.val(textArea.val().slice(1, textArea.val().length));
    }

    else
    {
        console.log(textArea.val())
        textArea.val( '-'.concat(textArea.val()) );
    }

}


//
function undoAdjust()
{

    var textArea = $('textarea#main');

    textArea.val(textArea.val().slice(0, textArea.val().length-1));
}


//
function clearAll()
{
    var textArea = $('textarea#main');
    
    textArea.val('');
}


//
function performCalc()
{  
    var textArea = $('textarea#main');
    var equation = textArea.val();

    clearAll();
    try
    {
        textArea.val(math.evaluate(equation));
    } catch (error)
    {
        textArea.val ("Error");
    }
    
    
    //console.log(math.evaluate(equation))
    //console.log(equation);

}