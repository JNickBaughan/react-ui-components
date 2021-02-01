Animated Input:

```jsx
const [text, setText] = React.useState("");
<Input
  value={text}
  placeholder={"Click and start typing"}
  onChange={(value) => setText(value)}
/>;
```
