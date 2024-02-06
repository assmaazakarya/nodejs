const Schedule = require('../model/schedule')
//create one day schedule
const createOneDaySchedule=async(_dayName,_details)=>{
    try{
    //   let userid=await User.findOne({username:_username},{_id:1})
    //userId:userid => in the param of the function below
      let scheduleData=await Schedule.create({dayName:_dayName,details:_details})
      if(scheduleData){
        console.log("the schedule was created successfully ,",scheduleData);
      }else{
        console.log("this schedule was'nt saved");
      }
        }catch(err){
        console.log(err);
    }
}
module.exports={createOneDaySchedule}