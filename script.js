function generateSubjectFields() {
    const numSubjects = parseInt(document.getElementById('numSubjects').value);
    const subjectFields = document.getElementById('subjectFields');
    
    if (numSubjects < 1 || numSubjects > 10) {
        alert('Please enter a valid number of subjects (1-10)');
        return;
    }
    
    subjectFields.innerHTML = '';
    
    for (let i = 1; i <= numSubjects; i++) {
        const fieldDiv = document.createElement('div');
        fieldDiv.className = 'subject-field';
        fieldDiv.innerHTML = `
            <input type="text" id="subject${i}" placeholder="Subject ${i} Name" required>
            <input type="number" id="marks${i}" placeholder="Marks (0-100)" min="0" max="100" required>
        `;
        subjectFields.appendChild(fieldDiv);
    }
    
    document.getElementById('generateBtn').style.display = 'block';
}

function generateMarksheet() {
    const name = document.getElementById('studentName').value;
    const rollNo = document.getElementById('rollNumber').value;
    const numSubjects = parseInt(document.getElementById('numSubjects').value);
    
    if (!name || !rollNo) {
        alert('Please fill in all required fields');
        return;
    }
    
    let subjects = [];
    let marks = [];
    let total = 0;
    
    for (let i = 1; i <= numSubjects; i++) {
        const subjectName = document.getElementById(`subject${i}`).value;
        const subjectMarks = parseInt(document.getElementById(`marks${i}`).value);
        
        if (!subjectName || isNaN(subjectMarks) || subjectMarks < 0 || subjectMarks > 100) {
            alert(`Please enter valid subject name and marks (0-100) for Subject ${i}`);
            return;
        }
        
        subjects.push(subjectName);
        marks.push(subjectMarks);
        total += subjectMarks;
    }
    
    const percentage = (total / (numSubjects * 100)) * 100;
    const grade = calculateGrade(percentage);
    const result = percentage >= 40 ? 'PASS' : 'FAIL';
    
    // Display marksheet
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayRoll').textContent = rollNo;
    
    const tableBody = document.getElementById('marksTableBody');
    tableBody.innerHTML = '';
    
    for (let i = 0; i < numSubjects; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${subjects[i]}</td>
            <td>${marks[i]}</td>
            <td>100</td>
        `;
        tableBody.appendChild(row);
    }
    
    document.getElementById('totalMarks').textContent = `${total} / ${numSubjects * 100}`;
    document.getElementById('percentage').textContent = `${percentage.toFixed(2)}%`;
    document.getElementById('grade').textContent = grade;
    
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
    resultElement.className = result === 'PASS' ? 'pass' : 'fail';
    
    // Hide form and show marksheet
    document.getElementById('inputForm').style.display = 'none';
    document.getElementById('marksheetDisplay').style.display = 'block';
}

function calculateGrade(percentage) {
    if (percentage >= 90) return 'A+';
    if (percentage >= 75) return 'A';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    if (percentage >= 40) return 'D';
    return 'F';
}

function printMarksheet() {
    window.print();
}

function resetForm() {
    document.getElementById('marksheetForm').reset();
    document.getElementById('subjectFields').innerHTML = '';
    document.getElementById('generateBtn').style.display = 'none';
    document.getElementById('inputForm').style.display = 'block';
    document.getElementById('marksheetDisplay').style.display = 'none';
}