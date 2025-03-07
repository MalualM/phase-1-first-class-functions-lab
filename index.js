// Code your solution in this file!
const returnFirstTwoDrivers=(drivers)=>{
    return drivers.slice(0,2);
   }
   const returnLastTwoDrivers=(drivers)=>{
       const totalDrivers=drivers.length;
       if (totalDrivers>=2){
           return drivers.slice(totalDrivers-2);
       }
       else {
           return drivers.slice()
       }
   }
   const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
   
   function createFareMultiplier(ride){
       return function(fare){
       return fare*ride;
   }
   }
   const fareDoubler=createFareMultiplier(2);
   const fareTripler=createFareMultiplier(3);
   function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
       return returnFirstTwoDrivers(drivers);
   }