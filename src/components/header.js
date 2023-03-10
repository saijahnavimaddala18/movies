import React from "react";
import logo from "../media/Netflix.png";
import { Input } from "antd";
import { BellOutlined, UserOutlined } from "@ant-design/icons";

import styles from "../styles/header.module.scss";
const { Search } = Input;
export default function Header() {
    const onSearch = (value) => console.log(value);
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <img className={styles.logo} src={logo} alt="netflix" />

                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Series</li>
                    <li className={styles.listItem}>Films</li>
                    <li className={styles.listItem}>New & Poupular</li>
                    <li className={styles.listItem}>My List</li>
                    <li className={styles.listItem}>Browse & Language</li>
                </ul>

            </div>
            <div className={styles.left}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Search
                            placeholder="Input search text"
                            onSearch={onSearch}
                            style={{
                                width: 200,
                            }} />
                    </li>
                    <li className={styles.listItem}>Children</li>
                    <li className={styles.listItem}>DVD</li>
                    <li className={styles.listItem}><BellOutlined /></li>
                    <li className={styles.listItem}><UserOutlined /></li>
                </ul>
            </div>
        </div>
    )
}

