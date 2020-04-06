let Iname = '';
let Isurname = '';
let male = true;
let day = 0;
let month = 0;
let year = '';



class Person
{
	constructor(Name, Surname, Male, Day, Month, Year)
	{
		this.name = Name;
		this.surname = Surname;
		this.Male = Male;
		this.day = Day;
		this.month = Month;
		this.year = Year;
	}

	get_fiscal_code()
	{
		return (this.surname_fiscal(this.surname) + this.name_fiscal(this.name) +  this.date_fiscal());
	}

	surname_fiscal(Surname)
	{
		const vowels = "eyuioaуеыаоэяиё";
		Surname = Surname.toLowerCase();
		let code = '';
		let letters = 0;
		for (let i of Surname)
		{
			let isVowel = false;
			for (let j of vowels)
			{
				if (j == i)
					isVowel = true;
			}
			if (!isVowel && letters < 3)
			{
				code += i;
				letters++;
			}
		}
		if (letters < 3)
		{
			for (let i of Surname)
			{
				for (let j of vowels)
				{
					if (j == i)
					{
						code += i;
						letters++;
					}
				}
				if (letters == 3)
					break;
			}
		}
		if (letters < 3)
		{
			for (let i = 0; i < (3 - Surname.length); i++)
				code += 'x';
		}
		return code.toUpperCase();
	}

	name_fiscal(Name)
	{
		const vowels = "eyuioaуеыаоэяиё";
		Name = Name.toLowerCase();
		let code = '';
		let letters = 0;
		for (let i of Name)
		{
			let isVowel = false;
			for (let j of vowels)
			{
				if (j == i)
					isVowel = true;
			}
			if (!isVowel && letters < 4)
			{
				code += i;
				letters++;
			}
		}
		if (letters == 4)
			code = code.replace(code[1], '');
		if (letters < 3)
		{
			for (let i of Name)
			{
				for (let j of vowels)
				{
					if (j == i)
					{
						code += i;
						letters++;
					}
				}
				if (letters == 3)
					break;
			}
		}
		if (letters < 3)
		{
			for (let i = 0; i < (3 - Name.length); i++)
				code += 'x';
		}
		return code.toUpperCase();
	}

	date_fiscal()
	{
		const letter_months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }
		let code = '';
		code += this.year[2] + this.year[3] + letter_months[month] + ((male) ? (this.day < 10) ? "0" + this.day : this.day : 40 + Number(this.day));
		return code;
	}
}

function output_fiscal_code()
{
	let human = new Person (Iname, Isurname, male, day, month, year);
	let code = document.getElementById("fiscal_output").innerHTML = human.get_fiscal_code();
}

harsh = '';

function harshad()
{
	let sum = 0;
	let num = harsh;
	while (harsh >= 1)
	{
		sum += harsh%10;
		harsh = Math.trunc(harsh/10);
	}
	document.getElementById('harshad_output').innerHTML = (num%sum == 0) ? "Yes" : "No";
}

zrostnum = 0;

function task3()
{
	let ascending = false;
	for (let i = 1; i <= Math.trunc(zrostnum.length/2); i++)
	{
		ascending = true;
		let start = 0;
		for (let j = i; start < zrostnum.length-j; )
		{
			if(Number(zrostnum.slice(start+j, start+j+j)) - Number(zrostnum.slice(start, start+j)) == 1)
				start += j;
			else if (Number(zrostnum.slice(start+j, start+j+j+1)) - Number(zrostnum.slice(start, start+j)) == 1)
			{
				start += j;
				j++;
			}
			else
			{
				ascending = false;
				break;
			}
		}
		if (ascending)
			break;
	}
	document.getElementById('task3_output').innerHTML = ascending ? "Yes" : "No";
}