import React, { Component } from "react";

import TabSelector from "./TabSelector/TabSelector";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";
import Reviews from "./Reviews/Reviews";
import Descriptions from "./Descriptions/Descriptions";

import "./Tabs.css";

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTabName: "description"
    };

    this.onTabChanged = this.onTabChanged.bind(this);
  }

  onTabChanged(tabName) {
    if (!tabName) return;

    this.setState({
      selectedTabName: tabName
    });
  }

  render() {
    return (
      <div className="tabs_section_container">
        <div className="container">
          <TabSelector onTabChanged={this.onTabChanged} />
          <div className="row">
            <div className="col">
              {this.state.selectedTabName === "description" && <Descriptions />}
              {this.state.selectedTabName === "additionalInformation" && (
                <AdditionalInformation />
              )}
              {this.state.selectedTabName === "review" && <Reviews />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
