# React: The Big Picture Component
___

### Why React?
___
1. Flexibility:
   1. React's library approach has allowed it to evolve into remarkably flexible tool.
   2. Where can you use React?
      1. Web Apps
      2. Static sites
      3. React Native -> Mobile
      4. Desktop
      5. Server-rendered
      6. React VR -> Virtual Reality
   3. React Renderers:
      1. react-dom
      2. react-Native
      3. react-vr
   4. Server-side Rendering:
      1. Next
      2. Gatsby
      3. Phenomic
2. Developer Experience:
   1. "HTML" in JS (example: {users.map(createUser)})
   2. Very small API docs -> <b>Trust me</b>, You will remember everything in your head :).
3. Corporate Investment:
   1. Created and maintained by Facebook.
   2. Over 50,000 components in production. (Facebook)
4. Community:
   1. Huge Community.
   2. An answer to your use case likely exists online.
   3. Very Big Companies using React.
   4. Material-UI.
   5. React Bootstrap.
   6. Ecosystem: React Router, Redux, Mobx, Jest, GraphQL, Next.js.
5. Performance:
   1. React minimizes DOM changes.
   2. With Virtual DOM: Update the DOM in the most efficient way.
      1. Avoids layout thrash.
      2. Saves battery and CPU.
6. Testability:
   1. Little to no config required.
   2. Run in-memory via Node.
   3. Fast.
   4. Reliable, deterministic unit tests.
   5. Write quickly, update easily.
   6. A lot of Testing Frameworks: Mocha, Jasmine, Tape, QUnit, AVA, Jest.
   7. <b>React Testing Library:<b> https://testing-library.com/docs/react-testing-library/intro/

### Tradeoffs
________________________________________________________________
1. **Framework**: Clear options, Less decision fatigue, Less setup overhead and More cross-team consistency.
   <br/>
   **Library (React)**: Light-weight, Sprinkle on existing apps, Pick what you need, Choose the  best tech 
and Popular boilerplate exists.
2. React Testing -> `Jest, Mocha`, Http library -> `Fetch, Axios`, Routing -> `React Router`, I18n -> `react-intl`, 
Animation -> `react-motion` , Form validation -> `react-forms`, CLI -> `create-react-app`.
3. **Template-centric**: Little JS knowledge required, Avoid confusion with JS binding, Rule of least power.
<br/>
   **JavaScript-centric (React)**: Little framework-specific syntax, Fewer concepts to learn. It's JS. Less Code. Easy to read.
   Encourage improving JS skills. Skill Transfer.
4. **Web Components**: Templates, Custom Elements, Shadow DOM, Imports
   **React**: JSX, JS, Declare React components, CSS modules, CSS in JS, "inline", One Component per file.