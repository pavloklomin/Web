MyName='Pavlo';
MySurname='Klomin';
let gander = 'male';
let date_birth="2001-03-01";
class Person
{
    constructor(Name, Surname, gander,Date)
    {
        this.name = Name;
        this.surname = Surname;
        this.gander = gander;
        this.date_birth=Date;
    }
        surname_fiscal(Surname)
    {        
        const vowels_1 = "bcdfghjklmnpqrstvwxyzбвгджзйклмнпрстфхцчшщ";
        const vowels_2 = "eyuioaуеыаоэяиё";
        Surname = Surname.toLowerCase();
        let code = '';
                let count_letters=Surname.length;
        if(count_letters>=3)
        {
                for (let i of Surname)
            {
                    
                for (let j of vowels_1)
                {
                    if (j==i)  
                    {
                    code+=i;
                    break;
                    }                      
                }                    
                if(code.length>2) 
                break;     
            }
            if (code.length<3)
            {
                for (let i of Surname)
                {
                        
                    for (let j of vowels_2)
                    {
                        if (j==i)  
                        {
                        code+=i;
                        break;
                        }                      
                    }                    
                    if(code.length>2) 
                    break;     
                }

            }
        }
        else
        {
            code=Surname;
            for (let i = 0; i < (3 - count_letters); i++)
                code += 'x';
        }
        
            code=code.toUpperCase();
            return code;

        }

        name_fiscal(Name)
    {
        const vowels_1 = "bcdfghjklmnpqrstvwxyzбвгджзйклмнпрстфхцчшщ";
        const vowels_2 = "eyuioaуеыаоэяиё";
        Name = Name.toLowerCase();
        let code = '';
        let letters = 0;
        let count_letters=Name.length;
        if(count_letters>=3)
        {
            for (let i of Name)
            {
                    
                for (let j of vowels_1)
                {
                    if (j==i)  
                    {
                    code+=i;
                    break;
                    }                      
                }                    
                if(code.length>3) 
                {
                    code=code.replace(code[1],'')
                    break;
                }
                    
            }
            if (code.length<3)
            {
                for (let i of Name)
                {
                        
                    for (let j of vowels_2)
                    {
                        if (j==i)  
                        {
                        code+=i;
                        break;
                        }                      
                    }                    
                    if(code.length>2) 
                    break;     
                }

            }
        }
        else
        {
            code=Name;
            for (let i = 0; i < (3 - count_letters); i++)
                code += 'x';
        }

            code=code.toUpperCase();
            return code;

    }
    date_fiscal(male,date_birth){     
        var month=Number(date_birth[5]+date_birth[6]);        
        const letter_months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" }
        var code = '';
        code += date_birth[2] + date_birth[3] + letter_months[month] ;
        if (gander=='male')
        {
            code+=date_birth[8]+date_birth[9];
        }
        else{
            code+=Number(date_birth[8]+4)+date_birth[9];
        }
        //+ ((male) ? (this.day < 10) ? "0" + this.day : this.day : 40 + Number(this.day));
        return code;
    }
    get_fiscal_code()
    {
        return (this.surname_fiscal(this.surname) + this.name_fiscal(this.name) +  this.date_fiscal(this.gander,this.date_birth));
    }
}
 function output_fiscal_code()
{
	let human = new Person (MyName, MySurname, gander,date_birth);
	document.getElementById("fiscal_output").innerHTML = human.get_fiscal_code();
}



function harshad()
{
    var harsh=document.getElementById('harsh_value').value;
	let sum = 0;
    let num = harsh;
    var answer='';
	while (harsh >= 1)
	{
		sum += harsh%10;
		harsh = Math.trunc(harsh/10);
    }
    if  (num%sum==0)
     answer="Да";
    else
     answer="Нет";
	document.getElementById('harshad_output').innerHTML = answer;
}



function Rug_function()
{  
var  str= document.getElementById('rugInput').value;  
var Rug=str.split(',')
  if (Horizontal(Rug) && Vertical(Rug))
    document.getElementById('rugRes').innerHTML = "perfect rug";
  else {
      if(Horizontal(Rug))
        document.getElementById('rugRes').innerHTML ="horizontally symmetric";
    else if(Vertical(Rug))
        document.getElementById('rugRes').innerHTML ="vertically symmetric";
    else  document.getElementById('rugRes').innerHTML ="imperfect";
  }
}


function Horizontal(Rug)
  {
    for (let i=0; i<Math.floor(Rug.length/2); i++)
    {
      if (Rug.length%2 != 0)
      {
        if(i == Math.floor(Rug.length/2))
          continue;
      }
      for (let j=0; j<Rug[0].length; j++)
      {
        if (Rug[i][j] !== Rug[Rug.length - 1 - i][j])
        {
          return false;
        }
      }
    }
    return true;
  }
  function Vertical(Rug)
  {
    for (let j=0; j<Math.floor(Rug[0].length/2) ;j++)
    {
      if (Rug[0].length%2 != 0)
      {
        if(j == Math.floor(Rug[0].length/2))
          continue;
      }
      for (let i=0; i<Rug.length;i++)
      {
        if (Rug[i][j] !== Rug[i][Rug[0].length- 1 - j])
          return false;
      }
    }
    return true;
  }