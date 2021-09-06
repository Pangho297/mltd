import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache();

// Apollo 클라이언트가 내부적으로 사용하는 캐시를
// New InMemoryCache()로 생성한다.
// 다시말해 클라이언트 브라우저 메모리에 GraphQL 요청-응답을
// 캐싱하는 공간을 생성한다는 뜻이다.
