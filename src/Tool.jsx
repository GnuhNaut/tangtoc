
import 'antd/dist/antd.css';
import React from 'react';
import {
  Upload,
  Button,
  Input
} from 'antd';


class Tool extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        fileName: 'Oanhgia123'
    }
  }

  render(){
    return (
      <div style={{height: "100vh"}}>
        <div >
        <div  style={{fontSize: '3rem', fontWeight: 700, marginRight: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3rem'}}>
        Bé Oanh cute mời mọi người kéo file vào đây
        </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3rem'}}>
      <Upload
          accept=".txt"
          showUploadList={false}
          beforeUpload={file => {
              const reader = new FileReader();
              this.setState({
                csvName: file.name
            })
              reader.onload = e => {
                  console.log(e)
                  console.log(e.target.result);
                  var contents = e.target.result;
                  var data = contents.split(/\r?\n/);
                  var res = '';
                  data.forEach(line =>  {
                    if(!(line.includes('[') && line.includes(']')) && line != ''){
                        res = res + line + ' |1|\n' ;
                        console.log('line', line)
                    }
                    // console.log('data', res)
                    this.setState({data: res})
                });
              };
              reader.readAsText(file);
              return false;
          }}
      >
          <div style={{
              display: "flex",
              padding: 20,
              width: "100%",
              border: 'dashed 2px rgb(68, 179, 207)',
              borderRadius: 6,
              cursor: 'pointer'
          }}>
              <div
                  style={{padding: "0 15px"}}
              >
                  <svg id="csv-file-format" xmlns="http://www.w3.org/2000/svg" width="47.46" height="52.733" viewBox="0 0 47.46 52.733">
                      <path id="Path_10572" data-name="Path 10572" d="M16.789,42.277V26.457A1.763,1.763,0,0,1,18.547,24.7H48.429V9.758A1.763,1.763,0,0,0,46.671,8H19.426v8.789a1.758,1.758,0,0,1-1.758,1.758H8V57.218a1.763,1.763,0,0,0,1.758,1.758H46.671a1.763,1.763,0,0,0,1.758-1.758V44.034H18.547A1.763,1.763,0,0,1,16.789,42.277Zm0,0" transform="translate(-7.121 -7.121)" fill="#9bc9ff"/>
                      <g id="Group_2604" data-name="Group 2604" transform="translate(0)">
                          <path id="Path_10573" data-name="Path 10573" d="M114.637,193.758h3.516a.879.879,0,0,1,.879.879.879.879,0,0,0,1.758,0A2.637,2.637,0,0,0,118.152,192h-3.516A2.637,2.637,0,0,0,112,194.637v7.031a2.637,2.637,0,0,0,2.637,2.637h3.516a2.637,2.637,0,0,0,2.637-2.637.879.879,0,0,0-1.758,0,.879.879,0,0,1-.879.879h-3.516a.879.879,0,0,1-.879-.879v-7.031A.879.879,0,0,1,114.637,193.758Zm0,0" transform="translate(-99.696 -170.907)" fill="#1e81ce"/>
                          <path id="Path_10574" data-name="Path 10574" d="M214.151,197.273h-3.516a.879.879,0,0,1-.879-.879v-1.758a.879.879,0,0,1,.879-.879h3.56a.83.83,0,0,1,.6.251.846.846,0,0,1,.237.627.879.879,0,0,0,1.758.018A2.593,2.593,0,0,0,214.2,192h-3.56A2.637,2.637,0,0,0,208,194.637v1.758a2.637,2.637,0,0,0,2.637,2.637h3.516a.879.879,0,0,1,.879.879v1.758a.879.879,0,0,1-.879.879h-3.516a.887.887,0,0,1-.879-.9.868.868,0,0,0-.879-.851h-.015a.889.889,0,0,0-.864.9,2.647,2.647,0,0,0,2.637,2.6h3.516a2.637,2.637,0,0,0,2.637-2.637V199.91A2.637,2.637,0,0,0,214.151,197.273Zm0,0" transform="translate(-185.148 -170.907)" fill="#1e81ce"/>
                          <path id="Path_10575" data-name="Path 10575" d="M314,192.065a.878.878,0,0,0-1.149.473l-3.583,8.6-3.583-8.6a.879.879,0,1,0-1.622.676l4.394,10.547a.879.879,0,0,0,1.622,0l4.394-10.547A.878.878,0,0,0,314,192.065Zm0,0" transform="translate(-270.6 -170.904)" fill="#1e81ce"/>
                          <path id="Path_10576" data-name="Path 10576" d="M44.823,16.7H42.187V2.637A2.637,2.637,0,0,0,39.55,0H12.3c-.018,0-.034.009-.053.01a.89.89,0,0,0-.209.039.774.774,0,0,0-.083.026.865.865,0,0,0-.251.158L.283,10.781a.853.853,0,0,0-.187.263.806.806,0,0,0-.033.088.863.863,0,0,0-.051.246c0,.018-.012.035-.012.054V50.1a2.637,2.637,0,0,0,2.637,2.637H39.55A2.637,2.637,0,0,0,42.187,50.1v-12.3h2.637a2.637,2.637,0,0,0,2.637-2.637V19.336A2.637,2.637,0,0,0,44.823,16.7ZM11.426,2.886V9.668a.879.879,0,0,1-.879.879H3.127Zm29,47.21a.879.879,0,0,1-.879.879H2.637a.879.879,0,0,1-.879-.879V12.3h8.789a2.637,2.637,0,0,0,2.637-2.637V1.758H39.55a.879.879,0,0,1,.879.879V16.7h-29a2.637,2.637,0,0,0-2.637,2.637v15.82a2.637,2.637,0,0,0,2.637,2.637h29ZM45.7,35.156a.879.879,0,0,1-.879.879h-33.4a.879.879,0,0,1-.879-.879V19.336a.879.879,0,0,1,.879-.879h33.4a.879.879,0,0,1,.879.879Zm0,0" transform="translate(0)" fill="#1e81ce"/>
                      </g>
                  </svg>
              </div>
              {
                  this.state.csvName ? (
                      <div>
                          <font style={{color: this.state.errorUploadCSV ? "#ff4d4f" : "#44B3CF"}}>
                              {this.state.csvName}
                          </font>
                      </div>
                  ) : (
                      <div>
                          Drag & Drop, or {" "}
                          <font style={{color: "#44B3CF"}}>
                              browse
                          </font>
                          {" "}
                          your file
                      </div>
                  )
              }
          </div>
      </Upload> 
      </div>
      </div>
              {
                this.state.data &&
                <div style={{textAlign: 'center', marginTop: 20}}>
                    <Button
                        type='primary'
                        onClick={e=>{
                            const element = document.createElement("a");
                            const file = new Blob([this.state.data], {type: 'text/plain'});
                            element.href = URL.createObjectURL(file);
                            element.download = "seeding.txt";
                            document.body.appendChild(element); 
                            element.click();
                        }}
                    >
                        Tải ở đây nha :)
                    </Button>
                </div>
              }
        <div style={{textAlign: 'center', fontSize: 30, fontWeight: 700, marginTop: 100, position: 'fixed', bottom: 0, width: '100%'}}>
            Made by Gunh Naut
        </div>
      </div>
    )
  }
}

export default Tool;
