
import 'antd/dist/antd.css';
import React from 'react';
import image1 from './images/tangtoc.jpg'
import {Questions1, Questions2, Questions3, Questions4} from './question';
import ok2 from './images/ok2.png';
import d1 from './images/d1.png';
import d2 from './images/d2.png';
import d3 from './images/d3.png';
import d4 from './images/d4.png';

import {
  Statistic,
  Row,
  Col
} from 'antd';
const { Countdown } = Statistic;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      step: 1,
      score: 0,
      questions1: 0,
      click: -1,
    }
  }

  step1(){
    return (
      <div className='step1'>
        {/* <button
          style={{
            position: 'absolute',
            zIndex: 2,
            background: 'transparent',
            color: '#fff',
            border: '1px solid #fff',
            borderRadius: 30,
            left: '40%',
            bottom: '20%',
            height: 60,
            width: 200,
            fontSize: 32,
            fontWeight: 600,
            cursor: 'pointer'
          }}
          onClick={e => {
            this.setState({
              step: 4,
              deadline: Date.now() + 1000 * 60 * 10 + 1000
            })
          }}
        >
          START
        </button> */}
        <img src={image1} alt="" style={{width: '100%'}}onClick={e => {
            this.setState({
              step: 4,
              deadline: Date.now() + 1000 * 60 * 10 + 1000
            })
          }} />
      </div>
    )
  }
  step2 = () => {
    if(this.state.click >= 0){
      
      let question = this.state.questions1 + 1
      setTimeout(e=>{
        if(question === this.state.questions.length){
          this.setState({
            step: 3
          })
        } else {
          this.setState({
            click: -1,
            questions1: question
          })
        }
      }, 1000)
    }
    return(
      <div
      
      style={{
        padding: 40,
      }}>
        <div
          style={{
            cursor: 'pointer',
            color: '#000',
            fontWeight: 600,
            fontSize: 24,
            paddingBottom: 50
          }}
          onClick={e=>{
            this.setState({
              step: 4,
              score: 0,
              click: -1,
              questions1: 0,
              deadline: Date.now() + 1000 * 60 * 10 + 1000
            })
          }}
        >
          BACK
        </div>
        <Row>
          <Col span={17} style={{paddingRight: 50}}>
            <div>
              {
                this.renderQuestion()
              }
            </div>
          </Col>
          <Col span={7}>
              <div>
                <div
                  style={{
                    border: '1px solid #000',
                    borderRadius: 10,
                    backgroundColor: '#d8c3ff',
                    padding: "60px 40px",
                    marginBottom: 35
                  }}
                >
                  <span
                      style={{
                        color: 'red',
                        fontWeight: 600,
                        fontSize: 36,
                        textAlign: 'center'
                      }}
                    >
                      Điểm: {' '+ this.state.score}
                    </span>
                    <Countdown value={this.state.deadline} format="mm:ss" onFinish={e=>{
                      this.setState({
                        click: -1,
                        step: 3
                      })
                    }}/>
                </div>
                {/* <div
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                    }}
                  >
                    ĐÁP ÁN
                  </div>
                <div 
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #000',
                    borderRadius: 10,
                    padding: 30,
                    height: 160
                  }}
                >
                  <div
                  style={{
                    fontWeight: 700,
                    fontSize: 78,
                    textAlign: 'center',
                    // color: 'red'
                  }}>
                  {
                    this.state.click >= 0 && (
                      this.state.questions[this.state.questions1].true === 0 ? "A" 
                        :
                        this.state.questions[this.state.questions1].true === 1 ? "B" 
                        :
                        this.state.questions[this.state.questions1].true === 2 ? "C" 
                        :
                        this.state.questions[this.state.questions1].true === 3 && "D" 
                    )
                  }
                  </div>
                </div> */}
              </div>
          </Col>
        </Row>
      </div>
    )
  }

  step3=() => {
    return (
      <div
        style={{
          padding:200,
          textAlign: 'center',
          color: 'yellow'
        }}
      >
        <span
            style={{
              color: 'blue',
              fontWeight: 600,
              fontSize: 36
            }}
          >
            Chúc mừng đội bạn đạt được <br />
            Điểm: {" " + this.state.score}
          </span>
          <button
            style={{
              border: '1px solid #000',
              color: '#000',
              fontSize: 24,
              fontWeight: 600,
              minHeight: 50,
              minWidth: 200,
              borderRadius: 20,
              cursor: 'pointer',
              display: 'block',
              margin: 'auto',
              marginTop: 50,
            }}
            onClick={e=>{
              this.setState({
                step: 4,
                score: 0,
                click: -1,
                questions1: 0,
                deadline: Date.now() + 1000 * 60 * 10 + 1000
              })
            }}
          >
            Play again!
          </button>
      </div>
    )
  }

  renderQuestion = () => {
    return (
      <div
      >
        
        <div>
              <div
                style={{
                  color: '#ff2a00',
                  fontSize: 32,
                  fontWeight: 600,
                  border: '1px solid #000',
                  backgroundColor: '#fff',
                  padding: 30,
                  borderRadius: '12px 12px 0 0'
                }}
              >
                Câu hỏi {`${this.state.questions1 + 1}`} : {this.state.questions[this.state.questions1].question}
              </div>
              <div
                style={{
                  backgroundColor: '#f5eaac',
                  border: '1px solid #000',
                  borderTop: 0,
                  padding: 30,
                  borderRadius: '0 0 12px 12px'
                }}
              >

              <div
                style={{
                  paddingLeft: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  cursor: 'pointer',
                  color: this.state.click === 0 && this.state.questions[this.state.questions1].true !== 0 ? 'red' : this.state.click >= 0 && this.state.questions[this.state.questions1].true === 0 ? '#02c002' : '#000',
                  fontSize: 28
                }}
                className='ans1'
                onClick={e => {
                  if(this.state.click >= 0){
                    return true;
                  }
                  let score =  this.state.score;
                  if(this.state.questions[this.state.questions1].true === 0){
                    score += 2;
                  }
                  this.setState({
                    score: score,
                    click: 0
                  })
                }}
              >
                A. {this.state.questions[this.state.questions1].answer[0]}
              </div>
              <div
                style={{
                  paddingLeft: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  cursor: 'pointer',
                  color: this.state.click === 1 && this.state.questions[this.state.questions1].true !== 1 ? 'red' : this.state.click >=0 && this.state.questions[this.state.questions1].true === 1 ? '#02c002' : '#000',
                  fontSize: 28
                }}

                className='ans1'
                onClick={e => {
                  if(this.state.click >= 0){
                    return true;
                  }
                  let score =  this.state.score;
                  if(this.state.questions[this.state.questions1].true === 1){
                    score += 2;
                  }
                  this.setState({
                    score: score,
                    click: 1
                  })
                }}
              >
                B. {this.state.questions[this.state.questions1].answer[1]}
              </div>
              <div
                style={{
                  paddingLeft: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  cursor: 'pointer',
                  color: this.state.click === 2 && this.state.questions[this.state.questions1].true !== 2 ? 'red' : this.state.click >=0 && this.state.questions[this.state.questions1].true === 2 ? '#02c002' : '#000',
                  fontSize: 28
                }}

                className='ans1'
                onClick={e => {
                  if(this.state.click >= 0){
                    return true;
                  }
                  let score =  this.state.score;
                  if(this.state.questions[this.state.questions1].true === 2){
                    score += 2;
                  }
                  this.setState({
                    score: score,
                    click: 2
                  })
                }}
              >
                C. {this.state.questions[this.state.questions1].answer[2]}
              </div>
              <div
                style={{
                  paddingLeft: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  cursor: 'pointer',
                  color: this.state.click === 3 && this.state.questions[this.state.questions1].true !== 3 ? 'red' : this.state.click >=0 && this.state.questions[this.state.questions1].true === 3 ? '#02c002' : '#000',
                  fontSize: 28
                }}
                className='ans1'
                onClick={e => {
                  if(this.state.click >= 0){
                    return true;
                  }
                  let score =  this.state.score;
                  if(this.state.questions[this.state.questions1].true === 3){
                    score += 2;
                  }
                  this.setState({
                    score: score,
                    click: 3
                  })
                }}
              >
                D. {this.state.questions[this.state.questions1].answer[3]}
              </div>
              </div>
            </div>
      </div>
    )
  }
  step22 = () => {
    return(
      <div>
        <div
          style={{
            textAlign: 'center',
            paddingBottom: 60
          }}
        >
          <img src={ok2} alt="" />
        </div>
        <div>
          <Row>
            <Col
              style={{
                margin: 'auto',
                textAlign: 'center'
              }}
              span={6}
            >
              <img src={d1} alt="" style={{cursor: 'pointer'}} onClick={e=>{
                this.setState({
                  step: 2,
                  questions: Questions1
                })
              }}/>
            </Col>
            <Col
              style={{
                margin: 'auto',
                textAlign: 'center'
              }}
              span={6}
            >
              <img src={d2} alt="" style={{cursor: 'pointer'}} onClick={e=>{
                this.setState({
                  step: 2,
                  questions: Questions2
                })
              }} />
            </Col>
            <Col
              style={{
                margin: 'auto',
                textAlign: 'center'
              }}
              span={6}
            >
              <img src={d3} alt="" style={{cursor: 'pointer'}} onClick={e=>{
                this.setState({
                  step: 2,
                  questions: Questions3
                })
              }}/>
            </Col>
            <Col
              style={{
                margin: 'auto',
                textAlign: 'center'
              }}
              span={6}
            >
              <img src={d4} alt="" style={{cursor: 'pointer'}} onClick={e=>{
                this.setState({
                  step: 2,
                  questions: Questions4
                })
              }} />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
  render(){
    return (
      <div className='main-bk'>
       {
          this.state.step === 1 
            ? 
          this.step1() 
            : 
          this.state.step === 2
            ? 
          this.step2()
            :
          this.state.step === 3 
            ?
          this.step3()
            :
          this.state.step === 4
            &&
          this.step22()
       }
      </div>
    )
  }
}

export default App;
{/* <Upload
                                                                                        accept=".csv"
                                                                                        showUploadList={false}
                                                                                        beforeUpload={file => {
                                                                                            const reader = new FileReader();
                                                                                            console.log(file)
                                                                                            let ext = file.name.split(".");
                                                                                            const isCSV = ext[ext.length - 1]  === "csv";
                                                                                            this.setState({
                                                                                                csvName: file.name
                                                                                            })
                                                                                            if (!isCSV) {
                                                                                                message.error('You can only upload CSV file!');
                                                                                                this.setState({
                                                                                                    errorUploadCSV: true,
                                                                                                    dataCSV: false
                                                                                                })
                                                                                                return false;
                                                                                            }
                                                                                            reader.onload = e => {
                                                                                                console.log(e)
                                                                                                console.log(e.target.result);
                                                                                                var contents = e.target.result;
                                                                                                if(contents == "Product ID,Meta Title,Meta Description" || !contents.includes("Product ID,Meta Title,Meta Description")){
                                                                                                    message.error('Please upload another CSV file!');
                                                                                                    this.setState({
                                                                                                        errorUploadCSV: true,
                                                                                                        dataCSV: false
                                                                                                    })
                                                                                                    return false
                                                                                                }
                                                                                                var lines = contents.split("\n"), output = [];
                                                                                                for (var i=1; i<lines.length; i++){ // test owr day commit phair sua
                                                                                                    let temp = []
                                                                                                    var arr1 = lines[i].split(",")
                                                                                                    temp.push(arr1) // test owr day commit phair sua
                                                                                                    output.push(temp)
                                                                                                }
                                                                                                console.log(output)
                                                                                                this.setState({
                                                                                                    dataCSV: output,
                                                                                                    errorUploadCSV: false
                                                                                                })
                                                                                            };
                                                                                            reader.readAsText(file);
                                                                                            return false;
                                                                                        }}
                                                                                    >
                                                                                        <div style={{
                                                                                            display: "flex",
                                                                                            padding: "15px 8px",
                                                                                            width: "100%"
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
                                                                                    </Upload> */}