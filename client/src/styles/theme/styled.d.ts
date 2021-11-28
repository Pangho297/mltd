import { Theme } from './theme';
import { CSSObject, CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      baseColor: string;
    };
  }
}
// react module 선언은 아래와 같이 사용을 가능하게 해줌
// * 예제 *
// import styled from "styled-components/macro";

// <div
//   css={`
//     border: 1px solid red;
//   `}
// >
//   Test
// </div>;
// declare module 'react' {
//   interface Attributes {
//     css?: CSSProp | CSSObject;
//   }
// }
