function whoseLonger(w1, w2){
    const lun1 = w1.length;
    const lun2 = w2.length;
    
    const first = "first";
    const second = "second";
    const equal = "equal";

    if(lun1 === lun2){
        return equal;
    } else if (lun1 > lun2) {
        return first;
    } else {
        return second;
    }

}