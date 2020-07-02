
function ReturnScheduleDetails() {

	//Get Member info
	var MemberNameValue = document.getElementById('member');
	var MemberNameValue = MemberNameValue.value;
	document.getElementById('MemberNameValue').innerHTML= " Member : " + MemberNameValue;
 
	var serviceType = document.getElementById('ServiceType');
	var serviceTypeValue = serviceType.value;
   // alert(serviceTypeValue);
	document.getElementById('ServiceField').innerHTML= "Type of Service: " + serviceTypeValue;
   // document.getElementById("demo").innerHTML = "Hello World";

   //Get instructor info
	var instructorType = document.getElementById('instructor');
	var instructorTypeValue = instructorType.value;
	document.getElementById('InstructorField').innerHTML= "Instructor: " + instructorTypeValue;

	 //Get Month info
	var monthType = document.getElementById('month');
	var monthTypeValue = monthType.value;
	//document.getElementById('MonthField').innerHTML= "MonthField: " + monthTypeValue;

	//Get Day info
	var dayType = document.getElementById('day');
	var dayTypeValue = dayType.value;
	//document.getElementById('DayField').innerHTML= "DayField: " + dayTypeValue;

	//Get year info
	var yearType = document.getElementById('year');
	var yearTypeValue = yearType.value;
	//document.getElementById('YearField').innerHTML= "YearField: " + yearTypeValue;
	document.getElementById("MonthDayYear").innerHTML = "Date: " + monthTypeValue +" " + dayTypeValue + ", " + yearTypeValue;

	//Get timeslot info
	var timeSlotType = document.getElementById('timeslot');
	var timeTypeValue = timeSlotType.value;
	document.getElementById('TimeField').innerHTML= "Time Slot: " + timeTypeValue;
  }