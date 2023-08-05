
document.addEventListener('DOMContentLoaded', function () {
    // Get the dropdown element
    const dropdown = document.querySelector('.dropdown');

    // Get the dropdown span element (to toggle dropdown)
    const dropdownLabel = dropdown.querySelector('span');

    // Function to toggle the dropdown
    function toggleDropdown() {
        dropdown.classList.toggle('open');
    }

    // Add event listener to toggle the dropdown when the label is clicked
    dropdownLabel.addEventListener('click', toggleDropdown);

    // Get all the dropdown options (anchor elements) in an array
    const dropdownOptions = Array.from(dropdown.querySelectorAll('li a'));

    // Function to handle option selection
    function handleOptionSelection(event) {
        event.preventDefault(); // Prevent the default anchor link behavior
        const selectedOptionText = this.textContent;
        console.log(`Selected option: ${selectedOptionText}`);
        toggleDropdown(); // Close the dropdown after selection (you can customize this behavior)
    }

    // Add event listeners to each option to handle selection
    dropdownOptions.forEach(option => {
        option.addEventListener('click', handleOptionSelection);
    });
});
