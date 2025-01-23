const items = [
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_HubSpot_logo.svg",
        text: "HubSpot",
        category: [
            "Customer Support",
            "CRM",
            "Sales Automation",
            "Marketing Automation",
        ],
        link: "/integration/hubspot-crm/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Popular",
        description:
            "Enhance your sales efforts with calls, SMS, and AI tools seamlessly integrated for better efficiency and deeper customer insights.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Pipedrive_logo.svg",
        text: "Pipedrive",
        category: ["CRM", "Sales Automation"],
        link: "/integration/pipedrive-crm/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Popular",
        description:
            "Integrate with Pipedrive to gain insights, track progress, and keep your sales and service teams in sync.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Zapier_logo.svg",
        text: "Zapier",
        category: ["Workflow Automation", "Productivity", "Data & Reporting"],
        link: "/integration/zapier/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Popular",
        description:
            "Make and receive calls, send texts, and automatically log all call activities, recordings, and voicemails in Zapier.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_MSTeams_logo.svg",
        text: "MS Teams",
        category: ["Collaboration", "Project Management", "Communication"],
        link: "/integration/microsoft-teams/",
        status: "Available",
        new: "No",
        beta: "No",
        type: ["Popular", "Latest"],
        description:
            "Make calls to customers directly from MS Teams and share contact information with your colleagues to foster collaboration.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_ZohoCRM_logo.svg",
        text: "Zoho CRM",
        category: ["CRM", "Sales Automation"],
        link: "/integration/zoho-crm/",
        status: "Available",
        new: "No",
        beta: "No",
        type: ["Popular", "Latest"],
        description:
            "Make and receive calls, listen to recorded calls, and quickly access call logs through Zoho CRM.",
    },
    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_ActiveCampaign_logo.svg",
        text: "ActiveCampaign",
        category: [
            "CRM",
            "Workflow Automation",
            "Sales Automation",
            "Marketing Automation",
        ],
        link: "/integration/activecampaign/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Popular",
        description:
            "Leverage automation to generate high-quality leads, enhance customer engagement and refine your marketing strategies.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Crisp_logo.svg",
        text: "Crisp",
        category: ["Customer Support"],
        link: "/integration/crisp/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Popular",
        description:
            "Interact with customers more conveniently with KrispCall + Crisp integration that consolidates more than just phone calls.",
    },
    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_MSDynamics365_logo.svg",
        text: "Microsoft Dynamics 365",
        category: ["CRM", "Sales Automation", "ERP"],
        link: "/integration/microsoft-dynamics-365/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Popular",
        description:
            "Enhance agent efficiency, refine processes, and personalize every interaction to meet individual needs.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_monday_logo.svg",
        text: "monday.com",
        category: [
            "CRM",
            "Sales Automation",
            "Collaboration",
            "Project Management",
        ],
        link: "/integration/monday/",
        status: "Available",
        new: "No",
        beta: "yes",
        type: ["Popular", "Latest"],
        description:
            "Transform your project management and communication processes by exchanging and synchronizing data seamlessly between the two.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Capsule_logo.svg",
        text: "Capsule",
        category: ["CRM", "Sales Automation"],
        link: "/integration/capsule-crm/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Popular",
        description:
            "Make and receive calls on Capsule, automatically logging all activities, texts, recordings, and voicemails.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Front_logo.svg",
        text: "Front",
        category: ["Customer Support", "Collaboration", "Help Desk"],
        link: "/integration/front/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Popular",
        description:
            "Achieve effortless data synchronization, enhance customer support, and keep track of call logs with analytics.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_noCRM_logo.svg",
        text: "noCRM.io",
        category: ["CRM", "Sales Automation"],
        link: "/integration/nocrm/",
        status: "Available",
        new: "No",
        beta: "No",
        type: ["Popular", "Latest"],
        description:
            "Eliminate repetitive tasks with streamlined sales workflows, enabling your representatives to close more deals effectively.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Nimble_logo.svg",
        text: "Nimble",
        category: ["CRM", "Sales Automation"],
        link: "/integration/nimble-crm/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Popular",
        description:
            "Make and receive calls on Nimble, automatically logging all activities, texts, recordings, and voicemails.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Bitrix24_logo.svg",
        text: "Bitrix24",
        category: [
            "CRM",
            "Sales Automation",
            "Collaboration",
            "Project Management",
        ],
        link: "/integration/bitrix24/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Popular",
        description:
            "Enhance communication and simplify operations with Bitrix24 integration into KrispCall.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Intercom_logo.svg",
        text: "Intercom",
        category: [
            "CRM",
            "Customer Support",
            "Sales Automation",
            "AI & Transcription",
            "Help Desk",
        ],
        link: "/integration/intercom/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Popular",
        description:
            "Achieve greater efficiency, accelerate your processes, and strengthen customer relationships with this integration.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Helpscout_logo.svg",
        text: "HelpScout",
        category: ["Customer Support", "Productivity", "Help Desk"],
        link: "/integration/help-scout/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Popular",
        description:
            "Streamline your support workflow and effortlessly manage all customer conversations while keeping your team focused.",
    },
    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Freshsales_logo.svg",
        text: "FreshSales",
        category: ["CRM", "Sales Automation"],
        link: "/integration/freshsales/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "",
        description:
            "Take your interactions with customers and project management to the next level with the powerful KrispCall and FreshSales integration.",
    },

    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Apptivo_logo.svg",
        text: "Apptivo",
        category: "CRM",
        link: "/integration/apptivo/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Latest",
        description:
            "Effortlessly manage customer, vendor, and partner interactions from a single platform.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Engagebay_logo.svg",
        text: "Engagebay",
        category: [
            "CRM",
            "Customer Support",
            "Sales Automation",
            "Marketing Automation",
        ],
        link: "/integration/engagebay/",
        status: "Available",
        new: "No",
        beta: "yes",
        type: "Latest",
        description:
            "Convert more qualified leads, boost sales, and elevate customer experience with improved call center efficiency and personalized interactions.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/06/firmao_icon.png.png",
        text: "Firmao",
        category: ["CRM", "Sales Automation", "ERP"],
        link: "/integration/firmao/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Latest",
        description:
            "Elevate your conversations, enhance your customer experience, and drive your business to success.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Gong_logo.svg",
        text: "Gong",
        category: ["CRM", "Sales Automation", "AI & Transcription"],
        link: "/integration/gong/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Latest",
        description:
            "Leverage conversational intelligence to enhance interactions between agents and potential clients.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_HighLevel_logo.svg",
        text: "HighLevel",
        category: [
            "CRM",
            "Sales Automation",
            "Collaboration",
            "Marketing Automation",
        ],
        link: "/integration/highlevel/",
        status: "Available",
        new: "No",
        beta: "yes",
        type: "Latest",
        description:
            "Achieve greater efficiency, accelerate your processes, and strengthen customer relationships with this integration.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Insightly_logo.svg",
        text: "Insightly",
        category: [
            "CRM",
            "Customer Support",
            "Sales Automation",
            "Marketing Automation",
        ],
        link: "/integration/insightly/",
        status: "Available",
        new: "No",
        beta: "yes",
        type: "Latest",
        description:
            "Ensure positive customer interactions, enhance your business telephony, and optimize your sales & support processes.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Klaviyo_logo.svg",
        text: "Klaviyo",
        category: [
            "CRM",
            "Sales Automation",
            "Marketing Automation",
            "AI & Transcription",
        ],
        link: "/integration/klaviyo/",
        status: "Available",
        new: "No",
        beta: "yes",
        type: "Latest",
        description:
            "Create personalized customer experiences with this integration and increase your sales conversion.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Kommo_logo.svg",
        text: "Kommo",
        category: ["CRM", "Customer Support", "Sales Automation"],
        link: "/integration/kommo-crm/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Latest",
        description:
            "Bring better efficiency in your marketing campaigns, support processes, and outreach efforts to focus more on leads & customers.",
    },

    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Nutshell_logo.svg",
        text: "Nutshell",
        category: ["CRM", "Sales Automation", "Marketing Automation"],
        link: "/integration/nutshell/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Latest",
        description:
            "Streamline telephony, boost productivity, eliminate manual tasks, and close more deals with this powerful combination.",
    },
    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_OnePageCRM_logo.svg",
        text: "OnePageCRM",
        category: ["CRM", "Sales Automation"],
        link: "/integration/onepagecrm/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Latest",
        description:
            "Enhance your CRM with KrispCall and OnePageCRM integration and unify your communication channels effortlessly.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Pipedream_logo.svg",
        text: "Pipedream",
        category: ["Workflow Automation", "Productivity", "Data & Reporting"],
        link: "/integration/pipedream/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Latest",
        description:
            "Enables you to create custom workflows, automate tasks, and connect KrispCall with a wide range of other applications and services.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Pipeline_logo.svg",
        text: "Pipeline",
        category: ["CRM", "Sales Automation"],
        link: "/integration/pipeline-crm/",
        status: "Available",
        new: "No",
        beta: "yes",
        type: "Latest",
        description:
            "Enhance sales and marketing strategies with every call logged, every interaction recorded, and every detail synced across platforms.",
    },
    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Salesflare_logo.svg",
        text: "Salesflare",
        category: ["CRM", "Sales Automation"],
        link: "/integration/salesflare/",
        status: "Available",
        new: "No",
        beta: "yes",
        type: "Latest",
        description:
            "Enhance business operation and telephony interaction strategies with Salesflare.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Salesloft_logo.svg",
        text: "Salesloft",
        category: ["CRM", "Sales Automation"],
        link: "/integration/salesloft/",
        status: "Available",
        new: "No",
        beta: "yes",
        type: "Latest",
        description:
            "Enhance flexibility and efficiency with data-driven insights for marketing campaigns and sales teams.",
    },
    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_TeamLeader_logo.svg",
        text: "TeamLeader",
        category: ["CRM", "Sales Automation", "Project Management"],
        link: "/integration/teamleader/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Latest",
        description:
            "Leverage these powerful cloud telephony and CRM software integration features to maximize your call center’s efficiency.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Pabbly_logo.svg",
        text: "Pabbly Connect",
        category: ["Workflow Automation", "Productivity", "Data & Reporting"],
        link: "/integration/pabbly-connect/",
        status: "Available",
        new: "No",
        beta: "No",
        description:
            "Automate mundane tasks, eliminate manual entry, and achieve consistent performance while unlocking a world of convenience at your fingertips.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Keap_logo.svg",
        text: "Keap",
        category: ["CRM", "Sales Automation", "Marketing Automation"],
        link: "/integration/keap/",
        status: "Available",
        new: "No",
        beta: "No",
        description:
            " Get more done, speed up operations, and enhance customer relationships with this feature-rich solution.",
    },
    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Integrately_logo.svg",
        text: "Integrately",
        category: ["Workflow Automation", "Productivity"],
        link: "/integration/integrately/",
        status: "Available",
        new: "No",
        beta: "No",
        description:
            "Reduce manual processes, ensure efficient telephony operations, and increase productivity using this handy combination.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Copper_logo1.svg",
        text: "Copper",
        category: ["CRM", "Sales Automation"],
        link: "/integration/copper-crm/",
        status: "Available",
        new: "No",
        beta: "No",
        description:
            "Transform the way you handle day-to-day telephony operations and business activities through automation.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Outreach_logo.svg",
        text: "Outreach",
        category: ["CRM", "Sales Automation", "Sales Automation"],
        link: "/integration/outreach-crm/",
        status: "Available",
        new: "No",
        beta: "yes",
        description:
            "Increase sales productivity and enable reps to close deals without switching between platforms using this powerful combination.",
    },

    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_LeadSquared_logo.svg",
        text: "LeadSquared",
        category: ["CRM", "Sales Automation", "Marketing Automation"],
        link: "/integration/leadsquared/",
        status: "Available",
        new: "No",
        beta: "No",
        description:
            "Effortlessly manage all customer interactions and information in one location and improve your agent efficiency.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_CloseCRM_logo.svg",
        text: "Close CRM",
        category: ["CRM", "Sales Automation"],
        link: "/integration/close-crm/",
        status: "Available",
        new: "No",
        beta: "No",
        description:
            "Foster trust and strengthen customer relationships with uninterrupted, professional-sounding interaction with this powerful duo.",
    },

    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Activepieces_logo.svg",
        text: "Activepieces",
        category: ["Workflow Automation", "Productivity"],
        link: "/integration/activepieces/",
        status: "Available",
        new: "No",
        beta: "No",
        description:
            "Create custom automation ‘pieces’ to streamline and automate workflows with KrispCall and Activepieces integration.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Make_logo.svg",
        text: "Make",
        category: ["Workflow Automation", "Productivity", "Data & Reporting"],
        link: "/integration/make/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Latest",
        description:
            "Optimize your workflows, automate routine tasks, and enhance telephony efficiency with this powerful, easy-to-use solution.",
    },

    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Gorgias_logo.svg",
        text: "Gorgias",
        category: ["Customer Support", "Ecommerce"],
        link: "/integration/gorgias/",
        status: "Available",
        new: "No",
        beta: "yes",
        description:
            "Automate all your time-consuming tasks and increase the efficiency of your customer service.",
    },

    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Ontraport_logo.svg",
        text: "Ontraport",
        category: ["CRM", "Sales Automation", "Marketing Automation"],
        link: "/integration/ontraport/",
        status: "Available",
        new: "No",
        beta: "yes",
        description:
            "Centralize customer interactions and information management to enhance agent productivity effectively.",
    },
    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Google_Contacts_logo.svg",
        text: "Google Contacts",
        category: "Communication",
        link: "/integration/google-contacts/",
        status: "Upcoming",
        new: "No",
        beta: "No",
        type: "Upcoming",
        description:
            "Sync, organize, control, and bring together contact information across multiple Google accounts in one place.",
    },
    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Google_Workspace_logo.svg",
        text: "Google Workspace",
        category: "",
        link: "/integration/google-workspace/",
        status: "Upcoming",
        new: "No",
        beta: "No",
        type: "Upcoming",
        description:
            "Utilize the familiar Google environment to share, create, and sync your data effortlessly.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Podio_logo.svg",
        text: "Podio",
        category: "",
        link: "/integration/podio/",
        status: "Upcoming",
        new: "No",
        beta: "No",
        type: "Upcoming",
        description:
            "Streamline tasks, coordinate projects, and get more done in less time and with fewer resources.",
    },
    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Salesforce_logo.svg",
        text: "Salesforce",
        category: "",
        link: "/integration/salesforce-crm/",
        status: "Upcoming",
        new: "No",
        beta: "no",
        type: "Upcoming",
        description:
            "Revolutionize the way you connect with customers, increase sales, and enhance your overall business performance.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Salesmate_logo.svg",
        text: "Salesmate",
        category: ["CRM", "Sales Automation"],
        link: "/integration/salesmate/",
        status: "Available",
        new: "No",
        beta: "No",
        type: "Upcoming",
        description:
            "Bring better efficiency in your marketing campaigns, support processes, and outreach efforts to focus more on leads & customers.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Slack_logo.svg",
        text: "Slack",
        category: "",
        link: "/integration/slack/",
        status: "Upcoming",
        new: "No",
        beta: "No",
        type: "Upcoming",
        description:
            "Centralize your team’s communication and access important updates and notifications without leaving Slack.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Zendesk_logo.svg",
        text: "Zendesk",
        category: "Help Desk",
        link: "/integration/zendesk/",
        status: "Upcoming",
        new: "No",
        beta: "No",
        type: "Upcoming",
        description:
            " Experience efficiency, personalization, and data integrity at its best.",
    },
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Pipeliner_logo.svg",
        text: "Pipeliner",
        category: ["CRM", "Sales Automation"],
        link: "/integration/pipeliner/",
        status: "Available",
        new: "No",
        beta: "yes",
        type: "Latest",
        description:
            "Enhance your sales efforts with intelligent conversation tools – calls, SMS, and smart analytics united for deeper customer insights and greater efficiency.",
    },
    //last- request an integration
    {
        image: "https://krispcall.com/wp-content/uploads/2024/12/Request_an_integration_logo.svg",
        text: "Request an Integration",
        category: [
            "CRM",
            "Workflow Automation",
            "Customer Support",
            "Productivity",
            "Sales Automation",
            "Collaboration",
            "Project Management",
            "Marketing Automation",
            "ERP",
            "AI & Transcription",
        ],
        link: "/request-an-integration/",
        type: ["Latest", "Upcoming", "Popular", "All"],
        description:
            "Can’t find an integration you’re searching for? Please let us know.",
    },
];

// === Elements ===
const exploreTabsContainer = document.getElementById("exploreTabs"); // Explore tabs container
const categoryTabsContainer = document.getElementById("categoryTabs"); // Category tabs container
const tabContentContainer = document.getElementById("tabContent"); // Shared content area
const exploreButton = document.querySelector(".explore"); // Explore button
const categoryButton = document.querySelector(".categories"); // Categories button
const categoryDropdown = document.getElementById("categoryDropdown"); // Dropdown container
const dropdownMenu = categoryDropdown.querySelector(".dropdown-menu"); // Dropdown menu
const dropdownToggle = categoryDropdown.querySelector(".dropdown-toggle"); // Dropdown button
const exploreTabTypes = ["Latest", "Upcoming", "Popular", "All"]; // Define explore tab types
const categories = [
    "CRM",
    "Workflow Automation",
    "Customer Support",
    "Productivity",
    "Sales Automation",
    "Collaboration",
    "Project Management",
    "Marketing Automation",
    "ERP",
    "AI & Transcription",
]; // Define categories

// Set initial button text to "Explore"
dropdownToggle.firstChild.textContent = "Explore ";

// Add Explore label and its options dynamically
const exploreLabel = document.createElement("li");
exploreLabel.classList.add("dropdown-item");
exploreLabel.textContent = "Explore";
exploreLabel.style.fontWeight = "bold"; // Make "Explore" bold
exploreLabel.style.cursor = "default"; // Make it unclickable
dropdownMenu.appendChild(exploreLabel);

// Populate the "Explore" section of the dropdown with dynamic values
exploreTabTypes.forEach((explore) => {
    const exploreLink = document.createElement("li");
    exploreLink.classList.add("dropdown-item");
    exploreLink.textContent = explore;
    exploreLink.addEventListener("click", () => {
        switchExploreTab(explore); // Event to handle Explore tab click
        updateDropdownButtonText(explore); // Update button text
        categoryDropdown.classList.remove("show"); // Close the dropdown
    });
    dropdownMenu.appendChild(exploreLink);
});

// Add Category label and its options dynamically
const categoryLabel = document.createElement("li");
categoryLabel.classList.add("dropdown-item");
categoryLabel.textContent = "Categories";
categoryLabel.style.fontWeight = "bold"; // Make "Category" bold
categoryLabel.style.cursor = "default"; // Make it unclickable
dropdownMenu.appendChild(categoryLabel);

// Populate the "Category" section of the dropdown with dynamic values
categories.forEach((category) => {
    const categoryLink = document.createElement("li");
    categoryLink.classList.add("dropdown-item");
    categoryLink.textContent = category;
    categoryLink.addEventListener("click", () => {
        switchCategoryTab(category); // Event to handle Category tab click
        updateDropdownButtonText(category); // Update button text
        categoryDropdown.classList.remove("show"); // Close the dropdown
    });
    dropdownMenu.appendChild(categoryLink);
});

// Toggle dropdown visibility on click
categoryDropdown
    .querySelector(".dropdown-toggle")
    .addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click event from bubbling up and closing the dropdown
        categoryDropdown.classList.toggle("show"); // Toggle the dropdown visibility
    });

// Close the dropdown if the user clicks anywhere outside of it
window.addEventListener("click", function (event) {
    if (!categoryDropdown.contains(event.target)) {
        categoryDropdown.classList.remove("show");
    }
});

// Function to update dropdown button text
function updateDropdownButtonText(selectedText) {
    dropdownToggle.firstChild.textContent = selectedText + " ";
}

// Initially, both explore and categories sections are visible, and buttons' text color is #8733FF
exploreTabsContainer.style.display = "flex";
categoryTabsContainer.style.display = "flex";
exploreButton.style.color = "#8733FF"; // Set Explore button text color to #8733FF when visible
categoryButton.style.color = "#8733FF"; // Set Categories button text color to #8733FF when visible

// === Generate Explore Tabs ===
exploreTabTypes.forEach((tab) => {
    const tabButton = document.createElement("button");
    tabButton.classList.add("tab-button");
    tabButton.textContent = tab;

    // Check if the tab is 'Upcoming'
    if (tab === "Upcoming") {
        // Create the SVG element for the Upcoming tab
        const svgIcon = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );
        svgIcon.setAttribute("width", "24"); // Width of the SVG icon
        svgIcon.setAttribute("height", "24"); // Height of the SVG icon
        svgIcon.setAttribute("viewBox", "0 0 24 24"); // Viewbox ensures correct scaling
        svgIcon.setAttribute("fill", "none"); // We set the default fill to 'none' for now

        // Create the <path> element using the provided SVG path
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute(
            "d",
            "M13.28 8.87506V2.79006C13.31 2.64006 13.254 2.28406 12.787 2.06506C12.38 1.87406 11.937 2.15606 11.804 2.33906C9.77501 5.57906 5.98901 12.3961 5.84101 12.7381C5.65401 13.1701 5.78101 13.4401 5.95901 13.6381C6.09101 13.7881 6.40701 13.8761 6.57601 13.8761H10.692L9.81401 21.3211C9.82701 21.4931 9.96901 21.8661 10.441 21.9791C10.913 22.0921 11.238 21.7511 11.341 21.5671L18.071 10.1791C18.169 10.0291 18.371 9.62906 18.156 9.27906C18.0735 9.14891 17.9579 9.04302 17.821 8.97221C17.6841 8.9014 17.5309 8.86822 17.377 8.87606L13.28 8.87506Z"
        );
        path.setAttribute("fill", "#FF8D00"); // Apply the fill color to the path

        // Append the path to the SVG
        svgIcon.appendChild(path);

        // Append the SVG icon next to the "Upcoming" tab text
        tabButton.appendChild(svgIcon);
    }

    // Attach event listener for tab switch
    tabButton.addEventListener("click", () => switchExploreTab(tab));

    exploreTabsContainer.appendChild(tabButton);
});

// === Generate Category Tabs ===
categories.forEach((category) => {
    const tabButton = document.createElement("button");
    tabButton.classList.add("tab-button");
    tabButton.textContent = category;

    tabButton.addEventListener("click", () => switchCategoryTab(category)); // Attach event listener for category switch
    categoryTabsContainer.appendChild(tabButton);
});

// Unified function to render items
function renderItems(
    filterFunction,
    categoryName,
    isCategoryTab = false,
    isAllTab = false
) {
    // Clear existing content
    tabContentContainer.innerHTML = "";

    // Create a category name heading
    const sectionHeading = document.createElement("h3");
    sectionHeading.classList.add("category-name");
    if (!isCategoryTab) {
        sectionHeading.textContent = `${categoryName} Integrations`;
    } else {
        sectionHeading.textContent = categoryName; // For category tabs, no "Integrations" in heading
    }
    tabContentContainer.appendChild(sectionHeading);

    // Create a container for items
    const categoryItemsDiv = document.createElement("div");
    categoryItemsDiv.classList.add("category-items");

    // Separate the last item from the rest
    const lastItem = items[items.length - 1]; // The last item
    const otherItems = items.slice(0, -1); // All items except the last one

    // Define high-priority items for CRM
    const highPriorityItems = [
        "HubSpot",
        "Pipedrive",
        "Zoho CRM",
        "Microsoft Dynamics 365",
    ];

    // Filter and sort the other items based on the tab type
    const filteredItems = otherItems
        .filter((item) => {
            // Handle "Popular" Tab
            if (categoryName === "Popular") {
                return Array.isArray(item.type)
                    ? item.type.includes("Popular")
                    : item.type === "Popular";
            }

            // Handle "Latest" Tab
            if (categoryName === "Latest") {
                return Array.isArray(item.type)
                    ? item.type.includes("Latest")
                    : item.type === "Latest";
            }

            // Handle "Upcoming" Tab
            if (categoryName === "Upcoming") {
                return Array.isArray(item.type)
                    ? item.type.includes("Upcoming")
                    : item.type === "Upcoming";
            }

            if (categoryName === "All") {
                return !item.type || (item.type !== "Upcoming" && !item.type.includes("Upcoming"));
            }

            if (categoryName && typeof categoryName === "string") {
                const matchesCategory = Array.isArray(item.category)
                    ? item.category.includes(categoryName)
                    : item.category === categoryName;
                return matchesCategory;
            }

            // Default condition for other tabs
            return true; // No filtering, showing all items by default
        })
        .sort((a, b) => {
            if (categoryName === "Popular") {
                return 0; // Skip sorting, retain original order
            }
            if (categoryName === "CRM") {
                // Prioritize high-priority items for CRM
                const aPriority = highPriorityItems.indexOf(a.text);
                const bPriority = highPriorityItems.indexOf(b.text);
                if (aPriority !== -1 || bPriority !== -1) {
                    if (aPriority === -1) return 1; // Non-priority items go after high-priority items
                    if (bPriority === -1) return -1; // Non-priority items go after high-priority items
                    return aPriority - bPriority; // Sort by priority order
                }
                return a.text.localeCompare(b.text); // Alphabetical sort for others
            }

            // Sorting for other tabs
            if (categoryName === "Latest" || categoryName === "Upcoming") {
                return a.text.localeCompare(b.text); // Alphabetical ascending order
            }

            return 0; // No specific sorting for other cases
        });

    // Render filtered and sorted items
    filteredItems.forEach((item) => {
        const itemElement = createItemElement(item);
        categoryItemsDiv.appendChild(itemElement);
    });

    // Always display the last item at the end, with the request link
    if (filterFunction(lastItem)) {
        const lastItemElement = createItemElement(lastItem);
        lastItemElement.classList.add("last-item");
        // Create the request link specifically for the last item
        const requestLink = document.createElement("a");
        requestLink.href = "/request-an-integration/";
        requestLink.target = "_blank";
        requestLink.textContent = "Request an integration";

        const svgIcon = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );
        svgIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgIcon.setAttribute("width", "25");
        svgIcon.setAttribute("height", "24");
        svgIcon.setAttribute("viewBox", "0 0 25 24");
        svgIcon.setAttribute("fill", "none");
        svgIcon.innerHTML = `
      <path d="M20.667 12H4.66699" stroke="#8733FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
      <path d="M13.6348 19.6607L20.2076 13.0879C20.3512 12.9455 20.4652 12.7761 20.5429 12.5893C20.6208 12.4026 20.6608 12.2024 20.6608 12.0001C20.6608 11.7978 20.6208 11.5976 20.5429 11.4109C20.4652 11.2241 20.3512 11.0547 20.2076 10.9124L13.6348 4.33948" stroke="#8733FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    `;
        requestLink.appendChild(svgIcon);

        // Append the link to the last item
        lastItemElement.appendChild(requestLink);

        categoryItemsDiv.appendChild(lastItemElement);
    }

    // Append the items container to the main container
    tabContentContainer.appendChild(categoryItemsDiv);
}

// Global variables to track active tabs
let activeExploreTab = null;
let activeCategoryTab = null;

// === Switch Explore Tab ===
function switchExploreTab(tab) {
    // Check if the tab is already active, if so, return to avoid unnecessary updates
    if (activeExploreTab === tab) return;

    // Deactivate any active Category tab
    if (activeCategoryTab !== null) {
        document.querySelectorAll("#categoryTabs .tab-button").forEach((button) => {
            button.classList.remove("active");
            button.style.color = ""; // Reset color for inactive category tabs
        });
        activeCategoryTab = null; // Clear active category tab
    }

    // Set active Explore tab and apply the color
    activeExploreTab = tab;

    // Remove 'active' class from all Explore tabs and reset background color
    document.querySelectorAll("#exploreTabs .tab-button").forEach((button) => {
        button.classList.remove("active");
        button.style.color = ""; // Reset color for inactive explore tabs
    });

    // Add 'active' class and set background color for the clicked tab
    const exploreTabButton = Array.from(
        document.querySelectorAll("#exploreTabs .tab-button")
    ).find((button) => button.textContent.trim() === tab);
    if (exploreTabButton) {
        exploreTabButton.classList.add("active");
        exploreTabButton.style.color = "#8733FF"; // Set color for the active tab
    }

    // Render items for the selected Explore tab
    const isAllTab = tab === "All"; // Check if it's the "All" tab
    let filterFunction = (item) => true; // Default: show all items for the "All" tab
    if (!isAllTab) {
        filterFunction = (item) => item.type === tab; // Only show items that match the current tab type
    }

    renderItems(
        filterFunction,
        tab,
        false, // Category tabs are not active here
        isAllTab // Apply special logic for "All" tab
    );

    // Scroll the Explore tabs container into view smoothly
    document
        .querySelector(".integration-search")
        .scrollIntoView({ behavior: "smooth", block: "start" });
}

// === Switch Category Tab ===
function switchCategoryTab(category) {
    // Check if the tab is already active, if so, return to avoid unnecessary updates
    if (activeCategoryTab === category) return;

    // Deactivate any active Explore tab
    if (activeExploreTab !== null) {
        document.querySelectorAll("#exploreTabs .tab-button").forEach((button) => {
            button.classList.remove("active");
            button.style.color = ""; // Reset color for inactive explore tabs
        });
        activeExploreTab = null; // Clear active explore tab
    }

    // Set active Category tab and apply the color
    activeCategoryTab = category;

    // Remove 'active' class from all Category tabs and reset background color
    document.querySelectorAll("#categoryTabs .tab-button").forEach((button) => {
        button.classList.remove("active");
        button.style.color = ""; // Reset color for inactive category tabs
    });

    // Add 'active' class and set background color for the clicked tab
    const categoryTabButton = Array.from(
        document.querySelectorAll("#categoryTabs .tab-button")
    ).find((button) => button.textContent.trim() === category);
    if (categoryTabButton) {
        categoryTabButton.classList.add("active");
        categoryTabButton.style.color = "#8733FF"; // Set color for the active tab
    }

    // Render items for the selected Category tab
    renderItems(
        (item) =>
            Array.isArray(item.category)
                ? item.category.includes(category)
                : item.category === category,
        category,
        true, // Sorting should be applied for category tabs
        false // "All" tab flag is false for category tabs
    );

    // Scroll the Category tabs container into view smoothly
    document
        .querySelector(".integration-search")
        .scrollIntoView({ behavior: "smooth", block: "start" });
}

// === Handle Explore Button Click ===
exploreButton.addEventListener("click", () => {
    if (exploreTabsContainer.style.display === "flex") {
        exploreTabsContainer.style.display = "none"; // Hide
        exploreButton.style.color = ""; // Reset button text color

        // Rotate Explore button SVG icon by 180 degrees when closed
        const exploreIcon = exploreButton.querySelector(".explore-icon");
        exploreIcon.style.transform = "rotate(180deg)";
    } else {
        exploreTabsContainer.style.display = "flex"; // Show
        exploreButton.style.color = "#8733FF"; // Set button text color to #8733FF

        // Reset Explore button SVG icon rotation to 0 degrees when opened
        const exploreIcon = exploreButton.querySelector(".explore-icon");
        exploreIcon.style.transform = "rotate(0deg)";
    }
});

// === Handle Categories Button Click ===
categoryButton.addEventListener("click", () => {
    if (categoryTabsContainer.style.display === "flex") {
        categoryTabsContainer.style.display = "none"; // Hide
        categoryButton.style.color = ""; // Reset button text color

        // Rotate Categories button SVG icon by 180 degrees when closed
        const categoriesIcon = categoryButton.querySelector(".categories-icon");
        categoriesIcon.style.transform = "rotate(180deg)";
    } else {
        categoryTabsContainer.style.display = "flex"; // Show
        categoryButton.style.color = "#8733FF"; // Set button text color to #8733FF

        // Reset Categories button SVG icon rotation to 0 degrees when opened
        const categoriesIcon = categoryButton.querySelector(".categories-icon");
        categoriesIcon.style.transform = "rotate(0deg)";
    }
});

// === ADDED SEARCH FUNCTIONALITY ONLY ===
// === UPDATED SEARCH FUNCTIONALITY ONLY ===

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchResultsDropdown = document.getElementById(
        "searchResultsDropdown"
    );
    const clearSearch = document.getElementById("clearSearch");
    const searchIcon = document.getElementById("searchIcon");
    // const tabContentContainer = document.getElementById('tabContentContainer'); // Make sure this is defined

    // Render dropdown results based on query
    function renderDropdownResults(query) {
        searchResultsDropdown.innerHTML = ""; // Clear previous results
        searchResultsDropdown.style.display = "none"; // Hide dropdown by default

        if (!query.trim()) return; // Don't render anything if query is empty

        const filteredItems = items.filter((item) =>
            item.text.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredItems.length === 0) {
            searchResultsDropdown.innerHTML =
                '<div class="searched-item">No integrations found</div>';
        } else {
            filteredItems.forEach((item) => {
                const resultElement = document.createElement("div");
                resultElement.classList.add("searched-item");
                resultElement.textContent = item.text;

                // Handle item click
                resultElement.addEventListener("click", () => {
                    searchInput.value = item.text; // Set the search input value to the clicked item text
                    renderSelectedItem(item);
                    searchResultsDropdown.style.display = "none"; // Hide dropdown after selection
                });

                searchResultsDropdown.appendChild(resultElement);
            });
        }

        searchResultsDropdown.style.display = "block"; // Show dropdown
    }

    // Render the selected item's content in tabContentContainer
    function renderSelectedItem(item) {
        // Clear previous content
        tabContentContainer.innerHTML = "";

        const itemElement = createItemElement(item);

        // Create categoryItemsDiv container if it doesn't exist
        const categoryItemsDiv = document.createElement("div");
        categoryItemsDiv.classList.add("category-items");

        categoryItemsDiv.appendChild(itemElement);

        // Add to container
        tabContentContainer.appendChild(categoryItemsDiv);
    }

    // Listen to search input for dropdown
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value;
        if (query.trim() === "") {
            // renderAllExploreContent(); // Reset when input is cleared
            searchResultsDropdown.style.display = "none"; // Hide dropdown
        } else {
            renderDropdownResults(query); // Update dropdown when typing
        }
    });

    // Function to render items based on the active tab
    function renderItemsForActiveTab() {
        if (activeExploreTab) {
            // Render items for the currently active Explore tab
            const isAllTab = activeExploreTab === "All";
            renderItems(
                isAllTab ? (item) => true : (item) => item.type === activeExploreTab,
                activeExploreTab,
                false,
                isAllTab
            );
        } else if (activeCategoryTab) {
            // Render items for the currently active Category tab
            renderItems(
                (item) =>
                    Array.isArray(item.category)
                        ? item.category.includes(activeCategoryTab)
                        : item.category === activeCategoryTab,
                activeCategoryTab,
                true,
                false
            );
        } else {
            renderAllExploreContent();
        }
    }

    // Function to handle input events
    function handleInput() {
        clearSearch.style.display = searchInput.value ? "block" : "none";
        if (window.innerWidth <= 991 && window.innerWidth >= 768) {
            searchIcon.style.display = searchInput.value ? "none" : "block";
        } else {
            searchIcon.style.display = "block";
        }
    }

    // Function to handle clear button click
    function handleClear() {
        searchInput.value = ""; // Clear the search input
        clearSearch.style.display = "none"; // Hide the clear icon
        searchResultsDropdown.style.display = "none"; // Close dropdown
        renderItemsForActiveTab(); // Re-render items for the current active tab
        if (window.innerWidth <= 991 && window.innerWidth >= 768) {
            searchIcon.style.display = "block"; // Show the search icon
        }
    }

    // Add event listeners
    searchInput.addEventListener("input", handleInput);
    clearSearch.addEventListener("click", handleClear);

    // Update on window resize
    window.addEventListener("resize", handleInput);

    // Initialize the correct state
    handleInput();

    // Example: Simulate active tab change (replace with your existing tab switching logic)
    document.querySelectorAll(".tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            const tabType = tab.dataset.tabType; // Assuming tab elements have a `data-tab-type` attribute
            if (tabType === "explore") {
                switchExploreTab(tab.textContent.trim());
            } else if (tabType === "category") {
                switchCategoryTab(tab.textContent.trim());
            }
        });
    });
});

// === END OF SEARCH FUNCTIONALITY ===

// Existing function to render all Explore content
// Function to render all Explore content
function renderAllExploreContent() {
    tabContentContainer.innerHTML = ""; // Clear content

    // Render "Popular" tab first
    renderTabContent("Popular");

    // Render all other tabs, excluding "Popular", "Upcoming", and "All"
    const tabsToRender = exploreTabTypes.filter(
        (tab) => tab !== "Upcoming" && tab !== "Popular" && tab !== "All"
    );
    tabsToRender.forEach((tab) => renderTabContent(tab));

    // Special handling for "All" tab
    const allTabItems = items; // Use all items for the "All" tab
    renderTabContent("All", allTabItems, true); // Add true to indicate "All" tab
}

// Function to render content for a given tab
function renderTabContent(tab, overrideItems = null, isAllTab = false) {
    const sectionHeading = document.createElement("h3");
    sectionHeading.textContent = `${tab} Integrations`;
    tabContentContainer.appendChild(sectionHeading);

    const categoryItemsDiv = document.createElement("div");
    categoryItemsDiv.classList.add("category-items2");

    // Determine the items to render
    const filteredItems =
        overrideItems ||
        items.filter((item) =>
            Array.isArray(item.type) ? item.type.includes(tab) : item.type === tab
        );

    // Extract the last item to ensure it's always displayed last
    const lastItem = filteredItems.pop();

    // Handle sorting based on tab
    if (tab === "Popular") {
        // Retain the original order of items
    } else if (tab === "All") {
        const highPriorityItems = [
            "HubSpot",
            "Pipedrive",
            "Zapier",
            "Zoho CRM",
            "MS Teams",
        ];

        // Separate the high-priority items and others
        const prioritizedItems = filteredItems.filter((item) =>
            highPriorityItems.includes(item.text)
        );
        const otherItems = filteredItems.filter(
            (item) => !highPriorityItems.includes(item.text)
        );

        // Sort other items in ascending order by their name
        otherItems.sort((a, b) => a.text.localeCompare(b.text));

        // Combine prioritized items first, then other items
        filteredItems.length = 0; // Clear filteredItems array
        filteredItems.push(...prioritizedItems, ...otherItems);
    } else if (tab === "Latest") {
        // Sort "Latest" tab in ascending order
        filteredItems.sort((a, b) => a.text.localeCompare(b.text));
    }

    // Add the last item back at the end
    if (lastItem) {
        filteredItems.push(lastItem);
    }

    const itemsToDisplay = filteredItems.slice(0, filteredItems.length - 1); // Exclude the last item for display count

    const initialDisplayCount = isAllTab ? 15 : itemsToDisplay.length; // Show 15 items for "All" tab, all for others
    const displayedItems = itemsToDisplay.slice(0, initialDisplayCount);

    displayedItems.forEach((item) => {
        categoryItemsDiv.appendChild(createItemElement(item));
    });

    tabContentContainer.appendChild(categoryItemsDiv);

    if (isAllTab && itemsToDisplay.length > initialDisplayCount) {
        const seeMoreButton = document.createElement("button");
        seeMoreButton.textContent = "Load more integrations";
        seeMoreButton.classList.add("load-more-btn");
        tabContentContainer.appendChild(seeMoreButton);

        seeMoreButton.addEventListener("click", () => {
            switchExploreTab("All");
        });
    }
}

// Helper function to create item elements
function createItemElement(item) {
    const itemElement = document.createElement("a");
    itemElement.href = item.link;
    itemElement.target = "_blank";
    itemElement.classList.add("item");

    const logoTag = document.createElement("div");
    logoTag.classList.add("logo_tag-div");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("item-image");

    const imageElement = document.createElement("img");
    imageElement.src = item.image || "path/to/default/image.png"; // Fallback image
    imageElement.alt = item.text;

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");

    const itemTextElement = document.createElement("h6");
    itemTextElement.classList.add("item-text");
    itemTextElement.textContent = item.text;

    const categoryElement = document.createElement("div");
    categoryElement.classList.add("item-description");
    categoryElement.textContent = item.description;

    textContainer.appendChild(itemTextElement);
    textContainer.appendChild(categoryElement);
    logoTag.appendChild(imageDiv)
    imageDiv.appendChild(imageElement);
    itemElement.appendChild(logoTag);
    itemElement.appendChild(textContainer);

    // Safeguarded condition to append itemTag if item.new or item.beta exists
    if (
        (typeof item.new === "string" && item.new.toLowerCase() === "yes") ||
        (typeof item.beta === "string" && item.beta.toLowerCase() === "yes")
    ) {
        const itemTag = document.createElement("div");
        itemTag.classList.add("item-tag");

        const tagText = document.createElement("span");
        tagText.textContent =
            typeof item.new === "string" && item.new.toLowerCase() === "yes"
                ? "New"
                : "Beta";

        itemTag.appendChild(tagText); // Add text to the tag
        logoTag.appendChild(itemTag); // Append itemTag to imageDiv
    }

    return itemElement;
}

// Initial setup on page load
document.addEventListener("DOMContentLoaded", () => {
    renderAllExploreContent();
});
