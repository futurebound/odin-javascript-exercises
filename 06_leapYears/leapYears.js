const leapYears = function(year) {
	// leap years divisible by 4 (% 4 === 0)
	//	and year % 100 !== 0
	if (year % 400 === 0 && year % 100 === 0) {
		return true;
	} else if (year % 100 !== 0 && year % 4 === 0) {
		return true;
	}

	return false;
};

// Do not edit below this line
module.exports = leapYears;
