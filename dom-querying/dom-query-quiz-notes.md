# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  for development feedback and contextual information.
- What is a "model"?
  My best answer would be an abstract representation of a complex system.
- Which "document" is being referred to in the phrase Document Object Model?
  The HTML document.
- What is the word "object" referring to in the phrase Document Object Model?
  A tree data structure representing the elements of the HTML page as nodes.
- What is a DOM Tree?
  parent-child tree relations of the HTML page.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.querySelector(selector) for CSS selecting, and getElementById(id) for CSS selecting by id, and getElementById(id) for the first match of a class.
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll(selector), getElementsByClassName(className).
- Why might you want to assign the return value of a DOM query to a variable?
  If one is seeking the specific html elements to use. But practically speaking, to conserve runtime through re-use.
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir();
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  because the browser needs to scan the elements of the HTML page before the javascript code can access them. Then shouldn't javascript files all be at the end of the document?
- What does `document.querySelector()` take as its argument and what does it return?
  a selector, and returns the first element match within the HTML page.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  it takes a selector, and returns all the matches as a collection of objects.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
