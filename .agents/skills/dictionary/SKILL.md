---
name: dictionary
description: Search for japanese word using jisho.org API and return the first 5 results with their translation and information if it is commonly written in kana alone. Use it to check if the `jp.text` field should be written in kanji or kana.
---

Run the script `scripts/search_word.sh` with the word you want to search as an argument. The script will return the first 5 results from the jisho.org API, including their slug, tags, and English definitions.

If tag includes "Usually written using kana alone" string, it means you should not use kanji in the `jp.text` field for that word.

Examples:
```bash
./.opencode/skills/dictionary/scripts/search_word.sh arigatou
./.opencode/skills/dictionary/scripts/search_word.sh ありがと
```