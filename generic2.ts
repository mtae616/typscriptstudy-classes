function helloBasic<T, U>(message:T, comment: U): T{
  //인자랑 타입 여러개로 할 수 있음
  return message;
}

helloBasic<string, number>('Mark', 22);
//T 를 먼저 지정할 수 있음
helloBasic(36, 39);