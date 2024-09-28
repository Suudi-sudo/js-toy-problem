function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointHeadshot= 12;

    if (speed < speedLimit) {
        console.log("Ok");
    }
    else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${demeritPoints}`);
        
      if (demeritPoints > demeritPointHeadshot) {
        console.log("License suspended");
        
      }
    }
}
// prompt for user speed input
let input = (200);
let speed = parseFloat(input); // convert input to a float


//call the function to check speed
speedDetector(speed);