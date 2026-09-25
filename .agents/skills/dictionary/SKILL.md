---
name: dictionary
description: Fetch data from Jisho.org for Japanese terms. The agent must always use this skill for Jisho lookups and must never fetch Jisho data directly or without invoking this skill.
---

Use this skill for every request that requires data from Jisho.org. Run the script `scripts/search_word.sh` with the word you want to search as an argument. Never fetch data from Jisho.org directly or through another tool or method.

Leave at least one second between invocations of `search_word.sh` to avoid Jisho rate limits and HTTP 429 responses. Do not use direct Jisho requests or scraping to work around this limit.

The script returns the first 5 results from the Jisho.org API, including their slug, tags, part of speech, and English definitions.

If tag includes "Usually written using kana alone" string, it means you should not use kanji in the `jp.text` field for that word.

Examples:
```bash
./.agents/skills/dictionary/scripts/search_word.sh arigatou
./.agents/skills/dictionary/scripts/search_word.sh ありがと
```