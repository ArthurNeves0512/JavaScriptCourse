/*
  is this class we learned about data handling.
  we saw that windows.prompts return to us a string 
 */
var namee = window.prompt("Insert your name: ")
/* 
    so, when i will try do some operations, like sum we can see that
    instead (inves de ) sum it will concatened
    and the solve of this, it is a type convertation.
    Number.parseInt(windows.prompt())
    Number(windows.prompt())
*/
namee = Number(namee)

var age = window.prompt("Inser your age: ")
age = Number(age)
window.alert()