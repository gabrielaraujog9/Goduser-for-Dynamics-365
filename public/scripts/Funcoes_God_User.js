var formContext;
window.addEventListener('message',async function (event){
    formContext = event.source.Xrm?.Page;
    console.log(event)
  }
);