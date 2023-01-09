function App1() {
  return (
    <div>
      <h1>React</h1>
      <Rect x="50" y="50" w="150" h="150" c="cyan" />
      <Rect x="150" y="100" w="150" h="150" c="magenta" />
      <Rect x="100" y="150" w="150" h="150" c="black" />
    </div>
  );
}

function Rect(props){
  var style = {
    marginTop: "100px",
    backgroundColor: props.c,
    position: "absolute",
    left: props.x + "px",
    top: props.y + "px",
    width : props.w + "px",
    height : props.h + "px"
  }

  return (
    <div style={style}></div>
  );
}

export default App1;
