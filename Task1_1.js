function numberOfMax(arg){
	if (Array.isArray(arg)) {
    	var max = arg[0];
        var numOfMax = 0;
        for (var i = 1; i < arg.length; i++) {
        	if (arg[i] > max) {
            	max = arg[i];
                numOfMax = 0;
            }
            
            if (arg[i] === max) {
            	numOfMax++;
            }
            
        }
    }
    
    return numOfMax;
}
