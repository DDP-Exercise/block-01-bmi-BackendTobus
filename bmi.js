"use strict";
/*******************************************************
 *     bmi.js
 *
 *     Write a small program that calculates the Body Mass Index according to parameters,
 *     given by the user. It should generate a textbased representation like the following:
 *
 *     -----------------------------------------------------
 *     Name:		         :LAST NAME:, :First name:
 *     -----------------------------------------------------
 *     Age:                  :age: Years
 *     Height:		         :size:m (i.e. 1,81m)
 *     Weight:	             :weight: kg
 *     Basal Metabolic Rate: <bmr> kcal
 *     Body Mass Index:	     <bmi>
 *     Normal Weight:        <Yes/No>
 *     Danger:		         <Yes/No>
 *     -----------------------------------------------------
 *
 *     To do so, collect data from your users. Values within :colons: are (formatted) user-inputs;
 *     values within <angle brackets> have to be calculated by your software.
 *
 *     You - 2026-03-05
 *******************************************************/

/*
 * TODO: Declare and assign all necessary constants and variables with user input.
 * Make sure, to help your users understand what they need to type in, by using clear prompt-instructions.
 */

const LINE = "-----------------------------------------------------";
let bmr, bmi, normal, danger;

/**
 * Formulas:
 *
 * BMR = A + B × weight [kg] + C × height [cm] − D × age [years]
 *      For women: A=655, B=10, C=2, D=6
 *      For men: A=66, B=14, C=5, D=7
 *
 * BMI = (10000 * weight [kg]) / height² [cm]
 *
 * Normal Weight = Any BMI between 18 and 25 (including 18 and 25).
 * Danger = Any BMI lower than 16 or 30+.
 **/

/*
 * TODO: To calculate the bmr; ask your users which calculation method they would prefer (male or female).
 * Be careful. Users make typos. Make sure that you have a valid answer before moving on.
 */

// TODO: To calculate the bmi, use the given formula with all the input you have collected.
// TODO: Once you have the bmi, determine whether or not the weight is normal and if the condition is dangerous.

/*
 * TODO: Create the correct output from all your data. Make sure to stick to the promised format! NO EXCEPTIONS!
 * You can use \t to add a Tab-Space. Once your program is completed, the output in the browser console should
 * look EXACTLY like the Example-Output above (with different data, of course).
 *
 *  Valid Example:
 *   -----------------------------------------------------
 *   Name:		           NEUWERSCH, Matthias
 *   -----------------------------------------------------
 *   Age:                  35 Years
 *   Height:               1,78m
 *   Weight:               77 kg
 *   Basal Metabolic Rate: 1789 kcal
 *   Body Mass Index:      24.302487059714682
 *   Normal Weight:        Yes
 *   Danger:               No
 *   -----------------------------------------------------
 */

console.log(LINE); // Logs the dashed-line.

/*
 * TODO: Make sure to TEST YOUR SOFTWARE! Does it work, when People are smaller than 1 meter? Or taller than 2?
 * Tip: An 18-Year old Woman, sized 160cm with 60 kg should have a BMR of 1467 kcal and a BMI of 23.4375.
 */
console.log("Welcome to your BMI calculator!")
let lastname = window.prompt("What is your Lastname?");
let firstname = window.prompt("What is your Firstname?");
let age = window.prompt("What is your Age?");
let height = window.prompt("What is your Height(in cm)?");
let weight = window.prompt("What is your Weight(in Kg)?");
let gender;
do{
    gender = window.prompt("What Gender do you prefer for the Calculation of the bmr(male/female)?)")
}while(gender.toLowerCase()!="male" && gender.toLowerCase()!="female")
console.log(LINE);
console.log("Name:\t\t\t\t\t"+ lastname + ", "+firstname);
console.log(LINE);
console.log("Age:\t\t\t\t\t"+age + " Years");
console.log("Height:\t\t\t\t\t"+height/100 + "m");
console.log("Weight:\t\t\t\t\t"+weight+ " kg");
function bmrcalc(A, B , C , D)
{
    bmr =  A + B * weight + C * height- D * age
    return "Basal Metabolic Rate:\t"+ bmr + " kcal";
}
if(gender.toLocaleLowerCase() === "male"){
    console.log(bmrcalc(66,14,5,7))
}
else if(gender.toLocaleLowerCase() === "female"){
    console.log(bmrcalc(655,10,2,6))
}
bmi = (10000 * weight) / (height)**2;
console.log("Body Mass Index: \t\t"+bmi);
bmi >=18 && bmi <= 25 ? normal = true : normal = false;
console.log("Normal Weight: \t\t\t"+normal);
bmi < 16 || bmi > 30 ? danger = true : danger = false;
console.log("Danger: \t\t\t\t"+danger);

//Testen: Grundsätzlich funktioniert der BMI Rechner noch, das Ergebnis ist jedoch nicht richtig.

