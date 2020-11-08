Animated Input:

```jsx
const [text, setText] = React.useState("Click and start typing");
<Input value={text} onChange={(value) => setText(value)} />;
```
