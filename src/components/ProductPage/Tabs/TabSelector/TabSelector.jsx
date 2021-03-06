import React, { Component } from "react";
import cx from "classnames";

import "./TabSelector.css";

export default class TabSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTabName: "description"
    };

    this.changeSelectedTab = this.changeSelectedTab.bind(this);
  }

  changeSelectedTab(tabName) {
    if (!tabName) return;

    if(tabName === 'back'){
      window.history.back()
    }

    this.setState({
      selectedTabName: tabName
    });

    const { onTabChanged } = this.props;
    if (onTabChanged) {
      onTabChanged(tabName);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="tabs_container">
            <ul className="d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
              <li
                className={cx("tab", {
                  active: this.state.selectedTabName === "description"
                })}
                onClick={() => this.changeSelectedTab("description")}
              >
                <span>Description</span>
              </li>
              
              <li
                className={cx("tab", {
                  active: this.state.selectedTabName === "review"
                })}
                onClick={() => this.changeSelectedTab("review")}
              >
                <span>Comment (2)</span>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
