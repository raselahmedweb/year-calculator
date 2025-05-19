document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.querySelector('#start-date').value = today;
    document.querySelector('#end-date').value = today;
    document.querySelector('#base-date').value = today;
    
    // Date Difference Calculator
    let diffCalc = document.querySelector('#calculate-difference');
    diffCalc.addEventListener('click', function() {
        const startDate = new Date(document.querySelector('#start-date').value);
        const endDate = new Date(document.querySelector('#end-date').value);
        
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            document.querySelector('#difference-result').textContent = 'Please enter valid dates';
            return;
        }
        
        const diffInMs = endDate - startDate;
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        
        let resultText = `Difference: ${Math.abs(diffInDays)} day${Math.abs(diffInDays) !== 1 ? 's' : ''} `;
        resultText += diffInDays >= 0 ? 'after' : 'before';
        
        document.querySelector('#difference-result').textContent = resultText;
    });
    
    // Add/Subtract Days Calculator
    let newDateCalc = document.querySelector('#calculate-new-date');
    newDateCalc.addEventListener('click', function() {
        const baseDate = new Date(document.querySelector('#base-date').value);
        const daysToAdd = parseInt(document.querySelector('#days-to-add').value);
        
        if (isNaN(baseDate.getTime()) || isNaN(daysToAdd)) {
            document.querySelector('#new-date-result').textContent = 'Please enter valid date and number of days';
            return;
        }
        
        const newDate = new Date(baseDate);
        newDate.setDate(newDate.getDate() + daysToAdd);
        
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = newDate.toLocaleDateString(undefined, options);
        
        document.querySelector('#new-date-result').textContent = `New Date: ${formattedDate}`;
    });
});