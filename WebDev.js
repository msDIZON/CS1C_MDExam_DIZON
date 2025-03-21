let DSA = [];
let WebDev = [];

while (true) {
    let subject_choice = prompt("Select a subject to enroll:\n(A) DSA\n(B) WebDev\n(C) Select Another Subject\n(D) Exit").toUpperCase();
    
    if (subject_choice === "D") {
        console.log("Enrolled students:\nDSA:", DSA, "\nWebDev:", WebDev);
        break;
    }

    let subject_array = subject_choice === "A" ? DSA : subject_choice === "B" ? WebDev : null;
    
    if (!subject_array) {
        console.log("Invalid choice, please try again.");
        continue;
    }

    let operation = prompt("Choose an operation:\n(A) Enroll\n(B) Unenroll").toUpperCase();

    if (operation === "A") {
        let student = prompt("Enter student name:");
        subject_array.push(student);
    } else if (operation === "B") {
        let student = prompt("Enter student name to unenroll:");
        let index = subject_array.indexOf(student);
        if (index !== -1) subject_array.splice(index, 1);
    }

    console.log("DSA:", DSA);
    console.log("WebDev:", WebDev);
}
