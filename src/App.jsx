
import 'antd/dist/antd.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [link, setLink] = useState()

  useEffect(() => {
    // axios.get("https://sites.google.com/view/tailieucntt2020/cc/cautrucdulieuvagiaithuat_thacbinhcuong?authuser=0")
    //   .then(res => {
    //       console.log('res', res)
    //   });

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

  const handleSubmit = async () => {

  }
  return(
    <div style={{padding: 30}}>
      <div style={{fontSize: 30}}>
        {
          link && 
            <a 
              href={link[0]} 
              target={"_blank"}
              onClick={e=>{
                const data = link
                data.shift()
                console.log('data', data)
                setLink([...data])
              }}
            >
              {link[0]}
            </a>
        }
      </div>

    </div>
  )
}
export default App;
const list =  ['https://www.google.com/url?q=https%3A%2F%2Fwww.fac…2021&sa=D&sntz=1&usg=AOvVaw00zQ6wRww5EGw2I_GsFf2u', 'https://drive.google.com/file/d/1PTOe4ciE1x3raZQFvs9dfrrPEEWKXUfA/view', 'https://drive.google.com/file/d/187owpVvTzSjXBzh8S8B3x8wjlfcStYnD/view', 'https://drive.google.com/file/d/1iUD-70fj0RfmjCYXuMPrQIUc11rpe-Wn/view', 'https://drive.google.com/file/d/1Cq4WLJ4fUxuYeRRTBeBxrqJQEFbksD_J/view', 'https://drive.google.com/file/d/16I2WDqr9oYrQtIfK-E-q4esxRjhaQwsc/view', 'https://drive.google.com/file/d/1MWkEyzz-nvOwLj12eEy_WVemEJNTP5VE/view', 'https://drive.google.com/file/d/1GBdIr7_y9GyEIkLxVK3lbxH-KVmHERkg/view', 'https://drive.google.com/file/d/1OZMqxhJ8FTntWvRGcayC-cflMsxF5AKz/view', 'https://drive.google.com/file/d/1IMlEPGNXPF71sJ4iEYVjguMKR23MFWyx/view', 'https://drive.google.com/file/d/1g7yc8aW34dOEXNMBDGt7ooNnBOrkeZyr/view', 'https://sites.google.com/view/tailieucntt2020/free?authuser=0', 'https://drive.google.com/file/d/1llebYkwFxsJzUFFp8vfhZbNJFeVsB-ZF/view', 'https://drive.google.com/file/d/1u80kMHwZFKbpYdLIe45_eUJ4W00_PEvP/view', 'https://drive.google.com/file/d/1RXIuBACTxLX7IEr_gWKBbWdrHpkH8n8a/view', 'https://drive.google.com/file/d/1ec8aqd3ZKCaErdHOVDExPHhNyQKyGrLO/view', 'https://drive.google.com/file/d/1hPrxQyVGtTndV6NoM379MyWMy2u165xk/view', 'https://drive.google.com/file/d/1X1VHAMAEJ-kf1eSkT8pH2WgBEJ0WMaxV/view', 'https://sites.google.com/view/tailieucntt2020/free?authuser=0', 'https://drive.google.com/file/d/1g1_DpUAzJjus35F8HGziW4Dqx6qfLOZd/view', 'https://drive.google.com/file/d/1CkE99e3zpmzcrfyafDG1dkM9OrhIZErv/view', 'https://drive.google.com/file/d/1q99hpd6HeyYll6vfb0Ua-OGJfoMRmnk7/view', 'https://drive.google.com/file/d/1troQ0YcDkthzel5K8hZ4hOwVuEjKGgz7/view', 'https://drive.google.com/file/d/10asgdlaiZaNaQSVXpmq67DTO8JYh2C2R/view', 'https://sites.google.com/view/tailieucntt2020/free?authuser=0', 'https://drive.google.com/file/d/1Vp9hFKQJs5P-vZHaX5PV0IRfMOOa2DUr/view', 'https://drive.google.com/file/d/15DTIEffmR61SXDb5OA6hKh1U0hGyPRTi/view', 'https://drive.google.com/file/d/19h0228h4wGhFei7n00Dg3GHiy6U137X6/view', 'https://drive.google.com/file/d/12OmsHS7ZiUPiTcCgLJLRSRAguroMrun8/view', 'https://drive.google.com/file/d/19c47QxYQIWOJaFKktO2tp7m_miAqKfVB/view', 'https://drive.google.com/file/d/1SFj8tJnpE_xbVWoEQCQYYz5TKcp8V-oq/view', 'https://drive.google.com/file/d/1PZ4eOr8m7sxuVxYEbTOBLeZIHtonfHNx/view', 'https://drive.google.com/file/d/1EnJaRMZU3Zg_mtKRXjK30fos8gVRflo_/view', 'https://sites.google.com/view/tailieucntt2020/free?authuser=0', 'https://drive.google.com/file/d/1hQQ347GUYUCwIGug6fHDRC2otdw405P9/view', 'https://drive.google.com/file/d/1lxl6-dYb9rp7JEH2HsxPsUkVWu13XdAw/view', 'https://drive.google.com/file/d/1HeB7mUnBn8twH3ZqIJzFlKmLRsAtHfWR/view', 'https://drive.google.com/file/d/10jFLO0H9MwWVf_3rHHJuTJhXe2aHmGnn/view', 'https://drive.google.com/file/d/1f6Q8r-oaQZ26D57-JuEDHf3cae81JXAm/view', 'https://drive.google.com/file/d/1ShKN9wG1FFkbf7baXakGEI5L7uJl9HSD/view', 'https://drive.google.com/file/d/1rNope0KChXTsOiYP5Whv8qd9FI5hdRxb/view', 'https://drive.google.com/file/d/1fGmlndHEZJabGZwojHvIWrwCWQMYNH30/view', 'https://drive.google.com/file/d/1pLua4lo2r-Y3oF-4mjmMybcc2zIEHNjO/view', 'https://drive.google.com/file/d/14rqMMlUC2Mvs6hGWmVV-kGBqW-6tc7M0/view', 'https://drive.google.com/file/d/15Y_lrkWIfsZ1xavwslWSNjj0tXm02Up_/view', 'https://sites.google.com/view/tailieucntt2020/free?authuser=0', 'https://drive.google.com/file/d/1UKAcVv5UYloJc395CRt8Yvl01sFl7jtk/view', 'https://drive.google.com/file/d/1p_bw5QGPlH5MVsi9-YVIj8XtBtFOi7SD/view', 'https://drive.google.com/file/d/10bdLvqZ-T5D-iWl0NQdAQs8BKQEqB--y/view', 'https://drive.google.com/file/d/1ttyb9NAvRzLuCfadH0DvD6JnyYLLKk4B/view', 'https://drive.google.com/file/d/1QPUNzUqo8VLM20XYnmZWZBxkFr414oUC/view', 'https://drive.google.com/file/d/10uXuOdHmHBYOf4SzNxqNuhkr5vVzTQ6c/view', 'https://drive.google.com/file/d/1VqUdTIkcfzUgPIWfCLWLBnQaVod8R1J2/view', 'https://drive.google.com/file/d/1qc_NepoHQ2-MhHAaO7ZAJCFSADN6Kuq0/view', 'https://sites.google.com/view/tailieucntt2020/free?authuser=0', 'https://drive.google.com/file/d/1lDREluSPey1UJF_MbFgceWOhMWVNW-du/view', 'https://drive.google.com/file/d/195Q-y_2eE_hadNaon59MmbTjeCW8DuOV/view', 'https://drive.google.com/file/d/1zSmEBtYOvOArujUb-jr07z2gyEc-RHxO/view', 'https://drive.google.com/file/d/1-3gtnbGREF_4BuQwc4bKPefxNvSUEsbz/view', 'https://drive.google.com/file/d/1d6jeFyRtLGW41eFurTNa05BmET4Db1wl/view', 'https://drive.google.com/file/d/1sYwCRdKLVJNcEFTmx7s9cSOI1Bo6RnFA/view', 'https://drive.google.com/file/d/1ffoGxjSYkD18MtIdPDQgfYYX75i49zID/view', 'https://drive.google.com/file/d/1ep_-a6-uytCVHZmY7OGVCvulercME4-L/view', 'https://drive.google.com/file/d/1OrVpcFOc_h5QKc3sBWLeUcyTdnNEKT1_/view', 'https://drive.google.com/file/d/1B_p2GZ2uumSoqcYl_XPeRNWaeC2EitRx/view', 'https://drive.google.com/file/d/1Vlf3_BOofw_s8uk3rzDomqoJlNTXhVba/view']