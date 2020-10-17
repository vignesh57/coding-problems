//meeting-free-times.js
//https://www.interviewcake.com/question/javascript/merging-ranges?course=fc1&section=array-and-string-manipulation
var isDebug = true;
var mergeRanges = function(A){

    A.sort((a,b) => {
        return a.startTime - b.startTime;
    })
    
    let mergedRanges = []; 
    let i=0;
    console.log("Sorted -->", JSON.stringify(A));
    A.forEach(schedule => {
        //base case 
        if(mergedRanges.length == 0){
        mergedRanges[i] = schedule;
        return;
        }    
        console.log("-->", schedule, " | ", JSON.stringify(mergedRanges));
        //inside-just-ignore
       /* if(schedule.startTime <= mergedRanges[i].endTime && schedule.endTime <= mergedRanges[i].endTime ) { 
            console.log("Inside | Do nothing");
            return; 
        }
*/
        /*else*/ if(schedule.startTime > mergedRanges[i].endTime ){
            //brand-new. Push
            mergedRanges[++i]=schedule;
            { console.log("Outside | Add new schedule")};
        } 
   
        else {
             console.log("Inside | Extend End time");
            //mergedRanges[i].endTime = schedule.endTime;
            mergedRanges[i].endTime = Math.max(schedule.endTime, mergedRanges[i].endTime);
        }    
    });
    
    return mergedRanges;
} 

//call function
console.log("RESULT: ", JSON.stringify(mergeRanges([
        { startTime: 0,  endTime: 1 },
        { startTime: 3,  endTime: 5 },
        { startTime: 4,  endTime: 8 },
        { startTime: 10, endTime: 12 },
        { startTime: 9,  endTime: 10 },
])));

console.log("Done");

