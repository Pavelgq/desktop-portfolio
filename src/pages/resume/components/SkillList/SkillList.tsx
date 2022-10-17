interface ScillListProps {
  className: string;
}

export const SkillList = ({ className }: ScillListProps) => {
  return (
    <ul className={className}>
      <li>HTML, CSS (LESS, SASS), </li>
      <li>Javascript (ES6+), Typescript,</li>
      <li>React JS (Hooks), Redux (Thunk, Saga),</li>
      <li>Canvas (PixiJS), WebSocket, </li>
      <li>Git, Webpack, Gulp,</li>
      <li>Node JS, Express JS</li>
    </ul>
  );
};
