
import 'antd/dist/antd.css';
import React from 'react';
import image1 from './images/tangtoc.jpg'
import {Questions} from './question';

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
      click: -1
    }
  }

  step1(){
    return (
      <div>
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
              step: 2,
              deadline: Date.now() + 1000 * 60 * 10 + 1000
            })
          }}
        >
          START
        </button> */}
        <img src={image1} alt="" style={{width: '100%'}}onClick={e => {
            this.setState({
              step: 2,
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
        if(this.state.questions1 === Questions.length - 1){
          this.setState({
            step: 3
          })
        } else {
          this.setState({
            click: -1,
            questions1: question
          })
        }
      }, 2000)
    }
    return(
      <div
      
      style={{
        padding: 40,
        paddingTop: 150
      }}>
        <Row>
          <Col span={18} style={{paddingRight: 50}}>
            <div>
              {
                this.renderQuestion()
              }
            </div>
          </Col>
          <Col span={6}>
              <div>
                <div
                  style={{
                    border: '1px solid #000',
                    borderRadius: 10,
                    backgroundColor: '#d8c3ff',
                    padding: 30,
                    marginBottom: 50
                  }}
                >
                  <span
                      style={{
                        color: 'yellow',
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
                <div 
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #000',
                    borderRadius: 10,
                    padding: 30,
                    height: 150
                  }}
                >
                  {/* {
                    this.state.click >= 0 && 
                    <div
                    style={{
                      fontSize: 32,
                      fontWeight: 700,
                      color: "red",
                    }}
                  >
                    ĐÁP ÁN
                  </div>
                  } */}
                  <div
                  style={{
                    fontWeight: 700,
                    fontSize: 48,
                    textAlign: 'center'
                  }}>
                  {
                    this.state.click >= 0 && (
                      Questions[this.state.questions1].true === 0 ? "A" 
                        :
                      Questions[this.state.questions1].true === 1 ? "B" 
                        :
                      Questions[this.state.questions1].true === 2 && "C" 
                    )
                  }
                  </div>
                </div>
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
                Câu hỏi {`${this.state.questions1 + 1}`} : {Questions[this.state.questions1].question}
              </div>
              <div
                style={{
                  backgroundColor: '#6bc259',
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
                  color: this.state.click === 0 && Questions[this.state.questions1].true !== 0 ? 'red' : this.state.click === 0 && Questions[this.state.questions1].true === 0 ? 'green' : '#000',
                  fontSize: 28
                }}
                onClick={e => {
                  if(this.state.click >= 0){
                    return true;
                  }
                  let score =  this.state.score;
                  if(Questions[this.state.questions1].true === 0){
                    score += 2;
                  }
                  this.setState({
                    score: score,
                    click: 0
                  })
                }}
              >
                A. {Questions[this.state.questions1].answer[0]}
              </div>
              <div
                style={{
                  paddingLeft: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  cursor: 'pointer',
                  color: this.state.click === 1 && Questions[this.state.questions1].true !== 1 ? 'red' : this.state.click === 1 && Questions[this.state.questions1].true === 1 ? 'green' : '#000',
                  fontSize: 28
                }}
                onClick={e => {
                  if(this.state.click >= 0){
                    return true;
                  }
                  let score =  this.state.score;
                  if(Questions[this.state.questions1].true === 1){
                    score += 2;
                  }
                  this.setState({
                    score: score,
                    click: 1
                  })
                }}
              >
                B. {Questions[this.state.questions1].answer[1]}
              </div>
              <div
                style={{
                  paddingLeft: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  cursor: 'pointer',
                  color: this.state.click === 2 && Questions[this.state.questions1].true !== 2 ? 'red' : this.state.click === 2 && Questions[this.state.questions1].true === 2 ? 'green' : '#000',
                  fontSize: 28
                }}
                onClick={e => {
                  if(this.state.click >= 0){
                    return true;
                  }
                  let score =  this.state.score;
                  if(Questions[this.state.questions1].true === 2){
                    score += 2;
                  }
                  this.setState({
                    score: score,
                    click: 2
                  })
                }}
              >
                C. {Questions[this.state.questions1].answer[2]}
              </div>
              </div>
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
            &&
          this.step3()
       }
      </div>
    )
  }
}

export default App;
