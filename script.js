// Checkbox functionality
const checkboxes = document.querySelectorAll('.checkbox-input');
const doneButton = document.querySelector('.done-button');

// Add event listeners to checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log(`${this.parentElement.parentElement.querySelector('.page-label').textContent} is ${this.checked ? 'checked' : 'unchecked'}`);
    });
});

// Done button functionality
doneButton.addEventListener('click', function() {
    const checkedPages = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const pageName = checkbox.parentElement.parentElement.querySelector('.page-label').textContent;
            checkedPages.push(pageName);
        }
    });
    
    if (checkedPages.length > 0) {
        console.log('Selected pages:', checkedPages);
        alert(`You have selected: ${checkedPages.join(', ')}`);
    } else {
        console.log('No pages selected');
        alert('No pages selected');
    }
});

// Optional: Add keyboard accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.classList.contains('checkbox-input')) {
        e.target.click();
    }
});
