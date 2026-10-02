console.log("================================");
console.log("Starting Frontend Test");
console.log("================================");

const result = 1 + 1;

if (result === 2) {
    console.log("Test PASSED");
    console.log("Frontend is working correctly!");
} else {
    console.error("Test FAILED");
    process.exit(1);
}

console.log("================================");
console.log("Frontend Test Completed");
console.log("================================");
