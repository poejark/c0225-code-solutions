# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  the element which fires the event.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  due to the bubbling up feature of javascript event handling.
- What DOM element property tells you what type of element it is?
  the tagName property.
- What does the `element.closest()` method take as its argument and what does it return?
  a selector and returns the closest selector found while bubbling from the element from which the method is a called.
- How can you remove an element from the DOM?
  .remove().
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  add the listener to a parent/wrapper div.

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
