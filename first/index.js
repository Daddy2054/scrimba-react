// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
// ReactDOM.render(<ul>
//   <li>Bob</li>
//   <li>Bob
//   </li>
//   <li>Bob</li>
// </ul>, document.getElementById("root"))

// function MainContent() {
//   return (
//       <h1>I'm learning React!</h1>
//   )
// }

// ReactDOM.render(
//   <div>
//       {/* <Navbar /> */}
//       <MainContent />
//   </div>,
//   document.getElementById("root")
// )

// const navbar = (<nav>
//   <h1>Bob's Bistro</h1> <ul>
//   <li>Pricing</li>
//   <li>About</li>
//   <li>Contact</li>
// </ul>
// </nav>
// )
// ReactDOM.render(
//   navbar,
//   document.getElementById("root")
// )

const page = (
  <div>
    <h1>My awesome website in React</h1>
    <h3>Reasons I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))
// document.getElementById("root").append(page)