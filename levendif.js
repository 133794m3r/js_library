/**
 *
 * Copyright: 2011 by Macarthur Inbody, Licensed under the LGPL v3 or higher
 * Javascript SQL query parser.
 *
 */

/*
*
*Calculates the Levenshtein Difference
*
* @param string_1 the first string
* @param string_2 the second string
* @param normalized To decide if the value should be a fraction of the string's length
*/

function levdist(string_1,string_2,normalized){
        var str1_len=string_1.length;
        var str2_len=string_2.length;
        var i=0,i1=0,i2=0;
        var char_0=0,char_1=0,char_2=0;
        var cost_ins=1,cost_del=1,cost_rep=1;
        var tmp;
        var p1=new Array(),p2=new Array();
        for(i2=0;i2<=str2_len;++i2){
            p1[i2]=i2;
        }
        for(i1=0;i1<str1_len;++i1){
            p2[0]=p1[0];
            for (i2 = 0; i2 < str2_len; i2++) {
                        char_0 = p1[i2] + ((string_1.substr(i1,1) == string_2.substr(i2,1)) ? 0 : cost_rep);
			char_1 = p1[i2 + 1] + cost_del;
			if (char_1 < char_0) {
				char_0 = char_1;
			}
			char_2 = p2[i2] + cost_ins;
			if (char_2 < char_0) {
				char_0 = char_2;
			}
			p2[i2 + 1] = char_0;
		}
		tmp = p1;
		p1 = p2;
		p2 = tmp;                
            }
            if(normalized === (undefined||null)){
                return p1[str2_len];
            }
            else{
                return 1/(1+p1[str2_len]);
            }
}
