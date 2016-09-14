/// <reference path="./index.d.ts" />

import Main from 'TWB';

namespace TestMain {
  {
    let result: Main;

    result = new Main();
  }

  {
    let result: Promise<string>,
      main: Main = new Main();

    result = main.greet();
  }
}
