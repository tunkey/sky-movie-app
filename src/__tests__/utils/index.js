import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';

const runJestAxe = (testName, component) => {
  test(testName, async () => {
    const html = ReactDOMServer.renderToString(component);
    expect(await axe(html)).toHaveNoViolations();
  });
};

export default runJestAxe;
