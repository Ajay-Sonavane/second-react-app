function App() {
  let str = "Hello Universe";
  let pi = 3.144;
  let active = false;
  let isuserid = true;

  return (
    <>
      <h1>Hello World</h1>
      <h1>{str}</h1>
      <h1>pi= {pi}</h1>

      {isuserid && <h1>YOur welcome</h1>}
      <h1>{active ? "Good Morning Everyone" : "Good night Dear"}</h1>
      {/* // Recommended */}
      {active ? <h1>Good morning</h1> : <h1>Good Night</h1>}
    </>
  );
}
export default App;
