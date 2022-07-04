module.exports = function (plop) {
  // controller generator
  plop.setGenerator('layer', {
    description: 'application layer logic',
    prompts: [
      {
        type: 'input',
        name: 'layer',
        message: 'layers name please',
      },
      {
        type: 'input',
        name: 'name',
        message: 'module name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/{{layer}}/{{name}}/index.ts',
        templateFile: './segments/index.hbs',
      },
      {
        type: 'add',
        path: '../../src/{{layer}}/{{name}}/ui/index.ts',
        templateFile: './segments/ui.hbs',
      },
      {
        type: 'add',
        path: '../../src/{{layer}}/{{name}}/lib/index.ts',
      },
      {
        type: 'add',
        path: '../../src/{{layer}}/{{name}}/model/index.ts',
        templateFile: './segments/model.hbs',
      },
    ],
  });
};

// /**
//  * generator/index.js
//  *
//  * Exports the generators so plop knows them
//  */

// const fs = require('fs');
// const path = require('path');
// const { execSync } = require('child_process');
// const componentGenerator = require('./component/index.js');
// // const containerGenerator = require('./container/index.js');
// // const languageGenerator = require('./language/index.js');

// /**
//  * Every generated backup file gets this extension
//  * @type {string}
//  */
// const BACKUPFILE_EXTENSION = 'rbgen';

// module.exports = plop => {
//   plop.setGenerator('component', componentGenerator);
//   // plop.setGenerator('container', containerGenerator);
//   // plop.setGenerator('language', languageGenerator);
//   plop.addHelper('directory', comp => {
//     try {
//       fs.accessSync(
//         path.join(__dirname, `../../app/containers/${comp}`),
//         fs.F_OK,
//       );
//       return `containers/${comp}`;
//     } catch (e) {
//       return `components/${comp}`;
//     }
//   });
//   plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
//   plop.setActionType('prettify', (answers, config) => {
//     const folderPath = `${path.join(
//       __dirname,
//       '/../../app/',
//       config.path,
//       plop.getHelper('properCase')(answers.name),
//       '**',
//       '**.js',
//     )}`;

//     try {
//       execSync(`npm run prettify -- "${folderPath}"`);
//       return folderPath;
//     } catch (err) {
//       throw err;
//     }
//   });
//   plop.setActionType('backup', (answers, config) => {
//     try {
//       fs.copyFileSync(
//         path.join(__dirname, config.path, config.file),
//         path.join(
//           __dirname,
//           config.path,
//           `${config.file}.${BACKUPFILE_EXTENSION}`,
//         ),
//         'utf8',
//       );
//       return path.join(
//         __dirname,
//         config.path,
//         `${config.file}.${BACKUPFILE_EXTENSION}`,
//       );
//     } catch (err) {
//       throw err;
//     }
//   });
// };

// module.exports.BACKUPFILE_EXTENSION = BACKUPFILE_EXTENSION;
