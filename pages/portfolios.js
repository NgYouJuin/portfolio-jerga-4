import axios from "axios";
// import Link from "next/link";
import { Link } from '../routes';
import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = [];
    try {
      // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      // posts = res.data
      posts = await [
        {
          id: '1',
          title: 'Title',
          body: 'Body'
        }
      ]
    } catch (e) {
      console.error(e)
    }
    return {posts: posts.slice(0,10)}
  }
  render(){
    const {posts} = this.props
    return (
      <BaseLayout>
      <BasePage>
        <h1>I am Portfolios Page</h1>
        <ul>
          {posts.map(post =>
            <li key={post.id} style={{'fontSize': '20px'}}>
              <Link route={`/portfolios/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
            )}
        </ul>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Portfolios;