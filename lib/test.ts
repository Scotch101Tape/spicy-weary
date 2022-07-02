class Test {
  foo: number

  constructor() {
    this.foo = 1
  }
}
 

let test = {
  foo: 1
}

export function incrFoo() {
  test.foo += 1
}

export function getFoo() {
  return test.foo
}
