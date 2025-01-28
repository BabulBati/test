document.addEventListener('DOMContentLoaded', function () {

    const award = document.getElementById('more_awards');
    const awardList = award.querySelectorAll('.awards_items');
    const awardButton = document.getElementById('toggle_awards'); // Button to toggle visibility

    // Variable to keep track of whether awards are toggled
    let areAwardsVisible = false;

    // Function to update the visibility of awards based on screen width
    function updateGridItems() {
        let visibleCount = window.innerWidth < 768 ? 4 : window.innerWidth < 992 ? 8 : 16;

        // Show/hide the toggle button based on screen width
        awardButton.style.display = window.innerWidth >= 992 ? "none" : "block";

        // Loop through all the award items and adjust their visibility
        awardList.forEach((item, index) => {
            item.style.display = index < visibleCount || areAwardsVisible ? "block" : "none";
        });

        // Change the text of the button based on whether awards are shown or hidden
        awardButton.textContent = areAwardsVisible ? "See Less" : "See More";
    }

    // Function to toggle awards visibility
    function toggleAwards() {
        areAwardsVisible = !areAwardsVisible; // Toggle visibility state
        updateGridItems(); // Recalculate the visibility of items based on new state
    }

    // Add event listener for the toggle button
    if (awardButton) {
        awardButton.addEventListener('click', toggleAwards);
    }

    // Initial check and event listener for window resizing
    updateGridItems();
    window.addEventListener("resize", updateGridItems);

});
