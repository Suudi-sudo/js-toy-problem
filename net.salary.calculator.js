//function to calculate tax based on the KRA rates
function calculateTax(salary) {
    let tax = 0;

    //KRA tax bands
    if (salary <= 24000) {
        tax = salary * 0.1; // 10% tax rate
    }
    else if (salary <= 48000) {
        tax = (24000 * 0.1) + ((salary - 24000) * 0.2); // 20% tax rate
    }
    else if (salary <= 120000) {
        tax = (24000 * 0.1) + (24000 * 0.2) + ((salary - 48000) * 0.25); //25% tax rate
    } 
    else {
        tax = (24000 * 0.1) + (24000 * 0.2) + (72000 * 0.25) + ((salary - 120000) * 0.3); //30% tax rate
    }
       return tax;
}

//function to calculate NHIF deductions
function calculateNHIF(salary) {
    if (salary <= 5999) {
        return 150;
    }
    else if (salary <= 7999) {
        return 300;
    }
    else if (salary <= 11999){
        return 400;
    }
    else if (salary <= 14999){
        return 500;
    }
    else if ( salary <= 19999){
        return 600;
    }
    else if(salary <= 24999){
        return 700;
    } 
    else if(salary <= 29999){
        return 800;
    }
    else if(salary <= 34999){
        return 900;
    }
    else if(salary <= 39999){
        return 950;
    }
    else if(salary <= 44999){
        return 1000;
    }
    else{
        return 1200;
    }
}
function calculateNSSF(basicSalary) {
    return basicSalary * 0.06; // Example calculation
}

function getInputs() {
    const basicSalary = 2160; // Example input
    const nssf = calculateNSSF(basicSalary);
    console.log('NSSF:', nssf);
}

// Call getInputs to run your calculations
getInputs();


//function to calculate NSSF deductions
async function getInputs() {
    const basicSalary = await parseFloat(2160);
    const benefits = await parseFloat(1080);
        console.log("Baisc Salary:" + basicSalary);
        console.log("Benefits:" + benefits);

        
        
        

    //gross salary
    const grossSalary = basicSalary + benefits;
    //the deductions
    const tax = calculateTax(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
       //calculate net salary
       const netSalary = grossSalary - tax - nhif - nssf;
       //the results
       console.log("Gross Salary:" + grossSalary);
       console.log("NHIF Deductions:" + nhif);
       console.log("NSSF Deductions:" + nssf);
   
    
       
}
 //running net salary calculator
 getInputs();