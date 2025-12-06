import * as fs from 'fs';
import * as path from 'path';

// Convertit vers PascalCase (my-component → MyComponent)
const toPascalCase = (str: string): string =>
  str
    .replace(/[-_]/g, ' ')
    .replace(/\s(.)/g, (match) => match.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, (match) => match.toUpperCase());

const inputName = process.argv[2];

if (!inputName) {
  console.error('❌ Please provide a component name.');
  process.exit(1);
}

const pascalName = toPascalCase(inputName);
const styledComponentName = `Styled${pascalName}Container`;
const propsInterfaceName = `${pascalName}Props`;

// 🧩 Utilise la racine du projet, pas le dossier scripts
const projectRoot = process.cwd();
const basePath = path.join(projectRoot, 'src', 'components', inputName);

if (fs.existsSync(basePath)) {
  console.error('❌ Component already exists.');
  process.exit(1);
}

fs.mkdirSync(basePath, { recursive: true });

const files: Record<string, string> = {
  [`${inputName}.tsx`]: `import { FC } from 'react';

import { ${styledComponentName} } from './${inputName}.styles';
import { ${propsInterfaceName} } from './${inputName}.types';

const ${pascalName}: FC<${propsInterfaceName}> = ({ dataTestId }) => {
console.log('test');

return (
  <${styledComponentName} data-testid={dataTestId}>${pascalName}</${styledComponentName}>
)};

export default ${pascalName};
`,
  [`${inputName}.styles.ts`]: `import styled from 'styled-components';

export const ${styledComponentName} = styled.div\`
  // styles here
\`;
`,
  [`${inputName}.types.ts`]: `export interface ${propsInterfaceName} {
  dataTestId?: string;
}
`,
  [`index.ts`]: `export { default } from './${inputName}';
export * from './${inputName}.types';
`
};

Object.entries(files).forEach(([fileName, content]) => {
  fs.writeFileSync(path.join(basePath, fileName), content, { encoding: 'utf8' });
});

console.log(`✅ Component "${pascalName}" created at src/components/${inputName}`);
