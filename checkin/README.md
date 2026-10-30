# CAISE weekly check-in

A short weekly form for participants: "has anything happened with AI or technology
this week?" If yes, they pick a category (something useful / a breakdown or
difficulty / something else), then write a few words or record a voice note, and
can add as many items as they like. If no, a "nothing to report" record is still
sent so the week counts as a check-in.

It is a sibling of the photovoice diary and reuses all of its plumbing:

- Same hosting (GitHub Pages, this repo) at `https://diary.projectcaise.co.uk/checkin/?s=TOKEN`.
- Same personal links: the `?s=` token is the participant's existing one.
- Same backend: it posts the same JSON shape (`token, caption, filename,
  mediaBase64, mimeType, mediaType, timestamp, originalFilename`) to the
  webhook in `../config.js`, so the Logic App and its validation gate accept it
  unchanged. Only `text` and `audio` media types are ever sent.
- Files land in the participant's usual `Student-NN/` folder, prefixed
  `checkin_`, so they are easy to tell apart from diary entries.

No participant data lives in this page. The page holds no tokens, names or lists.

## Teachers and students

Both use the same page. The difference is carried by the **id** in the Key
Vault map, which the Logic App turns into the folder name: ids `S01`, `S02`, ...
give `Student-S01`, ... and ids `T01`, `T02`, ... give `Student-T01`, ... (the
`Student-` prefix is fixed in the Logic App's path; the letter is what tells
them apart).

Teacher links also carry `&r=t`, which swaps a few bits of wording (the
"talk to your teacher" lines and one category hint). That flag is cosmetic
only: where a submission is filed is decided server-side from the token, so a
participant editing it changes nothing but the text they see.

## Settings

At the top of the script block in `index.html`:

| Setting | What it does |
| --- | --- |
| `startDate` | Monday of week 1. Week numbers in the UI and in every record count from this. |
| `weeks` | Length of the round, for the "Week N of M" pill. |
| `maxRecordingSeconds` | Voice notes stop automatically at this length (default 5 minutes). |
| `queueMaxAgeDays` | How long an unsent item is kept on the device before being discarded (default 7). |

Category labels and the per-category prompt text are in the `TYPES` table just below.

## What a record looks like

Text item: one file `checkin_2026-11-18_1412_wk3_i1_useful.txt` containing

```
CAISE weekly check-in
Week: 3 (w/c 2026-11-16)
Submitted: 2026-11-18T14:12:33.000Z
Check-in: ck-20261118-1412-a7f3
Item: 1
Type: Something useful
Format: text

<what they wrote>
```

Voice item: the audio file `checkin_…_i2_difficulty.webm` (or `.m4a` on
Safari) plus the Logic App's caption sidecar `.txt` holding the same header and
any typed words. `Check-in` groups the items from one sitting; `Item` numbers
them within it. "Nothing to report" is a text record with `Type: Nothing to report`.

## Offline behaviour

If a send fails (no wifi, Logic App off), the item is kept in the browser's
IndexedDB under the participant's token and re-sent silently the next time
their link is opened on that device. The participant sees a yellow note saying so.
Items older than `queueMaxAgeDays` (default 7) are discarded on the next open
rather than retried, so nothing lingers on a shared machine.

## Before each round

1. Set `startDate` (and `weeks` if different), commit, push. Pages redeploys in about a minute.
2. Make sure the `caise-upload` Logic App is **enabled** in Azure and the
   participants' tokens are in the Key Vault `student-map` secret.
3. Open `/checkin/?s=<TEST TOKEN>` on a Surface, send one text item and one
   voice note, and check both arrive in `Student-TEST/`.
4. Send each participant their link. Reminders: a recurring email from your
   inbox is the simplest. `caise_checkin_status.py` (kept outside this repo)
   lists who has and hasn't checked in from the synced OneDrive folder.
