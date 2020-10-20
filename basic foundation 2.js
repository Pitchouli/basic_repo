//Problem 1: Biggie Size
function makeItBig(array)
{
	for (i = 0; i < array.length; i++)
	{
		if (array[i] > 0)
		{
			array[i] = "big";
		}
	}
	
	return array;
}

//Problem 2: Print Low, Return High
function PrintLowReturnHigh(array)
{
	var min = 0;
	var max = 0;
	
	for (i = 0; i < array.length; i++)
	{
		if (array[i] > max)
		{
			max = array[i];
		}
		if (array[i] < min)
		{
			min = array[i];
		}
	}
	
	console.log(min);
	return max;
}

//Problem 3: Print One, Return Another
function PrintOneReturnAnother(array)
{
	var FirstOdd = 0;
	for (i = 0; i < array.length; i++)
	{
		if (array[i] % 2 == 0 && FirstOdd == 0)
		{
			FirstOdd = array[i];
		}
	}
	
	console.log(array[array.length - 2]);
	return FirstOdd;
}

//Problem 4: Double Vision
function DoubleArray(array)
{
	var newArray = [];
	for (i = 0; i < array.length; i++)
	{
		newArray.push(array[i] * 2);
	}
	
	return newArray;
}

//Problem 5: Count Positives
function CountPositives(array)
{
	for (i = 0; i < array.length; i++)
	{
		if (array[i] > 0)
		{
			array[array.length - 1] = array[array.length - 1] + 1;
		}
	}
	
	return array;
}

//Problem 6: Evens and Odds
function EvensAndOdds(array)
{
	for (i = 0; i < array.length - 2; i++)
	{
		if (array[i] % 2 == 0 && array[i + 1] % 2 == 0 && array[i + 2] % 2 == 0)
		{
			console.log("That's three evens in a row!");
		}
		else if (array[i] % 2 == 1 && array[i + 1] % 2 == 1 && array[i + 2] % 2 == 1)
		{
			console.log("That's three odds in a row!");
		}
	}
	
}

//Problem 7: Incremement the Seconds
function IncremementSeconds(array)
{
	for (i = 1; i < array.length; i = i + 2)
	{
		array[i] = array[i] + 1;
	}
	for (j = 0; j < array.length; j++)
	{
		console.log(array[j]);
	}
	
	return array;
}

//Problem 8: Previous Lengths
function PreviousLengths(array)
{
	for (i = 0; i < array.length - 1; i++)
	{
		array[array.length - i - 2] = str.length(array[array.length - i - 1])
	}
	
	return array;
}

//Problem 9: Add Seven
function Plus Seven(array)
{
	var newArray = [];
	for (i = 0; i < array.length; i++)
	{
		newArray.push(array[i] + 7);
	}
	
	return newArray;
}

//Problem 10: Reversal
function ReverseArray(array)
{
	var newArray = [];
	for (i = 0; i < array.length; i++)
	{
		newArray.push(array[array.length - i - 1]);
	}
	
	return newArray;
} //Why use a temporary array when you can print a new one?

//Problem 11: Negative Outlook
function NegativeArray(array)
{
	var newArray = [];
	for (i = 0; i < array.length; i++)
	{
		if (array[i] > 0)
		{
			newArray.push(array[i] * -1);
		}
		else
		{
			newArray.push(array[i]);
		}
	}
	
	return newArray;
}

//Problem 12: Always Hungry
function Hunger(array)
{
	for (i = 0; i < array.length; i++)
	{
		if (array[i] = "food")
		{
			console.log("yummy");
		}
		else
		{
			console.log("I'm hungry");
		}
	}
}

//Problem 13: Snap Toward Center
function CenterInvert(array)
{
	var tempArray = [];
	for (i = 0; i < array.length / 2; i++)
	{
		tempArray[i] = array[array.length - i - 1];
		tempArray[array.length - i - 1] = array[i];
	}
	
	return tempArray;
}

//Problem 14: Scale the Array
function MultiplyArray(array, mult)
{
	for (i = 0; i < array.length; i++)
	{
		array[i] = array[i] * mult;
	}
	
	return array;
}