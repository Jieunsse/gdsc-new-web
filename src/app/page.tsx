import * as stylex from '@stylexjs/stylex';

const fontStyle = stylex.create({
  default: {
    fontSize: 100,
    color: 'blue'
  },
  highlighted: {
    color: 'orange'
  },
});


export default function Home() {
  return (
    <div {...stylex.props(fontStyle.default)}>test</div>
  );
}
