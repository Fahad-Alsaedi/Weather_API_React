import React, { Component } from "react";
export class Dashbard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.tasks);

    const data1 = new Date().getTime();
    return (
      <div>
        <div class="container-fluid px-1 px-md-4 py-5 mx-auto">
          <button
            onClick={() => {
              this.props.deleteSelectCard(this.props.index);
            }}
          >
            &#10060;
          </button>
          
          <div class="row d-flex justify-content-center px-3">
            <div class="card">
              <h2 class="ml-auto mr-4 mt-3 mb-0">{this.props.tasks.name}</h2>
              <p class="ml-auto mr-4 mb-0 med-font">
                {" "}
                {this.props.tasks.weather && this.props.tasks.weather[0].main}
              </p>
              <h1 class="ml-auto mr-4 large-font">
                {this.props.tasks.main && this.props.tasks.main.temp}&#176;
              </h1>

              <p class="ml-auto mr-4 mb-0 med-font">
                H: {this.props.tasks.main && this.props.tasks.main.humidity}
              </p>
              <p class="time-font mb-4 ml-4 mt-auto">
                {" "}
                <span class="sm-font">
                  {" "}
                  wind speed:{" "}
                  {this.props.tasks.weather && this.props.tasks.wind.speed}
                </span>
              </p>
              <p class="ml-4 mb-4">get date</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashbard;
