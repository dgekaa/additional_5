module.exports = function check(str, bracketsConfig) {
  		var arr = str.split("");
		var count = 0;
		var brack = bracketsConfig;
		
		for(var i = 0; i < arr.length ; i++){
			for(var j = 0; j < brack.length ; j++){
				if(arr[i]===brack[j][0] && arr[i+2]===brack[j][1]&&arr[i+1]!==arr[i]&&arr[i+1]!==arr[i+2]){
					return false;
				}else if(arr[i] === brack[j][0] && arr[i] !== "|"){
					count++;
				}else if(arr[i] === brack[j][1]&&arr[i] !== "|"){
					count--;
					if(count<0){
						return false;
					}
				}
			}
		}

		if(count===0){
			return true;
		}else{
			return false;
		}
}
