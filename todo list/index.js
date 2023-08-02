submit.addEventListener("click",(e)=>{
    e.preventDefault()
    let titlec=title.value
    let descc=desc.value
    localStorage.setItem("todo", JSON.stringify([titlec, descc]))
    console.log(e)
    console.log(titlec)
    console.log(descc)
  })
deleteBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.removeItem("todo")
  })

