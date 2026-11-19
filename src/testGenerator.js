import generateShortCode from "./services/shortCode.service.js";

// Generate 5 random codes
for (let i=0; i<5; i++) {
    console.log(generateShortCode());
}

// Test configurable length
console.log("10 characters:", generateShortCode(10));

// Test invalid input
try {
    generateShortCode(-5);
} 
catch(error){
    console.log("Error:", error.message);
}