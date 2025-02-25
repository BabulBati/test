const items = [
    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_HubSpot_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Pipedrive_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Zapier_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_MSTeams_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_ZohoCRM_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Crisp_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_monday_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Capsule_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Front_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_noCRM_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Nimble_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Bitrix24_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Intercom_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Helpscout_logo.svg",
        text: "Help Scout",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Apptivo_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Engagebay_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/06/firmao_icon.png.png",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Gong_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_HighLevel_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Insightly_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Klaviyo_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Kommo_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Nutshell_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Pipedream_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Pipeline_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Salesloft_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Pabbly_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Keap_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Copper_logo1.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Outreach_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_CloseCRM_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Make_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Gorgias_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Ontraport_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Podio_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Salesmate_logo.svg",
        text: "Salesmate",
        category: ["CRM", "Sales Automation"],
        link: "/integration/salesmate/",
        status: "Available",
        new: "No",
        beta: "yes",
        description:
            "Bring better efficiency in your marketing campaigns, support processes, and outreach efforts to focus more on leads & customers.",
    },
    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Slack_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Zendesk_logo.svg",
        text: "Zendesk",
        category: ["Customer Support", "Collaboration"],
        link: "/integration/zendesk/",
        status: "Available",
        new: "No",
        beta: "yes",
        description:
            " Experience efficiency, personalization, and data integrity at its best.",
    },
    {
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/integration_newpage_Pipeliner_logo.svg",
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
        image:
            "https://krispcall.com/wp-content/uploads/2024/12/Request_an_integration_logo.svg",
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

