# Text Search

- Language: javascript
- Original path: `javascript/1206230-text-search.js`
- Solution: `code.js`

## Notes

### Note 1

@param {string} string
@param {string} query
@return {string}

### Note 2

Phase 1: create an array that maps the characters that should be bolded

### Note 3

Phase 2: insert <b> and </b> tag

### Note 4

'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'

### Note 5

'The hardworking <b>Dog</b> overtakes the lazy <b>dog</b>'

### Note 6

Correct: '<b>aaaa</b>'

### Note 7

Wrong: '<b>aa</b><b>aa</b>'

### Note 8

'<b>aa</b>a'

### Note 9

This is because the second character cannot be used as a match again.
