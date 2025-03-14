const toolContainer = document.querySelector('.tool-container');
const input = document.getElementById("numberSearch");
console.log("input is", input);
let countryISO;
const countrySelector = document.getElementById("countryselector");

// Initialize intlTelInput
const itiCountrySelector = window.intlTelInput(countrySelector, {
    utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.0/build/js/utils.js",
    initialCountry: "us",
    separateDialCode: true,
});

// Function to update country name and dial code
function updateCountryInfo() {
    const countryData = itiCountrySelector.getSelectedCountryData();
    const dialCodeElement = document.querySelector(".iti__selected-dial-code");
    if (dialCodeElement) {
        dialCodeElement.textContent = `${countryData.name} (+${countryData.dialCode})`;
    }
    countryISO = countryData.iso2;
    console.log(countryISO);
}

// Call function on country change or input focus
countrySelector.addEventListener("countrychange", updateCountryInfo);
countrySelector.addEventListener("focus", updateCountryInfo);

// Initial call to set country name and dial code
updateCountryInfo();
document.addEventListener("DOMContentLoaded", function () {
    var checking_number = document.querySelector(".checking_number");
    var finalResult = document.querySelector(".finalResult");
    var list = document.querySelector(".numberLists");
    var initialContent = document.querySelector(".initialContent");

    if (checking_number) checking_number.style.display = "none";
    if (finalResult) finalResult.style.display = "none";
    if (list) list.style.display = "none";
    if (initialContent) initialContent.style.display = "block"; // Ensure initial content is shown

    var checkButton = document.querySelector(".checkNumBtn");
    if (checkButton) {
        checkButton.addEventListener("click", handleCheck);
    } else {
        console.log("Check button not found.");
    }
});

function goRegister() {
    console.log("in go register function");
    window.location = "https://app.krispcall.com/register";
}
function setCookie(name, value, minutes) {
    let date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}
function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}

// Function to handle button disabling based on cookies
function checkAttempts() {
    let attempts = getCookie("checkAttempts");
    let lastAttemptTime = getCookie("lastAttemptTime");

    if (!attempts) {
        setCookie("checkAttempts", 0, 2); // Initialize if not present
        attempts = 0;
    } else {
        attempts = parseInt(attempts);
    }

    let checkButton = document.querySelector(".checkNumBtn");

    if (attempts >= 4) {
        checkButton.disabled = true;
        let remainingTime = Math.max(
            120 - Math.floor((Date.now() - lastAttemptTime) / 1000),
            0
        );
        console.log(`Too many attempts. Please wait ${remainingTime} seconds.`);

        setTimeout(() => {
            setCookie("checkAttempts", 0, 2);
            checkButton.disabled = false;
            console.log("You can check again now.");
            location.reload();
        }, remainingTime * 1000);
    }
}
document
    .getElementById("check_num-btn")
    .addEventListener("click", async function (e) {
        e.preventDefault();
        // async function handleCheck() {
        console.log("in handleCheck");
        let attempts = getCookie("checkAttempts")
            ? parseInt(getCookie("checkAttempts"))
            : 0;

        if (attempts >= 4) {
            document.getElementById("countDisplay").innerHTML =
                "Your free attempts are over";
                
            console.log(
                "You have exceeded the limit. Please try again after 2 minutes."
            );
            return;
        }

        setCookie("checkAttempts", attempts + 1, 2);
        setCookie("lastAttemptTime", Date.now(), 2);


        checkAttempts(); // Check if attempts exceed the limit
        let checking_number = document.querySelector(".checking_number");
        let finalResult = document.querySelector(".finalResult");
        let list = document.querySelector(".numberLists");
        let initialContent = document.querySelector(".initialContent");
        toolContainer.classList.remove('beforeSearch');

        if (checking_number) checking_number.style.display = "block";
        if (finalResult) finalResult.style.display = "none";
        if (list) list.style.display = "none";
        if (initialContent) initialContent.style.display = "none"; // Ensure initial content is shown
        const countryData = itiCountrySelector.getSelectedCountryData();
        let countryName = document.querySelector(".iti__selected-dial-code");
        countryName.textContent = `${countryData.name} (+${countryData.dialCode})`;
        countryISO = countryData.iso2.toUpperCase();
        console.log(countryISO);

        const countryFlag = document.querySelectorAll('.resultContainer .iti__flag, .numberLists .iti__flag');
        countryFlag.forEach((flag) => {
            flag.classList.add(`iti__${countryISO.toLowerCase()}`);
        });

        try {
            console.log("Fetching data...");
            let response = await fetch("https://uat.safefamilyapp.com/get-numbers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ limit: 10, country: countryISO, locality: "" }),
            });
            let data = await response.json();

            console.log("Data from UAT:", data);

            // Extract dialing numbers if available, otherwise keep empty array
            let numbers =
                data && Array.isArray(data) ? data.map((n) => n.dialing_number) : [];

            console.log("Numbers from UAT:", numbers);

            // If numbers are less than 6, fetch from generator API
            if (numbers.length < 6) {
                console.log("Fetching additional numbers...");
                const urls = `https://freetoolsv2.marktivities.guru/api/phone/number-generator/?country=${encodeURIComponent(
                    countryISO
                )}`;

                try {
                    const response = await fetch(urls, {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    });
                    const generatorResult = await response.json();

                    console.log("Generator result:", generatorResult);

                    // Extract generator numbers if available
                    let generatedNumbers =
                        generatorResult.Data && Array.isArray(generatorResult.Data)
                            ? generatorResult.Data.slice(0, 6 - numbers.length)
                            : [];

                    // Append generated numbers to existing numbers
                    numbers = numbers.concat(generatedNumbers);
                } catch (error) {
                    console.log("Error fetching generator numbers:", error);
                }
            }

            // Ensure we only take the first 6 numbers
            numbers = numbers.slice(0, 6);

            console.log("Final numbers to display:", numbers);
            const maxItems = 6; // Total number of boxes available

            // Loop through available data (up to 6 items)
            for (let i = 0; i < maxItems; i++) {
                let number = numbers[i]; // Ensure data[i] exists before accessing its properties
                console.log("number is", number ? number : "No data");

                let element = document.querySelector(`.number-${i + 1}`);
                let genNumElement = element ? element.closest(".gen_num") : null; // Get the parent .gen_num element
                console.log("gen num element", genNumElement);

                if (genNumElement) {
                    // If there's a valid dialing number, display the box and update the number
                    if (number && number) {
                        element.innerText = number;
                        genNumElement.style.display = "inline-flex"; // Show the box
                    } else {
                        // If no valid number for this box, hide it
                        genNumElement.style.setProperty("display", "none", "important");
                    }
                }
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        document.getElementById("countDisplay").innerHTML = `${3 - attempts
            } <span class="highlights">free attempts</span> remaining`;
        //   let initialContent = document.querySelector(".initialContent");
        //   let checking_number = document.querySelector(".checking_number");
        let checkButton = document.getElementById("check_num-btn");
        checkButton.style.background = "#e0e0e0";
        checkButton.disabled = true;
        //   let list = document.querySelector(".numberLists");
        if (initialContent) {
            console.log("Hiding result container...");
            initialContent.style.display = "none";
        }

        if (checking_number) {
            console.log("Showing checking_number...");
            checking_number.style.display = "block";
        } else {
            console.log(".checking_number not found");
        }
        list.style.display = "block";

        //   let finalResult = document.querySelector(".finalResult");
        setTimeout(() => {
            list.style.display = "none";
            checkButton.disabled = false;
            checkButton.style.background = "#8733ff";
            checking_number.style.display = "none";
            finalResult.style.display = "block"; // Show the final result block

            // document.getElementById("validate").innerText = "Results for";
        }, 10000);
        const number = document.getElementById("numberSearch").value;
        console.log("number is", number);
        const url = `https://freetoolsv2.marktivities.guru/api/phone/checker/?country=${encodeURIComponent(
            countryISO
        )}&number=${encodeURIComponent(number)}`;
        console.log("url is", url);
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const jsonResult = await response.json(); // Parse the response body once

            console.log("jsonResult is", jsonResult); // Log the parsed JSON result

            // const phoneNumberBtn = document.querySelector(".phone-number-submit-btn");
            const resultDataContainer = document.querySelector(".resultData");
            console.log("result container is", resultDataContainer);
            const local_number = resultDataContainer.querySelector(".result-local");
            const localNumber = local_number.querySelectorAll("p")[1];
            console.log("local number is", localNumber);
            const result_validity = resultDataContainer.querySelector(
                ".result-validity span"
            );

            console.log("result validity is", result_validity);
            const result_country =
                resultDataContainer.querySelector(".result-country ");
            const resultCountry = result_country.querySelectorAll("p")[1];
            console.log("result country is", resultCountry);
            const result_city = resultDataContainer.querySelector(".result-city");
            const resultCity = result_city.querySelectorAll("p")[1];
            console.log("city is", resultCity);
            const result_region = resultDataContainer.querySelector(".result-region");
            const resultRegion = result_region.querySelectorAll("p")[1];
            console.log("result region is", resultRegion);
            const result_lineType =
                resultDataContainer.querySelector(".result-line_type");
            const line_type = result_lineType.querySelectorAll("p")[1];
            console.log("line type is", line_type);
            if (response.ok) {
                resultDataContainer.style.filter = "blur(0px)";
                line_type.textContent = jsonResult["line_type"];
                resultRegion.textContent = jsonResult["location"];

                resultCity.textContent = jsonResult["location"];
                resultCountry.textContent = jsonResult["country_name"];

                result_validity.textContent = jsonResult["valid"];
                localNumber.textContent = jsonResult["local_format"];

                // Replace or insert HTML dynamically based on the response data
            }
            if (jsonResult.Error) {
                line_type.textContent = "N/A";
                resultRegion.textContent = "N/A";
                resultCity.textContent = "N/A";
                resultCountry.textContent = "N/A";
                result_validity.textContent = "N/A";
                localNumber.textContent = "N/A";
                resultDataContainer.style.filter = "blur(5px)";
            }
        } catch (error) {
            console.log("in catch error", error);
        }

        const resultNumber = document.querySelector(".finalResult span");
        console.log("result number is", resultNumber);
        let input = document.getElementById("numberSearch");
        console.log("input is", input.value);
        resultNumber.textContent = input.value;
        // Progress bar logic
        let progressBar = document.querySelector(".progress-bar-status");
        console.log("progressBar is", progressBar);
        progressBar.style.width = "0%";
        progressBar.style.background = "#10bc3b";
        let currentProgress = 5;
        let interval = setInterval(() => {
            if (currentProgress <= 100) {
                progressBar.style.width = `${currentProgress}%`;

                document.getElementById("seconds").innerText =
                    10 - Math.floor(currentProgress / 10);
                if (currentProgress === 100) {

                    clearInterval(interval);
                    document.getElementById("seconds").innerText = 10;
                    progressBar.style.width = "5%"
                }
                currentProgress++;
            }
        }, 100);
        document
            .querySelector(".numbers_lists")
            .addEventListener("click", function (event) {
                if (
                    event.target.tagName === "SPAN" &&
                    event.target.className.startsWith("number-")
                ) {
                    window.location.href = "https://app.krispcall.com/register";
                }
            });

        // 🛑 Ensure it stays visible for at least 5 seconds
    });

input.addEventListener("beforeinput", function (e) {
    if (!/[0-9+\-]/.test(e.data) && e.data !== null) {
        e.preventDefault(); // Block invalid character
    }
});

input.addEventListener("input", () => {
    const inputLength = input.value.length;
    console.log("input length is", inputLength);
    const phoneNumberBtn = document.getElementById("check_num-btn");

    //handle error here like undefined and all
    if (inputLength > 0) {
        phoneNumberBtn.style.background = "#8733ff";
    } else {
        phoneNumberBtn.style.background = "#e0e0e0";
    }
});


