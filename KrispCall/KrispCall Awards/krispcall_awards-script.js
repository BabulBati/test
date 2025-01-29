document.addEventListener('DOMContentLoaded', () => {
    const award = document.getElementById('more_awards');
    const awardList = award.querySelectorAll('.awards_items');
    const awardButton = document.getElementById('toggle_awards');
    let areAwardsVisible = false;

    const updateGridItems = () => {
        const visibleCount = window.innerWidth < 768 ? 4 : window.innerWidth < 992 ? 8 : awardList.length;
        awardButton.style.display = window.innerWidth >= 992 ? "none" : "flex";

        awardList.forEach((item, index) =>
            item.classList.toggle('deactive_items', !(index < visibleCount || areAwardsVisible))
        );

        awardButton.textContent = areAwardsVisible ? "See Less" : "See More";
    };

    awardButton?.addEventListener('click', () => {
        areAwardsVisible = !areAwardsVisible;
        updateGridItems();
    });

    updateGridItems();
    window.addEventListener("resize", updateGridItems);
});
