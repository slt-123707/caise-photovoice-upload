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
  webhookUrl: "https://prod-41.uksouth.logic.azure.com:443/workflows/460043e77b8c4419a7c06cded6368662/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=OVvd9QJZCU9GXHU--sru3eBGEk9Nvb0OQHl-aVWLAdY",

  // Study metadata
  title: "CAISE",
  subtitle: "My AI Diary",

  // Student list — keyed by SHA-256 hash of each student's URL token
  // Tokens are never stored here; only their hashes
  // URL format: https://diary.projectcaise.co.uk/?s=TOKEN
  students: {
    "dc4b1d3cd41e02a6704d5de5c08f59a9aa64e737152c46fe114ade762febd9ae": { id: "01", name: "Student 01" },
    "a675a87206eec8eb4df997c81a6feb88f313c8c055041b01cbaa2482c215d4cc": { id: "02", name: "Student 02" },
    "6f248cb632059e55db48169f8011fafbc61674264f3c419f43513c5c433b32b7": { id: "03", name: "Student 03" },
    "c25733d211da963e3c33f68d2031a6699d9f8fa2fbc9a687287054f24a65d601": { id: "04", name: "Student 04" },
    "939192ac20d1a94a7638d56cec3c0b5891268f408b2778a3fe0bf0835148477e": { id: "05", name: "Student 05" },
    "99bf00b1d8aa80dd5773b4327a28fb90d7ec57a80dbb25102d630b0c36c37dce": { id: "06", name: "Student 06" },
    "370265faba85538d9f329905da4c8767d7903e50a7799d8e85a8631c44810013": { id: "07", name: "Student 07" },
    "1641827795bc5547e4a3575b0681ed9fd6230d80da0c3238fabed5f8c2b5554e": { id: "08", name: "Student 08" },
    "57ee1e222ee45745a7b7928d678604108b846cc4f380e51b24b025f6df68a0bb": { id: "09", name: "Student 09" },
    "2b06ee3e647e83100740004c7031b7491c5425b9ffcf525c19664f6a6e19470e": { id: "10", name: "Student 10" },
    "5e353b19ea69e330aef2aeb914cb4e4ce3b284a07acd8f48e6bfe1defd77848f": { id: "11", name: "Student 11" },
    "88b9f2eb8eaeab18f1c1aef1e50fd141e3a64e8fe1e08b371318d69b9ed6d5b2": { id: "12", name: "Student 12" },
    "28e39a9123c777951f9b0d24ab2e99e1a835a39506fc514a4ece419e9e515aeb": { id: "13", name: "Student 13" },
    "89e6af3ff2db2c741aa989189123c51109874bb9e686632b7dc0bcd20273806e": { id: "14", name: "Student 14" },
    "446c3ac93fb746e7db2a7e6c8b781e4b0bc9f4b6769e3a2e680beb142969fb4c": { id: "15", name: "Student 15" },
    "ccb7af81bddf12017dfbe9649a8e3ab65e0ce25aac2a4b1af4b834432842e83c": { id: "16", name: "Student 16" },
    "251fd24eeb9df2ed448c03d03558099bb351eefd3edd28eac420982916378369": { id: "17", name: "Student 17" },
    "bdf1c7366309da70e8969505c6e2b833a0b42c1acf05da05a936e103ec975a16": { id: "18", name: "Student 18" },
    "3d1739a9e6f32bcb49cda4dad8455986f55d67ae53228617ff141319756fdcaf": { id: "19", name: "Student 19" },
    "4c7ca196a8011e7801d467a7f57f6b7d52be7f633c9eb5f726b91d70db2946d8": { id: "20", name: "Student 20" },
    "d4366706074c8669088a9e256b82d3ffb8055beeb2022fbb5a7f9ed86d1918dc": { id: "21", name: "Student 21" },
    "16b247085c611bb744848f087fd7d64171db5d7a78abd7fcbb79acbf96519030": { id: "22", name: "Student 22" },
    "956127e1e8f9c56b32f2022960c02bd038e012423c183289b354b16f60ec3cbe": { id: "TEST", name: "Security Test" },
  },
};
