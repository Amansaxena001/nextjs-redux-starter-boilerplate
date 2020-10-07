import React, { ReactElement, useState } from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import styles from "./news.module.scss";
import { types } from "util";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { getNews } from "../../redux/Actions/actions";

// interface values {
//   key: string;
// }
const { Search } = Input;
const NewsReader = () => {
  const [key, setKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(key);
    getNews(key);
  };

  return (
    <div className={styles.container}>
      <Search
        placeholder="input search text"
        onSearch={(value) => console.log(value)}
        enterButton
        style={{ width: 400 }}
        onChange={(e) => setKey(e.target.value)}
        onSubmit={handleSubmit}
      />
      <br />
      <br />
    </div>
  );
};

export default connect()(NewsReader);
