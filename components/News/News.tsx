import React, { ReactElement, useState } from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import styles from "./news.module.scss";
import { types } from "util";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getNews } from "../../redux/Actions/actions";

// interface values {
//   key: string;
// }
const { Search } = Input;
const NewsReader = ({items , getNewsHandler}) => {
  const [key, setKey] = useState("");
  const handleSubmit = () => {
    getNewsHandler(key);
  };

  return (
    <div className={styles.container}>
      <Search
        placeholder="input search text"
        onSearch={handleSubmit}
        enterButton
        style={{ width: 400 }}
        onChange={(e) => setKey(e.target.value)}
      />
      <br />
      <br />
    </div>
  );
};

NewsReader.propTypes = {
  getNewsHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    items: state.news,
  };
};

const mapDispatchToProps =(dispatch) => {
  return({
    getNewsHandler: text => {dispatch(getNews(text))}
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsReader);
