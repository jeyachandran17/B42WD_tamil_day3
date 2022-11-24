// 1. iterate over all for loops( for, for..in, for..of, forEach)

// using for loop

var something ={
    "Name":"jeyachandran c",
    "age":"22",
    "gender":"male",
    "qualification":["10th","12th","UG-computer science"]
}
for(var i=0; i<something.qualification.length;i++)
{
    console.log(something.qualification[i]);
}

// using for..in

var something ={
    "Name":"jeyachandran c",
    "age":"22",
    "gender":"male",
    "qualification":["10th","12th","UG-computer science"]
}
for(var data in something)
{
    console.log(data, something[data]);
}

// using for..of

var something ={
    "Name":"jeyachandran c",
    "age":"22",
    "gender":"male",
    "qualification":["10th","12th","UG-computer science"]
}
for(var value of something.qualification)
{
    console.log(value);
}

// using foreach

var something ={
    "Name":"jeyachandran c",
    "age":"22",
    "gender":"male",
    "qualification":["10th","12th","UG-computer science"]
}
Object.keys(something).forEach(function(sample) {
console.log(sample+" : " +something[sample]);
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2. create own resume data in JSON format

// method 1 :
var My_resume = {
    "Name":"jeyachandran c",
    "age":"22",
    "gender":"male",
    "qualification":["10th","12th","UG-computer science"],
    "location":"theni",
    "nationality":"india",
    "languagesknown":["Tamil","English"],
    "status":"single",
    "hoby":"learn something & music"
}
console.log(My_resume);

// method 2

var My_resume = {
    "Name":"jeyachandran c",
    "age":"22",
    "gender":"male",
    "qualification":["10th","12th","UG-computer science"],
    "location":"theni",
    "nationality":"india",
    "languagesknown":["Tamil","English"],
    "status":"single",
    "hoby":"learn something & music"
}
for(var i in My_resume)
    {
        console.log(i+" : "+My_resume[i]);
    }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>