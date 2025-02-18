# dom-manipulation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `className` property of element objects?
  The string representing the class assignment of an element's class.
- How do you update the CSS class attribute of an element using JavaScript?
  const $domObject = document.queryselector('element');
$domObject.className = 'new-class-string';

using the className property.

- What is the `textContent` property of element objects?
  the inner text content between the element's tag.
- How do you update the text within an element using JavaScript?
  by reassigning the textContent property to a new string.

- Is the `event` parameter of an event listener callback always useful?
  not always needed.
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  It would be more complex. I suppose you can do this by iteratively extracting the click count from the text content then adding it, then producing a new string.
- Why is storing information about a program in variables better than only storing it in the DOM?
  stored information is more accessible and less abstracted (than for example keeping track of information via a property of an element or object).

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
