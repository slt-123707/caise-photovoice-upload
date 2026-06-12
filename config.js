// CAISE Photovoice — Configuration
//
// 1. Create the Power Automate flow (see setup guide)
// 2. Paste the webhook URL below
// 3. Update student names if needed
// 4. Push to GitHub — the app auto-deploys
//
// Each student accesses the app via: https://diary.projectcaise.co.uk/?s=01

const CONFIG = {
  // Paste your Power Automate webhook URL here
  webhookUrl: "https://prod-41.uksouth.logic.azure.com:443/workflows/460043e77b8c4419a7c06cded6368662/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=WuytAhVPkmMdk7LK7NxEtQAAE3LGuxpE3ZAdQxhrVxo",

  // Study metadata
  title: "CAISE",
  subtitle: "My AI Diary",

  // Student list — only the name is needed now (no OneDrive links)
  students: {
    "01": { name: "Student 01" },
    "02": { name: "Student 02" },
    "03": { name: "Student 03" },
    "04": { name: "Student 04" },
    "05": { name: "Student 05" },
    "06": { name: "Student 06" },
    "07": { name: "Student 07" },
    "08": { name: "Student 08" },
    "09": { name: "Student 09" },
    "10": { name: "Student 10" },
    "11": { name: "Student 11" },
    "12": { name: "Student 12" },
    "13": { name: "Student 13" },
    "14": { name: "Student 14" },
    "15": { name: "Student 15" },
    "16": { name: "Student 16" },
    "17": { name: "Student 17" },
    "18": { name: "Student 18" },
    "19": { name: "Student 19" },
    "20": { name: "Student 20" },
    "21": { name: "Student 21" },
    "22": { name: "Student 22" },
  },
};
