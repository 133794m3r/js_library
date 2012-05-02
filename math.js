function pow(value,power){
  var vals=Math.pow(value,power);
    return vals;
}

function sqrt(value){
    return Math.sqrt(value);
}
function ceil(valss){
    var names=Math.ceil(valss);
    return names;
}

function getint(id){
    var values=parseInt($(id).val());
    return values;
}

function floor(valss){
    var values=Math.floor(valss);
    return values;
}

function intval(value){
    return parseInt(value);
}
/**
 *
 *Better random Number Generator
 *
 *Accepts two paramters to make it more accesible AND like the native ones in other langauges.
 *
 *@param    {integer} min the minimum value
 *@param    {integer} max the maximum value
 *@return   {integer} a random integer between the min AND maximum values
 */
function rand(min,max){
    var deviation;
    if(max===undefined){
        max=min;
        min=0;
    }
    return (Math.floor(Math.random()*(max-min))+min);
}

/**
 *Rounding with precision
 *
 *Allows for one to round a number with decimal precision in mind if they so wish.
 *
 *@param    n   the number to be rounded
 *@param    x   [optional]the precision for the rounding after the decimal
 *@return   the rounded value
 */
function round(n,x){
    var y=0;
    if(x!==undefined){
        y=parseFloat(n.toFixed(x));
    }
    n=Math.round(n);
    if(y!==n&&x!==undefined){
        return parseFloat(y);
    }
    else{
        return parseInt(n);
    }
}

/**
 * 
 * random Float
 * 
 * Generates a random number between two numbers AND returns a float with the precision that is defined.
 * 
 * @param   min 	integer minimum value
 * @param   max		integer maximum value
 * @param   precision	integer digits of precision
 * @return  float the value   
 */
function randfloat(min,max,precision){
    var range=max-min;
    var num=0;
    var precision_rand=Math.pow(10, precision);
    num=min+(range*(rand(0,precision_rand)/precision_rand));
    num=round(num,precision);
    return num;
}

function sum(initial_value,start,end,formula){
    var i=0;
    var j=initial_value;
    var total;
    for(i=start;i<end;++i){
        total+=eval(formula);
        ++j;
    }
}


function mean(array){
    var arg_len=array.length;
    var i=0,max=0;
    var tmp=0;
    for(i=0;i<arg_len;++i){
        max+=array[i];
    }
    tmp=round((max/arg_len),4);
    return tmp;
}

function standard_deviation(array,mean){
    if(typeof mean==undefined){
        mean=mean(array);
    }
    var arr_len=array.length,i=0,tmp=0,tmp2=0;
    for(i=0;i<arr_len;++i){
        tmp+=pow((array[i]-mean),2);
    }
    tmp=(tmp/arr_len);
    tmp=round(sqrt(tmp),4);
    return tmp;
}
