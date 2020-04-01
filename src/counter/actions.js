const asyncDispatch = () => {
  innerDispath({ type: "INCREMENT" })
}

export const incrementAsync = innerDispath =>{
  setTimeout(() => {
    innerDispath({ type: "INCREMENT" })
  }, 1000)};
