
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
      }, 2000)
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
                <div
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
                    fontSize: 78,
                    textAlign: 'center'
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
                  color: this.state.click === 0 && this.state.questions[this.state.questions1].true !== 0 ? 'red' : this.state.click === 0 && this.state.questions[this.state.questions1].true === 0 ? 'green' : '#000',
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
                  color: this.state.click === 1 && this.state.questions[this.state.questions1].true !== 1 ? 'red' : this.state.click === 1 && this.state.questions[this.state.questions1].true === 1 ? 'green' : '#000',
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
                  color: this.state.click === 2 && this.state.questions[this.state.questions1].true !== 2 ? 'red' : this.state.click === 2 && this.state.questions[this.state.questions1].true === 2 ? 'green' : '#000',
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
                  color: this.state.click === 3 && this.state.questions[this.state.questions1].true !== 3 ? 'red' : this.state.click === 3 && this.state.questions[this.state.questions1].true === 3 ? 'green' : '#000',
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
