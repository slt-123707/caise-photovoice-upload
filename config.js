// CAISE Photovoice — Configuration
//
// 1. Create the Power Automate flow (see setup guide)
// 2. Paste the webhook URL below
// 3. Update student names if needed
// 4. Push to GitHub — the app auto-deploys
//
// Each student accesses the app via: https://diary.projectcaise.co.uk/?s=TOKEN

const CONFIG = {
  // Paste your Power Automate webhook URL here
  webhookUrl: "https://prod-41.uksouth.logic.azure.com:443/workflows/460043e77b8c4419a7c06cded6368662/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=WuytAhVPkmMdk7LK7NxEtQAAE3LGuxpE3ZAdQxhrVxo",

  // Study metadata
  title: "CAISE",
  subtitle: "My AI Diary",

  // Student list — keyed by opaque token (each student gets a unique URL)
  // URL format: https://diary.projectcaise.co.uk/?s=TOKEN
  students: {
    "5bde328a": { id: "01", name: "Student 01" },
    "604ad3b9": { id: "02", name: "Student 02" },
    "43c1069d": { id: "03", name: "Student 03" },
    "e9758ad1": { id: "04", name: "Student 04" },
    "21de85f0": { id: "05", name: "Student 05" },
    "92b8f361": { id: "06", name: "Student 06" },
    "90436d8e": { id: "07", name: "Student 07" },
    "5a9df34e": { id: "08", name: "Student 08" },
    "786b3954": { id: "09", name: "Student 09" },
    "39c0b7af": { id: "10", name: "Student 10" },
    "8cd0b6a5": { id: "11", name: "Student 11" },
    "10b78cda": { id: "12", name: "Student 12" },
    "05d8963b": { id: "13", name: "Student 13" },
    "1e645bf7": { id: "14", name: "Student 14" },
    "d0b928ae": { id: "15", name: "Student 15" },
    "e950d836": { id: "16", name: "Student 16" },
    "e0a28694": { id: "17", name: "Student 17" },
    "8f42a596": { id: "18", name: "Student 18" },
    "30a6925f": { id: "19", name: "Student 19" },
    "eb2a46d7": { id: "20", name: "Student 20" },
    "fb60c1ea": { id: "21", name: "Student 21" },
    "70ce6a98": { id: "22", name: "Student 22" },
  },
};
