/**
 *
 * Copyright: 2011 by Macarthur Inbody, Licensed under the LGPL v3 or higher
 * Javascript SQL query parser.
 *
 */
function ascii85(inputstr,pos){
    var max=parseInt(inputstr.length);
    var ib=0;
    var decvalue=0;
    var decadd=0;
    for(ia=0;ia<max;ia++){
        decadd=parseInt(ord(inputstr.substr(ib,ib+1)));
        if(decadd>=127)decadd=saltmakeroverflow(pos,max);
        decvalue=decvalue+(decadd*pow(256,max-(ib+1)));
        ib++;
    }
    var ascii85arr=new Array(85*85*85*85,85*85*85,85*85,85,1);
    var power =max;
    var arrypos=0;
    var arr=new Array();
    var string1='';
    var apower=0;
    for(i=0;i<=max+1;i++){
    if(decvalue>0){
    apower=ascii85arr[power];
    ascii85math(apower,decvalue,arrypos,arr);
    decvalue=decvalue2;
    arrypos++;
    power--;
    }
    }
    var ia=0;
    for(i=0;i<arrypos;i++){
        string1=string1+arr[ia];
        ia++;
    }
    return string1;
}

function ord(string){
   var value=string.charCodeAt(0);
    return value;
}

function chr(number){
    var chars='';
    chars=String.fromCharCode(number);
    return chars;
}

function ccln(vars,num,adds,test){
    vars1 =0;
    if(vars>num){vars1=floor(vars/num);}
    vars=(vars-(num*vars1));
    if(test==0){
    vars=vars+adds;}
    if(test==1){
        vars=adds.substr(vars,vars+1);
        vars=ord(vars);
    }
    return vars;
}

function ccln(vars,num,adds,test){
    vars1 =0;
    if(vars>num){vars1=floor(vars/num);}
    vars=(vars-(num*vars1));
    if(test==0){
    vars=vars+adds;}
    if(test==1){
        vars=adds.substr(vars,vars+1);
        vars=ord(vars);
    }
    return vars;
}

/**
 * Local Storage Database Hack Setter
 *
 *@param    key     mixed   the indentifying value
 *@param    value   mixed   the json object to store
 *@return  none
*/
function cache_write(key,value){
	return localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Local Storage Database Hack Key Getter
 *
 *@param    key mixed       the value to be used to rerieve the json database
 *@return  json_object the json value
 */
function cache_read(key){
	return JSON.parse(localStorage.getItem(key));
}


function explode(string,delimiter,limit){
    if(limit==undefined){
        limit=-1;
    }
    return string.split(delimiter,limit)
}

function type(obj){
    var type;
    if(typeOf(obj)=="object"){
        if(obj.constructor.toString().indexOf('Array')!==-1){
            type='array';
        }
        else{
            type='object'
        }
    }
    else{
        type=typeOf(obj);
    }
    return type;
}

function get_array_keys(data_source){
    var keys=new Array();
    var key;
    for(key in data_source){
        
    }
    return keys;
}
