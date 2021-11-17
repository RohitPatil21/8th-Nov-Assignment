// Question one:
// Create an object and store the height and radius of a cylinder in it. Create a function to calculate the volume andsurface area of the cylinder

// Answer - 
const height = 15;
const radius = 20;
const pi=3.14

// function for calculate the volume of the cylender
function calculateVolume(height,radius){
    const volume = pi*radius*radius*height;            // formula of volume of cylender
    console.log("Volume is  " + volume);
}

// function for calculate the surface area of the cylender
function calculateSurfaceArea(height,radius){
    const result = 2*pi*radius*(radius+height);          // formula  of surface area of cylender
    console.log("Suraface Area is " + result)
}

calculateVolume(height,radius)
calculateSurfaceArea(height,radius)

