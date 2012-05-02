/**
 *
 * Copyright: 2011 by Macarthur Inbody, Licensed under the LGPL v3 or higher
 * Javascript SQL query parser.
 *
 * It gets data from a JSON object store setup as one would in PHP from a MySQL format.
 * It can query arrays or arrays of objects. Either way both is the same thing to it.pow
 * Currently implemented is just the SELECT function and nothing else is. Also the WHERE
 * clause is included for proper sorting. It does not allow for ORDER BY, or GROUP BY.
 *
 * Currently there is no plans for adding in the ability to joins. It only gets the data
 * from the localStorage and only in a format that I have used and have stated previously.
 *
 *
 *
 */

function sql_error_creator(error){
    error=error.toString();
    if(error.indexOf('ReferenceError')!==-1){

    }
    global_sql_error_object.push(error);
}


function select_where_filter(){

}


function select_selected_filter(){

}

function select_array_normal(stack,data_source,data_source_length,selected_length){
    var data_found=new Array();
    var i=0,i2=0,i3=0,tmp,tmp2,tmp3,j=0;
    var where_length=stack['valid_data'].length;
    var keys;
    var keys_length;
    if(selected_length===-1){
        keys=get_array_keys(data_source);
        keys_length=keys.length;
        for(i=0;i<where_length;++i){
            tmp=stack['valid_data'][i];
            for(i2=0;i2<keys_length;++i2){
                tmp2=keys[i2];
                data_found[tmp2][j]=data_source[tmp2][tmp];
            }
            ++j;
        }
    }
    else{
        if(stack['valid_data'][0]=='all'){
            keys=get_array_keys(stack['selected_data']);
            keys_length=keys.length;
            for(i=0;i<data_source_length;++i){
                for(i2=0;i2<keys_length;++i2){
                    tmp2=keys[i2];
                    data_found[tmp2][j]=data_source[tmp2][i];
                }
            }
        }
        else{
            keys=get_array_keys(stack['selected_data']);
            keys_length=keys.length;
            for(i=0;i<data_source_length;++i){
                tmp=stack['valid_data'][i];
                for(i2=0;i2<keys_length;++i2){
                    tmp2=keys[i2];
                    data_found[tmp2][j]=data_source[tmp2][tmp]
                }
            }
        }
    }
    return data_found;

}
function select(stack,data_source){
    var valid;
    var selected_data;
    var data_source_length=data_source.length;
    var selected_length=stack['selected_data'].length;
    if(stack['selected_data'][0]==='all'){
        if(stack['valid_data'][0]==='all'){
            return data_source;
        }
        else{
            if(stack['data_source'][0]==='array_normal'){
                selected_data=select_array_normal(stack,data_source,data_source_length,-1);
            }
        }
    }
    else{
        if(stack['data_source']==='array_normal'){
            selected_data=select_array_normal(stack,data_source,length,length2);
        }
        else{

        }
    }
    return selected_data;
}

function select(stack,data_source){
    var valid;
    var length=data_source.length,length2=stack['selected_data'].length;
    var selected_data=new Array();
    if(stack['selected_data'][0]==='all'){
        if(stack['valid_data'][0]==='all'){
            selected_data=data_source;
        }
        else{
            if(stack['data_source']==='array_normal'){
                selected_data=select_array_normal(stack,data_source,length,length2,-1);
            }
        }
    }
    else{
        if(stack['data_source']==='array_normal'){
            selected_data=select_array_normal(stack,data_source,length,length2);
        }
        else{

        }
    }
    return selected_data;
}

function where(stack,data_source){
    var where_length=stack['where_selector'].length;
    var i=0,i1=0,stack_place,valid,tmp=0;
    var data_length=data_source.length;
    var valid_data=new Array();
    var data_stack=new Array();
    var data_stack_index=0;
    var and_or_length=0;
    var and_or_index=0;
    var tmp2,tmp3
    var i2=0;
    var j=0;
    var and_or_stack=new Array();
    for(i=0;i<data_length;++i){
        for(i1=0;i1<where_length;++i1){
            stack_place=stack['where_selector'][i1];
            if(stack_place==='eq'){
                (data_source[stack['where_var_a'][i1]][i]===stack['where_var_b'][i1])?valid=true:valid=false;
            }
            else if(stack_place==='lt'){
                (data_source[stack['where_var_a'][i1]][i]<stack['where_var_b'][i1])?valid=true:valid=false;
            }
            else if(stack_place==='lte'){
                (data_source[stack['where_var_a'][i1]][i]<=stack['where_var_b'][i1])?valid=true:valid=false;
            }
            else if(stack_place==='gt'){
                (data_source[stack['where_var_a'][i1]][i]>stack['where_var_b'][i1])?valid=true:valid=false;
            }
            else if(stack_place==='gte'){
                (data_source[stack['where_var_a'][i1]][i]>=stack['where_var_b'][i1])?valid=true:valid=false;
            }
            data_stack['where_var_a'][i1]=stack['where_var_a'][i1]+':'+stack['where_type'][i1]+':'+i1;
            data_stack['where_valid'][i1]=valid
        }
        valid=false;
        if(i1>=1){
            data_stack['where_var_a']=data_stack['where_var_a'].sort();
            for(i2=1;i2<i1;++i2){
                if(i2===1){
                    tmp2=data_stack['where_var_a'][0].split(':');
                    tmp3=data_stack['where_var_a'][i2].split(':');
                }
                else{
                    tmp2=tmp3;
                    tmp3=data_stack['where_var_a'][i2].split(':');
                }
                if(tmp2[0]===tmp3[0]){
                    if(tmp2[1]==='and'&&tmp3[1]==='and'){
                        if((data_stack['where_valid'][tmp2[2]]===true)&&(data_stack['where_valid'][tmp2[2]]==true)){
                            valid=true
                        }
                        else{
                            valid=false;
                        }
                    }
                    else if (tmp2[1]==='or'||tmp3[1]==='or'){
                        if((data_stack['where_valid'][tmp2[2]]==true)||(data_stack['where_valid'][tmp2[2]]==true)){
                            valid=true;
                        }
                        if(data_stack['where_valid'][tmp2[2]]==false&&(data_stack['where_valid'][tmp2[2]]==false)){
                            valid=false;
                        }
                    }
                }
                else{
                    if(data_stack['where_valid'][tmp2[3]]===true){
                        valid=true;
                    }
                    else{
                        valid=false;
                    }
                }
            }
        }
        else{
            if(data_stack['where_valid'][i1]==true){
                valid=true;
            }
            else{
                valid=false;
            }
        }
        if(valid==true){
            valid_data[j]=i;
            ++j;
        }
    }
    return valid_data;
}

function where_creator(stack,query,i){
    var index,index_length,tmp,tmp2,i2,tmp3;
    stack['where_selector']=new Array();
    stack['where_var_a']=new Array();
    stack['where_var_b']=new Array();
    stack['where_type']=new Array();
    while(index!==-1){
        index=index_all(query,'and');
        if(index==-1){
            index=index_all(query,'AND');
            if(index!==-1){
                stack['where_type'][i]='and';
                index='and';
            }
        }
        else if(index!==-1){
            stack['where_type'][i]='and';
            index='and'
        }
        else{
            index=index_all(query,'or');
            if(index==-1){
                index=index_all(query,'OR');
                if(index!==-1){
                    stack['where_type'][i]='or';
                    index='or';
                }
            }
            else{
                stack['where_type'][i]='or';
                index='or';
            }
        }
        if(index!==-1){
            index_length=index.length;
            for(i2=0;i2<index_length;++i2){
                if(i2>0){
                    stack['where_type']=index;
                }
                tmp=index(query[i],'<');
                if(tmp!==-1){
                    if(query[index[i2]].substring(tmp,1)=='='){
                        stack['where_selector'][i]='lte';
                        tmp2=tmp+1;
                    }
                    else{
                        stack['where_selector'][i]='lt';
                    }
                    i2=index_length;
                }
                tmp=index(query[i],'>');
                if(tmp!==-1){
                    if(query[index[i2]].substring(tmp,1)=='='){
                        stack['where_selector'][i]='gte';
                        tmp2=tmp+1;
                    }
                    else{
                        stack['where_selector'][i]='gt';
                    }
                    i2=index_length;
                }
                stack['where_var_a'][i]=query[i].substring(0,tmp);
                tmp3=query[i].substring(tmp2);
                try{
                    stack['where_var_b'][i]=eval(tmp3);
                }
                catch(e){
                    stack['where_var_b'][i]=tmp3;
                }
            }
            ++i;
        }
    }
}

function from(query_part){
    var data_source_stack=new Array();
    var tmp,tmp1,tmp2,i,i1;
    tmp=query_part.split('.');
    if(tmp[0]==='arr'){
        try{
            tmp1=eval(tmp[1]);
            data_source_stack=tmp1
            data_source_stack['data_source']='array_normal';
        }
        catch(ee){
            sql_error_creator(ee.description);
            return undefined;
        }
    }
    else if(tmp[0]==='ls'){
        try{
            data_source_stack=localStorage.getItem(tmp[1]);
            data_source_stack['data_source']='array_normal';
        }
        catch(ee){
            sql_error_creator(ee.description);
            return undefined;
        }
    }
    return data_source_stack;
}

/*
 * a space seperates every keyword on the stack
 */
function sql_query(query){
    var length =query.length;
    if(length===0){
        sql_error_creator('no query given');
    }
    var i=0,i1=0;
    var tmp,tmp2,tmp3;
    var progress=0;
    var stack=new Array();
    query=query.split(' ');
    var do_extra;
    var data_source=new Array();
    if(query[0]===('select'||'SELECT')){
        stack.push('select');
        if(query[1].indexOf(',')){
            tmp=query[1].split(',');
            length=tmp.length;
            stack['selected_items']=new Array();
            for(i1=0;i1<length;++i1){
                stack['selected_items'].push(tmp[i1]);
            }
            ++i;
        }
        else if(query[1].indexOf('*')){
            stack['selected_items'].push('all');
        }
        else{
            stack['selected_items'].push(query[1]);
        }
        ++i
    }
    if(query[i]===('FROM'||'from')){
        ++i;
        data_source=from(query[i]);
        if(data_source===undefined){
            return null;
        }
    }
    else{
        sql_error_creator('No data source specified');
        return null;
    }
    if(query[i]===('where'||'WHERE')){
        if(arguments.length>=2){
            var argument_length=arguments.length;
            for(tmp=1;tmp<argument_length;++tmp){
                tmp2=arr_string_index(query,'variable',i);
                if(tmp2!==-1){
                    if((query[tmp2[0]].substr(tmp2[1]-1,1)!==("'"|'"'))&&(query[tmp2[0]].substr(tmp2[1]+9,1)!==('"'|"'"))){
                        tmp3=query[tmp2[0]].substr(tmp2[1],8).replace('variable',arguments[tmp]);
                        query[tmp2[0]]=query[tmp2[0]].substr(0,tmp2[1])+tmp3;
                    }
                }
            }
        }
        stack.push('where');
        ++i;
        length=query[i].length;
        stack=where_creator(stack,query,i);
        stack['valid_data']=where(stack,data_source);
    }
    else{
        stack['valid_data'].push('all');
    }
    if(stack['valid_data'].length===0){
        sql_error_creator('No rows found.');
        return valid_data;
    }
    else{
        return select(stack,data_source);
    }
}

function sql_arr(){

}
