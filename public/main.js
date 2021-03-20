
GetHtml.onclick = ()=>{
  const request = new XMLHttpRequest()
  
  request.onreadystatechange=()=>{
    if (request.readyState ===4){
      if(request.status >= 200 && request.status < 300){
        //创建一个div
        const div = document.createElement('div')
        //填写div的内容
        div.innerHTML=request.response
        //插入div到body里面
        document.body .appendChild(div)
      }else{
        alert('html加载失败')
      }
    }
  }
  request.open('GET','/3.html');
  request.send() ;

  };

GetJS.onclick=()=>{
  const request = new XMLHttpRequest()
 
  request.onreadystatechange=()=>{
    if (request.readyState ===4){
      if(request.status >= 200 && request.status < 300){
        //创建
        const script = document.createElement('script')
        //填写
        script.innerHTML =  request.response
        //插入
        document.body.appendChild(script)
      }else{
        alert('script加载失败')
      }
     }
  }
request.open('GET','/2.js')
request.send() 
}

GetCSS.onclick =()=>{
  const request = new XMLHttpRequest()
  request.onreadystatechange=()=>{
    if (request.readyState ===4){
      if(request.status >= 200 && request.status < 300){
        //创建style标签
        const style = document.createElement('style')
        //填写style内容
        style.innerHTML = request.response
        //将style标签插入到body里面
        document.head.appendChild(style)
        }else{
        alert('script加载失败')
        }
   }
  };
  request.open('GET','/style.css');
  request.send() 
}

GetXml.onclick=()=>{
  const request = new XMLHttpRequest()
  request.open('GET','/4.xml')
  request.onreadystatechange=()=>{
  if (request.readyState === 4 && request.status ===200 ){
      const dom = request.responseXML;
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
  };
}
  request.send()
}
GetJson.onclick=()=>{
  const request = new XMLHttpRequest()
  request.open('GET','/5.json')
  request.onreadystatechange=()=>{
    if (request.readyState === 4 && request.status ===200 ){
       const object = JSON.parse(request.response)
       myName.textContent=object.name
    };
  }
    request.send()
  }

  let n = 1
  GetPage.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
      if (request.readyState === 4 && request.status ===200 ){
       const array = JSON.parse(request.response)
      array.forEach(item => {
         const li = document.createElement('li')
         li.textContent = item.id
         nextPage.appendChild(li)
       });
       n+=1
      };
    }
      request.send()
    }