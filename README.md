# Virginia DMV Knowledge Exam — Practice Simulator

A static web app with **15 full-length practice exams** for the Virginia driver's license / learner's permit knowledge test. Every exam follows the real DMV format and grading.

**Live:** https://adityapatkar.github.io/va-dmv-practice-test/

## The exam format

The format matches [dmv.virginia.gov — The Knowledge Exam](https://www.dmv.virginia.gov/licenses-ids/exams/know-exam):

| Part | Questions | To pass |
|---|---|---|
| 1 — Traffic Signs | 10 (each shows a sign) | **all 10** correct |
| 2 — General Knowledge | 30 multiple choice | **24** correct (80%) |

Part 2 only starts after a perfect Part 1.

## Features

- **15 fixed practice tests.** The same test number always has the same questions, so a retake measures real progress. There is also a **Random exam** button for a fresh mix.
- **Test-day rules (on by default).** As on the DMV computer, the exam ends as soon as a pass is out of reach: one missed sign question, or a 7th miss in Part 2.
- **Study mode (optional).** Shows the correct answer, an explanation, and the manual page after each question.
- **Score report.** Shows PASS/FAIL, the score and percent for each part against the requirement, your time, the topics you missed, and a review of every question with the correct answer and a citation to the manual.
- **History.** Every attempt is saved in the browser (`localStorage`) and can be reviewed later. If you close the tab mid-exam, you can resume it.
- **Keyboard support.** `A`–`D` or `1`–`4` selects an answer, and `Enter` submits. The layout is responsive, so it works on phones too.

## Question bank

All questions are written from the **Virginia Driver's Manual (April 2026 edition)**. Each one cites the manual page it comes from.

| File | Content | Count |
|---|---|---|
| `data/signs.js` | Sign art (inline SVG) + Part 1 sign questions | see file |
| `data/gk-a.js` | Signals, signs and markings, speed, right-of-way, passing, turning (pp. 5–18) | 142 |
| `data/gk-b.js` | Space cushion, sharing the road, parking, hazards, alcohol, crashes (pp. 19–26) | 138 |
| `data/gk-c.js` | Seat belts, child seats, penalties, DUI law, license types, insurance, testing (pp. 3–4, 26–34) | 115 |

The 15 tests are dealt from these banks with a seeded shuffle (`js/app.js`):

- every question is used about equally often across the 15 tests
- no question appears twice in the same test
- answer choices are shuffled the same way every time

This is an unofficial study tool. The real exam uses DMV's own question pool, so study the [official manual](https://www.dmv.virginia.gov/licenses-ids/exams/manual) as well.

## Running it

It is plain HTML/CSS/JS. There is no build step, no server, and no dependencies.

- **Hosted:** open the GitHub Pages link above.
- **Locally:** download or clone the repo, then double-click `index.html`. Or serve the folder:

  ```sh
  python3 -m http.server 8000   # then open http://localhost:8000
  ```

## Project layout

```
index.html        page shell
css/styles.css    styles
js/app.js         exam engine: test assembly, scoring, history, UI
data/*.js         question banks and sign artwork
```
