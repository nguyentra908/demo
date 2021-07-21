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


  renderTabView() {
    const { selectedTabName } = this.state;
    const { product } = this.props;
    switch (selectedTabName) {
      case "description":
        return <Descriptions product={product}/>
      // case "additionalInformation":
      //   return <AdditionalInformation />
      case "review":
        return <Reviews />
      default:
        return <Reviews />;
    }

  }

  render() {
    return (
      <div className="tabs_section_container">
        <div className="container">
          <TabSelector onTabChanged={this.onTabChanged} />
          <div className="row">
            <div className="col">
              {
                this.renderTabView()
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
