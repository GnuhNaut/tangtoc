
import 'antd/dist/antd.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [link, setLink] = useState()

  useEffect(() => {
    // XqQF9c
    var newList = []
    for(let i = 0; i < list.length; i++) {
      console.log('typeof', typeof list[i])
      if(list[i].includes("drive.google.com")){
        newList.push(list[i])
      }
    }
    setLink([...newList])
    console.log('newList', newList)
    console.log('newList', list)
  }, [])

  return(
    <div style={{padding: 30}}>
      <div style={{fontSize: 30}}>
        {
          link && 
          <div>
            <button
              onClick={e=>{
                navigator.clipboard.writeText(link[0])
                setTimeout(() =>{
                  const data = link
                  data.shift()
                  console.log('data', data)
                  setLink([...data])
                }, 2000)
              }}
            >
              COPY
            </button> <br />
          <a 
            rel="noreferrer"
            href={link[0]} 
            target={"_blank"}
            onClick={e=>{
              setTimeout(() =>{
                const data = link
                data.shift()
                console.log('data', data)
                setLink([...data])
              }, 2000)
            }}
          >
            {link[0]}
          </a>

            <div>
              <div>
              ytp-button ytp-settings-button
              <button
                onClick={e=>{
                  navigator.clipboard.writeText('ytp-button ytp-settings-button')
                }}
              >
                Copy
              </button>
              </div>
              <div>
                ALL
                <button
                onClick={e=>{
                  navigator.clipboard.writeText("document.getElementsByClassName('ytp-settings-button')[0].click();setTimeout(() => {document.getElementsByClassName('ytp-menuitem')[2].click(); setTimeout(()=>{document.getElementsByClassName('ytp-menuitem')[0].click()}, 500)}, 500);")
                }}
              >
                Copy
              </button>
              </div>
              <div>
                Setting
                <button
                onClick={e=>{
                  navigator.clipboard.writeText("document.getElementsByClassName('ytp-settings-button')[0].click()")
                }}
              >
                Copy
              </button>
              </div>
              <div>
                document.getElementsByClassName('ytp-menuitem')[2].click()
                <button
                onClick={e=>{
                  navigator.clipboard.writeText("document.getElementsByClassName('ytp-menuitem')[2].click()")
                }}
              >
                Copy
              </button>
              </div>
              <div>

            document.getElementsByClassName('ytp-menuitem')[0].click()
            <button
                onClick={e=>{
                  navigator.clipboard.writeText("document.getElementsByClassName('ytp-menuitem')[0].click()")
                }}
              >
                Copy
              </button>
              </div>
              <div>

            var video = document.getElementsByClassName('html5-main-video')[0].src
            <button
                onClick={e=>{
                  navigator.clipboard.writeText("var video = document.getElementsByClassName('html5-main-video')[0].src")
                }}
              >
                Copy
              </button>
              </div>
              <div>

            window.open(video, '_blank')
            <button
                onClick={e=>{
                  navigator.clipboard.writeText("window.open(video, '_blank')")
                }}
              >
                Copy
              </button>
              </div>
              <div>
                copy(document.title)
                <button
                onClick={e=>{
                  navigator.clipboard.writeText("var video = document.getElementsByClassName('html5-main-video')[0].src \n window.open(video, '_blank') \nvar x = document.title \n copy(x.replace(/:/g,'_'))")
                }}
              >
                Copy
              </button>
              </div>

            {/* <iframe src={link} width="640" height="480" allow="autoplay"></iframe> */}
            </div>
            <button
              onClick={e=>{
                const data = link
                  data.shift()
                  console.log('data', data)
                  setLink([...data])
              }}
            >
              Next
            </button>
          </div>
        }
      </div>
    </div>
  )
}
export default App;
const list =[
  "https://drive.google.com/file/d/1AXl_lEJ515yxmsmBHYcdHmFXFGs5Sfm0/view",
  "https://drive.google.com/file/d/1tuL0zKXjh3KyBHNgL-bqUbhY1Pg5OeO9/view",
  "https://drive.google.com/file/d/1eiJNKRG8S2O_OI2Q84ZXzmkqH_1OYYkQ/view",
  "https://drive.google.com/file/d/1Ez3iOXF5bU5Pyp1_SFXZif0F4QOuoDLb/view",
  "https://drive.google.com/file/d/1j2df9oi2usxyU9D337OoMb_Qln81YT1j/view",
  "https://drive.google.com/file/d/1BtpBfn-pZFa7rLzpjtAbsgFf2N2jnWrB/view",
  "https://drive.google.com/file/d/1D6H7zPKpL6bg25tOXr5H04EM1ivGXUt2/view",
  "https://drive.google.com/file/d/1fWEd9zksqxxUTnWiWAlSuz1rjowBx_5N/view",
  "https://drive.google.com/file/d/10gUisUzsQN9taZhFXPJr9iym7zheiauY/view",
  "https://drive.google.com/file/d/1ZQxxDsYBygn9DHN-YFtdY14aMzR-oWjL/view",
  "https://drive.google.com/file/d/1TWLKwYjpasSi9l_PrZzqMC3kPYa_Gby0/view",
  "https://drive.google.com/file/d/1ZrTVujcd3TZlldrTvZ8EKf7tVHn-ngu7/view",
  "https://drive.google.com/file/d/1OOKob4MVYrNDEjRiFHuAJgT-kWppFJ-9/view",
  "https://drive.google.com/file/d/1Ixda1-2mqh81oVKpkjjio-AxxR01rP5W/view",
  "https://drive.google.com/file/d/1OJRsSvKgKj_9HVsSmT1HxXJhNNw1ogle/view",
  "https://drive.google.com/file/d/14dGGdMMwdbrHWdv69MbfhidjqdpZkMGh/view",
  "https://drive.google.com/file/d/1NDIVsFgWC8_LRUQ21pjYed1zPTRRLgYb/view",
  "https://drive.google.com/file/d/1JGHAlmK7QVUF1SKaZX_Qm5czgyRRk8ps/view",
  "https://drive.google.com/file/d/15CHbcaDZQzErfVFK5397RY58LzXmDx0L/view",
  "https://drive.google.com/file/d/1UMWIr2Cy0RV5HdJsuq8f2C9fBVa2afM2/view",
  "https://drive.google.com/file/d/1koS85LDJNfuwwu_eLIFZOvo5uixkeXDi/view",
  "https://drive.google.com/file/d/1fTffR1CDn6g0MYQ_rQmS_0xiHpkBWRu0/view",
  "https://drive.google.com/file/d/1fBbzy-ZjGqNXum8dyPcbxA0Ki8IQnA4X/view",
  "https://drive.google.com/file/d/1mjYD7SzPg_npeHGkEaU3b4_aHgpqT05-/view",
  "https://drive.google.com/file/d/1aMEpxSewW28x_ucagmeiQyxy3RoL3tgl/view",
  "https://drive.google.com/file/d/1ghZjnfzuVsy4V4tb6cH8sPfj7UrT--gR/view",
  "https://drive.google.com/file/d/1Azn-t1YqXAm1oVhgXQRx3Ba-KJN9UTRQ/view",
  "https://drive.google.com/file/d/1ehLIxyIpgVXOUe_R2C5QduSrjAbM50Sl/view",
  "https://drive.google.com/file/d/1uxBydBcpj6-tB8l6834UN0etvV5_jfzL/view",
  "https://drive.google.com/file/d/1hy_svc-Ih1pKek0U9_2hDkVpH7eOEGjw/view",
  "https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2FTaiLieuCNTT2021&sa=D&sntz=1&usg=AOvVaw00zQ6wRww5EGw2I_GsFf2u"
]