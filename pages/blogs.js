import React from "react";
import BasePage from "../components/BasePage";
import BaseLayout from "../components/layouts/BaseLayout";

class Blog extends React.Component {
  render(){
    return (
      <BaseLayout>
        <BasePage>
          <h1>I am Blog Page</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Blog;