
function colorRate(rate) {
    if (rate < 0.25) {return (rate*1020, 255, 0);}
    else if (rate >= 0.5) {return (255, 0, 0);}
    else if (rate > 0.25) {return (255, (0.5-rate)*1020, 0);}
    else {return (255, 255, 0);}
}