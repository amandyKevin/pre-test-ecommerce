var limit = 1000;
var multiplier = [3,5];

var belowLimit = {}, sum = 0;

for(ctr = 1; ctr < limit; ctr++){
	var hitLimitCtr = 0;
	for(i in multiplier){
		var product = ctr * multiplier[i];
		if(product < limit){
			belowLimit[product] = true;
		}else{
			hitLimitCtr ++;
		}
	}

	if(hitLimitCtr == multiplier.length){
		break;
	}
}

for(product in belowLimit){
	sum = ( sum + parseInt(product) );
}

console.log(belowLimit);