import React, { Component } from 'react';
var mqtt = require('mqtt');
var options = {
  protocol: 'mqtts',
  // clientId uniquely identifies client
  // choose any string you wish
  clientId: 'b0908853'
};
var client;
class Mqtt extends Component {

  clientMount() {
    client = mqtt.connect(`mqtt://${this.state.conn_string}:${this.state.conn_port}`, options)
  }

  //test.mosquitto.org:8081

  loadMQTT = () => {
    this.clientMount();
    var that = this;
    client.on('connect', function (err) {
      if (err) {
        that.setState({ status_mqtt: false })
      }
      else {
        console.log('error')
      }

    })

  }

  sendMessage = () => {
    this.clientMount();
    var that = this;
    client.subscribe(`${that.state.topic}`, function (err) {
      if (!err) {
        client.publish(`${that.state.topic}`, `${that.state.message}`);
      }
    })

    client.on('message', function (topic, message) {
      alert(message.toString());
      client.end();
    });

  }
  constructor(props) {
    super(props)
    this.state = {
      conn_string: '',
      conn_port: '',
      topic: '',
      status_mqtt: true,
      message: '',

    }
  }

  render() {
    let content
    if (this.state.status_mqtt) {
      content =
        <div className="container">
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
            <div className="justify-content-center">
              <div className="form-group">
                <input type="text" className="form-control mb-1" placeholder="connection_string" onChange={event => {
                  let x = event.target.value;
                  this.setState({ conn_string: x })
                }} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="connnection_port" onChange={event => {
                  let x = event.target.value;
                  this.setState({ conn_port: x })
                }} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control mt-1" placeholder="topic_to_subscribe" onChange={event => {
                  let x = event.target.value;
                  this.setState({ topic: x })
                }} />
              </div>
              <button className="btn btn-secondary mt-1" onClick={this.loadMQTT}>Connect to MQTT</button>
              <div className="alert alert-light" role="alert">
                connection = test.mosquitto.org
                port = 8081
                topic = presence
              </div>
            </div>
          </div>
        </div>
    }
    else {
      content =
        <div className="justify-content-center col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
          <div className="form-group">
            <input type="text" className="form-control mt-1" placeholder="message_to_send" onChange={event => {
              let x = event.target.value;
              this.setState({ message: x })
            }} />
          </div>
          <button className="btn btn-secondary mt-1" onClick={this.sendMessage}>Send Message</button>
        </div>
    }
    return (
      <div>
        {content}
      </div>

    );
  }
}

export default Mqtt;