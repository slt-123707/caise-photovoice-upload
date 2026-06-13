// CAISE Photovoice — Configuration
//
// This file is served publicly to every participant's browser, so it deliberately
// contains NO participant data — no tokens, no hashes, no names.
//
// Each student's token (the ?s= value in their link) is resolved to a folder
// SERVER-SIDE by the Logic App. The token→student map lives only in Azure.
//
// Each student accesses the app via: https://diary.projectcaise.co.uk/?s=TOKEN

const CONFIG = {
  // Upload endpoint (Azure Logic App). Not treated as a secret: every request is
  // validated server-side (token must resolve to a known student; filename,
  // type and size are checked), so this can only ever append a file to a valid
  // student's folder — never read or reach any data.
  webhookUrl: "https://prod-41.uksouth.logic.azure.com:443/workflows/460043e77b8c4419a7c06cded6368662/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=OVvd9QJZCU9GXHU--sru3eBGEk9Nvb0OQHl-aVWLAdY",

  // Study metadata
  title: "CAISE",
  subtitle: "My AI Diary",
};
