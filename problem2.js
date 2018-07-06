var limit = 4000000;

var term = 1; sum = 0, terms = [term], ctr = 0, evenTerms = [];

while(term < limit){
	var prevTerm = terms[ctr];
	var last2Term = terms[ctr - 1] || 1;
	term = prevTerm + last2Term;
	terms.push(term);
	if(term < limit && term % 2 == 0){
		evenTerms.push(term);
		sum = sum + parseInt(term);
	}
	ctr++;
}
console.log(sum);